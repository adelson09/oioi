import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cadastro-unidade',
  templateUrl: './cadastro-unidade.page.html',
  styleUrls: ['./cadastro-unidade.page.scss'],
})
export class CadastroUnidadePage implements OnInit {

  listaDeUnidades: any[];
  firestore = firebase.firestore();
  settings = {timestampsInSnapshots : true};
  formGroup : FormGroup;

  constructor(public formBuilder : FormBuilder,
              public rauter : Router) {
                
    this.formGroup= this.formBuilder.group({
      nomeuni : [''],
      endereco : [''],
      cnpj : [''],
      telefone1 : [''],
      telefone2 : [''],
      email : [''],
    })
  }

  ngOnInit() {
  }

  cadastrar(){
    let ref = this.firestore.collection('unidades')
    ref.add(this.formGroup.value)
    .then(()=>{
      console.log('Cadastrado com Sucesso');
      this.rauter.navigate(['/list']);
    }).catch(()=>{
      console.log('Erro ao Cadastrar')
    })
  }


}
