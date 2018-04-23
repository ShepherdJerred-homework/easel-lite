import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClassListComponent } from './class-list/class-list.component';
import { ClassDetailsComponent } from './class-details/class-details.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ClassRosterComponent } from './class-roster/class-roster.component';
import { CreateClassComponent } from './create-class/create-class.component';

const routes: Routes = [
  {
    path: 'classes/:name',
    component: ClassDetailsComponent,
    pathMatch: 'full'
  },
  {
    path: 'classes',
    component: ClassListComponent,
    pathMatch: 'full'
  },
  {
    path: 'rosters/:name',
    component: ClassRosterComponent,
    pathMatch: 'full'
  },
  {
    path: 'new-class',
    component: CreateClassComponent,
    pathMatch: 'full'
  },
  {
    path: '',
    redirectTo: 'classes',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
