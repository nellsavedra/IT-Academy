// L’usuari introdueix un nombre per teclat i el programa crida a un mètode que ha de mostrar la successió de Fibonacci.

// Exemple:

// Si l’usuari introdueix el 10 el resultat ha de ser:
// 0,1,1,2,3,5,8,13,21,34
"use strict";

let main = () => {
	
	let userNumber = Number(document.getElementById("numero").value),
		fibonacci = getFibonacci(userNumber);
	
	document.getElementById("demo").innerHTML = fibonacci.join(" ");
		
}

let getFibonacci = (num) => {
	
	let n1 = 0, 
		n2 = 1, 
		siguiente,
		i = 0,
		result = [];
		
	while(i < num) {
		result.push(n1);
		siguiente = n1 + n2;
		n1 = n2;
		n2 = siguiente;
		i++;
	}
	
	return result;
	
}