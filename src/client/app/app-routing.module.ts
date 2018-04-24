import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClassListComponent } from './components/class-list/class-list.component';
import { ClassDetailsComponent } from './components/class-details/class-details.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ClassRosterComponent } from './components/class-roster/class-roster.component';
import { CreateClassComponent } from './components/create-class/create-class.component';

import { TeacherResolver } from './resolvers/user.resolver';
import { ClassDetailsResolver, ClassListResolver } from './resolvers/class.resolver';

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
    component: ClassRosterComponent
  },
  {
    path: 'new-class',
    pathMatch: 'full',
    component: CreateClassComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'classes'
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
    TeacherResolver
  ]
})
export class AppRoutingModule {
}
