import type { Course as CourseTinaType } from "@/tina/__generated__/types";

export interface Course {
  id: string;
  title: string;
  description: string;
  duration: string;
  schedule: string;
  category: string;
  skills: string[];
  curriculum: {
    title: string;
    topics: string[];
  }[];
  careers: {
    title: string;
    description: string;
  }[];
  highlights: {
    title: string;
    description: string;
    icon: "Target" | "Users" | "Zap" | "Award";
  }[];
  heroImage?: string;
  registrationLink?: string;
}

export function transformTinaCourse(tinaCourse: CourseTinaType): Course {
  if (!tinaCourse) {
    throw new Error("Course data is required");
  }

  return {
    id: tinaCourse._sys.filename || "",
    category: tinaCourse.category || "",
    title: tinaCourse.title || "",
    description: tinaCourse.description || "",
    duration: tinaCourse.duration || "",
    schedule: tinaCourse.schedule || "",
    heroImage: tinaCourse.heroImage || undefined,
    skills: tinaCourse.skills?.map((s) => s || "") || [],
    curriculum:
      tinaCourse.curriculum?.map((c) => ({
        title: c?.title || "",
        topics: c?.topics?.map((s) => s || "") || [],
      })) || [],
    careers:
      tinaCourse.careers?.map((c) => ({
        title: c?.title || "",
        description: c?.description || "",
      })) || [],
    highlights:
      tinaCourse.highlights?.map((h) => ({
        title: h?.title || "",
        description: h?.description || "",
        icon: (h?.icon as "Target" | "Users" | "Zap" | "Award") || "Target",
      })) || [],
    registrationLink: tinaCourse.registrationLink || undefined,
  };
}

export const courses = [
  {
    id: "1",
    title: "Course 1",
    description: "Course 1 description",
    category: "Category 1",
    image: "https://via.placeholder.com/150",
    tags: ["Tag 1", "Tag 2", "Tag 3"],
    duration: "1 hour",
    schedule: "Monday to Friday",
    skills: ["Skill 1", "Skill 2", "Skill 3"],
    curriculum: [],
  },
];
