import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { User } from '../models/User';

@Injectable()
export class RosterService {

  constructor (private http: HttpClient) {
  }

  getRoster (name: string): Observable<User[]> {
    return this.http.get('/api/rosters/' + name) as Observable<User[]>;
  }

  updateRoster (users: string[], name: string): Observable<User[]> {
    return this.http.put('/api/rosters/' + name, users) as Observable<User[]>;
  }

}
