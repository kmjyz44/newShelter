const burger = document.querySelector("#burger_menu");
const menu = document.querySelector(".menu");
const wrapper = document.querySelector(".wrapper");
const body=document.querySelector("body");




burger.addEventListener('click', function(){
    burger.classList.toggle('burger_menu_active');
    menu.classList.toggle('menu_active');  
    wrapper.classList.toggle('wrapper_active');
});
    body.addEventListener('click', function(){
        if(burger.classList.contains('burger_menu_active')){
    menu.classList.toogle('menu_active');  
    wrapper.classList.toogle('wrapper_active')
        }
})


    //SLIDER

    let offset =0;
    const petsSlider = document.querySelector(".petsSlider");
    const arrowLeft = document.querySelector(".arrowLeft");
    const arrowRight = document.querySelector(".arrowRight");

    arrowRight.addEventListener('click', function(){
        offset = offset + 910;
        if(offset>910){
            offset=0;
        }
        petsSlider.style.left = -offset + "px";
    })

    arrowLeft.addEventListener('click', function(){
        offset = offset - 910;
        if(offset<910){
            offset=0;}
        petsSlider.style.left = offset + "px";
    })


//POPUP

const Jenifer = document.querySelector(".Jenifer");
const container_popap = document.querySelector(".container_popap");
const btn_popap = document.querySelector(".btn_popap");
const pets = document.querySelector(".pets");
const frendsCard = document.querySelector(".frendsCard");


Jenifer.addEventListener('click', function(){
    container_popap.classList.toggle("container_popap_active");
    body.classList.toggle("body_active");
    pets.classList.toggle("pets_active");
    frendsCard.classList.toggle("frendsCard_active");
})
btn_popap.addEventListener('click', function(){
    container_popap.classList.remove("container_popap_active");
    body.classList.remove("body_active");
    pets.classList.remove("pets_active");
    frendsCard.classList.remove("frendsCard_active");
})