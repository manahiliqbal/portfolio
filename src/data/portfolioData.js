export const hero = {
  eyebrow: 'Portfolio',
  role: 'AI Engineer',
  name: 'Manahil',
  nameLast: 'Iqbal',
  tagline:
    'I design and ship production AI systems — RAG pipelines, LLM integrations, and agentic workflows with reliable backends.',
  bio: 'Currently an AI Engineer at PureLogics in Lahore. B.S. Computer Science from PUCIT (GPA 3.96/4.0). Open to freelance and full-time opportunities.',
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
  title: 'About',
  subtitle: 'Background, approach, and what I work on today.',
  paragraphs: [
    'I am an AI engineer focused on systems that work in production — retrieval pipelines, agent workflows, and APIs that teams can maintain and extend.',
    'At PureLogics I lead development on an AI-powered test management platform. I have also interned at IREG-IT, served as a teaching assistant at PUCIT for 300+ students, and built projects that reduced manual work by measurable margins.',
  ],
  focus: [
    'Retrieval-augmented generation (RAG)',
    'Agentic & multi-step LLM workflows',
    'Python backends (Django, Flask)',
    'LLM integration in product features',
  ],
};

export const navSections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

export const sectionCopy = {
  skills: {
    subtitle: 'Technologies I use regularly across AI, backend, and frontend work.',
  },
  experience: {
    subtitle: 'Professional roles and impact.',
  },
  projects: {
    subtitle: 'Selected academic, personal, and production projects.',
  },
  education: {
    subtitle: 'Degree and professional certifications.',
  },
  contact: {
    headline: 'Get in touch',
    subtext:
      'For freelance work, collaboration, or full-time roles in AI engineering — email is the best way to reach me.',
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
      'Lead developer on an AI-powered QA automation platform (TMS). LLM-based test case generation reduced manual QA effort by ',
      { stat: '60%' },
      '. Built RAG pipelines and agentic workflows with LangChain, OpenAI, Chroma DB, and Django; designed REST APIs connecting AI modules to the frontend.',
    ],
  },
  {
    title: 'Software Engineer Intern',
    org: 'IREG-IT',
    period: 'Jul 2024 – Aug 2024',
    location: 'Lahore, Pakistan',
    description: [
      'Developed a Google Sheets mail-merge add-on (Apps Script + PostgreSQL) that reduced manual email scheduling by ',
      { stat: '70%' },
      '. Participated in code reviews across multiple projects.',
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
      ' students in labs for Digital Logic Design, Computer Vision, Calculus, and Object-Oriented Programming.',
    ],
  },
];

export const projects = [
  {
    num: '01',
    badge: 'Final year project',
    name: 'Eunoia',
    descBefore: 'AI mental health platform with a RAG-based chatbot, achieving ',
    highlight: '90% response accuracy',
    descAfter: ' on evaluation sets. Built with Gemini API, Chroma DB, SBERT, React, and Flask.',
    tags: ['RAG', 'Gemini', 'SBERT', 'React'],
    featured: true,
  },
  {
    num: '02',
    name: 'TestCraft AI',
    descBefore:
      'Parses software requirements and auto-generates test cases, reducing manual QA writing by ',
    highlight: '40%',
    descAfter: '. Stack: OpenAI, Flask, Qdrant.',
    tags: ['OpenAI', 'Qdrant', 'Flask'],
  },
  {
    num: '03',
    name: 'Study Sage',
    descBefore:
      'PDF chat, summaries, and flashcards with context-aware Q&A, cutting study time by ',
    highlight: '35%',
    descAfter: '. Built with LangChain, FAISS, and Gemini.',
    tags: ['LangChain', 'FAISS', 'Gemini'],
  },
  {
    num: '04',
    badge: 'Production',
    name: 'TMS Platform',
    descBefore:
      'AI-powered QA automation at PureLogics: requirement analysis and test generation, reducing QA effort by ',
    highlight: '60%',
    descAfter: '. LangChain, Django, and agentic workflows.',
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
