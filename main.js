
/* Alumno Jonatan Diaz Camada 14170 */


// Marco la idea que tenia para la primer entrega del proyecto. La idea final del proyecto es hacer un ecommerce de plantas. 
/* Para esta primer entrega mi inteción era presentar lo siguiente:

1 - que el clienta lea la familia de productos que tiene disponible en el ecommerce (plantas de interior - plantas de exterior - macetas - cactus y suculentas)

2 - Luego, queria que el cliente elija que familia deseaba ver en detallee para obtener info de las plantas y precios de cada familia.CalculartipoCliente.CalculartipoCliente

3 - Cliente lee los items que estan dentro de cada familia, con el precio unitario.

4 - cliente seleciona que item quiere comprar y que cantidad.

5 - comprado el primer item, se consulta si quiere seguir comprando. Si desea seguir comprando, vuelven a aparecer las familias de productos para que seleccione que item comprar. El bucle se repite hasta que selecciona que no quiere finalizar su compraa

6 - Cliente lee la cantidad de productos que compro y el monto subtotal.

7 - Entra el bucle donde se informa que tipo de cliente es y las formas de pago que tiene, dependiendo del monto de la compra. */





alert("En la siguiente pantalla podrá ver la familia de productos disponibles para la compra.");


/* mostrar las familias de producto que dispone la plataforma de compra. */

alert("ID:1 - Macetas y Deco // ID2: Cactus y Suculentas // ID:3 - Plantas de Interior // ID:4 - Plantas de Exterior");


/* Listar las familias de producto que dispone la plataforma de compra. */

const tipoProducto = [{ id:1, familia: "Macetas y Deco"},
                     { id:2, familia: "Cactus y Suculentas"},
                    //  { id:3, familia: "Plantas de Interior"}, a futuro se van a sumar estos rubros para que puedan ser elegidos por el usuario
                    //  { id:2, familia: "Plantas de Exterior"}, a futuro se van a sumar estos rubros para que puedan ser elegidos por el usuario
];

const tipoProductoSeleccionado = prompt("Ingrese el ID de la familia de producto que desea comprar")

/* if() fue en este if donde no supe como hacer que en base al tipo de familia de producto seleccionado, el usuario pueda ver las opciones de items que tenia para cada uno. abajo cree un array con objetos dentro, pero no encontre la forma de seguir operando. */



const macetasDeco = [{familia: ""}
]


const cactusSuculentas = [{familia: ""}

]


function mostrarProductosPorFamilia (a,b) {

}




// la idea es completar estos datos a través de algunas funciones para cada planta. //


const objPlanta = {
    tipoPlanta: null,
    precioPlanta: "$10",
    grupoPlanta: null
    };
  
    // fin. //




const primerMonto;
const segundoMonto;
const tercerMonto;
const cuartoMonto;
const quintoMonto;
const montoParcial;
const montoTotalCompra;
const clienteMayorista;
const clienteMinorista;

const tipoCliente;



const primerMonto = parseInt(prompt("Ingrese el monto del primer artículo"));
const segundoMonto = parseInt(prompt("Ingrese el monto del segundo artículo"));
const tercerMonto = parseInt(prompt("Ingrese el monto del tercer artículo"));
const cuartoMonto = parseInt(prompt("Ingrese el monto del cuarto artículo"));
const quintoMonto = parseInt(prompt("Ingrese el monto del quinto artículo"));



/* 
Es este primer ejemplo, hice una funcion que resuelva la siguiente problematica:
El usuario ingresa los montos de 5 familias de productos que compró, se suman los precios y devuelve por pantalla el valor
total de su compra. Si el valor final es mayor a 5.000 PesosArgentinos la compra es mayorista. Si la compra es mayorista tiene un 10% de descuento, y permite hacer el pago en 6 cuotas. Por medio de un alert, se informan cual es el monto de descuento al que aplica, y los precios finales de las 3 cuotas.
Si la compra es menor a 5000 pesos, pasa a ser de tipo minorista, y no aplica descuento, solo puede pagar en 3 cuotas. Mediante un alert, quiero mostrar el precio total de la compra y el valor de las cuotas. */

/* me gustaria que al momento de la correcion me indiquen para que caso en este ejemplo convenia usar let, var o const (no me queda claro en que momento usar una u otra*/


    let montoConDescuento;
    let valorCuotaMayorista;
    let valorCuotaMinorista;


sumar (primerMonto, segundoMonto, tercerMonto, cuartoMonto, quintoMonto)

alert ("El monto de su compra es " + montoTotalCompra);

CalculartipoCliente (montoTotalCompra)

calcularMontoCliente (montoTotalCompra, tipoCliente)


function sumar(a, b, c, d, e) {
    return  montoTotalCompra = primerMonto + segundoMonto + tercerMonto + cuartoMonto + quintoMonto;
}



 


function CalculartipoCliente (a){
if( a >= 5000 ){
    alert("Su compra es mayorista");
    return tipoCliente = "Mayorista";

}else if (a < 5000) {
    alert("Su compra es minorista");
    return  tipoCliente = "Minorista";
}
}


function calcularMontoCliente (a,b) {
    if( b="Mayorista") {
        alert("Para compras mayoristas, aplicar 10% de descuento");
        montoConDescuento = a - (a * 0.10);
        alert("Su monto a pagar es de " + (montoConDescuento));
        valorCuotaMayorista = montoConDescuento / 6;
        alert("Puede pagar su compra en 6 cuotas sin interés de " + valorCuotaMayorista.toFixed(2));
        
    

    }   else if( b="Minorista") {
        valorCuotaMinorista = a / 3;
        alert("Puede pagar su compra en 3 cuotas sin interés de " + valorCuotaMinorista.toFixed(2));
    

    }
    }




