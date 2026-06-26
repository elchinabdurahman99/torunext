// Run: SANITY_WRITE_TOKEN=<token> node scripts/seed-services.mjs
import { createClient } from "@sanity/client";
import * as dotenv from "dotenv";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { readFileSync } from "fs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const env = dotenv.parse(readFileSync(join(__dirname, "../.env.local"), "utf8"));

const client = createClient({
  projectId: env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-01-01",
  token: process.env.SANITY_WRITE_TOKEN || env.SANITY_WRITE_TOKEN,
  useCdn: false,
});

const services = [

// ═══════════════════════════════════════════════════════════════════════
// 1. TORUTÖÖD TALLINNAS  (PRIMARY)
// ═══════════════════════════════════════════════════════════════════════
{
  _type: "service",
  _id: "service-torutood-tallinnas",
  slug: "torutood-tallinnas",
  order: 1,
  index: "01",
  icon: "pipe",
  isPrimary: true,

  title_et: "Torutööd Tallinnas",
  title_en: "Plumbing Works in Tallinn",
  title_ru: "Сантехнические работы в Таллине",

  short_et: "Professionaalsed torutööd Tallinnas ja Harjumaal — paigaldus, remont ja hooldus kiiresti, garantiiga ja läbipaistva hinnaga.",
  short_en: "Professional plumbing works in Tallinn and Harjumaa — installation, repair and maintenance, fast, guaranteed and transparent pricing.",
  short_ru: "Профессиональные сантехнические работы в Таллине и уезде Харью — монтаж, ремонт и обслуживание быстро, с гарантией и прозрачной ценой.",

  long_et: `Torupro on Tallinna usaldusväärne torutööde partner — üle 10 aasta kogemusega meeskond, mis lahendab nii väikseid rikke kui ka mahukaid rekonstrueerimisi. Oleme teinud üle 2 000 tööotsuse, mis tähendab, et puutume iga päev kokku kõikvõimalike torustiku väljakutsetega.

Teostame täielikku torutööde ringi: vee- ja kanalisatsioonitoru paigaldus, torude vahetus, liitmike remont, segistite paigaldus ja veemõõtjate vahetamine. Töötame nii vanemate paneelmajade torustike kui ka uusehitiste kaasaegsete süsteemidega.

Kõik materjalid on sertifitseeritud ja vastavad Eesti ehitusnormidele. Kasutame üksnes kvaliteetseid torusid, liitmikke ja sulgarmatuure — nii PP-R, vask, roostevaba teras kui ka PEX. Tööde lõpus saate garantii ja vajaliku teostusdokumentatsiooni.

Tallinna linnaosade kaupa oleme aktiivselt tegutsenud Lasnamäel, Mustamäel, Põhja-Tallinnas, Kristiines, Nõmmel ja Piraital. Harjumaalt teenindame Rae, Viimsi, Saue ja Keila vallasid. Reageerime avariidele üldjuhul 1–2 tunni jooksul.

Hinnapakkumine on tasuta — kirjeldage muret telefoni või e-kirja teel ja meie spetsialist teeb teile selge kalkulatsiooni enne töö algust.`,

  long_en: `Torupro is Tallinn's trusted plumbing partner — a team with over 10 years of experience solving everything from minor faults to large-scale renovations. With more than 2,000 completed jobs, we encounter every kind of pipe system challenge on a daily basis.

We offer a full range of plumbing services: installation of water supply and drainage pipes, pipe replacement, fitting repair, mixer installation and water meter replacement. We work with both older panel-block pipe systems and modern systems in new buildings.

All materials are certified and comply with Estonian building standards. We use only quality pipes, fittings and shut-off valves — PP-R, copper, stainless steel and PEX. After every job you receive a warranty and the required completion documentation.

Across Tallinn we are active in Lasnamäe, Mustamäe, Põhja-Tallinn, Kristiine, Nõmme and Pirita. In Harjumaa we serve Rae, Viimsi, Saue and Keila municipalities. Emergency response is generally within 1–2 hours.

Quotations are free — describe the problem by phone or email and our specialist will provide a clear estimate before any work begins.`,

  long_ru: `Torupro — надёжный партнёр по сантехническим работам в Таллине: команда с опытом более 10 лет, решающая как небольшие поломки, так и масштабные реконструкции. Более 2000 выполненных заказов означают, что мы ежедневно сталкиваемся с самыми разными задачами в трубных системах.

Мы предлагаем полный спектр сантехнических работ: монтаж трубопроводов водоснабжения и канализации, замена труб, ремонт фитингов, установка смесителей и замена водосчётчиков. Работаем как со старыми панельными домами, так и с современными системами новостроек.

Все материалы сертифицированы и соответствуют строительным нормам Эстонии. Используем только качественные трубы, фитинги и запорную арматуру — PP-R, медь, нержавеющую сталь и PEX. После каждой работы вы получаете гарантию и необходимую исполнительную документацию.

По районам Таллина активно работаем в Ласнамяэ, Мустамяэ, Põhja-Tallinn, Кристийне, Нымме и Пирита. В уезде Харью обслуживаем волости Рае, Виймси, Сауэ и Кейла. Реагирование на аварии — как правило, в течение 1–2 часов.

Смета бесплатна — опишите проблему по телефону или электронной почте, и наш специалист составит чёткий расчёт до начала работ.`,

  h1_et: "Torutööd Tallinnas — professionaalne torumeister kiiresti kohale",
  h1_en: "Plumbing Works in Tallinn — Professional Plumber at Your Door",
  h1_ru: "Сантехнические работы в Таллине — профессиональный мастер быстро",

  h2_et: "Garanteeritud kvaliteet, läbipaistev hind ja kiire reageerimine üle kogu Tallinna ja Harjumaa",
  h2_en: "Guaranteed quality, transparent pricing and fast response across Tallinn and Harjumaa",
  h2_ru: "Гарантированное качество, прозрачная цена и быстрое реагирование по всему Таллину и уезду Харью",

  metaTitle_et: "Torutööd Tallinnas | Kiire Torumees — Torupro",
  metaTitle_en: "Plumbing Works in Tallinn | Fast Plumber — Torupro",
  metaTitle_ru: "Сантехнические работы в Таллине | Быстрый мастер — Torupro",

  metaDesc_et: "Professionaalsed torutööd Tallinnas ✓ Kohal 1–2 tunniga ✓ Üle 10 a kogemust ✓ Garantii ✓ Läbipaistev hind. Helista: +372 5605 8888",
  metaDesc_en: "Professional plumbing works in Tallinn ✓ On-site in 1–2 hours ✓ 10+ years experience ✓ Guaranteed ✓ Transparent pricing. Call: +372 5605 8888",
  metaDesc_ru: "Профессиональные сантехнические работы в Таллине ✓ Приедем за 1–2 часа ✓ Опыт 10+ лет ✓ Гарантия ✓ Прозрачная цена. Тел.: +372 5605 8888",

  ogTitle_et: "Torutööd Tallinnas — Torupro | Professionaalne torumeister",
  ogTitle_en: "Plumbing Works in Tallinn — Torupro | Professional Plumber",
  ogTitle_ru: "Сантехнические работы в Таллине — Torupro | Профессиональный мастер",

  ogDesc_et: "Kiire ja usaldusväärne torumeister Tallinnas. Üle 10 aasta kogemust, garantiiga tööd, läbipaistev hind.",
  ogDesc_en: "Fast and reliable plumber in Tallinn. Over 10 years experience, guaranteed work, transparent pricing.",
  ogDesc_ru: "Быстрый и надёжный сантехник в Таллине. Более 10 лет опыта, гарантия на работы, прозрачная цена.",

  keywords_et: ["torutööd Tallinn", "torumees Tallinn", "santehnik Tallinn", "torude paigaldus Tallinn", "torumeister Tallinn", "sanitaartehnilised tööd Tallinn", "torude remont Tallinn"],
  keywords_en: ["plumbing Tallinn", "plumber Tallinn", "plumbing works Tallinn", "pipe installation Tallinn", "emergency plumber Tallinn"],
  keywords_ru: ["сантехник Таллин", "сантехнические работы Таллин", "монтаж труб Таллин", "сантехник вызов Таллин", "аварийный сантехник Таллин"],

  canonicalUrl: "https://torupro.ee/et/teenused/torutood-tallinnas",
  serviceArea: "Tallinn, Harjumaa",
  priceRange: "€€",

  faq: [
    {
      question_et: "Kui kiiresti jõuate kohale?",
      question_en: "How quickly can you arrive?",
      question_ru: "Как быстро вы приедете?",
      answer_et: "Avariiolukordades oleme Tallinnas kohal tavaliselt 1–2 tunni jooksul. Planeeritud tööde puhul lepime aja ette kokku — saame tulla ka samal päeval.",
      answer_en: "For emergencies in Tallinn we are usually on site within 1–2 hours. For planned work we schedule in advance and can often come the same day.",
      answer_ru: "В аварийных ситуациях по Таллину мы, как правило, приезжаем в течение 1–2 часов. Для плановых работ договариваемся заранее — нередко можем приехать в тот же день.",
    },
    {
      question_et: "Kas annate tehtud töödele garantii?",
      question_en: "Do you provide a warranty on completed work?",
      question_ru: "Предоставляете ли вы гарантию на выполненные работы?",
      answer_et: "Jah, kõikidele töödele anname 12 kuu garantii. Kasutatavatele materjalidele kehtib lisaks tootja garantii.",
      answer_en: "Yes, we provide a 12-month guarantee on all work. Materials also carry the manufacturer's warranty.",
      answer_ru: "Да, на все работы предоставляем гарантию 12 месяцев. На используемые материалы дополнительно распространяется гарантия производителя.",
    },
    {
      question_et: "Mis linnaosades ja valdades te töötate?",
      question_en: "Which districts and municipalities do you serve?",
      question_ru: "В каких районах и волостях вы работаете?",
      answer_et: "Teenindame kogu Tallinna (Lasnamäe, Mustamäe, Põhja-Tallinn, Kristiine, Nõmme, Pirita, Kesklinn) ja Harjumaad (Rae, Viimsi, Saue, Keila ja lähivallad).",
      answer_en: "We serve all of Tallinn (Lasnamäe, Mustamäe, Põhja-Tallinn, Kristiine, Nõmme, Pirita, city centre) and Harjumaa (Rae, Viimsi, Saue, Keila and nearby municipalities).",
      answer_ru: "Обслуживаем весь Таллин (Ласнамяэ, Мустамяэ, Põhja-Tallinn, Кристийне, Нымме, Пирита, центр) и уезд Харью (Рае, Виймси, Сауэ, Кейла и близлежащие волости).",
    },
    {
      question_et: "Kas töötate ka öösel ja nädalavahetustel?",
      question_en: "Do you work at night and on weekends?",
      question_ru: "Работаете ли вы ночью и в выходные дни?",
      answer_et: "Jah, pakume 24/7 avariiteenust — ka öösiti, nädalavahetustel ja riigipühadel. Väljaspool tööaega kehtib avariitariif.",
      answer_en: "Yes, we offer 24/7 emergency service — including nights, weekends and public holidays. An emergency rate applies outside standard working hours.",
      answer_ru: "Да, мы предлагаем аварийную службу 24/7 — включая ночное время, выходные и праздничные дни. Вне стандартного рабочего времени действует аварийный тариф.",
    },
  ],
},

// ═══════════════════════════════════════════════════════════════════════
// 2. KANALISATSIOONI UMMISTUSE LIKVIDEERIMINE  (PRIMARY)
// ═══════════════════════════════════════════════════════════════════════
{
  _type: "service",
  _id: "service-ummistuse-likvideerimine",
  slug: "ummistuse-likvideerimine",
  order: 2,
  index: "02",
  icon: "drain",
  isPrimary: true,

  title_et: "Kanalisatsiooni Ummistuse Likvideerimine",
  title_en: "Drain Unblocking Tallinn",
  title_ru: "Устранение засора канализации",

  short_et: "Kiire kanalisatsiooniummistuse eemaldamine Tallinnas — köögivalamu, WC, dušš ja torustik. Kohal 1–2 tunniga, 24/7.",
  short_en: "Fast drain unblocking in Tallinn — kitchen sink, WC, shower and pipes. On-site in 1–2 hours, 24/7.",
  short_ru: "Быстрое устранение засора канализации в Таллине — кухонная мойка, WC, душ и трубопровод. Приедем за 1–2 часа, 24/7.",

  long_et: `Kanalisatsiooniummistus on üks levinumaid torutöö probleeme — see võib tabada igaühte ja sageli kõige ebasobivamad hetkel. Torupro meeskond jõuab kohale keskmiselt 1–2 tunni jooksul ja eemaldab ummistuse professionaalse varustusega kiirelt ning puhaste kätega.

Likvideerime ummistusi igas torustikusegmendis: köögivalamu ja nõudepesumasina äravool, vannitoa-, dušši- ja pesumasinaäravool, WC-pott, põrandasisene äravool ning korruste vaheline kanalisatsioonipüstak. Tegutseme nii lühikeste majakanalisatsioonide kui ka pikate väliskanalisatsioonitrasside ummistustega.

Kasutame kolme põhimeetodit: mehaaniline puhastus (trosside ja spiraalidega), hüdrodünaamiline survepesu (kõrgsurveveejuga) ning ensümaatiline töötlus ennetavaks hoolduseks. Iga ummistuse puhul valime parima meetodi — see tagab, et ummistus kaob jäädavalt, mitte ei nihku kaugemale.

Korduva ummistuse korral soovitame kombineerida puhastus kanalisatsiooni kaamerauuring — nii saame täpselt teada, kas tegu on rasva-, juure- või struktuurse kahjustusega, ja lahendame põhjuse, mitte ainult sümptomi.

Teenuse hind on fikseeritud ja teile selge enne töö algust. Lisatasusid öötöö eest lisandub ainult tõeliste avariikutsete korral.`,

  long_en: `A blocked drain is one of the most common plumbing problems — it can happen to anyone, usually at the worst possible moment. The Torupro team arrives on average within 1–2 hours and clears the blockage with professional equipment, quickly and cleanly.

We clear blockages in every section of the drainage system: kitchen sink and dishwasher outlet, bathroom, shower and washing-machine drain, WC pan, floor drain and the inter-floor sewage riser. We handle both short indoor drains and long outdoor sewer runs.

We use three main methods: mechanical cleaning (rods and spirals), hydro-jetting (high-pressure water flush) and enzymatic treatment for preventive maintenance. For each blockage we choose the best approach — ensuring the clog is gone permanently, not just pushed further along.

For recurring blockages we recommend combining the cleaning with a pipe camera inspection — this reveals whether the cause is grease, roots or structural damage, allowing us to fix the root cause rather than just the symptom.

The service price is fixed and clear to you before work begins. Night-rate surcharges apply only for genuine emergency call-outs.`,

  long_ru: `Засор канализации — одна из самых распространённых сантехнических проблем: она может возникнуть у кого угодно и, как правило, в самый неподходящий момент. Команда Torupro приезжает в среднем за 1–2 часа и устраняет засор профессиональным оборудованием — быстро и чисто.

Мы прочищаем засоры на любом участке канализационной системы: слив кухонной мойки и посудомоечной машины, слив ванной, душа и стиральной машины, унитаз, напольный трап, а также межэтажный канализационный стояк. Работаем как с короткими внутренними трубопроводами, так и с длинными наружными канализационными трассами.

Применяем три основных метода: механическая прочистка (тросами и спиралями), гидродинамическая промывка (струёй воды высокого давления) и ферментная обработка для профилактики. Для каждого засора выбираем оптимальный метод — это гарантирует, что засор устраняется навсегда, а не просто смещается дальше.

При рецидивирующем засоре рекомендуем совместить прочистку с видеодиагностикой трубы — это позволит точно установить, жировая это пробка, корни или структурное повреждение, и устранить причину, а не только симптом.

Стоимость услуги фиксирована и известна вам до начала работ. Надбавки за ночные вызовы применяются только при настоящих аварийных выездах.`,

  h1_et: "Kanalisatsiooni Ummistuse Likvideerimine Tallinnas — 24/7",
  h1_en: "Drain Unblocking in Tallinn — 24/7 Emergency Service",
  h1_ru: "Устранение засора канализации в Таллине — 24/7",

  h2_et: "WC, valamu, dušš, torustik — eemaldame iga ummistuse kiirelt ja jäädavalt",
  h2_en: "WC, sink, shower, pipes — we clear every blockage fast and permanently",
  h2_ru: "WC, мойка, душ, трубопровод — устраняем любой засор быстро и навсегда",

  metaTitle_et: "Kanalisatsiooni Ummistus Tallinn | Kiire Likvideerimine — Torupro",
  metaTitle_en: "Drain Unblocking Tallinn | Fast Clearing — Torupro",
  metaTitle_ru: "Засор канализации Таллин | Быстрое устранение — Torupro",

  metaDesc_et: "Kanalisatsiooniummistuse kiire likvideerimine Tallinnas ✓ Kohal 1–2 h ✓ 24/7 ✓ WC, valamu, torustik ✓ Fikseeritud hind. Helista: +372 5605 8888",
  metaDesc_en: "Fast drain unblocking in Tallinn ✓ On-site in 1–2 h ✓ 24/7 ✓ WC, sink, pipes ✓ Fixed price. Call: +372 5605 8888",
  metaDesc_ru: "Быстрое устранение засора канализации в Таллине ✓ Приедем за 1–2 ч ✓ 24/7 ✓ WC, мойка, трубы ✓ Фиксированная цена. Тел.: +372 5605 8888",

  ogTitle_et: "Kanalisatsiooni Ummistus Tallinn — Kiire Likvideerimine | Torupro",
  ogTitle_en: "Drain Unblocking Tallinn — Fast Service | Torupro",
  ogTitle_ru: "Засор канализации Таллин — Быстрое устранение | Torupro",

  ogDesc_et: "Professionaalne ummistuse likvideerimine 1–2 tunniga. WC, valamu, torustik — kogu Tallinn.",
  ogDesc_en: "Professional drain unblocking in 1–2 hours. WC, sink, pipes — all of Tallinn.",
  ogDesc_ru: "Профессиональное устранение засора за 1–2 часа. WC, мойка, трубы — весь Таллин.",

  keywords_et: ["kanalisatsiooni ummistus Tallinn", "toru ummistus Tallinn", "ummistuse eemaldamine", "WC ummistus Tallinn", "valamu ummistus", "kanalisatsiooni puhastus Tallinn"],
  keywords_en: ["drain unblocking Tallinn", "clogged drain Tallinn", "blocked toilet Tallinn", "drain cleaning Tallinn", "emergency drain Tallinn"],
  keywords_ru: ["засор канализации Таллин", "прочистка канализации Таллин", "засор унитаза Таллин", "засор трубы Таллин", "аварийная прочистка Таллин"],

  canonicalUrl: "https://torupro.ee/et/teenused/ummistuse-likvideerimine",
  serviceArea: "Tallinn, Harjumaa",
  priceRange: "€€",

  faq: [
    {
      question_et: "Mis põhjustab korduvaid ummistusi?",
      question_en: "What causes recurring blockages?",
      question_ru: "Что вызывает повторяющиеся засоры?",
      answer_et: "Korduvad ummistused viitavad sageli rasva- või katlakiviladestustele, juuretungimisele või torustiku struktuurikahjustusele. Kaamerauuring aitab täpse põhjuse tuvastada.",
      answer_en: "Recurring blockages often indicate grease or limescale build-up, root intrusion or structural pipe damage. A camera inspection identifies the exact cause.",
      answer_ru: "Повторяющиеся засоры чаще всего указывают на жировые или накипные отложения, прорастание корней или структурное повреждение трубы. Видеодиагностика помогает точно установить причину.",
    },
    {
      question_et: "Kas kasutate kemikaale ummistuse eemaldamiseks?",
      question_en: "Do you use chemicals to clear blockages?",
      question_ru: "Используете ли вы химикаты для устранения засоров?",
      answer_et: "Eelistame mehhaanilist puhastust ja survepesu, mis on tõhusamad ja ei kahjusta vanu torusid. Kemikaale kasutame erandjuhtudel ja ainult torule sobivaid.",
      answer_en: "We prefer mechanical cleaning and hydro-jetting, which are more effective and do not damage old pipes. Chemicals are used only in special cases and only those suitable for the pipe material.",
      answer_ru: "Мы предпочитаем механическую прочистку и гидропромывку — они эффективнее и не повреждают старые трубы. Химикаты применяем лишь в исключительных случаях и только те, что подходят для конкретного материала труб.",
    },
    {
      question_et: "Kui suur on ummistuse likvideerimise hind?",
      question_en: "What does drain unblocking cost?",
      question_ru: "Сколько стоит прочистка засора?",
      answer_et: "Hind sõltub ummistuse asukohast ja raskusastmest. Täpne hind lepitakse kokku enne töö algust — varjatud lisatasusid ei ole. Helistage hinnapakkumise saamiseks.",
      answer_en: "Price depends on the location and severity of the blockage. The exact price is agreed before work starts — no hidden fees. Call us for a quote.",
      answer_ru: "Цена зависит от местоположения и сложности засора. Точная стоимость согласовывается до начала работ — никаких скрытых доплат. Позвоните нам для расчёта.",
    },
  ],
},

// ═══════════════════════════════════════════════════════════════════════
// 3. KANALISATSIOONI SURVEPESU  (PRIMARY)
// ═══════════════════════════════════════════════════════════════════════
{
  _type: "service",
  _id: "service-kanalisatsiooni-survepesu",
  slug: "kanalisatsiooni-survepesu",
  order: 3,
  index: "03",
  icon: "wash",
  isPrimary: true,

  title_et: "Kanalisatsiooni Survepesu Tallinn",
  title_en: "High-Pressure Pipe Flushing Tallinn",
  title_ru: "Гидропромывка канализации Таллин",

  short_et: "Kanalisatsioonitoru survepesu kõrgsurveveejuga — eemaldab rasva, katlakivi ja juuretungimise täielikult. Suur- ja väikemahukad tööd.",
  short_en: "High-pressure water jet flushing of sewer pipes — fully removes grease, scale and root intrusion. Large and small jobs.",
  short_ru: "Гидропромывка канализационных труб под высоким давлением — полностью удаляет жир, накипь и корни. Работы любого объёма.",

  long_et: `Kanalisatsiooni survepesu on kõige tõhusam meetod torustiku põhjalikuks puhastamiseks. Kasutame professionaalseid survepesuseadmeid, mis töötavad kuni 200 baariga — see rebib lahti ja loputab välja isegi kõige visama rasva-, katlakivi- ja liivakihi, millest mehaanilised tööriistad ei jagu.

Survepesu sobib ideaalselt hooldusena kord aastas (eriti toiduainetööstusele, restoranidele ja suurkööridele), aga ka ühekordse puhastusena, kui ummistus kordub regulaarselt. Pärast survepesu on toru seinad puhtad ja voolutakistus minimaalne.

Teenindame nii eramuid, kortermaju, äri- ja tootmishooneid kui ka väliskanalisatsiooni. Meie survepesuauto on varustatud pikk voolikuga (kuni 100 m), mis võimaldab puhastada ka raskesti ligipääsetavaid sektsioone.

Survepesu kombineerituna kaamerauuring annab täieliku pildi torustiku seisundist: näeme korraga nii puhtust kui ka torustiku konstruktsioonivead. See on parim ennetava hoolduse pakett.

Pakume regulaarse survepesu lepinguid ettevõtetele — fikseeritud hinnaga kvartaliti või poolaastas toimuv puhastus hoiab torustiku probleemideta.`,

  long_en: `High-pressure pipe flushing is the most effective method for deep cleaning of drainage systems. We use professional jetting equipment operating at up to 200 bar — this blasts away even the most stubborn grease, scale and sand layers that mechanical tools cannot reach.

Hydro-jetting is ideal as annual preventive maintenance (especially for food industry, restaurants and large kitchens) as well as a one-off clean when blockages keep recurring. After jetting the pipe walls are clean and flow resistance is minimal.

We serve private houses, apartment buildings, commercial and industrial properties as well as outdoor sewer mains. Our jetting unit is equipped with a long hose (up to 100 m) that allows cleaning of hard-to-reach sections.

Combining hydro-jetting with a camera inspection gives a complete picture of the pipe condition — we see both cleanliness and any structural defects at once. This is the best preventive maintenance package.

We offer regular jetting contracts for businesses — quarterly or bi-annual cleaning at a fixed price keeps the system trouble-free.`,

  long_ru: `Гидропромывка канализации — наиболее эффективный метод глубокой очистки трубопроводной системы. Мы используем профессиональное оборудование высокого давления, работающее при давлении до 200 бар — это разрушает и вымывает даже самые стойкие жировые, известковые и песчаные отложения, с которыми не справляются механические инструменты.

Гидропромывка идеально подходит как ежегодное профилактическое обслуживание (особенно для пищевой промышленности, ресторанов и больших кухонь), так и для разового прочистки при регулярно повторяющихся засорах. После промывки стенки труб чистые, а гидравлическое сопротивление минимально.

Обслуживаем частные дома, многоквартирные здания, коммерческие и производственные объекты, а также наружные канализационные сети. Наш агрегат оснащён длинным шлангом (до 100 м), что позволяет промывать труднодоступные участки.

Сочетание гидропромывки с видеодиагностикой даёт полную картину состояния трубопровода: мы одновременно видим как степень чистоты, так и конструктивные дефекты. Это наилучший пакет профилактического обслуживания.

Предлагаем контракты на регулярную промывку для предприятий — ежеквартальная или полугодовая очистка по фиксированной цене обеспечивает бесперебойную работу системы.`,

  h1_et: "Kanalisatsiooni Survepesu Tallinnas — Kõrgsurve Hüdropuhastus",
  h1_en: "High-Pressure Pipe Flushing in Tallinn — Hydro-Jetting Service",
  h1_ru: "Гидропромывка канализации в Таллине — профессиональная очистка высоким давлением",

  h2_et: "Rasv, katlakivi, juured — eemaldame surveveejoa jõuga täielikult ja püsivalt",
  h2_en: "Grease, scale, roots — fully and permanently removed by water-jet pressure",
  h2_ru: "Жир, накипь, корни — полностью и навсегда удаляем напором воды",

  metaTitle_et: "Kanalisatsiooni Survepesu Tallinn | Hüdropuhastus — Torupro",
  metaTitle_en: "High-Pressure Pipe Flushing Tallinn | Hydro-Jetting — Torupro",
  metaTitle_ru: "Гидропромывка канализации Таллин | Очистка высоким давлением — Torupro",

  metaDesc_et: "Kanalisatsioonitoru survepesu Tallinnas ✓ Kuni 200 bar ✓ Eemaldab rasva, katlakivi, juured ✓ Eramajad & ettevõtted. Helista: +372 5605 8888",
  metaDesc_en: "High-pressure sewer pipe flushing in Tallinn ✓ Up to 200 bar ✓ Removes grease, scale, roots ✓ Homes & businesses. Call: +372 5605 8888",
  metaDesc_ru: "Гидропромывка канализации в Таллине ✓ До 200 бар ✓ Удаляет жир, накипь, корни ✓ Дома и предприятия. Тел.: +372 5605 8888",

  ogTitle_et: "Kanalisatsiooni Survepesu Tallinn — Torupro",
  ogTitle_en: "High-Pressure Pipe Flushing Tallinn — Torupro",
  ogTitle_ru: "Гидропромывка канализации Таллин — Torupro",

  ogDesc_et: "Professionaalne kõrgsurve hüdropuhastus torustikule. Rasv, katlakivi, juured — puhas toru garantiiga.",
  ogDesc_en: "Professional high-pressure hydro-jetting for pipes. Grease, scale, roots — clean pipes guaranteed.",
  ogDesc_ru: "Профессиональная гидропромывка трубопроводов высоким давлением. Жир, накипь, корни — чистая труба с гарантией.",

  keywords_et: ["survepesu Tallinn", "kanalisatsiooni survepesu", "torude pesu Tallinn", "hüdropuhastus Tallinn", "kanalisatsiooni puhastus survega", "torude survepesu"],
  keywords_en: ["pipe flushing Tallinn", "hydro-jetting Tallinn", "high pressure drain cleaning Tallinn", "sewer jetting Tallinn"],
  keywords_ru: ["гидропромывка Таллин", "промывка канализации Таллин", "прочистка труб высоким давлением Таллин", "очистка канализации Таллин"],

  canonicalUrl: "https://torupro.ee/et/teenused/kanalisatsiooni-survepesu",
  serviceArea: "Tallinn, Harjumaa",
  priceRange: "€€",

  faq: [
    {
      question_et: "Millal on survepesu vajalik?",
      question_en: "When is hydro-jetting necessary?",
      question_ru: "Когда необходима гидропромывка?",
      answer_et: "Survepesu on soovitatav siis, kui ummistus kordub regulaarselt, äravool on aeglane, torudes on ebameeldiv lõhn, või ennetava hooldusena kord aastas (eriti restoranidele ja köökidele).",
      answer_en: "Hydro-jetting is recommended when blockages recur regularly, drainage is slow, there is an unpleasant odour from the pipes, or as annual preventive maintenance — especially for restaurants and kitchens.",
      answer_ru: "Гидропромывка рекомендуется, когда засоры повторяются регулярно, сток медленный, из труб исходит неприятный запах, или в качестве ежегодного профилактического обслуживания — особенно для ресторанов и кухонь.",
    },
    {
      question_et: "Kas survepesu kahjustab vanu torusid?",
      question_en: "Does hydro-jetting damage old pipes?",
      question_ru: "Повреждает ли гидропромывка старые трубы?",
      answer_et: "Õigesti teostatud survepesu ei kahjusta vanu torusid. Enne puhastust hindame torustiku seisundit ja valime sobiva rõhu. Väga kehvas olukorras torude puhul soovitame esmalt kaamerauuring.",
      answer_en: "Correctly performed hydro-jetting does not damage old pipes. Before cleaning we assess the pipe condition and select the appropriate pressure. For pipes in very poor condition we recommend a camera inspection first.",
      answer_ru: "Правильно выполненная гидропромывка не повреждает старые трубы. Перед очисткой оцениваем состояние трубопровода и выбираем подходящее давление. При очень плохом состоянии труб рекомендуем сначала провести видеодиагностику.",
    },
    {
      question_et: "Kas pakute ettevõtetele regulaarse survepesu lepingut?",
      question_en: "Do you offer regular hydro-jetting contracts for businesses?",
      question_ru: "Предлагаете ли вы регулярные контракты на гидропромывку для предприятий?",
      answer_et: "Jah, pakume kvartalipõhiseid ja poolaastaseid hoolduslepinguid fikseeritud hinnaga. Restoranidele ja toiduettevõtetele on see eriti soovituslik, kuna rasv koguneb torudes kiiresti.",
      answer_en: "Yes, we offer quarterly and bi-annual maintenance contracts at a fixed price. This is especially recommended for restaurants and food businesses, as grease accumulates in pipes quickly.",
      answer_ru: "Да, предлагаем ежеквартальные и полугодовые контракты на обслуживание по фиксированной цене. Это особенно рекомендуется ресторанам и пищевым предприятиям, поскольку жир быстро накапливается в трубах.",
    },
  ],
},

// ═══════════════════════════════════════════════════════════════════════
// 4. KAAMERAUURING  (PRIMARY)
// ═══════════════════════════════════════════════════════════════════════
{
  _type: "service",
  _id: "service-kaamerauuring",
  slug: "kaamerauuring",
  order: 4,
  index: "04",
  icon: "camera",
  isPrimary: true,

  title_et: "Kanalisatsiooni Kaamerauuring",
  title_en: "Pipe Camera Inspection Tallinn",
  title_ru: "Видеодиагностика канализации",

  short_et: "Torustiku videokontroll kaamerapea abil — leiame lekke, ummistuse põhjuse ja struktuurikahjustused ilma kaevamata.",
  short_en: "Video inspection of pipes with a camera head — we find leaks, blockage causes and structural damage without digging.",
  short_ru: "Видеоинспекция трубопровода камерой — находим течи, причины засоров и структурные повреждения без раскопок.",

  long_et: `Kanalisatsiooni kaamerauuring on kaasaegne diagnostikameetod, mis võimaldab näha torustiku sisemust ilma seinte avamise või kaevamiseta. Meie professionaalne kaamerapea edastatab reaalajas HD-pildi spetsialisti ekraanile — nii tuvastame rikke täpse asukoha ja põhjuse minutitega.

Kaamerauuring sobib ideaalselt korduvate ummistuste põhjuse tuvastamiseks, lekkekoha leidmiseks varjatud torustikes, torustiku seisundi hindamiseks enne kinnisvaraostmist, juuretungimise kaardistamiseks väliskanalisatsioonis ning survepesu järgse töö tulemuse kontrollimiseks.

Meie kaamerasüsteem ulatub kuni 100 meetrit ja läbib torude läbimõõtudega alates 50 mm. Uuringu käigus salvestame video, mille saate endale kaasa — kasulik dokumentatsioon nii kindlustusele kui ka ehitusjärelevalvele.

Uuring on kiire: enamasti kulub kogu protseduuriks 30–60 minutit. Kohapeal anname soovitused edasiseks — kas survepesu, remont või asendamine on vajalik.

Kaamerauuring kombineerituna survepesu või lekketuvastusega annab täieliku torustiku auditlahenduse.`,

  long_en: `A pipe camera inspection is a modern diagnostic method that allows you to see the inside of a drainage system without opening walls or digging. Our professional camera head transmits a real-time HD image to the specialist's screen — pinpointing the exact location and cause of a fault within minutes.

Camera inspection is ideal for identifying the cause of recurring blockages, locating leaks in concealed pipework, assessing pipe condition before a property purchase, mapping root intrusion in outdoor sewers and verifying the result of hydro-jetting.

Our camera system reaches up to 100 metres and passes through pipes from 50 mm diameter upwards. We record the full video during the inspection and you can take a copy — useful documentation for insurers and building supervisors.

The inspection is quick: the whole procedure usually takes 30–60 minutes. On the spot we give recommendations for next steps — whether hydro-jetting, repair or replacement is needed.

Camera inspection combined with hydro-jetting or leak detection provides a complete pipe audit solution.`,

  long_ru: `Видеодиагностика канализации — современный метод, позволяющий увидеть внутреннее состояние трубопровода без вскрытия стен или раскопок. Наша профессиональная камера передаёт изображение в HD-качестве в реальном времени на монитор специалиста — так мы определяем точное местоположение и причину неисправности за считанные минуты.

Видеодиагностика идеально подходит для выявления причины рецидивирующих засоров, обнаружения течи в скрытых трубопроводах, оценки состояния труб перед покупкой недвижимости, картирования прорастания корней в наружной канализации и контроля результата гидропромывки.

Наша камерная система достигает до 100 метров и проходит через трубы диаметром от 50 мм. Во время обследования мы записываем видео, копию которого вы забираете с собой — полезная документация для страховой компании и технического надзора.

Обследование проходит быстро: вся процедура обычно занимает 30–60 минут. На месте даём рекомендации по дальнейшим действиям — необходима ли гидропромывка, ремонт или замена.

Видеодиагностика в сочетании с гидропромывкой или поиском течи обеспечивает полный аудит трубопроводной системы.`,

  h1_et: "Kanalisatsiooni Kaamerauuring Tallinnas — HD Videokontroll",
  h1_en: "Pipe Camera Inspection in Tallinn — HD Video Diagnostics",
  h1_ru: "Видеодиагностика канализации в Таллине — HD-контроль трубопровода",

  h2_et: "Tuvastame lekke, ummistuse põhjuse ja kahjustused täpselt — ilma seinte avamiseta",
  h2_en: "We pinpoint leaks, blockage causes and damage precisely — without opening walls",
  h2_ru: "Точно определяем течи, причины засоров и повреждений — без вскрытия стен",

  metaTitle_et: "Kanalisatsiooni Kaamerauuring Tallinn | Torustiku Videokontroll — Torupro",
  metaTitle_en: "Pipe Camera Inspection Tallinn | Video Diagnostics — Torupro",
  metaTitle_ru: "Видеодиагностика канализации Таллин | Осмотр труб камерой — Torupro",

  metaDesc_et: "Torustiku kaamerauuring Tallinnas ✓ HD video ✓ Kuni 100 m ✓ Lekke ja ummistuse põhjus ✓ Videosalvestus kaasa. Helista: +372 5605 8888",
  metaDesc_en: "Pipe camera inspection in Tallinn ✓ HD video ✓ Up to 100 m ✓ Leak and blockage diagnosis ✓ Video recording included. Call: +372 5605 8888",
  metaDesc_ru: "Видеодиагностика трубопровода в Таллине ✓ HD-видео ✓ До 100 м ✓ Диагностика течи и засора ✓ Видеозапись в подарок. Тел.: +372 5605 8888",

  ogTitle_et: "Kanalisatsiooni Kaamerauuring Tallinn — Torustiku Videokontroll | Torupro",
  ogTitle_en: "Pipe Camera Inspection Tallinn — Video Diagnostics | Torupro",
  ogTitle_ru: "Видеодиагностика канализации Таллин — Осмотр камерой | Torupro",

  ogDesc_et: "HD kaamerauuring leiab lekke, ummistuse põhjuse ja kahjustused ilma kaevamiseta. Kuni 100 m, videosalvestus kaasa.",
  ogDesc_en: "HD camera inspection finds leaks, blockage causes and damage without digging. Up to 100 m, video recording included.",
  ogDesc_ru: "HD-диагностика камерой находит течи, причины засоров и повреждения без раскопок. До 100 м, видеозапись прилагается.",

  keywords_et: ["toru kaamerauuring Tallinn", "kanalisatsiooni kaamera Tallinn", "torustiku videokontroll", "torustiku diagnostika Tallinn", "kanalisatsiooni kontroll kaameraga"],
  keywords_en: ["pipe camera inspection Tallinn", "sewer camera Tallinn", "drain inspection Tallinn", "CCTV pipe survey Tallinn"],
  keywords_ru: ["видеодиагностика канализации Таллин", "осмотр труб камерой Таллин", "видеоинспекция трубопровода Таллин", "диагностика канализации Таллин"],

  canonicalUrl: "https://torupro.ee/et/teenused/kaamerauuring",
  serviceArea: "Tallinn, Harjumaa",
  priceRange: "€€",

  faq: [
    {
      question_et: "Kas kaamerauuring jätab videosalvestuse?",
      question_en: "Does the camera inspection include a video recording?",
      question_ru: "Остаётся ли видеозапись после обследования?",
      answer_et: "Jah, kogu uuring salvestatakse ja klient saab videofaili kaasa. See on kasulik dokument kindlustusele, ühistule ja ehitusjärelevalvele.",
      answer_en: "Yes, the full inspection is recorded and the client receives the video file. It is a useful document for insurers, housing associations and building supervisors.",
      answer_ru: "Да, всё обследование записывается, и клиент получает видеофайл. Это полезный документ для страховой компании, товарищества собственников и технического надзора.",
    },
    {
      question_et: "Kui väikestesse torudesse kaamera mahub?",
      question_en: "What is the minimum pipe diameter for the camera?",
      question_ru: "Каков минимальный диаметр трубы для камеры?",
      answer_et: "Meie kaamerapea mahub alates 50 mm läbimõõduga torudesse. Suuremad läbimõõdud (110–315 mm) sobivad ka põrand- ja väliskanalisatsioonile.",
      answer_en: "Our camera head fits pipes from 50 mm diameter upwards. Larger diameters (110–315 mm) are also suitable for floor drains and outdoor sewers.",
      answer_ru: "Наша камера проходит в трубы диаметром от 50 мм. Большие диаметры (110–315 мм) подходят также для напольных трапов и наружной канализации.",
    },
    {
      question_et: "Kas kaamerauuring on mõistlik enne korteri ostmist?",
      question_en: "Is a camera inspection worth doing before buying a flat?",
      question_ru: "Стоит ли проводить видеодиагностику перед покупкой квартиры?",
      answer_et: "Absoluutselt. Varjatud torukahjustused võivad olla väga kulukad. Kaamerauuring annab selge pildi torustiku tegelikust seisundist ja aitab läbirääkimistel müüjaga.",
      answer_en: "Absolutely. Hidden pipe damage can be very costly. A camera inspection gives a clear picture of the actual pipe condition and helps in negotiations with the seller.",
      answer_ru: "Абсолютно. Скрытые повреждения труб могут обойтись очень дорого. Видеодиагностика даёт чёткое представление о реальном состоянии трубопровода и помогает в переговорах с продавцом.",
    },
  ],
},

// ═══════════════════════════════════════════════════════════════════════
// 5. KANALISATSIOONI REMONT  (PRIMARY)
// ═══════════════════════════════════════════════════════════════════════
{
  _type: "service",
  _id: "service-kanalisatsiooni-remont",
  slug: "kanalisatsiooni-remont",
  order: 5,
  index: "05",
  icon: "weld",
  isPrimary: true,

  title_et: "Kanalisatsiooni Remont Tallinn",
  title_en: "Sewer Repair Tallinn",
  title_ru: "Ремонт канализации Таллин",

  short_et: "Kanalisatsioonitoru remont ja vahetus Tallinnas — pragunenud, roostunud ja lekkinud torude parandamine kvaliteetsete materjalidega.",
  short_en: "Sewer pipe repair and replacement in Tallinn — fixing cracked, corroded and leaking pipes with quality materials.",
  short_ru: "Ремонт и замена канализационных труб в Таллине — устранение трещин, коррозии и течей с использованием качественных материалов.",

  long_et: `Kanalisatsiooni remont on vajalik siis, kui torustiku probleem ei ole ummistus, vaid füüsiline kahjustus — pragude, roostumise, nihestunud liitmike või juurtungimise tõttu. Selliste rikete lahendamine nõuab spetsiaalset väljaõpet ja kvaliteetseid materjale.

Teostame kanalisatsioonitoru remonti nii kohapealse paranduse (lõiku lõikamine ja liitmiku asendamine) kui ka täieliku torulõigu vahetusena. Elamute sisekanalisatsioonis kasutame PVC, PP ja malmist torusid vastavalt olemasoleva süsteemiga sobivusele.

Eriti levinud probleem vanades korterites on malmist kanalisatsioonitoru roostumine — toru seinad õhenevad aastate jooksul ning lõpuks tekib leke. Vahetame malmist torulõigud kvaliteetsete PVC või PP torudega, mis kestavad aastakümneid.

Enne remondi alustamist teostame vajadusel kaamerauuring, et hinnata kahjustuse ulatust ja valida õige remondimeetod. See väldib olukordi, kus parandatakse ühes kohas ja mõne aja pärast tekib uus probleem kõrval.

Garanteerime kõik remonditööd 12 kuuks. Remondi järel kontrollime üleandmistestiga kõik liitmikud ja ühendused.`,

  long_en: `Sewer repair is needed when the pipe problem is not a blockage but physical damage — caused by cracks, corrosion, displaced joints or root intrusion. Resolving such faults requires specialist training and quality materials.

We carry out sewer pipe repairs both as spot fixes (cutting out a section and replacing the fitting) and as complete pipe section replacements. In residential drainage we use PVC, PP and cast-iron pipes matched to the existing system.

A particularly common problem in older flats is corrosion of cast-iron sewer pipes — the pipe walls thin over the years until a leak appears. We replace cast-iron sections with quality PVC or PP pipes that last for decades.

Before starting a repair we carry out a camera inspection where needed to assess the extent of the damage and choose the correct repair method. This prevents situations where one spot is fixed only for a new problem to emerge nearby.

We guarantee all repair work for 12 months. After the repair we verify all joints and connections with a pressure test.`,

  long_ru: `Ремонт канализации требуется тогда, когда проблема — не засор, а физическое повреждение: трещины, коррозия, смещённые соединения или прорастание корней. Для решения таких проблем необходима специальная подготовка и качественные материалы.

Выполняем ремонт канализационных труб как точечным методом (вырезание участка и замена фитинга), так и полной заменой трубного участка. Во внутридомовой канализации применяем трубы из ПВХ, ПП и чугуна — в соответствии с существующей системой.

Особенно распространённая проблема в старых квартирах — коррозия чугунных канализационных труб: со временем стенки труб истончаются и появляется течь. Заменяем чугунные участки качественными трубами из ПВХ или ПП, которые прослужат десятилетия.

Перед началом ремонта при необходимости проводим видеодиагностику, чтобы оценить масштаб повреждения и выбрать правильный метод ремонта. Это позволяет избежать ситуаций, когда одно место отремонтировано, а рядом вскоре возникает новая проблема.

На все ремонтные работы даём гарантию 12 месяцев. После ремонта проверяем все фитинги и соединения испытанием давлением.`,

  h1_et: "Kanalisatsiooni Remont Tallinnas — Pragud, Rooste, Lekked",
  h1_en: "Sewer Repair in Tallinn — Cracks, Corrosion, Leaks",
  h1_ru: "Ремонт канализации в Таллине — трещины, коррозия, течи",

  h2_et: "Kahjustatud kanalisatsioonitoru parandame või vahetame — kiirelt, kvaliteetselt, garantiiga",
  h2_en: "Damaged sewer pipes repaired or replaced — fast, quality work with guarantee",
  h2_ru: "Повреждённые канализационные трубы ремонтируем или заменяем — быстро, качественно, с гарантией",

  metaTitle_et: "Kanalisatsiooni Remont Tallinn | Torude Vahetus — Torupro",
  metaTitle_en: "Sewer Repair Tallinn | Pipe Replacement — Torupro",
  metaTitle_ru: "Ремонт канализации Таллин | Замена труб — Torupro",

  metaDesc_et: "Kanalisatsioonitoru remont ja vahetus Tallinnas ✓ Pragud, roostumine, lekked ✓ PVC, PP, malm ✓ 12 kuu garantii. Helista: +372 5605 8888",
  metaDesc_en: "Sewer pipe repair and replacement in Tallinn ✓ Cracks, corrosion, leaks ✓ PVC, PP, cast iron ✓ 12-month guarantee. Call: +372 5605 8888",
  metaDesc_ru: "Ремонт и замена канализационных труб в Таллине ✓ Трещины, коррозия, течи ✓ ПВХ, ПП, чугун ✓ Гарантия 12 месяцев. Тел.: +372 5605 8888",

  ogTitle_et: "Kanalisatsiooni Remont Tallinn — Torupro",
  ogTitle_en: "Sewer Repair Tallinn — Torupro",
  ogTitle_ru: "Ремонт канализации Таллин — Torupro",

  ogDesc_et: "Kanalisatsioonitoru remont ja vahetus Tallinnas. Pragud, roostumine, lekked — lahendame kiirelt garantiiga.",
  ogDesc_en: "Sewer pipe repair and replacement in Tallinn. Cracks, corrosion, leaks — solved fast with guarantee.",
  ogDesc_ru: "Ремонт и замена канализационных труб в Таллине. Трещины, коррозия, течи — решаем быстро с гарантией.",

  keywords_et: ["kanalisatsiooni remont Tallinn", "kanalisatsioonitorude vahetus Tallinn", "kanalisatsiooni parandamine", "toru remont Tallinn", "kanalisatsioon lekib Tallinn"],
  keywords_en: ["sewer repair Tallinn", "drain pipe repair Tallinn", "pipe replacement Tallinn", "leaking pipe Tallinn"],
  keywords_ru: ["ремонт канализации Таллин", "замена канализационных труб Таллин", "ремонт трубы Таллин", "течь канализация Таллин"],

  canonicalUrl: "https://torupro.ee/et/teenused/kanalisatsiooni-remont",
  serviceArea: "Tallinn, Harjumaa",
  priceRange: "€€",

  faq: [
    {
      question_et: "Kuidas tean, kas toru vajab remonti või vahetust?",
      question_en: "How do I know if a pipe needs repair or full replacement?",
      question_ru: "Как понять, нужен ли ремонт или полная замена трубы?",
      answer_et: "Kaamerauuring näitab täpselt kahjustuse ulatuse. Väikesed praod saame parandada, kuid ulatuslikult roostunud malmist toru on majanduslikult mõistlikum täielikult välja vahetada.",
      answer_en: "A camera inspection shows exactly the extent of the damage. Small cracks can be repaired, but heavily corroded cast-iron pipe is more economical to replace in full.",
      answer_ru: "Видеодиагностика показывает точный масштаб повреждения. Небольшие трещины можно отремонтировать, но сильно проржавевшую чугунную трубу экономически целесообразнее заменить полностью.",
    },
    {
      question_et: "Kas remondi ajal pean veeta katkestama?",
      question_en: "Does the water need to be shut off during repair?",
      question_ru: "Нужно ли отключать воду во время ремонта?",
      answer_et: "Tavaliselt jah, kanalisatsioonitoru remondiks on vajalik veekatkestus. Kooskõlastame katkestuse majaelanike või ühistuga ja teostame töö võimalikult kiiresti.",
      answer_en: "Usually yes, a water shut-off is required for sewer pipe repair. We coordinate the interruption with residents or the housing association and complete the work as quickly as possible.",
      answer_ru: "Как правило, да — для ремонта канализационной трубы необходимо отключение воды. Мы согласовываем перерыв с жильцами или товариществом и выполняем работу максимально быстро.",
    },
  ],
},


// ═══════════════════════════════════════════════════════════════════════
// 6. RASVAPÜÜDURI PUHASTUS  (PRIMARY)
// ═══════════════════════════════════════════════════════════════════════
{
  _type: "service",
  _id: "service-rasvapuuduri-puhastus",
  slug: "rasvapuuduri-puhastus",
  order: 6,
  index: "06",
  icon: "wash",
  isPrimary: true,

  title_et: "Rasvapüüduri Puhastus Tallinn",
  title_en: "Grease Trap Cleaning Tallinn",
  title_ru: "Очистка жироуловителя Таллин",

  short_et: "Professionaalne rasvapüüduri tühjendus ja puhastus restoranidele, köökidele ja toiduettevõtetele. Regulaarne hooldus — hoiab torustiku probleemideta.",
  short_en: "Professional grease trap emptying and cleaning for restaurants, kitchens and food businesses. Regular maintenance keeps pipes problem-free.",
  short_ru: "Профессиональная откачка и очистка жироуловителя для ресторанов, кухонь и пищевых предприятий. Регулярное обслуживание — трубы без проблем.",

  long_et: `Rasvapüüdur on kohustuslik seade igas toiduettevõttes, restoranis ja suurköögis — see takistab rasva kandumist kanalisatsioonivõrku. Kui rasvapüüdurit regulaarselt ei puhastata, täitub see täis, rasv hakkab torudesse voolama ja tekitab kanalisatsiooniummistuse, millega kaasnevad suured kulud ja tegevuse katkestus.

Torupro teostab rasvapüüduri puhastust professionaalse vakuumseadmega: tühjendame ja peseme nii maapealset kui ka maasoojuslikku tüüpi rasvapüüdureid. Töö on kiire, puhas ja ei häiri asutuse tööd.

Pärast puhastust kontrollib spetsialist rasvapüüduri seisundit ja katted ning annab kirjaliku üleandmis-vastuvõtmise akti — nõutav sanitaarinspektsiooni kontrolli puhul.

Soovitame rasvapüüdurit puhastada vähemalt kord kuus (suure koormusega köökides tihedamini). Pakume regulaarseid hoolduslepinguid fikseeritud hinnaga — me tuleme õigel ajal ilma meeldetuletuseta.

Teenindame kõiki Tallinna ja Harjumaa toitlustusettevõtteid: kohvikud, restoranid, haiglad, koolid, tootmisköögid.`,

  long_en: `A grease trap is a mandatory device in every food business, restaurant and large kitchen — it prevents fat from entering the sewer network. If a grease trap is not cleaned regularly it fills up, fat starts flowing into the pipes and causes a drainage blockage, resulting in major costs and operational disruption.

Torupro carries out grease trap cleaning with professional vacuum equipment: we empty and wash both above-ground and below-ground grease traps. The work is fast, clean and does not disrupt the establishment's operations.

After cleaning our specialist inspects the grease trap condition and fittings and provides a written handover act — required for sanitary inspection checks.

We recommend cleaning grease traps at least once a month (more frequently in high-load kitchens). We offer regular maintenance contracts at a fixed price — we arrive on schedule without reminders.

We serve all food service businesses in Tallinn and Harjumaa: cafés, restaurants, hospitals, schools, production kitchens.`,

  long_ru: `Жироуловитель — обязательное устройство в каждом предприятии общественного питания, ресторане и большой кухне: он предотвращает попадание жира в канализационную сеть. Если жироуловитель не очищать регулярно, он заполняется, жир начинает поступать в трубы и вызывает засор канализации, что влечёт большие затраты и остановку работы.

Torupro выполняет очистку жироуловителя профессиональным вакуумным оборудованием: откачиваем и промываем как надземные, так и подземные жироуловители. Работа быстрая, чистая и не нарушает работу заведения.

После очистки специалист проверяет состояние жироуловителя и крышек и составляет письменный акт приёма-передачи — необходим при проверке санитарной инспекцией.

Рекомендуем очищать жироуловитель не реже одного раза в месяц (на кухнях с высокой нагрузкой — чаще). Предлагаем регулярные сервисные контракты по фиксированной цене — приедем вовремя без напоминаний.

Обслуживаем все предприятия питания в Таллине и уезде Харью: кафе, рестораны, больницы, школы, производственные кухни.`,

  h1_et: "Rasvapüüduri Puhastus Tallinnas — Tühjendus ja Hooldus",
  h1_en: "Grease Trap Cleaning in Tallinn — Emptying and Maintenance",
  h1_ru: "Очистка жироуловителя в Таллине — откачка и обслуживание",

  h2_et: "Restoranid, kohvikud, suurköögid — hoiame teie kanalisatsiooni probleemideta",
  h2_en: "Restaurants, cafés, large kitchens — we keep your drainage problem-free",
  h2_ru: "Рестораны, кафе, большие кухни — обеспечиваем бесперебойную работу канализации",

  metaTitle_et: "Rasvapüüduri Puhastus Tallinn | Tühjendus Restoranidele — Torupro",
  metaTitle_en: "Grease Trap Cleaning Tallinn | Restaurant & Kitchen Service — Torupro",
  metaTitle_ru: "Очистка жироуловителя Таллин | Обслуживание ресторанов — Torupro",

  metaDesc_et: "Rasvapüüduri tühjendus ja puhastus Tallinnas ✓ Restoranid, köögid, tootmine ✓ Regulaarne hooldus ✓ Üleandmisakt ✓ Fikseeritud hind. Tel: +372 5605 8888",
  metaDesc_en: "Grease trap emptying and cleaning in Tallinn ✓ Restaurants, kitchens, production ✓ Regular maintenance ✓ Handover act ✓ Fixed price. Call: +372 5605 8888",
  metaDesc_ru: "Откачка и очистка жироуловителя в Таллине ✓ Рестораны, кухни, производство ✓ Регулярное обслуживание ✓ Акт приёма ✓ Фиксированная цена. Тел.: +372 5605 8888",

  ogTitle_et: "Rasvapüüduri Puhastus Tallinn — Torupro",
  ogTitle_en: "Grease Trap Cleaning Tallinn — Torupro",
  ogTitle_ru: "Очистка жироуловителя Таллин — Torupro",

  ogDesc_et: "Professionaalne rasvapüüduri tühjendus restoranidele ja köökidele. Regulaarne hooldus fikseeritud hinnaga.",
  ogDesc_en: "Professional grease trap emptying for restaurants and kitchens. Regular maintenance at a fixed price.",
  ogDesc_ru: "Профессиональная откачка жироуловителя для ресторанов и кухонь. Регулярное обслуживание по фиксированной цене.",

  keywords_et: ["rasvapüüduri puhastus Tallinn", "rasvapüüduri tühjendus", "restorani kanalisatsioon Tallinn", "rasvapüüduri hooldus", "rasvapüüdur Tallinn"],
  keywords_en: ["grease trap cleaning Tallinn", "grease trap emptying Tallinn", "restaurant drain Tallinn", "grease interceptor service Tallinn"],
  keywords_ru: ["очистка жироуловителя Таллин", "откачка жироуловителя Таллин", "жироуловитель ресторан Таллин", "обслуживание жироуловителя Таллин"],

  canonicalUrl: "https://torupro.ee/et/teenused/rasvapuuduri-puhastus",
  serviceArea: "Tallinn, Harjumaa",
  priceRange: "€€",

  faq: [
    {
      question_et: "Kui tihti peab rasvapüüdurit puhastama?",
      question_en: "How often does a grease trap need cleaning?",
      question_ru: "Как часто нужно чистить жироуловитель?",
      answer_et: "Restoranidele ja suure koormusega köökidele soovitame puhastust kord kuus. Väiksemate köökide puhul võib piisata iga kahe kuu tagant. Sanitaarinspektsioon võib nõuda ka tihedamat puhastust.",
      answer_en: "For restaurants and high-load kitchens we recommend monthly cleaning. For smaller kitchens every two months may suffice. Sanitary inspections may require more frequent cleaning.",
      answer_ru: "Для ресторанов и кухонь с высокой нагрузкой рекомендуем ежемесячную чистку. Для небольших кухонь может быть достаточно раз в два месяца. Санитарная инспекция может требовать более частой очистки.",
    },
    {
      question_et: "Kas antakse üleandmisakt, mida sanitaarinspektsioonile näidata?",
      question_en: "Is a handover act provided for sanitary inspection purposes?",
      question_ru: "Выдаётся ли акт для предъявления санитарной инспекции?",
      answer_et: "Jah, iga puhastuse järel anname kirjaliku üleandmis-vastuvõtmise akti kuupäeva, teostatud töö kirjelduse ja vastutava isiku allkirjaga.",
      answer_en: "Yes, after every cleaning we provide a written handover act with the date, description of work performed and the signature of the responsible person.",
      answer_ru: "Да, после каждой очистки выдаём письменный акт приёма-передачи с датой, описанием выполненных работ и подписью ответственного лица.",
    },
  ],
},

// ═══════════════════════════════════════════════════════════════════════
// 7. LIIVAPÜÜDURI PUHASTUS  (PRIMARY)
// ═══════════════════════════════════════════════════════════════════════
{
  _type: "service",
  _id: "service-liivapuuduri-puhastus",
  slug: "liivapuuduri-puhastus",
  order: 7,
  index: "07",
  icon: "wash",
  isPrimary: true,

  title_et: "Liivapüüduri Puhastus Tallinn",
  title_en: "Sand Trap Cleaning Tallinn",
  title_ru: "Очистка пескоуловителя Таллин",

  short_et: "Liivapüüduri tühjendus ja puhastus — parklatele, hoovidele, tootmistele. Sadevee kanalisatsioon korras, tulvad välditud.",
  short_en: "Sand trap emptying and cleaning — for car parks, yards and production facilities. Stormwater drainage in order, flooding prevented.",
  short_ru: "Откачка и очистка пескоуловителя — для парковок, дворов и производств. Ливневая канализация в порядке, подтопления предотвращены.",

  long_et: `Liivapüüdur on sademeveesüsteemi oluline komponent — see kogub liiva, savi ja muud tahket materjali, mis muidu ladestub kanalisatsioonitoru põhjale ja põhjustab ummistuse. Tallinna kliimas koguneb materjali eriti aktiivselt kevadel ja sügisel, mistõttu on regulaarne puhastus hädavajalik.

Torupro puhastab liivapüüdureid vakuumseadme abil: imeme välja kogunenud sete, peseme liivapüüduri seinad ja kontrollime ülelaske seisundit. Töö teostame kiirelt ja puhaste käega — parkla või hoov jääb kasutuskõlblikuks.

Puhastamata liivapüüdur põhjustab: parkla üleujutuse vihmase ilmaga, sadeveetoru ummistuse, kanalisatsioonitrahvi ühistult või KOVilt, kallid kaevamistööd ummistuse leidmiseks.

Teenindame parklaoperaatoreid, korteriühistuid, tootmisettevõtteid, kaubanduskeskusi ja eramuid. Pakume hooajalisi (kevad + sügis) või aastaringse hoolduslepinguid.

Pärast puhastust väljastame akti — vajalik keskkonnaloa või tehnokorteri dokumentatsiooni jaoks.`,

  long_en: `A sand trap is a vital component of the stormwater system — it collects sand, clay and other solid material that would otherwise settle at the bottom of sewer pipes and cause a blockage. In Tallinn's climate material accumulates especially actively in spring and autumn, making regular cleaning essential.

Torupro cleans sand traps with vacuum equipment: we suction out accumulated sediment, wash the trap walls and check the overflow condition. Work is carried out quickly and cleanly — the car park or yard remains usable.

An uncleaned sand trap causes: car park flooding in rainy weather, stormwater pipe blockage, drainage fines from the housing association or local authority, and expensive excavation work to locate the blockage.

We serve car park operators, housing associations, manufacturing businesses, shopping centres and private properties. We offer seasonal (spring + autumn) or year-round maintenance contracts.

After cleaning we issue an act — required for environmental permits or utilities room documentation.`,

  long_ru: `Пескоуловитель — важный элемент ливневой канализации: он собирает песок, глину и другой твёрдый материал, который иначе осядет на дне канализационных труб и вызовет засор. В таллинском климате материал накапливается особенно активно весной и осенью, поэтому регулярная очистка необходима.

Torupro очищает пескоуловители вакуумным оборудованием: откачиваем накопившийся осадок, промываем стенки пескоуловителя и проверяем состояние перелива. Работы выполняются быстро и аккуратно — парковка или двор остаются в пригодном состоянии.

Неочищенный пескоуловитель вызывает: затопление парковки в дождливую погоду, засор ливневой трубы, штраф от управляющей компании или местного самоуправления, а также дорогостоящие земляные работы для поиска засора.

Обслуживаем операторов парковок, товарищества собственников, производственные предприятия, торговые центры и частные объекты. Предлагаем сезонные (весна + осень) или круглогодичные контракты на обслуживание.

После очистки выдаём акт — необходим для разрешений на природопользование или документации технического помещения.`,

  h1_et: "Liivapüüduri Puhastus Tallinnas — Sadevee Kanalisatsioon Korras",
  h1_en: "Sand Trap Cleaning in Tallinn — Stormwater Drainage in Order",
  h1_ru: "Очистка пескоуловителя в Таллине — ливневая канализация в порядке",

  h2_et: "Parkla, hoov, tootmine — hoiame sadevee süsteemi toimivana aastaringselt",
  h2_en: "Car park, yard, production — we keep the stormwater system working year-round",
  h2_ru: "Парковка, двор, производство — обеспечиваем работу ливневой системы круглый год",

  metaTitle_et: "Liivapüüduri Puhastus Tallinn | Sadevee Kanalisatsioon — Torupro",
  metaTitle_en: "Sand Trap Cleaning Tallinn | Stormwater Drainage — Torupro",
  metaTitle_ru: "Очистка пескоуловителя Таллин | Ливневая канализация — Torupro",

  metaDesc_et: "Liivapüüduri tühjendus ja puhastus Tallinnas ✓ Parklad, hoovid, tootmine ✓ Kevad+sügis hooldus ✓ Üleandmisakt ✓ Fikseeritud hind. Tel: +372 5605 8888",
  metaDesc_en: "Sand trap emptying and cleaning in Tallinn ✓ Car parks, yards, production ✓ Spring+autumn maintenance ✓ Handover act ✓ Fixed price. Call: +372 5605 8888",
  metaDesc_ru: "Откачка и очистка пескоуловителя в Таллине ✓ Парковки, дворы, производство ✓ Весна+осень обслуживание ✓ Акт ✓ Фиксированная цена. Тел.: +372 5605 8888",

  ogTitle_et: "Liivapüüduri Puhastus Tallinn — Torupro",
  ogTitle_en: "Sand Trap Cleaning Tallinn — Torupro",
  ogTitle_ru: "Очистка пескоуловителя Таллин — Torupro",

  ogDesc_et: "Liivapüüduri tühjendus parklatele, hoovidele, tootmisele. Sadevee kanalisatsioon probleemideta — hooajaline hooldus.",
  ogDesc_en: "Sand trap emptying for car parks, yards and production facilities. Stormwater drainage without problems — seasonal maintenance.",
  ogDesc_ru: "Откачка пескоуловителя для парковок, дворов и производств. Ливневая канализация без проблем — сезонное обслуживание.",

  keywords_et: ["liivapüüduri puhastus Tallinn", "liivapüüdur puhastus", "sadevee süsteemi puhastus", "liivakoguja tühjendus", "parkla kanalisatsioon Tallinn"],
  keywords_en: ["sand trap cleaning Tallinn", "sand interceptor Tallinn", "stormwater drain cleaning Tallinn", "gully cleaning Tallinn"],
  keywords_ru: ["очистка пескоуловителя Таллин", "откачка пескоуловителя Таллин", "ливневая канализация очистка Таллин", "пескоуловитель обслуживание Таллин"],

  canonicalUrl: "https://torupro.ee/et/teenused/liivapuuduri-puhastus",
  serviceArea: "Tallinn, Harjumaa",
  priceRange: "€€",

  faq: [
    {
      question_et: "Millal on liivapüüduri puhastamine kõige olulisem?",
      question_en: "When is sand trap cleaning most important?",
      question_ru: "Когда очистка пескоуловителя наиболее важна?",
      answer_et: "Kevadel pärast liiva- ja lume sulamishooaega ning sügisel enne vihmaperioodi. Soovitame kahekordset aastast puhastust — nii hoiatakse tulvad ette.",
      answer_en: "In spring after the sand and snow melting season and in autumn before the rainy period. We recommend twice-yearly cleaning — this prevents flooding.",
      answer_ru: "Весной после сезона таяния снега и песка и осенью перед дождливым сезоном. Рекомендуем двукратную ежегодную чистку — это предотвращает подтопления.",
    },
    {
      question_et: "Kas puhastuse järel väljastatakse dokument?",
      question_en: "Is a document issued after cleaning?",
      question_ru: "Выдаётся ли документ после очистки?",
      answer_et: "Jah, väljastame kirjaliku akti, mis sisaldab puhastuse kuupäeva, teostuse kirjeldust ja vastutava isiku andmeid. Vajalik KOVi kontrolliks ja keskkonnaloa dokumentatsiooniks.",
      answer_en: "Yes, we issue a written act containing the cleaning date, description of work and the responsible person's details. Required for local authority checks and environmental permit documentation.",
      answer_ru: "Да, выдаём письменный акт, содержащий дату очистки, описание работ и данные ответственного лица. Необходим для проверки местного самоуправления и документации разрешения на природопользование.",
    },
  ],
},

// ═══════════════════════════════════════════════════════════════════════
// 8. TORUMEES TALLINN 24/7  (SECONDARY)
// ═══════════════════════════════════════════════════════════════════════
{
  _type: "service",
  _id: "service-torumees-tallinn-247",
  slug: "torumees-tallinn-247",
  order: 8,
  index: "08",
  icon: "bolt",
  isPrimary: false,

  title_et: "Torumees Tallinn 24/7",
  title_en: "Emergency Plumber Tallinn 24/7",
  title_ru: "Сантехник Таллин 24/7",

  short_et: "Avariiline torumees Tallinnas ööpäev läbi — lekked, torumurrud, WC rikked. Kohal kuni 1 tunniga.",
  short_en: "Emergency plumber in Tallinn around the clock — leaks, burst pipes, WC failures. On site within 1 hour.",
  short_ru: "Аварийный сантехник в Таллине круглосуточно — течи, прорывы труб, неисправности WC. Приедем за 1 час.",

  long_et: `Torustiku avarii ei hoia kellaaega — lekkiv toruliide, murtud veevõtukraan või ummistunud WC võib juhtuda öösel, nädalavahetusel või riigipühal. Torupro avariibrigaad on valmis väljuma 24/7 ja jõuab Tallinna tavaliselt 1 tunni jooksul.

Käsitleme kõiki avariitüüpe: külmaveesurve all purskav lekkimine, kütteradiaatori leke korteris, WC-poti sisemuse rike, valamu- või duššisegisti avarii, ning torumurruga seotud üleujutused.

Avariikutsel hindab meie spetsialist esmalt kahju ulatuse, suleb vajadusel vee ja lahendab rikke nii, et ruumid saaksid kiiresti tavakasutusele tagasi. Dokumenteerime kõik tehtud tööd ja anname kirjaliku akti kindlustusseltsile.

Avariiteenuse hind on fikseeritud ja teile enne töö algust selge. Pärast avariilahendust pakume vajadusel täisremonti parema hinnaga.`,

  long_en: `A plumbing emergency does not keep business hours — a leaking pipe joint, burst stopcock or blocked WC can happen at night, on a weekend or a public holiday. The Torupro emergency team is ready to dispatch 24/7 and reaches Tallinn usually within 1 hour.

We handle all emergency types: pressurised cold-water burst leaks, heating radiator leaks in flats, WC cistern failures, sink or shower mixer breakdowns, and flooding caused by burst pipes.

On an emergency call-out our specialist first assesses the extent of damage, shuts off water where necessary and resolves the fault so that the rooms can return to normal use quickly. We document all work done and provide a written act for the insurance company.

The emergency service price is fixed and clear to you before work begins. After the emergency we can offer a full repair at a preferential price.`,

  long_ru: `Сантехническая авария не следует рабочему расписанию — протечка трубного соединения, лопнувший кран или засор унитаза могут случиться ночью, в выходной или праздничный день. Аварийная бригада Torupro готова выехать 24/7 и добирается до Таллина обычно в течение 1 часа.

Устраняем все типы аварий: прорыв холодного водопровода под давлением, течь отопительного радиатора в квартире, неисправность бачка унитаза, поломку смесителя умывальника или душа, а также подтопления из-за прорыва трубы.

При аварийном вызове специалист сначала оценивает масштаб ущерба, при необходимости перекрывает воду и устраняет неисправность, чтобы помещения как можно скорее вернулись к нормальному использованию. Документируем все выполненные работы и составляем письменный акт для страховой компании.

Стоимость аварийного выезда фиксирована и известна вам до начала работ. После устранения аварии предлагаем при необходимости полноценный ремонт по льготной цене.`,

  h1_et: "Torumees Tallinn 24/7 — Kiire Avariiteenistus",
  h1_en: "Emergency Plumber Tallinn 24/7 — Fast Emergency Service",
  h1_ru: "Сантехник Таллин 24/7 — Быстрая аварийная служба",

  h2_et: "Lekkimine, torumurrud, WC rikked — oleme kohal öösiti, nädalavahetustel ja pühadel",
  h2_en: "Leaks, burst pipes, WC failures — we are there at night, weekends and holidays",
  h2_ru: "Течи, прорывы труб, неисправности WC — приедем ночью, в выходные и праздники",

  metaTitle_et: "Torumees Tallinn 24/7 | Kiire Avariiteenus — Torupro",
  metaTitle_en: "Emergency Plumber Tallinn 24/7 | Fast Response — Torupro",
  metaTitle_ru: "Сантехник Таллин 24/7 | Аварийный выезд — Torupro",

  metaDesc_et: "Avariiline torumees Tallinnas 24/7 ✓ Kohal 1 tunniga ✓ Lekked, torumurrud, WC ✓ Fikseeritud hind ✓ Kindlustusakt. Tel: +372 5605 8888",
  metaDesc_en: "Emergency plumber in Tallinn 24/7 ✓ On site in 1 hour ✓ Leaks, burst pipes, WC ✓ Fixed price ✓ Insurance act. Call: +372 5605 8888",
  metaDesc_ru: "Аварийный сантехник в Таллине 24/7 ✓ Приедем за 1 час ✓ Течи, прорывы, WC ✓ Фиксированная цена ✓ Акт для страховой. Тел.: +372 5605 8888",

  ogTitle_et: "Torumees Tallinn 24/7 — Avariiline Torutöö | Torupro",
  ogTitle_en: "Emergency Plumber Tallinn 24/7 — Fast Plumbing | Torupro",
  ogTitle_ru: "Сантехник Таллин 24/7 — Аварийные работы | Torupro",

  ogDesc_et: "Kiire avariitorumees Tallinnas — 24/7, kohal 1 tunniga, fikseeritud hind, kindlustusakt.",
  ogDesc_en: "Fast emergency plumber in Tallinn — 24/7, on site in 1 hour, fixed price, insurance act.",
  ogDesc_ru: "Быстрый аварийный сантехник в Таллине — 24/7, за 1 час, фиксированная цена, акт для страховой.",

  keywords_et: ["torumees Tallinn", "kiire torumees Tallinn", "avariiline torutöö Tallinn", "avariitorumees Tallinn", "torumees öösiti Tallinn"],
  keywords_en: ["emergency plumber Tallinn", "24 hour plumber Tallinn", "plumber Tallinn", "urgent plumber Tallinn"],
  keywords_ru: ["сантехник Таллин", "аварийный сантехник Таллин", "сантехник круглосуточно Таллин", "срочный сантехник Таллин"],

  canonicalUrl: "https://torupro.ee/et/teenused/torumees-tallinn-247",
  serviceArea: "Tallinn, Harjumaa",
  priceRange: "€€",

  faq: [
    {
      question_et: "Kui kiiresti jõuab avariitorumees kohale?",
      question_en: "How quickly does the emergency plumber arrive?",
      question_ru: "Как быстро приедет аварийный сантехник?",
      answer_et: "Tallinnas tavaliselt 1 tunni jooksul. Harjumaa ääremaadesse võib kuluda kuni 1,5 tundi. Anname ETA kinnituse kohe pärast kõnet.",
      answer_en: "In Tallinn usually within 1 hour. To the outer parts of Harjumaa it may take up to 1.5 hours. We confirm the ETA immediately after the call.",
      answer_ru: "По Таллину обычно в течение 1 часа. До отдалённых районов уезда Харью может потребоваться до 1,5 часов. Подтверждаем время прибытия сразу после звонка.",
    },
    {
      question_et: "Kas öösel on kõrgem hind?",
      question_en: "Is there a higher rate at night?",
      question_ru: "Действует ли ночной тариф?",
      answer_et: "Öö- ja nädalavahetuse avariiväljakutsetel kehtib lisatariif, mis on teile enne töö algust selge. Päevasel tööajal planeeritud töödel öötariif ei kehti.",
      answer_en: "Night and weekend emergency call-outs carry a surcharge that is made clear to you before work begins. Daytime planned work does not attract an out-of-hours rate.",
      answer_ru: "Аварийные вызовы в ночное время и в выходные дни сопровождаются надбавкой, которую вам сообщают до начала работ. На плановые работы в рабочее время ночной тариф не распространяется.",
    },
  ],
},

// ═══════════════════════════════════════════════════════════════════════
// 9. VEETORUDE PAIGALDUS  (SECONDARY)
// ═══════════════════════════════════════════════════════════════════════
{
  _type: "service",
  _id: "service-veetorude-paigaldus",
  slug: "veetorude-paigaldus",
  order: 9,
  index: "09",
  icon: "pipe",
  isPrimary: false,

  title_et: "Veetorude Paigaldus Tallinn",
  title_en: "Water Pipe Installation Tallinn",
  title_ru: "Монтаж водопровода Таллин",

  short_et: "Veevarustussüsteemi paigaldus, vahetus ja remont — PP-R, PEX, vask. Nii uusehitised kui ka rekonstrueerimised.",
  short_en: "Water supply system installation, replacement and repair — PP-R, PEX, copper. New builds and renovations alike.",
  short_ru: "Монтаж, замена и ремонт системы водоснабжения — PP-R, PEX, медь. Новое строительство и реконструкция.",

  long_et: `Veetorude paigaldus on üks põhilisi torutöö liike — olgu tegemist uue kodu veevarustussüsteemi rajamisega või vanade roostes torudega paneelmajas. Torupro meistrid on sertifitseeritud töötama nii polüpropüleeni (PP-R), ristsidestatud polüetüleeni (PEX) kui ka vask- ja roostevabaterastorudega.

Tänapäevase veevarustuse rajamisel eelistame PP-R või PEX materjali — need on kestvad, katlakivikindlad ja lihtsamini paigaldatavad kui vask. Histooriliste hoonete restaureerimisel kasutame vajadusel vasktorusid, mis sobivad visuaalselt paremini.

Teostame terviklikku veevarustustööd: torude trassimine, läbiviigu puurimine, torude ühendus veetõusuni, segistite paigaldus, veemõõtjate vahetamine, survekatse ja kasutuselevõtt. Töö lõpus saab tellija teostusdokumendi.

Harjumaa uusehitiste puhul kooskõlastame vajadusel projektiga — meie kogemus hõlmab nii ühepereelamu täielikku veevarustusprojekti kui ka korteri osarekonstruktsiooni.`,

  long_en: `Water pipe installation is one of the core plumbing services — whether building a water supply system in a new home or replacing old corroded pipes in a panel-block apartment. Torupro plumbers are certified to work with polypropylene (PP-R), cross-linked polyethylene (PEX) and copper and stainless-steel pipes.

For modern water supply installations we prefer PP-R or PEX — they are durable, scale-resistant and easier to install than copper. When restoring historic buildings we use copper pipes where needed, as they suit the visual context better.

We carry out complete water supply work: pipe routing, drilling for penetrations, pipe connection to the risers, mixer installation, water meter replacement, pressure testing and commissioning. The client receives completion documentation at the end.

For new builds in Harjumaa we coordinate with the project where needed — our experience spans from a complete water supply project for a single-family house to a partial flat renovation.`,

  long_ru: `Монтаж водопровода — одна из основных сантехнических работ: будь то устройство системы водоснабжения в новом доме или замена старых проржавевших труб в панельном доме. Мастера Torupro сертифицированы для работы с полипропиленом (PP-R), сшитым полиэтиленом (PEX), а также медными и нержавеющими трубами.

При современном монтаже водоснабжения мы предпочитаем PP-R или PEX — они долговечны, устойчивы к накипи и проще в монтаже, чем медь. При реставрации исторических зданий при необходимости используем медные трубы, которые лучше вписываются в интерьер.

Выполняем полный комплекс работ: прокладка трубопровода, бурение проходок, подключение к стоякам, монтаж смесителей, замена водосчётчиков, испытание давлением и пуск в эксплуатацию. В конце работы заказчик получает исполнительную документацию.

Для новостроек в уезде Харью при необходимости согласовываем проект: наш опыт охватывает как полный проект водоснабжения частного дома, так и частичную реконструкцию квартиры.`,

  h1_et: "Veetorude Paigaldus Tallinnas — PP-R, PEX, Vask",
  h1_en: "Water Pipe Installation in Tallinn — PP-R, PEX, Copper",
  h1_ru: "Монтаж водопровода в Таллине — PP-R, PEX, медь",

  h2_et: "Uus veevarustussüsteem või vanade torude vahetus — täispakett teostusdokumendiga",
  h2_en: "New water supply system or old pipe replacement — full package with completion documentation",
  h2_ru: "Новая система водоснабжения или замена старых труб — полный пакет с исполнительной документацией",

  metaTitle_et: "Veetorude Paigaldus Tallinn | Veevarustuse Paigaldus — Torupro",
  metaTitle_en: "Water Pipe Installation Tallinn | Water Supply — Torupro",
  metaTitle_ru: "Монтаж водопровода Таллин | Водоснабжение — Torupro",

  metaDesc_et: "Veetorude paigaldus ja vahetus Tallinnas ✓ PP-R, PEX, vask ✓ Teostusdokument ✓ Survekatse ✓ Garantii. Helista: +372 5605 8888",
  metaDesc_en: "Water pipe installation and replacement in Tallinn ✓ PP-R, PEX, copper ✓ Completion documentation ✓ Pressure test ✓ Guarantee. Call: +372 5605 8888",
  metaDesc_ru: "Монтаж и замена водопроводных труб в Таллине ✓ PP-R, PEX, медь ✓ Исполнительная документация ✓ Испытание давлением ✓ Гарантия. Тел.: +372 5605 8888",

  ogTitle_et: "Veetorude Paigaldus Tallinn — Torupro",
  ogTitle_en: "Water Pipe Installation Tallinn — Torupro",
  ogTitle_ru: "Монтаж водопровода Таллин — Torupro",

  ogDesc_et: "Veevarustussüsteemi paigaldus ja vahetus PP-R, PEX või vasktoruga. Teostusdokument ja garantii.",
  ogDesc_en: "Water supply installation and replacement with PP-R, PEX or copper pipe. Completion documentation and guarantee.",
  ogDesc_ru: "Монтаж и замена системы водоснабжения трубами PP-R, PEX или медь. Исполнительная документация и гарантия.",

  keywords_et: ["veetorude vahetus Tallinn", "veevarustuse paigaldus Tallinn", "veetorude remont Tallinn", "PP-R toru paigaldus", "PEX toru Tallinn"],
  keywords_en: ["water pipe installation Tallinn", "water supply Tallinn", "pipe replacement Tallinn", "PP-R pipe Tallinn"],
  keywords_ru: ["монтаж водопровода Таллин", "замена водопроводных труб Таллин", "водоснабжение Таллин", "трубы PP-R Таллин"],

  canonicalUrl: "https://torupro.ee/et/teenused/veetorude-paigaldus",
  serviceArea: "Tallinn, Harjumaa",
  priceRange: "€€",

  faq: [
    {
      question_et: "Mis materjali toru on parem — PP-R, PEX või vask?",
      question_en: "Which pipe material is better — PP-R, PEX or copper?",
      question_ru: "Какой материал трубы лучше — PP-R, PEX или медь?",
      answer_et: "Kõigil on eelised. PP-R on soodne ja kestvus, PEX on paindlik ja sobib põrandaküttega, vask on pikaajalise traditsiooniga ja sobib ajaloolistesse hoonetesse. Valime koos teie vajadustest lähtudes.",
      answer_en: "Each has advantages. PP-R is affordable and durable, PEX is flexible and suits underfloor heating, copper has a long tradition and suits historic buildings. We choose together based on your needs.",
      answer_ru: "У каждого есть преимущества. PP-R — доступный и долговечный, PEX — гибкий и подходит для тёплых полов, медь — с долгой традицией и подходит для исторических зданий. Выбираем вместе исходя из ваших потребностей.",
    },
  ],
},

// ═══════════════════════════════════════════════════════════════════════
// 10. TORUDE VAHETUS KORTERIS  (SECONDARY)
// ═══════════════════════════════════════════════════════════════════════
{
  _type: "service",
  _id: "service-torude-vahetus-korteris",
  slug: "torude-vahetus-korteris",
  order: 10,
  index: "10",
  icon: "route",
  isPrimary: false,

  title_et: "Torude Vahetamine Korteris",
  title_en: "Pipe Replacement in Apartment",
  title_ru: "Замена труб в квартире",

  short_et: "Vanade roostes ja lekkinud torude täielik vahetus korteris — veevarustus ja kanalisatsioon. Minimaalse müra ja tolmuga.",
  short_en: "Complete replacement of old corroded and leaking pipes in the apartment — water supply and drainage. Minimal noise and dust.",
  short_ru: "Полная замена старых проржавевших и протекающих труб в квартире — водоснабжение и канализация. Минимум шума и пыли.",

  long_et: `Kümned aastad töötanud galvaniseeritud terastorud ja malmist kanalisatsioon vajavad lõpuks vahetust. Protsess on delikaatne — töötame kellegi kodus, seega on puhtus, korrektne ajaplaneerimine ja minimaalne häirimine meile ülimalt oluline.

Teostame korteris torude täisvahetust etappide kaupa: esmalt demonteerime vanad torud, siis paigaldame uue veevarustuse (PP-R või PEX) ja kanalisatsiooni (PVC), kontrollime survekatsetega ja anname üle.

Enamik korterivahetus projekte lõpeb 1–3 päevaga (olenevalt korteri suurusest). Kooskõlastame veekatkestused maja veemeistraga ette ja teatame naaberkorterilistele vajadusel.

Töö käigus katame põrandad ja teeme kahekordse koristuse pärast töö lõpetamist. Saate täieliku teostusdokumendi ja 12 kuu garantii.`,

  long_en: `Galvanised steel pipes and cast-iron drainage that have been working for decades eventually need replacement. The process is delicate — we are working in someone's home, so cleanliness, proper scheduling and minimal disruption are paramount.

We carry out complete pipe replacement in apartments in stages: first removing old pipes, then installing new water supply (PP-R or PEX) and drainage (PVC), checking with pressure tests and handing over.

Most apartment replacement projects are completed in 1–3 days (depending on apartment size). We coordinate water shut-offs with the building caretaker in advance and inform neighbouring residents where necessary.

During work we cover floors and carry out a thorough clean-up after completion. You receive complete documentation and a 12-month guarantee.`,

  long_ru: `Оцинкованные стальные трубы и чугунная канализация, проработавшие десятилетия, в конечном счёте нуждаются в замене. Процесс деликатный — мы работаем в чужом доме, поэтому чистота, чёткое планирование и минимальные неудобства для нас крайне важны.

Выполняем полную замену труб в квартире поэтапно: сначала демонтируем старые трубы, затем монтируем новое водоснабжение (PP-R или PEX) и канализацию (ПВХ), проверяем испытанием давлением и сдаём объект.

Большинство проектов замены труб в квартире завершается за 1–3 дня (в зависимости от размера квартиры). Заранее согласовываем отключение воды с сантехником дома и при необходимости уведомляем соседей.

В ходе работ накрываем полы и проводим двойную уборку после окончания. Получаете полную исполнительную документацию и гарантию 12 месяцев.`,

  h1_et: "Torude Vahetamine Korteris — Täisremont Garantiiga",
  h1_en: "Pipe Replacement in Apartment — Complete Renovation with Guarantee",
  h1_ru: "Замена труб в квартире — полная замена с гарантией",

  h2_et: "Vanad roostes galvaanikatorud välja, uued PP-R või PEX torud sisse — puhaste kätega",
  h2_en: "Old corroded galvanised pipes out, new PP-R or PEX pipes in — clean and tidy",
  h2_ru: "Старые проржавевшие трубы — долой, новые PP-R или PEX — на место. Чисто и аккуратно",

  metaTitle_et: "Torude Vahetus Korteris Tallinn | Veetorud, Kanalisatsioon — Torupro",
  metaTitle_en: "Pipe Replacement in Apartment Tallinn | Water & Drain — Torupro",
  metaTitle_ru: "Замена труб в квартире Таллин | Водопровод и канализация — Torupro",

  metaDesc_et: "Torude täisvahetus korteris Tallinnas ✓ PP-R, PEX, PVC ✓ 1–3 päeva ✓ Minimaalne häirimine ✓ Teostusdokument. Tel: +372 5605 8888",
  metaDesc_en: "Complete pipe replacement in apartment in Tallinn ✓ PP-R, PEX, PVC ✓ 1–3 days ✓ Minimal disruption ✓ Documentation. Call: +372 5605 8888",
  metaDesc_ru: "Полная замена труб в квартире в Таллине ✓ PP-R, PEX, ПВХ ✓ 1–3 дня ✓ Минимальные неудобства ✓ Документация. Тел.: +372 5605 8888",

  ogTitle_et: "Torude Vahetus Korteris Tallinn — Torupro",
  ogTitle_en: "Pipe Replacement in Apartment Tallinn — Torupro",
  ogTitle_ru: "Замена труб в квартире Таллин — Torupro",

  ogDesc_et: "Vanade torude täisvahetus korteris 1–3 päevaga. PP-R, PEX, PVC — garantiiga ja teostusdokumendiga.",
  ogDesc_en: "Complete old pipe replacement in apartment in 1–3 days. PP-R, PEX, PVC — with guarantee and documentation.",
  ogDesc_ru: "Полная замена старых труб в квартире за 1–3 дня. PP-R, PEX, ПВХ — с гарантией и документацией.",

  keywords_et: ["torude vahetus korteris Tallinn", "vanade torude remont Tallinn", "korteri torutööd Tallinn", "torude asendamine korteris"],
  keywords_en: ["pipe replacement apartment Tallinn", "flat pipe replacement Tallinn", "old pipe replacement Tallinn"],
  keywords_ru: ["замена труб квартира Таллин", "замена водопровода квартира Таллин", "сантехника квартира Таллин"],

  canonicalUrl: "https://torupro.ee/et/teenused/torude-vahetus-korteris",
  serviceArea: "Tallinn, Harjumaa",
  priceRange: "€€€",

  faq: [
    {
      question_et: "Kas korraga vahetatakse nii vesi- kui ka kanalisatsioonitoru?",
      question_en: "Are both water supply and drainage pipes replaced at the same time?",
      question_ru: "Заменяются ли одновременно трубы водоснабжения и канализации?",
      answer_et: "Soovitame vahetada mõlemad korraga, kui korter käib avamise alla — see säästab töö- ja lõhkumiskulusid tulevikus. Saame teha ka ainult ühe süsteemi vahetus.",
      answer_en: "We recommend replacing both at the same time if the apartment is being opened up — it saves on labour and demolition costs in future. We can also replace just one system.",
      answer_ru: "Рекомендуем заменить обе системы одновременно, если квартира всё равно вскрывается — это экономит затраты на работу и демонтаж в будущем. Можем заменить и только одну систему.",
    },
  ],
},


// ═══════════════════════════════════════════════════════════════════════
// 11. PÜSTAKUTE VAHETUS  (SECONDARY)
// ═══════════════════════════════════════════════════════════════════════
{
  _type: "service",
  _id: "service-puestakute-vahetus",
  slug: "puestakute-vahetus",
  order: 11,
  index: "11",
  icon: "route",
  isPrimary: false,

  title_et: "Püstakute Vahetus Tallinn",
  title_en: "Riser Pipe Replacement Tallinn",
  title_ru: "Замена стояков Таллин",

  short_et: "Kortermaja vee- ja kanalisatsioonipüstakute vahetus — koordineerime kogu majaga, hoiame katkestuse minimaalsena.",
  short_en: "Apartment building water and drainage riser replacement — we coordinate with the whole building, keeping disruption minimal.",
  short_ru: "Замена стояков водоснабжения и канализации в многоквартирном доме — координируем со всем домом, минимизируем перерывы.",

  long_et: `Kortermaja püstakute vahetus on mahukas torutöö projekt, mis nõuab hoolikat koordineerimist kõigi elanike ja korteriühistuga. Torupro on teostanud kümneid kortermajade täispüstakute vahetusi Tallinnas ja Harjumaal — teame, kuidas tööd organiseerida nii, et elanike elu häiritaks minimaalselt.

Töö käib korruse kaupa: teostame veekatkestuse, vahetame ühe püstakusektsiooni, taastame vee ja liigume edasi järgmisele korrusele. Päevane veekatkestus on tavaliselt 2–4 tundi.

Kasutame PP-R või PEX veetorude jaoks ja PVC kanalisatsioonitorudele — materjalid kestavad vähemalt 50 aastat. Kõik tööd dokumenteeritakse täielikult korteriühistu raamatupidamise jaoks.

Pakume korteriühistutele hinnapakkumise koos töö ajakava ja eelarve prognoosiga. Projekti juht hoiab ühistu esimeest kursis iga tööpäeva lõpus.`,

  long_en: `Riser pipe replacement in an apartment building is a substantial plumbing project requiring careful coordination with all residents and the housing association. Torupro has completed dozens of full riser replacements in apartment buildings in Tallinn and Harjumaa — we know how to organise the work to cause minimal disruption to residents' lives.

Work proceeds floor by floor: we perform the water shut-off, replace one riser section, restore the water supply and move on to the next floor. The daily water interruption is typically 2–4 hours.

We use PP-R or PEX for water supply pipes and PVC for drainage — materials that last at least 50 years. All work is fully documented for the housing association's records.

We provide housing associations with a quote including a work schedule and budget forecast. The project manager keeps the association chair informed at the end of each working day.`,

  long_ru: `Замена стояков в многоквартирном доме — масштабный сантехнический проект, требующий тщательной координации со всеми жильцами и товариществом собственников. Torupro выполнила десятки замен стояков в Таллине и уезде Харью: мы знаем, как организовать работу с минимальными неудобствами для жильцов.

Работы ведутся поэтажно: выполняем отключение воды, заменяем секцию стояка, восстанавливаем подачу воды и переходим на следующий этаж. Ежедневное отключение воды обычно составляет 2–4 часа.

Для водоснабжения используем PP-R или PEX, для канализации — ПВХ: материалы служат не менее 50 лет. Все работы полностью документируются для бухгалтерии товарищества собственников.

Предоставляем товариществам собственников коммерческое предложение с графиком работ и прогнозом бюджета. Руководитель проекта информирует председателя товарищества в конце каждого рабочего дня.`,

  h1_et: "Püstakute Vahetus Tallinnas — Kortermaja Torude Rekonstruktsioon",
  h1_en: "Riser Replacement in Tallinn — Apartment Block Pipe Reconstruction",
  h1_ru: "Замена стояков в Таллине — реконструкция труб многоквартирного дома",

  h2_et: "Korteriühistuga kooskõlastatud püstakute vahetus — minimaalne veekatkestus, maksimaalne kvaliteet",
  h2_en: "Riser replacement coordinated with the housing association — minimal water outage, maximum quality",
  h2_ru: "Замена стояков в координации с товариществом — минимальное отключение воды, максимальное качество",

  metaTitle_et: "Püstakute Vahetus Tallinn | Kortermaja Torutöö — Torupro",
  metaTitle_en: "Riser Pipe Replacement Tallinn | Apartment Building — Torupro",
  metaTitle_ru: "Замена стояков Таллин | Многоквартирный дом — Torupro",

  metaDesc_et: "Kanalisatsiooni- ja veepüstakute vahetus kortermajades Tallinnas ✓ Koordineeritud ühistuga ✓ PP-R, PEX, PVC ✓ 50+ a kestvus. Tel: +372 5605 8888",
  metaDesc_en: "Water and drainage riser replacement in apartment buildings in Tallinn ✓ Coordinated with association ✓ PP-R, PEX, PVC ✓ 50+ year lifespan. Call: +372 5605 8888",
  metaDesc_ru: "Замена стояков водоснабжения и канализации в Таллине ✓ Согласовано с ТСЖ ✓ PP-R, PEX, ПВХ ✓ Срок службы 50+ лет. Тел.: +372 5605 8888",

  ogTitle_et: "Püstakute Vahetus Tallinn — Torupro",
  ogTitle_en: "Riser Pipe Replacement Tallinn — Torupro",
  ogTitle_ru: "Замена стояков Таллин — Torupro",

  ogDesc_et: "Kortermaja vee- ja kanalisatsioonipüstakute vahetus Tallinnas. Koordineeritud ühistuga, PP-R ja PVC, 50a kestvus.",
  ogDesc_en: "Water and drainage riser replacement in Tallinn apartment buildings. Coordinated with association, PP-R and PVC, 50-year lifespan.",
  ogDesc_ru: "Замена стояков в таллинских многоквартирных домах. Координация с ТСЖ, PP-R и ПВХ, срок службы 50 лет.",

  keywords_et: ["kanalisatsiooni püstak Tallinn", "veepüstaku vahetus Tallinn", "kortermaja torude remont Tallinn", "püstaku vahetus", "korteriühistu torutöö"],
  keywords_en: ["riser pipe replacement Tallinn", "apartment riser Tallinn", "building plumbing Tallinn"],
  keywords_ru: ["замена стояков Таллин", "стояк канализации Таллин", "стояк водоснабжения Таллин", "многоквартирный дом сантехника Таллин"],

  canonicalUrl: "https://torupro.ee/et/teenused/puestakute-vahetus",
  serviceArea: "Tallinn, Harjumaa",
  priceRange: "€€€",
  faq: [],
},

// ═══════════════════════════════════════════════════════════════════════
// 12. VANNITOA TORUTÖÖD  (SECONDARY)
// ═══════════════════════════════════════════════════════════════════════
{
  _type: "service",
  _id: "service-vannitoa-torutood",
  slug: "vannitoa-torutood",
  order: 12,
  index: "12",
  icon: "bath",
  isPrimary: false,

  title_et: "Vannitoa Torutööd Tallinn",
  title_en: "Bathroom Plumbing Works Tallinn",
  title_ru: "Сантехнические работы в ванной Таллин",

  short_et: "Vannitoa täielik torutöö — dušš, vann, WC, valamu, segistid, torude paigaldus ja remont. Remondivalmis vannituba garantiiga.",
  short_en: "Complete bathroom plumbing — shower, bath, WC, washbasin, mixers, pipe installation and repair. Bathroom ready for renovation, guaranteed.",
  short_ru: "Полная сантехника ванной — душ, ванна, WC, умывальник, смесители, монтаж и ремонт труб. Ванная готова к отделке, с гарантией.",

  long_et: `Vannitoa torutööd hõlmavad kõiki sanitaartehnilisi töid vannitoas ja WC-s: torude paigaldus ja ühendus, WC-poti ja dušši paigaldus, vanni ühendus, valamu ja segistite paigaldus ning vanade seadmete demonteerimine.

Teostame nii väiksemaid remonditöid (segisti vahetus, WC-poti vahetus) kui ka täielikku vannitoa sanitaartehnika paigaldust rekonstrueerimise käigus. Töötame tihedas koostöös plaatijate ja ehitusmeistritega.

Kõik torustiku ühendused kaetakse survekatsetega enne plaatimist — nii on kindel, et leket ei teki pärast seina sulgemist. See on meie standardprotseduur.

Pakume valmis "võti kätte" torutööteenust vannitoale: teete oma plaani, meie teeme torustiku valmis maksimaalselt 1–2 päevaga.`,

  long_en: `Bathroom plumbing work covers all sanitary-technical work in the bathroom and WC: pipe installation and connection, WC pan and shower installation, bath connection, washbasin and mixer installation and removal of old fittings.

We carry out both smaller repair jobs (mixer replacement, WC replacement) and complete bathroom sanitary installation during a full renovation. We work closely with tilers and builders.

All pipe connections are pressure-tested before tiling — ensuring no leak develops after the wall is closed. This is our standard procedure.

We offer a turnkey plumbing service for bathrooms: you draw up your plan, we have the pipework ready in a maximum of 1–2 days.`,

  long_ru: `Сантехнические работы в ванной охватывают все санитарно-технические работы в ванной комнате и туалете: монтаж и подключение труб, установка унитаза и душа, подключение ванны, установка умывальника и смесителей, а также демонтаж старого оборудования.

Выполняем как небольшие ремонтные работы (замена смесителя, замена унитаза), так и полный монтаж сантехники при комплексной реконструкции. Работаем в тесном сотрудничестве с плиточниками и строителями.

Все трубные соединения проверяются испытанием давлением до укладки плитки — это гарантирует, что течь не возникнет после закрытия стены. Это наша стандартная процедура.

Предлагаем услугу «под ключ» для сантехники ванной: вы составляете план — мы готовим трубопровод максимум за 1–2 дня.`,

  h1_et: "Vannitoa Torutööd Tallinnas — WC, Dušš, Vann, Segistid",
  h1_en: "Bathroom Plumbing in Tallinn — WC, Shower, Bath, Mixers",
  h1_ru: "Сантехника ванной в Таллине — WC, душ, ванна, смесители",

  h2_et: "Täielik sanitaartehnika paigaldus remondivalmis vannitoale — survekatse enne plaatimist",
  h2_en: "Complete sanitary installation for renovation-ready bathroom — pressure test before tiling",
  h2_ru: "Полный монтаж сантехники для ванной под отделку — испытание давлением до укладки плитки",

  metaTitle_et: "Vannitoa Torutööd Tallinn | Sanitaartehnika Paigaldus — Torupro",
  metaTitle_en: "Bathroom Plumbing Tallinn | Sanitary Installation — Torupro",
  metaTitle_ru: "Сантехника ванной Таллин | Монтаж оборудования — Torupro",

  metaDesc_et: "Vannitoa torutööd Tallinnas ✓ WC, dušš, vann, segistid ✓ Survekatse ✓ Plaatijatega koostöö ✓ Garantii. Tel: +372 5605 8888",
  metaDesc_en: "Bathroom plumbing in Tallinn ✓ WC, shower, bath, mixers ✓ Pressure test ✓ Coordination with tilers ✓ Guarantee. Call: +372 5605 8888",
  metaDesc_ru: "Сантехника в ванной в Таллине ✓ WC, душ, ванна, смесители ✓ Испытание давлением ✓ Сотрудничество с плиточниками ✓ Гарантия. Тел.: +372 5605 8888",

  ogTitle_et: "Vannitoa Torutööd Tallinn — Torupro",
  ogTitle_en: "Bathroom Plumbing Tallinn — Torupro",
  ogTitle_ru: "Сантехника ванной Таллин — Torupro",

  ogDesc_et: "Vannitoa täielik sanitaartehnika paigaldus Tallinnas. WC, dušš, vann — survekatse enne plaatimist, garantii.",
  ogDesc_en: "Complete bathroom sanitary installation in Tallinn. WC, shower, bath — pressure test before tiling, guarantee.",
  ogDesc_ru: "Полный монтаж сантехники ванной в Таллине. WC, душ, ванна — испытание давлением до укладки плитки, гарантия.",

  keywords_et: ["vannitoa torutööd Tallinn", "sanitaartehnilised tööd Tallinn", "vannitoa remont torud", "WC paigaldus Tallinn", "dušši paigaldus Tallinn"],
  keywords_en: ["bathroom plumbing Tallinn", "bathroom renovation Tallinn", "WC installation Tallinn", "shower installation Tallinn"],
  keywords_ru: ["сантехника ванная Таллин", "монтаж сантехники Таллин", "установка унитаза Таллин", "установка душа Таллин"],

  canonicalUrl: "https://torupro.ee/et/teenused/vannitoa-torutood",
  serviceArea: "Tallinn, Harjumaa",
  priceRange: "€€",
  faq: [],
},

// ═══════════════════════════════════════════════════════════════════════
// 13. KÜTTESÜSTEEMIDE REMONT  (SECONDARY)
// ═══════════════════════════════════════════════════════════════════════
{
  _type: "service",
  _id: "service-kuuttesusteemide-remont",
  slug: "kuuttesusteemide-remont",
  order: 13,
  index: "13",
  icon: "spark",
  isPrimary: false,

  title_et: "Küttesüsteemide Remont Tallinn",
  title_en: "Heating System Repair Tallinn",
  title_ru: "Ремонт систем отопления Таллин",

  short_et: "Radiaatorite ühendamine, küttesüsteemi torude paigaldus ja remont, lekkepunktide likvideerimine — kogu Tallinnas.",
  short_en: "Radiator connection, heating system pipe installation and repair, leak elimination — across all of Tallinn.",
  short_ru: "Подключение радиаторов, монтаж и ремонт труб отопления, устранение течей — по всему Таллину.",

  long_et: `Küttesüsteemi rike talvel on ebamugav ja sageli ka kulukas, kui reageerida liiga aeglaselt. Torupro torutöö meeskond tegeleb ka küttesüsteemide remondi ja paigaldusega — radiaatorite ühendamine, küttesüsteemi torude vahetus ja lekke likvideerimine.

Teostame tsentraalkütte radiaatorite vahetuse ja lisamise, küttetorude läbiviigu, lekkekoha leidmise ja parandamise, ning elektrikütte integreerimisega seonduvaid torutöid.

Oluline: radiaatori ühendamine tsentraalküttele nõuab korteriühistuga kooskõlastamist ja sageli ka ühistu veemeistrilt luba. Torupro on kogenud nii tehnilise teostuse kui ka bürokraatliku kooskõlastamisega.

Küttetorude materjali valikul lähtume hoonetüübist: paneelmaades sageli polüpropüleen, uusehitistes vask või PEX.`,

  long_en: `A heating system failure in winter is uncomfortable and often costly if the response is too slow. The Torupro plumbing team also handles heating system repair and installation — radiator connection, heating pipe replacement and leak elimination.

We carry out central-heating radiator replacement and addition, routing of heating pipes, leak location and repair, and plumbing work related to electric heating integration.

Important: connecting a radiator to central heating requires coordination with the housing association and often permission from the building caretaker. Torupro has experience with both the technical execution and the bureaucratic coordination.

For heating pipe material we choose based on building type: polypropylene is common in panel blocks, copper or PEX in new builds.`,

  long_ru: `Неисправность системы отопления зимой неудобна, а при слишком медленном реагировании — ещё и дорогостоящей. Сантехническая команда Torupro занимается также ремонтом и монтажом систем отопления: подключением радиаторов, заменой труб отопления и устранением течей.

Выполняем замену и добавление радиаторов центрального отопления, прокладку труб отопления, поиск и ремонт течей, а также сантехнические работы, связанные с интеграцией электрического обогрева.

Важно: подключение радиатора к центральному отоплению требует согласования с товариществом собственников и зачастую разрешения сантехника дома. Torupro имеет опыт как в технической реализации, так и в бюрократическом согласовании.

При выборе материала труб отопления исходим из типа здания: в панельных домах нередко полипропилен, в новостройках — медь или PEX.`,

  h1_et: "Küttesüsteemide Remont Tallinnas — Radiaatorid, Küttetorud, Lekked",
  h1_en: "Heating System Repair in Tallinn — Radiators, Heating Pipes, Leaks",
  h1_ru: "Ремонт систем отопления в Таллине — радиаторы, трубы, течи",

  h2_et: "Radiaatori ühendamine, küttesüsteemi lekke likvideerimine — kiire ja professionaalne",
  h2_en: "Radiator connection, heating system leak elimination — fast and professional",
  h2_ru: "Подключение радиатора, устранение течи отопления — быстро и профессионально",

  metaTitle_et: "Küttesüsteemide Remont Tallinn | Radiaatorid, Küttetorud — Torupro",
  metaTitle_en: "Heating System Repair Tallinn | Radiators, Heating Pipes — Torupro",
  metaTitle_ru: "Ремонт систем отопления Таллин | Радиаторы, трубы — Torupro",

  metaDesc_et: "Küttesüsteemide remont Tallinnas ✓ Radiaatori ühendamine ✓ Küttetorude paigaldus ✓ Lekke likvideerimine ✓ Garantii. Tel: +372 5605 8888",
  metaDesc_en: "Heating system repair in Tallinn ✓ Radiator connection ✓ Heating pipe installation ✓ Leak elimination ✓ Guarantee. Call: +372 5605 8888",
  metaDesc_ru: "Ремонт систем отопления в Таллине ✓ Подключение радиатора ✓ Монтаж труб отопления ✓ Устранение течи ✓ Гарантия. Тел.: +372 5605 8888",

  ogTitle_et: "Küttesüsteemide Remont Tallinn — Torupro",
  ogTitle_en: "Heating System Repair Tallinn — Torupro",
  ogTitle_ru: "Ремонт систем отопления Таллин — Torupro",

  ogDesc_et: "Küttesüsteemi remont, radiaatorite ühendamine ja lekke likvideerimine Tallinnas. Kiire ja professionaalne.",
  ogDesc_en: "Heating system repair, radiator connection and leak elimination in Tallinn. Fast and professional.",
  ogDesc_ru: "Ремонт системы отопления, подключение радиаторов и устранение течей в Таллине. Быстро и профессионально.",

  keywords_et: ["küttetorude paigaldus Tallinn", "radiaatori ühendamine Tallinn", "küttesüsteemi remont Tallinn", "küttesüsteem lekib Tallinn"],
  keywords_en: ["heating system repair Tallinn", "radiator installation Tallinn", "heating pipe Tallinn"],
  keywords_ru: ["ремонт отопления Таллин", "подключение радиатора Таллин", "трубы отопления Таллин", "течь отопления Таллин"],

  canonicalUrl: "https://torupro.ee/et/teenused/kuuttesusteemide-remont",
  serviceArea: "Tallinn, Harjumaa",
  priceRange: "€€",
  faq: [],
},

// ═══════════════════════════════════════════════════════════════════════
// 14. LEKKE OTSIMINE  (SECONDARY)
// ═══════════════════════════════════════════════════════════════════════
{
  _type: "service",
  _id: "service-lekke-otsimine",
  slug: "lekke-otsimine",
  order: 14,
  index: "14",
  icon: "drain",
  isPrimary: false,

  title_et: "Lekke Otsimine Tallinn",
  title_en: "Leak Detection Tallinn",
  title_ru: "Поиск течи Таллин",

  short_et: "Varjatud veelekke tuvastamine ilma seinte avamiseta — termokaamerate, niiskusmõõtjate ja survekatsega. Täpne lekkekoha leidmine.",
  short_en: "Hidden water leak detection without opening walls — thermal cameras, moisture meters and pressure testing. Precise leak location.",
  short_ru: "Обнаружение скрытой утечки воды без вскрытия стен — тепловизоры, влагомеры и испытание давлением. Точное определение места течи.",

  long_et: `Varjatud leke on vaikne, aga kallis probleem — vesi võib niisutada seinu, põrandaid ja lagedisi nädalaid enne, kui kahju silmaga nähtavaks muutub. Mida varem lekke asukoht täpselt tuvastatakse, seda väiksem on kahjustus.

Kasutame mitmeid diagnostikaviise: termokaameras näeme temperatuurierinevusi, mis viitavad niiskuse kogunemisele; niiskusmõõtjad mõõdavad seina niiskusesisaldust; survekatse isoleerib lekkinud torulõigu; kaamerauuring kinnitab visuaalselt.

Lekketuvastus on eriti vajalik enne renoveerimist (et mitte plaatida märg sein kinni), korduva niiskuse kaebuste puhul, kindlustushüvitise taotlemisel (vajab lekkeakti) ning ühistute ja haldajate niiskuse kaardistamise puhul.

Anname täpse lekkeakti koos foto- ja videotõenditega — vajalik kindlustusseltsile ja korteriühistule.`,

  long_en: `A hidden leak is a silent but expensive problem — water can be saturating walls, floors and ceilings for weeks before visible damage appears. The sooner the leak location is pinpointed, the smaller the damage.

We use multiple diagnostic methods: thermal cameras reveal temperature differences indicating moisture accumulation; moisture meters measure wall moisture content; pressure testing isolates the leaking pipe section; camera inspection provides visual confirmation.

Leak detection is especially needed before renovation (to avoid tiling over a wet wall), for recurring moisture complaints, when claiming insurance (requires a leak act) and for moisture mapping by housing associations and property managers.

We provide a precise leak act with photo and video evidence — required by the insurance company and housing association.`,

  long_ru: `Скрытая течь — тихая, но дорогостоящая проблема: вода может пропитывать стены, полы и потолки неделями, пока ущерб не станет виден невооружённым глазом. Чем раньше точно определено место течи, тем меньше ущерб.

Используем несколько диагностических методов: тепловизор выявляет перепады температур, указывающие на скопление влаги; влагомеры измеряют содержание влаги в стене; испытание давлением изолирует протекающий участок трубы; видеодиагностика подтверждает визуально.

Поиск течи особенно необходим перед ремонтом (чтобы не укладывать плитку на влажную стену), при повторяющихся жалобах на сырость, при подаче заявления на страховое возмещение (требуется акт об утечке), а также при картировании влажности управляющими компаниями и товариществами.

Выдаём точный акт об утечке с фото- и видеодоказательствами — необходим для страховой компании и товарищества собственников.`,

  h1_et: "Lekke Otsimine Tallinnas — Varjatud Veeleke Tuvastamine",
  h1_en: "Leak Detection in Tallinn — Hidden Water Leak Location",
  h1_ru: "Поиск течи в Таллине — обнаружение скрытой утечки воды",

  h2_et: "Termokaamera, niiskusmõõtja, survekatse — täpne lekkekoht ilma seinte lõhkumiseta",
  h2_en: "Thermal camera, moisture meter, pressure test — precise leak location without breaking walls",
  h2_ru: "Тепловизор, влагомер, испытание давлением — точное место течи без разрушения стен",

  metaTitle_et: "Lekke Otsimine Tallinn | Varjatud Veeleke — Torupro",
  metaTitle_en: "Leak Detection Tallinn | Hidden Water Leak — Torupro",
  metaTitle_ru: "Поиск течи Таллин | Скрытая утечка воды — Torupro",

  metaDesc_et: "Veelekke leidmine Tallinnas ✓ Termokaamera ✓ Niiskusmõõtja ✓ Survekatse ✓ Lekkeakt kindlustusele. Tel: +372 5605 8888",
  metaDesc_en: "Water leak detection in Tallinn ✓ Thermal camera ✓ Moisture meter ✓ Pressure test ✓ Leak act for insurance. Call: +372 5605 8888",
  metaDesc_ru: "Поиск течи в Таллине ✓ Тепловизор ✓ Влагомер ✓ Испытание давлением ✓ Акт для страховой. Тел.: +372 5605 8888",

  ogTitle_et: "Lekke Otsimine Tallinn — Torupro",
  ogTitle_en: "Leak Detection Tallinn — Torupro",
  ogTitle_ru: "Поиск течи Таллин — Torupro",

  ogDesc_et: "Varjatud veelekke tuvastamine ilma seinte avamiseta. Termokaamera, survekatse, lekkeakt kindlustusele.",
  ogDesc_en: "Hidden water leak detection without opening walls. Thermal camera, pressure test, leak act for insurance.",
  ogDesc_ru: "Обнаружение скрытой утечки без вскрытия стен. Тепловизор, испытание давлением, акт для страховой.",

  keywords_et: ["veelekke leidmine Tallinn", "varjatud lekke otsing Tallinn", "lekkekoha leidmine Tallinn", "niiskus seinas Tallinn"],
  keywords_en: ["leak detection Tallinn", "hidden leak Tallinn", "water leak Tallinn", "pipe leak Tallinn"],
  keywords_ru: ["поиск течи Таллин", "обнаружение течи Таллин", "скрытая утечка Таллин", "влажность стены Таллин"],

  canonicalUrl: "https://torupro.ee/et/teenused/lekke-otsimine",
  serviceArea: "Tallinn, Harjumaa",
  priceRange: "€€",
  faq: [],
},

// ═══════════════════════════════════════════════════════════════════════
// 15. VÄLISKANALISATSIOONI EHITUS  (SECONDARY)
// ═══════════════════════════════════════════════════════════════════════
{
  _type: "service",
  _id: "service-valiskanalisatsiooni-ehitus",
  slug: "valiskanalisatsiooni-ehitus",
  order: 15,
  index: "15",
  icon: "route",
  isPrimary: false,

  title_et: "Väliskanalisatsiooni Ehitus Tallinn",
  title_en: "Outdoor Sewer Construction Tallinn",
  title_ru: "Строительство наружной канализации Таллин",

  short_et: "Välistrasside ehitus ja remont — maa-alused kanalisatsioonitorud, ühendus kanalisatsioonivõrku, kaevud. Eramud ja ärihooned.",
  short_en: "Outdoor sewer construction and repair — underground drainage pipes, connection to sewer network, manholes. Houses and commercial buildings.",
  short_ru: "Строительство и ремонт наружных трасс — подземные канализационные трубы, подключение к сети, колодцы. Дома и коммерческие здания.",

  long_et: `Väliskanalisatsiooni ehitamine hõlmab maakaevetöid, drenaaži- ja kanalisatsioonitoru paigaldust maa alla, kaevude ehitust ning ühendust olemasoleva kanalisatsioonivõrguga. See on mahukas töö, mis nõuab korrektset projekteerimist ja nõuetekohast materjali.

Kasutame PVC SN8 välistrassi torusid, mis on koormuskindlad ning sobivad Eesti kliimatingimustega. Rajame nõutavad tühjenduskaevud vastavalt AS Tallinna Vesi nõuetele.

Väliskanalisatsiooni ehitame nii uusehitistele (ühendus kanalisatsioonivõrku) kui ka remondime vananenud väliskanalisatsioone (roostunud betoontorud → PVC). Kaevetööd teostame koostöös kaevuri- ja trassiehitusfirmadega.

Kõik väliskanalisatsiooni projekti tööd dokumenteeritakse täielikult — kaeviku foto, torude paigalduse akt ja lõplik teostusjoonestik. Vajalikud kooskõlastused ühistuveega teeme ise.`,

  long_en: `Outdoor sewer construction involves excavation work, installing drainage and sewage pipes underground, building manholes and connecting to the existing sewer network. This is substantial work requiring correct design and compliant materials.

We use PVC SN8 outdoor pipe with load-bearing capacity suitable for Estonian climate conditions. We build the required inspection manholes in accordance with AS Tallinna Vesi requirements.

We build outdoor sewers for new constructions (connection to sewer network) and repair ageing outdoor drainage (corroded concrete pipes → PVC). Excavation is performed in partnership with excavation and pipeline construction firms.

All outdoor sewer project work is fully documented — trench photos, pipe installation act and final as-built drawings. We handle the required coordination with the water utility ourselves.`,

  long_ru: `Строительство наружной канализации включает земляные работы, прокладку дренажных и канализационных труб в землю, устройство колодцев и подключение к существующей канализационной сети. Это масштабная работа, требующая правильного проектирования и нормативных материалов.

Используем трубы ПВХ SN8 для наружных трасс с нагрузочной способностью, подходящей для климатических условий Эстонии. Устраиваем необходимые смотровые колодцы в соответствии с требованиями AS Tallinna Vesi.

Строим наружную канализацию для новых объектов (подключение к сети) и ремонтируем устаревшие наружные канализации (проржавевшие бетонные трубы → ПВХ). Земляные работы выполняем совместно с экскаваторными и трассоукладочными организациями.

Все работы по проекту наружной канализации полностью документируются: фото траншеи, акт укладки труб и итоговые исполнительные чертежи. Необходимые согласования с водоканалом выполняем самостоятельно.`,

  h1_et: "Väliskanalisatsiooni Ehitus Tallinnas — Trasside Rajamine ja Remont",
  h1_en: "Outdoor Sewer Construction in Tallinn — Pipeline Installation and Repair",
  h1_ru: "Строительство наружной канализации в Таллине — прокладка и ремонт трасс",

  h2_et: "Maa-alused kanalisatsioonitorud, kaevud, ühendus võrku — täispakett dokumentatsiooniga",
  h2_en: "Underground sewer pipes, manholes, network connection — full package with documentation",
  h2_ru: "Подземные канализационные трубы, колодцы, подключение к сети — полный пакет с документацией",

  metaTitle_et: "Väliskanalisatsiooni Ehitus Tallinn | Trasside Rajamine — Torupro",
  metaTitle_en: "Outdoor Sewer Construction Tallinn | Pipeline Installation — Torupro",
  metaTitle_ru: "Строительство наружной канализации Таллин | Прокладка трасс — Torupro",

  metaDesc_et: "Väliskanalisatsiooni ehitus ja remont Tallinnas ✓ PVC SN8 ✓ Kaevud ✓ Tallinna Vesi kooskõlastus ✓ Teostusdokumendid. Tel: +372 5605 8888",
  metaDesc_en: "Outdoor sewer construction and repair in Tallinn ✓ PVC SN8 ✓ Manholes ✓ Tallinna Vesi coordination ✓ As-built documentation. Call: +372 5605 8888",
  metaDesc_ru: "Строительство и ремонт наружной канализации в Таллине ✓ ПВХ SN8 ✓ Колодцы ✓ Согласование с водоканалом ✓ Исполнительная документация. Тел.: +372 5605 8888",

  ogTitle_et: "Väliskanalisatsiooni Ehitus Tallinn — Torupro",
  ogTitle_en: "Outdoor Sewer Construction Tallinn — Torupro",
  ogTitle_ru: "Строительство наружной канализации Таллин — Torupro",

  ogDesc_et: "Väliskanalisatsioon maa alla: trassiehitus, kaevud, ühendus kanalisatsioonivõrku. Täispakett dokumentatsiooniga.",
  ogDesc_en: "Underground outdoor sewer: pipeline construction, manholes, connection to sewer network. Full package with documentation.",
  ogDesc_ru: "Наружная канализация под землю: прокладка трасс, колодцы, подключение к сети. Полный пакет с документацией.",

  keywords_et: ["välistrasside ehitus Tallinn", "kanalisatsioonitrassi remont Tallinn", "maa-alused torud Tallinn", "väliskanalisatsioon Tallinn", "kanalisatsioon eramajale Tallinn"],
  keywords_en: ["outdoor sewer Tallinn", "sewer construction Tallinn", "underground pipe Tallinn", "sewer connection Tallinn"],
  keywords_ru: ["наружная канализация Таллин", "прокладка канализации Таллин", "подключение канализации Таллин", "канализационная трасса Таллин"],

  canonicalUrl: "https://torupro.ee/et/teenused/valiskanalisatsiooni-ehitus",
  serviceArea: "Tallinn, Harjumaa",
  priceRange: "€€€",
  faq: [],
},

// ═══════════════════════════════════════════════════════════════════════
// 16. TORUDE HOOLDUS  (SECONDARY)
// ═══════════════════════════════════════════════════════════════════════
{
  _type: "service",
  _id: "service-torude-hooldus",
  slug: "torude-hooldus",
  order: 16,
  index: "16",
  icon: "weld",
  isPrimary: false,

  title_et: "Torude Hooldus Tallinn",
  title_en: "Pipe Maintenance Tallinn",
  title_ru: "Техническое обслуживание труб Таллин",

  short_et: "Ennetav torustiku hooldus — survepesu, kontroll, kaamerauuring ja väike remont ühes paketis. Väldi kulukaid avariisid.",
  short_en: "Preventive pipe maintenance — hydro-jetting, inspection, camera survey and minor repairs in one package. Avoid costly emergencies.",
  short_ru: "Профилактическое техническое обслуживание труб — гидропромывка, осмотр, видеодиагностика и мелкий ремонт в одном пакете. Предотвращайте дорогостоящие аварии.",

  long_et: `Ennetav hooldus on kordades odavam kui rikke kõrvaldamine — see põhimõte kehtib eriti torustike puhul. Regulaarne torustiku ülevaatus ja puhastus pikendab süsteemi eluiga, hoiab avariid eemal ja tagab, et veekulu on mõistlik.

Torupro torude hoolduspakett sisaldab: visuaalset ülevaatust, survepesu vähemalt ühes põhitorus, liitmike ja sulgarmatuuride kontrolli, ning kaamerauuring vajadusel. Hoolduse järel saate kirjaliku aruande soovitustega.

Sobib korteriühistutele aastase hoolduslepinguna — pakume kvartalipõhist käiku, millega spetsialist käib läbi maja torustiku kriitilised punktid ja teeb vajalikud ennetavad toimingud.

Samuti sobib eramajaomanikele hooajalise tegevusena — sügisene hooldus tagab, et küttesüsteem on talveks valmis, ja kevadine hooldus kontrollib, et külmakahjustusi ei tekkinud.`,

  long_en: `Preventive maintenance is many times cheaper than fixing a failure — this principle applies especially to pipe systems. Regular pipe inspection and cleaning extends the system lifespan, keeps emergencies at bay and ensures water consumption is reasonable.

The Torupro pipe maintenance package includes: visual inspection, hydro-jetting of at least one main pipe, inspection of fittings and shut-off valves, and camera inspection where needed. After maintenance you receive a written report with recommendations.

Suitable for housing associations as an annual maintenance contract — we offer quarterly visits where a specialist goes through the building's critical pipe points and carries out necessary preventive actions.

Also suitable for private homeowners as a seasonal activity — autumn maintenance ensures the heating system is ready for winter, and spring maintenance checks that no frost damage occurred.`,

  long_ru: `Профилактическое обслуживание многократно дешевле устранения аварии — этот принцип особенно актуален для трубных систем. Регулярный осмотр и очистка труб продлевают срок службы системы, предотвращают аварии и обеспечивают разумное водопотребление.

Пакет технического обслуживания труб Torupro включает: визуальный осмотр, гидропромывку не менее одной магистральной трубы, проверку фитингов и запорной арматуры, а при необходимости — видеодиагностику. После обслуживания вы получаете письменный отчёт с рекомендациями.

Подходит для товариществ собственников в качестве годового сервисного контракта — предлагаем ежеквартальные визиты, при которых специалист проверяет критические точки трубопровода здания и выполняет необходимые профилактические действия.

Подходит также для владельцев частных домов как сезонное мероприятие: осеннее обслуживание гарантирует готовность системы отопления к зиме, а весеннее — проверяет отсутствие морозных повреждений.`,

  h1_et: "Torude Hooldus Tallinnas — Ennetav Torustiku Kontroll",
  h1_en: "Pipe Maintenance in Tallinn — Preventive Pipe System Inspection",
  h1_ru: "Техническое обслуживание труб в Таллине — профилактический осмотр трубопровода",

  h2_et: "Survepesu + kontroll + kaamerauuring — hoolduspakett korteriühistutele ja eramajaomanikele",
  h2_en: "Hydro-jetting + inspection + camera survey — maintenance package for housing associations and homeowners",
  h2_ru: "Гидропромывка + осмотр + видеодиагностика — пакет обслуживания для ТСЖ и владельцев частных домов",

  metaTitle_et: "Torude Hooldus Tallinn | Ennetav Torustiku Kontroll — Torupro",
  metaTitle_en: "Pipe Maintenance Tallinn | Preventive Inspection — Torupro",
  metaTitle_ru: "Обслуживание труб Таллин | Профилактический осмотр — Torupro",

  metaDesc_et: "Torustiku ennetav hooldus Tallinnas ✓ Survepesu + kontroll + kaamerauuring ✓ Hoolduslepingud ühistutele ✓ Kirjalik aruanne. Tel: +372 5605 8888",
  metaDesc_en: "Preventive pipe maintenance in Tallinn ✓ Hydro-jetting + inspection + camera ✓ Maintenance contracts for associations ✓ Written report. Call: +372 5605 8888",
  metaDesc_ru: "Профилактическое обслуживание труб в Таллине ✓ Промывка + осмотр + видеодиагностика ✓ Контракты для ТСЖ ✓ Письменный отчёт. Тел.: +372 5605 8888",

  ogTitle_et: "Torude Hooldus Tallinn — Torupro",
  ogTitle_en: "Pipe Maintenance Tallinn — Torupro",
  ogTitle_ru: "Обслуживание труб Таллин — Torupro",

  ogDesc_et: "Ennetav torustiku hoolduspakett: survepesu, kontroll, kaamerauuring. Hoolduslepingud ühistutele ja eramajaomanikele.",
  ogDesc_en: "Preventive pipe maintenance package: hydro-jetting, inspection, camera survey. Contracts for associations and homeowners.",
  ogDesc_ru: "Профилактический пакет обслуживания труб: промывка, осмотр, видеодиагностика. Контракты для ТСЖ и владельцев домов.",

  keywords_et: ["torustiku hooldus Tallinn", "tehnosüsteemide hooldus Tallinn", "ennetav hooldus torustik", "toruhooldus Tallinn"],
  keywords_en: ["pipe maintenance Tallinn", "preventive maintenance Tallinn", "plumbing maintenance Tallinn"],
  keywords_ru: ["обслуживание трубопровода Таллин", "профилактика труб Таллин", "техническое обслуживание сантехника Таллин"],

  canonicalUrl: "https://torupro.ee/et/teenused/torude-hooldus",
  serviceArea: "Tallinn, Harjumaa",
  priceRange: "€€",
  faq: [],
},

// ═══════════════════════════════════════════════════════════════════════
// 17. SURVEPESUAUTO  (SECONDARY)
// ═══════════════════════════════════════════════════════════════════════
{
  _type: "service",
  _id: "service-survepesuauto",
  slug: "survepesuauto",
  order: 17,
  index: "17",
  icon: "wash",
  isPrimary: false,

  title_et: "Survepesuauto Tallinn",
  title_en: "Jetting Truck Service Tallinn",
  title_ru: "Услуга машины высокого давления Таллин",

  short_et: "Survepesuauto väliskanalisatsioonile ja suuremahulisele torustikupuhastusele — kuni 150 mm torud, 100 m voolik, kogu Tallinn.",
  short_en: "Jetting truck for outdoor sewers and large-scale pipe cleaning — pipes up to 150 mm, 100 m hose, all of Tallinn.",
  short_ru: "Машина высокого давления для наружной канализации и крупномасштабной очистки — трубы до 150 мм, шланг 100 м, весь Таллин.",

  long_et: `Survepesuauto on vajalik siis, kui tegemist on suurte väliskanalisatsioonitorude ummistuse või põhjaliku puhastusega — majakanalisatsiooni survepesuseadme rõhk ja vooliku pikkus ei ole piisavad. Meie survepesuauto töötab kuni 200 baariga ja voolik ulatub kuni 100 meetrini.

Sobib: kortermaja väliskanalisatsiooni ummistuse puhastamiseks, haljasalade ja parklade sadeveetorude läbipesuks, tootmishoonete ja toiduettevõtete maa-aluste kanalisatsioonide puhastamiseks, ning kriisiolukordades suurte ummistuste kiireks likvideerimiseks.

Survepesuauto kasutamine on kulutõhusam kui kaevamine — ummistus eemaldatakse ilma maa kaevamata, mis säästab aega ja raha.

Töö eel kontrollime kamerapäisega kanalisatsioonitoru seisundit, et valida õige surve ja düüs. Vajadusel kombineerime survepesu vakuumtõstmisega (imeme välja lahti rebitud materjali).`,

  long_en: `A jetting truck is needed when dealing with large outdoor sewer blockages or thorough cleaning — the pressure and hose length of a building jetter are insufficient. Our jetting truck operates at up to 200 bar with a hose reaching up to 100 metres.

Suitable for: clearing blockages in apartment building outdoor sewers, flushing stormwater pipes in green areas and car parks, cleaning underground sewers in production buildings and food businesses, and rapid clearing of major blockages in crisis situations.

Using a jetting truck is more cost-effective than excavation — the blockage is removed without digging, saving time and money.

Before work we check the sewer pipe condition with a camera head to choose the correct pressure and nozzle. Where needed we combine jetting with vacuum extraction (suctioning out the dislodged material).`,

  long_ru: `Машина высокого давления необходима, когда речь идёт о засорах в крупных трубах наружной канализации или масштабной очистке — давления и длины шланга стационарного агрегата недостаточно. Наша машина работает при давлении до 200 бар, длина шланга — до 100 метров.

Подходит для: прочистки засоров в наружной канализации многоквартирных домов, промывки ливневых труб на газонах и парковках, очистки подземной канализации производственных зданий и пищевых предприятий, а также быстрого устранения крупных засоров в аварийных ситуациях.

Использование машины высокого давления эффективнее раскопок — засор устраняется без земляных работ, что экономит время и деньги.

Перед работой проверяем состояние канализационной трубы камерой, чтобы выбрать правильное давление и насадку. При необходимости сочетаем промывку с вакуумной откачкой (отсасываем разрушенный материал).`,

  h1_et: "Survepesuauto Tallinnas — Suure Väliskanalisatsiooni Puhastus",
  h1_en: "Jetting Truck in Tallinn — Large Outdoor Sewer Cleaning",
  h1_ru: "Машина высокого давления в Таллине — очистка крупной наружной канализации",

  h2_et: "Kuni 200 bar, 100 m voolik — väliskanalisatsiooni ummistus läheb lahti garantiiga",
  h2_en: "Up to 200 bar, 100 m hose — outdoor sewer blockage cleared with guarantee",
  h2_ru: "До 200 бар, шланг 100 м — засор наружной канализации устраняем с гарантией",

  metaTitle_et: "Survepesuauto Tallinn | Väliskanalisatsiooni Puhastus — Torupro",
  metaTitle_en: "Jetting Truck Tallinn | Outdoor Sewer Cleaning — Torupro",
  metaTitle_ru: "Машина высокого давления Таллин | Очистка наружной канализации — Torupro",

  metaDesc_et: "Survepesuauto väliskanalisatsioonile Tallinnas ✓ Kuni 200 bar ✓ 100 m voolik ✓ Parklad, hoovid, tootmine. Tel: +372 5605 8888",
  metaDesc_en: "Jetting truck for outdoor sewers in Tallinn ✓ Up to 200 bar ✓ 100 m hose ✓ Car parks, yards, production. Call: +372 5605 8888",
  metaDesc_ru: "Машина высокого давления для наружной канализации в Таллине ✓ До 200 бар ✓ Шланг 100 м ✓ Парковки, дворы, производство. Тел.: +372 5605 8888",

  ogTitle_et: "Survepesuauto Tallinn — Torupro",
  ogTitle_en: "Jetting Truck Tallinn — Torupro",
  ogTitle_ru: "Машина высокого давления Таллин — Torupro",

  ogDesc_et: "Survepesuauto väliskanalisatsioonile Tallinnas: kuni 200 bar, 100 m voolik, kaameraga kontroll.",
  ogDesc_en: "Jetting truck for outdoor sewers in Tallinn: up to 200 bar, 100 m hose, camera check.",
  ogDesc_ru: "Машина высокого давления для наружной канализации в Таллине: до 200 бар, шланг 100 м, контроль камерой.",

  keywords_et: ["survepesuauto Tallinn", "kanalisatsiooni survepesuauto", "väliskanalisatsiooni puhastus Tallinn", "suur ummistus kanalisatsioon Tallinn"],
  keywords_en: ["jetting truck Tallinn", "sewer jetting truck Tallinn", "high pressure cleaning Tallinn"],
  keywords_ru: ["машина высокого давления Таллин", "промывка канализации машиной Таллин", "очистка засора машиной Таллин"],

  canonicalUrl: "https://torupro.ee/et/teenused/survepesuauto",
  serviceArea: "Tallinn, Harjumaa",
  priceRange: "€€€",
  faq: [],
},

// ═══════════════════════════════════════════════════════════════════════
// 18. FEKAALIVEDU  (SECONDARY)
// ═══════════════════════════════════════════════════════════════════════
{
  _type: "service",
  _id: "service-fekaalivedu",
  slug: "fekaalivedu",
  order: 18,
  index: "18",
  icon: "drain",
  isPrimary: false,

  title_et: "Fekaalivedu Tallinn",
  title_en: "Sewage Tanker Service Tallinn",
  title_ru: "Ассенизаторские услуги Таллин",

  short_et: "Kuivkäimlate, kogumiskaevude ja septikute tühjendamine — vakuumautoga, kiiresti ja korralikult. Harjumaa ja Tallinn.",
  short_en: "Emptying dry toilets, collection pits and septic tanks — by vacuum tanker, fast and neat. Harjumaa and Tallinn.",
  short_ru: "Откачка дворовых туалетов, накопительных ям и септиков — ассенизаторской машиной, быстро и аккуратно. Уезд Харью и Таллин.",

  long_et: `Fekaalivedu on teenus, mida vajavad kõik need, kellel puudub ühendus kanalisatsioonivõrku — kuivkäimlad, kogumiskaevud, septikud ning kämpingute ja ürituste ajutised WC-d.

Torupro fekaaliveoauto on varustatud tugeva vakuumpumbaga, mis imeb välja ka paksemad setted. Sõidame Tallinnasse, Harjumaale ja lähivaldadesse — vastame üldjuhul sama- või järgmisel tööpäeval.

Tühjendame: kuivkäimlaid ja väljakäimlaid, betoon- ja plastkogumiskaeve, mehhaniseerimata septikuid, ehitusplatside kemikaalide tualette, ürituste ajutisi WC-sid.

Pärast tühjendust saab soovi korral üleandmisakt veomahu ja kuupäevaga — vajalik keskkonnaloa aruandluseks.`,

  long_en: `Sewage tanker service is needed by everyone without a sewer network connection — dry toilets, collection pits, septic tanks and temporary event toilets.

The Torupro sewage tanker is equipped with a powerful vacuum pump capable of extracting even denser sludge. We travel to Tallinn, Harjumaa and nearby municipalities — we generally respond the same or next working day.

We empty: dry and outdoor toilets, concrete and plastic collection pits, non-mechanised septic tanks, construction site chemical toilets, and temporary event WCs.

After emptying a handover act with the volume and date is available on request — required for environmental permit reporting.`,

  long_ru: `Ассенизаторские услуги необходимы всем, у кого нет подключения к канализационной сети: дворовые туалеты, накопительные ямы, септики и временные туалеты для мероприятий.

Ассенизаторская машина Torupro оснащена мощным вакуумным насосом, способным откачивать даже более плотный осадок. Работаем в Таллине, уезде Харью и ближайших волостях — как правило, реагируем в тот же или следующий рабочий день.

Откачиваем: дворовые и уличные туалеты, бетонные и пластиковые накопительные ямы, немеханизированные септики, химические туалеты на строительных площадках, временные туалеты для мероприятий.

По желанию после откачки выдаём акт с объёмом и датой — необходим для отчётности по разрешению на природопользование.`,

  h1_et: "Fekaalivedu Tallinnas — Kogumiskaevude ja Septikute Tühjendamine",
  h1_en: "Sewage Tanker Service in Tallinn — Collection Pits and Septic Tank Emptying",
  h1_ru: "Ассенизаторские услуги в Таллине — откачка накопительных ям и септиков",

  h2_et: "Kuivkäimlad, kogumiskaevud, septikud — vakuumautoga kiiresti ja korralikult",
  h2_en: "Dry toilets, collection pits, septic tanks — by vacuum tanker, fast and neat",
  h2_ru: "Дворовые туалеты, накопительные ямы, септики — ассенизаторской машиной, быстро и аккуратно",

  metaTitle_et: "Fekaalivedu Tallinn | Kogumiskaevude Tühjendus — Torupro",
  metaTitle_en: "Sewage Tanker Tallinn | Collection Pit Emptying — Torupro",
  metaTitle_ru: "Ассенизатор Таллин | Откачка накопительных ям — Torupro",

  metaDesc_et: "Fekaalivedu Tallinnas ja Harjumaal ✓ Kogumiskaevud, septikud, kuivkäimlad ✓ Sama/järgmine tööpäev ✓ Üleandmisakt. Tel: +372 5605 8888",
  metaDesc_en: "Sewage tanker service in Tallinn and Harjumaa ✓ Collection pits, septic tanks, dry toilets ✓ Same/next working day ✓ Handover act. Call: +372 5605 8888",
  metaDesc_ru: "Ассенизаторские услуги в Таллине и уезде Харью ✓ Накопительные ямы, септики, туалеты ✓ Тот же/следующий рабочий день ✓ Акт откачки. Тел.: +372 5605 8888",

  ogTitle_et: "Fekaalivedu Tallinn — Torupro",
  ogTitle_en: "Sewage Tanker Tallinn — Torupro",
  ogTitle_ru: "Ассенизатор Таллин — Torupro",

  ogDesc_et: "Kogumiskaevude, septikute ja kuivkäimlade tühjendamine vakuumautoga Tallinnas ja Harjumaal.",
  ogDesc_en: "Collection pit, septic tank and dry toilet emptying by vacuum tanker in Tallinn and Harjumaa.",
  ogDesc_ru: "Откачка накопительных ям, септиков и туалетов ассенизаторской машиной в Таллине и уезде Харью.",

  keywords_et: ["fekaalivedu Tallinn", "kogumiskaev tühjendamine Tallinn", "septiku tühjendamine Tallinn", "kuivkäimla tühjendamine Tallinn", "ässenisaator Tallinn"],
  keywords_en: ["sewage tanker Tallinn", "septic tank emptying Tallinn", "cesspit emptying Tallinn"],
  keywords_ru: ["ассенизатор Таллин", "откачка септика Таллин", "откачка ямы Таллин", "ассенизаторская машина Таллин"],

  canonicalUrl: "https://torupro.ee/et/teenused/fekaalivedu",
  serviceArea: "Tallinn, Harjumaa",
  priceRange: "€€",
  faq: [],
},

// ═══════════════════════════════════════════════════════════════════════
// 19. KAEVUDE PUHASTUS  (SECONDARY)
// ═══════════════════════════════════════════════════════════════════════
{
  _type: "service",
  _id: "service-kaevude-puhastus",
  slug: "kaevude-puhastus",
  order: 19,
  index: "19",
  icon: "drain",
  isPrimary: false,

  title_et: "Kaevude Puhastus Tallinn",
  title_en: "Well Cleaning Tallinn",
  title_ru: "Чистка колодцев Таллин",

  short_et: "Kaevude puhastus ja desinfitseerimine — joogiveekaevud, kanalisatsioonikaevud, kogumiskaevud. Kvaliteetne vesi ja toimiv kanalisatsioon.",
  short_en: "Well cleaning and disinfection — drinking water wells, sewer manholes, collection wells. Clean water and functioning drainage.",
  short_ru: "Чистка и дезинфекция колодцев — питьевые колодцы, канализационные колодцы, накопительные ямы. Чистая вода и исправная канализация.",

  long_et: `Kaevude puhastus on vajalik nii joogiveekaevude hügieeni tagamiseks kui ka kanalisatsioonikaevude toimivuse säilitamiseks. Puhastamata kaev võib muutuda saastunuks, täituda settega ja lõpuks lakata töötamast.

Joogiveekaevude puhastus hõlmab: setete eemaldamist kaev põhjast (vakuumiga), kaev seinte pesu ja kraapimist, ning desinfitseerimist nõuetekohase kloori lahusega. Pärast puhastust võtame soovi korral veeproovi.

Kanalisatsioonikaevude (vaatluskaevud, kogumiskaevud) puhastus hõlmab: setete imemist vakuumautoga, kaev seinte survepesu ning ülelaske kontrolli.

Teenindame eramuid, talumajapidamisi, korteriühistuid ja ärikinnisvara. Reageerimisaeg tavaliselt 1–3 tööpäeva.`,

  long_en: `Well cleaning is necessary both to maintain drinking water hygiene and to keep sewer manholes functioning. An uncleaned well can become contaminated, fill with sediment and eventually stop working.

Drinking water well cleaning includes: removal of sediment from the well bottom (vacuum), cleaning and scraping of well walls, and disinfection with a correctly dosed chlorine solution. We can take a water sample on request after cleaning.

Sewer manhole (inspection and collection manhole) cleaning includes: vacuum extraction of sediment, pressure washing of manhole walls and inspection of the overflow.

We serve private houses, farms, housing associations and commercial properties. Response time is usually 1–3 working days.`,

  long_ru: `Чистка колодцев необходима как для поддержания гигиены питьевой воды, так и для сохранения работоспособности канализационных колодцев. Неочищенный колодец может загрязниться, заполниться осадком и в конечном счёте выйти из строя.

Чистка питьевых колодцев включает: удаление осадка со дна колодца (вакуумом), очистку и зачистку стенок колодца, а также дезинфекцию правильно дозированным раствором хлора. По желанию после очистки берём пробу воды.

Чистка канализационных колодцев (смотровых и накопительных) включает: вакуумную откачку осадка, промывку стенок под давлением и проверку перелива.

Обслуживаем частные дома, фермерские хозяйства, товарищества собственников и коммерческую недвижимость. Время реагирования обычно 1–3 рабочих дня.`,

  h1_et: "Kaevude Puhastus Tallinnas — Joogivesi ja Kanalisatsioonikaevud",
  h1_en: "Well Cleaning in Tallinn — Drinking Water Wells and Sewer Manholes",
  h1_ru: "Чистка колодцев в Таллине — питьевые колодцы и канализационные колодцы",

  h2_et: "Sete välja, seinad puhtaks, vesi tervislik — professionaalne kaevu puhastus",
  h2_en: "Sediment out, walls clean, water healthy — professional well cleaning",
  h2_ru: "Осадок — долой, стенки — чистыми, вода — здоровой: профессиональная чистка колодца",

  metaTitle_et: "Kaevude Puhastus Tallinn | Joogiveekaev, Kanalisatsioonikaevu — Torupro",
  metaTitle_en: "Well Cleaning Tallinn | Drinking Water Well, Manhole — Torupro",
  metaTitle_ru: "Чистка колодцев Таллин | Питьевой, Канализационный колодец — Torupro",

  metaDesc_et: "Kaevude puhastus Tallinnas ✓ Joogiveekaevud ✓ Kanalisatsioonikaevud ✓ Desinfitseerimine ✓ Veeproov soovi korral. Tel: +372 5605 8888",
  metaDesc_en: "Well cleaning in Tallinn ✓ Drinking water wells ✓ Sewer manholes ✓ Disinfection ✓ Water sample on request. Call: +372 5605 8888",
  metaDesc_ru: "Чистка колодцев в Таллине ✓ Питьевые колодцы ✓ Канализационные колодцы ✓ Дезинфекция ✓ Проба воды по запросу. Тел.: +372 5605 8888",

  ogTitle_et: "Kaevude Puhastus Tallinn — Torupro",
  ogTitle_en: "Well Cleaning Tallinn — Torupro",
  ogTitle_ru: "Чистка колодцев Таллин — Torupro",

  ogDesc_et: "Joogiveekaevude ja kanalisatsioonikaevude puhastus Tallinnas. Desinfitseerimine, veeproov, kogumiskaevude tühjendamine.",
  ogDesc_en: "Drinking water well and sewer manhole cleaning in Tallinn. Disinfection, water sample, collection well emptying.",
  ogDesc_ru: "Чистка питьевых и канализационных колодцев в Таллине. Дезинфекция, проба воды, откачка накопительных колодцев.",

  keywords_et: ["kaevude puhastus Tallinn", "joogiveekaev puhastus Tallinn", "kanalisatsioonikaevu puhastus Tallinn", "kaev desinfitseerimine Tallinn"],
  keywords_en: ["well cleaning Tallinn", "water well cleaning Tallinn", "manhole cleaning Tallinn"],
  keywords_ru: ["чистка колодцев Таллин", "очистка питьевого колодца Таллин", "чистка канализационного колодца Таллин"],

  canonicalUrl: "https://torupro.ee/et/teenused/kaevude-puhastus",
  serviceArea: "Tallinn, Harjumaa",
  priceRange: "€€",
  faq: [],
},

// ═══════════════════════════════════════════════════════════════════════
// 20. SEPTIKU HOOLDUS  (SECONDARY)
// ═══════════════════════════════════════════════════════════════════════
{
  _type: "service",
  _id: "service-septiku-hooldus",
  slug: "septiku-hooldus",
  order: 20,
  index: "20",
  icon: "pipe",
  isPrimary: false,

  title_et: "Septiku Hooldus Tallinn",
  title_en: "Septic Tank Maintenance Tallinn",
  title_ru: "Обслуживание септика Таллин",

  short_et: "Septiku tühjendamine, puhastamine ja hooldus — eramajad ja talumajapidamised. Nõuetekohane tühjendus üleandmisaktiga.",
  short_en: "Septic tank emptying, cleaning and maintenance — private houses and farms. Compliant emptying with handover act.",
  short_ru: "Откачка, очистка и обслуживание септика — частные дома и фермерские хозяйства. Нормативная откачка с актом.",

  long_et: `Septik on elamus, mis ei ole ühendatud kanalisatsioonivõrguga, olulisim reovee käitlusseade. Regulaarne hooldus hoiab septiku töövõimelisena ja väldib keskkonnareostust, millega võivad kaasneda keskkonnainspektsiooni trahvid.

Torupro septiku hooldus hõlmab: septiku tühjendamist vakuumautoga, settekihi kontrolli (mõõdame muda paksuse), filtrimaterjalide seisundi kontrolli (biopuhastite puhul), ning filtrivälju ja imnevi ülevaatust.

Eestis on septiku tühjendamine keskkonnaseaduse kohaselt kohustuslik vähemalt üks kord aastas. Anname igast tühjendusest üleandmise-vastuvõtmise akti, mille klient esitab vajadusel keskkonnainspektsioonile.

Tühjendus tuleb ajastada õigesti — liiga harva tühjendemises läheb septik kinni ja sete läheb filtriväljale, mis on kulukas remontida.`,

  long_en: `A septic tank is the most important wastewater treatment device in a home not connected to the sewer network. Regular maintenance keeps the tank functioning and prevents environmental pollution, which can result in fines from the environmental inspectorate.

Torupro septic tank maintenance includes: emptying the tank by vacuum tanker, checking the sludge layer (we measure sludge depth), checking the filter material condition (for bio-septics) and inspecting filter fields and infiltration areas.

In Estonia septic tank emptying is required by environmental law at least once a year. After each emptying we issue a handover act that the client can present to the environmental inspectorate if required.

Timing of emptying is important — infrequent emptying causes the tank to block and sludge to enter the filter field, which is expensive to repair.`,

  long_ru: `Септик — важнейшее устройство очистки сточных вод в доме, не подключённом к канализационной сети. Регулярное обслуживание поддерживает работоспособность септика и предотвращает загрязнение окружающей среды, которое может повлечь штрафы экологической инспекции.

Обслуживание септика Torupro включает: откачку септика ассенизаторской машиной, проверку слоя осадка (измеряем глубину ила), проверку состояния фильтрующего материала (у биосептиков), а также осмотр фильтрационных полей и инфильтрационных зон.

По законодательству Эстонии об охране окружающей среды откачка септика обязательна не реже одного раза в год. После каждой откачки выдаём акт приёма-передачи, который клиент при необходимости представляет экологической инспекции.

Важно правильно планировать откачку — при слишком редкой откачке септик засоряется и осадок попадает на фильтрационное поле, ремонт которого обходится дорого.`,

  h1_et: "Septiku Hooldus Tallinnas — Tühjendamine ja Ülevaatus",
  h1_en: "Septic Tank Maintenance in Tallinn — Emptying and Inspection",
  h1_ru: "Обслуживание септика в Таллине — откачка и осмотр",

  h2_et: "Iga-aastane septiku tühjendamine üleandmisaktiga — keskkonnaseadusega nõutud, meie poolt korraldatud",
  h2_en: "Annual septic tank emptying with handover act — required by environmental law, organised by us",
  h2_ru: "Ежегодная откачка септика с актом — требование экологического законодательства, организованное нами",

  metaTitle_et: "Septiku Hooldus Tallinn | Septiku Tühjendamine — Torupro",
  metaTitle_en: "Septic Tank Maintenance Tallinn | Emptying — Torupro",
  metaTitle_ru: "Обслуживание септика Таллин | Откачка септика — Torupro",

  metaDesc_et: "Septiku tühjendamine ja hooldus Tallinnas ja Harjumaal ✓ Üleandmisakt ✓ Seadusega nõutud aastane tühjendus ✓ Filtrivälja kontroll. Tel: +372 5605 8888",
  metaDesc_en: "Septic tank emptying and maintenance in Tallinn and Harjumaa ✓ Handover act ✓ Legally required annual emptying ✓ Filter field inspection. Call: +372 5605 8888",
  metaDesc_ru: "Откачка и обслуживание септика в Таллине и уезде Харью ✓ Акт ✓ Обязательная ежегодная откачка ✓ Осмотр фильтрационного поля. Тел.: +372 5605 8888",

  ogTitle_et: "Septiku Hooldus Tallinn — Torupro",
  ogTitle_en: "Septic Tank Maintenance Tallinn — Torupro",
  ogTitle_ru: "Обслуживание септика Таллин — Torupro",

  ogDesc_et: "Septiku tühjendamine ja hooldus eramajadele Tallinnas. Üleandmisakt, seaduslik tühjendus, filtrivälja kontroll.",
  ogDesc_en: "Septic tank emptying and maintenance for private houses in Tallinn. Handover act, legal emptying, filter field inspection.",
  ogDesc_ru: "Откачка и обслуживание септика для частных домов в Таллине. Акт приёма, законная откачка, осмотр фильтрационного поля.",

  keywords_et: ["septiku hooldus Tallinn", "septiku tühjendamine Tallinn", "septiku puhastus Tallinn", "septikaev Tallinn", "reovee käitlemine eramaja Tallinn"],
  keywords_en: ["septic tank maintenance Tallinn", "septic tank emptying Tallinn", "septic service Tallinn"],
  keywords_ru: ["обслуживание септика Таллин", "откачка септика Таллин", "чистка септика Таллин", "септик Таллин"],

  canonicalUrl: "https://torupro.ee/et/teenused/septiku-hooldus",
  serviceArea: "Tallinn, Harjumaa",
  priceRange: "€€",
  faq: [],
},

];

// ═══════════════════════════════════════════════════════════════════════
// SEED FUNCTION
// ═══════════════════════════════════════════════════════════════════════
async function seed() {
  console.log(`\n🚀 Seeding ${services.length} services to Sanity...\n`);

  if (!client.config().token) {
    console.error("❌  SANITY_WRITE_TOKEN is missing.\n   Add it to .env.local or pass as env var:\n   SANITY_WRITE_TOKEN=<token> node scripts/seed-services.mjs\n");
    process.exit(1);
  }

  let ok = 0;
  let fail = 0;

  for (const svc of services) {
    try {
      await client.createOrReplace(svc);
      console.log(`  ✓  ${svc.index} ${svc.title_et}`);
      ok++;
    } catch (err) {
      console.error(`  ✗  ${svc.index} ${svc.title_et}: ${err.message}`);
      fail++;
    }
  }

  console.log(`\n${ok} seeded, ${fail} failed.\n`);
  if (fail > 0) process.exit(1);
}

seed();
