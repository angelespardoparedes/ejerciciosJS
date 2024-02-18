/**De nuevo vamos a usar JSON SERVER para simular nuestra api en local. Ejecuta ``json-server --watch exercise-3.json`` y obtendremos 
 * de la url `http://localhost:3000` los datos del ejercicio.

En este caso tenemos 2 endpoints, o lo que es lo mismo, dos urls a las que llamar para recibir los datos.

El endpoint `http://localhost:3000/orders` nos devolverá una lista de pedidos de la tienda Mari & Juan y 
el endpoint `http://localhost:3000/products` que nos devuelve una lista de productos.

La intención es pintar todos los pedidos ordenados por fecha (ultimos pedidos al principio) y en los que 
pongamos tanto los productos que contiene el pedido como la cantidad pedida de cada uno de los productos.

Si os fijáis, en el endpoint de los pedidos no tenemos la información del producto, si no su id y cantidad pedida. 
Para obtener el nombre de los productos tendremos que hacer peticiones al endpoint de productos pasando el id del producto, 
por ejemplo ``http://localhost:3000/products/2``. De esta forma podremos obtener ya toda la información y pintarla en el html.
 */

// Obtener la lista de pedidos y productos

fetch('http://localhost:3000/orders')
    .then(response => response.json())
    .then(orders =>{
        //Ordenar los pedidos por fechas
        orders.sort((a,b)=> new Date(b.date)- new Date(a.date));
        //Iterar sobre cada pedido
        orders.forEach(order=>{
            //Crear un div para el pedido
            const orderDiv = document.createElement('div'); 
            //Agregar la información del pedido
            orderDiv.innerHTML =`
            <h3>Pedido ${order.id}</h3>
            <p>Fecha: ${order.date}</p>
            <p>Productos:</p>
            <ul id="products-${order.id}"></ul>`;
             // Agregar el div del pedido al contenedor
             document.getElementById('orders-container').appendChild(orderDiv); 
             // Para cada producto en el pedido, obtener los detalles del producto
             order.products.forEach(product => {
                fetch(`http://localhost:3000/products/${product.productId}`)
                .then(response => response.json)
                .then(productDetails =>{
                         //Crear un elemento li 
                        const productLi = document.createElement('li'); 
                        productLi.textContent= `${productDetails.name} - Cantidad: ${product.quantity}`;
                        // Agregar el elemento de lista al ul correspondiente al pedido
                        document.getElementById(`products-${order.id}`).appendChild(productLi);
                    })
             
             });
        

        })
    })