import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RosterService } from '../../services/roster.service';
import { User } from '../../models/User';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'el-class-roster',
  templateUrl: './class-roster.component.html',
  styleUrls: []
})
export class ClassRosterComponent implements OnInit {

  @ViewChild('rosterForm') rosterForm: NgForm;
  roster: RosterEntry[];
  className: string;

  constructor (private rosterService: RosterService, private route: ActivatedRoute, private router: Router) {
    this.roster = [];
  }

  ngOnInit () {
    let currentRoster: User[] = this.route.snapshot.data.roster;
    let students: User[] = this.route.snapshot.data.students;

    this.route.params.subscribe(params => {
      this.className = params['name'];
    });

    let rosterMap: Map<string, User> = new Map<string, User>();
    for (let student of currentRoster) {
      rosterMap.set(student.id, student);
    }

    for (let student of students) {
      this.roster.push(new RosterEntry(student, rosterMap.has(student.id)));
    }
  }

  hasChanged (): boolean {
    return this.rosterForm.form.dirty;
  }

  onSave (): void {
    let selectedUsers: RosterEntry[] = this.roster.filter(entry => entry.status === true);

    let selectedUserIds: string[] = selectedUsers.map((entry) => {
      if (entry.status === true) {
        return entry.student.id;
      } else {
        return null;
      }
    });

    console.log(selectedUsers);
    this.rosterService.updateRoster(selectedUserIds, this.className).subscribe(classs => {
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

class RosterEntry {
  student: User;
  status: boolean;

  constructor (student: User, status: boolean) {
    this.student = student;
    this.status = status;
  }
}
