/**En base al siguiente javascript, crea variables en base a las propiedades del objeto usando object destructuring e imprimelas por consola. 
 * Cuidado, no hace falta hacer destructuring del array, solo del objeto.


```js
const game = {title: 'The last us 2', gender: ['action', 'zombie', 'survival'], year: 2020}
``` */

const game = {title: 'The last us 2', gender: ['action', 'zombie', 'survival'], year: 2020}; 

// Destructuración de objetos
const { title, gender, year } = game;

console.log("Título: ",title);
console.log("Género: ",gender);
console.log("Año:",year); 