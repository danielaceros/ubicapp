import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UbicamePage } from './ubicame.page';

const routes: Routes = [
  {
    path: '',
    component: UbicamePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UbicamePageRoutingModule {}
