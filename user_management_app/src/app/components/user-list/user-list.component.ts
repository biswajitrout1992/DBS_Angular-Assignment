import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  @Input() userDetails: any;
  userList: any;
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.getUserList();
  }

  getUserList() {
    this.userService.getAllUsers()
    .subscribe(users => { this.userList = users;});
  }
  gotoRegistration(){
    this.router.navigate(['/register']); 
}

  receiveUserDetails($event: any) {  
    let deletedUser = $event;
    this.userList.splice(this.userList.map(function(item: any) { return item.id; }).indexOf(deletedUser.id), 1);  
    } 
}
