import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DemoAngular } from '../DemoAngular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AdminRoutingModule,
    DemoAngular,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
