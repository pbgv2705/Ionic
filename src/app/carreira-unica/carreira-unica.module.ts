import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarreiraUnicaPageRoutingModule } from './carreira-unica-routing.module';

import { CarreiraUnicaPage } from './carreira-unica.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarreiraUnicaPageRoutingModule
  ],
  declarations: [CarreiraUnicaPage]
})
export class CarreiraUnicaPageModule {}
