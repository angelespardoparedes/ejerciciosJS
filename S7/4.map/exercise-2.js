/**Dado el siguiente array, devuelve una lista que contenga los valores de la propiedad .name y cambia el nombre a 'Anacleto' en caso de que empiece por 'A'.

```js
const users = [{id: 1, name: 'Abel'}, {id:2, name: 'Julia'},{id:3, name: 'Pedro'}, {id:4, name: 'Amanda'}];
```

 */
const users = [{id: 1, name: 'Abel'}, {id:2, name: 'Julia'},{id:3, name: 'Pedro'}, {id:4, name: 'Amanda'}];

// Utilizar el método map() para crear una nueva lista con los valores de la propiedad .name
 const usersList = users.map(user =>{
    //Cambiar el nombre a Anacleto
    if(user.name.startsWith('A')){
        return {...user,name:"Anacleto"}; 
    } else{
        return {...user}; 
    }
 }); 

 console.log("Lista de usuarios con Anacleto",usersList); 
 console.log("Lista original", users); 