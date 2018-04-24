import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, UrlSegment } from '@angular/router';

@Component({
  selector: 'el-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: []
})
export class NotFoundComponent implements OnInit {

  url: UrlSegment[];

  constructor (private route: ActivatedRoute) {

  }

  ngOnInit () {
    this.route.url.subscribe((url) => {
      this.url = url;
    });
  }

}
