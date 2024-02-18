/**En base al siguiente javascript, usa destructuring para crear las variables name y itv con sus respectivos valores. 
 * Posteriormente crea 3 variables usando igualmente el destructuring para cada uno de los años y comprueba que todo esta bien imprimiendolo.


```js
const car = {name: 'Mazda 6', itv: [2015, 2011, 2020] }
``` */

const car = {name: 'Mazda 6', itv: [2015, 2011, 2020] }; 

// Destructuración del objeto car para crear las variables name e itv
const { name, itv } = car;
// Destructuración del array itv para extraer los años
const [year1, year2, year3] = itv;
// Imprimir las variables por consola para verificar
console.log("Nombre del coche:", name);
console.log("Año de la primera ITV:", year1);
console.log("Año de la segunda ITV:", year2);
console.log("Año de la tercera ITV:", year3);