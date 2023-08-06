var account_btn = document.getElementById("account-btn");
var login = document.getElementById("login");
var register = document.getElementById("register");

function Register() {
  account_btn.style.left = "110px";
  register.style.left = "50px";
  login.style.left = "-400px";
}
function Login() {
  account_btn.style.left = "0px";
  register.style.left = "450px";
  login.style.left = "50px";
}

document.getElementById("resume").onchange = function () {
  document.getElementById("selected-file").innerHTML = this.files[0].name;
};

function togglePasswordVisibility() {
  var passwordInput = document.getElementById("passwordInput");

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
  } else {
    passwordInput.type = "password";
  }
  var passwordInput = document.getElementById("passwordInput2");

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
  } else {
    passwordInput.type = "password";
  }
}



const fileInput = document.getElementById("resume");
const fileLabel = document.getElementById("resumeLabel");

fileInput.addEventListener("change", function () {
  fileLabel.textContent = this.files[0].name;
});
