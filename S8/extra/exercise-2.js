/**Si tienes windows. Lo primero que tienes que hacer es abrir powerShell como ADMINISTRADOR y ejecutar el comando 
 * `Set-ExecutionPolicy Unrestricted`. Elige la opciòn SI y dale a intro. Si tu ordenador está en español La opción SI será escribiendo una `S` 
 * y si está en ingles una `Y`.

Ahora vamos a trabajar con JSON SERVER para simular una api. Es muy fácil de usar. 
Simplemente instálalo de manera global usando el comando  `npm i -g json-server` y una vez lo tengas instalado, ejecuta este comando `json-server --watch exercise-2.json` en la posición donde esté el archivo exercise-2.json. 
Los datos que nos brindará serán los alojados en el archivo exercise-2.json y estarán accesibles por defecto en la url localhost:3000.

Si tienes windows tendrás que ejecutar `set-executionpolicy unrestricted –force` en una terminal abierta como administrador.
 
Para este ejercicio vamos a obtener y pintar en el html una serie de notas del diario de nuestro queridísimo Eliot. 
Para ello deberemos ejecutar el comando que comentabamos anteriormente y hacer un .fetch() a la url `http://localhost:3000/diary`.

Una vez tengas los datos tenemos que ordenarlos por fecha de menor a mayor con la propiedad .date.
 Nuestro carismático personaje es un poco caótico y escribe las notas en páginas salteadas...
  
Cuando lo tengas crea un div para cada nota del diario e introduce un ``<h3>``, un  ``<h5>`` y un ``<p>``
 para su .title, .date y .description respectivamente.
  
Finalmente añade un botón para poder eliminar las notas del diario. En concreto hay una que a Eliot no le apetece recordar mucho... */

//Realizar la solicitud

fetch('http://localhost:3000/diary')
            .then(response => response.json())
            .then(data => {
                // ordenar las notas de mayor a menor
                data.sort((a, b) => new Date(a.date) - new Date(b.date)); 
                
                // obtener el div 
                const diaryDiv = document.getElementById('diary'); 
                
                // Iterar sobre cada nota
                data.forEach(note => {
                    const noteDiv = document.createElement('div'); 
                    // Asignar un ID único a cada nota
                    noteDiv.id = `note-${note.id}`;
                    // Añadir el título, la fecha y la descripción de la nota
                    noteDiv.innerHTML = `
                        <h3>${note.title}</h3>
                        <h5>${note.date}</h5>
                        <p>${note.description}</p>
                        <button onclick="deleteNote(${note.id})">Eliminar</button>
                    `;

                    // Agregar el div de la nota al div contenedor del diario
                    diaryDiv.appendChild(noteDiv);
                });
            });

        // Función para eliminar una nota del diario
        function deleteNote(noteId) {
            fetch(`http://localhost:3000/diary/${noteId}`, {
                method: 'DELETE'
            })
            .then(() => {
                // Eliminar el div de la nota del DOM
                const noteDiv = document.getElementById(`note-${noteId}`);
                if (noteDiv) {
                    noteDiv.remove(); 
                }
            });
        }