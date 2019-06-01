export class Unidades{

    id : string;
    nomeuni : string;
    endereco : string;
    cnpj : string;
    telefone1 : string;
    telefone2 : string;
    email : string;

    constructor(){   
    }

    // Dados do firebase
    setDados(obj : any){
        this.nomeuni = obj.nomeuni;
        this.endereco = obj.endereco;
        this.cnpj = obj.cnpj;
        this.telefone1 = obj.telefone1;
        this.telefone2 = obj.telefone2;
        this.email = obj.email;
    }
}