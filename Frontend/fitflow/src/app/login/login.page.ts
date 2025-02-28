import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router) { }

  registration(){
    this.router.navigate(['/registration']);
  }

  login(){
    this.router.navigate(['/overview']);
  }

  back(){
    this.router.navigate(['/home']);
  }

  ngOnInit() {
  }

}
