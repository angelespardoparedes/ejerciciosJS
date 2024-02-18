/**Crea una función llamada ``swap`` que reciba un array y dos parametros que sean indices del array. La función deberá 
intercambiar la posición de los valores de los indices que hayamos enviado como parametro. Retorna el array 
resultante.

Sugerencia de array:
````js
['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño']
````
 */

function swap(array, indice1, indice2){
    const posicion = array[indice1]; 
    array[indice1]=array[indice2]; 
    array[indice2]=posicion; 

    return array; 
}

const ejemploArray = ['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño']; 

const arrayCambiado = swap(ejemploArray, 0, 2); 

console.log(arrayCambiado); 