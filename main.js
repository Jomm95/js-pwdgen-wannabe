let name = prompt("Qual è il tuo nome?");
let surname = prompt("Qual è il tuo cognome?");
let favColor = prompt("Qual è il tuo colore preferito");

let password = name + surname + favColor + "21";

document.getElementById("password").innerHTML = "La tua nuova password è: " + password;
