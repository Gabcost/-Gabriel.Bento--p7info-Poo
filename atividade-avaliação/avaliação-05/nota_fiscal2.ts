//
import {Cliente} from "./Cliente2";
import {ItemNotaFiscal} from "./item_nota_fiscal2";
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



    calculoValorNotaFiscal() : number {
        let valorCalculado = 0;


        return valorCalculado;

    }

    ///// Imprimir a NotaFiscal conforme o Layout definido /////
    
    imprimeNotaFiscal(): void {


    }

    ValorTotal(): void{
        var DATA = new Date();


        console.log("---------------------------------------------------------------------------------")
        console.log("Nota Fiscal                                                 ", this.getdata())
        console.log("Cliente", this.CLIENTE.getCODIGO(),"    Nome: ", this.CLIENTE.getNOME())
        console.log("CPF/CNPJ:   ",this.CLIENTE.getCODIGO)
        console.log("---------------------------------------------------------------------------------")
        console.log("Itens:")
        console.log("---------------------------------------------------------------------------------")
        console.log("SEQ    Descrição                             QTD      Valor Unit          Preço       ")
        console.log("----   --------------------------------     ------    ----------       ------------     ")


        let total =0
        for(let i= 0; i< this.ITENS.length; i++){
            let valor = this.ITENS[i].getQUANTIDADE() * this.ITENS[i].getVALOR()
            total+=valor
            console.log("%i      %s                                %i       f%                %f",
            this.ITENS[i].getSEQUENCIAL(), this.ITENS[i].PRODUTO.getDETALHAMENTO(),this.ITENS[i].PRODUTO.getVALOR_UNIDADE(), valor)
        }
        console.log("----------------------------------------------------------------------------------")
        console.log("A sua nota tem o valor total de: R$ "+ total)
        
    }
    
}