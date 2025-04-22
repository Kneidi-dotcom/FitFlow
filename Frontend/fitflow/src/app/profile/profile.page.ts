import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  userId!: number;
  user: any;


  ngOnInit() {
    this.userId = history.state.userId;

    this.userService.getUser(this.userId).subscribe(user => {
      user.birthdate = new Date(user.birthdate);
      this.user = user;
    });
  }

  back(){
    this.router.navigate(['/overview']);
  }

  constructor(private router: Router, private userService: UserService) {
  }


  protected readonly Number = Number;
}
