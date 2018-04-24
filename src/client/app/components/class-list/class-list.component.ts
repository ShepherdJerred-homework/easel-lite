import { Component, OnInit } from '@angular/core';
import { ClassService } from '../../services/class.service';
import { Class } from '../../models/Class';
import { ActivatedRoute } from '@angular/router';

// TODO sort by department then by number
@Component({
  selector: 'el-class-list',
  templateUrl: './class-list.component.html',
  styleUrls: []
})
export class ClassListComponent implements OnInit {

  classes: Class[];

  constructor (private classService: ClassService, private route: ActivatedRoute) {
  }

  ngOnInit () {
    this.classes = this.route.snapshot.data.classes;
  }
}
