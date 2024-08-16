import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from 'express';
import { AdminService } from '../admin.service';
import { DemoAngular } from '../../DemoAngular';
import { CommonModule } from '@angular/common';

interface Treatment {
  id: number;
  discription: string;  // Note: there's a typo here in the JSON. It should be "description".
  name: string;
  image: string | null;
}

@Component({
  selector: 'app-add-theropy',
  standalone: true,
  imports: [DemoAngular,CommonModule],
  templateUrl: './add-theropy.component.html',
  styleUrl: './add-theropy.component.css'
})
export class AddTheropyComponent implements OnInit{

  theropies: any[] = [];
  searchProductForm!: FormGroup;


  constructor(private adminService: AdminService,
     private fb : FormBuilder,private snackBar: MatSnackBar){

  }

  ngOnInit(){
    this.getAllTheropies();
    this.searchProductForm = this.fb.group({
      id:[null,[Validators.required]]
    })
  }

  getAllTheropies(){
    this.theropies =[];

    this.adminService.getAllTheropies().subscribe
    ((res: Treatment[]) => {
      // Directly assign the result to the component property
      this.theropies = res;

      console.log(this.theropies);
    })
 


  }

  submitForm(){
    this.theropies =[];
    const id = this.searchProductForm.get('id')!.value;
    this.adminService.getTheropyById(id).subscribe(res=>{
      res.forEach(element =>{
        element.processedImg = "data:image/jpeg;base64" +
        element.image;
        this.theropies.push(element);
        
      })
    })
  }

  deleteTheropy(id:any){
    this.adminService.deleteTheropy(id).subscribe(res=>{
      if(res.body == null){
        this.snackBar.open('Theropy supprimee avec succes','Close',{
          duration:5000
        });
        this.getAllTheropies();
      }else{
        this.snackBar.open(res.message, 'Close',{
          duration: 5000,
          panelClass: "erroe-snackbar"
        });
      }
    })
  }












  


}
