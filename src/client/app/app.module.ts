import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './components/app/app.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ClassListComponent } from './components/class-list/class-list.component';
import { ClassDetailsComponent } from './components/class-details/class-details.component';
import { CreateClassComponent } from './components/create-class/create-class.component';
import { ClassRosterComponent } from './components/class-roster/class-roster.component';
import { ClassService } from './services/class.service';
import { TeacherService } from './services/teacher.service';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    ClassListComponent,
    ClassDetailsComponent,
    CreateClassComponent,
    ClassRosterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ClassService,
    TeacherService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
