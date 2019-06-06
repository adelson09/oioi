import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Cliente } from '../model/cliente';

@Component({
  selector: 'app-cadastro-de-cliente',
  templateUrl: './cadastro-de-cliente.page.html',
  styleUrls: ['./cadastro-de-cliente.page.scss'],
})
export class CadastroDeClientePage implements OnInit {

  listaDeClientes: any[];
  firestore = firebase.firestore();
  settings = {timestampsInSnapshots : true};
  formGroup : FormGroup;

  constructor(public formBuilder : FormBuilder,
              public rauter : Router) {
    this.formGroup = this.formBuilder.group({
      nome : [''],
      telefone : [''],
      email : ['']
    })
  }

  ngOnInit() {
  }

  cadastrar(){
    let ref = this.firestore.collection('cliente')
    ref.add(this.formGroup.value)
    .then(()=>{
      console.log('Cadastrado com Sucesso');
      this.rauter.navigate(['/list']);
    }).catch(err=>{
      console.log('Erro ao Cadastrar')
      console.log(err)
    })
  }


}
