//
export class Produto {

    ////////////// Atributos ////////////////

    private ID: number;
    private CODIGO : number; 
    private DETALHAMENTO: string;
    private VALOR_UNIDADE : number;    

    /////////// fórmulas ///////////

    ////////// fórmulas de Construção /////////


    constructor (ID : number, CODIGO: number, DETALHAMENTO: string, VALOR_UNIDADE: number) {
        this.ID = ID;
        this.CODIGO = CODIGO;
        this.DETALHAMENTO = DETALHAMENTO;
        this.VALOR_UNIDADE = VALOR_UNIDADE; 
    }

    ///////////////// fórmulas Acessoras ///////////////


    getID(): number {
        return this.ID;
    }

    getDETALHAMENTO(): string {
        return this.DETALHAMENTO;
    }

    getCODIGO(): number {
        return this.CODIGO;
    }

    getVALOR_UNIDADE(): number {
        return this.VALOR_UNIDADE;
    }

        ///////////// fórmulas Modificadoras ////////////   


    setDETALHAMENTO(DETALHAMENTO: string): void {
        this.DETALHAMENTO = DETALHAMENTO;
    }

    setCODIGO(CODIGO: number): void {
        this.CODIGO = CODIGO;
    }

    setVALOR_UNIDADE(VALOR_UNIDADE: number): void {
        this.VALOR_UNIDADE = VALOR_UNIDADE;
    } 
    
}