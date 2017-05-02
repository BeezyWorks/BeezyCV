import { Applicant, Platforms } from '../models/index';

export const APPLICANT: Applicant = {
    firstName: 'Mattaniah',
    lastName: 'Beezy',
    shortDescription: "Full Stack Mobile and Web Developer",
    avatarUrl: "https://lh5.googleusercontent.com/-05uj31Zm2qc/AAAAAAAAAAI/AAAAAAAAJfg/067-ArDfqvg/photo.jpg",
    email: 'mattaniahbeezy@gmail.com',
    city: 'Jerusalem',
    jobs: [
        {
            company: 'Perfected Tech',
            endDate: new Date(2017, 4),
            startDate: new Date(2016, 3),
            title: 'Full Stack Mobile Developer',
            responsibilities: [
                "Develop native iOS and Android apps",
                "Develop tools for generating Android and iOS apps",
                "Create and maintain webapps in AngularJS",
                "Create backends for apps using Node and Loopback with MongoDB",
                "Code review and best practices enforcement",
                "Research and implement tools for faster development and release of apps",
                "Project managment and prognostics"
            ]
        },
        {
            company: 'Catch Media',
            endDate: new Date(2016, 2),
            startDate: new Date(2014, 10),
            title: 'Technical Writer',
            responsibilities: [
                "Create demos and sample code",
                "Design effective and helpful UX/UI",
                "Select and develop documentation tools",
                "Help design APIs for partners",
                "Review, update and edit technical documentation",
                "QA apps, SDKs and websites"
            ]
        },
        {
            company: 'Beezy Works Studios',
            startDate: new Date(2013, 10),
            endDate: null,
            title: 'Full Stack Developer',
            responsibilities: [
                "Create, develop and maintain apps for mobile, web and wearables",
                "Over 10k downloads (of a reasonably nieche area), with an over 4.7 star rating on Google Play",
                "Constantly learn new technologies and platforms to increase my fame and glory"
            ]
        }
    ],
    skills: [
        {
            description: "Native mobile development for Android and iOS in Java and Objective-C"
        },
        {
            description: "Cross platform mobile development in Xamarin"
        },
        {
            description: "Maintenence of large and complex .Net projects"
        },
        {
            description: "Web development in Angular and AngularJS"
        },
        {
            description: "Backend development and maintenence in NodeJS usint Loopback with MongoDB"
        },
        {
            description: "Deployed apps to AWS and Firebase"
        },
        {
            description: "Continuous delivery of Andrdoid, iOS and Xamarin apps to Google Play and App Store using automated systems"
        }
    ],
    publishedApps: [
        {
            title: 'uVersit',
            description: 'An app for students to take college courses. Includes a chat with the professor, asignments, quizes, grades and materials. I worked on the mobile as well as the server side development',
            platform: [
                Platforms.iOS,
                Platforms.Xamarin,
                Platforms.Node,
                Platforms.Loopback
            ],
            gitHubLink: null
        },
        {
            title: 'Charity App',
            description: 'A design heavy app for users to make donations from their mobile devices. This app featured a lot of animations and security. Much consideration had to be made for optomization and security.',
            platform: [
                Platforms.iOS,
                Platforms.Android,
                Platforms.Xamarin,
                Platforms.Node,
                Platforms.Loopback
            ],
            gitHubLink: null
        },
        {
            title: 'Siddur One',
            platform: [
                Platforms.Angular,
                Platforms.Android
            ],
            description: "A complete Hebrew prayer book for Android and Angular. Used as a playground for me to learn about new features on various platforms.",
            gitHubLink: "https://github.com/BeezyWorks/SiddurOne"
        },
        {
            title: 'Handy Siddur',
            platform:[
                Platforms.Pebble,
                Platforms.C,
                Platforms.AndroidWear
            ],
            description: "A handy little prayer book and hebrew watchface for your wrist. Uses location to calculate prayer times (solar times).",
            gitHubLink: "https://github.com/BeezyWorks/handy-siddur-pebble"
        }
    ]
} 