import {
  PersonalInfo,
  NavLink,
  SkillCategory,
  Experience,
  Project,
  Certification,
  HeroSubtitle,
  AboutParagraph,
} from '@/types';

// ============================================
// PERSONAL INFORMATION
// ============================================
export const personalInfo: PersonalInfo = {
  name: 'Ishan KC',
  title: 'Full-Stack Developer',
  subtitle: 'Computer Science Student at Kathmandu University',
  email: 'ishankc777@gmail.com',
  phone: '+977-9860039457',
  location: 'Banepa, Nepal',
  linkedin: 'https://www.linkedin.com/in/ishan-kc-bb3380285/',
  github: 'https://github.com/ishannkc',
  tagline: 'Building scalable web applications and AI-powered solutions',
  resumeUrl: '/resume.pdf',
  profileImage: '/images/profile.jpg',
};

// ============================================
// NAVIGATION LINKS
// ============================================
export const navLinks: NavLink[] = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Contact', href: '#contact' },
];

// ============================================
// HERO SECTION SUBTITLES (Rotating)
// ============================================
export const heroSubtitles: HeroSubtitle[] = [
  { text: 'Full-Stack Developer' },
];

// ============================================
// ABOUT SECTION PARAGRAPHS
// ============================================
export const aboutParagraphs: AboutParagraph[] = [
  {
    text: "Hey there! I'm Ishan, a 3rd-year Computer Science student at Kathmandu University, set to graduate in November 2027. What started as curiosity about how websites work has evolved into a genuine passion for building things that make a difference. When I'm not attending lectures, you'll find me deep in code, turning ideas into functional applications that solve real problems.",
  },
  {
    text: "I specialize in the MERN stack and modern web technologies, but what really excites me is the intersection of AI and web development. From building Intervia—an AI-powered interview platform with voice interactions—to engineering a biometric authentication system that won at KU HackFest 2025, I love tackling challenges that push the boundaries of what's possible. I've also gained practical experience through professional simulations with AWS and Deloitte, giving me exposure to enterprise-level thinking and cloud architectures.",
  },
  {
    text: "I believe in learning by doing. Every project teaches me something new, every bug makes me a better debugger, and every deployment brings its own set of lessons. Whether it's optimizing database queries to reduce response times by 35% or implementing real-time WebSocket communication for instant user verification, I'm always looking for ways to make things faster, more secure, and more user-friendly. If you're looking for someone who's passionate about code, eager to learn, and ready to contribute—let's connect!",
  },
];

// ============================================
// SKILLS SECTION
// ============================================
export const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend Development',
    description: 'Building beautiful, responsive user interfaces',
    skills: [
      { name: 'React.js', icon: 'SiReact', proficiency: 90 },
      { name: 'Next.js', icon: 'SiNextdotjs', proficiency: 85 },
      { name: 'React Native', icon: 'SiReact', proficiency: 75 },
      { name: 'TypeScript', icon: 'SiTypescript', proficiency: 85 },
      { name: 'JavaScript', icon: 'SiJavascript', proficiency: 90 },
      { name: 'Tailwind CSS', icon: 'SiTailwindcss', proficiency: 90 },
      { name: 'HTML5', icon: 'SiHtml5', proficiency: 95 },
      { name: 'CSS3', icon: 'SiCss3', proficiency: 90 },
    ],
  },
  {
    title: 'Backend Development',
    description: 'Creating robust, scalable server-side solutions',
    skills: [
      { name: 'Node.js', icon: 'SiNodedotjs', proficiency: 88 },
      { name: 'Express.js', icon: 'SiExpress', proficiency: 85 },
      { name: 'Python', icon: 'SiPython', proficiency: 80 },
      { name: 'FastAPI', icon: 'SiFastapi', proficiency: 75 },
      { name: 'Flask', icon: 'SiFlask', proficiency: 70 },
      { name: 'MySQL', icon: 'SiMysql', proficiency: 80 },
      { name: 'MongoDB', icon: 'SiMongodb', proficiency: 85 },
      { name: 'WebSocket', icon: 'SiSocketdotio', proficiency: 75 },
      { name: 'REST APIs', icon: 'SiPostman', proficiency: 90 },
    ],
  },
  {
    title: 'Cloud & DevOps',
    description: 'Deploying and managing cloud infrastructure',
    skills: [
      { name: 'Firebase', icon: 'SiFirebase', proficiency: 85 },
      { name: 'Git', icon: 'SiGit', proficiency: 90 },
      { name: 'GitHub Actions', icon: 'SiGithubactions', proficiency: 70 },
    ],
  },
  {
    title: 'Additional Skills',
    description: 'Other expertise and specializations',
    skills: [
      { name: 'Payment Integration', icon: 'SiStripe', proficiency: 75 },
      { name: 'Database Design', icon: 'SiPostgresql', proficiency: 80 },
      { name: 'Cross-Platform Dev', icon: 'SiFlutter', proficiency: 70 },
      { name: 'RESTful API Design', icon: 'SiSwagger', proficiency: 85 },
      { name: 'Real-time Systems', icon: 'SiSocketdotio', proficiency: 80 },
    ],
  },
];

