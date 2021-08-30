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
  } else if (method === "DELETE" && url.match(/\/deleteuser\/\d+/g)) {
    console.log("mathches the url: " + url);
    let id = url.match(/\d+/g);
    deleteUser(request, response, id);
  } else if (method === "POST" && url === "/createentry") {
    insertEntry(request, response);
  } else {
    response.statusCode = 404;
    response.writeHead("Content-type", "application/json");
    response.write({ data: "resource not found" });
    response.end();
  }
});

// open servers connection
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
