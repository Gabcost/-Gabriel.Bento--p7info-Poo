"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotaFiscal = void 0;
class NotaFiscal {
    ////// Métodos //////
    ///// Método Construtor /////  
    constructor(ID, CODIGO, CLIENTE) {
        this.ID = ID;
        this.CODIGO = CODIGO;
        this.DATA = new Date();
        this.CLIENTE = CLIENTE;
        this.NOTA_VALOR = 0.0;
        this.ITENS = new Array();
    }
    ////// Métodos Acessores ////
    getid() {
        return this.ID;
    }
    getcodigo() {
        return this.CODIGO;
    }
    getdata() {
        return this.DATA;
    }
    ///// Métodos Modificadores /////   
    setcodigo(CODIGO) {
        this.CODIGO = CODIGO;
    }
    setdata(DATA) {
        this.DATA = DATA;
    }
    adicionarItem(ITEM) {
        this.ITENS.push(ITEM);
        this.NOTA_VALOR += ITEM.VALOR;
    }
    //// Percorre o array de items e faz calculo do valor total da NotaFiscal ////
    calculoValorNotaFiscal() {
        let valorCalculado = 0;
        return valorCalculado;
    }
    ///// Imprimir a NotaFiscal conforme o Layout definido /////
    imprimeNotaFiscal() {
    }
    ValorTotal() {
        var DATA = new Date();
        console.log("---------------------------------------------------------------------------------");
        console.log("Nota Fiscal                                                 ", this.getdata());
        console.log("Cliente", this.CLIENTE.getCODIGO(), "    Nome: ", this.CLIENTE.getNOME());
        console.log("CPF/CNPJ:   ", this.CLIENTE.getCODIGO);
        console.log("---------------------------------------------------------------------------------");
        console.log("Itens:");
        console.log("---------------------------------------------------------------------------------");
        console.log("SEQ    Descrição                             QTD      Valor Unit          Preço       ");
        console.log("----   --------------------------------     ------    ----------       ------------     ");
        let total = 0;
        for (let i = 0; i < this.ITENS.length; i++) {
            let valor = this.ITENS[i].getQUANTIDADE() * this.ITENS[i].getVALOR();
            total += valor;
            console.log("%i      %s                                %i       f%                %f", this.ITENS[i].getSEQUENCIAL(), this.ITENS[i].PRODUTO.getDETALHAMENTO(), this.ITENS[i].PRODUTO.getVALOR_UNIDADE(), valor);
        }
        console.log("----------------------------------------------------------------------------------");
        console.log("A sua nota tem o valor total de: R$ " + total);
    }
}
exports.NotaFiscal = NotaFiscal;
