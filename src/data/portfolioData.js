export const hero = {
  role: 'AI Engineer',
  name: 'Manahil',
  nameLast: 'Iqbal',
  tagline:
    'I build RAG pipelines and agentic workflows',
  bio:
    'I’m an AI engineer at PureLogics in Lahore, and I like shipping systems that work and that people actually enjoy using.',
  resumeUrl: '/Manahil_Iqbal_Resume.pdf',
  highlights: [
    { label: 'Education', value: 'BS CS · PUCIT · 3.96 CGPA' },
    { label: 'Focus', value: 'RAG & agentic AI' },
    { label: 'Availability', value: 'Open to opportunities' },
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
    'I build AI systems that ship: retrieval pipelines, agent workflows, and the backends that keep them running. I care about making complex tools feel simple for the people using them.',
    'At PureLogics I’ve worked across the RAG stack — from the retrieval pipeline behind ElixirIQ to making LegalBreeze, a client chatbot built for real users, more reliable. Before that I interned at IREG-IT, TA’d 300+ students at PUCIT, and built projects where usability mattered as much as the metrics.'
  ],
  focus: [
    'RAG & vector search',
    'Agentic LLM workflows',
    'Python backends (Django, Flask, Fast API)',
    'LLM features that feel human-friendly',
  ],
};

export const navSections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'certifications', label: 'Certifications' },
  // { id: 'life', label: 'Life' },
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
    subtitle: 'Degree.',
  },
  certifications: {
    subtitle: 'Courses and credentials.',
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
    label: 'Languages',
    skills: ['Python', 'JavaScript', 'C++', 'Java', 'SQL'],
  },
  {
    label: 'Backend & frameworks',
    skills: ['Django', 'FastAPI', 'Flask', 'Node.js', 'React', 'Tailwind CSS', 'MongoDB', 'PostgreSQL', 'SQLite', 'Oracle'],
  },
  {
    label: 'AI / ML',
    skills: [
      'LangChain',
      'OpenAI API',
      'Gemini API',
      'Hugging Face',
      'TensorFlow',
      'Scikit-learn',
      'NumPy',
      'Pandas',
      'Matplotlib',
    ],
  },
  {
    label: 'Vector DBs & RAG',
    skills: ['Chroma DB', 'Qdrant', 'FAISS', 'SBERT'],
  },
  {
    label: 'Automation',
    skills: ['Playwright', 'n8n', 'Make.com'],
  },
  {
    label: 'Developer tools',
    skills: ['Git', 'GitHub', 'Jira', 'Bitbucket', 'Postman', 'Jupyter Notebook'],
  },
];

export const experience = [
  {
    org: 'PureLogics',
    period: 'Mar 2025 – Present',
    location: 'Lahore, Pakistan',
    roles: [
      {
        title: 'AI Engineer',
        period: 'June 2026 – Present',
        points: [
          [
            'Engineered an end-to-end RAG pipeline for ElixirIQ that uses ChromaDB to map Software Requirements Specifications (SRS) against repository code, enabling automated coverage analysis and context-aware test case generation.',
          ],
          [
            'Improved the reliability of LegalBreeze, a legal-domain RAG chatbot built for real users, by addressing statute retrieval, jurisdiction validation, hallucination detection, claim verification, and structured response generation.',
          ],
        ],
        stack: ['RAG', 'ChromaDB'],
      },
      {
        title: 'Associate AI Engineer',
        period: 'Jul 2025 – Jun 2026',
        points: [
          [
            'Led backend and AI development of ElixirIQ, an AI-powered QA platform integrating Jira, Bitbucket, GitHub, and payment gateways, cutting manual QA effort by ',
            { stat: '60%' },
            '.',
          ],
          ['Worked on the superadmin flow end to end and the Stripe integration.'],
          [
            'Developed AI-driven testing for automated test case generation and execution, using LLMs and browser automation.',
          ],
        ],
        stack: ['LLMs', 'Browser automation', 'Stripe', 'Jira', 'Bitbucket', 'GitHub'],
      },
      {
        title: 'AI Engineer Intern',
        period: 'Mar 2025 – Jun 2025',
        points: [
          [
            'Developed RAG pipelines and optimized LLM prompts using the OpenAI API, Flask, and Qdrant, improving response relevance and accuracy across AI-powered applications.',
          ],
        ],
        stack: ['OpenAI API', 'Flask', 'Qdrant'],
      },
    ],
  },
  {
    org: 'IREG-IT',
    location: 'Lahore, Pakistan',
    roles: [
      {
        title: 'Software Engineer Intern',
        period: 'Jul 2024 – Aug 2024',
        points: [
          [
            'Co-developed Mail Merge, a Google Sheets add-on using Google Apps Script and PostgreSQL, reducing manual email scheduling effort by over ',
            { stat: '70%' },
            '.',
          ],
        ],
        stack: ['Google Apps Script', 'PostgreSQL'],
      },
    ],
  },
  {
    org: 'PUCIT',
    location: 'Lahore, Pakistan',
    roles: [
      {
        title: 'Teaching Assistant',
        period: 'Sep 2023 – Jun 2025',
        points: [
          [
            'Mentored ',
            { stat: '300+' },
            ' students across Computer Vision, OOP, Digital Logic Design, and Calculus lab courses.',
          ],
        ],
      },
    ],
  },
];

