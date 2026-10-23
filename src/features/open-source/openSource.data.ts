import type { IconType } from 'react-icons';
import { IoBookOutline, IoCubeOutline } from 'react-icons/io5';

export interface OpenSourceProject {
  id: string;
  icon: IconType;
  url: string;
  tags: string[];
}

export const openSourceProjects: OpenSourceProject[] = [
  {
    id: 'frontendTooling',
    icon: IoCubeOutline,
    url: 'https://github.com/alexandrebenkendorf/frontend-tooling',
    tags: ['TypeScript', 'ESLint', 'Prettier', 'CLI', 'Node.js', 'lint-staged', 'Husky', 'Vitest'],
  },
  {
    id: 'agentsPlaybooks',
    icon: IoBookOutline,
    url: 'https://github.com/alexandrebenkendorf/agents-playbooks',
    tags: [
      'AI Agents',
      'React',
      'TypeScript',
      'Clean Architecture',
      'Testing',
      'Module Federation',
      'Design Systems',
      'Git Conventions',
    ],
  },
];
