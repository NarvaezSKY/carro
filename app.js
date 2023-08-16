document.addEventListener('DOMContentLoaded', () => {

    let icono = document.getElementById('btcarrito');
    let carrito = document.getElementById('carrito');
    let botonCompra = document.querySelectorAll('#comprar');
    let producto = document.querySelectorAll('.card');

    let total = 0;
    let carritoProductos = {};
  
    

    botonCompra.forEach((boton, index) => {
        boton.addEventListener('click', () => {
            const productoSeleccionado = producto[index];
            const imagenProducto = productoSeleccionado.querySelector('img').src;
            const precioProducto = parseInt(productoSeleccionado.querySelector('h5').textContent);
            const descProducto = productoSeleccionado.querySelector('.card-text').textContent;

            if (carritoProductos.hasOwnProperty(descProducto)) {
                carritoProductos[descProducto].cantidad++;
            } else {
                carritoProductos[descProducto] = {
                    precio: precioProducto,
                    cantidad: 1,
                };
            }

            total += precioProducto;
            console.log(total)
            function actualizarCarrito() {
                carrito.innerHTML = '';
        
                for (const producto in carritoProductos) {
                    const infoProducto = carritoProductos[producto];
                    // console.log(infoProducto)
                    const elementoCarrito = document.createElement('div');
                    elementoCarrito.innerHTML = `
                        <p class="valor">${infoProducto.precio}</p>
                        <p>${producto}</p>
                        <p>Cantidad: ${infoProducto.cantidad}</p>
                    `;
                    elementoCarrito.classList.add("productoEnCarro");
                   
                    carrito.appendChild(elementoCarrito);

                    let carritoLocalStorage=JSON.stringify(carritoProductos)
                    localStorage.setItem("producto",carritoLocalStorage)
                    traerDelTal=localStorage.getItem("producto")
                    traerElTal=JSON.parse(traerDelTal)
                    console.log(traerElTal)
                }
        
                const totalElemento = document.createElement('div');
                totalElemento.innerHTML = `<p class="totalProductos">Total: $${total}</p>`;
                carrito.appendChild(totalElemento);
            }
            actualizarCarrito();
            console.log(carritoProductos)
        });
    });




    icono.addEventListener('mouseover', () => {
        carrito.style.display = "block";
    });

    icono.addEventListener('mouseleave', () => {
        carrito.style.display = "none";
    });

});



{/* <img class="foticosuwu" src="${imagenProducto}"> */}
