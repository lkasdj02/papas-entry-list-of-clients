// HTML elements
const txtUserUuid = document.getElementById("insertuser-uuid");

// EVENT handlers
sendUserData.addEventListener("click", () => {
  console.log("user clicked the button");
  let userId = txtUserUuid.innerText;
  fetch("http://localhost:3000/finduser/1234").then((item) =>
    console.log(item)
  );
});

// functions
