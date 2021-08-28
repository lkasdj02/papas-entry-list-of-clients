const fs = require("fs");

function insertUser() {
  return new Promise((resolve, reject) => {
    console.log("returned new promise");
  });
}

module.exports = {
  insertUser,
};
