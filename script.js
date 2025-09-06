// Toggle menu on mobile
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

function reportLost() {
  alert("Redirecting to Lost Item Report Form...");
}

// Show animation when section is visible on scroll
window.addEventListener("scroll", () => {
  const lostSection = document.querySelector(".lost-section");
  const position = lostSection.getBoundingClientRect().top;
  const screenPosition = window.innerHeight / 1.3;

  if (position < screenPosition) {
    lostSection.classList.add("show");
  }
});


// Scroll animation for find-section
window.addEventListener("scroll", () => {
  const findSection = document.querySelector(".find-section");
  const position = findSection.getBoundingClientRect().top;
  const screenPosition = window.innerHeight / 1.3;

  if (position < screenPosition) {
    findSection.classList.add("show");
  }
});
