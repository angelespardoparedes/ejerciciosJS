/**Convierte la siguiente función con un fetch utilizando async-await. Recuerda que para usar .fetch() tendrás que probar el ejercicio en el navegador;

````js
function getCharacters () {
    fetch('https://rickandmortyapi.com/api/character').then(res => res.json()).then(characters => console.log(characters));
}


````
 */
async function getCharacters () {
    const response = await fetch('https://rickandmortyapi.com/api/character');
    const character = await response.json();
    console.log(character); 
}

getCharacters();