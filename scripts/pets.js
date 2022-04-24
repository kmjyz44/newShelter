let burger = document.querySelector("#burger_menu");
let menu = document.querySelector(".menu");
let h1Pets = document.querySelector(".h1Pets");

burger.addEventListener('click', function(){
    burger.classList.toggle('burger_menu_active');
    menu.classList.toggle('menu_active');  
    h1Pets.classList.toggle('h1Pets_active');
});
