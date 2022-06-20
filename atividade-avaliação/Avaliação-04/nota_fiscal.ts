//
import {Cliente} from "./Cliente";
import {ItemNotaFiscal} from "./item_nota_fiscal";
export class NotaFiscal {



    ///// Propriedades //////



    ID: number;
    CODIGO:number; 
    DATA: Date;
    CLIENTE: Cliente;
    ITENS :  Array<ItemNotaFiscal>;  
    NOTA_VALOR : number;



    ////// Métodos //////



    ///// Método Construtor /////  


    constructor (ID : number, CODIGO: number, CLIENTE : Cliente ) {
        this.ID = ID;
        this.CODIGO = CODIGO;
        this.DATA = new Date(); 
        this.CLIENTE = CLIENTE; 
        this.NOTA_VALOR =0.0;
        this.ITENS = new Array<ItemNotaFiscal>();


    }



    ////// Métodos Acessores ////




    getid(): number {
        return this.ID;
    }

    getcodigo(): number {
        return this.CODIGO;
    }

    getdata(): Date {
        return this.DATA;
    }


    ///// Métodos Modificadores /////   


    setcodigo(CODIGO: number): void {
        this.CODIGO = CODIGO;
    }

    setdata(DATA : Date) : void {
        this.DATA = DATA;
    }

     

    adicionarItem(ITEM: ItemNotaFiscal) {
        this.ITENS.push(ITEM);
        
        this.NOTA_VALOR += ITEM.VALOR;
    }



    //// Percorre o array de items e faz calculo do valor total da NotaFiscal ////



    calculoValorNotaFiscal() : void{
        let total =0
        for(let i= 0; i< this.ITENS.length; i++){
            let valor = this.ITENS[i].getQUANTIDADE() * this.ITENS[i].getVALOR()
            total+=valor
        }
        console.log("A sua nota tem o valor total de: R$ "+ total) 

    }

    
    
}