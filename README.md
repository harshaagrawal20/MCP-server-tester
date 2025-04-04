# MCP Server Tester 🔌

![Glassmorphism UI](https://img.shields.io/badge/Design-Glassmorphism-blueviolet)
![Node.js](https://img.shields.io/badge/Backend-Node.js-success)
![Responsive](https://img.shields.io/badge/Responsive-Yes-brightgreen)

A modern web application for testing MCP server connectivity with real-time validation and beautiful visual feedback.

## Features ✨

- 🌈 **Glassmorphism UI** with animated elements
- ⚡ **Instant connection testing** (5000ms timeout)
- 🛡️ **Robust error handling** for various failure cases
- 📱 **Fully responsive design** (mobile & desktop)
- 🔄 **Interactive loading states** with visual feedback
- 📊 **Detailed connection diagnostics** with status codes

# video

drive link of project

https://drive.google.com/file/d/1ZxeIE7YEv2P0RaFJ8jNjgJ1lteVIvw1U/view?usp=sharing





# screenshots
![image](https://github.com/user-attachments/assets/317979e8-4d34-4e75-8c08-c75bf535d339)

![image](https://github.com/user-attachments/assets/40e7bc9a-3845-4ebd-a90f-8e8af74fda3f)

![image](https://github.com/user-attachments/assets/4e105e99-9766-4df8-a2f4-0a8476b58a62)

![image](https://github.com/user-attachments/assets/07dd4f3c-fd52-453c-b2b5-7a50560c7ae8)

![image](https://github.com/user-attachments/assets/66fb5cc2-f204-4bc6-8371-a136c6e5ea6c)

![image](https://github.com/user-attachments/assets/f0fbcb0e-a6be-40ad-9c0a-4268dd309a60)






##deployed link

https://mcp-tester-5dfzecpbb-harshaagrawal20s-projects.vercel.app/

## Quick Start 🚀

### 1. Clone Repository

```sh
git clone https://github.com/harshaagrawal20/MCP-server-tester.git
cd MCP-server-tester
```

### 2. Install Dependencies

```sh
npm install
npm install express cors body-parser axios
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
