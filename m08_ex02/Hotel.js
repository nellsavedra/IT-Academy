"use strict";

class Hotel {
	constructor(hotelName, roomsNumber, floorsNumber, totalArea, imageURL) {
		this._hotelName 	= hotelName;
		this._roomsNumber 	= roomsNumber;
		this._floorsNumber 	= floorsNumber;
		this._totalArea 	= totalArea;
		this._imageURL 		= imageURL;
	}

	get hotelName() {
		return this._hotelName;
	}
	
	set hotelName(hotelName) {
		this._hotelName = hotelName;
	}

	get roomsNumber() {
		return this._roomsNumber;
	}

	set roomsNumber(roomsNumber) {
		this._roomsNumber = roomsNumber;
	}

	get floorsNumber() {
		return this._floorsNumber;
	}

	set floorsNumber(floorsNumber) {
		this._floorsNumber = floorsNumber;
	}

	get totalArea() {
		return this._totalArea;
	}

	set totalArea(totalArea) {
		this._totalArea = totalArea;
	}
	
	get imageURL() {
		return this._imageURL;
	}
	
	set imageURL(imageURL) {
		this._imageURL = imageURL;
	}
	
	

	calcMaintenance() {
		const SERVICE_SALARY = 1500;

		let roomServicePersonal = Math.ceil(this.roomsNumber / 20),
			personal = roomServicePersonal > 1 ? "personas" : "persona",
			roomServiceCost = roomServicePersonal * SERVICE_SALARY;

		return `Para ${this.roomsNumber} habitaciones es necesario ${roomServicePersonal} ${personal} de servicio, el coste total: ${roomServiceCost} € al mes`;
	}
	
	hotelDesc(delButton, modButton) {
		let desc =`
		<img class="img-fluid mb-4" src="${this.imageURL}">
		<b>Hotel:</b> ${this.hotelName} ${delButton}${modButton}<br>
		<b>Habitaciones:</b> ${this.roomsNumber}<br>
		<b>Plantas:</b> ${this.floorsNumber}<br>
		<b>Superficie:</b> ${this.totalArea} m² <br>
		<b>Mantenimiento:</b> ${this.calcMaintenance()}
		`;
		
		return desc;
		
	}
}
