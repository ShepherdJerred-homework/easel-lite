import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/catch';

import { RosterService } from '../services/roster.service';
import { User } from '../models/User';

@Injectable()
export class RosterResolver implements Resolve<Observable<User[]>> {
  constructor (private rosterService: RosterService, private router: Router) {
  }

  resolve (route: ActivatedRouteSnapshot) {
    return this.rosterService.getRoster(route.paramMap.get('name')).catch(err => {
      console.log(err);
      this.router.navigateByUrl('/error');
      return Observable.of(null);
    });
  }
}
