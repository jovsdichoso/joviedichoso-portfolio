export const PERSONAL_INFO = {
  name: "Jovie Dichoso",
  role: "Web & Mobile Developer",
  bio: "Results-driven Information Technology graduate specializing in web and mobile application development. Passionate about building scalable and user-friendly digital solutions using React Native, Firebase, and JavaScript.",
  email: "joviedichoso@yahoo.com | joviedichoso.jd@gmail.com",
  phone: "+63 966 897 0989",
  location: "Philippines",
  linkedin: "https://linkedin.com/in/joviedichoso",
  github: "https://github.com/jovsdichoso", // Kept your profile link for networking
  resume: "/cv_joviedichoso.pdf"
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
  github: "#", // Hidden source code
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
    github: "#", // Hidden source code
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
    github: "#", // Hidden source code
    liveUrl: "https://play.google.com/store/apps/details?id=com.quaestio.app.a1b2c3d4"
  },
  {
    id: 4,
    title: "Growth Journal",
    description: "Personal growth tracking app for habits and daily reflections.",
    image: "/projects/growthjournal.png",
    tech: ["React Native", "Expo", "Firebase"],
    github: "#" // Hidden source code
  },
  {
    id: 5,
    title: "Growth Journal",
    description: "Personal growth tracking app for habits and daily reflections.",
    image: "/projects/growthjournal.png",
    tech: ["React Native", "Expo", "Firebase"],
    github: "#" // Hidden source code
  },
  {
    id: 6,
    title: "Growth Journal",
    description: "Personal growth tracking app for habits and daily reflections.",
    image: "/projects/growthjournal.png",
    tech: ["React Native", "Expo", "Firebase"],
    github: "#" // Hidden source code
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

export const SERVICES = [
  {
    id: 1,
    title: "Web Development",
    icon: "Globe", 
    description: "Need an awesome website? I build fast, responsive, and good-looking web apps that your users will love. Let's bring your ideas to life on the web!"
  },
  {
    id: 2,
    title: "Mobile App Development",
    icon: "Smartphone",
    description: "Got an app idea? I can help you build smooth, cross-platform mobile apps so your users can take your amazing product anywhere they go."
  },
  {
    id: 3,
    title: "UI/UX Design",
    icon: "Palette",
    description: "Great code needs great design! I create clean, intuitive, and eye-catching interfaces that make using your app a total breeze."
  },
  {
    id: 4,
    title: "Tech Support & Troubleshooting",
    icon: "Wrench",
    description: "Tech acting up? Don't sweat it! I'm here to squash bugs, fix glitches, and keep your hardware and software running super smoothly."
  },
  {
    id: 5,
    title: "Database Design",
    icon: "Database",
    description: "Every great app needs a solid foundation. I design secure and organized databases to keep your data safe, structured, and easy to access."
  }
];

export const ACHIEVEMENTS = [
  {
    id: 1,
    title: "Best Capstone Project Award",
    description: "HakbangQuest",
    issuer: "The Lewis College",
    year: "2026",
    icon: "Trophy",
    image: "/certificates/bestcapstone.jpg",
    file: "/certificates/Bestcapstone.pdf"
  },
  {
    id: 2,
    title: "Imelda Nicolas Academic Distinction Award",
    issuer: "The Lewis College",
    year: "2026",
    icon: "Award",
    image: "/certificates/inada.jpg",
    file: "/certificates/INADA.pdf"
  },
  {
    id: 3,
    title: "Design Thinking and Mobile App Wireframing",
    issuer: "DICT Region V",
    year: "2025",
    icon: "FileText",
    image: "/certificates/dict.jpg",
    file: "/certificates/DICT.pdf"
  },
  {
    id: 4,
    title: "BITSCON Participant",
    issuer: "BITSCON",
    year: "2024",
    icon: "FileText",
    image: "/certificates/bitscon.jpg",
    file: "/certificates/bitscon.pdf"
  }
];