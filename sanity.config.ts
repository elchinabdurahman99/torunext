"use client";

import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { service } from "./schemas/service";
import { post } from "./schemas/post";
import { testimonial } from "./schemas/testimonial";

export default defineConfig({
  name: "torupro",
  title: "Torupro CMS",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  plugins: [structureTool()],
  schema: {
    types: [service, post, testimonial],
  },
});
