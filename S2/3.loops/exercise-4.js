/**Usa un bucle forof para recorrer todos los juguetes y elimina los que incluyan la palabra `gato`. Recuerda que puedes usar la función `.includes()` para comprobarlo.
```js
const toys = [{id: 5, name: 'Buzz MyYear'}, {id: 11, name: 'Action Woman'}, 
{id: 23, name: 'Barbie Man'}, {id: 40, name: 'El gato con Guantes'},{id: 40, name: 'El gato felix'}]

*/



const toys = [{id: 5, name: 'Buzz MyYear'}, {id: 11, name: 'Action Woman'}, 
{id: 23, name: 'Barbie Man'}, {id: 40, name: 'El gato con Guantes'},{id: 40, name: 'El gato felix'}]

const elementosAeliminar=[]; 



for(let toy of toys){
    if(toy.name.includes("gato")){
        elementosAeliminar.push(toys.indexOf(toy)); 
    }
}

elementosAeliminar.reverse(); 

for(let index of elementosAeliminar){
    toys.splice(index, 1); 
}

console.log(toys);