import { Component, OnInit } from '@angular/core';
import { Applicant, Job, Skill, PublishedApp, Platforms, DocumentStyle } from '../../models/index';
import { APPLICANT } from '../../data/applicant-data';
import { DomSanitizer } from '@angular/platform-browser';
import { MdIconRegistry } from '@angular/material';
import jsPDF from 'jspdf';

@Component({
  selector: 'resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
  applicant: Applicant = APPLICANT;
  private maxMobileWidth: number = 1024;
  isMobileSize: boolean;

  private documentTop: number = 10;
  private currentTop: number;
  private maxPageTop: number = 280;

  private sourceCodeLink: string = "https://github.com/BeezyWorks/BeezyCV";

  private monthNames: string[] = [
    "January", "February", "March",
    "April", "May", "June", "July",
    "August", "September", "October",
    "November", "December"
  ];

  constructor(private mdIconRegistry: MdIconRegistry, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.isMobileSize = window.innerWidth < this.maxMobileWidth;
    window.onresize = () => {
      this.isMobileSize = (window.innerWidth < this.maxMobileWidth);
    }

    this.mdIconRegistry
      .addSvgIcon('github',
      this.sanitizer.bypassSecurityTrustResourceUrl('../../../assets/images/github-circle.svg'));
  }

  printPDF() {
    let pdf = new jsPDF('p', 'mm', 'a4');
    this.currentTop = this.documentTop;
    this.writeLine(pdf, this.applicant.firstName + " " + this.applicant.lastName, DocumentStyle.HeaderStyle);
    this.writeLine(pdf, this.applicant.shortDescription, DocumentStyle.SubtitleStyle);
    this.writeLine(pdf, this.applicant.email, DocumentStyle.SubtitleStyle);

    // Write Skills
    this.writeLine(pdf, "Skills", DocumentStyle.HeaderStyle);
    for (let skill of this.applicant.skills) {
      this.writeLine(pdf, skill.description, DocumentStyle.BodyStyle);
    }

    // Write Work Experience
    this.writeLine(pdf, "Work Experience", DocumentStyle.HeaderStyle);
    for (let job of this.applicant.jobs) {
      this.writeLine(pdf, job.title, DocumentStyle.HeaderTwoStyle);
      let dates = this.dateToString(job.startDate) + " - ";
      if (job.endDate) {
        dates += this.dateToString(job.endDate);
      }
      else {
        dates += "current";
      }
      this.writeLine(pdf, job.company + '\t' + dates, DocumentStyle.SubheaderStyle);
      for (let duty of job.responsibilities) {
        this.writeLine(pdf, duty, DocumentStyle.BodyStyle);
      }
    }

    // Write Sample Apps
    this.writeLine(pdf, "Selected Projects", DocumentStyle.HeaderStyle);
    for (let app of this.applicant.publishedApps) {
      this.writeLine(pdf, app.title, DocumentStyle.HeaderTwoStyle);
      let platformsString = "";
      for (let platform of app.platform) {
        platformsString += platform + '\t';
      }
      this.writeLine(pdf, platformsString, DocumentStyle.SubheaderStyle);
      this.writeLine(pdf, app.description, DocumentStyle.BodyStyle);
      if (app.gitHubLink) {
        this.writeLine(pdf, 'GitHub: ' + app.gitHubLink, DocumentStyle.BodyStyle, app.gitHubLink);
      }
    }

    // Print document
    pdf.save('BeezyCV.pdf');
  }

  openGithubLink() {
    var win = window.open(this.sourceCodeLink, '_blank');
    win.focus();
  }

  private writeLine(pdf: jsPDF, text: string, style: DocumentStyle, linkURL?: string) {
    pdf.setFontSize(style.fontSize);
    pdf.setFont(style.fontName);
    pdf.setFontType(style.fontType);
    pdf.setTextColor(style.r, style.g, style.b);
    let top = this.currentTop + style.marginTop;
    if (top >= this.maxPageTop) {
      pdf.addPage();
      top = this.documentTop;
      this.currentTop = top;
    }
    let splitText: string[] = pdf.splitTextToSize(text, 180);
    console.log(splitText);
    if (!linkURL) {
      pdf.text(style.marginLeft, top, splitText);
    }
    else {
      pdf.textWithLink(text, style.marginLeft, top, { url: linkURL });
    }
    this.currentTop += style.marginBottom + style.marginTop + style.lineHeight * (splitText.length - 1);
  }

  private dateToString(date: Date): string {
    return this.monthNames[date.getMonth()] + ' ' + date.getFullYear();
  }
}