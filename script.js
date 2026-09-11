const modal = document.getElementById("discount-modal");
const closeBtn = document.getElementById("discount-modal-close");
const ctaBtn = document.getElementById("discount-modal-cta");

window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    modal.showModal();
  }, 3000);
});

closeBtn.addEventListener("click", () => modal.close());
ctaBtn.addEventListener("click", () => modal.close());

modal.addEventListener("click", (e) => {
  if (e.target === modal) modal.close();
});

//burger-menu

const menuToggle = document.getElementById("menu-toggle");
const mobileNav = document.getElementById("mobile-nav");

function closeMenu() {
  menuToggle.setAttribute("aria-expanded", "false");
  mobileNav.classList.add("hidden");
  document.body.classList.remove("overflow-hidden");
}

function openMenu() {
  menuToggle.setAttribute("aria-expanded", "true");
  mobileNav.classList.remove("hidden");
  document.body.classList.add("overflow-hidden");
}

menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  isOpen ? closeMenu() : openMenu();
});

mobileNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

mobileNav.addEventListener("click", (event) => {
  if (!event.target.closest("a")) {
    closeMenu();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeMenu();
});