let burger = document.querySelector("#burger_menu");
let menu = document.querySelector(".menu");
let wrapper = document.querySelector(".wrapper");

burger.addEventListener('click', function(){
    burger.classList.toggle('burger_menu_active');
    menu.classList.toggle('menu_active');  
    wrapper.classList.toggle('wrapper_active');
});


    //burger.classList.remove('burger_menu_active');  


