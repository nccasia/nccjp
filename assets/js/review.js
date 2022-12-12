const btnLeft = document.querySelector(".btn-left");
const btnRight = document.querySelector(".btn-right");
const carousel = document.querySelector(".container_review-carousel");
const reviewList = document.querySelector(".container_review-list");
const box_slide = document.querySelector(".box_slide");
const slide = document.getElementsByClassName("box_lide-left");

let direction = 0;
let indexReviewList = 1;

function replaceBoxSlide() {
  box_slide.innerHTML = "";
  for (let i = 0; i < reviewList.childElementCount; i++) {
    if (i + 1 == indexReviewList) {
      box_slide.innerHTML +=
        '<button type="button" class="box_lide-left dot"></button>';
    } else {
      box_slide.innerHTML +=
        '<button type="button" class="box_lide-left"></button>';
    }
    for (let i = 0; i < slide.length; i++) {
      slide[i].addEventListener("click", () => {
        for (let k = 0; k < slide.length; k++) {
          slide[k].classList.remove("dot");
        }

        slide[i].classList.add("dot");
        if (i == 0) {
          if (indexReviewList > 1) {
            indexReviewList -= 1;
          } else {
            if (indexReviewList == 1) {
              indexReviewList = reviewList.childElementCount;
            }
          }
          carousel.style.justifyContent = "flex-end";
          reviewList.style.transform = "translate(50%)";
        } else {
          if (indexReviewList < reviewList.childElementCount) {
            indexReviewList += 1;
          } else {
            if (indexReviewList == reviewList.childElementCount) {
              indexReviewList = 1;
            }
          }
          direction = -1;
          carousel.style.justifyContent = "flex-start";
          reviewList.style.transform = "translate(-50%)";
        }
      });
    }
  }
}
btnLeft.addEventListener("click", () => {
  if (indexReviewList > 1) {
    indexReviewList -= 1;
  } else {
    if (indexReviewList == 1) {
      indexReviewList = reviewList.childElementCount;
    }
  }

  replaceBoxSlide();
  if (direction === -1) {
    reviewList.append(reviewList.firstElementChild);
    direction = 1;
  }
  carousel.style.justifyContent = "flex-end";
  reviewList.style.transform = "translate(50%)";
});
btnRight.addEventListener("click", () => {
  if (indexReviewList < reviewList.childElementCount) {
    indexReviewList += 1;
  } else {
    if (indexReviewList == reviewList.childElementCount) {
      indexReviewList = 1;
    }
  }

  replaceBoxSlide();
  direction = -1;
  carousel.style.justifyContent = "flex-start";
  reviewList.style.transform = "translate(-50%)";
});
reviewList.addEventListener("transitionend", () => {
  if (direction === -1) {
    reviewList.appendChild(reviewList.firstElementChild);
  } else if (direction === 1) {
    reviewList.prepend(reviewList.lastElementChild);
  }
  reviewList.style.transition = "none";
  reviewList.style.transform = "translate(0)";
  setTimeout(function () {
    reviewList.style.transition = "all 0.5s";
  });
});
replaceBoxSlide();
