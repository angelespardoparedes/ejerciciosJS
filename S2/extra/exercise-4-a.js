/*Crea una función llamada `findArrayIndex` que reciba como parametros un array de textos y un texto y devuelve la 
posición del array cuando el valor del array sea igual al valor del texto que enviaste como parametro.

Haz varios ejemplos y compruebalos.

Sugerencia de función:

```js
function findArrayIndex(array, text) {}
```

Ej array:
````js
['Caracol', 'Mosquito', 'Salamandra', 'Ajolote']
````

Haz varios ejemplos y compruebalos.

Sugerencia de función:

```js
function findArrayIndex(array, text) {}
```

Ej array:
````js
['Caracol', 'Mosquito', 'Salamandra', 'Ajolote']
````

```` */

function findArrayIndex(array,text){

    for(const key in array){
        if(array[key]===text){
            return key; 
        }
    }
    return "No se encuentra "+text+"."

}

const arrayEjemplo=['Caracol', 'Mosquito', 'Salamandra', 'Ajolote']; 
const texto='Caracol';
const ejemplo1 = findArrayIndex(arrayEjemplo,texto);

console.log("La palabra "+texto+" se encuentra en la posición "+ejemplo1); 

const texto2='Mosquito'; 
const ejemplo2=findArrayIndex(arrayEjemplo,texto2); 

console.log("La palabra "+texto2+" se encuentra en la posición "+ejemplo2);
