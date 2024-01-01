//===== Begin Filter Open =====//

const filterContainer = document.querySelector(".filter-container");
const overlayBG = document.querySelector(".overlay-background");
const filterOpenBtn = document.querySelector(
  ".sort-container .title-container"
);
const filterCloseBtn = document.querySelector(
  ".filter-container .title-container"
);

filterOpenBtn.addEventListener("click", () => {
  const visibility = filterContainer.getAttribute("data-visible");

  if (visibility === "false") {
    filterContainer.setAttribute("data-visible", "true");
    overlayBG.setAttribute("data-visible", "true");
  } else if (visibility === "true") {
    filterContainer.setAttribute("data-visible", "false");
    overlayBG.setAttribute("data-visible", "false");
  }
});

filterCloseBtn.addEventListener("click", () => {
  const visibility = filterContainer.getAttribute("data-visible");

  if (visibility === "true") {
    filterContainer.setAttribute("data-visible", "false");
    overlayBG.setAttribute("data-visible", "false");
  }
});

//===== End Filter Open =====//

document.addEventListener("DOMContentLoaded", function () {
  var checkboxes = document.querySelectorAll('input[type="checkbox"]');

  checkboxes.forEach(function (checkbox) {
    checkbox.addEventListener("change", function (e) {
      var label = e.target.parentNode.querySelector("label");
      if (e.target.checked) {
        console.log(e.target.name + " checked");

        e.target.parentNode.classList.add("checked-label");
      } else {
        console.log(e.target.name + " not checked");

        e.target.parentNode.classList.remove("checked-label");
      }
    });
  });
});

// const shoeSize = document.querySelectorAll(".size-filter-container .shoe-size");

// shoeSize.forEach((item) => {
//   item.addEventListener("change", (e) => {
//     if (e.target.checked) {
//       console.log(e.target.name + " is checked..");
//     } else {
//       console.log(e.target.name + " is not checked..");
//     }
//   });
// });
