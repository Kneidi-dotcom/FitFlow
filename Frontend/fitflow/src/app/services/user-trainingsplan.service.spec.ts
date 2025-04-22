import { TestBed } from '@angular/core/testing';

import { UserTrainingsplanService } from './user-trainingsplan.service';

describe('UserTrainingsplanService', () => {
  let service: UserTrainingsplanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserTrainingsplanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
