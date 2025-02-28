import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorkoutplansPage } from './workoutplans.page';

const routes: Routes = [
  {
    path: '',
    component: WorkoutplansPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorkoutplansPageRoutingModule {}
