import { User } from './User';

export class Class {
  department: string;
  id: string;
  number: number;
  title: string;
  teacher: User;

  static equals (r: Class, l: Class): boolean {
    return l.department === r.department &&
      l.id === r.id &&
      l.number === r.number &&
      l.title === r.title &&
      l.teacher.id === r.teacher.id;
  }
}
