import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JorgePageRoutingModule } from './jorge-routing.module';

import { JorgePage } from './jorge.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JorgePageRoutingModule
  ],
  declarations: [JorgePage]
})
export class JorgePageModule {}
