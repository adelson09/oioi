
export class Perfil{
 
    id : string;
    nome: string
    sobrenome:  string;
    cel: string;;
    email: string;
    cidade: string;
   
    constructor(){   
    }

    // Dados do firebase
       setDados(obj : any){
       this.id = obj.id;
        this.nome = obj.nome;
        this.sobrenome = obj.sobrenome;
        this.cel = obj.cel;
        this.email = obj.email;
        this.cidade = obj.cidade;
    
    }

}
