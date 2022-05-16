"use strict";
function printDeci(valor) {
    let deci = (valor).toString(10);
    return deci;
}
function printHexi(valor) {
    let hexi = (valor).toString(16);
    return hexi;
}
function printOcta(valor) {
    let octa = (valor).toString(8);
    return octa;
}
function printBina(valor) {
    let bina = (valor).toString(2);
    return bina;
}
function Tabela() {
    console.log('Decimal Octal Hexadecimal  Binario');
    console.log('--------- ------ ----------- -------');
    for (let i = 0; i <= 225; i++) {
        console.log(`${printDeci(i)}  ${printOcta(i)}   ${printHexi(i)}   ${printBina(i)}`);
    }
}
Tabela();