export const projects = [
  {
    num: '01',
    badge: 'Production',
    name: 'ElixirIQ',
    subtitle: 'AI-powered QA platform at PureLogics',
    body: 'Integrates Jira, Bitbucket, GitHub, and payment gateways, with AI-driven test case generation and execution using LLMs and browser automation. My work covers the automated QA flow end to end and integrations.',
    impact: '60% less manual QA effort',
    tags: ['LangChain', 'Django', 'Stripe', 'Agentic'],
    links: {
      live: 'https://elixiriq.co',
    },
  },
  {
    num: '02',
    badge: 'Client project',
    name: 'LegalBreeze',
    subtitle: 'Legal-domain RAG chatbot built for real users',
    body: 'Improved retrieval reliability for a legal-domain RAG chatbot built for a client and real users — addressing statute retrieval, jurisdiction validation, hallucination detection, claim verification, and structured response generation.',
    impact: 'Improved retrieval reliability in production',
    tags: ['RAG', 'LLM', 'Legal AI'],
    links: {
      live: 'https://legalbreeze.com',
    },
  },
  {
    num: '03',
    badge: 'Final year project',
    name: 'Eunoia',
    subtitle: 'AI-driven mental health platform with a RAG-based chatbot',
    body: 'Co-developed with Gemini API, Chroma DB, and SBERT for retrieval-augmented generation. Contributed to full-stack development in React and Flask.',
    impact: '90% response accuracy',
    tags: ['RAG', 'Gemini', 'Chroma DB', 'SBERT', 'React', 'Flask'],
    links: {
      github: 'https://github.com/eunoia-mazz/eunoia-app',
    },
  },
  {
    num: '04',
    name: 'TestCraft AI',
    subtitle: 'Calculates requirement coverage from codebase',
    body: 'Analyzes a codebase and matches it against requirements using vector search, surfacing coverage gaps automatically. Built with OpenAI embeddings, Qdrant for vector search, and a Flask backend.',
    impact: '40% reduction in manual QA writing',
    tags: ['OpenAI', 'Qdrant', 'Flask'],
    links: {
      github: 'https://github.com/manahiliqbal/Automated-test-case-generator',
      demo: 'https://www.loom.com/share/2f409db63e2b4eb28a9bed7ba9a6921e',
    },
  },
  {
    num: '05',
    name: 'Study Sage',
    subtitle: 'Intelligent study companion for Q&A, summaries, and flashcards',
    body: 'Supports context-aware Q&A, PDF summarization, and flashcard generation using LangChain, Gemini API, FAISS, and Flask.',
    impact: '35% less study time',
    tags: ['LangChain', 'Gemini', 'FAISS', 'Flask'],
    links: {
      github: 'https://github.com/manahiliqbal/study-sage',
      demo: 'https://www.loom.com/share/9b8798caea4845b09f2fa57c3f86d9e1',
    },
  },
];

export const education = {
  school: 'Punjab University College of Information Technology (PUCIT)',
  degree: 'Bachelor of Science in Computer Science',
  period: 'December 2021 – June 2025',
  gpa: '3.96 / 4.0',
};

export const certifications = [
  { course: 'Introduction to Model Context Protocol', provider: 'Anthropic', url: 'https://verify.skilljar.com/c/x8njyw7j3wzp' },
  { course: 'Introduction to Agent Skills', provider: 'Anthropic', url: 'https://verify.skilljar.com/c/a7hv9xm4ytn8' },
  { course: 'Claude Code in Action', provider: 'Anthropic', url: 'https://verify.skilljar.com/c/3vmqhd3zuq94' },
  { course: 'Building with the Claude API', provider: 'Anthropic', url: 'https://verify.skilljar.com/c/8h43bphct6rv' },
  { course: 'LangChain for LLM Application Development', provider: 'DeepLearning.AI', url: 'https://www.deeplearning.ai/accomplishments/f0994e5a-a6fb-481b-b032-faaffde8d6da' },
  { course: 'Multimodal RAG using Vertex AI', provider: 'Google Cloud', url: 'https://www.coursera.org/account/accomplishments/verify/MVJON0Y6TOPY' },
  { course: 'Building AI Agents with Google ADK', provider: 'DataCamp', url: 'https://www.datacamp.com/statement-of-accomplishment/course/15f72a58f1e16fd55985c396408a6e53ac8657b0?raw=1' },
  { course: 'Advanced RAG Applications with Vector Databases', provider: 'LinkedIn Learning', url: 'https://www.linkedin.com/learning/certificates/078b97a9d9f358df065bed8e18790f76f05c5bb867778c29803a469a1418292c' },
  { course: 'Supervised Machine Learning', provider: 'DeepLearning.AI', url: 'https://www.coursera.org/account/accomplishments/verify/QL2GXNHA2F3F' },
  { course: 'AI Agents using RAG and LangChain', provider: 'IBM', url: 'https://www.coursera.org/account/accomplishments/verify/OI6T2DM3MYKV' },
];

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
