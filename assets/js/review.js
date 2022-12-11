function review() {
  const btnLeft = document.querySelector(".btn-left");
  const btnRight = document.querySelector(".btn-right");
  const carousel = document.querySelector(".container_review-carousel");
  const reviewList = document.querySelector(".container_review-list");

  let direction = 0;

  btnLeft.addEventListener("click", () => {
    if (direction === -1) {
      reviewList.append(reviewList.firstElementChild);
      direction = 1;
    }
    carousel.style.justifyContent = "flex-end";
    reviewList.style.transform = "translate(50%)";
  });
  btnRight.addEventListener("click", () => {
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
}

// function ourTeamSliderControl() {
//   const MOBILE_WIDTH = 1024;
//   setUpSlider();
//   window.addEventListener("resize", () => {
//     setUpSlider();
//   });

//   function setUpSlider() {
//     if (window.innerWidth <= MOBILE_WIDTH) {
//       initSlick();
//       console.log("slider");
//     } else {
//       unSlick();
//       console.log("no-slider");
//     }
//   }

//   function initSlick() {
//     $(".responsive")
//       .not(".slick-initialized")
//       .slick({
//         dots: true,
//         infinite: false,
//         speed: 500,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         responsive: [
//           {
//             breakpoint: 600,
//             settings: {
//               slidesToShow: 1,
//               slidesToScroll: 1,
//             },
//           },
//           {
//             breakpoint: 480,
//             settings: {
//               slidesToShow: 1,
//               slidesToScroll: 1,
//             },
//           },
//         ],
//       });
//   }

//   function unSlick() {
//     setTimeout(() => {
//       $(".responsive.slick-initialized")?.slick("unslick");
//     }, 0);
//   }
// }

function main() {
  review();
  // ourTeamSliderControl();
}

main();
