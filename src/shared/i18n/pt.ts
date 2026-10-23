import type { en } from './en';

export const pt: typeof en = {
  hero: {
    heading: 'Desenho interfaces. Desenvolvo soluções que duram.',
    paragraph:
      'Senior Frontend Engineer com mais de 20 anos de experiência a construir produtos web. Combino arquitetura frontend, liderança técnica prática e design UI/UX para transformar requisitos complexos em aplicações fiáveis, escaláveis e intuitivas.',
    cta: 'Ver a minha experiência',
    designLabel: 'EU DESENHO',
    developLabel: 'EU DESENVOLVO',
    scrollCue: 'Competências e Especialização',
  },
  footer: {
    backToTop: 'Voltar ao topo',
  },
  stats: {
    years: 'anos a construir para a web',
    seniorYears: 'anos em funções sénior',
    continents: 'continentes',
  },
  sidebar: {
    backToTop: 'Alexandre Benkendorf — voltar ao topo',
    role1: 'Frontend Engineer',
    role2: 'Arquitetura · Design · Liderança',
    availability: 'Disponível para funções sénior em regime de contrato',
    location: 'Albufeira, Portugal — Remoto',
    languages: 'Português (nativo) · Inglês (C1)',
    navSkills: 'Competências',
    navExperience: 'Experiência',
    navOpenSource: 'Código Aberto',
    mailMe: 'Enviar e-mail',
    linkedinAria: 'Perfil no LinkedIn',
    githubAria: 'Perfil no GitHub',
    resume: 'Currículo',
    contactHeading: 'Vamos falar',
    contactBlurb: 'Disponível para oportunidades sénior em frontend e liderança técnica.',
    toggleThemeAria: 'Alternar modo escuro',
    themeTooltipToDark: 'Vem para o lado negro',
    themeTooltipToLight: 'Vem para o lado da luz',
    switchToPortuguese: 'Mudar para português',
    switchToEnglish: 'Mudar para inglês',
    openMenuAria: 'Abrir menu',
    closeMenuAria: 'Fechar menu',
  },
  skills: {
    heading: 'Competências',
    categories: {
      frontend: 'Frontend',
      architecture: 'Arquitetura e Liderança',
      testingDevops: 'Testes & DevOps',
      backend: 'Backend',
      design: 'Design',
    },
  },
  openSource: {
    heading: 'Código Aberto',
    viewOnGithub: 'Ver no GitHub',
  },
  openSourceProjects: {
    frontendTooling: {
      title: 'frontend-tooling',
      description:
        'Configurações reutilizáveis de ESLint, Prettier e TypeScript, com uma CLI de configuração interativa para projetos frontend consistentes.',
    },
    agentsPlaybooks: {
      title: 'agents-playbooks',
      description:
        'Skills de agentes de IA reutilizáveis, cobrindo React, TypeScript, Clean Architecture, testes e padrões de desenvolvimento.',
    },
  },
  experience: {
    heading: 'Experiência',
    readMore: 'Ler mais',
    showLess: 'Mostrar menos',
  },
  tagStack: {
    showMoreTags: 'Mostrar mais {{count}} tecnologias',
    showFewerTags: 'Mostrar menos tecnologias',
  },
  experienceEntries: {
    nmbrs: {
      dateRange: 'Out 2025 — Atual',
      title: 'Senior Frontend Developer',
      companyMeta: '· NL · Visma · via Devoteam',
      description:
        'Referência técnica em cinco equipas de engenharia, a liderar a transição para uma arquitetura de microfrontends com Module Federation.',
      bullets: [
        'Atuo como referência técnica de frontend em cinco equipas de engenharia — decisões arquiteturais, revisões de código, mentoria e normas de engenharia.',
        'Tive um papel central na transição para Module Federation e arquitetei o host de microfrontends, integrando aplicações Vite e Rsbuild com layouts partilhados, routing e redirecionamentos de autenticação do Visma Connect.',
        'A modernizar uma base de código React de oito anos através de migração para TypeScript, adoção de React Testing Library e componentes reutilizáveis.',
        'Reduzi o tempo de execução do Vitest em 67% — de 30 para 10 minutos — no desenvolvimento local e nas pipelines de CI.',
        'Melhorei a resiliência da aplicação com recuperação automática de cache desatualizada, trabalhando de perto com designers de UI/UX na consistência da interface.',
      ],
    },
    economic: {
      dateRange: 'Out 2024 — Out 2025',
      title: 'Senior Frontend Developer',
      companyMeta: '· DK · Visma · via Devoteam',
      description:
        'Líder técnico de frontend a construir de raiz uma nova plataforma de payroll para esta empresa do grupo Visma.',
      bullets: [
        'Atuei como líder técnico de frontend numa equipa de três programadores frontend e dois full-stack, a conduzir decisões de arquitetura, escolha de tecnologia, revisões de código e mentoria.',
        'Ajudei a construir uma nova solução de payroll de raiz, entregando o PoC inicial em três meses e contribuindo para um MVP em produção.',
        'Desenvolvi componentes e hooks React reutilizáveis que influenciaram a evolução do Taco Design System da e-conomic.',
        'Estabeleci normas de engenharia de frontend em torno de Clean Architecture, princípios SOLID, testes automatizados e manutenibilidade, em colaboração com as equipas de produto e UI/UX.',
      ],
    },
    vodafone: {
      dateRange: 'Jun 2023 — Out 2024',
      title: 'Senior Frontend Developer & UI/UX Designer',
      companyMeta: '· UK · via Devoteam',
      description:
        'Reconstruí ferramentas internas para técnicos de campo e introduzi um sistema de componentes partilhado — reduzi o tempo de configuração de novas aplicações em 90%.',
      bullets: [
        'Atuei como líder técnico de frontend numa equipa de seis programadores, a conduzir decisões arquiteturais, revisões de código, mentoria e normas de engenharia.',
        'Liderei o redesenho completo e a modernização das aplicações internas de engenharia de campo — design UI/UX em Figma, implementação em React, testes de usabilidade, migração para TypeScript e um sistema de design baseado em Ant Design.',
        'Construí um boilerplate de aplicação reutilizável e uma biblioteca de componentes partilhada, reduzindo em 90% o tempo de configuração de novas aplicações ao longo de cinco aplicações, além de introduzir testes automatizados e práticas de CI/CD.',
      ],
    },
    viaphoton: {
      dateRange: 'Dez 2022 — Mai 2023',
      title: 'Senior Frontend Developer & UI/UX Designer',
      companyMeta: '· EUA',
      description:
        'Desenhei a UI/UX de configuradores CPQ de fibra ótica e 5G, no âmbito de uma iniciativa mais ampla que reduziu o tempo de cotação de semanas ou meses para minutos.',
      bullets: [
        'Desenhei interfaces UI/UX para configuradores CPQ de fibra ótica e 5G, preços e ferramentas de configuração em 3D, no âmbito de uma iniciativa mais ampla que simplificou os fluxos de cotação de semanas ou meses para minutos.',
        'Desenvolvi o site institucional responsivo da empresa em WordPress, a partir de designs já fornecidos.',
      ],
    },
    sky: {
      dateRange: 'Dez 2021 — Nov 2022',
      title: 'Senior Frontend Developer',
      companyMeta: '· UK · via Innowave',
      description:
        'Modernizei aplicações de banda larga através de migração para TypeScript e melhorias de acessibilidade, com testes A/B usando Dynamic Yield.',
      bullets: [
        'Modernizei aplicações React de banda larga através de migração para TypeScript, componentes funcionais, code splitting e lazy loading.',
        'Implementei melhorias de acessibilidade WCAG e variantes de testes A/B com Dynamic Yield, em colaboração com as equipas de produto e design.',
      ],
    },
    'ponta-grande': {
      dateRange: 'Ago 2018 — Out 2021',
      title: 'Senior Full-Stack Developer & Designer',
      companyMeta: '· Portugal',
      description:
        'Geri cada aplicação de ponta a ponta — arquitetei a PWA de Membros e digitalizei as operações do resort.',
      bullets: [
        'Arquitetei e desenvolvi de forma independente uma PWA de Membros em React/Django, integrando reservas, faturação, crédito e trocas entre membros com o sistema de gestão Aurora do resort.',
        'Digitalizei fluxos administrativos, de marketing e de vendas, incluindo gestão de leads, agendamento, contratos digitais e ferramentas de recrutamento.',
        'Entreguei três grandes redesenhos da plataforma, o mais recente em outubro de 2026, modernizando o frontend, o backend e a interface de administração.',
        'Resolvi condições de corrida críticas em reservas usando transações atómicas do Django e Celery, introduzindo também monitorização de serviços, auditoria de crédito e melhor visibilidade de crédito.',
        'Continuo a prestar consultoria independente ao resort desde novembro de 2021.',
      ],
    },
    pwd: {
      dateRange: 'Jan 2018 — Jun 2018',
      title: 'Frontend Web Developer',
      companyMeta: '· Portugal',
      description:
        'Desenvolvi e mantive sites e interfaces frontend com WordPress, jQuery, HTML e CSS numa agência de web design.',
    },
    earlier: {
      dateRange: '2004 — 2018',
      title: 'Graphic Designer & Web Developer',
      company: 'Início de carreira',
      companyMeta: '· Brasil',
      description:
        'Comecei como designer gráfico, depois construí sites e software de gestão para clientes em todo o Brasil.',
      bullets: [
        'Comecei a minha carreira profissional como designer gráfico em 2004, desenvolvendo uma base sólida em comunicação visual, tipografia, composição e princípios de design, antes de migrar para o desenvolvimento web e de software.',
        'Desenvolvi sites, aplicações web e software de gestão empresarial para clientes no Brasil, principalmente com PHP, Laravel, WordPress, jQuery e MySQL.',
        'Em 2008, desenvolvi e vendi um sistema de gestão de leilões em Delphi para uma empresa de filatelia, apoiando a administração de leilões de selos.',
        'A minha formação em design gráfico e desenvolvimento de software continua a influenciar a forma como abordo a engenharia de frontend, combinando qualidade visual, usabilidade e código manutenível.',
      ],
    },
  },
};
