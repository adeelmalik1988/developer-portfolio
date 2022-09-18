import one from '../assets/svg/projects/one.svg'
import two from '../assets/svg/projects/two.svg'
import three from '../assets/svg/projects/three.svg'
import four from '../assets/svg/projects/four.svg'
import five from '../assets/svg/projects/five.svg'
import six from '../assets/svg/projects/six.svg'
import seven from '../assets/svg/projects/seven.svg'
import eight from '../assets/svg/projects/eight.svg'
import cloudIms from '../assets/png/cloudMgmtSys.jpeg'
import virtualLollyDemo from '../assets/png/virtualLollyDemo.jpeg'
import quizAppDemop from '../assets/png/quizzAppDemo.jpeg'
import expenseTrackerDemo from '../assets/png/expenseTracker.jpeg'
import covidTrackerDemo from '../assets/png/covidTracker.jpeg'
import diningByFriendsDemo from '../assets/png/diningByFriends.jpeg'
import waapiStreetFighterDemo from '../assets/png/waapiStreetFighter.jpeg'

export const projectsData = [
    {
        id: 1,
        projectName: 'Multi-Tenant Cloud Management System',
        projectDesc: `Multi-Tenant Cloud based Management System. Frontend is desinged in React, Backend is powered by AWS and Serverless Database CockroachDB Used`,
        tags: ['React','Typescript','Graphql' ,'AWS Lambda','AWS Appsync', 'PostgreSQL'],
        code: 'https://github.com/adeelmalik1988/cloud-integrated-management-system',
        demo: 'https://ims-cloud-aws.netlify.app/',
        image: cloudIms
    },
    {
        id: 2,
        projectName: 'JAMSTACK based Virtual Lolly',
        projectDesc: `Backend Stack is deployed by using AWS CDK on Amazon Web Services
        AWS CloudFront, Gatsby, GraphQL/AWS AppSync, DynamoDB used in Backend
        Graphql Schema has been written to define Graphql Queries and mutations
        Frontend is developed in Gatsby and deployed on AWS by using CloudFront
        For CICD`,
        tags: ['Gatsby','Graphql','AWS Lambda','AWS Codepipeline','AWS CodeBuild','Typescript'],
        code: 'https://github.com/adeelmalik1988/eventbridge-awscdk-virtual-lolly-14C',
        demo: 'https://virtual-lolly-adeelmalik.netlify.app',
        image: virtualLollyDemo
    },
    {
        id: 3,
        projectName: 'Progressive Web App - Quiz',
        projectDesc: `Responsive React Quiz App, typescript. For animation effects, Loties files are used to make this Quiz App attractive. 
        For CSS beautification Bootstrap lib used in the porject.
        Progressive Web APP
        Installable on Mobile and Desktop
        Offline Availability
        Host on Firebase so Push notification feature embedded`,
        tags: ['React', 'Typescript','Firebase Notification','PWA','Material UI'],
        code: 'https://github.com/adeelmalik1988/quiz-app-pwa',
        demo: 'https://quizapppwa.web.app/',
        image: quizAppDemop
    },
    {
        id: 4,
        projectName: 'Progressive Web App - Expense Tracker',
        projectDesc: `Expanse Tracker(Type Script) PWA Steps.
        Material UI has been used for application UI/UX
        PWA offline avaialblity feature
        Firebase Push Notification feature
        Installable Progressive Web App`,
        tags: ['React', 'Typescript', 'Firebase Notification','PWA','Material UI'],
        code: 'https://github.com/adeelmalik1988/expense-tracker-pwa',
        demo: 'https://expense-tracker-74b33.web.app',
        image: expenseTrackerDemo
    },
    {
        id: 5,
        projectName: 'Covid Tracker - Frontend',
        projectDesc: 'Responsive React based Covid Tracker has been made by using Restful API. Data is gathered from API and displayed in Graphical representation with the help of React State Hook.',
        tags: ['React', 'Restful', 'Javascript'],
        code: 'https://github.com/adeelmalik1988/covid-tracker-bootcamp2020',
        demo: 'http://covid-tracker-adeelmalik.surge.sh/',
        image: covidTrackerDemo
    },
    {
        id: 6,
        projectName: 'Dining by Friends - Backend',
        projectDesc: `Backend Stack is deployed by using AWS CDK on Amazon Web Services
        Neptune Graph Database, VPC, EC2, Eventbridge, IAM, lambda are the AWS Services that are used in this project
        Gremlin language is use to populate data on Neptune Graph Database
        Graphql Schema has been written to define Graphql Queries and mutations`,
        tags: ['Neptune Graph DB', 'Graphql', 'AWS Lambda','AWS EC2','Gremlin'],
        code: 'https://github.com/adeelmalik1988/diningByFriends15a',
        demo: '',
        image: diningByFriendsDemo
    },
    {
        id: 7,
        projectName: 'Web Animation API - STREET FIGHTER',
        projectDesc: `In this WAAPI based project webanimation API is used to develop different moves of Street Fighter Character RYU. Different moves are in separate react component. Each component/element is render on Button Click. React Hooks useEffect and useState are also used to control life cycle of react component.`,
        tags: ['React', 'WAAPI', 'Javascript'],
        code: 'https://github.com/adeelmalik1988/street-fighter',
        demo: 'http://waapi-streetfighter-adeelmalik.surge.sh/',
        image: waapiStreetFighterDemo
    },
    
]


// Do not remove any fields.
// Leave it blank instead as shown below

/* 
{
    id: 1,
    projectName: 'Car Pooling System',
    projectDesc: '',
    tags: ['Flutter', 'React'],
    code: '',
    demo: '',
    image: ''
}, 
*/