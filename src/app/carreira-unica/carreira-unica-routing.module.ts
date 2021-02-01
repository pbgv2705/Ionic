import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarreiraUnicaPage } from './carreira-unica.page';

const routes: Routes = [
  {
    path: '',
    component: CarreiraUnicaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarreiraUnicaPageRoutingModule {}
