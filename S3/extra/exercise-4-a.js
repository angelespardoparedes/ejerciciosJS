/**Dado el siguiente array de objetos. Crea dinamicamente en el html una lista de div que contenga un elemento h4 para el titulo y otro elemento img para la imagen. 

```js
const countries = [{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}];
``` 
 nuevaLista.appendChild(nuevoItem); */

const countries = [
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=1" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=2" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=3" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=4" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=5" },
];

let cuerpo = document.querySelector("body"); 

for(let country of countries){
    //Crear listado de div
    let nuevoDiv= document.createElement("div"); 
    //Crear h4
    let nuevoTitulo = document.createElement("h4"); 
    //Crear img
    let nuevaImagen = document.createElement("img"); 

    //A los h4 les pongo la propiedad titulo del objeto country
    nuevoTitulo.textContent = country.title; 
    //A las img le añado las url
    nuevaImagen.src = country.imgUrl; 
    //Añadir titulo e imagen al div
    nuevoDiv.appendChild(nuevoTitulo); 
    nuevoDiv.appendChild(nuevaImagen); 



    //Agrego los div al documento html
    cuerpo.appendChild(nuevoDiv); 
  

}

