import type { CourseQuery } from "@/tina/__generated__/types";

export interface Course {
  title: string;
  description: string;
  duration: string;
  schedule: string;
  skills: string [];
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
}

export function transformTinaCourse(tinaCourse: CourseQuery['course']): Course {
  if (!tinaCourse) {
    throw new Error('Course data is required');
  }

  return {
    title: tinaCourse.title || '',
    description: tinaCourse.description || '',
    duration: tinaCourse.duration || '',
    schedule: tinaCourse.schedule || '',
    heroImage: tinaCourse.heroImage || undefined,
    skills: tinaCourse.skills?.map((s)=>s||"")||[],
    curriculum: tinaCourse.curriculum?.map((c) => ({
      title: c?.title || '',
      topics: c?.topics?.map((s)=>s||"")||[],
      
    })) || [],
    careers: tinaCourse.careers?.map((c) => ({
      title: c?.title || '',
      description: c?.description || '',
    })) || [],
    highlights: tinaCourse.highlights?.map((h) => ({
      title: h?.title || '',
      description: h?.description || '',
      icon: (h?.icon as "Target" | "Users" | "Zap" | "Award") || 'Target',
    })) || [],
  };
}

