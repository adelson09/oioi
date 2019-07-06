
export class Cliente{
 
    id : string;
    fisica: string;
    juridica: string;
    cpf: string;
    cnpj: string;
    nome: string
    sobrenome:  string;
    sexo: string;
    tel: string;
    cel: string;
    data: string;
    rua: string;
    numero: string;
    complemento: string;
    cep: string;
    bairro: string;
    cidade: string;
    estado: string;
    email: string;
    repetiremail:string;
    senha: string;
    repetirsenha: string;

    constructor(){   
    }

    // Dados do firebase
       setDados(obj : any){
       this.id = obj.id;
        this.fisica = obj.fisica;
        this.juridica = obj.juridica;
        this.cpf = obj.cpf;
        this.cnpj = obj.cnpj;
        this.nome = obj.nome;
        this.sobrenome = obj.sobrenome;
        this.sexo = obj.sexo;
        this.tel = obj.tel;
        this.cel = obj.cel;
        this.data = obj.data;
        this.rua = obj.rua;
        this.numero = obj.numero;
        this.complemento = obj.complemento;
        this.cep = obj.cep;
        this.bairro = obj.bairro;
        this.cidade = obj.cidade;
        this.estado = obj.estado;
        this.email = obj.email;
        this.repetiremail = obj.repetiremail;
        this.senha = obj.senha;
        this.repetirsenha = obj.repetirsenha;
    }

}
