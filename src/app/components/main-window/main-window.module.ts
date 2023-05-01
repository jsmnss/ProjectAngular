import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoProductModule } from '../info-product/info-product.module';
import { MainWindowComponent } from './main-window.component';
import { InfoHeaderModule } from '../info-header/info-header.module';


@NgModule({
  declarations: [MainWindowComponent],
  imports: [
    CommonModule,
    InfoProductModule,
    InfoHeaderModule
  ],
  exports: [MainWindowComponent]
})
export class MainWindowModule { }
