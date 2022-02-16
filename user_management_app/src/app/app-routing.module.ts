import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { UserCreateEditComponent } from './components/user-create-edit/user-create-edit.component';
import { UserListComponent } from './components/user-list/user-list.component';

const routes: Routes = [
  {
    path: '', component: AppComponent,
    children: [
        { path: 'list', component: UserListComponent },
        { path: 'register', component: UserCreateEditComponent },
        { path: 'edit/:id', component: UserCreateEditComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
