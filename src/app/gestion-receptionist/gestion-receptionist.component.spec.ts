import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionReceptionistComponent } from './gestion-receptionist.component';

describe('GestionReceptionistComponent', () => {
  let component: GestionReceptionistComponent;
  let fixture: ComponentFixture<GestionReceptionistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionReceptionistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GestionReceptionistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
