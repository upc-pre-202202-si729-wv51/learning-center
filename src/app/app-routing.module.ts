import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./public/pages/home/home.component";
import {AboutComponent} from "./public/pages/about/about.component";
import {StudentsComponent} from "./learning/pages/students/students.component";
import {PageNotFoundComponent} from "./public/pages/page-not-found/page-not-found.component";
import {InstructorsComponent} from "./learning/pages/instructors/instructors.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'students', component: StudentsComponent },
  { path: 'instructors', component: InstructorsComponent },
  { path: '', redirectTo: 'home', pathMatch: "full"},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
