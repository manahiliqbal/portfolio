export const hero = {
  eyebrow: 'hello, world :)',
  name: 'Manahil',
  nameAccent: 'Iqbal.',
  contacts: [
    { icon: 'mail', label: 'manahiliqbal0511@gmail.com', href: 'mailto:manahiliqbal0511@gmail.com' },
    {
      icon: 'linkedin',
      label: 'manahil-iqbal',
      href: 'https://www.linkedin.com/in/manahil-iqbal',
    },
    { icon: 'github', label: 'manahiliqbal', href: 'https://github.com/manahiliqbal' },
    { icon: 'map', label: 'Lahore, PK' },
  ],
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
    label: 'backend',
    variant: 'blue',
    skills: ['Python', 'Django', 'Flask', 'REST APIs', 'PostgreSQL', 'MongoDB'],
  },
  {
    label: 'frontend & tools',
    variant: 'green',
    skills: ['React', 'Tailwind CSS'],
    extra: { variant: 'amber', skills: ['Git', 'Postman', 'Jupyter'] },
  },
];

export const experience = [
  {
    title: 'AI Engineer — PureLogics',
    company: 'Mar 2025 – Present · Lahore',
    description: [
      'Lead dev of an AI-powered QA automation platform (TMS) — LLM-based test case generation cutting manual QA effort by ',
      { stat: '60%' },
      '. Built RAG pipelines and agentic workflows with LangChain, OpenAI, Chroma DB & Django. Designed RESTful APIs connecting AI modules to frontend.',
    ],
  },
  {
    title: 'Software Engineer Intern — IREG-IT',
    company: 'Jul 2024 – Aug 2024 · Lahore',
    description: [
      'Built a Google Sheets Mail Merge add-on (Apps Script + PostgreSQL) that reduced manual email scheduling by ',
      { stat: '70%' },
      '. Conducted code reviews across 3+ projects.',
    ],
  },
  {
    title: 'Teaching Assistant — PUCIT',
    company: 'Sep 2023 – Jun 2025 · Lahore',
    description: [
      'Mentored ',
      { stat: '300+' },
      ' students across DLD, Computer Vision, Calculus, and OOP labs.',
    ],
  },
];

export const projects = [
  {
    num: '01 — FYP',
    name: 'Eunoia',
    descBefore: 'AI mental health platform with RAG chatbot — ',
    highlight: '90% response accuracy',
    descAfter: '. Gemini API, Chroma DB, SBERT, React & Flask.',
    tags: ['RAG', 'Gemini', 'SBERT', 'React'],
    starred: true,
  },
  {
    num: '02',
    name: 'TestCraft AI',
    descBefore:
      'Analyzes software requirements and auto-generates test cases. Reduced manual QA writing by ',
    highlight: '40%',
    descAfter: '. OpenAI, Flask, Qdrant.',
    tags: ['OpenAI', 'Qdrant', 'Flask'],
  },
  {
    num: '03',
    name: 'Study Sage',
    descBefore:
      'Chat with your PDFs, get summaries and flashcards. Context-aware Q&A cuts study time by ',
    highlight: '35%',
    descAfter: '. LangChain, FAISS, Gemini.',
    tags: ['LangChain', 'FAISS', 'Gemini'],
  },
  {
    num: '04 — @ work',
    name: 'TMS Platform',
    descBefore:
      'AI-powered QA automation suite. LLM requirement analysis + test generation. Deployed at PureLogics, cutting QA effort by ',
    highlight: '60%',
    descAfter: '.',
    tags: ['Agentic', 'LangChain', 'Django'],
    starred: true,
  },
];

export const education = {
  school: 'Punjab University College of Information Technology',
  detail: 'BS Computer Science · Dec 2021 – Jun 2025',
  gpa: '3.96 / 4.0',
};

export const certifications = [
  'LangChain for LLM App Development — DeepLearning.AI',
  'Multimodal RAG using Vertex AI — Google Cloud',
  'Building AI Agents with Google ADK — DataCamp',
  'Advanced RAG Applications — LinkedIn Learning',
  'AI Agents using RAG and LangChain — IBM',
];

export const navItems = [
  { id: 'projects', icon: 'folder', label: 'all projects' },
  { id: 'about', icon: 'user', label: 'about me' },
  { id: 'contact', icon: 'mail', label: 'say hello' },
];
