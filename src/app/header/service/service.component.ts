import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DemoAngular } from '../../DemoAngular';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminService } from '../../admin/admin.service';
import { Router } from '@angular/router';


interface Treatment {
  id: number;
  description: string;
  name: string;
  imgUrl: string | null;
}


@Component({
  selector: 'app-service',
  standalone: true,
  imports: [CommonModule,DemoAngular,ReactiveFormsModule],
  templateUrl: './service.component.html',
  styleUrl: './service.component.css'
})
export class ServiceComponent {
  theropies: Treatment[] = [];

  constructor(
    private adminService: AdminService,
    
    
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getAllTheropies();

    
  }
  getAllTheropies(): void {
    this.adminService.getAllTheropies().subscribe(
      (res: Treatment[]) => {
        this.theropies = res;
        console.log(this.theropies);
      },
      error => {
        console.error('Erreur lors de la récupération des therapies', error);
      }
    );
  }
  

}
