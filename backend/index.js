const http = require("http");
const PORT = 3000;
const server = http.createServer();
const formBody = require("body/form");
const jsonBody = require("body/json");

server.on("request", (request, response) => {
  const { method, url } = request;
  if (method === "GET" && url === "/") {
    console.log(`${method} request was mad to ${url} url...`);
    response.statusCode = 200;
    response.setHeader("Content-Type", "application/json");
    response.write(JSON.stringify({ data: "hello world" }));
    response.end();
  } else if (method === "POST" && url === "/userin") {
    jsonBody(request, {}, (err, body) => {
      try {
        console.log(JSON.stringify(body));
      } catch (err) {
        console.log(err);
      }
    });
    console.log(`${method} request was mad to ${url} url...`);
    response.statusCode = 200;
    response.setHeader("Content-Type", "application/json");
    response.write(JSON.stringify({ data: "received users will" }));
    response.end();
    console.log("user wants to enter");
  } else if (method === "POST" && url === "/userin") {
    console.log(`${method} request was mad to ${url} url...`);
    console.log("user wants to get out");
  }
});
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
