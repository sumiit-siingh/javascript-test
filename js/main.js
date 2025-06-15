// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // This JavaScript was previously for smooth scrolling on a single page.
  // For a multi-page website, direct navigation is handled by HTML links.
  // You can add page-specific JavaScript here if needed.

  // Example: Add a simple animation to the main heading (can be kept or removed based on preference)
  const mainHeading = document.querySelector('h1');
  if (mainHeading) {
    mainHeading.style.opacity = '0';
    setTimeout(() => {
      mainHeading.style.transition = 'opacity 1s ease';
      mainHeading.style.opacity = '1';
    }, 100);
  }

  // You can add other global or page-specific JavaScript here
  // For example, if you have a contact form, you might add form submission logic here
});
document.getElementById("menu-btn").addEventListener("click", () => {
  window.location.href = "/menu.html";
});

document.getElementById("theme-toggle").addEventListener("click", () => {
  const homepage = document.getElementById("homepage");
  homepage.classList.toggle("dark");
  homepage.classList.toggle("light");
});



const user = JSON.parse(localStorage.getItem("user"));
const authLinks = document.getElementById("auth-links");
const userLinks = document.getElementById("user-links");
const welcomeUser = document.getElementById("welcome-user");

if (user) {
  authLinks.style.display = "none";
  userLinks.style.display = "flex";
  welcomeUser.textContent = `Welcome, ${user.name}`;
}

function logout() {
  localStorage.removeItem("user");
  window.location.href = "pages/login.html";
}
