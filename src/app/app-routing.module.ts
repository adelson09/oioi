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
  { path: 'lista-de-clientes', loadChildren: './lista-de-clientes/lista-de-clientes.module#ListaDeClientesPageModule' },
  { path: 'logoff', loadChildren: './logoff/logoff.module#LogoffPageModule' },
  { path: 'cadastro-de-cliente', loadChildren: './cadastro-de-cliente/cadastro-de-cliente.module#CadastroDeClientePageModule' },
  { path: 'cliente-view', loadChildren: './cliente-view/cliente-view.module#ClienteViewPageModule' },
  { path: 'chat-room', loadChildren: './chat-room/chat-room.module#ChatRoomPageModule' },
  { path: 'lista-de-unidades', loadChildren: './lista-de-unidades/lista-de-unidades.module#ListaDeUnidadesPageModule' },
  { path: 'unidades-view', loadChildren: './unidades-view/unidades-view.module#UnidadesViewPageModule' },
  { path: 'cadastroperfil', loadChildren: './cadastroperfil/cadastroperfil.module#CadastroperfilPageModule' },
  { path: 'perfil', loadChildren: './perfil/perfil.module#PerfilPageModule' },
  { path: 'perfil-view', loadChildren: './perfil-view/perfil-view.module#PerfilViewPageModule' },
  { path: 'index', loadChildren: './index/index.module#IndexPageModule' },
  { path: 'buscar-materia', loadChildren: './buscar-materia/buscar-materia.module#BuscarMateriaPageModule' },
  { path: 'materias', loadChildren: './materias/materias.module#MateriasPageModule' },
  { path: 'portugues', loadChildren: './portugues/portugues.module#PortuguesPageModule' },
  { path: 'artes', loadChildren: './artes/artes.module#ArtesPageModule' },
  { path: 'ingles', loadChildren: './ingles/ingles.module#InglesPageModule' },
  { path: 'espanhol', loadChildren: './espanhol/espanhol.module#EspanholPageModule' },
  { path: 'historia', loadChildren: './historia/historia.module#HistoriaPageModule' },
  { path: 'geografia', loadChildren: './geografia/geografia.module#GeografiaPageModule' },
  { path: 'biologia', loadChildren: './biologia/biologia.module#BiologiaPageModule' },
  { path: 'filosofia', loadChildren: './filosofia/filosofia.module#FilosofiaPageModule' },
  { path: 'sociologia', loadChildren: './sociologia/sociologia.module#SociologiaPageModule' },
  { path: 'matematica', loadChildren: './matematica/matematica.module#MatematicaPageModule' },
  { path: 'fisica', loadChildren: './fisica/fisica.module#FisicaPageModule' },
  { path: 'quimica', loadChildren: './quimica/quimica.module#QuimicaPageModule' },
  { path: 'conotacao', loadChildren: './conotacao/conotacao.module#ConotacaoPageModule' },
  { path: 'formulario', loadChildren: './formulario/formulario.module#FormularioPageModule' },


 


  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
