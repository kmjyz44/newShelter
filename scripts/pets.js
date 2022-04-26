//Обекты pets//
let Jenifer_pet = {
    "name": "Jennifer",
    "img": "../../img/pets-jennifer.png",
    "type": "Dog",
    "breed": "Labrador",
    "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    "age": "2 months",
    "inoculations": ["none"],
    "diseases": ["none"],
    "parasites": ["none"]
  };
  let Sophia_pet = {
    "name": "Sophia",
    "img": "../../img/pets-sofia.png",
    "type": "Dog",
    "breed": "Shih tzu",
    "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
    "age": "1 month",
    "inoculations": ["parvovirus"],
    "diseases": ["none"],
    "parasites": ["none"]
  };
  let Woody_pet ={
    "name": "Woody",
    "img": "../../img/pets-woody.png",
    "type": "Dog",
    "breed": "Golden Retriever",
    "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
    "age": "3 years 6 months",
    "inoculations": ["adenovirus", "distemper"],
    "diseases": ["right back leg mobility reduced"],
    "parasites": ["none"]
  };
   let Scarllet_pet = {
    "name": "Scarlett",
    "img": "../../img/pets-scarlet.png",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
    "age": "3 months",
    "inoculations": ["parainfluenza"],
    "diseases": ["none"],
    "parasites": ["none"]
  }; 
  let Katrine_pet = {
    "name": "Katrine",
    "img": "../../img/pets-katrine.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
    "age": "6 months",
    "inoculations": ["panleukopenia"],
    "diseases": ["none"],
    "parasites": ["none"]
  };
  
  let Timmy_pet = {
    "name": "Timmy",
    "img": "../../img/pets-timmy.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
    "age": "2 years 3 months",
    "inoculations": ["calicivirus", "viral rhinotracheitis"],
    "diseases": ["kidney stones"],
    "parasites": ["none"]
  };
  let Freddie_pet = {
    "name": "Freddie",
    "img": "../../img/pets-freddie.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
    "age": "2 months",
    "inoculations": ["rabies"],
    "diseases": ["none"],
    "parasites": ["none"]
  };
  let Charly_pet = {
    "name": "Charly",
    "img": "../../img/pets-charly.png",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
    "age": "8 years",
    "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
    "diseases": ["deafness", "blindness"],
    "parasites": ["lice", "fleas"]
  }

//Обекты pets//

const Katrine = document.querySelector(".Katrine");
const Woody = document.querySelector(".Woody");
const Sophia = document.querySelector(".Sophia");
const Timmy = document.querySelector(".Timmy");
const Charly = document.querySelector(".Charly");
const Scarllet = document.querySelector(".Scarlett");
const Freddie = document.querySelector(".Freddie");
const img_popap_pets = document.querySelector(".img_popap_pets");
const name_pet = document.querySelector("#name_pet");
const type = document.querySelector(".type");
const description = document.querySelector(".description");
const age = document.querySelector(".age");
const inoculations = document.querySelector(".inoculations");
const diseases = document.querySelector(".diseases");
const parasites = document.querySelector(".parasites");
const breed = document.querySelector(".breed");

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

//Jenifer//

Jenifer.addEventListener('click', function(){
name_pet.innerHTML = Jenifer_pet.name; 
img_popap_pets.setAttribute('src', Jenifer_pet.img);
type.innerHTML = Jenifer_pet.type;
breed.innerHTML = Jenifer_pet.breed;
description.innerHTML = Jenifer_pet.description;
age.innerHTML = Jenifer_pet.age;
inoculations.innerHTML = Jenifer_pet.inoculations
diseases.innerHTML = Jenifer_pet.diseases;
parasites.innerHTML = Jenifer_pet.parasites;

    container_popap.classList.toggle("container_popap_pets_active");
    body_pet.classList.toggle("body_pet_active");
    pet.classList.toggle("pet_active");
    frendsCard.classList.toggle("frendsCardpets_active");
    
})
//Sophia_pet//
Sophia.addEventListener('click', function(){
    name_pet.innerHTML = Sophia_pet.name; 
    img_popap_pets.setAttribute('src', Sophia_pet.img);
    type.innerHTML = Sophia_pet.type;
    breed.innerHTML = Sophia_pet.breed;
    description.innerHTML = Sophia_pet.description;
    age.innerHTML = Sophia_pet.age;
    inoculations.innerHTML = Sophia_pet.inoculations
    diseases.innerHTML = Sophia_pet.diseases;
    parasites.innerHTML = Sophia_pet.parasites;
    
        container_popap.classList.toggle("container_popap_pets_active");
        body_pet.classList.toggle("body_pet_active");
        pet.classList.toggle("pet_active");
        frendsCard.classList.toggle("frendsCardpets_active");
})

//Woody_pet//


Woody.addEventListener('click', function(){
    name_pet.innerHTML = Woody_pet.name; 
    img_popap_pets.setAttribute('src', Woody_pet.img);
    type.innerHTML = Woody_pet.type;
    breed.innerHTML = Woody_pet.breed;
    description.innerHTML = Woody_pet.description;
    age.innerHTML = Woody_pet.age;
    inoculations.innerHTML = Woody_pet.inoculations
    diseases.innerHTML = Woody_pet.diseases;
    parasites.innerHTML = Woody_pet.parasites;
    
        container_popap.classList.toggle("container_popap_pets_active");
        body_pet.classList.toggle("body_pet_active");
        pet.classList.toggle("pet_active");
        frendsCard.classList.toggle("frendsCardpets_active");
})
 //Scarllet_pet//


 Scarllet.addEventListener('click', function(){
    name_pet.innerHTML = Scarllet_pet.name; 
    img_popap_pets.setAttribute('src', Scarllet_pet.img);
    type.innerHTML = Scarllet_pet.type;
    breed.innerHTML = Scarllet_pet.breed;
    description.innerHTML = Scarllet_pet.description;
    age.innerHTML = Scarllet_pet.age;
    inoculations.innerHTML = Scarllet_pet.inoculations
    diseases.innerHTML = Scarllet_pet.diseases;
    parasites.innerHTML = Scarllet_pet.parasites;
    
        container_popap.classList.toggle("container_popap_pets_active");
        body_pet.classList.toggle("body_pet_active");
        pet.classList.toggle("pet_active");
        frendsCard.classList.toggle("frendsCardpets_active");
 });

 //Katrine_pet//

    Katrine.addEventListener('click', function(){
    name_pet.innerHTML = Katrine_pet.name; 
    img_popap_pets.setAttribute('src', Katrine_pet.img);
    type.innerHTML = Katrine_pet.type;
    breed.innerHTML = Katrine_pet.breed;
    description.innerHTML = Katrine_pet.description;
    age.innerHTML = Katrine_pet.age;
    inoculations.innerHTML = Katrine_pet.inoculations
    diseases.innerHTML = Katrine_pet.diseases;
    parasites.innerHTML = Katrine_pet.parasites;
    
        container_popap.classList.toggle("container_popap_pets_active");
        body_pet.classList.toggle("body_pet_active");
        pet.classList.toggle("pet_active");
        frendsCard.classList.toggle("frendsCardpets_active");
 });

//Timmy_pet//

    Timmy.addEventListener('click', function(){
    name_pet.innerHTML = Timmy_pet.name; 
    img_popap_pets.setAttribute('src', Timmy_pet.img);
    type.innerHTML = Timmy_pet.type;
    breed.innerHTML = Timmy_pet.breed;
    description.innerHTML = Timmy_pet.description;
    age.innerHTML = Timmy_pet.age;
    inoculations.innerHTML = Timmy_pet.inoculations
    diseases.innerHTML = Timmy_pet.diseases;
    parasites.innerHTML = Timmy_pet.parasites;
    
        container_popap.classList.toggle("container_popap_pets_active");
        body_pet.classList.toggle("body_pet_active");
        pet.classList.toggle("pet_active");
        frendsCard.classList.toggle("frendsCardpets_active");
 });

//Freddie_pet//

    Freddie.addEventListener('click', function(){
    name_pet.innerHTML = Freddie_pet.name; 
    img_popap_pets.setAttribute('src', Freddie_pet.img);
    type.innerHTML = Freddie_pet.type;
    breed.innerHTML = Freddie_pet.breed;
    description.innerHTML = Freddie_pet.description;
    age.innerHTML = Freddie_pet.age;
    inoculations.innerHTML = Freddie_pet.inoculations
    diseases.innerHTML = Freddie_pet.diseases;
    parasites.innerHTML = Freddie_pet.parasites;
    
        container_popap.classList.toggle("container_popap_pets_active");
        body_pet.classList.toggle("body_pet_active");
        pet.classList.toggle("pet_active");
        frendsCard.classList.toggle("frendsCardpets_active");
 });

 //Charly_pet//

 
    Charly.addEventListener('click', function(){
    name_pet.innerHTML = Charly_pet.name; 
    img_popap_pets.setAttribute('src', Charly_pet.img);
    type.innerHTML = Charly_pet.type;
    breed.innerHTML = Charly_pet.breed;
    description.innerHTML = Charly_pet.description;
    age.innerHTML = Charly_pet.age;
    inoculations.innerHTML = Charly_pet.inoculations
    diseases.innerHTML = Charly_pet.diseases;
    parasites.innerHTML = Charly_pet.parasites;
    
        container_popap.classList.toggle("container_popap_pets_active");
        body_pet.classList.toggle("body_pet_active");
        pet.classList.toggle("pet_active");
        frendsCard.classList.toggle("frendsCardpets_active");
        
        
 });

btn_popap.addEventListener('click', function(){
    container_popap.classList.remove("container_popap_pets_active");
    body_pet.classList.remove("body_pet_active");
    pet.classList.remove("pet_active");
    frendsCard.classList.remove("frendsCardpets_active");
})

//body_pet.onmousemove = function(event) {
  //  event = event || window.event; 
    //console.log(event); 
    //container_popap.style.left  = event.offsetX +'px';
    
    //document.querySelector('.y').innerHTML = event.offsetY;
//}

        
        
        
    
 

//Pagination//

    let petdiv = frendsCard.querySelectorAll('div');
    let pet_str =[];
    let str_arr=[];
    let pet_array = [Jenifer, Katrine, Woody, Sophia, Timmy, Charly, Scarllet, Freddie];
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
    index_line=index_line+1;
if(index_line<7){
num.innerHTML=index_line;
switch(index_line){
    case 1 : str1();
    case 2 : str2();
    case 3 : str3();
    case 4 : str4();
    case 5 : str5();
    case 6 : str6();
}
}
});

   left.addEventListener('click', function(){
    if(index_line>1){
    index_line=index_line-1;
    num.innerHTML=index_line;
    switch(index_line){
        case 1 : str1();
        case 2 : str2();
        case 3 : str3();
        case 4 : str4();
        case 5 : str5();
        case 6 : str6();
    }
    }
   });
  
   
