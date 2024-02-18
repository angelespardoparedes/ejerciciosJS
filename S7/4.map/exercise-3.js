/**Dado el siguiente array, devuelve una lista que contenga los valores de la propiedad .name y añade al valor de .name el string 
 * ' (Visitado)' cuando el valor de la propiedad isVisited = true.

```js
const cities = [{isVisited:true, name: 'Tokyo'}, {isVisited:false, name: 'Madagascar'},{isVisited:true, name: 'Amsterdam'}, {isVisited:false, name: 'Seul'}];
```

 */
const cities = [{isVisited:true, name: 'Tokyo'}, {isVisited:false, name: 'Madagascar'},{isVisited:true, name: 'Amsterdam'}, {isVisited:false, name: 'Seul'}];

// Utilizar el método map() para crear una nueva lista con los valores de la propiedad .name

const cityList = cities.map(city=>{
    // Agregar ' (Visitado)' al nombre si isVisited es true, de lo contrario, mantener el nombre original
    if(city.isVisited){
        return{...city, name:city.name + ' (Visitado)'}; 
    } else{
        return {...city}; 
    }
}); 

console.log("Ciudades: ", cityList); 