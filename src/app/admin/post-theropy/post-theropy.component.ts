import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators ,ReactiveFormsModule} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AdminService } from '../admin.service';
import { CommonModule } from '@angular/common';
import { DemoAngular } from '../../DemoAngular';

@Component({
  selector: 'app-post-theropy',
  standalone: true,
  imports: [CommonModule,DemoAngular,ReactiveFormsModule],
  templateUrl: './post-theropy.component.html',
  styleUrls: ['./post-theropy.component.css']
})
export class PostTheropyComponent {

  theropyForm: FormGroup;
  selectedFile: File | null = null;
  imagePreview: string | ArrayBuffer | null = null;

  constructor(
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private adminService: AdminService
  ) {}

  ngOnInit(): void {
    this.theropyForm = this.fb.group({
      name: [null, [Validators.required]],
      description: [null, [Validators.required]]
    });
  }

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
    this.previewImage();
  }

  previewImage(): void {
    if (this.selectedFile) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result;
      };
      reader.readAsDataURL(this.selectedFile);
    }
  }

  addTheropy(): void {
    if (this.theropyForm.valid) {
      const formData = new FormData();
      if (this.selectedFile) {
        formData.append('img', this.selectedFile);
      }
      formData.append('name', this.theropyForm.get('name')!.value);
      formData.append('description', this.theropyForm.get('description')!.value);

      this.adminService.addTheropy(formData).subscribe(
        (res) => {
          this.snackBar.open('Theropy ajoutée avec succès', 'Fermer', { duration: 5000 });
        },
        (error) => {
          this.snackBar.open('Erreur lors de l\'ajout de la Theropy', 'Fermer', { duration: 5000 });
        }
      );
    } else {
      this.theropyForm.markAllAsTouched();
    }
  }
}
