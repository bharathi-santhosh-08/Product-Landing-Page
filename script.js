// ================= SAFE DOM LOAD =================
document.addEventListener("DOMContentLoaded", () => {

  // ================= MOBILE MENU TOGGLE =================
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  if (menuToggle) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("show");
    });
  }


  // ================= SMOOTH SCROLL (FIXED) =================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {

      const targetId = this.getAttribute("href");

      // Ignore plain "#"
      if (targetId === "#") return;

      const target = document.querySelector(targetId);

      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: "smooth"
        });
      }

      // Close mobile menu
      navLinks.classList.remove("show");
    });
  });


  // ================= NAVBAR SHRINK ON SCROLL =================
  const navbar = document.getElementById("navbar");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.style.padding = "5px 0";
    } else {
      navbar.style.padding = "15px 0";
    }
  });


  // ================= SCROLL REVEAL =================
  const revealElements = document.querySelectorAll(
    ".card, .testimonial, .benefit-list li"
  );

  const revealOnScroll = () => {
    const windowHeight = window.innerHeight;

    revealElements.forEach(el => {
      const elementTop = el.getBoundingClientRect().top;

      if (elementTop < windowHeight - 50) {
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }
    });
  };

  // Initial style
  revealElements.forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "all 0.6s ease";
  });

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll(); // run once on load


  // ================= CTA CLICK EFFECT =================
  document.querySelectorAll(".btn").forEach(btn => {
    btn.addEventListener("click", () => {
      btn.style.transform = "scale(0.95)";
      setTimeout(() => {
        btn.style.transform = "scale(1)";
      }, 150);
    });
  });

});
// ================= SAFE DOM LOAD =================
    