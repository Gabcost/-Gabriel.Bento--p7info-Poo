//

import { TipoCliente } from "./categoria_cliente2";
export class Cliente {

    /////// Atributos /////////


    private ID: number;
    private NOME: string;
    private CODIGO : number; 
    private CPF_CNPJ: string;
    private TIPAGEM: TipoCliente;    

    ////// Métodos //////


    //////// Método Construtor ///////  
    
    
    constructor (ID : number, NOME: string, CODIGO: number, CPF_CNPJ: string, TIPAGEM: TipoCliente) {
        this.ID = ID;
        this.NOME = NOME;
        this.CODIGO = CODIGO;
        this.CPF_CNPJ = CPF_CNPJ;
        this.TIPAGEM = TIPAGEM; 
    }

    ////// Métodos Acessores //////

    
    getID(): number {
        return this.ID;
    }

    getNOME(): string {
        return this.NOME;
    }

    getCODIGO(): number {
        return this.CODIGO;
    }

    getCPF_CNPJ(): string {
        return this.CPF_CNPJ;
    }

    getTIPAGEM(): TipoCliente {
        return this.TIPAGEM;
    }


    ////////// Métodos Modificadores ////////
    
    
    setNOME(NOME: string): void {
        this.NOME = NOME;
    }

    setCODIGO(CODIGO: number): void {
        this.CODIGO = CODIGO;
    }

    setCPF_CNPJ(CNPJ_CPF: string): void {
        this.CPF_CNPJ = CNPJ_CPF;
    } 

    setTIPAGEM(TIPAGEM: TipoCliente) : void {
        this.TIPAGEM = TIPAGEM;
    }

}