document.addEventListener('DOMContentLoaded', function () {
    // Siin toimub arvustuste dünaamiline lisamine
    const reviewsSection = document.getElementById('reviews');
 
    // Simuleerime mõned arvustused
    const reviews = [
        { id: 1, product: 'Toode 1', rating: 4, comment: 'Hea toode!' },
        { id: 2, product: 'Toode 2', rating: 5, comment: 'Suurepärane kvaliteet!' },
    ];
 
    // Lisa arvustused HTML-sse
    reviews.forEach(review => {
        reviewsSection.innerHTML += `
            <div class="review-item">
                <p>${review.product} - Hinnang: ${review.rating}/5</p>
                <p>${review.comment}</p>
            </div>
        `;
    });
 });
 