import type { Project } from '../types/project';

export const projects: Project[] = [
  {
    title: 'Full-stack project title',
    description:
      'One or two sentences on the problem this solved and your role, e.g. a full-stack C#/.NET API with a React front end.',
    tags: ['C#', '.NET', 'React', 'SQL'],
  },
  {
    title: 'React project title',
    description:
      'One or two sentences on the problem this solved and your role, e.g. a React application with a focus on accessibility and component testing.',
    tags: ['React', 'TypeScript'],
  },
  {
    title: 'QA project title',
    description:
      'One or two sentences on the problem this solved and your role, e.g. an automated test suite covering API and UI regression testing.',
    tags: ['QA', 'Test Automation'],
  },
];
