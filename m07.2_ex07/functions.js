// L’usuari introdueix un any a per teclat
// i el programa crida a un mètode que indiqui l’any és de traspàs o no.

let main = () => {
	let userYear = Number(document.getElementById("numero").value),
		isLeapYear = isLeapYearCheck(userYear),
		message = "";

	if (userYear < 1582) {
		alert("Introduce un año posterior a 1582");
		return;
	}

	if (isLeapYear) {
		message = `👏🏽 El año ${userYear} es bisiesto`;
	} else {
		message = `👎🏽 El año ${userYear} no bisiesto`;
	}

	document.getElementById("demo").innerHTML = message;
};

let isLeapYearCheck = (year) => {
	if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
		return true;
	}
	return false;
};
