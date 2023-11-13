import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AcessPageRoutingModule } from './acess-routing.module';

import { AcessPage } from './acess.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AcessPageRoutingModule
  ],
  declarations: [AcessPage]
})
export class AcessPageModule {}
