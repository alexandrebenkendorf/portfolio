export interface SkillCategory {
  id: string;
  label: string;
  tags: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'frontend',
    label: 'Frontend',
    tags: ['React', 'TypeScript', 'JavaScript', 'Vite', 'Redux', 'Module Federation'],
  },
  {
    id: 'architecture',
    label: 'Architecture & Leadership',
    tags: ['Microfrontends', 'Frontend Architecture', 'Design Systems', 'Code Reviews', 'Technical Mentoring'],
  },
  {
    id: 'testingDevops',
    label: 'Testing & DevOps',
    tags: ['Vitest', 'React Testing Library', 'Playwright', 'Cypress', 'CI/CD', 'Azure DevOps', 'Git'],
  },
  { id: 'backend', label: 'Backend', tags: ['Python', 'Django', 'Django REST Framework', 'PostgreSQL', 'Celery'] },
  {
    id: 'design',
    label: 'Design',
    tags: ['Graphic Design', 'Figma', 'UI/UX Design', 'Ant Design', 'MUI (Material UI)', 'Styled Components'],
  },
];
