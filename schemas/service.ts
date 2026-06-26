import { defineField, defineType } from "sanity";

export const service = defineType({
  name: "service",
  title: "Service Page",
  type: "document",
  fields: [
    defineField({ name: "slug",  title: "Slug",       type: "string" }),
    defineField({ name: "order", title: "Sort Order", type: "number" }),
    defineField({ name: "index", title: "Display Number (01, 02…)", type: "string" }),
    defineField({ name: "icon",  title: "Icon Key",   type: "string" }),

    // ── Card titles & short descriptions ──────────────────────────────────
    defineField({ name: "title_et", title: "Title (ET)", type: "string" }),
    defineField({ name: "title_en", title: "Title (EN)", type: "string" }),
    defineField({ name: "title_ru", title: "Title (RU)", type: "string" }),
    defineField({ name: "short_et", title: "Short Description (ET)", type: "text", rows: 2 }),
    defineField({ name: "short_en", title: "Short Description (EN)", type: "text", rows: 2 }),
    defineField({ name: "short_ru", title: "Short Description (RU)", type: "text", rows: 2 }),

    // ── Page body ─────────────────────────────────────────────────────────
    defineField({ name: "long_et", title: "Page Body (ET)", type: "text", rows: 15 }),
    defineField({ name: "long_en", title: "Page Body (EN)", type: "text", rows: 15 }),
    defineField({ name: "long_ru", title: "Page Body (RU)", type: "text", rows: 15 }),

    // ── SEO core ─────────────────────────────────────────────────────────
    defineField({ name: "metaTitle_et", title: "Meta Title (ET)", type: "string" }),
    defineField({ name: "metaTitle_en", title: "Meta Title (EN)", type: "string" }),
    defineField({ name: "metaTitle_ru", title: "Meta Title (RU)", type: "string" }),
    defineField({ name: "metaDesc_et",  title: "Meta Description (ET)", type: "text", rows: 2 }),
    defineField({ name: "metaDesc_en",  title: "Meta Description (EN)", type: "text", rows: 2 }),
    defineField({ name: "metaDesc_ru",  title: "Meta Description (RU)", type: "text", rows: 2 }),

    // ── SEO headings ─────────────────────────────────────────────────────
    defineField({ name: "h1_et", title: "H1 (ET)", type: "string" }),
    defineField({ name: "h1_en", title: "H1 (EN)", type: "string" }),
    defineField({ name: "h1_ru", title: "H1 (RU)", type: "string" }),
    defineField({ name: "h2_et", title: "H2 (ET)", type: "string" }),
    defineField({ name: "h2_en", title: "H2 (EN)", type: "string" }),
    defineField({ name: "h2_ru", title: "H2 (RU)", type: "string" }),

    // ── Keywords ─────────────────────────────────────────────────────────
    defineField({ name: "keywords_et", title: "Keywords (ET)", type: "array", of: [{ type: "string" }], options: { layout: "tags" } }),
    defineField({ name: "keywords_en", title: "Keywords (EN)", type: "array", of: [{ type: "string" }], options: { layout: "tags" } }),
    defineField({ name: "keywords_ru", title: "Keywords (RU)", type: "array", of: [{ type: "string" }], options: { layout: "tags" } }),

    // ── Open Graph ────────────────────────────────────────────────────────
    defineField({ name: "ogTitle_et", title: "OG Title (ET)", type: "string" }),
    defineField({ name: "ogTitle_en", title: "OG Title (EN)", type: "string" }),
    defineField({ name: "ogTitle_ru", title: "OG Title (RU)", type: "string" }),
    defineField({ name: "ogDesc_et",  title: "OG Description (ET)", type: "text", rows: 2 }),
    defineField({ name: "ogDesc_en",  title: "OG Description (EN)", type: "text", rows: 2 }),
    defineField({ name: "ogDesc_ru",  title: "OG Description (RU)", type: "text", rows: 2 }),
    defineField({ name: "ogImage",    title: "OG Image", type: "image" }),

    // ── Local SEO ─────────────────────────────────────────────────────────
    defineField({ name: "serviceArea", title: "Service Area",     type: "string" }),
    defineField({ name: "priceRange",  title: "Price Range",      type: "string" }),
    defineField({ name: "canonicalUrl", title: "Canonical URL",   type: "string" }),
    defineField({ name: "publishedAt",  title: "Published At",    type: "datetime" }),

    // ── FAQ (FAQPage rich snippet) ────────────────────────────────────────
    defineField({
      name: "faq",
      title: "FAQ Items",
      type: "array",
      of: [{
        type: "object",
        name: "faqItem",
        title: "FAQ Item",
        fields: [
          defineField({ name: "question_et", title: "Question (ET)", type: "string" }),
          defineField({ name: "question_en", title: "Question (EN)", type: "string" }),
          defineField({ name: "question_ru", title: "Question (RU)", type: "string" }),
          defineField({ name: "answer_et",   title: "Answer (ET)",   type: "text", rows: 3 }),
          defineField({ name: "answer_en",   title: "Answer (EN)",   type: "text", rows: 3 }),
          defineField({ name: "answer_ru",   title: "Answer (RU)",   type: "text", rows: 3 }),
        ],
        preview: { select: { title: "question_et" } },
      }],
    }),

    // ── Visibility ────────────────────────────────────────────────────────
    defineField({ name: "isPrimary", title: "Primary Service (shown on homepage)", type: "boolean", initialValue: false }),

    // ── Images ────────────────────────────────────────────────────────────
    defineField({ name: "image1", title: "Page Image 1", type: "image" }),
    defineField({ name: "image2", title: "Page Image 2", type: "image" }),
  ],
  preview: { select: { title: "title_et", subtitle: "slug" } },
  orderings: [{ title: "Order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] }],
});
