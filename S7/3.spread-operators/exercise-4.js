/**Dado los siguientes objetos. Crea un nuevo objeto fusionando los dos con spread operators.
```js
const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const toyUpdate = {lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk']}
```
 */

const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const toyUpdate = {lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk']};

// Crear un nuevo objeto juntando los dos objetos previos utilizando el spread operator
const juguetesTotal = {...toy,...toyUpdate}; 

//Imprimit nuevo objeto
console.log(juguetesTotal); 