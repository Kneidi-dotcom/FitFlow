import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WorkoutplansPage } from './workoutplans.page';

describe('WorkoutplansPage', () => {
  let component: WorkoutplansPage;
  let fixture: ComponentFixture<WorkoutplansPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkoutplansPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
