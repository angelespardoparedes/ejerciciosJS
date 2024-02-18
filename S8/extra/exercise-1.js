/**En base a la api de Breaking Bad (https://breakingbadapi.com/), vamos a desarrollar una página dinámicamente en la que 
 * visualizar una galería con las imagenes y los nombres de los personajes de la serie. Para ellos es necesario usar el 
 * endpoint 'https://breakingbadapi.com/api/characters'.

Si te fijas en la respuesta de la api, la imagen está en la propiedad 'img' y el título en la propiedad 'name'. 

No funciona URL*/

async function fetchCharacters(){
    const response = await fetch('https://breakingbadapi.com/api/characters'); 
    const characters = await response.json();
    return characters; 
}

async function renderGallery(){
    const characters = await fetchCharacters();
    const galleryElement = document.getElementById('gallery'); 

    characters.forEach(character => {
        const characterElement = document.createElement('div');
        characterElement.classList.add('character');

        const imageElement = document.createElement('img'); 
        imageElement.src = character.img; 
        imageElement.alt = character.name; 

        const nameElement = document.createElement('p');
        nameElement.textContent = character.name; 

        characterElement.appendChild(imageElement);
        characterElement.appendChild(nameElement); 

        galleryElement.appendChild(characterElement);
    });
}

renderGallery(); 