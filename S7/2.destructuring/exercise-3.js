/**En base al siguiente javascript, usa destructuring para crear 2 variables igualandolo a la función e imprimiendolo por consola.


```js
const animalFunction = () => {
    return {name: 'Bengal Tiger', race: 'Tiger'}
};
``` */

const animalFunction = () => {
    return {name: 'Bengal Tiger', race: 'Tiger'}
};

// Destructuración de objeto directamente al llamar la función
const { name, race } = animalFunction();

// Imprimir las variables por consola
console.log("Nombre del animal:", name);
console.log("Raza del animal:", race);