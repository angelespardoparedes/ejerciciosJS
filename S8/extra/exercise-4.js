/**Vamos a usar de nuevo JSON SERVER para crear un listado de personajes de la serie Dragon Ball.

Para ello, ejecutemos `json-server --watch exercise-4.json`. En este caso el endpoint con los personajes es `http://localhost:3000/characters`.

La idea es crear una galería con los planetas, que podemos obtener del endpoint `http://localhost:3000/planets` y, 
que si el usuario hace click en alguno de los planetas, salga debajo los personajes que están asociados por el .idPlanet a ese planeta en cuestión, 
mostrando tanto sus imágenes .avatar como sus nombres .name. Para poder obtener la información de los personajes podemos hacer un 
filtro de los personajes llamando a la url, por ejemplo `http://localhost:3000/characters?idPlanet=1` y, 
teniendo en cuenta que el idPlanet variará dependiendo del planeta seleccionado.
 
Además de esto, agrega un buscador para poder filtrar los personajes por nombre una vez que has seleccionado el planeta. 
Por lo tanto, deberemos incluir el input debajo del planeta y encima de los personajes listados.

Como extra podríamos hacer que si haces click a un personaje salga la descripción debajo. 
Como extra del extra haz que la descripción se oculte si vuelves a hacer click en el mismo personaje. */

// Obtener la lista de planetas
fetch('http://localhost:3000/planets')
  .then(response => response.json())
  .then(planets => {
    // Crear una galería de planetas en el HTML
    const gallery = document.getElementById('planet-gallery');
    planets.forEach(planet => {
      const planetDiv = document.createElement('div');
      planetDiv.classList.add('planet');
      planetDiv.textContent = planet.name;
      planetDiv.addEventListener('click', () => {
        // Mostrar los personajes asociados al planeta
        fetch(`http://localhost:3000/characters?idPlanet=${planet.id}`)
          .then(response => response.json())
          .then(characters => {
            const characterList = document.getElementById('character-list');
            characterList.innerHTML = ' '; // Limpiar la lista de personajes
            characters.forEach(character => {
              const characterDiv = document.createElement('div');
              characterDiv.classList.add('character');
              characterDiv.textContent = character.name;
              characterDiv.addEventListener('click', () => {
                // Mostrar u ocultar la descripción del personaje
                const descriptionDiv = document.createElement('div');
                descriptionDiv.textContent = character.description;
                descriptionDiv.classList.add('description');
                if (characterDiv.classList.contains('active')) {
                  descriptionDiv.style.display = 'none'; // Ocultar la descripción
                  characterDiv.classList.remove('active');
                } else {
                  descriptionDiv.style.display = 'block'; // Mostrar la descripción
                  characterDiv.classList.add('active');
                }
                characterDiv.appendChild(descriptionDiv);
              });
              characterList.appendChild(characterDiv);
            });
          });
      });
      gallery.appendChild(planetDiv);
    });
  });

// Agregar la funcionalidad de búsqueda
const searchInput = document.getElementById('search-input');
searchInput.addEventListener('input', () => {
  const searchTerm = searchInput.value.toLowerCase();
  const characterDivs = document.querySelectorAll('.character');
  characterDivs.forEach(characterDiv => {
    const characterName = characterDiv.textContent.toLowerCase();
    if (characterName.includes(searchTerm)) {
      characterDiv.style.display = 'block'; // Mostrar el personaje si coincide con el término de búsqueda
    } else {
      characterDiv.style.display = 'none'; // Ocultar el personaje si no coincide con el término de búsqueda
    }
  });
});
