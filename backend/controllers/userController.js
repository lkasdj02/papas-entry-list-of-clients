const fs = require("fs");
const { createUser, deleteUserId, findId } = require("../models/userModel.js");
const { parseRequestToJson } = require("../filemanager.js");

async function findUser(res, id) {
  try {
    let user = await findId(id);
    console.log(user);
    console.log("awaiting for the user from the controller");
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(JSON.stringify(user));
    res.end();
  } catch (err) {
    console.log(`something went wrong in the controller : ${err}`);
    res.writeHead(404, { "Content-Type": "application/json" });
    res.write(JSON.stringify({ error: `${err}` }));
    res.end();
  }
}

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

async function deleteUser(res, id) {
  try {
    let user = await findId(id);
    if (user !== undefined) {
      let result = await deleteUserId(user.uuid);
      if (result) {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.write(
          JSON.stringify({
            data: `user with ${id} has been deleted succesfully`,
          })
        );
        res.end();
      }
    }
  } catch (err) {
    console.log(`somethind went wrong ${err}`);
  }
}

module.exports = {
  insertUser,
  deleteUser,
  findUser,
};
