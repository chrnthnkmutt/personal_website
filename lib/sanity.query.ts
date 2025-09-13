import { groq } from "next-sanity";

export const profileQuery = groq`*[_type == "profile"][0]{
  _id,
  fullName,
  headline,
  profileImage {
    "image": asset->url,
    "lqip": asset->metadata.lqip,
    alt,
  },
  shortBio,
  location,
  fullBio,
  email,
  "resumeURL": resumeURL.asset->url,
  socialLinks,
  usage
}`;

export const jobQuery = groq`*[_type == "job"] | order(_createdAt desc){
  _id,
  name,
  jobTitle,
  "logo": logo.asset->url,
  url,
  description,
  startDate,
  endDate,
}`;

export const projectsQuery = groq`*[_type == "project"] | order(_createdAt desc){
  _id, 
  name,
  "slug": slug.current,
  tagline,
  "logo": logo.asset->url,
}`;

export const singleProjectQuery = groq`*[_type == "project" && slug.current == $slug][0]{
  _id,
  name,
  projectUrl,
  repository,
  coverImage {
    "image": asset->url,
    "lqip": asset->metadata.lqip,
    alt,
  },
  tagline,
  description
}`;

export const heroesQuery = groq`*[_type == "heroe"] | order(_createdAt asc) { _id, _createdAt, name, imageUrl, url, met }`;

export const publicationsQuery = groq`*[_type == "publication"] | order(year desc, _createdAt desc) {
  _id,
  _createdAt,
  title,
  authors,
  journal,
  year,
  abstract,
  keywords,
  doi,
  pdfUrl,
  externalUrl,
  type,
  status,
  featured
}`;

export const talksQuery = groq`*[_type == "talk"] | order(date desc, _createdAt desc) {
  _id,
  _createdAt,
  title,
  description,
  event,
  location,
  date,
  type,
  duration,
  audience,
  topics,
  slidesUrl,
  videoUrl,
  youtubeVideoId,
  eventUrl,
  language,
  featured,
  attendees
}`;
