// L’usuari introdueix un nombre per teclat i el programa crida a un mètode que indiqui si el número és primer o no.
"use strict"

let main = () => {
	
	let isNumberPrime = isPrime(Number(document.getElementById("numero").value));
	
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