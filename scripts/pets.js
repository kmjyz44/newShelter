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
    let pet_str =[];
    let str_arr=[];
    let pet_array = [Jenifer, Katrine, Woody, Sophia, Timmy, Charly, Scarlett, Freddie];
    let arr_i =[];
    let cons = 0;
    let arr_index=[];
    index_str1=0;

    //Рандомное не повторяющее число//
    function random (){
         while(arr_i.length<8){
 arr_index = Math.floor(Math.random()*8);
 for(arr of arr_i){
  if(arr_index == arr && cons <= 8){ 
 return random();
}
 }
 
arr_i.push(arr_index);

}

for(let arr_ind of arr_i){
    pet_str.push(arr_ind);
    
}
    }
    //console.log(pet_str);
    for(let l=0;l<6;l++){
random();
    }
 function str1 (){
     for(let q =0;q<8;q++){
     index_str1 = pet_str[q];
     frendsCard.appendChild(pet_array[index_str1]); 
   
 }
}
function str2 (){
    for(let q =7;q<15;q++){
    index_str1 = pet_str[q];
    frendsCard.appendChild(pet_array[index_str1]); 
    }
}
function str3 (){
    for(let q =15;q<23;q++){
    index_str1 = pet_str[q];
    frendsCard.appendChild(pet_array[index_str1]); 
    }
}
function str4 (){
    for(let q =23;q<31;q++){
    index_str1 = pet_str[q];
    frendsCard.appendChild(pet_array[index_str1]); 
    }
}
function str5 (){
    for(let q =31;q<39;q++){
    index_str1 = pet_str[q];
    frendsCard.appendChild(pet_array[index_str1]); 
    }
}
function str6 (){
    for(let q =39;q<47;q++){
    index_str1 = pet_str[q];
    frendsCard.appendChild(pet_array[index_str1]); 
    }
}
//}
//Кнопки. навигация.//
const left2 = document.querySelector('.left2');
const right2 = document.querySelector('.right2');
const num = document.querySelector('.num p');
const left = document.querySelector('.left');
const right = document.querySelector('.right');
let index_line=0;
left2.addEventListener('click', function(){
    str1();
    num.innerHTML='1';
});

right2.addEventListener('click', function(){
    str6();
    num.innerHTML='6';
});
right.addEventListener('click',function(){
    index_line=index_line+1;
    
    while(index_line<7){
        num.innerHTML=index_line;
       switch(index_line){
case 1:str1();
case 2:str2();
case index_line===3:str3();
case index_line=4:str4();
case index_line=5:str5();
case index_line=6:str6();
       }
        
    }
});
