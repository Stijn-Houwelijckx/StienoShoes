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

//===== Begin Popular Carousel =====//

const prevBtn1 = document.querySelector(
  ".popular-section .carousel-control .prev-btn"
);
const nextBtn1 = document.querySelector(
  ".popular-section .carousel-control .next-btn"
);

const prevBtn2 = document.querySelector(
  ".popular-section .popular-cards-container .prev-btn"
);
const nextBtn2 = document.querySelector(
  ".popular-section .popular-cards-container .next-btn"
);

const slides = document.querySelectorAll(
  ".popular-section .popular-cards-container .card"
);
const dots = document.querySelectorAll(
  ".popular-section .carousel-control .dot"
);

let slideIndex = 2;
showSlides(slideIndex);

prevBtn1.addEventListener("click", () => {
  plusSlides(-1);
});
nextBtn1.addEventListener("click", () => {
  plusSlides(1);
});

prevBtn2.addEventListener("click", () => {
  plusSlides(-1);
});
nextBtn2.addEventListener("click", () => {
  plusSlides(1);
});

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;

  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "flex";
  dots[slideIndex - 1].className += " active";
}

//===== End Popular Carousel =====//
