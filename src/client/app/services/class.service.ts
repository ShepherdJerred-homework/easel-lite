import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Class } from '../models/Class';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ClassService {

  constructor (private http: HttpClient) {
  }

  getClasses (): Observable<Class[]> {
    return this.http.get<Class[]>('/api/classes');
  }

  getClass (name: string): Observable<Class> {
    return this.http.get<Class>('/api/classes/' + name);
  }

}
