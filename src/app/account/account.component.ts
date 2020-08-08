import { Component, OnInit, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit{

  username : string;
  userbirthdate : string;
  userage : string;
  constructor(private router:Router) { }

  ngOnInit() {
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

}
