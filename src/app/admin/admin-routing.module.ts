import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTheropyComponent } from './add-theropy/add-theropy.component';
import { GestionReceptionistComponent } from './gestion-receptionist/gestion-receptionist.component';
import { HistoriqueComponent } from './historique/historique.component';

const routes: Routes = [
  { path: 'historique', component: HistoriqueComponent },
  { path: 'gestion-receptionist', component: GestionReceptionistComponent },
  { path: 'add-theropy', component: AddTheropyComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
