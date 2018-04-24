import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

import { ClassService } from '../services/class.service';
import { Class } from '../models/Class';

@Injectable()
export class ClassListResolver implements Resolve<Observable<Class[]>> {
  constructor (private classService: ClassService) {
  }

  resolve () {
    return this.classService.getClasses();
  }
}

@Injectable()
export class ClassDetailsResolver implements Resolve<Observable<Class>> {
  constructor (private classService: ClassService) {
  }

  resolve () {
    return this.classService.getClass('COMP336');
  }
}
