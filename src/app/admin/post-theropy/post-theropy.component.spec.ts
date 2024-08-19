import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostTheropyComponent } from './post-theropy.component';

describe('PostTheropyComponent', () => {
  let component: PostTheropyComponent;
  let fixture: ComponentFixture<PostTheropyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostTheropyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PostTheropyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
