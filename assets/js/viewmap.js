const btnCloseMap = document.querySelector(".btn-close-modal");
const modalContactMap = document.querySelector(".modal-contact-map");
const contactLinks = document.querySelectorAll(".contact-link");
const mapContents = document.querySelectorAll(".map-content");


console.log("map content : ", mapContents);
btnCloseMap.addEventListener("click", ()=>{
    modalContactMap.classList.remove("modal-contact-map-active");
})

for(let i = 0; i < contactLinks.length; ++i){

    contactLinks[i].addEventListener("click", function(){
        for(let k = 0; k < mapContents.length; ++k){
            mapContents[k].classList.remove("map-content-active")
        }
        modalContactMap.classList.add("modal-contact-map-active");
        mapContents[i].classList.add("map-content-active");
    })
    
}
// contactLinks[0].addEventListener("click", ()=>{
//     console.log("hLOO")
//     modalContactMap.classList.add("modal-contact-map-active")
//     mapContents[0].classList.add("map-content-active")
//     mapContents[1].classList.remove("map-content-active")
// })
// contactLinks[1].addEventListener("click", ()=>{
//     modalContactMap.classList.add("modal-contact-map-active")
//     mapContents[0].classList.remove("map-content-active")
//     mapContents[1].classList.add("map-content-active")
// })