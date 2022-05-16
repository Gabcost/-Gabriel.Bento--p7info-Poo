//
import {Produto} from "./Produtos"

export class ItemNotaFiscal {

    //////* Atributos */////

    ID: number;
    SEQUENCIAL: number; 
    QUANTIDADE: number;
    PRODUTO : Produto;
    VALOR : number;    


    ///////// Métodos /////////



    ///////// Método Construtor ////////

    constructor (id : number, sequencial: number, quantidade: number, produto: Produto ) {

        this.ID = id;
        this.SEQUENCIAL = sequencial;
        this.QUANTIDADE = quantidade;
        this.PRODUTO = produto; 
        this.VALOR = 0.0;
    }

    /////////// Métodos Acessores ///////////


    getID(): number {
        return this.ID;
    }

    getSEQUENCIAL(): number {
        return this.SEQUENCIAL;
    }

    getQUANTIDADE(): number {
        return this.QUANTIDADE;
    }

    getPRODUTO() : Produto {
        return this.PRODUTO;
    }

    getVALOR(): number {
        return this.VALOR;
    }

        /////////// Métodos Modificadores //////////////
        
    
    setsequencial(sequencial: number): void {
        this.SEQUENCIAL = sequencial;
    }

    
    valorItemNotaFiscal() : void {
        this.VALOR = this.getPRODUTO().getVALOR_UNIDADEo();
    }
    
}
//
//
//

