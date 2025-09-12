import { FaGlasses } from "react-icons/fa";
import { defineType, defineField } from "sanity";

export default defineType({
  name: "heroe",
  title: "Friends & Collaborators",
  type: "document",
  icon: FaGlasses,
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "imageUrl",
      title: "Profile Image URL",
      type: "url",
      description: "URL link to the person's profile image (optional)",
    }),
    defineField({
      name: "url",
      title: "Social URL",
      type: "url",
      description: "Link to their social media profile (optional)",
    }),
    defineField({
      name: "met",
      title: "Have you met this person?",
      type: "boolean",
      initialValue: false,
    }),
  ],
});
