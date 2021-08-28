const fs = require("fs");

async function updateUser(incomingdata) {}

async function createUser(req, res) {
  try {
    response.statusCode = 200;
    response.setHeader("Content-Type", "application/json");
    response.write(JSON.stringify({ data: "user created" }));
    response.end();
  } catch (err) {
    console.error(err);
  }
}

async function findUser(req, res) {}

async function insertUser(req, res) {}
