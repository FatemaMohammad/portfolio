import type { Project } from '../types/project';

export const projects: Project[] = [
  {
    title: 'Appointment Booking System',
    role: 'Full-Stack Developer – Personal Project',
    description:
      'A full-stack appointment booking system with secure login, real-time slot availability, and booking/cancellation management.',
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
    title: 'WeZimplify CRM Dashboard',
    role: 'Frontend Developer – Take-Home Assignment',
    description:
      'A responsive CRM dashboard designed and developed as a frontend take-home assignment for WeZimplify, with a focus on reusable components, clear information hierarchy, and responsive UI.',
    tags: ['React 19', 'TypeScript', 'Tailwind CSS 4', 'Vite'],
    highlights: [
      'Responsive desktop and mobile dashboard',
      'Reusable component-based architecture',
      'KPI, project, customer, task, and activity views',
      'Interactive task list',
      'Type-safe mock data with TypeScript',
    ],
    scope: 'Frontend/UI implementation using mock data.',
  },
];
