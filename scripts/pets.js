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
    index_str2=0;
    index_str3=0;
    index_str4=0;
    index_str5=0;
    index_str6=0;

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
    for(let w =7;w<15;w++){
    index_str2 = pet_str[w];
    frendsCard.appendChild(pet_array[index_str2]); 

    }
  }
function str3 (){
    for(let e =15;e<23;e++){
    index_str3 = pet_str[e];
    frendsCard.appendChild(pet_array[index_str3]); 
       
}
}
function str4 (){
    for(let r =23;r<31;r++){
   index_str4 = pet_str[r];
    frendsCard.appendChild(pet_array[index_str4]); 
    
}
}
function str5 (){
   for(let t =31;t<39;t++){
    index_str5 = pet_str[t];
    frendsCard.appendChild(pet_array[index_str5]); 
     
}
}
function str6 (){
    for(let q =39;q<47;q++){
    index_str6 = pet_str[q];
    frendsCard.appendChild(pet_array[index_str6]); 
     
}
}
//}
//Кнопки. навигация.//
const left2 = document.querySelector('.left2');
const right2 = document.querySelector('.right2');
const num = document.querySelector('.num p');
const left = document.querySelector('.left');
const right = document.querySelector('.right');
let index_line=1;

//let str = [str1(),str2(),str3(),str4(),str5(),str6()];

left2.addEventListener('click', function(){
    str1();
    num.innerHTML='1';
    index_line =1;
});

right2.addEventListener('click', function(){
    str6();
    num.innerHTML='6';
    index_line =6;
});

right.addEventListener('click',function(){
    str2();
    index_line=index_line+1;
  num.innerHTML=index_line;
   
});

   left.addEventListener('click', function(){
    str5();
    index_line=index_line-1;
    num.innerHTML=index_line;
    
   });
  
   
