const { writeToFile } = require("../filemanager.js");
const fs = require("fs");
const path = require("path");
const DATAPATH = path.join("../", "backend/", "entries.json");
let users = require("../data.json");
let data = require("../entries.json"); // this might end up being a dynamic import

function createEntry(name, uuid, hour) {
  return new Promise((resolve, reject) => {
    const entry = {
      name: name,
      uuid: uuid,
      hour: hour,
    };
    let a = users.find(
      (person) => person.name === name && person.uuid === uuid
    );
    if (a) {
      try {
        writeToFile(DATAPATH, data);
        resolve(1);
      } catch (err) {
        reject(`some error occurred ${err}...`);
      }
    } else {
      reject("user not found");
    }
  });
}

module.exports = {
  createEntry,
};
