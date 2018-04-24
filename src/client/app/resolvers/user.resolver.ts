import { Injectable } from '@angular/core';
import { Resolve, Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/catch';

import { UserService } from '../services/user.service';
import { User } from '../models/User';

@Injectable()
export class TeacherResolver implements Resolve<Observable<User[]>> {

  constructor (private userService: UserService, private router: Router) {
  }

  resolve () {
    return this.userService.getTeachers().catch(err => {
      console.log(err);
      this.router.navigateByUrl('/error');
      return Observable.of(null);
    });
  }
}
