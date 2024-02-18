/**Basandote en el html siguiente, elimina el elemento que tenga la clase .fn-remove-me.

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <p class="fn-remove-me">Bye bye</p>
</body>

</html>

let elementosAEliminar = document.querySelectorAll('.fn-remove-me');

// Utiliza un bucle for...of para recorrer los elementos y eliminar cada uno
for (let elemento of elementosAEliminar) {
    elemento.parentNode.removeChild(elemento);
}

``` */
let elementoAEliminar = document.querySelector('.fn-remove-me');

elementoAEliminar.remove(); 

