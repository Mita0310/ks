// Navbar Scroll Effect
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("bg-black/80", "backdrop-blur-md", "shadow-lg");
    navbar.classList.remove("bg-transparent");
  } else {
    navbar.classList.remove("bg-black/80", "backdrop-blur-md", "shadow-lg");
    navbar.classList.add("bg-transparent");
  }
});

// Hamburger Menu
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobile-menu");

hamburger.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// Parallax Background
const parallax = document.getElementById("parallax-bg");
window.addEventListener("scroll", () => {
  if (!parallax) return;
  const offset = window.scrollY * 0.4;
  parallax.style.transform = 'translateY(${offset}px)';
});

// Tabs
const tabButtons = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

// Default Active on Load
document.getElementById("tab-hair").classList.remove("hidden");
tabButtons[0].classList.add(
  "bg-pink-500",
  "text-white",
  "border-pink-500",
  "shadow-md",
  "scale-105"
);

tabButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const target = btn.getAttribute("data-tab");

    tabContents.forEach((content) => content.classList.add("hidden"));

    document.getElementById(target).classList.remove("hidden");

    tabButtons.forEach((b) => {
      b.classList.remove(
        "bg-pink-500",
        "text-white",
        "border-pink-500",
        "shadow-md",
        "scale-105"
      );
      b.classList.add("text-pink-600", "border-pink-500");
    });

    btn.classList.add(
      "bg-pink-500",
      "text-white",
      "border-pink-500",
      "shadow-md",
      "scale-105"
    );
  });
});