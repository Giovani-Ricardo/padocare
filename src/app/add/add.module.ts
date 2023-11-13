import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { AddPage } from './add.page';

import { AddPageRoutingModule } from './add-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddPageRoutingModule
  ],
  declarations: [AddPage]
})
export class AddPageModule {}
