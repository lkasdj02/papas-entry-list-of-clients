const fs = require("fs");
const { createUser, deleteUserId } = require("../models/userModel.js");
const { parseRequestToJson } = require("../filemanager.js");

async function insertUser(req, res) {
  try {
    let { name, surname, uuid } = await parseRequestToJson(req);
    let userStatus = await createUser(name, surname, uuid);
    if (userStatus === 1) {
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.write(JSON.stringify({ data: "user created" }));
      res.end();
    } else {
      throw "something went wrong";
    }
  } catch (err) {
    console.error(err);
  }
}

async function deleteUser(req, res, id) {
  try {
    // delete user
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  insertUser,
  deleteUser,
};
