/**Comprueba en cada uno de los usuarios que tenga almenos dos trimestres aprobados y añade la propiedad isApproved a true o false en consecuencia. Una vez lo tengas compruebalo con un console.log.

```js
const alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, {name: 'Lucia Aranda', T1: true, T2: false, T3: true}, {name: 'Abel Cabeza', T1: false, T2: true, T3: true}, {name: 'Alfredo Blanco', T1: false, T2: false, T3: false}, {name: 'Raquel Benito', T1: true, T2: true, T3: true}
]
``` */

const alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, {name: 'Lucia Aranda', T1: true, T2: false, T3: true}, {name: 'Abel Cabeza', T1: false, T2: true, T3: true}, 
    {name: 'Alfredo Blanco', T1: false, T2: false, T3: false}, {name: 'Raquel Benito', T1: true, T2: true, T3: true}];

    alumns['isApproved']=false; 

    for(let alumno of alumns){
      if(alumno.T1 & alumno.T2){
        alumno.isApproved = true; 
      } else if(alumno.T2 & alumno.T3){
        alumno.isApproved = true;
      }else if (alumno.T1 & alumno.T3){
        alumno.isApproved=true; 
      } else {alumno.isApproved=false;}
    }

    console.log(alumns);