/**Basandote en el siguiente array crea una lista ul > li con los textos del array y metelo en el html.

```js
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
``` 
 nuevoDiv.appendChild(nuevoParrafo);
 nuevoParrafo.textContent = "Soy dinámico!"; 
*/
//Creo nueva lista 
let nuevaLista = document.createElement("ul"); 

const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

//Bucle para recorrer array de apps

for(app of apps){
    //Creo número de Items necesarios
    let nuevoItem = document.createElement("li");
    //Agrego los nuevos elementos a la lista
    nuevaLista.appendChild(nuevoItem); 
    //Inserto app en el texto de cada item de la lista
    nuevoItem.textContent=app;   

}
//Añado lista al documento html
document.body.appendChild(nuevaLista); 
