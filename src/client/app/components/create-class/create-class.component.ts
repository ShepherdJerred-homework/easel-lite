import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Class } from '../../models/Class';
import { User } from '../../models/User';

import { ClassService } from '../../services/class.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'el-create-class',
  templateUrl: './create-class.component.html',
  styleUrls: []
})
export class CreateClassComponent implements OnInit {

  @ViewChild('classForm') classForm: NgForm;
  classs: Class;
  teachers: User[];

  constructor (private classService: ClassService, private route: ActivatedRoute, private router: Router) {
    this.classs = new Class();
  }

  ngOnInit () {
    this.teachers = this.route.snapshot.data.teachers;
  }

  hasChanged (): boolean {
    return this.classForm.form.dirty;
  }

  onCreate (): void {
    console.log(this.classs);
    this.classService.createClass(this.classs).subscribe(classs => {
      this.navigateToClasses();
    });
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
