import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WorkoutplansPageRoutingModule } from './workoutplans-routing.module';

import { WorkoutplansPage } from './workoutplans.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WorkoutplansPageRoutingModule
  ],
  declarations: [WorkoutplansPage]
})
export class WorkoutplansPageModule {}
