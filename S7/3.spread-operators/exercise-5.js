/**Dado el siguiente array. Crear una copia de él eliminando la posición 2 pero sin editar el array inicial. De nuevo
, usando spread operatos.

```js
const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja']; 
```
 */
const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja']; 

// Crear una copia del array excluyendo el elemento en la posición 2
const colorsCopy = [...colors.slice(0, 2), ...colors.slice(3)]; //usamos dos slice 1 que coja al array desde la posición 0 hasta el 2 y lo unimos al array resultanto del segundo slice

console.log("Copia del array excluyendo el elemento en la posición 2:", colorsCopy);
console.log("Array original",colors);
