import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthServiceService} from '../auth-service.service';
import {LoginUser} from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginUser = new LoginUser('', '');

  constructor(private authentication: AuthServiceService, private router: Router ) { }

  login() {
    this.authentication.login(this.loginUser.username, this.loginUser.password).subscribe(
      response => {
          console.log(response);
          localStorage.setItem('token', response.access);
          localStorage.setItem('currentUser', response.user);
          localStorage.setItem('currentRole', response.role_type);
          localStorage.setItem('currentId', response.id);
          alert('You have successfully logged in');
          this.router.navigate(['']);
      },
      error => {
        console.log(error);
        alert('Something went wrong');
        this.router.navigate(['/register']);
      }
    );
  }

  ngOnInit() {
  }

}
