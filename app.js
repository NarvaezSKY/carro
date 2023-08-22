document.addEventListener('DOMContentLoaded', () => {

    let icono = document.getElementById('btcarrito');
    let carrito = document.getElementById('carrito');
    let botonCompra = document.querySelectorAll('#comprar');
    let producto = document.querySelectorAll('.card');
    let contenidotal=document.getElementById('tal')
    
    let total = 0;
    let carritoProductos = {};
    carritoProductos = JSON.parse(localStorage.getItem("producto")) || {}
    total = JSON.parse(localStorage.getItem("total")) || 0
    actualizarCarrito()

  
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
            
            actualizarCarrito()
            subirLocal(carritoProductos,total)
            
        });
    });

        function actualizarCarrito() {
        carrito.innerHTML = ''
    
        for (const producto in carritoProductos) {
            let infoProducto = carritoProductos[producto];
            const elementoCarrito = document.createElement('div');
    
            elementoCarrito.innerHTML = `
                <img src="${infoProducto.imagen}" class="foticosuwu">
                <p class="valor">$${infoProducto.precio}</p>
                <p class="nombreProductoxd">${producto}</p>
                <p>Cantidad: <b>${infoProducto.cantidad}</b></p>
            `;
            elementoCarrito.classList.add("productoEnCarro")

            const vaciarCarrito=document.createElement('button')
            vaciarCarrito.classList.add("boton-eliminar")
            vaciarCarrito.textContent="X"

        carrito.appendChild(vaciarCarrito)
        
    const vaciarCarritoTotal=document.createElement('button')
    vaciarCarritoTotal.textContent="Vaciar carrito"
    vaciarCarritoTotal.classList.add('vaciarCarro')
    carrito.appendChild(vaciarCarritoTotal)

    vaciarCarritoTotal.addEventListener('click', ()=>{
        
        localStorage.clear()
        total=0
        let borrarProductos=document.querySelectorAll('.productoEnCarro')
        console.log(borrarProductos)
        borrarProductos.forEach((element)=>{
            vaciarCarrito.style.display="none"
            carritoProductos={}
            actualizarCarrito()
        })
                  
    })
        vaciarCarrito.addEventListener('click',()=>{

        if (carritoProductos.hasOwnProperty(producto)) {
            carritoProductos[producto].cantidad--;
            total-=carritoProductos[producto].precio 
            if (carritoProductos[producto].cantidad === 0) {
                delete carritoProductos[producto]; 
                carrito.removeChild(elementoCarrito)
                vaciarCarrito.style.display="none"
            }
            actualizarCarrito();
            subirLocal(carritoProductos);
                      
        }
    })
        carrito.appendChild(elementoCarrito)
    }
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

    carrito.addEventListener('mouseleave',()=>{
        carrito.style.display="none"
    })

});

let n = document.querySelector("#elpapu");

// n.textContent = "koala uwu  ";
