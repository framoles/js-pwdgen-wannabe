const fname = prompt("Inserire nome");
const surname = prompt("Inserire cognome");
const color = prompt("Inserire colore");
const password = fname + surname + color + Math.floor(Math.random() * 100);


document.getElementById("name").innerText = "Nome: " + fname;
document.getElementById("surname").innerText = "Cognome: " + surname;
document.getElementById("color").innerText = "Colore: " + color;
document.getElementById("password").innerText = "La tua password è:  " + password;