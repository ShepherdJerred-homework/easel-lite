import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ClassListComponent } from './class-list/class-list.component';
import { ClassDetailsComponent } from './class-details/class-details.component';
import { CreateClassComponent } from './create-class/create-class.component';
import { ClassRosterComponent } from './class-roster/class-roster.component';


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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
