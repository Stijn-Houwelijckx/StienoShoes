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

//===== Begin Card Dropdown =====//

const advantageCard = document.querySelectorAll(
  ".advantage-cards-container .card"
);
const advantageCardHandle = document.querySelectorAll(
  ".advantage-cards-container .card .dropdown-head"
);

advantageCardHandle.forEach((item) => {
  item.addEventListener("click", () => {
    visibility = item.parentNode.getAttribute("data-visible");
    // console.log(e.target);

    if (visibility === "false") {
      item.parentNode.setAttribute("data-visible", "true");
    } else if (visibility === "true") {
      item.parentNode.setAttribute("data-visible", "false");
    }
  });
});

//===== End Card Dropdown =====//
