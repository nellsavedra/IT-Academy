// Fer un programa on l’usuari introdueix per pantalla un caràcter i un número. El programa imprimeix per pantalla un quadrat amb la mida i el caràcter introduïts per l’usuari.

// Exemple:

// % % % % %

// % % % % %

// % % % % %

// % % % % %

// % % % % %

let main = () => {
	
	document.getElementById("demo").innerHTML = "";
	
	let input = getInput("caracter","numero");
	
	drawOut(input);
	
};

let getInput = (a,b) => {
	
	let caracter = document.getElementById(a).value;
	let numero = Number(document.getElementById(b).value);
	
	return [caracter, numero];
	
};

let drawOut = (a) => {
	
	let caracter = a[0];
	let numero = a[1];
	
	let i = 0;
	let x = 0;
	let row = "";
	while(i < numero) {
		row += caracter;
		i++;
		if(i == numero) {
			while(x < numero) {
				document.getElementById("demo").innerHTML += `${row}<br>`;
				x++;
			}
		}
	}
	
	
}