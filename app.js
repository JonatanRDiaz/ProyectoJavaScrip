
/* comentarios ID familias
ID macetas - linea 123
ID cactus - linea 160
ID planta exterior - linea 204
ID planta interior - linea 240
*/


const divMaceta = document.querySelector("#maceta")
const divCactus = document.querySelector("#cactuss")
const divExterior = document.querySelector("#exteriores")
const divInterior = document.querySelector("#interiores")
const divCarrito = document.querySelector("#carrito")
const divTotalCarrito = document.querySelector("#totalCarrito")

agregarProductos(divMaceta)
function agregarProductos() {
   productos.forEach((producto) => {
    let divIn = document.createElement("div");
    divIn.className = "col-sm";
    console.log(producto.nombreseparado)
    divIn.innerHTML = `
    <div class="card card-products" style="width: 18rem;">
    <img src=${producto.img} class="card-img-top" alt=${producto.descripcion} height="150px">
    <div class="card-body">
    <h5 class="card-title ${producto.nombre}">${producto.nombreseparado}</h5>
    <p class="precioProd" > Precio $ ${producto.precio}</p>
     <button id=${producto.nombre} class="btn btn-success" onclick="agregarACarrito(${productos.indexOf(producto)})">Agregar Al Carrito</button>
    </div></div>`;
     switch(producto.familiaProducto) {
     case "macetas":
     divMaceta.appendChild(divIn);
     break;
     case "cactus":
     divCactus.appendChild(divIn);
     break;
     case "interior":
     divInterior.appendChild(divIn);
     break;
     case "exterior":
     divExterior.appendChild(divIn);
     break;
  }
  })
}



$(document).ready(function(){
    $("#name").on('change',function(){
      $(".data").hide();       
       $(".data").delay(200);
      $("#" + $(this).val()).slideDown("low");  
    }).change();
  })

  let carrito = localStorage.carrito ? JSON.parse(localStorage.carrito): []
  function agregarACarrito(index) {
    var elemento = productos[index];
    if (carrito.length > 0) {
      var flagExistencia = true;
      for (var i = 0; i < carrito.length; i++) {
        if (elemento.nombre == carrito[i].nombre) {
          carrito[i].cantidad++;
          flagExistencia = false;
        }
      }
      if (flagExistencia) {
        elemento.cantidad = 1;
        carrito.push(elemento);
      }
    } else {
      elemento.cantidad = 1;
      carrito.push(elemento);
 
    }
    loadCarrito();
    localStorage.carrito = JSON.stringify(carrito);
  }
  function loadCarrito() {
    divCarrito.innerHTML = "";
    divTotalCarrito.innerHTML = "";
    if (carrito.length > 0) {
      var sumador = 0;
      carrito.forEach((e) => {
        console.log(e)
        let divCar = document.createElement("div");
        divCar.innerHTML = `<p class="col d-flex flex-column productocarrito">${e.nombreseparado} X ${e.cantidad} Unidad $${e.precio * e.cantidad}</p><input name="${carrito.indexOf(e)}"value="${e.cantidad} "style="border:none; font-size: 15px; color: ; background-color: #ffffff; height: 20px; width: 20px;" onchange="inputChange(event)"> `;
        divCarrito.appendChild(divCar);
        sumador = sumador + e.precio * e.cantidad;
      });
      let divTot = document.createElement("div");
      divTot.innerHTML = `<p class="total"> Total: ${sumador}</p>`;
      divTotalCarrito.appendChild(divTot);
  
    }
  
  }





  
   