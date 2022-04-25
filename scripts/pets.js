let burger = document.querySelector("#burger_menu");
let menu = document.querySelector(".menu");
let h1Pets = document.querySelector(".h1Pets");

burger.addEventListener('click', function(){
    burger.classList.toggle('burger_menu_active');
    menu.classList.toggle('menu_active');  
    h1Pets.classList.toggle('h1Pets_active');
});

//POPUP

const Jenifer = document.querySelector(".Jenifer");
const container_popap = document.querySelector(".container_popap_pets");
const btn_popap = document.querySelector(".btn_popap_pets");
const pet = document.querySelector("#pet");
const frendsCard = document.querySelector(".frendsCardpets");
const body_pet = document.querySelector(".body_pet");


Jenifer.addEventListener('click', function(){
    container_popap.classList.toggle("container_popap_pets_active");
    body_pet.classList.toggle("body_pet_active");
    pet.classList.toggle("pet_active");
    frendsCard.classList.toggle("frendsCardpets_active");
    
})
btn_popap.addEventListener('click', function(){
    container_popap.classList.remove("container_popap_pets_active");
    body_pet.classList.remove("body_pet_active");
    pet.classList.remove("pet_active");
    frendsCard.classList.remove("frendsCardpets_active");
})
    

//Pagination//

const Katrine = document.querySelector(".Katrine");
const Woody = document.querySelector(".Woody");
const Sophia = document.querySelector(".Sophia");
const Timmy = document.querySelector(".Timmy");
const Charly = document.querySelector(".Charly");
const Scarlett = document.querySelector(".Scarlett");
const Freddie = document.querySelector(".Freddie");


    let petdiv = frendsCard.querySelectorAll('div');

    let pet_array = [Jenifer, Katrine, Woody, Sophia, Timmy, Charly, Scarlett, Freddie];
    let arr_i =[];
    let cons = 0;
    let arr_index=[];
    let a =0;

    //Рандомное не повторяющее число//
    function random (){
         while(arr_i.length<8){
 arr_index = Math.floor(Math.random()*8);
 for(arr of arr_i){
  if(arr_index == arr && cons <= 8){ 
      a=a+1
 return random();
}
 }
arr_i.push(arr_index);
//console.log(arr_index);
}
for(let arr_ind of arr_i){
    frendsCard.appendChild(pet_array[arr_ind]);
   // console.log(arr_ind);
   } 
  
}

    random();
   

