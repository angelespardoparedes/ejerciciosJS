/**Dado el siguiente objeto, crea una copia usando spread operators.

```js
const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
```
 */

const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};

// Crear una copia del objeto utilizando el spread operator
const toyCopy = { ...toy };

console.log("Copia del objeto original:", toyCopy);