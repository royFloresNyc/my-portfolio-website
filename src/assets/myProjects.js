import { FaJsSquare, FaHtml5, FaCss3, FaReact, FaNodeJs, FaGit, FaGithub, FaBootstrap } from 'react-icons/fa'
import { SiRedux, SiRails, SiExpo, SiVisualstudiocode } from 'react-icons/si'
import { DiRuby, DiPostgresql, DiMongodb } from 'react-icons/di'
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

const technologies = [ 
    <FaJsSquare className='mt-3' style={{fontSize: 40}}/>, 
    <DiRuby className='mt-3' style={{fontSize: 40}}/>, 
    <FaHtml5 className='mt-3' style={{fontSize: 40}}/>, 
    <FaCss3 className='mt-3' style={{fontSize: 40}}/>, 
    <FaReact className='mt-3' style={{fontSize: 40}}/>, 
    <SiRedux className='mt-3' style={{fontSize: 40}}/>,
    <FaNodeJs className='mt-3' style={{fontSize: 40}}/>,
    <SiRails className='mt-3' style={{fontSize: 40}}/>,
    <FaBootstrap className='mt-3' style={{fontSize: 40}}/>,
    <DiPostgresql className='mt-3' style={{fontSize: 40}}/>, 
    <DiMongodb className='mt-3' style={{fontSize: 40}}/>,
    <FaGit className='mt-3' style={{fontSize: 40}}/>,
    <FaGithub className='mt-3' style={{fontSize: 40}}/>,
    <SiExpo className='mt-3' style={{fontSize: 40}}/>,
    <SiVisualstudiocode className='mt-3' style={{fontSize: 40}}/>,
]

export { projects, technologies }
