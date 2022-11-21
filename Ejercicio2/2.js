'use strict';
let n1 = Number(prompt("introduce numero 1", 0));
let n2 = Number(prompt("introduce numero 2", 0));
//ora opcion
/*let n1 = parseInt(prompt("introduce numero 1", 0));
let n2 = parseInt(prompt("introduce numero 2", 0));*/
let resultado = n1+n2;
resultado = n1+n2;
console.log(`suma  ${resultado}`);
resultado = n1-n2;
console.log("resta "+ resultado);
resultado = n1*n2;
console.log(`multiplicacion ${resultado}`);
resultado = n1/n2;
console.log("division "+ resultado);
let num3 = Number(prompt("nummero3"));
while (num3<10|| isNaN(num3)) {
    num3 = Number(prompt("nummero3 fallo"));
    
}
console.log("ya ta!!");


function leerEnter(limite) {
    let num3 = Number(prompt(`introduce un numero mayor que ${limite}`));
    while (isNaN(num3)||num3<=limite) {
        num3 = Number(prompt(`El numero no es mayor que ${limite}`));
        
    }
}
leerEnter(5);

function suma(numer1, numer2) {
    return numer1+numer2
}
console.log(suma(2,3));

let suma2 = (a,b) =>a+b;

console.log(suma2(1,44));