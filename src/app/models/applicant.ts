import { Skill } from './skill';
import { PublishedApp } from './published-app';
import { Job } from './job';

export class Applicant {
    firstName: string;
    lastName: string;
    email: string;
    city: string;
    skills: Skill[];
    jobs: Job[];
    publishedApps: PublishedApp[];
}