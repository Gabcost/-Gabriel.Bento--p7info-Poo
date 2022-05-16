"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Produto = void 0;
//
class Produto {
    /////////// fórmulas ///////////
    ////////// fórmulas de Construção /////////
    constructor(ID, CODIGO, DETALHAMENTO, VALOR_UNIDADE) {
        this.ID = ID;
        this.CODIGO = CODIGO;
        this.DETALHAMENTO = DETALHAMENTO;
        this.VALOR_UNIDADE = VALOR_UNIDADE;
    }
    ///////////////// fórmulas Acessoras ///////////////
    getID() {
        return this.ID;
    }
    getDETALHAMENTO() {
        return this.DETALHAMENTO;
    }
    getCODIGO() {
        return this.CODIGO;
    }
    getVALOR_UNIDADEo() {
        return this.VALOR_UNIDADE;
    }
    ///////////// fórmulas Modificadoras ////////////   
    setDETALHAMENTO(DETALHAMENTO) {
        this.DETALHAMENTO = DETALHAMENTO;
    }
    setCODIGO(CODIGO) {
        this.CODIGO = CODIGO;
    }
    setVALOR_UNIDADE(VALOR_UNIDADE) {
        this.VALOR_UNIDADE = VALOR_UNIDADE;
    }
}
exports.Produto = Produto;
