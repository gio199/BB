import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { UserComponent } from './user/user.component';


const routes: Routes = [
  { path: '', component: HomeComponent },            
  { path: 'list', component: ListComponent },
  { path: 'users', component: UserComponent }         
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }




