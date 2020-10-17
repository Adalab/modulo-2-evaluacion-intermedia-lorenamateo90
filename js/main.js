'use strict'
// variables declaradas
const number = document.querySelector(".js-number");
const button = document.querySelector(".js-button");
const paragraph1 = document.querySelector(".js-paragraph1");
const paragraph2 = document.querySelector(".js-paragraph2");

// 1. Generar numero ramdom
function getRandomNumber(max) {
return Math.ceil(Math.random() * max);
 }
 const random = getRandomNumber(100);
console.log (random);

//  2. Cambiar mensaje paragraph1

 function showMessage (){
  let numberValue = parseInt(number.value);
  if (numberValue <0  || numberValue >= 100 ) {
      // console.log("debe ser un numero de 0 a 100");
      paragraph1.innerHTML = "debe ser un numero de 0 a 100";
  }
  else if (numberValue < random ){
      // console.log("bajo")
          paragraph1.innerHTML = "bajo";
          
      }
  else if (numberValue > random){
      // console.log("alto")
          paragraph1.innerHTML = "alto";
          
      }
  else if (numberValue === random){
      // console.log("Ganadora")
          paragraph1.innerHTML = "ganadora";
         
      }
   updateClick();
}


// 3. Evento botón - número
let click = 0;
function updateClick() {
  click++;
  paragraph2.innerHTML = click;
}
button.addEventListener("click", showMessage);
