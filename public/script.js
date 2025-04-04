async function testMCP() {
    const serverUrl = document.getElementById("serverUrl").value.trim();
    const resultElement = document.getElementById("result");

    // Check if the server URL is empty
    if (!serverUrl) {
        resultElement.innerText = "⚠️ Please enter an MCP Server URL!";
        resultElement.className = "error";
        return;
    }

    // Remove unnecessary backslashes from the URL
    const cleanedUrl = serverUrl.replace(/\\/g, "");

    // Indicate that the connection test is in progress
    resultElement.innerText = "🔄 Testing connection...";
    resultElement.className = "";

    try {
        // Send the request to the backend to test the MCP server connection
        const response = await fetch("http://localhost:5000/test-mcp", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ serverConfig: { url: cleanedUrl } })
        });

        // Check if the response status is ok (200-299)
        if (!response.ok) {
            resultElement.innerHTML = `❌ <span class="error">Failed to connect to the server. Status: ${response.status}</span>`;
            return;
        }

        const data = await response.json();
        
        // Handle the success or error based on the response
        if (data.success) {
            resultElement.innerHTML = `✅ <span class="success">${data.message}</span>`;
        } else {
            resultElement.innerHTML = `❌ <span class="error">${data.message}</span>`;
        }
    } catch (error) {
        // Handle any errors that occur during the fetch request
        resultElement.innerHTML = `❌ <span class="error">Error: ${error.message}</span>`;
    }
}
