/**Dado el siguiente array, utiliza .filter() para generar un nuevo array con los streamers que incluyan el caracter 'Legends' en su propiedad .gameMorePlayed. 
 * Recomendamos usar la funcion .includes() para la comprobación.

Además, pon el valor de la propiedad .gameMorePlayed a MAYUSCULAS cuando .age sea mayor que 35.

````js
const streamers = [{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'}, {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, 
{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'}, {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}];
```` 
 */

const streamers = [{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'}, {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, 
{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'}, {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}];

// Utilizar el método filter() para generar un nuevo array con streamers cuya propiedad gameMorePlayed incluya 'Legends'

const streamersWithLegends = streamers.filter(stream => stream.gameMorePlayed.includes('Legends')); 

console.log("Streamers que contengan Legends sin mayúscula",streamersWithLegends);

// Modificar la propiedad gameMorePlayed a MAYÚSCULAS si age es mayor que 35

const streamersWithUppercase = streamersWithLegends.map(streamer => {
    if(streamer.age > 35){
        return {...streamer, gameMorePlayed: streamer.gameMorePlayed.toUpperCase()}; 
    } else {
        return{...streamer}; 
    }

}); 

console.log("Streamers que contengan Legends con mayúscula",streamersWithUppercase); 