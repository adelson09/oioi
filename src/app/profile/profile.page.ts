import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { ViewChild } from '@angular/core';
import * as firebase from 'firebase';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  firestore = firebase.firestore();
  settings = {timestampsInSnapshots : true};
  formGroup : FormGroup;

  constructor(public formBuilder : FormBuilder,
              public rauter : Router) {
    this.formGroup = this.formBuilder.group({
      username : [''],
      fisrtname : [''],
      lastname : ['']
    })
  }

  ngOnInit() {
  }

  entrar(){
    let ref = this.firestore.collection('profile')
    ref.add(this.formGroup.value)
    .then(()=>{
      console.log('Entrada do Perfil com sucesso');
      this.rauter.navigate(['/list']);
    }).catch(err=>{
      console.log('Erro ao Cadastrar')
      console.log(err)
    })
  }




}
