export class Sender{
    
    de : string;
    para : string;
    mensagem : string;
    data  : string;

    setObjFirebase(obj : any){
        this.data = obj.data;
        this.de = obj.de;
        this.para = obj.para;
        this.mensagem = obj.mensagem;
 
    }
}