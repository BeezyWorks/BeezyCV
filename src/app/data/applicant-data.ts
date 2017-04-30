import { Applicant, Platforms } from '../models/index';

export const APPLICANT: Applicant = {
    firstName: 'Mattaniah',
    lastName: 'Beezy',
    email: 'mattaniahbeezy@gmail.com',
    city: 'Jerusalem',
    jobs: [
        {
            company: 'Perfected Tech',
            endDate: new Date(2017, 4),
            startDate: new Date(2016, 3),
            title: 'Full Stack Mobile Developer',
            responsibilities: [

            ]
        },
        {
            company: 'Catch Media',
            endDate: new Date(2016, 2),
            startDate: new Date(2014, 10),
            title: 'Technical Writer',
            responsibilities: [

            ]
        }
    ],
    skills: [

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
            ]
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
            ]
        },
        {
            title: 'Siddur One',
            platform: [
                Platforms.Angular,
                Platforms.Android
            ],
            description: "A complete Hebrew prayer book for Android and Angular. Used as a playground for me to learn about new features on various platforms.",
            gitHubLink: "https://github.com/BeezyWorks/SiddurOne"
        }
    ]
} 