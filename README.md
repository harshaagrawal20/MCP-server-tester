
# MCP Server Tester 🔌

![Node.js](https://img.shields.io/badge/Node.js-14%2B-success) 
![Express](https://img.shields.io/badge/Express-4.x-blue)
![Glassmorphism](https://img.shields.io/badge/UI-Glassmorphism-blueviolet)

## Technical Approach 🛠️
**1. Minimalist Architecture**
- Single endpoint (`/test-mcp`) with layered validation
- Client-server separation (public/ vs server.js)
- Stateless operation (no database)

**2. Validation Pipeline**

Frontend → Sanitize Input → Validate URL → Test Connection → Return Diagnostics

- Removes backslashes/whitespace
- Verifies URL structure
- Tests actual connection with 5s timeout

**3. Key Features**
- Instant visual feedback (success/error states)
- Hardware-accelerated CSS animations
- Responsive glassmorphism design
- Detailed HTTP status reporting

## Quick Start 🚀

git clone https://github.com/harshaagrawal20/MCP-server-tester.git
cd MCP-server-tester
npm install express cors body-parser axios
node server.js

Access: [http://localhost:5000](http://localhost:5000)


## Video Demo
[Watch Demo](https://drive.google.com/file/d/1ZxeIE7YEv2P0RaFJ8jNjgJ1lteVIvw1U/view)


## Live Demo 🌐
[View Deployed Version](https://mcp-tester-5dfzecpbb-harshaagrawal20s-projects.vercel.app/)

## API Usage

POST /test-mcp
{"serverConfig": {"url": "https://example.com"}}

Response:
{"success": true|false, "message": "Status details"}


## Tech Stack 💻
| Component       | Technology       |
|----------------|------------------|
| Frontend       | HTML5, CSS3, ES6 |
| Backend        | Node.js, Express |
| HTTP Client    | Axios            |
| UI Framework   | Glassmorphism CSS|

## Configuration


const PORT = 5000; // Change port


const TIMEOUT = 5000;    // Adjust timeout


## Screenshots
![Success](https://github.com/user-attachments/assets/317979e8-4d34-4e75-8c08-c75bf535d339)
![Error](https://github.com/user-attachments/assets/40e7bc9a-3845-4ebd-a90f-8e8af74fda3f)


