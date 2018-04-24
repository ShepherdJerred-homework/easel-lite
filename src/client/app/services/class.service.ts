import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Class } from '../models/Class';
import { Observable } from 'rxjs/Observable';
import { User } from '../models/User';

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

  createClass (classs: Class): Observable<Class> {
    return this.http.post('/api/classes/', classs) as Observable<Class>;
  }

  updateClass (classs: Class): Observable<Class> {
    let teacher = classs.teacher as User;
    classs.teacher = teacher.id;
    return this.http.put('/api/classes/' + classs.id, classs) as Observable<Class>;
  }

  deleteClass (classs: Class): Observable<Class> {
    return this.http.delete('/api/classes/' + classs.id) as Observable<Class>;
  }

}
