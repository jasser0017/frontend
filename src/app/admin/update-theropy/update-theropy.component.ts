import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../admin.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DemoAngular } from '../../DemoAngular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-update-theropy',
  templateUrl: './update-theropy.component.html',
  standalone:true,
  styleUrls: ['./update-theropy.component.css'],
  imports:[DemoAngular,CommonModule]
})
export class UpdateTheropyComponent  {
  
}
