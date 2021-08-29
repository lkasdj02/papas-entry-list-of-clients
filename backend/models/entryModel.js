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
    let a = users.persone.find(
      (person) => person.name === entry.name && person.uuid === entry.uuid
    );
    if (a) {
      data.push(entry);
      writeToFile(DATAPATH, data);
      resolve(1);
    } else {
      reject(2);
    }
  });
}

module.exports = {
  createEntry,
};
