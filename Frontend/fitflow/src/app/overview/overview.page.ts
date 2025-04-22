import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-overview',
  templateUrl: './overview.page.html',
  styleUrls: ['./overview.page.scss'],
})
export class OverviewPage implements OnInit {

  userId!: number;

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.userId = history.state.userId;

    console.log('User ID:', this.userId);
  }

  logout(){
    this.router.navigate(['/home']);
  }

  profile(){
    this.router.navigate(['/profile'], {
      state: {userId: this.userId},
    });
  }

  workoutPlans(){
    this.router.navigate(['/workoutplans'], {
      state: {userId: this.userId},
    });
  }
}
