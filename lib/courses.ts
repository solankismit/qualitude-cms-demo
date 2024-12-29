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
      // Add more weeks...
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
      // Add more weeks...
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
    },
    // Add more courses...
];