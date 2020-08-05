import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = "";
  pass = "";
  errormsg ="";

  creds = [{email: "a@email.com", pass: "1"}, {email: "b@email.com", pass: "1"}, {email: "c@email.com", pass: "1"}]
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  login(): void {
    var match = false;
    console.log(this.email);
    console.log(this.pass);
    for (let item of this.creds){
      if (this.email == item.email && this.pass == item.pass) {
        match = true;
      }
    if (match) {
      this.router.navigateByUrl('/account');
    }
    else {
      this.errormsg = "User credentials were incorrect. Please try again."
    }

    }
      
  }

}
