const http = require("http");
const PORT = 3000;
const server = http.createServer();

server.listen(PORT, () => {
  console.log("listening on port 3000...");
});
server.on("request", (request, response) => {
  const { method, url } = request;
  if (method === "GET" && url === "/") {
    response.statusCode = 200;
    response.setHeader("Content-Type", "application/json");
    response.write(JSON.stringify({ data: "hello world" }));
    response.end();
  }
});
