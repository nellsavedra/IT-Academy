// Fes un programa que mostri el següent per pantalla:

// *

// * *

// * * *

// * * * *

// * * * * *

// * * * * * *

// * * * * *

// * * * *

// * * *

// * *

// *

// La línea amb més “*” vindrà donada per un número que l’usuari introduirà per teclat.

// Condició: En tot el codi del programa només hi pot haver-hi dos *
// També, a poder ser, no utilitzis cap mètode com repeat() o substring() de la classe String
"use strict";

let main = () => {

	getDraw(Number(document.getElementById("numero").value), "*");
	
};

let getDraw = (num, char) => {
	let counter = num,
		caracter = char,
		row = [],
		i = 0;
	
	while (i < counter) {
		row.push(caracter);
		document.getElementById("demo").innerHTML += `${row.join("")}<br>`;
		i++;
		
		if (i == counter) {
			let x = 0;
			
			while (x < counter) {
				row.shift();
				document.getElementById("demo").innerHTML += `${row.join("")}<br>`;
				x++;
			}
		}
	}
};
