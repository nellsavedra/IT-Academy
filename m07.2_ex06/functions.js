// L’usuari ha d’introduir números fins que introdueixi un nombre primer. 

// En el moment que l’usuari introdueixi un nombre primer, el programa ha de treure per pantalla el següent missatge: Exacte, el número “x” és primer!

// Nota: Utilitzar el mètode creat a l'exercici: (M7.2.) Exercici 5
"use strict"

let main = () => {
	
	let userNumber = Number(document.getElementById("numero").value),
		isNumberPrime = isPrime(userNumber);
	
	getMessage(userNumber, isNumberPrime);
}

let isPrime = (numberToCheck) => {
	
	
	if(numberToCheck == 0 || numberToCheck == 1 || numberToCheck == 4) {
		return false;
	}
	
	for(let x = 2; x < numberToCheck / 2; x++) {
		if(numberToCheck % x == 0) {
			return false;
		}
		
	}
	
	return true;
	
}

let getMessage = (userNumber, isBool) => {
	
	let message;
	
	(isBool) ? message = `${userNumber} es un número primo 🥳` : message = `${userNumber} no es un número primo 😢`;
	
	document.getElementById("demo"). innerHTML = message;
}