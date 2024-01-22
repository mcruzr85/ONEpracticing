//const createPrompt = require("prompt-sync"); //se coloca esto si quiero usar el prompt en el server-x consola
//const prompt = createPrompt();

console.log("Hola");
//alert("Hola desde el Alert");

let counter = 1;
while (counter < 11) {
  console.log(counter);
  counter++;
}
counter = 10;
while (counter >= 0) {
  console.log(counter);
  counter--;
}

if (typeof window !== "undefined") {
  console.log("You are on the browser");
  // 👉️ can use alert()
} else {
  console.log("You are on the server");
  // 👉️ can't use alert()
}

let numero = prompt("Inserte un numero");
while (numero >= 0) {
  alert(numero);
  numero--;
}
let personQuantity = prompt("How many people?");
let quantity = parseInt(personQuantity);
let word = quantity === 1 ? "person" : "persons";
console.log(word);

let edad = prompt("How old  are you");
let str = "Voce é ";
let response = edad >= 18 ? "maior de edade" : "menor de edade";
console.log(str + response);

console.log(parseInt(Math.random() * 1000 + 1));
//numero random entre 1 y x -> suma +1 asi excluye el zero
//multiplica por el numero final del intervalo-> *10 hasta 10...
