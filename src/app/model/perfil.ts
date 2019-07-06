
export class Perfil{
 
    id : string;
    nome: string
    sobrenome:  string;
    cel: string;
    bairro: string;
    cidade: string;
    estado: string;
    email: string;
   
    constructor(){   
    }

    // Dados do firebase
       setDados(obj : any){
       this.id = obj.id;
        this.nome = obj.nome;
        this.sobrenome = obj.sobrenome;
        this.cel = obj.cel;
        this.bairro = obj.bairro;
        this.cidade = obj.cidade;
        this.estado = obj.estado;
        this.email = obj.email;
    
    }

}
