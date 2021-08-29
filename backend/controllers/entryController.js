const fs = require("fs");
const { createEntry } = require("../models/entryModel.js");
const { parseRequestToJson } = require("../filemanager.js");

async function insertEntry(req, res) {
  try {
    let { name, uuid, orario } = await parseRequestToJson(req);
    let entryStatus = await createEntry(name, uuid, orario);
    if (entryStatus === 1) {
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.write(JSON.stringify({ data: "entry created" }));
      res.end();
    } else {
      throw "entry did not get inserted";
    }
  } catch (error) {
    console.log(`something went wrong: ${error}`);
  }
}

module.exports = {
  insertEntry,
};
