
/* Carrito */

function shoppingCart() {

    // Boton "Agregar al carrito" y Productos
        const addToShoppingCart = document.querySelectorAll( '.agregarProductoAlCarrito' ); // Botón "Agregar al carrito"
        

        addToShoppingCart.forEach( ( addToCartButtons ) => {
            addToCartButtons.addEventListener( 'click', addToCartBtnClick )
        });

        function addToCartBtnClick( event ) {
            let btn = event.target;
            const productosVenta = btn.closest( '.productosVenta' );

            // Productos
                const fotos = productosVenta.querySelector( '.fotos' ).src;                        
                const nombreProduct = productosVenta.querySelector( '.plant-title' ).textContent;
                const precio = productosVenta.querySelector( '.precio' ).textContent;
                
        
            modalCart(fotos, nombreProduct, precio );

            cartCounterUpdate();
           
        };    
       
        
    // Modal cart
        const mostrarCarrito = document.querySelector( '.mostar-carrito' );
            
        function modalCart( fotos, nombreProduct, precio) {

            // Que no se duplique el mismo producto en el Carrito
                let nombreProductosRepetido = mostrarCarrito.getElementsByClassName( 'shoppingCartPlantTitle' );
                    
                for( let i = 0; i < nombreProductosRepetido.length; i++ ) {
                    if( nombreProductosRepetido[i].innerHTML === nombreProduct ) {
                        let plantsTitleQuantity = nombreProductosRepetido[i].parentElement.parentElement.querySelector( '.shoppingCartPlantQuantity' );
                        plantsTitleQuantity.value++;
                        cartTotalPrice();
                    
                        return;
                    }
                };

            const shoppingCartDiv = document.createElement( 'div' );
            const carritoModal =
                ` 
                    <div class="row shoppingCartPlant mt-3 text-center">
                        <div class="col-3">
                            <img src=${fotos} class="imagenesModal" width="60px" height = "50px" />
                            <h6 class="mt-2 shoppingCartPlantTitle">${nombreProduct}</h6>
                        </div> 
                        <div class="col-3">
                            <p class="plant-price shoppingCartPlantPrice">${precio}</p>
                        </div>
                        <div class="col-3">
                            <input class="text-center shoppingCartPlantQuantity inputCuenta" type="number" value="1">
                        </div>
                        <div class="col-3">
                            <button class="btn btn-danger" id="remove-plant-btn" data-name="${nombreProduct}">
                                x
                            </button>
                        </div>
                    </div>
                `
                                    
            shoppingCartDiv.innerHTML = carritoModal;
            mostrarCarrito.append( shoppingCartDiv );

            // Botón Remove plant
                const removeButton = shoppingCartDiv.querySelector( '#remove-plant-btn' );

                removeButton.addEventListener( 'click', removePlantFromCart );

            // Input Quantity
                const inputCartQuantity = shoppingCartDiv.querySelector( '.shoppingCartPlantQuantity' );
                
                inputCartQuantity.addEventListener( 'change', cartQuantityChange );
            
                
            cartTotalPrice();
        };

    // Cart Counter
        function cartCounterUpdate() {
            const cartPlantsLength = document.querySelectorAll( '.shoppingCartPlant' );
            const cartCounter = document.querySelector( '#unidad-carrito' );
            cartCounter.innerHTML = cartPlantsLength.length;
            cartTotalPrice();
        };  


    // Precio total del carrito
        function cartTotalPrice() {
            var totalCount = 0;
            const totalPrice = document.querySelector( '.total-price' );
            const shoppingCartPlants = document.querySelectorAll( '.shoppingCartPlant' );
            
            shoppingCartPlants.forEach( ( shoppingCartPlant ) => {

                const plantCartPriceElement = shoppingCartPlant.querySelector( '.shoppingCartPlantPrice' );
                const plantCartPrice = Number( plantCartPriceElement.textContent.replace( '$', '' ) );

                const plantCartQuantityElement = shoppingCartPlant.querySelector( '.shoppingCartPlantQuantity' );
                const plantCartQuantity = Number( plantCartQuantityElement.value );

                totalCount += plantCartPrice * plantCartQuantity;
            });

            totalPrice.innerHTML = `$${totalCount.toFixed(2)}`;
        };

    // Eliminar plantas del carrito
        function removePlantFromCart(event) {
            const removeBtnClicked = event.target;
            removeBtnClicked.closest( '.shoppingCartPlant' ).remove();
            cartTotalPrice();
            cartCounterUpdate();
        };
        
    // Cantidad del carrito (Input)
        function cartQuantityChange(event) {
            const inputCartChange = event.target;
            inputCartChange.value <= 0 ? ( inputCartChange.value = 1 ) : null;
            cartTotalPrice();
            cartCounterUpdate();
        };

    // Finalizar compra
        const botonFinalizarCompra = document.querySelector( '.btn-finalizar-compra' );

        botonFinalizarCompra.addEventListener('click', finalizarCompraTotal);

        function finalizarCompraTotal() {
            mostrarCarrito.innerHTML = '';
            cartTotalPrice();
            cartCounterUpdate();
        };

    // Vaciar todo el carrito
        const botonVaciarCarrito = document.querySelector( '.btn-vaciar-carrito' );
        
        botonVaciarCarrito.addEventListener('click', vaciarCarritoCompleto);

        function vaciarCarritoCompleto() {
            mostrarCarrito.innerHTML = '';
            cartTotalPrice();
            cartCounterUpdate();
        };
};

shoppingCart();