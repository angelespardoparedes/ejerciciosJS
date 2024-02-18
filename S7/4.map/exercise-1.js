/**Dado el siguiente array, devuelve un array con sus nombres utilizando .map().

```js
const users = [{id: 1, name: 'Abel'}, {id:2, name: 'Julia'},{id:3, name: 'Pedro'}, {id:4, name: 'Amanda'}];
```

 */
const users = [{id: 1, name: 'Abel'}, {id:2, name: 'Julia'},{id:3, name: 'Pedro'}, {id:4, name: 'Amanda'}];

// Utilizar el método map() para crear un nuevo array con solo los nombres de los usuarios
const userNames = users.map(user => user.name);

//Imprimit nuevo array
console.log("Usuarios: ",userNames); 