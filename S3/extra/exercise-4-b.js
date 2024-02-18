/**Basandote en el ejercicio anterior. Crea un botón que elimine el último elemento de la lista. */

const countries = [
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=1" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=2" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=3" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=4" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=5" },
];

//PARTE A DEL EJERCICIO

let cuerpo = document.querySelector("body");

for (let country of countries) {
  //Crear listado de div
  let nuevoDiv = document.createElement("div");
  //Crear h4
  let nuevoTitulo = document.createElement("h4");
  //Crear img
  let nuevaImagen = document.createElement("img");

  //A los h4 les pongo la propiedad titulo del objeto country
  nuevoTitulo.textContent = country.title;
  //A las img le añado las url
  nuevaImagen.src = country.imgUrl;
  //Añadir titulo e imagen al div
  nuevoDiv.appendChild(nuevoTitulo);
  nuevoDiv.appendChild(nuevaImagen);

  //Agrego los div al documento html
  cuerpo.appendChild(nuevoDiv);
}

//PARTE B

//Cojo el boton creado en html

let botonElimina = document.querySelector("button");

//Creo funcion que elimine el ultimo div

function handleClick(event) {
  let cuerpo = document.body;
  cuerpo.removeChild(cuerpo.lastElementChild);
}

// Creo el evento click que se ejecuta al presionar el botón
botonElimina.addEventListener("click", handleClick);
