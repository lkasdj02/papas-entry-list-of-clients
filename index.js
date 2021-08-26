const http = require("http");
const PORT = 3000;
const server = http.createServer();

server.listen(PORT, () => {
  console.log("listening on port 3000...");
});
server.on("request", (request, response) => {
  response.statusCode = 200;
  response.setHeader("Content-Type", "application/json");
  response.write({ data: "ciao" });
  response.end();
});
