const toggleButton = document.getElementById('theme-toggle');
const body = document.body;
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

toggleButton.addEventListener('click', () => {
  body.classList.toggle('dark');
  toggleButton.textContent = body.classList.contains('dark') ? '☀️' : '🌙';
});

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("show");
  });
});
