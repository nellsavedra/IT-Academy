// Taula de multiplicar. L’usuari introduirà un número (del 1 al 10) per pantalla, i utilitzant un bucle, el programa li mostrarà la taula de multiplicar d’aquell número.

// Exemple:

// 2 x 1 = 2

// 2 x 2 = 4

// 2 x 3 = 6

// ...

// 2 x 10 = 20
"use strict";

let main = () => {
	
	document.getElementById("demo").innerHTML = "";
	
	let number = getNumber("numero");
	if(number) { generarTabla(number); } else { return; }
	
};

let getNumber = (a) => {
	
	let number = Number(document.getElementById(a).value);
	
	if(number <= 0 || number > 10) {
		alert("Tiene que ser un número del 1 al 10");
		return false;
	}
	
	return number;
	
};

let generarTabla = (a) => {
	
	let counter = 1;
	while(counter <= 10) {
		document.getElementById("demo").innerHTML += `${a} x ${counter} = ${a * counter}<br>`;
		counter++;
	}
	
};