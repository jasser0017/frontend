import { TestBed } from '@angular/core/testing';

import { DemoAngularService } from './demo-angular.service';

describe('DemoAngularService', () => {
  let service: DemoAngularService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemoAngularService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
