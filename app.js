// Primera pre entrega del proyecto final de el curso js

// Debemos hacer un bucle while, un for, un condicional y hacer salidas por alert y pedidos por prompt 

// consigna -> hacer un pedido por consola del precio de 4 productos.
// calcular el promedio de gasto
// el monto total
// aplicar un impusto iva
// en caso de gastar más de 2000 pesos, hacer un desceunto del 10%
// largar por consola el precio de los prodcutos, el monto a pagar, el promedio, y es descuento en el caso de haber uno.

let nombreUsuario = prompt('Por favor ingrese su nombre')
alert('bienvenido/a ' + nombreUsuario)

let precioUno = parseFloat(prompt('por favor ingrese el precion de un prodcuto'))
let precioDos = parseFloat(prompt('por favor ingrese el precion de un prodcuto'))
let precioTres = parseFloat(prompt('por favor ingrese el precion de un prodcuto'))
let iva = 0.21

function montoTotal(precioUno, precioDos, precioTres) {
    let sumaTotal = precioUno + precioDos + precioTres
    return sumaTotal
}
function promedio(sumaTotal) {
    let promedio
    promedio = sumaTotal / 3
    return promedio
}
function calcularIva(sumaTotal) {
    let montoImpuesto = sumaTotal * iva
    return montoImpuesto
}
function descuento(sumaTotal) {
    let descuento = 0
    while (sumaTotal > 2000) {
        descuento = (sumaTotal * 0.1)
        return descuento
    }
    return descuento
}
let montoProductos = montoTotal(precioUno, precioDos, precioTres)
let montoPromedio = promedio(montoProductos)
let IvaAplicado = calcularIva(montoProductos)
let totalDesceunto = descuento(montoProductos)
let precioTotal = montoProductos + IvaAplicado - totalDesceunto

console.log(' LOS PRECIOS DE LOS PRODCUTOS SON ')
console.log('percio del primer producto: ' + precioUno)
console.log('percio del segundo producto: ' + precioDos)
console.log('percio del tercer producto: ' + precioTres)
console.log('el monto de los productos es: ' + montoProductos)
console.log('el gasto promedio de la compra es: ' + montoPromedio)
console.log('el descuento es de: ' + totalDesceunto)
console.log(' el impuesto IVA aplicado es de:' + IvaAplicado)
console.log('el precio total a pagar es de: ' + precioTotal)

// consigna 2, donde se aplicaran for y condicionales
// CONSIGNA
// realzar una funcion que determine si un numero es primo o no.

let numero = parseInt(prompt('por favor ingrese un numero positivo'))

function esprimo(numero) {
    if (numero <= 1) {
        return ' no es primo'
    } else {
        for (let i = 2; i < numero; i++) {
            if (numero % i == 0) {
                return ' no es primo'
            }      
        }
        return ' es primo'
    }
}
let condicion = esprimo(numero)
console.log('el numero ingresado: '+ numero + condicion)
