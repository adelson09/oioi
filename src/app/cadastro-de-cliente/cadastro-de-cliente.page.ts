import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { FormGroup, FormBuilder, Validator } from '@angular/forms';
import { Router } from '@angular/router';
import { Cliente } from '../model/cliente';
import { Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { HttpClient } from 'selenium-webdriver/http';
import { Endereco } from '../model/endereco';
import { EnderecoService } from '../services/endereco.service';

@Component({
  selector: 'app-cadastro-de-cliente',
  templateUrl: './cadastro-de-cliente.page.html',
  styleUrls: ['./cadastro-de-cliente.page.scss'],
})
export class CadastroDeClientePage implements OnInit {


  listaDeClientes: any[];
  firestore = firebase.firestore();
  settings = { timestampsInSnapshots: true };
  private formGroup: FormGroup;

  constructor(public formBuilder: FormBuilder,
    public rauter: Router,
    public service: EnderecoService) {

    this.formGroup = this.formBuilder.group({
      fisica: ['', Validators.required],
      juridica: ['', Validators.required],
      cpf: ['', Validators.required],
      cnpj: ['', Validators.required],
      nome: [''],
      sobrenome: [''],
      sexo: [''],
      tel: [''],
      cel: [''],
      data: [''],
      rua: [''],
      numero: [''],
      complemento: [''],
      cep: [''],
      bairro: [''],
      cidade: [''],
      estado: [''],
      email: ['', Validators.required],
      repetiremail: ['', Validators.required],
      senha: ['', Validators.required],
      repetirsenha: ['', Validators.required],

    })
  }


  buscaCEP() {

    this.service.getEndereco(this.formGroup.value['cep']) //this.service.getEndereco(this.formGroup.value['cep'])
      .subscribe(response => {
        console.log(response);
      });


  }


  ngOnInit() {
  }

  logForm() {
    console.log(this.formGroup.value)
  }

  cadastrar() {
    let ref = this.firestore.collection('cliente')
    ref.add(this.formGroup.value)
      .then(() => {
        console.log('Cadastrado com Sucesso');
        this.rauter.navigate(['/list']);
      }).catch(err => {
        console.log('Erro ao Cadastrar')
        console.log(err)
      })
  }


}
