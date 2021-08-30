const fs = require("fs");
const { createEntry } = require("../models/entryModel.js");
const { parseRequestToJson } = require("../filemanager.js");

async function insertEntry(req, res) {
  try {
    let { name, uuid, orario } = await parseRequestToJson(req);
    let entryStatus = await createEntry(name, uuid, orario);
    console.log(entryStatus);
    if (entryStatus) {
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.write(JSON.stringify({ data: "entry created" }));
      res.end();
    }
  } catch (error) {
    console.log(`something went wrong: ${error}`);
    if (error === 2) {
      res.statusCode = 404;
      res.setHeader("Content-Type", "application/json");
      res.write(
        JSON.stringify({ data: "entry was not created due to an error" })
      );
      res.end();
    }
  }
}

module.exports = {
  insertEntry,
};
