"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemNotaFiscal = void 0;
class ItemNotaFiscal {
    ///////// Métodos /////////
    ///////// Método Construtor ////////
    constructor(id, sequencial, quantidade, produto) {
        this.ID = id;
        this.SEQUENCIAL = sequencial;
        this.QUANTIDADE = quantidade;
        this.PRODUTO = produto;
        this.VALOR = 0.0;
    }
    /////////// Métodos Acessores ///////////
    getID() {
        return this.ID;
    }
    getSEQUENCIAL() {
        return this.SEQUENCIAL;
    }
    getQUANTIDADE() {
        return this.QUANTIDADE;
    }
    getPRODUTO() {
        return this.PRODUTO;
    }
    getVALOR() {
        return this.VALOR;
    }
    /////////// Métodos Modificadores //////////////
    setsequencial(sequencial) {
        this.SEQUENCIAL = sequencial;
    }
    valorItemNotaFiscal() {
        this.VALOR = this.getPRODUTO().getVALOR_UNIDADE();
    }
}
exports.ItemNotaFiscal = ItemNotaFiscal;
//
//
//
