import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-overview',
  templateUrl: './overview.page.html',
  styleUrls: ['./overview.page.scss'],
})
export class OverviewPage implements OnInit {

  constructor(private router: Router) { }

  logout(){
    this.router.navigate(['/home']);
  }

  profile(){
    this.router.navigate(['/profile']);
  }

  workoutPlans(){
    this.router.navigate(['/workoutplans']);
  }

  ngOnInit() {
  }

}
