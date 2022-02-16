import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { CustomToastrService } from 'src/app/services/custom-toastr.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-create-edit',
  templateUrl: './user-create-edit.component.html',
  styleUrls: ['./user-create-edit.component.scss']
})
export class UserCreateEditComponent implements OnInit {
  @Input() particularUser: any;
  userForm: FormGroup;
  submitted = false;
  isAddMode = true;
  id: any;
  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder, private userService: UserService, private appComponent: AppComponent, private customToast: CustomToastrService) {
    this.userForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      website: ['']
  });
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.isAddMode = !this.id;
    this.userForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      website: [''],
      id: ['']
  });
    if (!this.isAddMode) {
      this.userService.getUserById(this.id)
          .subscribe(data => {
              this.userForm.patchValue(data);
          });
    }
  }
  
  onSubmit() {
    this.userService.registerUser(this.userForm.value)
            .subscribe(
                data => {
                    this.customToast.showSuccess('User Registered Successfully.');
                    this.resetForm();
                },
                error => {
                  this.customToast.showError('Something went wrong !');
                });
  }
  fromParentToThisChild() {
    this.setUserDetails();
    this.isAddMode = false;
  }

  setUserDetails() {
    this.userForm.patchValue(this.particularUser);
  }

  updateUser() {
    this.userService.updateUser(this.userForm.value)
      .subscribe(success => this.customToast.showSuccess('User Updated Successfully.'),
      error => this.customToast.showError('Something went wrong !'))
  }

  resetForm() {
    this.userForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      website: [''],
      id: ['']
  });
  }
}
