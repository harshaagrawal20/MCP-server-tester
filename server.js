const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios');
const path = require("path");

const app = express();
const PORT = 5000;

// CORS configuration: Allow all origins for development purposes or specify specific domains
app.use(cors({
    origin: '*', // Replace '*' with specific domains for production (e.g., 'https://yourfrontenddomain.com')
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));

// Middleware for parsing JSON body
app.use(bodyParser.json());

// Route for MCP Testing
app.post('/test-mcp', async (req, res) => {
    try {
        const { serverConfig } = req.body;
        if (!serverConfig || !serverConfig.url) {
            return res.status(400).json({ success: false, message: "❌ Invalid server configuration" });
        }

        let serverUrl = serverConfig.url.trim(); // Remove extra spaces
        serverUrl = serverUrl.replace(/\\/g, ""); // Remove all backslashes

        // Validate URL format
        try {
            new URL(serverUrl);
        } catch (err) {
            return res.status(400).json({ success: false, message: `❌ Invalid URL: ${serverUrl}` });
        }

        // Make a GET request with redirect disabled
        try {
            const response = await axios.get(serverUrl, {
                timeout: 5000,
                maxRedirects: 0, // 🚀 Prevents automatic redirects
                validateStatus: function (status) {
                    return true; // Allows capturing all HTTP responses, even errors
                }
            });

            // If the response is not 200, return the actual status code
            if (response.status !== 200) {
                return res.status(400).json({
                    success: false,
                    message: `❌ Server responded with status: ${response.status}`
                });
            }

            // Otherwise, return success
            return res.json({ success: true, message: `✅ Connected to ${serverUrl} (Status: ${response.status})` });

        } catch (error) {
            return res.status(400).json({
                success: false,
                message: `❌ Failed to connect to ${serverUrl}. Error: ${error.message}`,
            });
        }

    } catch (error) {
        res.status(500).json({ success: false, message: "❌ Internal Server Error" });
    }
});

// Serve frontend (static files from the "public" directory)
app.use(express.static(path.join(__dirname, "public")));

// Default route to serve the frontend (index.html)
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Start the server on specified port
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
