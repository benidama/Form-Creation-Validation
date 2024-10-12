const form = document.getElementById("registration-form");
const feedbackDiv = document.getElementById("form-feedback");
const username = document.getElementById("username").value.trim();
const email = document.getElementById("email").value.trim();
const password = document.getElementById("password").value.trim();
const isValid = true;
const messages = [];

document.addEventListener("DOMContentLoaded", (event) => {
  log.textContent += "DOMContentLoaded\n";
  event.preventDefault();
  if (username.length < 3) {
    isValid = false;
    console.log("Your username too low");
  }
  if (!email.includes("@ ,.")) {
    isValid = false;
    console.log("inter your valid email please");
  }
  if (password.length < 8) {
    isValid = false;
    console.log("inter your comment please");
  }

  feedbackDiv.style.display = "block";
  if (isValid === true) {
    feedbackDiv.textContent = "Registration successful!";
    feedbackDiv.style.color = "#28a745";
  }
  if (isValid !== true) {
    feedbackDiv.textContent =
      "API (https://jsonplaceholder.typicode.com/users) <br> and display the names of the";
    feedbackDiv.style.color = "#dc3545";
  }
});
