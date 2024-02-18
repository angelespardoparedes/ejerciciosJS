/**En base al ejercicio anterior, crea un botón con el texto 'X' 
 * para cada uno de los p que hayas insertado y que si el usuario hace click en este botón eliminemos el parrafo asociado. */

/**En base al ejercicio anterior. Crea dinamicamente un elemento <p> por cada petición a la api que diga...'El nombre X tiene un Y porciento de ser de Z' etc etc.

EJ: El nombre Abel tiene un 22 porciento de ser de ET y un 6 porciento de ser de MZ.


 */

const baseUrl = 'https://api.nationalize.io?name=';

// Seleccionar elementos del DOM
const nameInput = document.querySelector("input[type='text']");
const submitButton = document.querySelector("button");

// Agregar event Listener al botón
submitButton.addEventListener('click', () => {
    // Obtener valor del input
    const name = nameInput.value;
    // Construir la URL de la API
    const apiUrl = baseUrl + name;
    // Hacer solicitud
    fetch(apiUrl)
        .then(response => {
            return response.json();
        })
        .then(data => {
            // Crear un elemento <p> por cada resultado de la API
            data.country.forEach(country => {
                const p = document.createElement('p');
                // Crear el contenido del párrafo
                p.textContent = `El nombre ${name} tiene un ${Math.round(country.probability * 100)} porciento de ser de ${country.country_id}`;

                 // Agregar un botón de eliminación
                 const deleteButton = document.createElement('button');
                 deleteButton.textContent = ' Eliminar';
                 deleteButton.addEventListener('click', () => {
                     // Eliminar el párrafo asociado cuando se haga clic en el botón
                     p.remove();
                     deleteButton.remove(); // Eliminar también el botón de eliminación
                 });
                 
                 // Agregar el botón de eliminación al párrafo
                 p.appendChild(deleteButton);
                // Agregar el párrafo al body del documento
                document.body.appendChild(p);
            });
        });
});
