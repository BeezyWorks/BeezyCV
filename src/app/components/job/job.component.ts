import { Component, OnInit, Input } from '@angular/core';
import { Job } from '../../models/index';

@Component({
  selector: 'job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {
  private _job: Job;
  constructor() { }

  ngOnInit() {
  }

  @Input()
  set job(job: Job) {
    this._job = job;
  }
}
