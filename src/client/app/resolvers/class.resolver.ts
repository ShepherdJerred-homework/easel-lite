import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/catch';

import { ClassService } from '../services/class.service';
import { Class } from '../models/Class';

@Injectable()
export class ClassListResolver implements Resolve<Observable<Class[]>> {
  constructor (private classService: ClassService, private router: Router) {
  }

  resolve () {
    return this.classService.getClasses().catch(err => {
      console.log(err);
      this.router.navigateByUrl('/error');
      return Observable.of(null);
    });
  }
}

@Injectable()
export class ClassDetailsResolver implements Resolve<Observable<Class>> {
  constructor (private classService: ClassService, private router: Router) {
  }

  resolve (route: ActivatedRouteSnapshot) {
    return this.classService.getClass(route.paramMap.get('name')).catch(err => {
      console.log(err);
      this.router.navigateByUrl('/error');
      return Observable.of(null);
    });
  }
}
