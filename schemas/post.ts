import { defineField, defineType } from "sanity";

export const post = defineType({
  name: "post",
  title: "Blog Post",
  type: "document",
  fields: [
    defineField({ name: "slug",         title: "Slug (URL)",       type: "string" }),
    defineField({ name: "publishedAt",  title: "Published At",     type: "datetime" }),
    defineField({ name: "coverImage",   title: "Cover Image URL",  type: "string" }),
    defineField({ name: "readingTime",  title: "Reading Time (min)", type: "number" }),

    // ── Category ──────────────────────────────────────────────────────────
    defineField({ name: "category_et", title: "Category (ET)", type: "string" }),
    defineField({ name: "category_en", title: "Category (EN)", type: "string" }),
    defineField({ name: "category_ru", title: "Category (RU)", type: "string" }),

    // ── Title ─────────────────────────────────────────────────────────────
    defineField({ name: "title_et", title: "Title (ET)", type: "string" }),
    defineField({ name: "title_en", title: "Title (EN)", type: "string" }),
    defineField({ name: "title_ru", title: "Title (RU)", type: "string" }),

    // ── Excerpt ───────────────────────────────────────────────────────────
    defineField({ name: "excerpt_et", title: "Excerpt (ET)", type: "text", rows: 3 }),
    defineField({ name: "excerpt_en", title: "Excerpt (EN)", type: "text", rows: 3 }),
    defineField({ name: "excerpt_ru", title: "Excerpt (RU)", type: "text", rows: 3 }),

    // ── Body ──────────────────────────────────────────────────────────────
    defineField({ name: "body_et", title: "Body (ET)", type: "text", rows: 20 }),
    defineField({ name: "body_en", title: "Body (EN)", type: "text", rows: 20 }),
    defineField({ name: "body_ru", title: "Body (RU)", type: "text", rows: 20 }),

    // ── SEO ───────────────────────────────────────────────────────────────
    defineField({ name: "metaTitle_et", title: "Meta Title (ET)", type: "string" }),
    defineField({ name: "metaTitle_en", title: "Meta Title (EN)", type: "string" }),
    defineField({ name: "metaTitle_ru", title: "Meta Title (RU)", type: "string" }),
    defineField({ name: "metaDesc_et",  title: "Meta Description (ET)", type: "text", rows: 2 }),
    defineField({ name: "metaDesc_en",  title: "Meta Description (EN)", type: "text", rows: 2 }),
    defineField({ name: "metaDesc_ru",  title: "Meta Description (RU)", type: "text", rows: 2 }),
    defineField({ name: "keywords_et",  title: "Keywords (ET)", type: "array", of: [{ type: "string" }], options: { layout: "tags" } }),
    defineField({ name: "keywords_en",  title: "Keywords (EN)", type: "array", of: [{ type: "string" }], options: { layout: "tags" } }),
    defineField({ name: "keywords_ru",  title: "Keywords (RU)", type: "array", of: [{ type: "string" }], options: { layout: "tags" } }),
  ],
  preview: {
    select: { title: "title_et", subtitle: "publishedAt" },
    prepare({ title, subtitle }) {
      return { title, subtitle: subtitle ? subtitle.slice(0, 10) : "" };
    },
  },
  orderings: [{ title: "Newest First", name: "publishedAtDesc", by: [{ field: "publishedAt", direction: "desc" }] }],
});
