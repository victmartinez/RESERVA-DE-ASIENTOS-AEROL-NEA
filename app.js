// creamos contenedores con lo asiento'
let airlineSeat = [false, false, false, false, false, false, false, false, false, false, ];
let counterSeats= 0; 
painter = function(array) {
let containerSeats = document.getElementById("seats");

    for (let i=0; i<array.length; i++){
    let createSeat = document.createElement("div");
    createSeat.className = "seats"
    if  (i < 4) {
    createSeat.style.background = "grey";
    } 
    else { createSeat.style.background = "darksalmon";
    }
       
    // insertamos contenedores en el HTML
    containerSeats.appendChild(createSeat);
    }
    }; 

    // prompt de selección(cambiar a botones al terminar)
let reserve = function () {
    let btn = document.getElementById("button");
    btn.addEventListener("click", chooseClass);
};
let chooseClass = function () {
let choice = prompt("¿en qué clase quieres viajar? \n 1. Primera Clase \n 2. Clase Económica \n \n por favor ingresa el número de tu preferencia");
if (choice == 1 ){
   checkFC();}
else if (choice == 2) {
    checkEC();}    
};

//  verificamos disponibilidad
let checkFC = function () {
    let clase = "Primera Clase";
    for (let index = 0; index < 4; index ++){
        if (airlineSeat[index]== false){
            airlineSeat[index] = true;
            reservedSeat(index);
            printTicket(index, clase);
            break;
        } 
    }

};
let checkEC = function () {
    let clase = "Clase Economica";
    for (let index = 4; index < 10; index++) {
        if (airlineSeat[index] == false) {
            airlineSeat[index] = true;
            reservedSeat(index);
            printTicket(index, clase);
            break;
        }
    }

};
// diferenciación visual de seats reservados
let reservedSeat = function (indexToPaint) {
    let reserved = document.getElementsByClassName("seats");
    reserved[indexToPaint].textContent = "OCUPADO";

};
// imprimir ticket
let printTicket = function (index, zone) {
    let containerTicket = document.getElementById("containerTicket");
    let ticket = document.createElement("div")
    ticket.className = "ticket";
    let tittle = document.createElement("p")  
    let seatNumber = document.createElement("p")  
    let zoneTicket = document.createElement("p")  
    tittle.textContent = "PASE PARA ABORDAR";
    seatNumber.textContent = "Número de asiento: " + (index + 1 ); 
    zoneTicket.textContent = zone;
// insertar ticket
    ticket.appendChild(tittle);
    ticket.appendChild(seatNumber);
    ticket.appendChild(zoneTicket);
    containerTicket.appendChild(ticket);

};
// llamado a funciones iniciales
     painter(airlineSeat); 
    reserve();

