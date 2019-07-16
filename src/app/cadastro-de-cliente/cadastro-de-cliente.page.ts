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
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-cadastro-de-cliente',
  templateUrl: './cadastro-de-cliente.page.html',
  styleUrls: ['./cadastro-de-cliente.page.scss'],
})
export class CadastroDeClientePage implements OnInit {
  router: any;
  listaDeClientes: any[];
  firestore = firebase.firestore();
  settings = { timestampsInSnapshots: true };
  idUsuario: string = "";
  private formGroup: FormGroup;

  juridica = 'none'
  fisica = 'block'

  constructor(public formBuilder: FormBuilder,
    public rauter: Router,
    public service: EnderecoService,
    public fire: AngularFireAuth) {

    this.fire.authState.subscribe(obj => {
      this.idUsuario = this.fire.auth.currentUser.uid;
      console.log(this.idUsuario); // pega o ID
      //this.usuarioEmail = this.firebaseauth.auth.currentUser.email;
    });

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

    })

  }


  buscaCEP() {

    this.service.getEndereco(this.formGroup.value['cep']) //this.service.getEndereco(this.formGroup.value['cep'])
      .subscribe(response => {
        console.log(response);

        this.formGroup.controls['rua'].setValue(response.logradouro);
        this.formGroup.controls['bairro'].setValue(response.bairro);
        this.formGroup.controls['cidade'].setValue(response.localidade);
        this.formGroup.controls['estado'].setValue(response.uf);
        this.formGroup.controls['complemento'].setValue(response.complemento);

      });


  }
  showFilter(){
    if(this.juridica=='none'){ 
      this.juridica = 'block'
      this.fisica = 'none'
    }else{ 
    this.juridica = 'none'
    this.fisica = 'block'}
  }


  ngOnInit() {
  }
  cadastrar() {

 this.cadastrarcpf()


  }

  cadastrarcpf() {
    let ref = this.firestore.collection('cliente').doc(this.idUsuario)
    ref.set(this.formGroup.value)
      .then(() => {
        console.log('Cadastrado com Sucesso');
        this.rauter.navigate(['/cadastroperfil']);
      }).catch(err => {
        console.log('Erro ao Cadastrar')
        console.log(err)
      })
  }
  cadastrarcnpj() {
    let ref = this.firestore.collection('empresa').doc(this.idUsuario)
    ref.set(this.formGroup.value)
      .then(() => {
        console.log('Cadastrado com Sucesso');
        this.rauter.navigate(['/cadastroperfil']);
      }).catch(err => {
        console.log('Erro ao Cadastrar')
        console.log(err)
      })
  }
  voltar() {
    this.rauter.navigate(['/home']);

  }


}
