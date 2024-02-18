//Añade un botón a tu html con el id btnToClick y en tu javascript añade el evento click que ejecute un console log con la información del evento del click



      // Creo el botón
      let nuevoBoton = document.createElement("button");
      nuevoBoton.textContent ="Presióname"; 

      // Le añado id al botón y título
      nuevoBoton.id = "btnToClick";
      nuevoBoton.title = "btnToClick";

      // Creo la función que maneja el evento click
      function handleClick(event) {
          console.log("Evento de clic:", event);
      }

      // Meto el botón dentro del documento HTML en el body
      document.body.appendChild(nuevoBoton);

      // Creo el evento click que se ejecuta al presionar el botón
      nuevoBoton.addEventListener("click", handleClick);