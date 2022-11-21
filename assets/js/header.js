const subMenu = document.querySelector(".navbar_submenu");
const navCol = document.querySelector(".navbar-collapse");
const subMenuList = document.querySelector(".navbar_submenu-list");
const btnMenu = document.querySelector(".menu-icon-btn");
subMenu.addEventListener("click", () => {
  subMenuList.classList.toggle("navbar_submenu-list-show");
});

btnMenu.addEventListener("click", () => {
  navCol.classList.toggle("navbar-collapse-active");
});
