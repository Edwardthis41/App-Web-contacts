function ordenarLista(eventoOrdenar) {
    var lista, indice, realizarCambio, elementosLista, debeRealizarCambio, direccionOrden, contadorCambios = 0;
    lista = document.getElementById("idLista");
    realizarCambio = true;

    //Define la dección de la ordenación "ascendente" o "descendente" 
    direccionOrden = eventoOrdenar.currentTarget.orden;

    //Bucle hasta que finalice la ordenación
    while (realizarCambio) {
      // por defecto el cambio se coloca en falso
      realizarCambio = false;
      elementosLista = lista.getElementsByTagName("LI");

      //Recorremos todos los items
      var resta=1;
      for (indice = 0; indice < (b.length - resta); indice++) {
        // Por defecto no se debe cambiar
        debeRealizarCambio = false;

        // Basados en la direccion ascendente o descendente decidimos realizar la ordenación
        if (direccionOrden == "ascendente") {
          if (elementosLista[indice].innerHTML.toLowerCase() > elementosLista[indice + resta].innerHTML.toLowerCase()) {
            //Comprobación alfabética
            debeRealizarCambio = true;
            break;
          }
        } else if (direccionOrden == "descendente") {
          if (elementosLista[indice].innerHTML.toLowerCase() < elementosLista[indice + resta].innerHTML.toLowerCase()) {
            ///Comprobación alfabética
            debeRealizarCambio = true;
            break;
          }
        }
      }
      if (debeRealizarCambio) {
        // Realizamos el cambio del elemento marcado
        elementosLista[indice].parentNode.insertBefore(elementosLista[indice + resta], elementosLista[indice]);
        realizarCambio = true;
        // Cada vez que se haya realizado un cambio aumentamos el contador
        contadorCambios++;
      } else {
        //Si no se ha realizado un cambio y la detencion es "ascendente",
        // establece la direccion a "desencente" y ejecuta el bucle while nuevamente
        if (contadorCambios == 0 && direccionOrden == "ascendente") {
          direccionOrden = "descendente";
          realizarCambio = true;
        }
      }
    }
  }
  
  var botonOrdenar = document.getElementById("botonOrdenar");
  botonOrdenar.addEventListener("click", ordenarLista, false );
  botonOrdenar.orden = 'ascendente';