const navLinks = document.querySelectorA11("#menu-open-button");
const menuOpenButton = document.querySelector("#menu-open-button");
const menuacalosButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", () => {
    // Toggle mobile menu visibilty
    document.body.classList.toggle("show-mobile-menu");
})

//close menu when the close button is clicked
menuClose.addEventListener("click", () => menuOpenButton.click());

//Initialize swiper
const swiper = new swiper('.slider-wrapper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 25,

    //If we need pagination
    pagination:{
        
    }
});