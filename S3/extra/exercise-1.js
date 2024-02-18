/**Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los paises.

```js
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela']; 
//Creo nueva lista 
let nuevaLista = document.createElement("ul"); 

const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

//Bucle para recorrer array de apps
*/
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

let nuevaLista = document.createElement("ul"); 

for(let country of countries){
   //Creo número de Items necesarios
   let nuevoItem = document.createElement("li");
   //Agrego los nuevos elementos a la lista
   nuevaLista.appendChild(nuevoItem); 
   //Inserto app en el texto de cada item de la lista
   nuevoItem.textContent=country;  
}

document.body.appendChild(nuevaLista); 