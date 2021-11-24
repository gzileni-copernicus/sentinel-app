import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SentinelAgriComponent } from './sentinel-agri.component'

@NgModule({
  declarations: [
    SentinelAgriComponent
  ],
  exports: [
    SentinelAgriComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SentinelAgriModule { }
