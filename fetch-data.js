async function fetchUserData() {
  const apiUrl = "https://jsonplaceholder.typicode.com/users";
  const dataContainer = document.getElementById("api-data");
  const response = document.getElementById("api-data");

  let myPromise = new Promise(function (resolve) {
    let req = new XMLHttpRequest();
    req.open("GET", "apiUrl");
    req.onload = function () {
      try {
        if (req.status == 200) {
          resolve(req.response);
        }
      } catch {
        resolve("Failed to load user data.");
      }
    };
    req.send();
  });
  response.innerHTML = await myPromise;
  const user = await response.json();
  dataContainer.innerHTML = "";
  const userList = document.createElement("ul");
  user.forEach((e) => "<li>e</li>");
  userList.appendChild(dataContainer);
}

document.addEventListener("DOMContentLoaded", fetchUserData);
