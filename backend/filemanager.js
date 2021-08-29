const jsonBody = require("body/json");
const fs = require("fs");

function writeToFile(pathToFile, data) {
  fs.writeFileSync(pathToFile, JSON.stringify(data), "utf-8", (error) => {
    console.log(error);
  });
}
function sendFileBack(pathToFile, response) {
  try {
    fs.readFile(pathToFile, (err, data) => {
      response.statusCode = 200;
      response.setHeader("Content-Type", "text/html");
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
  sendFileBack,
};
