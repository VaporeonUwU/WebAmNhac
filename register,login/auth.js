function togglePassword(id, icon) {
  const input = document.getElementById(id);
  if (input.type === "password") {
    input.type = "text";
    icon.classList.remove("fa-eye");
    icon.classList.add("fa-eye-slash");
  } else {
    input.type = "password";
    icon.classList.remove("fa-eye-slash");
    icon.classList.add("fa-eye");
  }
}

function register() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const error = document.getElementById("registerError");

  if (!name || !email || !password || !phone) {
    error.innerText = "Please fill in all fields";
    return;
  }

  let users = JSON.parse(localStorage.getItem("users")) || [];

  if (users.find((u) => u.email === email)) {
    error.innerText = "Email already exists";
    return;
  }

  users.push({ name, email, password, phone });
  localStorage.setItem("users", JSON.stringify(users));

  alert("Register success");
  window.location.href = "login.html";
}

function login() {
  const email = document.getElementById("loginEmail").value.trim();
  const password = document.getElementById("loginPassword").value.trim();
  const error = document.getElementById("loginError");

  let users = JSON.parse(localStorage.getItem("users")) || [];

  const user = users.find((u) => u.email === email && u.password === password);

  if (!user) {
    error.innerText = "Invalid email or password";
    return;
  }

  
  window.location.href = "../Home.html";
}
