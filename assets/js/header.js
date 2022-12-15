const subMenu = document.querySelector(".navbar_submenu");
const navCol = document.querySelector(".navbar-collapse");
const subMenuList = document.querySelector(".navbar_submenu-list");
const btnMenu = document.querySelector(".menu-icon-btn");
const headerLanguage = document.querySelector(".header_language");
const headerContainer = document.querySelector(".header_container");
subMenu &&
  subMenu.addEventListener("click", () => {
    subMenuList && subMenuList.classList.toggle("navbar_submenu-list-show");
  });

btnMenu &&
  btnMenu.addEventListener("click", () => {
    navCol && navCol.classList.toggle("navbar-collapse-active");
  });
let statusFixed = true;
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    if (statusFixed) {
      headerLanguage && headerLanguage.classList.add("header_language-disable");
      headerContainer && headerContainer.classList.add("header_fixed");
      subMenu && subMenu.classList.add("navbar_submenu-show");
      statusFixed = false;
    }
  } else {
    if (!statusFixed) {
      headerLanguage &&
        headerLanguage.classList.remove("header_language-disable");
      subMenu && subMenu.classList.remove("navbar_submenu-show");
      headerContainer && headerContainer.classList.remove("header_fixed");
      statusFixed = true;
    }
  }
});

// var navList = document.getElementsByClassName("navbar_list");

// // Get all buttons with class="btn" inside the container
// var navItem = navList[0].getElementsByClassName("navbar_list-item");
// console.log(navList)
// // Loop through the buttons and add the active class to the current/clicked button
// for (var i = 0; i < navItem.length; i++) {
//   navItem[i].addEventListener("click", function() {
//     console.log(navItem)
//     var current = document.getElementsByClassName("navbar_list-item--active");
//    console.log('curent',current)
//     if(current.length){
//       current[0].className = current[0].className.replace("navbar_list-item--active", "");
//     }

//     this.className += " navbar_list-item--active";
//     console.log(this.className)
//   });
// }


// }
function myFunction(elem) {
  var a = document.querySelectorAll('#btn-tab');
  for (i = 0; i < a.length; i++) {
      a[i].classList.remove('active');
  }
  elem.classList.add('active');
}