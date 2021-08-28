const http = require("http");
const PORT = 3000;
const server = http.createServer();

server.on("request", (request, response) => {
  const { method, url } = request;
  if (method === "GET" && url === "/") {
    console.log(`${method} request was mad to ${url} url...`);
    response.statusCode = 200;
    response.setHeader("Content-Type", "application/json");
    response.write(JSON.stringify({ data: "hello world" }));
    response.end();
  } else if (method === "POST" && url === "/userin") {
    console.log(`${method} request was mad to ${url} url...`);
    console.log("user wants to enter");
  } else if (method === "POST" && url === "/userin") {
    console.log(`${method} request was mad to ${url} url...`);
    console.log("user wants to get out");
  }
});
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
