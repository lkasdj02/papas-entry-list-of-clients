const jsonBody = require("body/json");
const Url = require("url");
const fs = require("fs");
const lookup = require("mime-types").lookup;

function writeToFile(pathToFile, data) {
  fs.writeFileSync(pathToFile, JSON.stringify(data), "utf-8", (error) => {
    console.log(error);
  });
}

function sendFileBack(url, res) {
  // adding things in order to serve static file
  try {
    let parsedURL = Url.parse(url, true);
    //remove the leading and trailing slashes
    let path = parsedURL.path.replace(/^\/+|\/+$/g, "");

    if (path === "") {
      path = "index.html";
    }
    console.log(`Requested path ${path}`);
    let file = "../res/" + path;
    fs.readFile(file, function (err, content) {
      console.log("reading the file");
      if (err) {
        console.log(`File Not Found ${file}`);
        res.writeHead(404);
        res.end();
      } else {
        console.log(`Returning ${file}`);
        res.setHeader("X-Content-Type-Options", "nosniff");
        let mime = lookup(path);
        res.writeHead(200, { "Content-type": mime });
        // switch (mime) {
        //   case "style.css":
        //     res.writeHead(200, { "Content-Type": "text/css" });
        //     break;
        //   case "main.js":
        //     res.writeHead(200, { "Content-Type": "application/javascript" });
        //     break;
        //   case "index.html":
        //     res.writeHead(200, { "Content-Type": "text/html" });
        //     break;
        // }
        res.end(content);
      }
    });
  } catch (err) {
    console.log(err);
  }
}

function parseRequestToJson(req) {
  return new Promise((resolve, reject) => {
    try {
      jsonBody(req, {}, (err, body) => {
        console.log(body);
        resolve(body);
      });
    } catch (err) {
      reject(err);
    }
  });
}

module.exports = {
  writeToFile,
  parseRequestToJson,
  sendFileBack,
};
