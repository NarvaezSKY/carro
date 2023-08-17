document.addEventListener('DOMContentLoaded', () => {

    let icono = document.getElementById('btcarrito');
    let carrito = document.getElementById('carrito');
    let botonCompra = document.querySelectorAll('#comprar');
    let producto = document.querySelectorAll('.card');
    let contenidotal=document.getElementById('carritoHover')
    
    let total = 0;
    let carritoProductos = {};
    carritoProductos=JSON.parse(localStorage.getItem("producto"))||{}
    total=JSON.parse(localStorage.getItem("total"))

    // console.log(carritoProductos)


    botonCompra.forEach((boton, index) => {
        boton.addEventListener('click', () => {
            const productoSeleccionado = producto[index];
            const imagenProducto = productoSeleccionado.querySelector('img').src;
            console.log(imagenProducto)
            const precioProducto = parseInt(productoSeleccionado.querySelector('h5').textContent);
            const descProducto = productoSeleccionado.querySelector('.card-text').textContent;

            if (carritoProductos.hasOwnProperty(descProducto)) {
                carritoProductos[descProducto].cantidad++;
            } else {
                carritoProductos[descProducto] = {
                    imagen: imagenProducto,
                    precio: precioProducto,
                    cantidad: 1,
                };  
            }

            total+=precioProducto
            
            actualizarCarrito(carritoProductos, total)
            subirLocal(carritoProductos, total)
            
        });
    });

        
            function actualizarCarrito() {
                carrito.innerHTML = '';

                for (const producto in carritoProductos) {
                    // console.log(carritoProductos)
                    const infoProducto = carritoProductos[producto];
                    const elementoCarrito = document.createElement('div');
                    
                 console.log(infoProducto)
                    elementoCarrito.innerHTML = `
                        <img src="${infoProducto.imagen}" class="foticosuwu">
                        <p class="valor">${infoProducto.precio}</p>
                        <p>${producto}</p>
                        <p>Cantidad: <b>${infoProducto.cantidad}</b></p>
                    `;
                    elementoCarrito.classList.add("productoEnCarro");

                    carrito.appendChild(elementoCarrito);
                    
                    
                }
              
     
                const totalElemento = document.createElement('div');
                totalElemento.innerHTML = `<p class="totalProductos">Total: $${total}</p>`;
                carrito.appendChild(totalElemento);
            }
            
            function subirLocal (carritoProductos){
        
                localStorage.setItem("producto", JSON.stringify(carritoProductos))
                localStorage.setItem("total",JSON.stringify(total))

              }
            

    icono.addEventListener('mouseover', () => {
        carrito.style.display = "block";
    });

    icono.addEventListener('mouseleave', () => {
        carrito.style.display = "none";
    });

});

