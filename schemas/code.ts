import { defineField, defineType } from "sanity";

export const code = defineType({
  name: "code",
  title: "Code Block",
  type: "object",
  fields: [
    defineField({
      name: "language",
      title: "Language",
      type: "string",
      options: {
        list: [
          { title: "Bash", value: "bash" },
          { title: "JavaScript", value: "js" },
          { title: "TypeScript", value: "ts" },
          { title: "TSX", value: "tsx" },
          { title: "JSX", value: "jsx" },
          { title: "CSS", value: "css" },
          { title: "GraphQL", value: "graphql" },
          { title: "HTML", value: "html" },
          { title: "JSON", value: "json" },
          { title: "Markdown", value: "md" },
          { title: "Python", value: "py" },
          { title: "SCSS", value: "scss" },
          { title: "SQL", value: "sql" },
          { title: "YAML", value: "yaml" },
          { title: "Java", value: "java" },
        ],
      },
      initialValue: "typescript",
    }),
    defineField({
      name: "filename",
      title: "Filename",
      type: "string",
    }),
    defineField({
      name: "code",
      title: "Code",
      type: "text",
      rows: 10,
    }),
  ],
  preview: {
    select: {
      title: "filename",
      subtitle: "language",
      code: "code",
    },
    prepare({ title, subtitle, code }) {
      return {
        title: title || "Code Block",
        subtitle: `${subtitle} - ${code?.split('\n')?.[0] || ''}`.slice(0, 50) + "...",
      };
    },
  },
});