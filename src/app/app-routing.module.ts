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
  { path: 'cadastro', loadChildren: './cadastro/cadastro.module#CadastroPageModule' },  { path: 'lista-de-clientes', loadChildren: './lista-de-clientes/lista-de-clientes.module#ListaDeClientesPageModule' },
  { path: 'logoff', loadChildren: './logoff/logoff.module#LogoffPageModule' },
  { path: 'cadastro-de-cliente', loadChildren: './cadastro-de-cliente/cadastro-de-cliente.module#CadastroDeClientePageModule' }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
