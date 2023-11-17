document.addEventListener('DOMContentLoaded', function () {
    // Siin toimub ostukorvi dünaamiline lisamine
    const cartItemsSection = document.getElementById('cart-items');
 
    // Simuleerime mõned ostukorvi esemed
    const cartItems = [
        { id: 1, product: 'Toode 1', quantity: 2, total: 39.98 },
        { id: 2, product: 'Toode 2', quantity: 1, total: 29.99 },
    ];
 
    // Lisa ostukorvi esemed HTML-sse
    cartItems.forEach(cartItem => {
        cartItemsSection.innerHTML += `
            <div class="cart-item">
                <p>${cartItem.product} - Kogus: ${cartItem.quantity} - Summa: ${cartItem.total} €</p>
                <button onclick="removeFromCart(${cartItem.id})">Eemalda</button>
            </div>
        `;
    });
 });
 
 // Funktsioon eseme eemaldamiseks ostukorvist
 function removeFromCart(cartItemId) {
    // Lisa siia kood eseme eemaldamiseks ostukorvist
    console.log(`Eemalda ostukorvi ese ID-ga ${cartItemId}`);
 }
 