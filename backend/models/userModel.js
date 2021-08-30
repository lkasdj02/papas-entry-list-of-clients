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
        console.log(users);
      } catch (err) {
        reject(2);
      }
    }, 2000);
  });
}
async function findId(id) {
  return new Promise((resolve, reject) => {
    try {
      let user = data.persone.find((u) => u.uuid === parseInt(id));
      console.log(user);
      if (user !== undefined) {
        resolve(user);
      }
      reject(new Error("resource not found"));
    } catch (error) {
      console.log(`something went wrong in the model ${error}`);
    }
  });
}

module.exports = {
  createUser,
  deleteUserId,
  findId,
};
