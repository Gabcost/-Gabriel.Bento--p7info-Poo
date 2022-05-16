//

import {Cliente} from "./Cliente"
import {TipoCliente} from "./categoria_cliente"
import {Produto} from "./Produtos"
import {NotaFiscal} from "./nota_fiscal"
import {ItemNotaFiscal} from "./item_nota_fiscal"

//// Criando cliente ////

let cliente = new Cliente(1, "José Maria da Silva", 100, "200.345.987-11",TipoCliente.Pessoa_Fisica);
console.log("=========================");
console.log(cliente);
console.log("=========================");
console.log("ID=" + cliente.getID());
console.log("NOMA=" + cliente.getNOME());
console.log("CODIGO=" + cliente.getCODIGO());
console.log("CNPJ_CPF=" + cliente.getCPF_CNPJ());
console.log("TIPAGEM_CLIENTE=" + cliente.getTIPAGEM());

let p1 = new Produto(1, 150, "Arroz Tio Joao", 8.00);
let p2 = new Produto(2, 200,"Feijão Janjão", 7.00);
let p3 = new Produto(3, 300, "Farinha da Boa", 5.50);
let p4 = new Produto(4, 400, "Coca Alterada", 9.50);

let nf = new NotaFiscal(1, 201, cliente);

let itnf1 = new ItemNotaFiscal(1, 1, 10, p1);
let itnf2 = new ItemNotaFiscal(2, 2, 10, p2);
let itnf3 = new ItemNotaFiscal(3, 3, 10, p3);
let itnf4 = new ItemNotaFiscal(4, 4, 10, p4);


itnf1.valorItemNotaFiscal();
itnf2.valorItemNotaFiscal();
itnf3.valorItemNotaFiscal();
itnf4.valorItemNotaFiscal();

nf.adicionarItem(itnf1);
nf.adicionarItem(itnf2);
nf.adicionarItem(itnf3);
nf.adicionarItem(itnf4);

nf.ValorTotal();

console.log("=========================");
console.log(nf);
console.log("=========================");


