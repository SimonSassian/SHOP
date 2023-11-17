document.addEventListener('DOMContentLoaded', function () {
    // Siin toimub toodete dünaamiline lisamine
    const productsSection = document.getElementById('products');
 
    // Simuleerime mõned tooted
    const products = [
        { name: 'Toode 1', price: 19.99 },
        { name: 'Toode 2', price: 29.99 },
        { name: 'Toode 3', price: 39.99 },
    ];
 
    // Lisame tooted HTML-sse
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
            <h3>${product.name}</h3>
            <p>Hind: ${product.price} €</p>
            <button onclick="addToCart('${product.name}', ${product.price})">Lisa ostukorvi</button>
        `;
        productsSection.appendChild(productCard);
    });
 });
 
 // Funktsioon toote lisamiseks ostukorvi
 function addToCart(name, price) {
    // Lisa siia kood ostukorvi haldamiseks
    console.log(`Lisatud ${name} hinnaga ${price} € ostukorvi`);
 }
 