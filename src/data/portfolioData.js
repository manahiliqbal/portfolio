export const hero = {
  eyebrow: 'hello :) glad you’re here',
  // role: 'AI Engineer',
  name: 'Manahil',
  nameLast: 'Iqbal',
  tagline:
    'I build RAG pipelines and agentic workflows',
  bio:
    'AI engineer at PureLogics in Lahore, PUCIT grad (3.96 GPA). I like shipping systems that work and people can actually use. Off the clock I’m quiet and thoughtful, a bit creative — usually with matcha or tea nearby.',
  highlights: [
    { label: 'Education', value: 'BS CS · PUCIT · 3.96 GPA' },
    { label: 'Focus', value: 'RAG & agentic AI' },
    { label: 'Availability', value: 'Freelance & full-time' },
    { label: 'Location', value: 'Lahore, Pakistan' },
  ],
  contacts: [
    {
      icon: 'mail',
      label: 'Email',
      value: 'manahiliqbal0511@gmail.com',
      href: 'mailto:manahiliqbal0511@gmail.com',
    },
    {
      icon: 'linkedin',
      label: 'LinkedIn',
      value: 'linkedin.com/in/manahil-iqbal',
      href: 'https://www.linkedin.com/in/manahil-iqbal',
    },
    {
      icon: 'github',
      label: 'GitHub',
      value: 'github.com/manahiliqbal',
      href: 'https://github.com/manahiliqbal',
    },
    { icon: 'map', label: 'Location', value: 'Lahore, Pakistan' },
  ],
};

export const about = {
  title: 'About me',
  subtitle: 'What I work on and how I like to build.',
  paragraphs: [
    'I focus on AI systems that ship: retrieval pipelines, agent workflows, and backends that stay up. I care about making complex tools feel straightforward for the people using them.',
    'I lead development on an AI-powered QA platform at PureLogics. Before that I interned at IREG-IT, TA’d 300+ students at PUCIT, and built projects where usability mattered as much as the metrics.',
  ],
  focus: [
    'RAG & vector search',
    'Agentic LLM workflows',
    'Python backends (Django, Flask)',
    'LLM features that feel human-friendly',
  ],
};

export const human = {
  title: 'Off the clock',
  subtitle: 'A bit of the person behind the work.',
  intro:
    'When I’m not in code, I’m usually painting, gaming, cooking, or listening to music — introverted by default, warmer once you’re in.',
  currently: [
    { emoji: '🍵', label: 'Drink of choice', value: 'Matcha — honey, vanilla' },
    { emoji: '🎨', label: 'Hobbies', value: 'Art, gaming, music, crafting' },
    { emoji: '☕', label: 'Also', value: 'Tea or coffee — non-negotiable most days' },
  ],
  loves: [
    'Animated films (yes, I cry)',
    'Sketching and co-op games',
    'Trying new recipes without a strict plan',
  ],
};

export const navSections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'life', label: 'Life' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

export const sectionCopy = {
  skills: {
    subtitle: 'Technologies I use regularly across AI and full-stack work.',
  },
  experience: {
    subtitle: 'Roles where I built and shipped production systems.',
  },
  projects: {
    subtitle: 'Selected work from university and industry.',
  },
  life: {
    subtitle: 'Hobbies and small details that don’t fit on a résumé.',
  },
  education: {
    subtitle: 'Degree and certifications.',
  },
  contact: {
    headline: 'Get in touch',
    subtext:
      'Open to roles, collaborations, and thoughtful conversations. Email is the fastest way to reach me.',
    email: 'manahiliqbal0511@gmail.com',
  },
};

export const skillClusters = [
  {
    label: 'AI / ML',
    variant: 'red',
    skills: [
      'LangChain',
      'RAG pipelines',
      'n8n',
      'OpenAI API',
      'Gemini API',
      'Chroma DB',
      'Qdrant',
      'FAISS',
      'Hugging Face',
      'TensorFlow',
    ],
  },
  {
    label: 'Backend',
    variant: 'blue',
    skills: ['Python', 'Django', 'Flask', 'REST APIs', 'PostgreSQL', 'MongoDB'],
  },
  {
    label: 'Frontend & tools',
    variant: 'green',
    skills: ['React', 'Tailwind CSS'],
    extra: { variant: 'amber', skills: ['Git', 'Postman', 'Jupyter'] },
  },
];

export const experience = [
  {
    title: 'AI Engineer',
    org: 'PureLogics',
    period: 'Mar 2025 – Present',
    location: 'Lahore, Pakistan',
    description: [
      'Lead development on an AI-powered QA platform (TMS): LLM test-case generation reduced manual QA effort by ',
      { stat: '80%' },
      '. Built RAG pipelines and agentic workflows with LangChain, Chroma, and Django.',
    ],
  },
  {
    title: 'Software Engineer Intern',
    org: 'IREG-IT',
    period: 'Jul 2024 – Aug 2024',
    location: 'Lahore, Pakistan',
    description: [
      'Developed a Google Sheets mail-merge add-on (Apps Script + PostgreSQL), cutting manual email scheduling by ',
      { stat: '70%' },
      '.',
    ],
  },
  {
    title: 'Teaching Assistant',
    org: 'PUCIT',
    period: 'Sep 2023 – Jun 2025',
    location: 'Lahore, Pakistan',
    description: [
      'Mentored ',
      { stat: '300+' },
      ' students across DLD, Computer Vision, Calculus, and OOP labs.',
    ],
  },
];

export const projects = [
  {
    num: '01',
    badge: 'Final year project',
    name: 'Eunoia',
    aside: 'my FYP — close to my heart',
    descBefore: 'AI mental health platform with a RAG chatbot — ',
    highlight: '90% response accuracy',
    descAfter:
      ' on evaluation sets. Built with Gemini, Chroma, SBERT, React, and Flask.',
    tags: ['RAG', 'Gemini', 'SBERT', 'React'],
    featured: true,
  },
  {
    num: '02',
    name: 'TestCraft AI',
    descBefore: 'Calculates requirement coverage from codebase — ',
    highlight: '40%',
    descAfter: ' reduction in manual QA writing. OpenAI, Flask, and Qdrant.',
    tags: ['OpenAI', 'Qdrant', 'Flask'],
  },
  {
    num: '03',
    name: 'Study Sage',
    descBefore: 'Chat with PDFs, summaries, and flashcards — ',
    highlight: '35%',
    descAfter: ' less study time in testing. LangChain, FAISS, and Gemini.',
    tags: ['LangChain', 'FAISS', 'Gemini'],
  },
  {
    num: '04',
    badge: 'Production',
    name: 'TMS Platform',
    descBefore: 'AI QA automation at PureLogics — ',
    highlight: '80%',
    descAfter: ' less QA effort. LangChain, Django, and agentic workflows.',
    tags: ['Agentic', 'LangChain', 'Django'],
    featured: true,
  },
];

export const education = {
  school: 'Punjab University College of Information Technology (PUCIT)',
  degree: 'Bachelor of Science in Computer Science',
  period: 'December 2021 – June 2025',
  gpa: '3.96 / 4.0',
};

export const certifications = [
  { course: 'LangChain for LLM Application Development', provider: 'DeepLearning.AI' },
  { course: 'Multimodal RAG using Vertex AI', provider: 'Google Cloud' },
  { course: 'Building AI Agents with Google ADK', provider: 'DataCamp' },
  { course: 'Advanced RAG Applications', provider: 'LinkedIn Learning' },
  { course: 'AI Agents using RAG and LangChain', provider: 'IBM' },
];
