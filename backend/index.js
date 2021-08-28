const http = require("http");
const PORT = 3000;
const server = http.createServer();
const { createUser } = require("../backend/controllers/userController");
const { sendHtmlBack } = require("../backend/filemanager.js");

server.on("request", (request, response) => {
  const { method, url } = request;
  if (method === "GET" && url === "/") {
    sendHtmlBack("../res/index.html", response);
  } else if (method === "POST" && url === "/userin") {
    createUser(request, response);
  } else if (method === "POST" && url === "/userin") {
    console.log(`${method} request was mad to ${url} url...`);
    console.log("user wants to get out");
  }
});
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