// ============================================
// EXPERIENCE SECTION
// ============================================
export const experiences: Experience[] = [
  {
    id: 'exp-1',
    position: 'Full-Stack Developer – PPG Auth (Biometric Authentication System)',
    organization: 'KU HackFest 2025, Kathmandu University',
    date: 'December 2025',
    location: 'Kathmandu, Nepal',
    achievements: [
      'Engineered secure biometric authentication system with FastAPI backend and optimized RESTful API endpoints reducing authentication time by 40%',
      'Implemented real-time user verification using WebSocket communication between Python backend and React Native mobile application',
      'Designed scalable API architecture supporting 1000+ concurrent users with ML integration for biometric data processing',
      'Built cross-platform mobile application using React Native and TypeScript for seamless iOS and Android experience',
      'Learned the importance of teamwork and timely submissions while working under tight 48-hour hackathon deadlines',
    ],
    technologies: [
      'FastAPI',
      'React Native',
      'WebSocket',
      'TypeScript',
      'Python',
      'Machine Learning',
      'Real-time Systems',
    ],
    logo: '/images/ku-logo.png',
  },
];

// ============================================
// PROJECTS SECTION
// ============================================
export const projects: Project[] = [
  {
    id: 'proj-1',
    title: 'Intervia – AI Interview Platform',
    date: 'August 2025',
    status: 'Live',
    description:
      'AI-powered interview platform revolutionizing interview preparation with intelligent voice interactions and comprehensive performance analytics.',
    features: [
      'Developed AI-powered interview platform with Next.js integrating Google Gemini API and Vapi.ai RESTful APIs for voice interaction features',
      'Built comprehensive analytics dashboard using React.js and Tailwind CSS tracking 15+ performance metrics across user sessions',
      'Engineered secure user authentication and real-time data storage using Firebase with role-based access control',
      'Implemented advanced prompt engineering delivering personalized feedback with 95% accuracy',
    ],
    techStack: [
      'MERN Stack',
      'Next.js',
      'TypeScript',
      'Firebase',
      'Google Gemini API',
      'Vapi.ai',
      'REST APIs',
      'Tailwind CSS',
      'React.js',
    ],
    liveUrl: 'https://intervia-xi.vercel.app/',
    codeUrl: 'https://github.com/ishannkc/Intervia',
    image: '/images/intervia-pp.png',
  },
  {
    id: 'proj-2',
    title: 'Classroom Resource Tracker',
    date: 'July 2025',
    status: 'Completed',
    description:
      'Full-stack resource management system streamlining classroom and resource booking for educational institutions with real-time conflict prevention.',
    features: [
      'Built full-stack resource management system processing 200+ weekly bookings with MySQL relational database and real-time conflict prevention',
      'Developed RESTful API with Node.js and Express.js handling CRUD operations with role-based access control for 3 user tiers',
      'Created responsive booking interface with instant availability updates and optimized database queries through efficient indexing',
      'Designed normalized table schema and implemented efficient SQL queries reducing response time by 35%',
    ],
    techStack: [
      'Node.js',
      'Express.js',
      'MySQL',
      'JavaScript',
      'HTML',
      'CSS',
      'REST APIs',
    ],
    liveUrl: 'https://classrestrack.netlify.app/',
    codeUrl: 'https://github.com/ishannkc/Classroom-Resource-Tracker',
    image: '/images/csr-pp.png',
  },
  {
    id: 'proj-3',
    title: 'PPG Auth – Biometric Authentication System',
    date: 'December 2025',
    status: 'Completed',
    description:
      'Secure biometric authentication system built during KU HackFest 2025 with real-time user verification and ML-powered data processing.',
    features: [
      'Engineered secure biometric authentication with FastAPI reducing authentication time by 40%',
      'Implemented real-time WebSocket communication for instant user verification',
      'Designed scalable API architecture supporting 1000+ concurrent users',
      'Built cross-platform mobile app with React Native for iOS and Android',
    ],
    techStack: [
      'FastAPI',
      'React Native',
      'Python',
      'WebSocket',
      'TypeScript',
      'Machine Learning',
    ],
    liveUrl: '',
    codeUrl: 'https://github.com/ishannkc/PPGAuth',
    image: '/images/ppg-auth-pp.png',
  },
];

// ============================================
// CERTIFICATIONS SECTION
// ============================================
export const certifications: Certification[] = [
  {
    id: 'cert-1',
    title: 'AWS Solutions Architecture Job Simulation',
    issuer: 'Amazon Web Services',
    date: '2024',
    icon: 'aws',
    credentialUrl: '#',
  },
  {
    id: 'cert-2',
    title: 'Deloitte Australia Cyber Job Simulation',
    issuer: 'Deloitte',
    date: '2024',
    icon: 'deloitte',
    credentialUrl: '#',
  },
  {
    id: 'cert-3',
    title: 'KU HackFest 2025 Participant',
    issuer: 'Kathmandu University',
    date: 'December 2025',
    icon: 'certificate',
    credentialUrl: '#',
  },
];

// ============================================
// EMAILJS CONFIGURATION
// Replace these with your actual EmailJS credentials
// ============================================
export const emailjsConfig = {
  serviceId: 'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
  templateId: 'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
  publicKey: 'YOUR_PUBLIC_KEY', // Replace with your EmailJS public key
};
