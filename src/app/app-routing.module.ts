import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'cadastro', loadChildren: './cadastro/cadastro.module#CadastroPageModule' },
  { path: 'lista-de-clientes', loadChildren: './lista-de-clientes/lista-de-clientes.module#ListaDeClientesPageModule' },
  { path: 'logoff', loadChildren: './logoff/logoff.module#LogoffPageModule' },
  { path: 'cadastro-de-cliente', loadChildren: './cadastro-de-cliente/cadastro-de-cliente.module#CadastroDeClientePageModule' },
  { path: 'cliente-view', loadChildren: './cliente-view/cliente-view.module#ClienteViewPageModule' },
  { path: 'chat-room', loadChildren: './chat-room/chat-room.module#ChatRoomPageModule' },
  { path: 'cadastro-unidade', loadChildren: './cadastro-unidade/cadastro-unidade.module#CadastroUnidadePageModule' },
  { path: 'lista-de-unidades', loadChildren: './lista-de-unidades/lista-de-unidades.module#ListaDeUnidadesPageModule' },
  { path: 'unidades-view', loadChildren: './unidades-view/unidades-view.module#UnidadesViewPageModule' },
  
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },



  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
