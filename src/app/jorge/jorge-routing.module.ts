import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JorgePage } from './jorge.page';

const routes: Routes = [
  {
    path: '',
    component: JorgePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JorgePageRoutingModule {}
