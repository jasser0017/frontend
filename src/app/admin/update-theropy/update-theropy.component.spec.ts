import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTheropyComponent } from './update-theropy.component';

describe('UpdateTheropyComponent', () => {
  let component: UpdateTheropyComponent;
  let fixture: ComponentFixture<UpdateTheropyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateTheropyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateTheropyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
