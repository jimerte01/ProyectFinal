
let totalCarrito = 0;
let productos = 0;

const listaUtiles = [];
class Cuadernos{
    constructor (imagen, nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
        this.imagen = imagen;
    }
}
// cuadernos que vamos a vender
let CuadernoUno = new Cuadernos (src='../Imagenes/cuadernos/agenda.jpg' , " Tipo Agenda ",  17000);
let CuadernoDos = new Cuadernos (src='../Imagenes/cuadernos/argollados.jpg', " Argollado ", 5500);
let CuadernoTres = new Cuadernos (src='../Imagenes/cuadernos/multimateria.jpg', " 5 Materias ", 10500);
let CuadernoCuatro = new Cuadernos (src='../Imagenes/cuadernos/stickers.jpg', " Con Stickers", 4800);
let CuadernoCinco = new Cuadernos (src='../Imagenes/cuadernos/cuadriculados.jpg', " Cuadriculados", 3500);
let CuadernoSeis = new Cuadernos (src='../Imagenes/cuadernos/rayados.jpg', " Rayados", 3500);
let CuadernoSiete = new Cuadernos (src='../Imagenes/cuadernos/cuadros.jpg', " Cuadros Grandes", 6000);
let CuadernoOcho = new Cuadernos (src='../Imagenes/cuadernos/ferrocaril.jpg', " Ferrocarril", 3500);
let CuadernoNueve = new Cuadernos (src='../Imagenes/cuadernos/economicos.jpg', " Económicos", 2000);

//Se agregan los cuadernos a listaUtiles
listaUtiles.push (CuadernoUno);
listaUtiles.push (CuadernoDos);
listaUtiles.push (CuadernoTres);
listaUtiles.push (CuadernoCuatro);
listaUtiles.push (CuadernoCinco);
listaUtiles.push (CuadernoSeis);
listaUtiles.push (CuadernoSiete);
listaUtiles.push (CuadernoOcho);
listaUtiles.push (CuadernoNueve);

let cards = ``;

// Para generar cards de productos
for (let i=0; i<listaUtiles.length;i++){
   cards += `<div class="col-sm-12 col-md-6 col-lg-4 col-xl-4">
        <div>
             <a href="productos.html">
                <img class="fotos" src=${listaUtiles[i].imagen} alt="image1">
                
             </a>
            <div>
                <a class="" href="productos.html">
                    <h3 class="nombreProducto"> ${listaUtiles[i].nombre}</h3>
                </a>
                <h4 class="precio"> $ ${listaUtiles[i].precio}</h4>
                 <button onclick="agregarProductoAlCarrito(${listaUtiles[i].precio})">  Agregar al Carrito </button>
                  <br><br>
                
            </div>
         </div>
        </div>`

}

document.getElementById("productosVenta").innerHTML=cards;

function agregarProductoAlCarrito (Producto, nombre, precio){
    totalCarrito += precioProducto;
    productos += 1;
    document.getElementById('carritoModal').innerHTML = ` modalCarrito( imagen, nombre, precio );`;
}