/**Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'. */
//Creo elemento p 
let nuevoParrafo= document.createElement("p");
//Añado texto al p 
nuevoParrafo.textContent = "Soy dinámico!"; 
//Agrego elemento al documento
document.body.appendChild(nuevoParrafo);