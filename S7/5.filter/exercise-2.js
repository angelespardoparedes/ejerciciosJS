/**Dado el siguiente array, utiliza .filter() para generar un nuevo array con los valores que sean par.

````js
const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];
```` 
 */

const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

// Utilizar el método filter() para generar un nuevo array con valores pares
const filteredAges= ages.filter(age => age%2===0); 

//Imprimir edades filtradas

console.log("Edades pares: ", filteredAges); 