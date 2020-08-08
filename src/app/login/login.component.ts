import { Component, OnInit } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Userobj } from '../userobj';
import { Userpwd } from '../userpwd';

const BACKEND_URL = 'http://localhost:3000';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {


  userpwd: Userpwd = {username: 'alex', pwd: '00'};
  userobj: Userobj = {userid: 1, username: this.userpwd.username, useremail: this.userpwd.username + "@email.com",
   userbirthdate: null, userage: 50, valid: false};  

  constructor(private router: Router, private httpClient: HttpClient) { }


  public loginfunc(): void {
    this.httpClient.post(BACKEND_URL + '/api/auth', this.userpwd, httpOptions)
      .subscribe((data: any) => {
        alert(JSON.stringify(this.userpwd));
        if(data.valid) {

          sessionStorage.setItem('userid', data.userid.toString());
          sessionStorage.setItem('username', data.username);
          sessionStorage.setItem('userbirthdate', data.userbirthdate);
          sessionStorage.setItem('useremail', data.useremail);
          sessionStorage.setItem('userage', data.userage.toString());
          sessionStorage.setItem('valid', data.valid);
          /*this.httpClient.post<Userobj[]>(BACKEND_URL + '/loginafter', data, httpOptions)
          .subscribe((m: any) => {console.log(m[0]);})
          this.router.navigateByUrl('/profile');*
        } else {
          alert("User credentials were invalid. Please try again.")
        }
      

        /*
        if (match) {
          this.router.navigateByUrl('/account');
        }
        else {
          this.errormsg = "User credentials were incorrect. Please try again."
        }
        */

      }
          
      });
    }

}
