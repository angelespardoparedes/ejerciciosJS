/**Dado el siguiente array, usa .find() para econtrar la pelicula del año 2010.

```js
const movies = [{title: 'Madagascar', stars: 4.5, date: 2015},{title: 'Origen', stars: 5, date: 2010},{title: 'Your Name', stars: 5, date: 2016}];
``` */

const movies = [{title: 'Madagascar', stars: 4.5, date: 2015},{title: 'Origen', stars: 5, date: 2010},{title: 'Your Name', stars: 5, date: 2016}];

//Encontrar pelicula del año 2010

const movie2020 = movies.find(movie=> movie.date === 2010); 

console.log(movie2020); 