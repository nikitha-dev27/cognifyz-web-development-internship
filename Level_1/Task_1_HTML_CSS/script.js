const form = document.getElementById("signupForm");
const message = document.getElementById("formMessage");
const menuButton = document.getElementById("mobileMenu");
const navLinks = document.getElementById("navLinks");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const email = document.getElementById("email").value.trim();
  message.textContent = `Thanks! ${email} has been submitted successfully.`;
  form.reset();
});

menuButton.addEventListener("click", function () {
  navLinks.classList.toggle("open");
});

navLinks.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", function () {
    navLinks.classList.remove("open");
  });
});
