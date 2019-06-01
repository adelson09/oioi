import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule, NavParams, NavController } from '@ionic/angular';

import { ChatRoomPage } from './chat-room.page';
import { ViewChild } from '@angular/core';
import { Content } from '@angular/compiler/src/render3/r3_ast';
import { User } from 'firebase';
import { forkJoin } from 'rxjs';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

const routes: Routes = [
  {
    path: '',
    component: ChatRoomPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ChatRoomPage]
})
export class ChatRoomPageModule {



}


