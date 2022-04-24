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
        offset = offset + 1000;
        if(offset>1000){
            offset=0;
        }
        petsSlider.style.left = -offset + "px";
    })

    arrowLeft.addEventListener('click', function(){
        offset = offset - 1000;
        if(offset<1000){
            offset=0;}
        petsSlider.style.left = offset + "px";
    })


//POPUP

const Jenifer = document.querySelector(".Jenifer");
const container_popap = document.querySelector(".container_popap");
const btn_popap = document.querySelector(".btn_popap")

Jenifer.addEventListener('click', function(){
    container_popap.classList.toggle("container_popap_active");
    
})
btn_popap.addEventListener('click', function(){
    container_popap.classList.remove("container_popap_active");
})