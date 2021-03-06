import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClassListComponent } from './components/class-list/class-list.component';
import { ClassDetailsComponent } from './components/class-details/class-details.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ClassRosterComponent } from './components/class-roster/class-roster.component';
import { CreateClassComponent } from './components/create-class/create-class.component';
import { ServerErrorComponent } from './components/server-error/server-error.component';

import { StudentResolver, TeacherResolver } from './resolvers/user.resolver';
import { ClassDetailsResolver, ClassListResolver } from './resolvers/class.resolver';
import { RosterResolver } from './resolvers/roster.resolver';

const routes: Routes = [
  {
    path: 'classes/:name',
    pathMatch: 'full',
    component: ClassDetailsComponent,
    resolve: {
      classs: ClassDetailsResolver,
      teachers: TeacherResolver
    }
  },
  {
    path: 'classes',
    pathMatch: 'full',
    component: ClassListComponent,
    resolve: {
      classes: ClassListResolver
    }
  },
  {
    path: 'rosters/:name',
    pathMatch: 'full',
    component: ClassRosterComponent,
    resolve: {
      students: StudentResolver,
      roster: RosterResolver
    }
  },
  {
    path: 'new-class',
    pathMatch: 'full',
    component: CreateClassComponent,
    resolve: {
      teachers: TeacherResolver
    }
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'classes'
  },
  {
    path: 'error',
    component: ServerErrorComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    ClassListResolver,
    ClassDetailsResolver,
    TeacherResolver,
    StudentResolver,
    RosterResolver
  ]
})
export class AppRoutingModule {
}
