import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { CommonModule } from '@angular/common';
import { DemoAngular } from '../../DemoAngular';

@Component({
  selector: 'app-update-theropy',
  templateUrl: './update-theropy.component.html',
  standalone:true,
  imports:[CommonModule,DemoAngular,ReactiveFormsModule],
  styleUrls: ['./update-theropy.component.css']
})
export class UpdateTheropyComponent implements OnInit {
  updateForm!: FormGroup;
  imageUrl: string | ArrayBuffer | null = null;
  theropyId!: number;

  constructor(
    private fb: FormBuilder,
    private adminService: AdminService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.updateForm = this.fb.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      img: [null]
    });

    this.theropyId = Number(this.route.snapshot.paramMap.get('id'));
    this.loadTheropy();
  }

  loadTheropy(): void {
    // You may need to create a method to get the current details of the Theropy by its ID
    // For simplicity, we'll assume the data is directly populated
    // this.adminService.getTheropyById(this.theropyId).subscribe(data => {
    //   this.updateForm.patchValue(data);
    //   if (data.imgbyte) {
    //     this.imageUrl = 'data:image/jpeg;base64,' + btoa(String.fromCharCode(...new Uint8Array(data.imgbyte)));
    //   }
    // });
  }

  onFileChange(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imageUrl = reader.result;
      };
      reader.readAsDataURL(file);
      this.updateForm.patchValue({
        img: file
      });
    }
  }

  onSubmit(): void {
    if (this.updateForm.valid) {
      this.adminService.updateTheropy(this.theropyId, this.updateForm.value).subscribe(
        () => {
          this.router.navigate(['/admin/add-theropy']);
        },
        error => {
          console.error('Erreur lors de la mise à jour', error);
        }
      );
    }
  }
  }

