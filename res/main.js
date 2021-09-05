// HTML elements
const txtUserUuid = document.getElementById("insertuser-uuid");
const sendUserData = document.getElementById("getUserById");
const containerDiv = document.getElementById("container");
// EVENT handlers
sendUserData.addEventListener("click", () => {
  console.log("user clicked the button");
  try {
    let userId = txtUserUuid.value === null ? "000" : txtUserUuid.value;
    console.log(userId);
    fetch(`http://localhost:3000/finduser/${userId}`)
      .then((res) => {
        let p2 = res.json();
        return p2;
      })
      .then((item) => {
        let node = document.createElement("h1"); // Create a <li> node
        let textnode = document.createTextNode(item.name); // Create a text node
        node.appendChild(textnode);
        containerDiv.appendChild(node);
        console.log(item);
      })
      .catch((err) => console.log(err));
  } catch (error) {
    console.log(`something went wrong ${error}`);
  }
});

// functions
