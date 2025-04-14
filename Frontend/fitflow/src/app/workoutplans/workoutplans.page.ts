import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-workoutplans',
  templateUrl: './workoutplans.page.html',
  styleUrls: ['./workoutplans.page.scss'],
})
export class WorkoutplansPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  back(){
    this.router.navigate(['/overview']);
  }

}
