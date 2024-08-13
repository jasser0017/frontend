import { Component, AfterViewInit, OnDestroy, OnInit } from '@angular/core';
import { StorageService } from '../services/storage.service';
import { Router } from '@angular/router';
declare var $: any; 



@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {


   role:String =""

  constructor(private storageService: StorageService,
    private router :Router) { }

  ngOnInit(): void {
    this.storageService.roles$.subscribe(roles => {
      this.role=roles[0]
      console.log('Roles in Component B:', roles);
    });
  }
  redirect()
  {
    this.router.navigate(['/historique'])
  }
  
}
