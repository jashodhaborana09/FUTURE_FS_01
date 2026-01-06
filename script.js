// ===== MOBILE MENU =====
const menu = document.getElementById("mobile-menu");
const navLinks = document.getElementById("nav-links");

menu.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// ===== SCROLL REVEAL =====
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
    reveals.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight - 100) {
            section.classList.add("active");
        }
    });
});

// ===== DARK MODE =====
const darkToggle = document.getElementById("darkModeToggle");

darkToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    darkToggle.textContent =
        document.body.classList.contains("dark") ? "☀️" : "🌙";
});
