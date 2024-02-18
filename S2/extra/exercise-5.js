/**Crea una función llamada ``rollDice()`` que reciba como parametro el numero de caras que queramos que tenga el dado 
que deberá simular el codigo dentro de la función. Como hemos dicho, que la función use el parametro para simular 
una tirada de dado y retornar el resultado. Si no se te ocurre como hacer un numero aleatorio no te preocupes! busca 
información sobre la función de javascript ``Math.random()`` */



function rollDice(numeroCaras){
    const result = Math.floor(Math.random()*numeroCaras); 

    return result; 

}

const numeroCaras = 6; 

const mostrarResultado = rollDice(numeroCaras); 

console.log(mostrarResultado); 

const numeroCaras2=12;

const mostrarResultado2=rollDice(numeroCaras2);