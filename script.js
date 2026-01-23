/* ===============================
   Mobile Navigation Toggle
================================ */
const mobileMenu = document.getElementById("mobile-menu");
const navLinks = document.getElementById("nav-links");

mobileMenu.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  mobileMenu.classList.toggle("active");
});

/* ===============================
   Scroll Reveal Animation
================================ */
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  reveals.forEach((element) => {
    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    const revealPoint = 100;

    if (elementTop < windowHeight - revealPoint) {
      element.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

/* ===============================
   Contact Form (Optional Alert)
================================ */
const form = document.querySelector(".contact-form");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thank you for your message! I will get back to you soon.");
    form.reset();
  });
}
