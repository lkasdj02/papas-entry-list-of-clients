// modules
const http = require("http");
const PORT = process.env.PORT || 3000;
const server = http.createServer();
const { insertUser, deleteUser } = require("./controllers/userController.js");
const { insertEntry } = require("./controllers/entryController.js");
const { sendFileBack } = require("./filemanager.js");
// create server
server.on("request", (request, response) => {
  const { method, url } = request;
  if (method === "GET" && url === "/") {
    sendFileBack("../res/index.html", response);
  } else if (method === "POST" && url === "/createuser") {
    insertUser(request, response);
  } else if (method === "POST" && url.match("/deleteuser/[0-9]+")) {
    // delete user functionality
  } else if (method === "POST" && url === "/createentry") {
    insertEntry(request, response);
  }
});

// open servers connection
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
