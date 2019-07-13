export class Sender{
    
    de : string;
    para : string;
    mensagem : string;

    setObjFirebase(obj : any){
        
        this.de = obj.de;
        this.para = obj.para;
        this.mensagem = obj.mensagem;
 
    }
}