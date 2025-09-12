import { FaMicrophone } from "react-icons/fa";
import { defineType, defineField } from "sanity";

export default defineType({
  name: "talk",
  title: "Talks & Workshops",
  type: "document",
  icon: FaMicrophone,
  fields: [
    defineField({
      name: "title",
      title: "Talk/Workshop Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      description: "Brief description of the talk or workshop content",
    }),
    defineField({
      name: "event",
      title: "Event/Conference Name",
      type: "string",
      validation: (Rule) => Rule.required(),
      description: "Name of the event, conference, or organization",
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "string",
      description: "City, country, or 'Online' for virtual events",
    }),
    defineField({
      name: "date",
      title: "Date",
      type: "date",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "type",
      title: "Type",
      type: "string",
      options: {
        list: [
          { title: "Conference Talk", value: "conference" },
          { title: "Workshop", value: "workshop" },
          { title: "Training Session", value: "training" },
          { title: "Keynote", value: "keynote" },
          { title: "Panel Discussion", value: "panel" },
          { title: "Webinar", value: "webinar" },
          { title: "Meetup Talk", value: "meetup" },
          { title: "University Lecture", value: "lecture" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "duration",
      title: "Duration (minutes)",
      type: "number",
      description: "Length of the presentation in minutes",
    }),
    defineField({
      name: "audience",
      title: "Target Audience",
      type: "string",
      options: {
        list: [
          { title: "Students", value: "students" },
          { title: "Professionals", value: "professionals" },
          { title: "Researchers", value: "researchers" },
          { title: "General Public", value: "general" },
          { title: "Mixed", value: "mixed" },
        ],
      },
    }),
    defineField({
      name: "topics",
      title: "Topics Covered",
      type: "array",
      of: [{ type: "string" }],
      description: "Key topics and technologies discussed",
    }),
    defineField({
      name: "slidesUrl",
      title: "Slides URL",
      type: "url",
      description: "Link to presentation slides (Google Slides, SlideShare, etc.)",
    }),
    defineField({
      name: "videoUrl",
      title: "Recording URL",
      type: "url",
      description: "Link to video recording (YouTube, Vimeo, etc.)",
    }),
    defineField({
      name: "youtubeVideoId",
      title: "YouTube Video ID",
      type: "string",
      description: "YouTube video ID for embedded player (optional - extracts from URL if provided)",
    }),
    defineField({
      name: "eventUrl",
      title: "Event URL",
      type: "url",
      description: "Link to event page or conference website",
    }),
    defineField({
      name: "language",
      title: "Language",
      type: "string",
      options: {
        list: [
          { title: "English", value: "en" },
          { title: "Thai", value: "th" },
          { title: "Mixed", value: "mixed" },
        ],
      },
      initialValue: "en",
    }),
    defineField({
      name: "featured",
      title: "Featured Talk",
      type: "boolean",
      description: "Highlight this talk on the page",
      initialValue: false,
    }),
    defineField({
      name: "attendees",
      title: "Number of Attendees",
      type: "number",
      description: "Approximate number of attendees (optional)",
    }),
  ],
  preview: {
    select: {
      title: "title",
      event: "event",
      date: "date",
      type: "type",
    },
    prepare({ title, event, date, type }) {
      const formattedDate = new Date(date).toLocaleDateString();
      return {
        title,
        subtitle: `${event} - ${formattedDate} (${type})`,
      };
    },
  },
  orderings: [
    {
      title: "Date (Newest First)",
      name: "dateDesc", 
      by: [{ field: "date", direction: "desc" }],
    },
    {
      title: "Event Name A-Z",
      name: "eventAsc",
      by: [{ field: "event", direction: "asc" }],
    },
  ],
});