import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GerenPage } from './geren.page';

const routes: Routes = [
  {
    path: '',
    component: GerenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GerenPageRoutingModule {}
