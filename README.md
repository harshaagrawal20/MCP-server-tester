# MCP Server Tester 🔌





A sleek, modern web application for testing MCP server connectivity with real-time validation and beautiful visual feedback.

## Features ✨

- 🌈 **Glassmorphism UI** with animated elements
- ⚡ **Instant connection testing**
- 🛡️ **Robust error handling**
- 📱 **Fully responsive design**
- 🔄 **Interactive loading states**
- 📊 **Detailed connection diagnostics**

## Quick Start 🚀

### 1. Clone Repository

```sh
git clone https://github.com/harshaagrawal20/MCP-server-tester.git
cd MCP-server-tester
```

### 2. Install Dependencies

```sh
npm install
```

### 3. Start Development Server

```sh
node server.js
```

Then open [http://localhost:5000](http://localhost:5000) in your browser.

---

## Project Structure 🗂️

```
mcp-tester/
├── public/                # Frontend assets
│   ├── index.html         # Main application view
│   ├── styles.css         # Stunning glassmorphism styles
│   └── script.js          # Client-side logic
├── server.js              # Backend API server
├── package.json           # Dependencies
└── README.md              # You're here!
```

---

## API Endpoints 🌐

### `POST /test-mcp`

Validate MCP server connection.

#### Request:

```json
{
  "serverConfig": {
    "url": "https://example.com"
  }
}
```

#### Success Response:

```json
{
  "success": true,
  "message": "✅ Connected to https://example.com (Status: 200)"
}
```

#### Error Response:

```json
{
  "success": false,
  "message": "❌ Connection failed: Invalid URL"
}
```

---

## Configuration ⚙️

Customize settings in `server.js`:

```js
// Server configuration
const PORT = 5000;            // Change port
const TIMEOUT = 5000;         // Connection timeout (ms)
const MAX_REDIRECTS = 0;      // Disable redirects
```



## Tech Stack 💻

Frontend: HTML5, CSS3, JavaScript



Backend: Node.js, Express, Axios
