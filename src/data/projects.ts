import type { Project } from '../types/project';

export const projects: Project[] = [
  {
    title: 'Appointment Booking System',
    role: 'Full-Stack Developer – Personal Project',

description:
  'A full-stack appointment booking application built with ASP.NET Core and React. The system provides secure authentication, appointment management, and booking validation to prevent scheduling conflicts.',

    tags: ['C#', 'ASP.NET Core', 'EF Core', 'SQLite', 'JWT', 'React', 'TypeScript', 'Vite'],
    highlights: [
      'Clean/domain-driven architecture (Domain, Application, Infrastructure, API layers)',
      'JWT-secured REST API with protected endpoints',
      'Booking logic prevents past-date and conflicting slot bookings',
      'Cancellations update status rather than deleting records',
    ],
    repoUrl: 'https://github.com/FatemaMohammad/appointment-booking-system',
  },
  {
    title: 'EG Healthcare Chat',
    role: 'Frontend Developer – Bachelor Project (Team of 4)',
    description:
      "Bachelor's degree final project developed in collaboration with EG Healthcare, as part of a team of four.",
    tags: ['React', 'TypeScript', 'Vite', 'Axios', 'JWT', 'GitHub Actions', 'GitHub Pages'],
    highlights: [
      'User directory with search and filtering',
      'User status management',
      'One-to-one chat with sending/receiving messages',
      'Read receipts and unread message counts',
      'Authenticated REST API integration',
    ],
  },

{
  title: 'CRM Dashboard',
  role: 'Frontend Developer – Personal Portfolio Project',
  description:
    'A responsive CRM dashboard built with React and TypeScript, focusing on reusable components, clean UI design, and structured data presentation.',
  tags: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
  highlights: [
    'Responsive desktop and mobile layout',
    'Reusable React components',
    'KPI, project, customer, and activity views',
    'Interactive task management',
    'Type-safe mock data using TypeScript',
  ],
  repoUrl: 'https://github.com/FatemaMohammad/crm-dashboard.git',
  scope: 'Frontend implementation using mock data.',
},

];
