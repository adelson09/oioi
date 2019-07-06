import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  @ViewChild('email') email;
  @ViewChild('senha') senha;

  constructor(public router : Router,
              public fire : AngularFireAuth){
  }

  logar(){
    this.fire.auth.signInWithEmailAndPassword(this.email.value,this.senha.value)
      .then(()=>{
        console.log('Logado com sucesso');
        this.router.navigate(['/profile']);
      })
      .catch(()=>{
        console.log('Login Inválido');
      })
  }
  
  cadastrar(){
    this.fire.auth.createUserWithEmailAndPassword(this.email.value,this.senha.value)
    .then(()=> {
      console.log("Cadastrado com sucesso!");
    }).catch(()=>{
      console.log("Usuário inválido");
    })
  }

  facebook(){
    window.open("https://pt-br.facebook.com/",'_system', 'location=yes');
  }
  instagram(){
    window.open("https://www.instagram.com/?hl=pt-br",'_system', 'location=yes');
  }
  twitter(){
    window.open("https://twitter.com/login?lang=pt",'_system', 'location=yes');
  }
}