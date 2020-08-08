import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  username : string;
  userbirthdate : string;
  userage : string;
    constructor(private router: Router) {


     }
  ngOnInit() : void {
    var valid = sessionStorage.getItem('valid');
    if(valid) {
      this.username = sessionStorage.getItem('username');
      this.userbirthdate = sessionStorage.getItem('userbirthdate');
      this.userage = sessionStorage.getItem('userage');
    } else {
      alert("user not logged in");
      this.router.navigateByUrl('/login');

    }
  }
  public updateUserDetails() : void {
          sessionStorage.setItem('username', this.username);
          sessionStorage.setItem('userbirthdate', this.userbirthdate);
          sessionStorage.setItem('userage', this.userage.toString());

  }

}
