// HTML elements
const txtUserSurname = document.getElementById("insertuser-surname");
const txtUserName = document.getElementById("insertuser-name");
const findUserBUTTON = document.getElementById("find-user-button");
const createUserBUTTON = document.getElementById("create-user-button");
const findResultNode = document.getElementById("result-find");
const createResultNode = document.getElementById("result-find");

// EVENT LISTENERS
findUserBUTTON.addEventListener("click", () => {
  console.log("user clicked the button");
  try {
    let userId = txtUserUuid.value === null ? "000" : txtUserUuid.value;
    console.log(userId);
    fetch(`http://localhost:3000/finduser/${userId}`)
      .then((res) => {
        if (res.ok) {
          console.log("RESPONSE WAS OK");
          let p2 = res.json(); // return res.json() would simply do the same thing snce it returns a promise.
          return p2;
        } else if (res.status === 404) {
          throw { error: "resource not found" };
        }
      })
      .then((item) => {
        // let textnode = document.createTextNode(item.name); // Create a text node
        console.log(item);
        findResultNode.innerText = `result: ${item.name}`;
        txtUserUuid.value = "";
      })
      .catch((err) => {
        console.log(err);
        findResultNode.innerText = `result: ${err.error}`;
      });
  } catch (error) {
    console.log(`something went wrong ${error}`);
  }
});
createUserBUTTON.addEventListener("click", () => {
  // do post stuff
  let user = {
    name: txtUserName.value,
    surname: txtUserSurname.value,
    uuid: generateRandomNumber(),
  };
  fetch("http://localhost:3000/createuser")
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error(`something went wrong with the response ${res.status}`);
      }
    })
    .then((body) => {
      console.log(body);
    })
    .catch((err) => {
      console.log(err);
    });
});
// functions

const generateRandomNumber = function () {
  let number = Math.round(new Number(Math.random() * 10000));

  return number;
};
