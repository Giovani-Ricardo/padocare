import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AcessPage } from './acess.page';

const routes: Routes = [
  {
    path: '',
    component: AcessPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AcessPageRoutingModule {}
