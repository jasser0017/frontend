import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  RouterModule, Routes } from '@angular/router';

import { SecretaireRoutingModule } from './secretaire-routing.module';
import { GererRendezVousComponent } from './gerer-rendez-vous/gerer-rendez-vous.component';
const routes: Routes = [
  { path: 'gerer-rendez-vous', component:GererRendezVousComponent  }
]



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SecretaireRoutingModule,RouterModule.forChild(routes)
  ]
})
export class SecretaireModule { }
