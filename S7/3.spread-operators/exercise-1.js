/**Dado el siguiente array, crea una copia usando spread operators.

```js
const pointsList = [32, 54, 21, 64, 75, 43]
```
 */
const pointsList = [32, 54, 21, 64, 75, 43];

// Crear una copia del array utilizando el spread operator
const pointsListCopy = [...pointsList];

console.log("Copia del array original:", pointsListCopy);