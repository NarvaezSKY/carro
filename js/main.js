document.addEventListener('DOMContentLoaded', ()=>{

    let icono=document.getElementById('btcarrito')
    let carrito=document.getElementById('carrito')
    let botonCompra=document.querySelectorAll('#comprar')
    let producto=document.querySelectorAll('.card')
    


let total=0
let cantidad=0
    botonCompra.forEach((boton, index) => {
        
        boton.addEventListener('click', () => {
            const productoSeleccionado = producto[index];
            const imagenProducto = productoSeleccionado.querySelector('img').src;
            const precioProducto = parseInt(productoSeleccionado.querySelector('h5').textContent);
            const descProducto = productoSeleccionado.querySelector('.card-text').textContent;
            cantidad++
      
            total+=precioProducto
actualizarCarrito()

            const elementoCarrito=document.createElement('div')
            elementoCarrito.innerHTML=`
            <img class="foticosuwu" src="${imagenProducto}">
            <p class="valor">${precioProducto}</p>
                            <p>${descProducto}</p> <br>
                            <p>Cantidad: ${cantidad}</p>
                            `

            elementoCarrito.classList.add("productoEnCarro")
            carrito.appendChild(elementoCarrito)



        });
            
    });


    function actualizarCarrito() {
        carrito.innerHTML = ''; // Borra el contenido anterior del carrito
    
        for (const producto in carritoProductos) {
            const cantidad = carritoProductos[producto];
            // Obtén el precio del producto desde el objeto o tu estructura HTML
            // Agrega un elemento al carrito con la descripción, cantidad y precio
        }
    
        // Agrega el elemento para mostrar el total al final del carrito
        const totalElemento = document.createElement('div');
        totalElemento.innerHTML = `<p>Total: $${total}</p>`;
        carrito.appendChild(totalElemento);
    }






    // producto.forEach((element)=>{
    //     const imagenProducto=element.querySelector('img')
    //     console.log(imagenProducto)
    //     const precioProducto=element.querySelector('h5')
    //     console.log(precioProducto)
    //     const descProducto=element.querySelector('.card-text')
    //     console.log(descProducto)

    // })


    // botonCompra.forEach((element)=>{
    //     element.addEventListener('click',()=>{
    //         console.log(element)
        
        
    //     })
        
        
    // })
    

    
    let productoscarrito=[]
    
    icono.addEventListener('mouseover', ()=>{
        carrito.style.display="block"
    })
    
    icono.addEventListener('mouseleave', ()=>{
        carrito.style.display="none"
    })
    

})

