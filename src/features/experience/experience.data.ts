export interface ExperienceEntry {
  id: string;
  dateRange: string;
  title: string;
  company: string;
  companyMeta: string;
  description: string;
  tags: string[];
  bullets?: string[];
  current?: boolean;
}

export const experience: ExperienceEntry[] = [
  {
    id: 'nmbrs',
    dateRange: 'Oct 2025 — Now',
    title: 'Senior Frontend Developer',
    company: 'Nmbrs Reporting',
    companyMeta: '· NL · Visma · via Devoteam',
    description:
      'Technical reference across five engineering teams, leading the move to a Module Federation microfrontend architecture.',
    tags: [
      'React',
      'TypeScript',
      'JavaScript',
      'Redux',
      'MUI (Material UI)',
      'Vite',
      'Rsbuild',
      'Module Federation',
      'Vitest',
      'React Testing Library',
      'ESLint',
      'Prettier',
      'Git',
      'Azure DevOps',
      'CI/CD',
      'Scrum',
    ],
    bullets: [
      'Serve as a key frontend technical reference across five engineering teams — architectural decisions, code reviews, mentoring, and engineering standards',
      'Played a central role in the transition to Module Federation and architected the microfrontend host, integrating Vite and Rsbuild applications with shared layouts, routing, and Visma Connect authentication redirects',
      'Modernizing an eight-year-old React codebase through TypeScript migration, React Testing Library adoption, and reusable components',
      'Reduced Vitest execution time by 67% — from 30 minutes to 10 — across local development and CI pipelines',
      'Improved application resilience with automated stale-cache recovery, working closely with UI/UX designers on interface consistency',
    ],
    current: true,
  },
  {
    id: 'economic',
    dateRange: 'Oct 2024 — Oct 2025',
    title: 'Senior Frontend Developer',
    company: 'e-conomic',
    companyMeta: '· DK · Visma · via Devoteam',
    description:
      'Frontend technical lead building a new payroll platform from the ground up for this Visma Group company.',
    tags: ['React', 'TypeScript', 'Vite', 'Vitest', 'React Testing Library', 'Figma', 'Git', 'CI/CD', 'Scrum'],
    bullets: [
      'Acted as frontend technical lead within a team of three frontend and two full-stack developers, driving architecture, technology selection, code reviews, and mentoring',
      'Helped build a new payroll solution from the ground up, delivering the initial PoC in three months and contributing to a production MVP',
      "Developed reusable React components and hooks that influenced the evolution of e-conomic's Taco Design System",
      'Established frontend engineering standards around Clean Architecture, SOLID principles, automated testing, and maintainability, while collaborating with product and UI/UX teams',
    ],
  },
  {
    id: 'vodafone',
    dateRange: 'Jun 2023 — Oct 2024',
    title: 'Senior Frontend Developer & UI/UX Designer',
    company: 'Vodafone',
    companyMeta: '· UK · via Devoteam',
    description:
      'Rebuilt internal field-engineer tools and introduced a shared component system — cut new-app setup time by 90%.',
    tags: [
      'React',
      'TypeScript',
      'JavaScript',
      'Vite',
      'Vitest',
      'React Testing Library',
      'Playwright',
      'Ant Design',
      'Styled Components',
      'Storybook',
      'Figma',
      'Git',
      'Azure DevOps',
      'CI/CD',
      'Scrum',
    ],
    bullets: [
      'Acted as frontend technical lead within a six-developer team, driving architectural decisions, code reviews, mentoring, and engineering standards',
      'Led the end-to-end redesign and modernization of internal field-engineering applications — UI/UX design in Figma, React implementation, usability testing, TypeScript migration, and an Ant Design-based design system',
      'Built a reusable application boilerplate and shared component library, reducing new application setup time by 90% across five applications, while introducing automated testing and CI/CD practices',
    ],
  },
  {
    id: 'viaphoton',
    dateRange: 'Dec 2022 — May 2023',
    title: 'Senior Frontend Developer & UI/UX Designer',
    company: 'viaPhoton',
    companyMeta: '· USA',
    description:
      'Designed UI/UX for fiber-optic and 5G CPQ configurators as part of a broader initiative that reduced quotation turnaround from weeks or months to minutes.',
    tags: ['Figma', 'WordPress', 'jQuery', 'Foundation', 'SASS', 'MySQL', 'Git'],
    bullets: [
      'Designed UI/UX interfaces for fiber-optic and 5G CPQ, pricing, and 3D-enabled configuration tools, as part of a broader initiative that streamlined quotation workflows from weeks or months to minutes',
      "Developed the company's responsive WordPress website from provided designs",
    ],
  },
  {
    id: 'sky',
    dateRange: 'Dec 2021 — Nov 2022',
    title: 'Senior Frontend Developer',
    company: 'Sky',
    companyMeta: '· UK · via Innowave',
    description:
      'Modernized broadband applications through TypeScript migration and accessibility improvements, running A/B tests with Dynamic Yield.',
    tags: [
      'React',
      'TypeScript',
      'Redux',
      'Redux-Saga',
      'React Testing Library',
      'Cypress',
      'Styled Components',
      'Loadable Components',
      'Webpack',
      'Dynamic Yield',
      'Storybook',
      'Figma',
      'Git',
      'Concourse',
      'CI/CD',
      'Scrum',
    ],
    bullets: [
      'Modernized React broadband applications through TypeScript migration, functional components, code splitting, and lazy loading',
      'Implemented WCAG accessibility improvements and A/B testing variants using Dynamic Yield, collaborating with product and design teams',
    ],
  },
  {
    id: 'ponta-grande',
    dateRange: 'Aug 2018 — Oct 2021',
    title: 'Senior Full-Stack Developer & Designer',
    company: 'Ponta Grande Resort',
    companyMeta: '· Portugal',
    description: 'Owned every app end to end — architected the Members PWA and digitized the resort’s operations.',
    tags: [
      'React',
      'Redux',
      'Django',
      'Django REST Framework',
      'PostgreSQL',
      'Celery',
      'Ant Design',
      'Material UI',
      'Foundation',
      'SASS',
      'PWA',
      'Figma',
      'Git',
      'VPS Infrastructure',
    ],
    bullets: [
      "Independently architected and developed a React/Django Members PWA integrating bookings, billing, credits, and member exchanges with the resort's Aurora management system",
      'Digitized administrative, marketing, and sales workflows, including lead management, scheduling, digital contracts, and recruitment tools',
      'Delivered three major platform redesigns, most recently in October 2026, modernizing the frontend, backend, and administration interface',
      'Resolved critical booking race conditions using Django atomic transactions and Celery, while introducing service monitoring, credit auditing, and improved credit visibility',
      'Continue providing independent consultancy to the resort on an ongoing basis since November 2021',
    ],
  },
  {
    id: 'pwd',
    dateRange: 'Jan 2018 — Jun 2018',
    title: 'Frontend Web Developer',
    company: 'Portugal Web Design',
    companyMeta: '· Portugal',
    description:
      'Developed and maintained websites and frontend interfaces using WordPress, jQuery, HTML, and CSS within a web design agency.',
    tags: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'WordPress'],
  },
  {
    id: 'earlier',
    dateRange: '2004 — 2018',
    title: 'Graphic Designer & Web Developer',
    company: 'Earlier career',
    companyMeta: '· Brazil',
    description: 'Started as a graphic designer, then built websites and business software for clients across Brazil.',
    tags: ['Graphic Design', 'PHP', 'Laravel', 'WordPress', 'jQuery', 'MySQL', 'Delphi'],
    bullets: [
      'Started my professional career as a graphic designer in 2004, developing a strong foundation in visual communication, typography, composition, and design principles before transitioning into web and software development',
      'Developed websites, web applications, and business software for clients in Brazil, primarily using PHP, Laravel, WordPress, jQuery, and MySQL',
      'In 2008, developed and sold a Delphi-based auction management system to a philatelic business, supporting the administration of stamp auctions',
      'My background in graphic design and software development continues to influence how I approach frontend engineering, combining visual quality, usability, and maintainable code',
    ],
  },
];
