import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/User';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {

  constructor (private http: HttpClient) {
  }

  getTeachers (): Observable<User[]> {
    return this.http.get<User[]>('/api/users/?role=teacher');
  }

}
