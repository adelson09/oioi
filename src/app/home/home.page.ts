import { Component, ViewChild } from '@angular/core';
import { FirebaseAuthentication } from '@ionic-native/firebase-authentication/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  @ViewChild('email') email;
  @ViewChild('senha') senha;

  constructor(private firebaseAuthentication: FirebaseAuthentication) { }

  login(){

  }

  cadastrar(){
    this.firebaseAuthentication
    .createUserWithEmailAndPassword(this.email.value, this.senha.value)
      .then(resp=>{ console.log('Cadastrado com Sucesso'); })
        .catch(resp=>{ console.log('Erro ao Cadastrar'); });
  }

}
