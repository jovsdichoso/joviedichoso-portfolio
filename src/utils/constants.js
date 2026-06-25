export const PERSONAL_INFO = {
  name: "Jovie Dichoso",
  role: "Web & Mobile Developer",
  bio: "Results-driven Information Technology graduate specializing in web and mobile application development. Passionate about building scalable and user-friendly digital solutions using React Native, Firebase, and JavaScript.",
  email: "joviedichoso@yahoo.com | joviedichoso.jd@gmail.com",
  phone: "+63 966 897 0989",
  location: "Philippines",
  linkedin: "https://linkedin.com/in/joviedichoso",
  github: "https://github.com/jovsdichoso",
  resume: "/resume.pdf"
};

export const SKILLS = {
  frontend: [
    { name: "React Native", icon: "Smartphone" },
    { name: "React", icon: "Code" },
    { name: "JavaScript", icon: "Code" },
    { name: "HTML5", icon: "Code" },
    { name: "CSS3", icon: "Palette" },
    { name: "Tailwind CSS", icon: "Palette" },
    { name: "TWRNC", icon: "Palette" },
    { name: "Bootstrap", icon: "Palette" }
  ],
  backend: [
    { name: "Firebase", icon: "Database" },
    { name: "PHP", icon: "Server" },
    { name: "CodeIgniter 4", icon: "Server" },
    { name: "MySQL", icon: "Database" },
    { name: "Cloudinary", icon: "Cloud" }
  ],
  uiux: [
    { name: "Figma", icon: "Figma" },
    { name: "Canva", icon: "Palette" }
  ],
  tools: [
    { name: "Git & GitHub", icon: "GitBranch" },
    { name: "VS Code", icon: "Code" },
    { name: "Expo", icon: "Smartphone" }
  ]
};

export const FEATURED_PROJECT = {
  title: "HakbangQuest",
  description: "Award-winning gamified fitness tracking application built with React Native and Firebase. Features real-time GPS tracking, route recording, achievement system, and gamified XP progression to motivate users to stay active.",
  image: "/projects/hakbangquest.png",
  github: "https://github.com/joviedichoso/hakbangquest",
  liveUrl: "https://hakbang-quest-web.vercel.app/",
  tech: ["React Native", "Expo", "Firebase", "Tailwind CSS", "Google Maps API"],
  features: [
    "Real-time GPS tracking with route visualization",
    "Gamified XP and achievement system",
    "Activity monitoring and statistics",
    "Firebase Authentication & Firestore",
    "Cross-platform mobile application"
  ],
  badge: "Best Capstone Project Award"
};

export const PROJECTS = [
  {
    id: 1,
    title: "HakbangQuest",
    description: "Gamified fitness tracking app with GPS, achievements, and XP system.",
    image: "/projects/hakbangquest.png",
    tech: ["React Native", "Expo", "Firebase"],
    github: "https://github.com/jovsdichoso/HakbangQuest",
    liveUrl: "https://hakbang-quest-web.vercel.app/"
  },
  {
    id: 2,
    title: "FarmToMarket",
    description: "E-commerce platform connecting farmers directly to consumers with secure transactions.",
    image: "/projects/farmtomarket.png",
    tech: ["React", "Vite", "JavaScript"],
    github: "#"
  },
  {
    id: 3,
    title: "Quaestio",
    description: "Real-time polling application with live voting and instant synchronization.",
    image: "/projects/quaestio.png",
    tech: ["React Native", "Expo", "Firebase", "Tailwind CSS"],
    github: "https://github.com/joviedichoso/quaestio",
    liveUrl: "https://play.google.com/store/apps/details?id=com.quaestio.app.a1b2c3d4"
  },
  {
    id: 4,
    title: "Growth Journal",
    description: "Personal growth tracking app for habits and daily reflections.",
    image: "/projects/growthjournal.png",
    tech: ["React Native", "Expo", "Firebase"],
    github: "https://github.com/jovsdichoso/GrowthJournal"
  }
];

export const EXPERIENCE = [
  {
    id: 1,
    role: "PI-CAD Technical Intern",
    company: "Sorsogon City Police Station",
    period: "August 2025 – January 2026",
    link: "https://ojtblog-joviedichoso.vercel.app/",
    responsibilities: [
      "Technical Support",
      "Graphic Design",
      "Seminar Technical Setup",
      "Hardware Troubleshooting",
      "Records Digitization"
    ]
  }
];

export const EDUCATION = [
  {
    id: 1,
    degree: "Bachelor of Science in Information Technology",
    school: "The Lewis College",
    type: "College"
  },
  {
    id: 2,
    degree: "Senior High School – STEM Strand",
    school: "Arellano University – Juan Sumulong Campus",
    type: "Senior High School"
  }
];

export const ACHIEVEMENTS = [
  {
    id: 1,
    title: "Best Capstone Project",
    description: "HakbangQuest",
    year: "2026",
    icon: "Trophy"
  },
  {
    id: 2,
    title: "Imelda Nicolas Academic Distinction Award",
    year: "2026",
    icon: "Award"
  },
  {
    id: 3,
    title: "BITSCON Participant",
    year: "2023",
    icon: "Award"
  }
];
