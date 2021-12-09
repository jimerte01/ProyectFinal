
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

// function valorCarrito(){
//          const addToShoppingCart = document.querySelectorAll( '.add-to-cart-btn' ); // Botón "Agregar al carrito"
        

//         addToShoppingCart.forEach( ( addToCartButtons ) => {
//             addToCartButtons.addEventListener( 'click', addToCartBtnClick )
//         });

//         function addToCartBtnClick( event ) {
//             let btn = event.target;
//             const plants = btn.closest( '.plant' );

//             // Productos
//                 const plantImg = plants.querySelector( '.plant-img' ).src;                        
//                 const plantTitle = plants.querySelector( '.plant-title' ).textContent;
//                 const plantPrice = plants.querySelector( '.plant-price' ).textContent;
                
        
//             modalCart( plantImg, plantTitle, plantPrice );

//             cartCounterUpdate();
            
//         };    

//     };
//  function valorCarrito();





// function shoppingCart() {

    // // Boton "Agregar al carrito" y Productos
    //     const addToShoppingCart = document.querySelectorAll( '.add-to-cart-btn' ); // Botón "Agregar al carrito"
        

    //     addToShoppingCart.forEach( ( addToCartButtons ) => {
    //         addToCartButtons.addEventListener( 'click', addToCartBtnClick )
    //     });

    //     function addToCartBtnClick( event ) {
    //         let btn = event.target;
    //         const plants = btn.closest( '.plant' );

    //         // Productos
    //             const plantImg = plants.querySelector( '.plant-img' ).src;                        
    //             const plantTitle = plants.querySelector( '.plant-title' ).textContent;
    //             const plantPrice = plants.querySelector( '.plant-price' ).textContent;
                
        
    //         modalCart( plantImg, plantTitle, plantPrice );

    //         cartCounterUpdate();
            
    //     };    
       
        
    // Modal cart
        

//             // Botón Remove plant
//                 const removeButton = shoppingCartDiv.querySelector( '#remove-plant-btn' );

//                 removeButton.addEventListener( 'click', removePlantFromCart );

//             // Input Quantity
//                 const inputCartQuantity = shoppingCartDiv.querySelector( '.shoppingCartPlantQuantity' );
                
//                 inputCartQuantity.addEventListener( 'change', cartQuantityChange );
            
                
//             cartTotalPrice();
//         };

//     // Cart Counter
//         function cartCounterUpdate() {
//             const cartPlantsLength = document.querySelectorAll( '.shoppingCartPlant' );
//             const cartCounter = document.querySelector( '#cart-counter' );
//             cartCounter.innerHTML = cartPlantsLength.length;
//             cartTotalPrice();
//         };  


//     // Precio total del carrito
//         function cartTotalPrice() {
//             var totalCount = 0;
//             const totalPrice = document.querySelector( '.total-price' );
//             const shoppingCartPlants = document.querySelectorAll( '.shoppingCartPlant' );
            
//             shoppingCartPlants.forEach( ( shoppingCartPlant ) => {

//                 const plantCartPriceElement = shoppingCartPlant.querySelector( '.shoppingCartPlantPrice' );
//                 const plantCartPrice = Number( plantCartPriceElement.textContent.replace( '$', '' ) );

//                 const plantCartQuantityElement = shoppingCartPlant.querySelector( '.shoppingCartPlantQuantity' );
//                 const plantCartQuantity = Number( plantCartQuantityElement.value );

//                 totalCount += plantCartPrice * plantCartQuantity;
//             });

//             totalPrice.innerHTML = `$${totalCount.toFixed(2)}`;
//         };

//     // Eliminar plantas del carrito
//         function removePlantFromCart(event) {
//             const removeBtnClicked = event.target;
//             removeBtnClicked.closest( '.shoppingCartPlant' ).remove();
//             cartTotalPrice();
//             cartCounterUpdate();
//         };
        
//     // Cantidad del carrito (Input)
//         function cartQuantityChange(event) {
//             const inputCartChange = event.target;
//             inputCartChange.value <= 0 ? ( inputCartChange.value = 1 ) : null;
//             cartTotalPrice();
//             cartCounterUpdate();
//         };

//     // Finalizar compra
//         const botonFinalizarCompra = document.querySelector( '.btn-finalizar-compra' );

//         botonFinalizarCompra.addEventListener('click', finalizarCompraTotal);

//         function finalizarCompraTotal() {
//             showCart.innerHTML = '';
//             cartTotalPrice();
//             cartCounterUpdate();
//         };

//     // Vaciar todo el carrito
//         const botonVaciarCarrito = document.querySelector( '.btn-vaciar-carrito' );
        
//         botonVaciarCarrito.addEventListener('click', vaciarCarritoCompleto);

//         function vaciarCarritoCompleto() {
//             showCart.innerHTML = '';
//             cartTotalPrice();
//             cartCounterUpdate();
//         };
// };

// shoppingCart();

