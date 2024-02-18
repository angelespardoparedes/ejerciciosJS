/**Basandote en el siguiente html y javascript,inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
   <div class="fn-insert-here"></div>
   <div></div>
   <div class="fn-insert-here"></div>
   <div>Aqui no va un p</div>
</body>
</html>``` 
//Creo nuevo párrafo

let nuevoParrafo= document.createElement("p"); 
//Crear nodo con el texto

let textoParrafo = document.createTextNode('Voy en medio!');
*/

let divInserthere = document.querySelectorAll(".fn-insert-here"); 

for(let div of divInserthere){
    //Creo nuevo párrafo
    let nuevoParrafo = document.createElement("p"); 
    //Le pongo texto
    let textoParrafo = document.createTextNode('Voy dentro!'); 
    nuevoParrafo.appendChild(textoParrafo); 
    //añado el parrafo a los div inserhere
    div.appendChild(nuevoParrafo); 
}

