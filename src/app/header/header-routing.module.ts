import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { PriceComponent } from './price/price.component';
import { ServiceComponent } from './service/service.component';

const routes: Routes = [
  
  { path: 'services', component: ServiceComponent },
  { path: 'about', component: AboutComponent },
  { path: 'price', component: PriceComponent },
 

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeaderRoutingModule { }
