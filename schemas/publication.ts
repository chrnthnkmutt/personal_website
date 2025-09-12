import { FaBook } from "react-icons/fa";
import { defineType, defineField } from "sanity";

export default defineType({
  name: "publication",
  title: "Publications",
  type: "document",
  icon: FaBook,
  fields: [
    defineField({
      name: "title",
      title: "Publication Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "authors",
      title: "Authors",
      type: "array",
      of: [{ type: "string" }],
      description: "List of authors (including yourself)",
    }),
    defineField({
      name: "journal",
      title: "Journal/Conference Name",
      type: "string",
      description: "Name of the journal, conference, or publication venue",
    }),
    defineField({
      name: "year",
      title: "Publication Year",
      type: "number",
      validation: (Rule) => Rule.required().min(2000).max(new Date().getFullYear() + 1),
    }),
    defineField({
      name: "abstract",
      title: "Abstract",
      type: "text",
      description: "Brief summary of the publication",
    }),
    defineField({
      name: "keywords",
      title: "Keywords",
      type: "array",
      of: [{ type: "string" }],
      description: "Research keywords and topics",
    }),
    defineField({
      name: "doi",
      title: "DOI",
      type: "url",
      description: "Digital Object Identifier link",
    }),
    defineField({
      name: "pdfUrl",
      title: "PDF URL",
      type: "url",
      description: "Link to the publication PDF",
    }),
    defineField({
      name: "externalUrl",
      title: "External URL",
      type: "url", 
      description: "Link to publisher's page or repository",
    }),
    defineField({
      name: "type",
      title: "Publication Type",
      type: "string",
      options: {
        list: [
          { title: "Journal Article", value: "journal" },
          { title: "Conference Paper", value: "conference" },
          { title: "Workshop Paper", value: "workshop" },
          { title: "Thesis", value: "thesis" },
          { title: "Preprint", value: "preprint" },
          { title: "Book Chapter", value: "chapter" },
          { title: "Technical Report", value: "report" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: [
          { title: "Published", value: "published" },
          { title: "In Press", value: "inpress" },
          { title: "Under Review", value: "review" },
          { title: "Draft", value: "draft" },
        ],
      },
      initialValue: "published",
    }),
    defineField({
      name: "featured",
      title: "Featured Publication",
      type: "boolean",
      description: "Highlight this publication on the page",
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: "title",
      authors: "authors",
      year: "year",
      type: "type",
    },
    prepare({ title, authors, year, type }) {
      const firstAuthor = authors?.[0];
      return {
        title,
        subtitle: `${firstAuthor || "Unknown Author"} (${year}) - ${type}`,
      };
    },
  },
  orderings: [
    {
      title: "Year (Newest First)",
      name: "yearDesc",
      by: [{ field: "year", direction: "desc" }],
    },
    {
      title: "Title A-Z",
      name: "titleAsc",
      by: [{ field: "title", direction: "asc" }],
    },
  ],
});