const users = JSON.parse(localStorage.getItem("users")) || [];

const signupbtn = document.getElementById("signupbtn");
const loginbtn = document.getElementById("loginbtn");
const logoutbtn = document.getElementById("logoutbtn");

function showview(view) {
  document.getElementById("signup").style.display = view === "signup" ? "block" : "none";
  document.getElementById("login").style.display = view === "login" ? "block" : "none";
  document.getElementById("dashboard").style.display = view === "dashboard" ? "block" : "none";
}

signupbtn.addEventListener("click", signUp);
loginbtn.addEventListener("click", login);
logoutbtn.addEventListener("click", logout);

function signUp() {
  const username = document.getElementById("username").value;
  const useremail = document.getElementById("email").value;
  const userpassword = document.getElementById("password").value;

  const newUser = {
    name: username,
    email: useremail,
    password: userpassword,
  };

  const userExists = users.find((user) => user.name === username);
  if (userExists) {
    alert("User already exists");
    return;
  }

  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));
  alert("Sign up successfully! Now you can log in");
  showview("login");
}

function login() {
  const useremail = document.getElementById("loginemail").value;
  const userpassword = document.getElementById("loginpassword").value;

  const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
  const user = storedUsers.find((user) => user.email === useremail && user.password === userpassword);
  
  if (user) {
    localStorage.setItem("loggeduser", JSON.stringify(user));
    alert("Logged in successfully!");
    showDashboard();
  } else {
    alert("Invalid credentials");
  }
}

function showDashboard() {
  const user = JSON.parse(localStorage.getItem("loggeduser"));
  document.getElementById("Displaymsg").innerText = `Welcome ${user.name}!`;
  showview("dashboard");
}

function logout() {
  localStorage.removeItem("loggeduser");
  alert("You've successfully logged out!");
  showview("signup");
}


showview("signup");
