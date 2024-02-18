/**Basandote en el siguiente html, elimina todos los nodos que tengan la clase .fn-remove-me

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
   <p class="fn-remove-me">Eliminame!</p>
   <p>No me elimines!</p>
   <p>No me elimines!</p>
   <p class="fn-remove-me">Eliminame!</p>
   <p>No me elimines!</p>
   <p class="fn-remove-me">Eliminame!</p>
   <p class="fn-remove-me">Eliminame!</p>
   <p>No me elimines!</p>
</body>
</html>``` 
let h2Element = document.querySelector('.fn-insert-here');
*/



let elementosAEliminar = document.querySelectorAll('.fn-remove-me');

// Utiliza un bucle for...of para recorrer los elementos y eliminar cada uno
for (let elemento of elementosAEliminar) {
    elemento.parentNode.removeChild(elemento);
}
