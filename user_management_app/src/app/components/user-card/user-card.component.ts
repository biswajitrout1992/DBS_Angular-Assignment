import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CustomToastrService } from 'src/app/services/custom-toastr.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {
  @Input() userDetails: any;
  @Output() userEmitter = new EventEmitter <any> (); 
  constructor( private router: Router, private userService: UserService, private customToast: CustomToastrService) { }

  ngOnInit(): void {
  }

  deleteUser(user: any) {
    this.userService.deleteUser(user.id)
      .subscribe(data => { 
        this.customToast.showSuccess('User Deleted Successfully.');
        this.userEmitter.emit(user);
    },
      error => this.customToast.showError('Something went wrong !'))
  }
}
