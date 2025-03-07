const http = require("http");
const fs = require("fs");
const path = require("path");

// Server creation
const server = http.createServer((req, res) => {
    if (req.method === "GET" && req.url === "/") {
        // Read HTML file
        const filePath = path.join(__dirname, "combined.html");
        fs.readFile(filePath, (err, data) => {
            if (err) {
                res.writeHead(500, { "Content-Type": "text/plain" });
                res.end("An error occurred on the server.");
            } else {
                res.writeHead(200, { "Content-Type": "text/html" });
                res.end(data);
            }
        });
    } else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("Page not found");
    }
});

// Start the server
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});