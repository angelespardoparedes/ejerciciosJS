/**Dado el siguiente javascript filtra los videojuegos por gender = 'RPG' usando .filter() y usa .reduce() para conseguir la media de sus .score. 
 * La función .find() también podría ayudarte para el contrar el genero 'RPG' en el array .gender.

```js
const videogames = [
    {name: 'Final Fantasy VII', genders: ['RPG'], score: 9.5},
    {name: 'Assasins Creed Valhala', genders: ['Aventura', 'RPG'], score: 4.5},
    {name: 'The last of Us 2', genders: ['Acción', 'Aventura'], score: 9.8},
    {name: 'Super Mario Bros', genders: ['Plataforma'], score: 8.5},
    {name: 'Genshin Impact', genders: ['RPG', 'Aventura'], score: 7.5},
    {name: 'Legend of Zelda: Breath of the wild', genders: ['RPG', 'La cosa más puto bonita que he visto nunca
'], score: 10},
]
```const totalScore = exams.reduce((acumulator, exam)=>acumulator + exam.score, 0); 
 */
const videogames = [
    {name: 'Final Fantasy VII', genders: ['RPG'], score: 9.5},
    {name: 'Assasins Creed Valhala', genders: ['Aventura', 'RPG'], score: 4.5},
    {name: 'The last of Us 2', genders: ['Acción', 'Aventura'], score: 9.8},
    {name: 'Super Mario Bros', genders: ['Plataforma'], score: 8.5},
    {name: 'Genshin Impact', genders: ['RPG', 'Aventura'], score: 7.5},
    {name: 'Legend of Zelda: Breath of the wild', genders: ['RPG', 'La cosa más puto bonita que he visto nunca'], score: 10}];

// Filtrar los videojuegos por género 'RPG'
const videoRPGgames= videogames.filter(game => game.genders.includes('RPG')); 
// Calcular la media de las puntuaciones de los videojuegos filtrados
const sumaVideoGames = videoRPGgames.reduce((acumulador,game)=>acumulador + game.score,0); 
const mediaVideoGames = sumaVideoGames/videoRPGgames.length; 

//Imprimir resultado
console.log("La media de puntuaciones de los juegos RPG es ",mediaVideoGames); 

