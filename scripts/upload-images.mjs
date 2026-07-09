// Run: SANITY_WRITE_TOKEN=<token> node scripts/upload-images.mjs
//
// Uploads every service image from ~/Desktop/torupro-images/ to Sanity,
// then patches each service document with:
//   - image1  (Sanity image asset reference)
//   - imageAlt_et / imageAlt_en / imageAlt_ru  (SEO-optimised alt text)
//
// No local-folder dependency after this — images are served from cdn.sanity.io

import { createClient } from "@sanity/client";
import * as dotenv from "dotenv";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { readFileSync, createReadStream } from "fs";
import { homedir } from "os";

const __dirname = dirname(fileURLToPath(import.meta.url));
const env = dotenv.parse(readFileSync(join(__dirname, "../.env.local"), "utf8"));

const client = createClient({
  projectId: env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset:   env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-01-01",
  token: process.env.SANITY_WRITE_TOKEN || env.SANITY_WRITE_TOKEN,
  useCdn: false,
});

// ── Image folder ───────────────────────────────────────────────────────────
const IMAGE_DIR = join(homedir(), "Desktop", "torupro-images");

// ── Full mapping: file → slug + 3-language SEO alt text ───────────────────
const IMAGES = [
  {
    file: "plumbing-works.jpeg",
    slug: "torutood-tallinnas",
    alt_et: "Professionaalsed torutööd Tallinnas — torude paigaldus, remont ja hooldus Torupro meistrite poolt",
    alt_en: "Professional plumbing works in Tallinn — pipe installation, repair and maintenance by Torupro",
    alt_ru: "Профессиональные сантехнические работы в Таллинне — монтаж, ремонт и обслуживание труб от Torupro",
  },
  {
    file: "emergency-plumbing.jpg",
    slug: "torumees-tallinn-247",
    alt_et: "Avariitorumees Tallinnas ööpäevaringselt 24/7 — kiire reageerimine lekke- ja torumurrukorral",
    alt_en: "Emergency plumber in Tallinn available 24/7 — fast response to leaks and pipe bursts",
    alt_ru: "Аварийный сантехник в Таллинне круглосуточно 24/7 — быстрый выезд при течи и прорыве трубы",
  },
  {
    file: "sewer-repair.jpeg",
    slug: "kanalisatsiooni-remont",
    alt_et: "Kanalisatsioonitoru remont Tallinnas — pragude likvideerimine ja torude restaureerimine",
    alt_en: "Sewer pipe repair in Tallinn — crack sealing and pipeline restoration",
    alt_ru: "Ремонт канализационной трубы в Таллинне — устранение трещин и восстановление трубопровода",
  },
  {
    file: "drain-unblocking.jpeg",
    slug: "ummistuse-likvideerimine",
    alt_et: "Kanalisatsiooni ummistuse likvideerimine Tallinnas — professionaalne torude puhastus elektrispiraaliga",
    alt_en: "Drain unblocking in Tallinn — professional pipe cleaning with electric snake and hydro-jetting",
    alt_ru: "Прочистка засора канализации в Таллинне — профессиональная очистка труб электротросом и гидропромывкой",
  },
  {
    file: "pipe-flushing.jpg",
    slug: "kanalisatsiooni-survepesu",
    alt_et: "Kanalisatsiooni survepesu Tallinnas — kõrgsurve veejuga puhastab torustiku täielikult",
    alt_en: "Sewer pressure washing in Tallinn — high-pressure water jet cleans the pipeline completely",
    alt_ru: "Гидропромывка канализации в Таллинне — струя высокого давления полностью очищает трубопровод",
  },
  {
    file: "pipe-camera-inspection.webp",
    slug: "kaamerauuring",
    alt_et: "Torude kaameraülevaatus Tallinnas — videokaamera kontrollib torustiku seisukorda seestpoolt",
    alt_en: "Pipe CCTV camera inspection in Tallinn — video camera checks pipeline condition from inside",
    alt_ru: "Видеодиагностика труб в Таллинне — видеокамера проверяет состояние трубопровода изнутри",
  },
  {
    file: "water-pipe-installation.jpeg",
    slug: "veetorude-paigaldus",
    alt_et: "Veetorude paigaldus Tallinnas — PP-R ja PEX torude professionaalne paigaldus korterimajas",
    alt_en: "Water pipe installation in Tallinn — professional PP-R and PEX pipe fitting in apartment buildings",
    alt_ru: "Монтаж водопроводных труб в Таллинне — профессиональная прокладка PP-R и PEX труб в многоквартирных домах",
  },
  {
    file: "pipe-replacement.avif",
    slug: "torude-vahetus-korteris",
    alt_et: "Torude vahetus korteris Tallinnas — vana galvaanilise torustiku asendamine kaasaegse PP-R toruga",
    alt_en: "Pipe replacement in apartment in Tallinn — replacing old galvanised pipework with modern PP-R pipe",
    alt_ru: "Замена труб в квартире в Таллинне — замена старых оцинкованных труб современными PP-R трубами",
  },
  {
    file: "riser-pipe-replacement.webp",
    slug: "puestakute-vahetus",
    alt_et: "Kortermaja püstakute vahetus Tallinnas — vee- ja kanalisatsioonipüstakute täielik renoveerimine",
    alt_en: "Apartment building riser pipe replacement in Tallinn — complete renovation of water and sewage risers",
    alt_ru: "Замена стояков в многоквартирном доме в Таллинне — полная реновация водопроводных и канализационных стояков",
  },
  {
    file: "bathroom-plumbing.webp",
    slug: "vannitoa-torutood",
    alt_et: "Vannitoa torutööd Tallinnas — segistite, dušše ja vannide professionaalne paigaldus ning remont",
    alt_en: "Bathroom plumbing works in Tallinn — professional installation and repair of mixers, showers and baths",
    alt_ru: "Сантехнические работы в ванной комнате в Таллинне — профессиональный монтаж и ремонт смесителей, душей и ванн",
  },
  {
    file: "heating-system-repair.jpg",
    slug: "kuuttesusteemide-remont",
    alt_et: "Küttesüsteemide remont Tallinnas — radiaatorite, pumba ja torustiku renoveerimine professionaalselt",
    alt_en: "Heating system repair in Tallinn — professional renovation of radiators, pump and pipework",
    alt_ru: "Ремонт систем отопления в Таллинне — профессиональная реновация радиаторов, насоса и трубопровода",
  },
  {
    file: "leak-detection.jpeg",
    slug: "lekke-otsimine",
    alt_et: "Torulekke otsimine Tallinnas — kaasaegne termoskanneriga lekkekoha tuvastamine ilma seinte lõhkumiseta",
    alt_en: "Pipe leak detection in Tallinn — modern thermal scanner locates leaks without breaking walls",
    alt_ru: "Поиск течи трубопровода в Таллинне — современный тепловизор обнаруживает течь без вскрытия стен",
  },
  {
    file: "Grease-Trap-Cleaning.jpg",
    slug: "rasvapuuduri-puhastus",
    alt_et: "Rasvapüüduri puhastus Tallinnas — restoranide ja köökide rasvapüüduri professionaalne tühjendamine",
    alt_en: "Grease trap cleaning in Tallinn — professional emptying of restaurant and kitchen grease traps",
    alt_ru: "Очистка жироуловителя в Таллинне — профессиональная чистка жироуловителей ресторанов и пищеблоков",
  },
  {
    file: "sand-trap-cleaning.jpg",
    slug: "liivapuuduri-puhastus",
    alt_et: "Liivapüüduri puhastus Tallinnas — settekaevude ja liivapüüdurite regulaarne hooldus ja tühjendamine",
    alt_en: "Sand trap cleaning in Tallinn — regular maintenance and emptying of settling tanks and sand traps",
    alt_ru: "Очистка пескоуловителя в Таллинне — регулярное обслуживание и чистка отстойников и пескоуловителей",
  },
  {
    file: "sewer-construction.webp",
    slug: "valiskanalisatsiooni-ehitus",
    alt_et: "Väliskanalisatsiooni ehitus Tallinnas — maakanalisatsiooni paigaldus ja torustiku kaevamine professionaalselt",
    alt_en: "External sewer construction in Tallinn — professional underground sewer pipe installation and excavation",
    alt_ru: "Строительство наружной канализации в Таллинне — профессиональная прокладка подземного канализационного трубопровода",
  },
  {
    file: "pipe-maintenenance.jpg",
    slug: "torude-hooldus",
    alt_et: "Torude regulaarne hooldus Tallinnas — ennetav torustiku kontroll ja puhastus probleemide vältimiseks",
    alt_en: "Regular pipe maintenance in Tallinn — preventive pipeline inspection and cleaning to avoid problems",
    alt_ru: "Регулярное обслуживание труб в Таллинне — профилактический осмотр и очистка трубопровода для предотвращения проблем",
  },
  {
    file: "jetting-truck.jpg",
    slug: "survepesuauto",
    alt_et: "Kanalisatsiooni survepesuauto Tallinnas — suuremahuline kõrgsurve hüdropuhastus erikombiautoga",
    alt_en: "Sewer jetting truck in Tallinn — large-scale high-pressure hydro-jetting with specialist combination vehicle",
    alt_ru: "Комбинированная илососная и каналопромывочная машина в Таллинне — крупномасштабная гидропромывка специализированной техникой",
  },
  {
    file: "sewage-tanker.webp",
    slug: "fekaalivedu",
    alt_et: "Fekaali- ja reoveeveo teenus Tallinnas — tsisternautoga septiku ja kogumiskaevude tühjendamine",
    alt_en: "Sewage and wastewater haulage service in Tallinn — septic tank and cesspool emptying by tanker truck",
    alt_ru: "Вывоз фекальных и сточных вод в Таллинне — откачка септиков и выгребных ям ассенизаторской машиной",
  },
  {
    file: "well-cleaning.jpeg",
    slug: "kaevude-puhastus",
    alt_et: "Puurkaevude ja salvkaevude puhastus Tallinnas — kaevude desinfitseerimine ja settepuhastus professionaalselt",
    alt_en: "Borehole and dug well cleaning in Tallinn — professional well disinfection and sediment removal",
    alt_ru: "Очистка скважин и колодцев в Таллинне — профессиональная дезинфекция и удаление осадка из колодца",
  },
  {
    file: "septic-tank-maintanance.webp",
    slug: "septiku-hooldus",
    alt_et: "Septiku hooldus Tallinnas ja Harjumaal — bioloogilise septiku tühjendamine, puhastamine ja kontroll",
    alt_en: "Septic tank maintenance in Tallinn and Harju County — biological septic tank emptying, cleaning and inspection",
    alt_ru: "Обслуживание септика в Таллинне и Харьюмаа — откачка, очистка и проверка биологического септика",
  },
];

