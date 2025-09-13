import { defineField, defineType } from "sanity";
import { TableWidget } from "@/app/components/widgets/TableWidget";
import { LuTable } from "react-icons/lu";

export const table = defineType({
  name: "customTable",
  title: "Table",
  type: "object",
  icon: LuTable,
  fields: [
    defineField({
      name: "table",
      title: "Table",
      type: "object",
      fields: [
        defineField({
          name: "rows",
          title: "Table Rows",
          type: "array",
          of: [
            defineField({
              name: "row",
              title: "Row",
              type: "object",
              fields: [
                defineField({
                  name: "cells",
                  title: "Cells",
                  type: "array",
                  of: [{ type: "string" }],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: "caption",
      type: "string",
      title: "Caption",
      description: "Provide an accessible description for this table",
    }),
  ],
  preview: {
    select: {
      table: "table",
      caption: "caption",
    },
  },
  components: {
    preview: TableWidget,
  },
});
