/**Basandote en el siguiente html, añade un evento 'input' que ejecute un console.log con el valor del input.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
  <input type="text"/>
</body>
</html>
``` */

//Cojo el elemento con tag input del html
let input = document.getElementsByTagName("input"); 
//como recibo un array a pesar de solo haber uno, cojo el primer y unico input que hay en html
let primerInput = input[0]; 
//Le añado el evento
primerInput.addEventListener('input', function(event) {
    // Imprimir el valor del input en la consola
    console.log('Valor del input:', event.target.value);
});
