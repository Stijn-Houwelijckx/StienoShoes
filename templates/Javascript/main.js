//===== Begin Mobile Navigation =====//

const primaryNav = document.querySelector(".primary-navigation");
const menuBtn = document.querySelector(".mobile-burger");
const closeBtn = document.querySelector(".primary-navigation .close-btn");

const navList = document.querySelector(".primary-nav-list");

menuBtn.addEventListener("click", () => {
  const visibility = primaryNav.getAttribute("data-visible");

  if (visibility === "false") {
    primaryNav.setAttribute("data-visible", "true");
  } else if (visibility === "true") {
    primaryNav.setAttribute("data-visible", "false");
  }
});

closeBtn.addEventListener("click", () => {
  const visibility = primaryNav.getAttribute("data-visible");

  if (visibility === "true") {
    primaryNav.setAttribute("data-visible", "false");
  }
});

//===== End Mobile Navigation =====//

// ============================================================================================== //
