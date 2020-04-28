import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  userDisplayName = '';
  public userId;
  constructor(private router: Router) { }
logOut() {
  localStorage.removeItem('currentUser');
  localStorage.removeItem('token');
  localStorage.removeItem('currentRole');
  localStorage.removeItem('currentId');
  this.router.navigate(['/login']);

}
  ngOnInit() {
    this.userDisplayName = localStorage.getItem('currentUser');
    this.userId = localStorage.getItem('currentId');
  }

}
