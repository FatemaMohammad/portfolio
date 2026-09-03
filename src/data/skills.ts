import type { SkillCategory } from '../types/skill';

export const skillCategories: SkillCategory[] = [
  {
    category: 'Backend',
    skills: ['C#', '.NET / ASP.NET Core', 'REST APIs', 'Entity Framework Core', 'LINQ'],
  },
  {
    category: 'Frontend',
    skills: ['React', 'TypeScript', 'JavaScript', 'Blazor', 'HTML', 'CSS'],
  },
  {
    category: 'Testing & Quality',
    skills: [
      'Manual Testing',
      'Test Case Design',
      'Regression Testing',
      'System Testing',
      'Bug Reporting',
      'Debugging',
      'Playwright',
    ],
  },
  {
    category: 'Databases',
    skills: ['SQL', 'SQLite'],
  },
  {
    category: 'Tools & DevOps',
    skills: ['Git', 'GitHub', 'GitHub Actions', 'CI/CD', 'Jira', 'Visual Studio', 'VS Code'],
  },
  {
    category: 'Ways of Working',
    skills: ['Agile', 'Scrum', 'Code Review', 'Team Collaboration'],
  },
  {
    category: 'AI-Assisted Development',
    skills: ['GitHub Copilot', 'ChatGPT', 'Claude'],
  },
];
