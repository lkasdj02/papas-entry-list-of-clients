// modules
const http = require("http");
const PORT = process.env.PORT || 3000;
const server = http.createServer();
const { insertUser } = require("../backend/controllers/userController.js");
const { insertEntry } = require("../backend/controllers/entryController.js");
const { sendHtmlBack } = require("../backend/filemanager.js");
// create server
server.on("request", (request, response) => {
  const { method, url } = request;
  if (method === "GET" && url === "/") {
    sendHtmlBack("../res/index.html", response);
  } else if (method === "POST" && url === "/createuser") {
    insertUser(request, response);
  } else if (method === "POST" && url === "/entry") {
    insertEntry(request, response);
  }
});

// open servers connection
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
