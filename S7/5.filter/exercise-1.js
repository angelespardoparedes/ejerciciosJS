/**Dado el siguiente array, utiliza .filter() para generar un nuevo array con los valores que sean mayor que 18

````js
const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];
```` 

 */
const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

// Utilizar el método filter() para generar un nuevo array con valores mayores que 18
const filteredAges = ages.filter(age => age>18); 

//Imprimir edades filtradas

console.log("Mayores de 18: ", filteredAges); 