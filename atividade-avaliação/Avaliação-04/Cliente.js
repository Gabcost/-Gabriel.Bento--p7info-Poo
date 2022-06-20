"use strict";
//
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
class Cliente {
    ////// Métodos //////
    //////// Método Construtor ///////  
    constructor(ID, NOME, CODIGO, CPF_CNPJ, TIPAGEM) {
        this.ID = ID;
        this.NOME = NOME;
        this.CODIGO = CODIGO;
        this.CPF_CNPJ = CPF_CNPJ;
        this.TIPAGEM = TIPAGEM;
    }
    ////// Métodos Acessores //////
    getID() {
        return this.ID;
    }
    getNOME() {
        return this.NOME;
    }
    getCODIGO() {
        return this.CODIGO;
    }
    getCPF_CNPJ() {
        return this.CPF_CNPJ;
    }
    getTIPAGEM() {
        return this.TIPAGEM;
    }
    ////////// Métodos Modificadores ////////
    setNOME(NOME) {
        this.NOME = NOME;
    }
    setCODIGO(CODIGO) {
        this.CODIGO = CODIGO;
    }
    setCPF_CNPJ(CNPJ_CPF) {
        this.CPF_CNPJ = CNPJ_CPF;
    }
    setTIPAGEM(TIPAGEM) {
        this.TIPAGEM = TIPAGEM;
    }
}
exports.Cliente = Cliente;
