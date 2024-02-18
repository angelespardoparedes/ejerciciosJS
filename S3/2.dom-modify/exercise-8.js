/**Basandote en el siguiente html,inserta una p con el texto 'Voy en medio!' entre los dos div. Recuerda que no solo puedes insertar elementos con .appendChild.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
   <div></div>
   <div></div>
</body>
</html>``` */

//Creo nuevo párrafo

let nuevoParrafo= document.createElement("p"); 
//Crear nodo con el texto

let textoParrafo = document.createTextNode('Voy en medio!');

//añado el texto al p
nuevoParrafo.appendChild(textoParrafo); 

//Obtengo el primer div
let primerDiv = document.querySelector("div"); 

//Finalmente, meto el p con el nodo texto 

primerDiv.parentNode.insertBefore(nuevoParrafo, primerDiv.nextSibling); 