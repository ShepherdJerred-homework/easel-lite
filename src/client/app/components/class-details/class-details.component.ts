import { Component, OnInit, ViewChild } from '@angular/core';
import { ClassService } from '../../services/class.service';
import { Class } from '../../models/Class';
import { Router, ActivatedRoute } from '@angular/router';
import { TeacherService } from '../../services/teacher.service';
import { User } from '../../models/User';
import { NgForm } from '@angular/forms';

// TODO don't bind model until data is loaded from service
@Component({
  selector: 'el-class-details',
  templateUrl: './class-details.component.html',
  styleUrls: []
})
export class ClassDetailsComponent implements OnInit {

  @ViewChild('classForm') classForm: NgForm;
  classs: Class;
  teachers: User[];

  constructor (private classService: ClassService, private teacherService: TeacherService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit () {
    this.route.params.subscribe((params) => {
      this.getClass(params['name']);
    });
    this.getTeachers();
  }

  getClass (name: string): void {
    this.classService.getClass(name).subscribe(classs => {
      this.classs = classs;
    });
  }

  getTeachers (): void {
    this.teacherService.getTeachers().subscribe(teachers => {
      this.teachers = teachers;
    });
  }

  hasChanged (): boolean {
    return this.classForm.form.dirty;
  }

  onSave (): void {
    // TODO contact service
    this.navigateToClasses();
  }

  onDelete (): void {
    if (window.confirm('Are you sure you want to delete ' + this.classs.title + '?')) {
      // TODO contact service
      this.navigateToClasses();
    }
  }

  onCancel (): void {
    if (this.hasChanged()) {
      if (!window.confirm('You have unsaved changes. Leaving this page will discard them.')) {
        return;
      }
    }
    this.navigateToClasses();
  }

  navigateToClasses (): void {
    this.router.navigateByUrl('/classes');

  }

}
