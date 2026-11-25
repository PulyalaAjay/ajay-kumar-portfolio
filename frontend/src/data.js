export const profile = {
  name: 'Ajay Kumar',
  fullName: 'Pulyala Ajay Kumar',
  role: 'Software Developer',
  location: 'Hyderabad, India',
  email: 'ajaytrpx@gmail.com',
  phone: '+91 7032633108',
  github: 'https://github.com/PulyalaAjay',
  linkedin: '', // Add your actual LinkedIn profile URL before publishing.
  summary:
    'B.Tech graduate in Artificial Intelligence and Machine Learning with hands-on project experience in Python, JavaScript, React, REST APIs, databases, machine learning and AI-powered automation. Interested in building practical, reliable software across frontend and backend systems.',
}

export const skills = [
  { group: 'Programming', items: ['Python', 'JavaScript', 'SQL'] },
  { group: 'Frontend', items: ['HTML5', 'CSS3', 'React.js'] },
  { group: 'Backend & APIs', items: ['Django', 'FastAPI', 'Flask', 'REST APIs', 'JSON'] },
  { group: 'Databases', items: ['MySQL', 'SQLite', 'MongoDB', 'DBMS'] },
  { group: 'AI & Machine Learning', items: ['OpenAI API', 'Prompt Engineering', 'Scikit-learn', 'TensorFlow'] },
  { group: 'Tools', items: ['Git', 'GitHub', 'VS Code', 'pytest'] },
]

export const projects = [
  {
    number: '01',
    title: 'AI-Powered Email Response Automation',
    status: 'In development',
    stack: ['Python', 'FastAPI', 'OpenAI API', 'REST APIs', 'JSON', 'SQLite'],
    description:
      'An email automation application designed to classify incoming emails and generate context-aware response suggestions using OpenAI API integration.',
    details: [
      'Designing REST API endpoints with structured JSON request and response handling.',
      'Working on database integration, input validation and exception handling.',
      'Including a human-approval workflow before automated responses are sent.',
    ],
    repo: '',
    demo: '',
  },
  {
    number: '02',
    title: 'Waste Classification System',
    status: 'Project',
    stack: ['Python', 'Scikit-learn', 'TensorFlow', 'Streamlit'],
    description:
      'A machine learning application that classifies waste as organic or recyclable using image data.',
    details: [
      'Implemented SVM and Random Forest models for classification.',
      'Applied SMOTE to address class imbalance during model training.',
      'Built an interactive Streamlit interface and used model caching.',
    ],
    repo: '',
    demo: '',
  },
  {
    number: '03',
    title: 'Real-Time Driver Drowsiness Detection',
    status: 'Project',
    stack: ['Python', 'OpenCV', 'Dlib', 'MediaPipe'],
    description:
      'A computer-vision project that monitors eye activity to identify signs of driver drowsiness.',
    details: [
      'Implemented Eye Aspect Ratio (EAR)-based eye monitoring.',
      'Identifies prolonged eye closure and triggers alerts.',
      'Refined detection thresholds across lighting conditions and head positions.',
    ],
    repo: '',
    demo: '',
  },
]

export const education = {
  degree: 'B.Tech — Artificial Intelligence & Machine Learning',
  college: 'Malla Reddy College of Engineering & Technology, Secunderabad',
  period: '2022 – 2026',
  score: 'CGPA: 8.09/10',
}

export const certifications = [
  'Salesforce Agentblazer Champion Program — Developer Certification',
  'CCNA: Introduction to Networks — Cisco',
  'Generative AI for Everyone — Coursera',
]
