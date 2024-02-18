/**Dado el siguiente array, utiliza .filter() para generar un nuevo array con los streamers que tengan el gameMorePlayed = 'League of legends' y tengan menos de 30 años.

````js
const streamers = [{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'}, {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
 {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'}, {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}];
```` 
 */

const streamers = [{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'}, {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
 {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'}, {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}];

 
 //Crear nuevo array con los streamers que tengan el gameMorePlayed= 'League of Legends menores de 30 años'

 const filteredStreamers = streamers.filter(stream => stream.gameMorePlayed ==='League of Legends' && stream.age < 30);

 console.log("Streamers que mas han jugado con League of Legends y tengan menos de 30",filteredStreamers); 
