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
  // Add more courses...
];