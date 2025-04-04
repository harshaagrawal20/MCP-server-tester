

async function testMCP() {
    let serverUrl = document.getElementById("serverUrl").value.trim();
    const resultElement = document.getElementById("result");

    if (!serverUrl) {
        resultElement.innerText = "⚠️ Please enter an MCP Server URL!";
        resultElement.className = "error";
        return;
    }

    // Remove unnecessary backslashes
    serverUrl = serverUrl.replace(/\\/g, "");

    resultElement.innerText = "🔄 Testing connection...";
    resultElement.className = "";

    try {
        const response = await fetch("http://localhost:5000/test-mcp", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ serverConfig: { url: serverUrl } })
        });

        const data = await response.json();
        if (data.success) {
            resultElement.innerHTML = `✅ <span class="success">${data.message}</span>`;
        } else {
            resultElement.innerHTML = `❌ <span class="error">${data.message}</span>`;
        }
    } catch (error) {
        resultElement.innerHTML = `❌ <span class="error">Error: ${error.message}</span>`;
    }
}
