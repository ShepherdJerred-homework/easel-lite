import { Component, OnInit } from '@angular/core';
import { ClassService } from '../../services/class.service';
import { Class } from '../../models/Class';

// TODO sort by department then by number
@Component({
  selector: 'el-class-list',
  templateUrl: './class-list.component.html',
  styleUrls: []
})
export class ClassListComponent implements OnInit {

  classes: Class[];

  constructor (private classService: ClassService) {
  }

  ngOnInit () {
    this.getClasses();
  }

  getClasses (): void {
    this.classService.getClasses().subscribe(classes => {
      this.classes = classes;
    });
  }

}
