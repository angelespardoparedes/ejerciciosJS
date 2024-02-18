
/**Basandote en el ejercicio anterior. Crea un botón para cada uno de los elementos de las listas que elimine ese mismo elemento del html.
 */


const countries = [
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=1" },
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=2" },
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=3" },
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=4" },
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=5" },
  ];
  
  let cuerpo = document.querySelector("body"); 
  
  for(let country of countries){
      //Crear listado de div
      let nuevoDiv= document.createElement("div"); 
      //Crear h4
      let nuevoTitulo = document.createElement("h4"); 
      //Crear img
      let nuevaImagen = document.createElement("img"); 
      //Crear boton
      let nuevoBoton = document.createElement("button"); 

  
      //A los h4 les pongo la propiedad titulo del objeto country
      nuevoTitulo.textContent = country.title; 
      //A las img le añado las url
      nuevaImagen.src = country.imgUrl; 
      //Al boton le pongo texto
      nuevoBoton.textContent = "Elimina este elemento"; 
      //Añadir titulo, imagen y boton al div
      nuevoDiv.appendChild(nuevoTitulo); 
      nuevoDiv.appendChild(nuevaImagen); 
      nuevoDiv.appendChild(nuevoBoton); 
  
     //añado evento al boton
     nuevoBoton.addEventListener("click", function(){
        cuerpo.removeChild(nuevoDiv); 
     })
  
      //Agrego los div al documento html
      cuerpo.appendChild(nuevoDiv); 
    
  
  }
  