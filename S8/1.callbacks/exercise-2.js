/**Usa el siguiente código como base y crea 3 funciones llamadas father, confirmExample, promptExample. La función confirmExample recibirá una variable de tipo string (description) que mostrará como titulo de la ventana y retornará el valor del confirm. La función promptExample hará lo mismo pero con un prompt. La función father recibirá como parámetros description, con el valor del titulo de las ventanas y una función callback (confirmExample o promptExample).

La función father deberá ejecutar la función que reciba como callback y añadir el valor resultado que retorne la función al array userAnwsers.

Ejecuta varias veces la función father y haz finalmente un console.log de userAnwsers

```js
const userAnwsers = [];

function confirmExample(){
    confirm()
}

function promptExample(){
    propmt()
}

function father(){

}

// guia de confirm y prompt
// const confirmValue = confirm('Soy un texto');
// const propmt = prompt('Soy un texto');
```
 */

const userAnwsers = [];

function confirmExample(descripcion){
    return confirm(descripcion); 
}

function promptExample(descripcion){
    return prompt(descripcion); 
}

function father(descripcion,callback){
    const result = callback(descripcion); 
    userAnwsers.push(result); 
    return result; 

}

//Ejecutar la funcion father varias veces

father('Primer ejemplo',confirmExample); 
father('Segundo ejemplo', promptExample); 
father('Tercer ejemplo',confirmExample); 

console.log(userAnwsers); 
