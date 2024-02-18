/**Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript. */

//Crear variable nuevoDiv guardando los nuevos elementos creados con createElement

let nuevoDiv= document.createElement("div");


//Crear loop para que se creen 6 párrafos

for(let i=0; i<6;i++){
    let nuevoParrafo= document.createElement("p");
    nuevoDiv.appendChild(nuevoParrafo);
}
//Añado nuevo div en el documento
document.body.appendChild(nuevoDiv); 