// ── Helpers ────────────────────────────────────────────────────────────────
function mimeType(filename) {
  const ext = filename.split(".").pop().toLowerCase();
  const map = { jpg: "image/jpeg", jpeg: "image/jpeg", png: "image/png", webp: "image/webp", avif: "image/avif", gif: "image/gif" };
  return map[ext] || "image/jpeg";
}

// ── Main ───────────────────────────────────────────────────────────────────
async function run() {
  console.log(`\nUploading ${IMAGES.length} images from ${IMAGE_DIR}\n`);

  let ok = 0;
  let fail = 0;

  for (const item of IMAGES) {
    const filePath = join(IMAGE_DIR, item.file);
    process.stdout.write(`  [${item.slug}]  ${item.file}  →  `);

    // 1. Find service document id
    const serviceDoc = await client.fetch(
      `*[_type == "service" && slug == $slug][0]{ _id }`,
      { slug: item.slug }
    );

    if (!serviceDoc) {
      console.log(`⚠  service not found in Sanity, skipping`);
      fail++;
      continue;
    }

    // 2. Upload image asset
    let asset;
    try {
      asset = await client.assets.upload(
        "image",
        createReadStream(filePath),
        {
          filename: item.file,
          contentType: mimeType(item.file),
        }
      );
    } catch (err) {
      console.log(`✗ upload failed: ${err.message}`);
      fail++;
      continue;
    }

    // 3. Patch service with image reference + alt texts
    try {
      await client
        .patch(serviceDoc._id)
        .set({
          image1: {
            _type: "image",
            asset: { _type: "reference", _ref: asset._id },
          },
          imageAlt_et: item.alt_et,
          imageAlt_en: item.alt_en,
          imageAlt_ru: item.alt_ru,
        })
        .commit();
      console.log(`✓  ${asset._id}`);
      ok++;
    } catch (err) {
      console.log(`✗ patch failed: ${err.message}`);
      fail++;
    }
  }

  console.log(`\n─────────────────────────────────`);
  console.log(`Done.  ✓ ${ok} uploaded   ✗ ${fail} failed`);
  if (fail > 0) process.exit(1);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
