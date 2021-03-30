
const divCarrito = document.querySelector("#carrito")

const divTotalCarrito = document.querySelector("#totalCarrito")

$(document).ready(function(){

    $("#name").on('change',function(){
  
      $(".data").hide();
  
      $("#" + $(this).val()).fadeIn(700);
  
    }).change();
  
  })

 function escucharObjeto(clicked_id) {
  for(var i = 0; i < productos.length; i++) {
    var obj = productos[i];
    if(obj.nombre == clicked_id)
    {
    console.log(obj.nombre);
    agregarACarrito(productos.indexOf(obj))
  }
}

 }

  let carrito = localStorage.carrito ? JSON.parse(localStorage.carrito): []

  function agregarACarrito(index) {

    var elemento = productos[index];
  
    //primero chequeo si el carrito tiene algo adentro//
  
    if (carrito.length > 0) {
  
      //en el caso de que si seteo una variable y lo empiezo a recorrer//
  
      var flagExistencia = true;
  
      for (var i = 0; i < carrito.length; i++) {
  
        //si al recorrerlo encuentro el mismo producto que venía en el index, entonces le digo que le agregue cantidad//
  
        if (elemento.nombre == carrito[i].nombre) {
  
          carrito[i].cantidad++;
  
          flagExistencia = false;
  
        }
  
      }
  
      //si no existe el producto, entonces le digo, agregame el elemento al carrito//
  
      if (flagExistencia) {
  
        elemento.cantidad = 1;
  
        carrito.push(elemento);
  
      }
  
      //si el carrito esta vacio, entonces le digo, agregame el elemento al carrito//
  
    } else {
  
      elemento.cantidad = 1;
  
      carrito.push(elemento);
  
    }
  
    //llamo a la funcion que va a cargar toda la info en la seccion de "nuestro carrito frutero-verdulero"//
  
    loadCarrito();
  
    localStorage.carrito = JSON.stringify(carrito);
  
  }
  
  //fin funcion agregar al carrito// ----------------------------------------------------------------------------------------------------------------
  
   
  
  //funcion cargar carrito, se encarga de cada elemento que este en agregarcarrito sea agregado, podría estar adentro de dicha función, pero entiendo que
  
  //en cuanto a la parametrización queda mucho mejor// ------------------------------------------------------------------------------------------------
  
  function loadCarrito() {
  
   
  
    //lo primero que hago es setear en vacio lo que luego va a usar//
  
   
  
    divCarrito.innerHTML = "";
  
    divTotalCarrito.innerHTML = "";
  
    // pregunta si el carrito esta con elementos, para poder arrancar, sino no puede hacer nada //
  
    if (carrito.length > 0) {
  
      // crea una variable sumador para despues poder hacer los cálculos que necesita para el total//
  
      var sumador = 0;
  
      // intera el carrito por cada elemento que tiene el carrito //
  
   
  
      carrito.forEach((e) => {
  
        //Generé la info de HTML que necesito agregar//
  
        let divCar = document.createElement("div");
  
        // aca generé tres funciones más dos a partir de un boton y otra cuando el input cambie//
  
        // la primera es por si el cliente decide cambiar sobre el input, que lo pueda hacer//
  
        //la segunda es si se confundio y eligió mal el producto que lo pueda eliminar//
  
    
  
        divCar.innerHTML = `<p class="col d-flex flex-column productocarrito">${e.nombre} X ${e.cantidad} Unidad $${e.precio * e.cantidad}</p><input name="${carrito.indexOf(e)}"value="${e.cantidad} "style="border:none; font-size: 15px; color: ; background-color: #ffffff; height: 20px; width: 20px;" onchange="inputChange(event)"> `;
  
        //para finalizar agrego todo a el carrito padre//
  
        divCarrito.appendChild(divCar);
  
        //sumo cada producto y lo multiplico por la cantidad, para sacar el calculo del total//
  
        sumador = sumador + e.precio * e.cantidad;
  
      });
  
   
  
      //total del carrito //
  
      let divTot = document.createElement("div");
  
      //genero un html para el total de todos los productos y le pongo el sumador que había generado arriba //
  
      divTot.innerHTML = `<p class="total"> Total: ${sumador}</p>`;
  
      //termina agregando este divtot a el total padre//
  
      divTotalCarrito.appendChild(divTot);
  
    }
  
  }


  




  
   