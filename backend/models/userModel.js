const { writeToFile } = require("../filemanager.js");
const fs = require("fs");
const path = require("path");
const DATAPATH = path.join("../", "backend/", "data.json");
let data = require("../data.json"); // this might end up being a dynamic import
console.log(data.persone);
console.log(DATAPATH);

function insertUser(name, surname, uuid) {
  return new Promise((resolve, reject) => {
    const user = {
      name: name,
      surname: surname,
      uuid: uuid,
    };
    data.persone.push(user);
    try {
      writeToFile(DATAPATH, data);
      resolve(1);
    } catch (err) {
      reject(err);
    }
  });
}

module.exports = {
  insertUser,
};
