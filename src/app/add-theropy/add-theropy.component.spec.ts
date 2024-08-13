import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTheropyComponent } from './add-theropy.component';

describe('AddTheropyComponent', () => {
  let component: AddTheropyComponent;
  let fixture: ComponentFixture<AddTheropyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddTheropyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddTheropyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
