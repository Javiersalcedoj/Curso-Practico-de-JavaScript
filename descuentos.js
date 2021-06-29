const coupon = [
    {nombre: "c10", descuento: 10},
    {nombre: "c20", descuento: 20},
    {nombre: "c50", descuento: 50},
    {nombre: "e100", descuento: 100},
];

function couponDiscount (cupon) {
    const validadCoupon = coupon.some(
        function(coupon){
        return coupon.nombre === cupon;
        }
    ); 
    if (validadCoupon) {
        const buscarCoupon = coupon.find(
            function(coupon){
            return coupon.nombre === cupon;
            }
        );
        const descuentoCoupon = Object(buscarCoupon.descuento);
        return descuentoCoupon;
    } else {
        return 0;
    }
}

function calcularPrecioConDescuento (precio, descuento, cupon) {
    let descuentoTotal = descuento + cupon;
    
    if (descuentoTotal>100){
        descuentoTotal = 100;
    }

    const porcentajePrecioConDescuento = 100 - descuentoTotal;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    return precioConDescuento;
}

function onClickPriceDiscount () {
    const inputPrice = document.getElementById("inputPrice");
    const price = parseInt ( inputPrice.value );
    const inputDiscount = document.getElementById("inputDiscount");
    const discount = parseInt (inputDiscount.value);
    const inputCoupon = document.getElementById("inputCoupon");
    const cupon = inputCoupon.value;

    const cuponDescuento = couponDiscount (cupon)

    const priceWithDiscount = calcularPrecioConDescuento (price, discount, cuponDescuento);
    
    const resultP = document.getElementById("resultP");
    resultP.innerText = "El precio con descuento es: $" + priceWithDiscount
}