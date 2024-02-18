/**Inserta dinamicamente en un html un div que contenga una p con javascript. */

//Crear variables nuevoDiv y nuevoParrafo, guardando los nuevos elementos creados con createElement

let nuevoDiv= document.createElement("div");
let nuevoParrafo= document.createElement("p");

//agregar parrafo en el nuevo div
nuevoDiv.appendChild(nuevoParrafo);
//Agrego el div al documento
document.body.appendChild(nuevoDiv); 

