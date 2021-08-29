const jsonBody = require("body/json");
const fs = require("fs");

function writeToFile(pathToFile, data) {
  fs.writeFileSync(pathToFile, JSON.stringify(data), "utf-8", (error) => {
    console.log(error);
  });
}
function sendHtmlBack(pathToFile, response) {
  try {
    fs.readFile(pathToFile, (err, data) => {
      response.statusCode = 200;
      response.setHeader("Content-Type", "text/html");
      console.log("html page sent");
      response.write(data);
      response.end();
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
  sendHtmlBack,
};
