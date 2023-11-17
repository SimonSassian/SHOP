document.addEventListener('DOMContentLoaded', function () {
    // Siin toimub toodete ja tellimuste dünaamiline lisamine
    const productManagementSection = document.getElementById('product-management');
 
    // Simuleerime mõned tooted ja tellimused
    const products = [
        { id: 1, name: 'Toode 1', price: 19.99 },
        { id: 2, name: 'Toode 2', price: 29.99 },
        { id: 3, name: 'Toode 3', price: 39.99 },
    ];
 
    const orders = [
        { id: 1, product: 'Toode 1', quantity: 2, total: 39.98 },
        { id: 2, product: 'Toode 2', quantity: 1, total: 29.99 },
    ];
 
    // Lisa tooted HTML-sse
    productManagementSection.innerHTML += '<h2>Tooted</h2>';
    products.forEach(product => {
        productManagementSection.innerHTML += `
            <div class="product-item">
                <p>${product.name} - ${product.price} €</p>
                <button onclick="editProduct(${product.id})">Muuda</button>
                <button onclick="deleteProduct(${product.id})">Kustuta</button>
            </div>
        `;
    });
 
    // Lisa tellimused HTML-sse
    productManagementSection.innerHTML += '<h2>Tellimused</h2>';
    orders.forEach(order => {
        productManagementSection.innerHTML += `
            <div class="order-item">
                <p>${order.product} - Kogus: ${order.quantity} - Summa: ${order.total} €</p>
                <button onclick="fulfillOrder(${order.id})">Täida</button>
                <button onclick="cancelOrder(${order.id})">Tühista</button>
            </div>
        `;
    });
 });
 
 // Funktsioon toote muutmiseks
 function editProduct(productId) {
    // Lisa siia kood toote muutmiseks
    console.log(`Muuda toodet ID-ga ${productId}`);
 }
 
 // Funktsioon toote kustutamiseks
 function deleteProduct(productId) {
    // Lisa siia kood toote kustutamiseks
    console.log(`Kustuta toode ID-ga ${productId}`);
 }
 
 // Funktsioon tellimuse täitmiseks
 function fulfillOrder(orderId) {
    // Lisa siia kood tellimuse täitmiseks
    console.log(`Täida tellimus ID-ga ${orderId}`);
 }
 
 // Funktsioon tellimuse tühistamiseks
 function cancelOrder(orderId) {
    // Lisa siia kood tellimuse tühistamiseks
    console.log(`Tühista tellimus ID-ga ${orderId}`);
 }
 