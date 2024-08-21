import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,ReactiveFormsModule} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { CommonModule } from '@angular/common';
import { DemoAngular } from '../../DemoAngular';

interface Treatment {
  id: number;
  description: string;
  name: string;
  imgUrl: string | null;
}

@Component({
  selector: 'app-add-theropy',
  standalone: true,
  imports: [CommonModule,DemoAngular,ReactiveFormsModule],
  templateUrl: './add-theropy.component.html',
  styleUrls: ['./add-theropy.component.css']
})
export class AddTheropyComponent implements OnInit {

  theropies: Treatment[] = [];
  /*searchProductForm!: FormGroup;*/

  constructor(
    private adminService: AdminService,
    /*private fb: FormBuilder,*/
    private snackBar: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getAllTheropies();
    /*this.searchProductForm = this.fb.group({
      id: [null, [Validators.required]]
    });*/
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


  deleteTheropy(id: number): void {
    this.adminService.deleteTheropy(id).subscribe(
      () => {
        this.snackBar.open('Theropy supprimée avec succès', 'Fermer', { duration: 5000 });
        this.getAllTheropies();
      },
      error => {
        this.snackBar.open('Erreur lors de la suppression', 'Fermer', { duration: 5000 });
      }
    );
  }
  editTheropy(id: number): void {
    // Naviguer vers le composant de mise à jour avec l'ID de Theropy
    this.router.navigate(['/admin/update-theropy', id]);
  }
  

  adTheropy(){
    this.router.navigate(['/admin/post-theropy']);
  }
}












  



