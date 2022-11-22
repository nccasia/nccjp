const subMenu = document.querySelector(".navbar_submenu");
const navCol = document.querySelector(".navbar-collapse");
const subMenuList = document.querySelector(".navbar_submenu-list");
const btnMenu = document.querySelector(".menu-icon-btn");
const headerLanguage = document.querySelector(".header_language");
const headerContainer = document.querySelector(".header_container");
subMenu.addEventListener("click", () => {
  subMenuList.classList.toggle("navbar_submenu-list-show");
});

btnMenu.addEventListener("click", () => {
  navCol.classList.toggle("navbar-collapse-active");
});
let statusFixed = true;
window.addEventListener("scroll", ()=>{
  if (window.pageYOffset > 100) {
    if (statusFixed) {
      headerLanguage.classList.add("header_language-disable");
      headerContainer.classList.add("header_fixed");
      subMenu.classList.add("navbar_submenu-show");
      statusFixed = false;
    }

    
  }
  else {
    if (!statusFixed) {
        headerLanguage.classList.remove("header_language-disable")
        subMenu.classList.remove("navbar_submenu-show");
        headerContainer.classList.remove("header_fixed");
        statusFixed = true;
    }
}
})