/**Dado el siguiente javascript y html. Añade la funcionalidad necesaria usando fetch() para hacer una consulta a la api 
 * cuando se haga click en el botón, pasando como parametro de la api, el valor del input.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <input type="text">
    <button>Consultar</button>
</body>
</html>
```

```js
const baseUrl = 'https://api.nationalize.io?name=';
``` */
const baseUrl = 'https://api.nationalize.io?name=';

// Seleccionar elementos del DOM
const nameInput = document.querySelector("input[type='text']"); // Corregido
const submitButton = document.querySelector("button"); // Corregido

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
            console.log(data);
        });
});