// HTML elements
const txtUserUuid = document.getElementById("insertuser-uuid");
const sendUserData = document.getElementById("getUserById");
const containerDiv = document.getElementById("container");
const resultNode = document.getElementById("result");

sendUserData.addEventListener("click", () => {
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
        let textnode = document.createTextNode(item.name); // Create a text node
        resultNode.appendChild(textnode);
        console.log(item);
      })
      .catch((err) => {
        let textnode = document.createTextNode(err.error); // Create a text node
        resultNode.appendChild(textnode);
        console.log(err);
      });
  } catch (error) {
    console.log(`something went wrong ${error}`);
  }
});

// functions
