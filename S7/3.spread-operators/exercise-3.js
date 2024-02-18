/**Dado los siguientes arrays, crea un nuevo array juntandolos usando spread operatos

```js
const pointsList = [32, 54, 21, 64, 75, 43];
const pointsLis2 = [54,87,99,65,32];
```
 */
const pointsList = [32, 54, 21, 64, 75, 43];
const pointsList2 = [54,87,99,65,32];

// Crear un nuevo array juntando los dos arrays utilizando el spread operator
const combinedPoints = [...pointsList, ...pointsList2];

console.log("Nuevo array combinado:", combinedPoints);