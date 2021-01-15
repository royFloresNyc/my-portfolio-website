import RoamrLogo from './Logo-red.png'
import IronBudget from './IronBudgetLogo.png'


const bio = 'Full stack web and mobile app developer with experience in Ruby and JavaScript frameworks. Over a decade of experience as a professional theater performer. Innately curious with the ability to learn quickly. Adaptable, resilient, and collaborative. Fluent in English, Tagalog, and Abaknon, and a little bit of Spanish.'
const projects = [
        {
            name: 'Roamr',
            logo: RoamrLogo,
            description: 'A travel app that allows users to query any city, view photos, information, safety ratings, points of interest, and maps.',
            stack: 'React Native, Ruby on Rails',
            links: [
                {
                    type: 'github',
                    label: 'Front-End',
                    link: 'https://github.com/royFloresNyc/roamr-front-end-mod5-project-',
                },
                {
                    type: 'github',
                    label: 'Back-End',
                    link: 'https://github.com/royFloresNyc/roamr-back-end-mod5-project-api',
                },
                {
                    type: 'demo',
                    label: 'Demo',
                    link: 'https://www.loom.com/share/ffe44225e591412ca3be1b4f843ac32e',
                },
            ]
        },
        {
            name: 'Iron Budget',
            logo: IronBudget,
            description: 'A financial accounting tool that allows users to keep track of their income and expenditures and analyze their spending habits.',
            stack: 'React, Ruby on Rails',
            links: [
                {
                    type: 'github',
                    label: 'Front-End',
                    link: 'https://github.com/royFloresNyc/mod4-project-frontend',
                },
                {
                    type: 'github',
                    label: 'Back-End',
                    link: 'https://github.com/royFloresNyc/iron-budget-backend-api',
                },
                {
                    type: 'demo',
                    label: 'Demo',
                    link: 'https://www.loom.com/share/6497012699a84cc78e494c4c7acf5be5',
                },
            ]
        },
    ]


export { bio, projects }
