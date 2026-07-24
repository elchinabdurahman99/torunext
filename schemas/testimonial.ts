import { defineField, defineType } from "sanity";

export const testimonial = defineType({
  name: "testimonial",
  title: "Review",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Name", type: "string", validation: (r) => r.required() }),
    defineField({ name: "location", title: "Location", type: "string" }),
    defineField({
      name: "rating",
      title: "Rating",
      type: "number",
      validation: (r) => r.required().integer().min(1).max(5),
    }),
    defineField({ name: "message", title: "Message", type: "text", rows: 4, validation: (r) => r.required() }),
    defineField({
      name: "locale",
      title: "Locale",
      type: "string",
      options: { list: ["et", "en", "ru"] },
      initialValue: "et",
    }),
    defineField({
      name: "approved",
      title: "Approved (visible on site)",
      type: "boolean",
      initialValue: true,
    }),
    defineField({ name: "createdAt", title: "Created At", type: "datetime" }),
  ],
  orderings: [
    { title: "Newest first", name: "createdAtDesc", by: [{ field: "createdAt", direction: "desc" }] },
  ],
  preview: {
    select: { title: "name", subtitle: "message" },
  },
});
