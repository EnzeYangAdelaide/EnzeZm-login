const logregBox = document.querySelector(".logreg-box");
const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");

registerLink.addEventListener("click", (e) => {
  e.preventDefault();
  logregBox.classList.add("active");
});

loginLink.addEventListener("click", (e) => {
  e.preventDefault();
  logregBox.classList.remove("active");
});

let registeredEmail = "";
let registeredPassword = "";

document.querySelector(".register .btn").addEventListener("click", function (e) {
  e.preventDefault();

  const email = document.querySelector(".register input[type='email']").value;
  const password = document.querySelector(".register input[type='password']").value;

  if (email && password) {
    registeredEmail = email;
    registeredPassword = password;
    alert("Registration successful!");
    logregBox.classList.remove("active");
  } else {
    alert("Please fill out all fields.");
  }
});

document.querySelector(".login .btn").addEventListener("click", function (e) {
  e.preventDefault();

  const email = document.querySelector(".login input[type='email']").value;
  const password = document.querySelector(".login input[type='password']").value;

  if (email === registeredEmail && password === registeredPassword) {
    window.location.href = "bookshelf.html";
  } else {
    alert("Incorrect email or password.");
  }
});
