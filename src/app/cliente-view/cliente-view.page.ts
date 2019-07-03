import { Component, OnInit } from '@angular/core';
import { Cliente } from '../model/cliente';
import * as firebase from 'firebase';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cliente-view',
  templateUrl: './cliente-view.page.html',
  styleUrls: ['./cliente-view.page.scss'],
})
export class ClienteViewPage implements OnInit {

    cliente : Cliente = new Cliente();
    id : string;
    firestore = firebase.firestore();
    setting = {timestampsInSnapshots: true};

    formGroup  : FormGroup;
    

  constructor(public activatedRoute : ActivatedRoute, 
              public formBuilder : FormBuilder,
              public router : Router  ) {
    this.id = this.activatedRoute.snapshot.paramMap.get('cliente');
    this.form();

   }

   form(){
     this.formGroup = this.formBuilder.group({
      
     fisica: [this.cliente.fisica],
      juridica: [this.cliente.juridica],
      cpf: [this.cliente.cpf],
      cnpj: [this.cliente.cnpj],
      nome: [this.cliente.nome],
      sobrenome: [this.cliente.sobrenome],
      sexo: [this.cliente.sexo],
      tel: [this.cliente.tel],
      cel: [this.cliente.cel],
      data: [this.cliente.data],
      rua: [this.cliente.rua],
      numero: [this.cliente.numero],
      complemento: [this.cliente.complemento],
      cep: [this.cliente.cep],
      bairro: [this.cliente.bairro],
      cidade: [this.cliente.cidade],
      estado: [this.cliente.estado],
      email: [this.cliente.email],
      repetiremail: [this.cliente.repetiremail],
      senha: [this.cliente.senha],
      repetirsenha: [this.cliente.repetirsenha],
     });
   }

  ngOnInit() {
    this.obterCliente();
  }

  obterCliente(){
    var ref = firebase.firestore().collection("cliente").doc(this.id);
    ref.get().then(doc=>{
      this.cliente.setDados(doc.data());
      this.form();
    }).catch(function(error){
      console.log("Error getting document:", error);
    });
  }

  atualizar(){
    let ref = this.firestore.collection('cliente')
    ref.doc(this.id).set(this.formGroup.value)
      .then(() =>{
        console.log('Atualizado com sucesso');
        this.router.navigate(['/lista-de-clientes']);
      }).catch(()=>{
        console.log('Erro ao Atualizar');
      })
  }

}
