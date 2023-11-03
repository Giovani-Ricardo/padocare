import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConexoesPage } from './conexoes.page';

const routes: Routes = [
  {
    path: '',
    component: ConexoesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConexoesPageRoutingModule {}
