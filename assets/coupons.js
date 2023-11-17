document.addEventListener('DOMContentLoaded', function () {
    // Siin toimub kupongide dünaamiline lisamine
    const couponManagementSection = document.getElementById('coupon-management');
 
    // Simuleerime mõned kupongid
    const coupons = [
        { id: 1, code: 'KUPONG123', discount: 10, validUntil: '2023-12-31' },
        { id: 2, code: 'SUURALLAHINDLUS', discount: 20, validUntil: '2023-11-30' },
    ];
 
    // Lisa kupongid HTML-sse
    coupons.forEach(coupon => {
        couponManagementSection.innerHTML += `
            <div class="coupon-item">
                <p>Kood: ${coupon.code} - Allahindlus: ${coupon.discount}% - Kehtiv kuni: ${coupon.validUntil}</p>
                <button onclick="editCoupon(${coupon.id})">Muuda</button>
                <button onclick="deleteCoupon(${coupon.id})">Kustuta</button>
            </div>
        `;
    });
 });
 
 // Funktsioon kupongi muutmiseks
 function editCoupon(couponId) {
    // Lisa siia kood kupongi muutmiseks
    console.log(`Muuda kupongi ID-ga ${couponId}`);
 }
 
 // Funktsioon kupongi kustutamiseks
 function deleteCoupon(couponId) {
    // Lisa siia kood kupongi kustutamiseks
    console.log(`Kustuta kupong ID-ga ${couponId}`);
 }
 