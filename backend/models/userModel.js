const fs = require("fs");
let data = require("data.json");

function insertUser(name, surname, uuid) {
  return new Promise((resolve, reject) => {
    const user = {
      name: name,
      surname: surname,
      uuid: uuid,
    };
    data.people.push(user);
  });
}

module.exports = {
  insertUser,
};
