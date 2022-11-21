const btnLeft = document.querySelector(".btn-left");
const btnRight = document.querySelector(".btn-right");
const carousel = document.querySelector(".container_review-carousel");
const reviewList = document.querySelector('.container_review-list');

let direction = 0;

btnLeft.addEventListener("click", () => {
    if (direction === -1) {
        reviewList.append(reviewList.firstElementChild);
        direction = 1;
    }
    carousel.style.justifyContent = 'flex-end';
    reviewList.style.transform = 'translate(50%)';
})
btnRight.addEventListener('click', () => {
    direction = -1;
    carousel.style.justifyContent = 'flex-start';
    reviewList.style.transform = "translate(-50%)";
})
reviewList.addEventListener("transitionend", () => {
    if (direction === -1) {
        reviewList.appendChild(reviewList.firstElementChild);

    } else if (direction === 1) {
        reviewList.prepend(reviewList.lastElementChild)
    }
    reviewList.style.transition = 'none';
    reviewList.style.transform = 'translate(0)';
    setTimeout(function() {
        reviewList.style.transition = 'all 0.5s';
    })

})