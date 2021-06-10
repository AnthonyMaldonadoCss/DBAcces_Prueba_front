import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { InstructorFormComponent } from './components/instructor-form/instructor-form.component';
import { InstructorListComponent } from './components/instructor-list/instructor-list.component';
import { InstructorDeleteComponent } from './components/instructor-delete/instructor-delete.component';
import { HomeComponent } from './components/home/home.component';

import { CursosService } from './services/cursos.service'
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    InstructorFormComponent,
    InstructorListComponent,
    InstructorDeleteComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    CursosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
