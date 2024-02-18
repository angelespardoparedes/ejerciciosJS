/**Usa un foin para imprimir por consola los datos del alienigena.
```js
const alien = {
    name: 'Wormuck',
    race: 'Cucusumusu',
    planet: 'Eden',
    weight: '259kg'
}
```
 */
const alien = {
    name: 'Wormuck',
    race: 'Cucusumusu',
    planet: 'Eden',
    weight: '259kg'
}; 

for(let propiedades in alien){
    console.log(`${propiedades}: ${alien[propiedades]}`);
}