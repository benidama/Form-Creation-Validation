const fetchUserData = async function () {
  const apiUrl = "https://jsonplaceholder.typicode.com/users";
  const dataContainer = document.getElementById("api-data");
  try {
    const response = await fetch(apiUrl);
    const users = await response.json();
    dataContainer.innerHTML = "";
    // console.log(users)
    const userList = document.createElement("ul");
    users.forEach((user) => {
      const myUser = user.name;
      const newElement = document.createElement("li");
      newElement.textContent = myUser;
      userList.appendChild(newElement);
      dataContainer.appendChild(userList);
    });
  } catch (error) {
    error.textContent = "Failed to load user data.";
  }
};

document.addEventListener("DOMContentLoaded", () => {
  fetchUserData();
});
