import { TableRow } from "@sanity/table";
import { PortableTextBlock } from "sanity";

export interface Table {
  rows?: TableRow[];
  title?: string;
}

export interface TableValueProps {
  table?: Table;
  caption?: string;
}

export interface QuizValueProps {
  _key: string;
  question: string;
  answer: string;
}

export type ProfileType = {
  _id: string;
  fullName: string;
  headline: string;
  profileImage: {
    image: string;
    lqip: string;
    alt: string;
  };
  shortBio: string;
  email: string;
  fullBio: PortableTextBlock[];
  location: string;
  university?: string;
  degree?: string;
  resumeURL: string;
  og: string;
  usage: PortableTextBlock[];
};

export type JobType = {
  _id: string;
  name: string;
  jobTitle: string;
  logo: string;
  url: string;
  description: string;
  startDate: string;
  endDate: string;
};

export type ProjectType = {
  _id: string;
  name: string;
  slug: string;
  tagline: string;
  projectUrl: string;
  repository: string;
  logo: string;
  coverImage: {
    image: string;
    alt: string | null;
    lqip: string;
  };
  description: PortableTextBlock[];
};

export type PostType = {
  _id: string;
  _createdAt: string;
  _updatedAt?: string;
  title: string;
  slug: string;
  description: string;
  canonicalLink?: string;
  date?: string;
  coverImage: {
    image: string;
    lqip: string;
    alt: string | null;
  };
  tags: string[];
  author: {
    name: string;
    photo: {
      image: string;
      alt: string;
    };
    twitterUrl: string;
  };
  body: PortableTextBlock[];
  featured: boolean;
  isPublished: boolean;
};

export type HeroeType = {
  _id: string;
  _createdAt: string;
  name: string;
  imageUrl?: string;
  url?: string;
  met: boolean;
};

export type PublicationType = {
  _id: string;
  _createdAt: string;
  title: string;
  authors?: string[];
  journal?: string;
  year: number;
  abstract?: string;
  keywords?: string[];
  doi?: string;
  pdfUrl?: string;
  externalUrl?: string;
  type: "journal" | "conference" | "workshop" | "thesis" | "preprint" | "chapter" | "report";
  status: "published" | "inpress" | "review" | "draft";
  featured: boolean;
};

export type TalkType = {
  _id: string;
  _createdAt: string;
  title: string;
  description?: string;
  event: string;
  location?: string;
  date: string;
  type: "conference" | "workshop" | "training" | "keynote" | "panel" | "webinar" | "meetup" | "lecture";
  duration?: number;
  audience?: "students" | "professionals" | "researchers" | "general" | "mixed";
  topics?: string[];
  slidesUrl?: string;
  videoUrl?: string;
  youtubeVideoId?: string;
  eventUrl?: string;
  language: "en" | "th" | "mixed";
  featured: boolean;
  attendees?: number;
};
