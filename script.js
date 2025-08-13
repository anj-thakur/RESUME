// Toggle light/dark theme
document.getElementById("themeToggle").addEventListener("click", () => {
  const html = document.documentElement;
  html.dataset.theme = html.dataset.theme === "dark" ? "light" : "dark";
});

// Store contact form data in localStorage
document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const time = new Date().toLocaleString();

  const response = { name, email, message, time };
  let responses = JSON.parse(localStorage.getItem("responses")) || [];
  responses.push(response);
  localStorage.setItem("responses", JSON.stringify(responses));

  alert("Message sent!");
  e.target.reset();
});

// Admin login
function loginAdmin() {
  const pass = document.getElementById("adminPass").value;
  if (pass === "admin") {
    document.getElementById("loginSection").style.display = "none";
    document.getElementById("responseSection").style.display = "block";
    showResponses();
  } else {
    alert("Incorrect password.");
  }
}

function logoutAdmin() {
  document.getElementById("loginSection").style.display = "block";
  document.getElementById("responseSection").style.display = "none";
  document.getElementById("adminPass").value = "";
  document.getElementById("responseList").innerHTML = "";
}

function showResponses() {
  const responses = JSON.parse(localStorage.getItem("responses")) || [];
  const list = document.getElementById("responseList");
  list.innerHTML = "";
  responses.forEach((r) => {
    const li = document.createElement("li");
    li.textContent = `${r.time} — ${r.name} (${r.email}): ${r.message}`;
    list.appendChild(li);
  });
}