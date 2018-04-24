import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

import { UserService } from '../services/user.service';
import { User } from '../models/User';

@Injectable()
export class TeacherResolver implements Resolve<Observable<User[]>> {

  constructor (private userService: UserService) {
  }

  resolve () {
    return this.userService.getTeachers();
  }
}
