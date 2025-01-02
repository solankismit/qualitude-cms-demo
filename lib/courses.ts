export interface Course {
  id: string;
  title: string;
  description: string;
  duration: string;
  schedule: string;
  skills: string[];
  curriculum: {
    week: number;
    title: string;
    topics: string[];
  }[];
  careers: {
    title: string;
    description: string;
  }[];
  heroImage?: string;
}

export const courses: Course[] = [
  {
    id: "web-development",
    title: "Web Development Internship",
    description: "Master modern web development with React, Next.js, and Node.js",
    duration: "12 weeks",
    schedule: "Monday to Friday, 4 hours per day",
    skills: [
      "React.js",
      "Next.js",
      "Node.js",
      "TypeScript",
      "Tailwind CSS",
      "REST APIs",
      "Database Design",
    ],
    curriculum: [
      {
        week: 1,
        title: "Web Fundamentals",
        topics: ["HTML5", "CSS3", "JavaScript ES6+", "Git Basics"],
      },
      {
        week: 2,
        title: "React Fundamentals",
        topics: ["Components", "Props", "State", "Hooks", "Context"],
      },
      {
        week: 3,
        title: "Advanced React",
        topics: ["Performance Optimization", "Error Boundaries", "Render Props", "Higher-Order Components"],
      },
      {
        week: 4,
        title: "Next.js Essentials",
        topics: ["Server-Side Rendering", "Static Site Generation", "API Routes", "Dynamic Routing"],
      },
      {
        week: 5,
        title: "State Management",
        topics: ["Redux", "Redux Toolkit", "Zustand", "Recoil"],
      },
      {
        week: 6,
        title: "Node.js and Express",
        topics: ["HTTP Basics", "RESTful API Design", "Middleware", "Error Handling"],
      },
      {
        week: 7,
        title: "Database Integration",
        topics: ["SQL vs NoSQL", "MongoDB", "Prisma ORM", "Data Modeling"],
      },
      {
        week: 8,
        title: "Authentication and Authorization",
        topics: ["JWT", "OAuth", "Passport.js", "Role-Based Access Control"],
      },
      {
        week: 9,
        title: "Testing and Deployment",
        topics: ["Unit Testing", "Integration Testing", "CI/CD", "Docker Basics"],
      },
      {
        week: 10,
        title: "Advanced Frontend Concepts",
        topics: ["Web Accessibility", "Internationalization", "Progressive Web Apps", "Web Performance"],
      },
      {
        week: 11,
        title: "Real-time Applications",
        topics: ["WebSockets", "Socket.io", "Real-time Databases", "Push Notifications"],
      },
      {
        week: 12,
        title: "Final Project",
        topics: ["Project Planning", "Agile Development", "Code Review", "Presentation Skills"],
      },
    ],
    careers: [
      {
        title: "Frontend Developer",
        description: "Build user interfaces for web applications",
      },
      {
        title: "Full Stack Developer",
        description: "Develop both client and server-side applications",
      },
    ],
    heroImage: "/courses/web-dev-hero.jpg",
  },
  {
    id: "mobile-development",
    title: "Mobile App Development Internship",
    description: "Master mobile app development with React Native and Flutter",
    duration: "12 weeks",
    schedule: "Monday to Friday, 4 hours per day",
    skills: [
      "React Native",
      "Flutter",
      "TypeScript",
      "Dart",
      "REST APIs",
      "Firebase",
      "Mobile UI/UX Design",
    ],
    curriculum: [
      {
        week: 1,
        title: "Mobile Development Fundamentals",
        topics: ["React Native Basics", "Flutter Basics", "JavaScript ES6+", "Dart Basics"],
      },
      {
        week: 2,
        title: "React Native Advanced",
        topics: ["Components", "State Management", "Navigation", "APIs"],
      },
      {
        week: 3,
        title: "Flutter Advanced",
        topics: ["Widgets", "State Management", "Navigation", "Animations"],
      },
      {
        week: 4,
        title: "Mobile UI/UX Design",
        topics: ["Mobile Design Principles", "Prototyping", "User Testing", "Accessibility"],
      },
      {
        week: 5,
        title: "State Management in Mobile Apps",
        topics: ["Redux for React Native", "Provider for Flutter", "MobX", "Local Storage"],
      },
      {
        week: 6,
        title: "Native Device Features",
        topics: ["Camera Integration", "Geolocation", "Push Notifications", "Biometric Authentication"],
      },
      {
        week: 7,
        title: "Backend Integration",
        topics: ["RESTful APIs", "GraphQL", "WebSockets", "Firebase"],
      },
      {
        week: 8,
        title: "Offline Support and Data Sync",
        topics: ["Local Database", "Caching Strategies", "Background Sync", "Conflict Resolution"],
      },
      {
        week: 9,
        title: "Testing and Debugging",
        topics: ["Unit Testing", "Integration Testing", "Debugging Tools", "Performance Profiling"],
      },
      {
        week: 10,
        title: "App Store Deployment",
        topics: ["iOS App Store", "Google Play Store", "App Signing", "Beta Testing"],
      },
      {
        week: 11,
        title: "Cross-Platform Development",
        topics: ["Code Sharing Strategies", "Platform-Specific Code", "Native Modules", "Performance Optimization"],
      },
      {
        week: 12,
        title: "Final Project",
        topics: ["Project Planning", "Agile Development", "Code Review", "Presentation Skills"],
      },
    ],
    careers: [
      {
        title: "Mobile App Developer",
        description: "Develop mobile applications for iOS and Android",
      },
      {
        title: "Cross-Platform Developer",
        description: "Build applications that run on multiple platforms",
      },
    ],
    heroImage: "/courses/mobile-dev-hero.jpg",
  },
];

