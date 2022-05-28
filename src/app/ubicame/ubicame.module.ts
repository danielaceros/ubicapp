import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UbicamePageRoutingModule } from './ubicame-routing.module';

import { UbicamePage } from './ubicame.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UbicamePageRoutingModule
  ],
  declarations: [UbicamePage]
})
export class UbicamePageModule {}
