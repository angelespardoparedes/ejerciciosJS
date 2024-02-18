/**Dado el siguiente html y javascript, utiliza .filter() para mostrar por consola los streamers que incluyan la palabra
 introducida en el input. De esta forma, si introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Si
  introduzco 'i', me deberia de mostrar el streamer 'Rubius' e 'Ibai'.

````js
const streamers = [{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'}, {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, 
{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'}, {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}];
```` 

````html
<!doctype html>
<html lang="en">
<head>
<meta charset="UTF-8">
             <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
             <meta http-equiv="X-UA-Compatible" content="ie=edge">
             <title>Document</title>
</head>
<body>
  <input type="text" data-function="toFilterStreamers"/>
</body>
</html>
````
 */

const streamers = [{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'}, {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, 
{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'}, {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}];

document.getElementById('searchInput').addEventListener('input', filterStreamers);

// Función para filtrar los streamers según el texto ingresado
function filterStreamers() {
    const searchText = document.getElementById('searchInput').value.toLowerCase();

    // Filtrar los streamers según el texto ingresado
    const filteredStreamers = streamers.filter(streamer =>{
        return streamer.name.toLowerCase().includes(searchText); 
    })

 console.log("Streamers encontrados: ",filteredStreamers); 



}
// Agregar un evento de escucha al input para llamar a la función de filtrado cuando se escriba algo
