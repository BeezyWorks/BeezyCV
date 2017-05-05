import { Component, OnInit } from '@angular/core';
import { Applicant, Job, Skill, PublishedApp, Platforms } from '../../models/index';
import { APPLICANT } from '../../data/applicant-data';

@Component({
  selector: 'resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
  applicant: Applicant = APPLICANT;
  private maxMobileWidth: number = 1024;
  isMobileSize: boolean;

  constructor() { }

  ngOnInit() {
    this.isMobileSize = window.innerWidth < this.maxMobileWidth;
    window.onresize = () => {
      this.isMobileSize = (window.innerWidth < this.maxMobileWidth);
    }
  }

}
