import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CadastroDeClientePage } from './cadastro-de-cliente.page';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrMaskerModule } from "br-mask"

const routes: Routes = [
  {
    path: '',
    component: CadastroDeClientePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    BrMaskerModule 
    
  ],
  declarations: [CadastroDeClientePage]
})
export class CadastroDeClientePageModule {}
