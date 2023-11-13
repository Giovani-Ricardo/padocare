import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'acess',
    loadChildren: () => import('./acess/acess.module').then( m => m.AcessPageModule)
  },
  {
    path: 'add',
    loadChildren: () => import('./add/add.module').then( m => m.AddPageModule)
  },
  {
    path: 'geren',
    loadChildren: () => import('./geren/geren.module').then( m => m.GerenPageModule)
  },
  {
    path: 'conexoes',
    loadChildren: () => import('./conexoes/conexoes.module').then( m => m.ConexoesPageModule)
  },
  {
    path: 'conexoes',
    loadChildren: () => import('./conexoes/conexoes.module').then( m => m.ConexoesPageModule)
  },
  {
    path: 'configuracoes',
    loadChildren: () => import('./configuracoes/configuracoes.module').then( m => m.ConfiguracoesPageModule)
  },
  {
    path: 'perfil-user',
    loadChildren: () => import('./perfil-user/perfil-user.module').then( m => m.PerfilUserPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }), HttpClientModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
