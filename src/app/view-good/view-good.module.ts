import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ViewGoodPage } from './view-good.page';

import { IonicModule } from '@ionic/angular';

import { ViewGoodPageRoutingModule } from './view-good-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewGoodPageRoutingModule
  ],
  declarations: [ViewGoodPage]
})
export class ViewGoodPageModule {}
