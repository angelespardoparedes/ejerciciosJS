/**Utiliza esta url de la api Agify 'https://api.agify.io?name=michael' para hacer un .fetch() y recibir los datos que devuelve. 
 * Imprimelo mediante un console.log(). Para ello, es necesario que crees un .html y un .js. */
// Realizar la solicitud a la API Agify y mostrar los datos en la consola
fetch('https://api.agify.io?name=michael')
    .then(response => response.json())
    .then(data => console.log(data));
