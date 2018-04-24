import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

import { Class } from '../../models/Class';
import { User } from '../../models/User';

import { ClassService } from '../../services/class.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'el-class-details',
  templateUrl: './class-details.component.html',
  styleUrls: []
})
export class ClassDetailsComponent implements OnInit {

  @ViewChild('classForm') classForm: NgForm;
  classs: Class;
  teachers: User[];

  constructor (private classService: ClassService, private teacherService: UserService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit () {
    this.classs = this.route.snapshot.data.classs;
    this.teachers = this.route.snapshot.data.teachers;
  }

  hasChanged (): boolean {
    return this.classForm.form.dirty;
  }

  onSave (): void {
    this.classService.updateClass(this.classs).subscribe((classs) => {
      this.navigateToClasses();
    });
  }

  onDelete (): void {
    if (window.confirm('Are you sure you want to delete ' + this.classs.title + '?')) {
      this.classService.deleteClass(this.classs).subscribe((classs) => {
        this.navigateToClasses();
      });
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
