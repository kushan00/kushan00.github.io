import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CardComponent } from '../card/card.component';
import { Card } from '../_models/card';
import { Tag } from '../_models/tags';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
  providers: []
})
export class PortfolioComponent {

projects: Card[] = [
  {
    id: 1,
    name: 'MrRider.lk – Web Platform',
    summary:
      'A full-stack ride and delivery management web platform with scalable backend services.',
    description:
      'MrRider.lk is a full-stack web platform where I worked across frontend and backend layers. I implemented new features using React JS and developed REST APIs using Node.js with MongoDB. The system includes user management, order flows, and business logic, designed for scalability and continuous production-level improvements.',
    projectLink: '',
    tags: [
      Tag.REACT,
      Tag.NODEJS,
      Tag.MONGODB,
      Tag.RESTAPI,
      Tag.JAVASCRIPT,
      Tag.TYPESCRIPT,
    ],
  },

  {
    id: 2,
    name: 'Curry Box – Web Platform',
    summary:
      'A modern food ordering and management system built using React and Node.js.',
    description:
      'Curry Box is a full-stack food ordering platform where I developed frontend features using React and backend services using Node.js and MongoDB. The application supports order management, user authentication, and admin workflows with optimized API communication.',
    projectLink: '',
    tags: [
      Tag.REACT,
      Tag.NODEJS,
      Tag.MONGODB,
      Tag.RESTAPI,
      Tag.JAVASCRIPT,
    ],
  },

  {
    id: 3,
    name: 'Eseat.lk Mobile App (CTB Online Seat Booking)',
    summary:
      'A real-time bus seat booking mobile application with secure payment integration.',
    description:
      'Eseat.lk is a Flutter-based mobile application built for CTB online bus seat booking. I developed the entire mobile app, implemented REST APIs using a Laravel backend with SQL, and handled real-time seat availability updates. The system includes user management, booking flows, and secure PayHere payment gateway integration.',
    projectLink: '',
    tags: [
      Tag.FLUTTER,
      Tag.LARAVEL,
      Tag.SQL,
      Tag.RESTAPI,
      Tag.PAYHERE,
    ],
  },

  {
    id: 4,
    name: 'Eseat.lk Bus Tracking Web App',
    summary:
      'A real-time bus tracking web application with live Google Maps visualization.',
    description:
      'This React JS web application displays live bus locations using Google Maps. It consumes backend APIs to update bus positions in real time, supports start-to-end route tracking, and includes filtering options. The app was optimized to handle frequent updates efficiently.',
    projectLink: '',
    tags: [
      Tag.REACT,
      Tag.GOOGLE_MAPS,
      Tag.RESTAPI,
      Tag.JAVASCRIPT,
    ],
  },

  {
    id: 5,
    name: 'Curry Box Mobile App',
    summary:
      'A Flutter-based food ordering mobile app with role-based access control.',
    description:
      'The Curry Box mobile application was built using Flutter with full API integration. I handled user authentication, role-based access for clients and admins, and ensured reliable data flow between the mobile app and backend services.',
    projectLink: '',
    tags: [
      Tag.FLUTTER,
      Tag.RESTAPI,
    ],
  },

  {
    id: 6,
    name: 'MrRider Mobile App',
    summary:
      'A Flutter mobile application supporting rider and admin workflows.',
    description:
      'MrRider Mobile App was developed using Flutter with complete REST API integration. The app supports client and admin roles, secure authentication, and optimized communication with backend services.',
    projectLink: '',
    tags: [
      Tag.FLUTTER,
      Tag.RESTAPI,
    ],
  },

  {
    id: 7,
    name: 'UGT – Solar Power Plant Management System',
    summary:
      'A large-scale enterprise system for monitoring and managing solar power plants.',
    description:
      'UGT is a production-grade solar power plant management system built using Nest JS and PostgreSQL. I worked on backend feature development, bug fixing, cron job monitoring and updates, and system optimization. I also contributed to the React JS frontend, updating UI components and following agile workflows.',
    projectLink: '',
    tags: [
      Tag.NESTJS,
      Tag.POSTGRESQL,
      Tag.REACT,
      Tag.RESTAPI,
      Tag.DOCKER,
      Tag.CICD,
    ],
  },

  {
    id: 8,
    name: 'Vibawya LMS Platform',
    summary:
      'A full-featured LMS platform with multi-role access and video streaming.',
    description:
      'Vibawya is a complete learning management system built using Next JS and Node.js with SQL. I handled all frontend development, API integrations, performance optimizations, and role-based access control for admins, students, and lecturers. The backend supports video streaming, course management, and strong security practices.',
    projectLink: '',
    tags: [
      Tag.NEXTJS,
      Tag.NODEJS,
      Tag.SQL,
      Tag.RESTAPI,
      Tag.TYPESCRIPT,
      Tag.ENCRYPTION,
    ],
  },

  {
    id: 9,
    name: 'IIHE Dynamic Website',
    summary:
      'A fully dynamic website with an admin-controlled content management system.',
    description:
      'IIHE is a dynamic website built from scratch using React JS and Node.js with SQL. I developed secure REST APIs, an admin panel for managing content, and implemented image uploads using Multer. The platform supports role-based access and dynamic content updates.',
    projectLink: '',
    tags: [
      Tag.REACT,
      Tag.NODEJS,
      Tag.SQL,
      Tag.RESTAPI,
      Tag.ENCRYPTION,
    ],
  },

  {
    id: 10,
    name: 'PAW Wallet',
    summary:
      'A blockchain wallet platform with caching and containerized deployment.',
    description:
      'PAW Wallet is a blockchain-based wallet system where I worked on backend and frontend features. The backend uses Next JS, Redis caching, and Docker for deployment. I handled feature additions, bug fixes, and performance optimizations.',
    projectLink: '',
    tags: [
      Tag.NEXTJS,
      Tag.REDIS,
      Tag.DOCKER,
      Tag.RESTAPI,
      Tag.ENCRYPTION,
    ],
  },

  {
    id: 11,
    name: 'PAW Wallet Chrome Extension',
    summary:
      'A Chrome extension enabling blockchain payments via injected scripts.',
    description:
      'This Chrome extension was built from scratch using Vite JS. I converted an existing Next JS app into an extension, implemented theme management, JavaScript injection into third-party sites, and secure communication for blockchain-based payments.',
    projectLink: '',
    tags: [
      Tag.VITEJS,
      Tag.REACT,
      Tag.JAVASCRIPT,
      Tag.ENCRYPTION,
    ],
  },

  {
    id: 12,
    name: 'PAW Validator Dashboard',
    summary:
      'A dashboard for validators and delegators to track staking rewards.',
    description:
      'A Next JS dashboard application where validators and delegators can view rewards and validator data. I implemented all REST APIs and frontend integrations with a focus on security and performance.',
    projectLink: '',
    tags: [
      Tag.NEXTJS,
      Tag.RESTAPI,
      Tag.TYPESCRIPT,
    ],
  },

  {
    id: 13,
    name: 'PAW NPM Package',
    summary:
      'An NPM package providing PAW blockchain APIs for developers.',
    description:
      'A Node.js-based NPM package built using Rollup. It exposes over 20 features, allowing developers to integrate PAW blockchain payments easily. The package also integrates seamlessly with the PAW Chrome Extension.',
    projectLink: '',
    tags: [
      Tag.NODEJS,
      Tag.JAVASCRIPT,
      Tag.RESTAPI,
      Tag.CICD,
    ],
  },

  {
    id: 14,
    name: 'PAW Validator Linux Server',
    summary:
      'A high-performance Linux validator server for blockchain staking.',
    description:
      'A Linux server application built using Electron JS and Socket.IO. It supports secure validator staking using Fernet encryption and Shamir Secret Sharing. The server includes CLI-based authentication, whitelist handling, encrypted communication, and is optimized for low-resource environments.',
    projectLink: '',
    tags: [
      Tag.SOCKETIO,
      Tag.ENCRYPTION,
      Tag.SHAMIRSECRET,
      Tag.DOCKER,
    ],
  },

  {
    id: 15,
    name: 'X Forum',
    summary:
      'A Reddit-like discussion platform with admin moderation.',
    description:
      'X Forum is a full-stack discussion platform built using React JS and Node.js with MongoDB. It includes JWT-based authentication, user roles, post creation, likes, comments, and an admin panel for moderation.',
    projectLink: '',
    tags: [
      Tag.REACT,
      Tag.NODEJS,
      Tag.MONGODB,
      Tag.RESTAPI,
      Tag.ENCRYPTION,
    ],
  },

  {
    id: 16,
    name: 'PAW Platform – Go Conversion',
    summary:
      'Migration of blockchain backend and validator services from Node.js to Go.',
    description:
      'This project involved converting PAW backend services and validator logic from Node.js to Go for better performance and concurrency. The frontend remained in Next JS while backend services were rewritten in Go.',
    projectLink: '',
    tags: [
      Tag.GO,
      Tag.GOLANG,
      Tag.RESTAPI,
    ],
  },

  {
    id: 17,
    name: 'Compliance Backend (Casino Management System)',
    summary:
      'A microservices-based compliance backend for casino platforms.',
    description:
      'A large-scale compliance system built using Go, Docker, and Kubernetes. I worked on the authentication microservice, implementing role management, face recognition workflows, 2FA, and secure access control within a microservices architecture.',
    projectLink: '',
    tags: [
      Tag.GO,
      Tag.GOLANG,
      Tag.DOCKER,
      Tag.KUBERNETES,
      Tag.ENCRYPTION,
    ],
  },
];




  constructor(private titleService: Title) {
    this.titleService.setTitle('KD | Portfolio')
  }

  trackById(index: number, project: Card): number {
    return project.id;
  }

}
