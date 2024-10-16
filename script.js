const form = document.getElementById("registration-form");
const feedbackDiv = document.getElementById("form-feedback");
const username = document.getElementById("username").value.trim();
const email = document.getElementById("email").value.trim();
const password = document.getElementById("password").value.trim();
const isValid = true;
const messages = [];

document.addEventListener("DOMContentLoaded", SubmitForm);

function SubmitForm(event) {
  log.textContent += "DOMContentLoaded\n";
  event.preventDefault();
  if (username.length < 3) {
    isValid = false;
    console.log(messages.push("Your username too low"));
  }
  if (!email.includes("@") && !email.includes(".")) {
    isValid = false;
    console.log(messages.push("inter your valid email please"));
  }
  if (password.length < 8) {
    isValid = false;
    console.log(messages.push("inter your comment please"));
  }

  feedbackDiv.style.display = "block";
  if (isValid === true) {
    feedbackDiv.innerHTML = "Registration successful!";
    feedbackDiv.style.color = "#28a745";
  }
  if (isValid !== true) {
    feedbackDiv.innerHTML = messages.join("<br>");
    feedbackDiv.style.color = "#dc3545";
  }
}
