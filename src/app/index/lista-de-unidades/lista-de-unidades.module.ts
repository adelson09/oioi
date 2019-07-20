import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ListaDeUnidadesPage } from './lista-de-unidades.page';

const routes: Routes = [
  {
    path: '',
    component: ListaDeUnidadesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ListaDeUnidadesPage]
})
export class ListaDeUnidadesPageModule {}
