import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarreiraUnicaPage } from './carreira-unica.page';

const routes: Routes = [
  {
    path: '',
    component: CarreiraUnicaPage,
    children: [
      {
        path:'carreira-unica',
        loadChildren: () => import('../carreira-unica/carreira-unica.module').then(m=>m.CarreiraUnicaPageModule)
      }
    ]
  },
  {
        path:'',
        redirectTo: '/tabs/tabs1',
        pathMatch: 'full'
      }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarreiraUnicaPageRoutingModule {}
