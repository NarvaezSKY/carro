document.addEventListener('DOMContentLoaded', () => {

    let icono = document.getElementById('btcarrito');
    let carrito = document.getElementById('carrito');
    let botonCompra = document.querySelectorAll('#comprar');
    let producto = document.querySelectorAll('.card');
    let contenidotal=document.getElementById('carritoHover')
    
    let total = 0;
    let carritoProductos = {};
    carritoProductos = JSON.parse(localStorage.getItem("producto")) || {}
    total = JSON.parse(localStorage.getItem("total")) || 0

    // console.log(carritoProductos)


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
                    imagen: imagenProducto,
                    precio: precioProducto,
                    cantidad: 1,
                };  
            }

            total+=precioProducto
            
            
            subirLocal(carritoProductos,total)
            
        });
    });

        
    function actualizarCarrito() {
   



        for (const producto in carritoProductos) {
            // const infoProducto = carritoProductos[producto];
            // console.log(infoProducto)
            const elementoCarrito = document.createElement('div');
    let tal=Object.values(carritoProductos, producto)
    console.log(tal)
            // elementoCarrito.innerHTML = `
            //     <img src="${infoProducto.imagen}" class="foticosuwu">
            //     <p class="valor">$${infoProducto.precio}</p>
            //     <p>${producto}</p>
            //     <p>Cantidad: <b>${infoProducto.cantidad}</b></p>
            // `;
            elementoCarrito.classList.add("productoEnCarro")
    
            carrito.appendChild(elementoCarrito)
        }
                
           


                const vaciarCarritoTotal=document.createElement('button')
                vaciarCarritoTotal.textContent="Vaciar el coso"
                vaciarCarritoTotal.classList.add('vaciarCarro')
                carrito.appendChild(vaciarCarritoTotal)

                vaciarCarritoTotal.addEventListener('click', ()=>{
                    localStorage.clear()
                    sessionStorage.clear()
                   
                    carrito.innerHTML=""
                    
                })

                const totalElemento = document.createElement('div');
                totalElemento.classList.add('allProductsXD')
                totalElemento.innerHTML = `<p >Total: $${total}</p>`;
                carrito.appendChild(totalElemento);
            }
            
            function subirLocal (carritoProductos){
        
                localStorage.setItem("producto", JSON.stringify(carritoProductos))
                localStorage.setItem("total",JSON.stringify(total))

              }
            

    icono.addEventListener('click', () => {
        carrito.style.display = "block"
    })

    carrito.addEventListener('mouseover',()=>{
        carrito.style.display="block"
    })


    function actualizarCantidad(){
        const vaciarCarrito=document.createElement('button')
        vaciarCarrito.textContent="X"
        carrito.appendChild(vaciarCarrito)

    vaciarCarrito.addEventListener('click',()=>{
   
        carritoProductos.cantidad--
        
        return carritoProductos.cantidad

       
            
    })


    
    }
});

