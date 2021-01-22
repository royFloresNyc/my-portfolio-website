import RoamrLogo from './Logo-red.png'
import IronBudget from './IronBudgetLogo.png'

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


export { projects }
