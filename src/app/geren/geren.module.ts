import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GerenPageRoutingModule } from './geren-routing.module';

import { GerenPage } from './geren.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GerenPageRoutingModule
  ],
  declarations: [GerenPage]
})
export class GerenPageModule {

}

