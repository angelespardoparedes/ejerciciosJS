/**Usando la función anterior beneficiate de poder conocer el indice del array para crear una función llamada 
`removeItem` que pasandole un array y un texto como parametros (los mismos parametros que en el anterior ejercicio) 
llame a la función anteriormente creada ``findArrayIndex`` y obten el indice para posteriormente usar la función de 
javascript ``.splice()`` para eliminar el elemento del array. Finalmente retorna el array.

De nuevo haz varios ejemplos para practicar y comprueba que funcionan correctamente. */

function findArrayIndex(array,text){

    for(const key in array){
        if(array[key]===text){
            return key; 
        }
    }
    return "No se encuentra "+text+"."

}

function removeItem (array, text){
    const indice = findArrayIndex(array, text); 
    array.splice (indice,1); 
    return array; 
}

const ejemploArray = ["A","B","C","D","E"]; 

console.log("Array antes de eliminar: "+ejemploArray); 

const textoAeliminar = "A"

const arrayTrasEliminarItemA = removeItem(ejemploArray,textoAeliminar); 

console.log("Array tras eliminar uno de sus Items: " +arrayTrasEliminarItemA); 

const textoBeliminar="B"; 

const arrayTrasEliminarItemB = removeItem(ejemploArray,textoBeliminar); 

console.log("Array tras eliminar uno de sus Items: " +arrayTrasEliminarItemB); 


