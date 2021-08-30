const { writeToFile } = require("../filemanager.js");
const fs = require("fs");
const path = require("path");
const DATAPATH = path.join("../", "backend/", "data.json");
let data = require("../data.json"); // this might end up being a dynamic import

function createUser(name, surname, uuid) {
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
function deleteUserId(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        let users = data.persone.filter((user) => user.uuid !== id);
        writeToFile(DATAPATH, users);
        resolve(1);
      } catch (err) {
        reject(2);
      }
    }, 2000);
  });
}
function findId(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        let user = data.persone.find((u) => u.uuid === parseInt(id));
        if (user !== undefined) {
          resolve(user);
        } else {
          reject(new Error("resource not found"));
        }
      } catch (error) {
        console.log(`something went wrong in the model ${error}`);
      }
    }, 2000);
    console.log("fetching user data...");
  });
}

module.exports = {
  createUser,
  deleteUserId,
  findId,
};
