import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GererRendezVousComponent } from './gerer-rendez-vous.component';

describe('GererRendezVousComponent', () => {
  let component: GererRendezVousComponent;
  let fixture: ComponentFixture<GererRendezVousComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GererRendezVousComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GererRendezVousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
