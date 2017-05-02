import { Component, OnInit, Input } from '@angular/core';
import { PublishedApp, Platforms } from '../../models/index';

@Component({
  selector: 'published-app',
  templateUrl: './published-app.component.html',
  styleUrls: ['./published-app.component.css']
})
export class PublishedAppComponent implements OnInit {
  _app: PublishedApp;
  constructor() { }

  ngOnInit() {
  }

  @Input() set app(app: PublishedApp) {
    this._app = app;
  }
}
