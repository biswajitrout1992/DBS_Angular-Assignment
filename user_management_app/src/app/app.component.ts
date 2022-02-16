import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'user_management_app';
  userList: any;
  particularUser: any;
  constructor(private userService: UserService, private router: Router) {
    this.getUserList(); 
  }

 getUserList() {
    this.userService.getAllUsers()
    .subscribe(users => { this.userList = users; this.router.navigate(['list']);});
  }
}
