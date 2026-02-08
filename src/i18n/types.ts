export type Locale = "pt-BR" | "en";

export interface Translations {
  home: {
    heroLine1: string;
    heroLine2: string;
    subtitle: string;
    viewProjects: string;
    getInTouch: string;
  };
  about: {
    headingPrefix: string;
    headingHighlight: string;
    bioParagraphs: string[];
  };
  experience: {
    headingPrefix: string;
    headingHighlight: string;
    subtitle: string;
    professionalTitle: string;
    educationTitle: string;
    certificationsTitle: string;
    jobs: Array<{
      role: string;
      company: string;
      period: string;
      location: string;
      description: string;
      highlights: string[];
      skills: string[];
    }>;
    education: {
      degree: string;
      university: string;
      location: string;
      period: string;
    };
    certifications: Array<{
      title: string;
      institution: string;
      date: string;
      tags?: string[];
    }>;
  };
  projects: {
    heroLine1: string;
    heroLine2: string;
    heroHighlight: string;
    heroDescription: string;
    heroSubDescription: string;
    techHeadingPrefix: string;
    techHeadingHighlight: string;
    techSubtitle: string;
    statProjects: string;
    statTech: string;
    statYears: string;
    cards: Array<{
      title: string;
      description: string;
      category: string;
      stack: string[];
    }>;
  };
  meta: {
    title: string;
    description: string;
  };
}
