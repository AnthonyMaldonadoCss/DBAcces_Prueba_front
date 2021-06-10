import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { from } from 'rxjs';

import { HomeComponent } from './components/home/home.component'
import { InstructorFormComponent } from './components/instructor-form/instructor-form.component'
import { InstructorListComponent } from './components/instructor-list/instructor-list.component'
import { InstructorDeleteComponent } from './components/instructor-delete/instructor-delete.component'

const routes: Routes = [
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full"
  },
  {
    path: "home",
    component: HomeComponent,
  }, {
    path: "home/add",
    component: InstructorFormComponent
  },
  {
    path: "home/list",
    component: InstructorListComponent
  },
  {
    path: "home/courses",
    component: InstructorDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
