// Enumerates every route x locale (static + Sanity services/posts) and checks the rendered <head>.
import { createClient } from "@sanity/client";
const BASE = process.argv[2] || "http://localhost:3917";
const SITE = "https://torupro.ee";
const L = ["et", "en", "ru"];
const BRAND = /toru\s*-?\s*pro|torupro/i;
const c = createClient({ projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production", apiVersion: "2024-01-01", useCdn: false, token: process.env.SANITY_WRITE_TOKEN, perspective: "raw" });
const docs = await c.fetch(`*[_type in ["service","post"]]{_id,_type,slug,metaTitle_et,metaTitle_en,metaTitle_ru,metaDesc_et,metaDesc_en,metaDesc_ru,ogTitle_et,ogTitle_en,ogTitle_ru,ogDesc_et,ogDesc_en,ogDesc_ru}`);
const errors = []; const rows = [];
const len = (s) => [...(s ?? "")].length;
// 1) Sanity source fields (published + drafts)
for (const d of docs) for (const l of L) {
  for (const [k, max] of [["metaTitle", 60], ["ogTitle", 60], ["metaDesc", 160], ["ogDesc", 160]]) {
    const v = d[`${k}_${l}`]; if (v == null) continue;
    if (len(v) > max) errors.push(`SANITY ${d._id} ${k}_${l} ${len(v)}>${max}`);
    if (k.endsWith("Title") && BRAND.test(v)) errors.push(`SANITY ${d._id} ${k}_${l} has brand`);
  }
}
// 2) Rendered pages
const paths = ["", "/meist", "/teenused", "/hinnakiri", "/blogi", "/kontakt", "/privacy", "/terms",
  ...docs.filter((d) => d._type === "service").map((d) => `/teenused/${d.slug}`),
  ...docs.filter((d) => d._type === "post").map((d) => `/blogi/${d.slug}`)];
const dec = (s) => s?.replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#x27;|&#39;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">");
const meta = (h, attr, name) => dec(h.match(new RegExp(`<meta ${attr}="${name.replace(/[:]/g, "\\:")}" content="([^"]*)"`))?.[1]);
const titles = new Map(); const descs = new Map();
for (const p of paths) for (const l of L) {
  const url = `/${l}${p}`; const r = await fetch(BASE + url, { redirect: "manual" });
  const h = await r.text();
  if (r.status !== 200) { errors.push(`${url} status ${r.status}`); continue; }
  const head = h.slice(0, h.indexOf("</head>"));
  const title = dec(head.match(/<title>([^<]*)<\/title>/)?.[1]);
  const desc = meta(head, "name", "description");
  const ogt = meta(head, "property", "og:title"), ogd = meta(head, "property", "og:description");
  const twt = meta(head, "name", "twitter:title"), twd = meta(head, "name", "twitter:description");
  const ogi = meta(head, "property", "og:image"), twi = meta(head, "name", "twitter:image");
  const canon = head.match(/<link rel="canonical" href="([^"]*)"/)?.[1];
  const alts = [...head.matchAll(/<link rel="alternate" hrefLang="([^"]*)" href="([^"]*)"/g)].map((m) => m[1] + "=" + m[2]);
  const robots = meta(head, "name", "robots") || "";
  const lang = h.match(/<html lang="([^"]*)"/)?.[1];
  const h1 = (h.match(/<h1[\s>]/g) || []).length;
  const imgsNoAlt = (h.match(/<img(?![^>]*\balt=)[^>]*>/g) || []).length;
  const emptyAlt = (h.match(/<img[^>]*\balt=""[^>]*>/g) || []).length;
  const lds = [...h.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/g)].map((m) => m[1]);
  const noindex = /noindex/.test(robots);
  rows.push({ url, title, t: len(title), d: len(desc), noindex });
  const chk = (cond, msg) => { if (!cond) errors.push(`${url}: ${msg}`); };
  for (const [n, v, max] of [["title", title, 60], ["og:title", ogt, 60], ["twitter:title", twt, 60], ["description", desc, 160], ["og:description", ogd, 160], ["twitter:description", twd, 160]]) {
    chk(v && len(v) > 0, `${n} missing`); chk(len(v) <= max, `${n} ${len(v)}>${max}: ${v}`);
    if (n.includes("title")) chk(!BRAND.test(v || ""), `${n} contains brand: ${v}`);
  }
  chk(canon === `${SITE}${url}`, `canonical ${canon}`);
  for (const x of L) chk(alts.includes(`${x}=${SITE}/${x}${p}`), `hreflang ${x} missing`);
  chk(alts.includes(`x-default=${SITE}/et${p}`), "x-default missing");
  chk(lang === l, `html lang ${lang}`);
  chk(h1 === 1, `h1 count ${h1}`);
  chk(imgsNoAlt === 0 && emptyAlt === 0, `images without alt: ${imgsNoAlt}/${emptyAlt}`);
  chk(!!ogi && !!twi, "og/twitter image missing");
  chk(/<link rel="icon" href="\/favicon.ico"/.test(head) && /apple-touch-icon/.test(head) && /rel="manifest"/.test(head), "icon/manifest links");
  for (const j of lds) { try { JSON.parse(j); } catch { errors.push(`${url}: invalid JSON-LD`); } }
  chk(lds.some((j) => j.includes('"Plumber"')), "Plumber schema missing");
  if (p.startsWith("/teenused/")) chk(lds.some((j) => j.includes('"@type":"Service"')) && lds.some((j) => j.includes("BreadcrumbList")), "Service/Breadcrumb schema");
  if (!noindex) {
    if (titles.has(title)) errors.push(`duplicate title ${url} = ${titles.get(title)}`); titles.set(title, url);
    if (descs.has(desc)) errors.push(`duplicate description ${url} = ${descs.get(desc)}`); descs.set(desc, url);
  }
}
// 3) Sitemap
const sm = await (await fetch(BASE + "/sitemap.xml")).text();
const locs = [...sm.matchAll(/<loc>([^<]*)<\/loc>/g)].map((m) => m[1]);
const indexable = rows.filter((r) => !r.noindex).map((r) => SITE + r.url);
for (const u of indexable) if (!locs.includes(u)) errors.push(`sitemap missing ${u}`);
for (const u of locs) { const row = rows.find((r) => SITE + r.url === u); if (!row) errors.push(`sitemap has unknown/non-200 ${u}`); else if (row.noindex) errors.push(`sitemap has noindex ${u}`); }
if (!/xhtml:link rel="alternate" hreflang="x-default"/.test(sm)) errors.push("sitemap lacks hreflang alternates");
// 4) robots
const rb = await (await fetch(BASE + "/robots.txt")).text();
for (const bot of ["GPTBot", "OAI-SearchBot", "ChatGPT-User", "ClaudeBot", "PerplexityBot", "Google-Extended", "Bingbot"]) if (!rb.includes(`User-Agent: ${bot}\nAllow: /`)) errors.push(`robots: ${bot} not allowed`);
if (!rb.includes("Sitemap: https://torupro.ee/sitemap.xml")) errors.push("robots: sitemap missing");
for (const r of rows) console.log(`${String(r.t).padStart(2)}/${String(r.d).padStart(3)} ${r.noindex ? "NOINDEX " : ""}${r.url} | ${r.title}`);
console.log(`\npages checked: ${rows.length}, sitemap URLs: ${locs.length}, sanity docs: ${docs.length}`);
console.log(errors.length ? `FAIL (${errors.length})\n` + errors.join("\n") : "PASS: all titles <=60, descriptions <=160, no brand in titles, canonical/hreflang/h1/alt/schema/sitemap/robots OK");
process.exit(errors.length ? 1 : 0);
