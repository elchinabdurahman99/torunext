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

  long_et: `Torupro on Tallinna usaldusväärne torutööde partner — üle 10 aasta kogemusega meeskond, mis lahendab igapäevaselt nii väikest kraani remonti kui ka tervete kortermaja torustike vahetust. Meie taga on üle 2 000 edukalt lõpetatud projekti Tallinnas ja Harjumaal, mistõttu puutume iga päev kokku kõige erinevamatel torustiku väljakutsetega.

Torutööd Tallinnas nõuavad spetsiifilisi teadmisi, sest ehitusfond on väga mitmekesine: 1960.–1980. aastatel ehitatud paneelmajad koos nende roostes galvaaniliste ja malmist torudega, 1990. aastate ülesehitised segasüsteemidega ning kaasaegsed uusehitised, kus kasutatakse PP-R, PEX ja komposiitvooliku süsteeme. Meie meistrid tunnevad kõiki neid süsteeme põhjalikult.

Täielik torutööde ring, mida pakume: veevarustustorude paigaldus, vahetus ja remont; kanalisatsioonitoru paigaldus, vahetus ja ummistuse likvideerimine; segistite, duššide ja vannide paigaldus; veemõõtjate vahetamine ametliku aktiga; torutoodete survekatse; kortermaja vee- ja kanalisatsioonipüstakute vahetus; pesemasindate, nõudepesumasinate ja muude seadmete ühendamine torustikuga.

Mida tähendab meie jaoks „professionaalne torutöö Tallinnas"? Esiteks hindame olukorra enne pakkumist — me ei alusta tööd enne, kui oleme teiega läbi rääkinud, mida täpselt tehakse ja miks. Teiseks kasutame ainult sertifitseeritud materjale, mille kohta saate vajadusel vastavussertifikaadi: PP-R (polüpropüleen), PEX (ristsidestatud polüetüleen), vask, roostevaba teras. Kolmandaks teeme pärast iga tööd survekatse ja anname üleandmis-vastuvõtmise akti ning 12 kuu töögarantii.

Kiirus ja kättesaadavus on samuti oluline. Avariiolukordades — lekke, torumurru, vett alla ajava WC — oleme Tallinnas kohale jõudnud keskmiselt 1–2 tunniga. Planeeritud tööde puhul pakume paindlikku ajakava, ka nädalavahetustel ja varem kokku leppides.

Torupro meistrid on teinud torutöid kõigis Tallinna linnaosades: Lasnamäel, Mustamäel, Põhja-Tallinnas, Kristiines, Nõmmel, Piraital ja Kesklinnas. Harjumaal teenindame aktiivselt Rae, Viimsi, Saue ja Keila valda. Oleme tuttavad ka konkreetsete korteriühistute probleemidega — Õismäe ringmajad, Lasnamäe suurpaneel, Kopli raudbetoonelamud — kõigil on oma eripärad.

Torutöö hind Tallinnas sõltub töö mahust, materjalidest ja kiireloomulisusest. Meie põhimõte on läbipaistvus: enne töö algust saate täpse ja kirjaliku kalkulatsiooni — ilma peidetud lisatasudeta. Küsige meilt tasuta hinnapakkumist telefoni teel (+372 56 877 877) või kirjutage info@torupro.ee. Kirjeldage probleemi lühidalt — meie spetsialist vastab kiirelt ja annab esialgse hinnahinnangu.`,

  long_en: `Torupro is Tallinn's trusted plumbing partner — a team with over 10 years of experience handling everything from a dripping tap to a full apartment-building pipe overhaul. With more than 2,000 completed projects across Tallinn and Harjumaa, we face every kind of pipe system challenge on a daily basis.

Plumbing works in Tallinn require specialised knowledge because the building stock is enormously varied: panel-block apartment buildings from the 1960s–1980s with corroded galvanised and cast-iron pipes; 1990s constructions with mixed systems; and modern new builds using PP-R, PEX and composite hose systems. Our plumbers know all these systems thoroughly.

The full range of plumbing services we offer: water supply pipe installation, replacement and repair; drainage pipe installation, replacement and blockage clearing; installation of mixers, showers and baths; water meter replacement with an official handover act; pressure testing of pipe systems; replacement of water and drainage risers in apartment buildings; and connection of washing machines, dishwashers and other appliances to the plumbing.

What does "professional plumbing in Tallinn" mean to us? First, we assess the situation before quoting — we never start work before discussing precisely what will be done and why. Second, we use only certified materials with compliance certificates available on request: PP-R (polypropylene), PEX (cross-linked polyethylene), copper, stainless steel. Third, after every job we carry out a pressure test and provide a handover act plus a 12-month workmanship guarantee.

Speed and availability matter too. For emergencies — a leak, burst pipe or flooding WC — we typically reach any point in Tallinn within 1–2 hours. For planned work we offer flexible scheduling including weekends by arrangement.

Torupro plumbers have worked in every Tallinn district: Lasnamäe, Mustamäe, Põhja-Tallinn, Kristiine, Nõmme, Pirita and the city centre. In Harjumaa we actively serve Rae, Viimsi, Saue and Keila municipalities. We are familiar with the specific challenges of individual building types — Õismäe ring houses, Lasnamäe large-panel blocks, Kopli reinforced-concrete apartment blocks — each has its own quirks.

Plumbing prices in Tallinn depend on scope of work, materials and urgency. Our principle is transparency: before work begins you receive a precise written quote with no hidden extras. Call us for a free estimate at +372 56 877 877 or write to info@torupro.ee. Describe the problem briefly — our specialist will respond quickly with an initial price indication.`,

  long_ru: `Torupro — надёжный партнёр по сантехническим работам в Таллине: команда с опытом более 10 лет, решающая ежедневно как мелкий ремонт крана, так и полную замену трубопроводов во всём многоквартирном доме. За нашими плечами более 2000 успешно завершённых проектов в Таллине и уезде Харью, и именно этот опыт позволяет нам ежедневно сталкиваться с самыми разнообразными сантехническими задачами.

Сантехнические работы в Таллине требуют специальных знаний, потому что жилой фонд очень разнообразен: панельные дома 1960–1980-х годов с проржавевшими оцинкованными и чугунными трубами; постройки 1990-х годов со смешанными системами; и современные новостройки с системами из PP-R, PEX и композитных трубок. Наши мастера хорошо знают все эти системы.

Полный перечень сантехнических работ, которые мы выполняем: монтаж, замена и ремонт труб водоснабжения; монтаж, замена труб канализации и устранение засоров; установка смесителей, душевых кабин и ванн; замена водосчётчиков с официальным актом; испытание трубных систем давлением; замена водопроводных и канализационных стояков в многоквартирных домах; подключение стиральных машин, посудомоечных машин и другой техники к трубопроводу.

Что для нас означает «профессиональные сантехнические работы в Таллине»? Во-первых, мы оцениваем ситуацию до составления сметы — мы не начинаем работу, не обсудив с вами, что именно будет сделано и почему. Во-вторых, используем только сертифицированные материалы, на которые при необходимости можем предоставить сертификаты соответствия: PP-R (полипропилен), PEX (сшитый полиэтилен), медь, нержавеющая сталь. В-третьих, после каждой работы проводим испытание давлением, составляем акт приёма-передачи и предоставляем гарантию на работы сроком 12 месяцев.

Скорость и доступность тоже важны. В аварийных ситуациях — при течи, прорыве трубы, затоплении из-за WC — мы приезжаем в любую точку Таллина в среднем за 1–2 часа. Для плановых работ предлагаем гибкий график, в том числе в выходные дни по предварительной договорённости.

Мастера Torupro работали во всех районах Таллина: Ласнамяэ, Мустамяэ, Põhja-Tallinn, Кристийне, Нымме, Пирита и в центре. В уезде Харью активно обслуживаем волости Рае, Виймси, Сауэ и Кейла. Мы знакомы со спецификой конкретных типов зданий — кольцевые дома Ыйсмяэ, крупнопанельные дома Ласнамяэ, железобетонные жилые дома Копли — у каждого свои особенности.

Стоимость сантехнических работ в Таллине зависит от объёма работ, материалов и срочности. Наш принцип — прозрачность: до начала работ вы получаете точную письменную смету без скрытых надбавок. Позвоните нам для бесплатного расчёта: +372 56 877 877 или напишите на info@torupro.ee. Опишите проблему кратко — наш специалист ответит быстро и даст предварительную оценку стоимости.`,

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
      question_et: "Mida torutööd Tallinnas maksavad ja kas hinnapakkumine on tasuta?",
      question_en: "What do plumbing works in Tallinn cost and is the quote free?",
      question_ru: "Сколько стоят сантехнические работы в Таллине и бесплатна ли смета?",
      answer_et: "Hinnapakkumine on alati tasuta. Hind sõltub töö mahust, materjalide valikust ja kiireloomulisusest — avariiväljakutsete puhul kehtib lisatariif. Enne töö algust saate täpse kirjaliku kalkulatsiooni ilma peidetud lisatasudeta.",
      answer_en: "A quote is always free. Price depends on scope of work, choice of materials and urgency — emergency call-outs carry a surcharge. Before work begins you receive a precise written estimate with no hidden extras.",
      answer_ru: "Смета всегда бесплатна. Цена зависит от объёма работ, выбора материалов и срочности — аварийные вызовы сопровождаются надбавкой. До начала работ вы получаете точную письменную смету без скрытых доплат.",
    },
    {
      question_et: "Kui kiiresti jõuate kohale ja kas töötate ööpäev läbi?",
      question_en: "How quickly do you arrive and do you work around the clock?",
      question_ru: "Как быстро вы приедете и работаете ли круглосуточно?",
      answer_et: "Avariiolukordades oleme Tallinnas kohal tavaliselt 1–2 tunni jooksul, 24/7 — ka öösiti, nädalavahetustel ja riigipühadel. Planeeritud tööde puhul lepime aja ette kokku ning saame tulla ka samal päeval.",
      answer_en: "For emergencies in Tallinn we are usually on site within 1–2 hours, 24/7 — including nights, weekends and public holidays. For planned work we schedule in advance and can often come the same day.",
      answer_ru: "В аварийных ситуациях по Таллину мы приезжаем, как правило, за 1–2 часа, 24/7 — в том числе ночью, в выходные и праздничные дни. Для плановых работ договариваемся заранее и нередко можем приехать в тот же день.",
    },
    {
      question_et: "Kas annate töödele garantii ja millised dokumendid saab?",
      question_en: "Do you provide a warranty and what documents are issued?",
      question_ru: "Предоставляете ли вы гарантию и какие документы выдаются?",
      answer_et: "Kõikidele töödele anname 12 kuu töögarantii. Töö lõppedes saate üleandmis-vastuvõtmise akti, survekatse protokolli ja materjalide vastavussertifikaadid. Kasutatavatele materjalidele kehtib lisaks tootja garantii.",
      answer_en: "We provide a 12-month workmanship guarantee on all work. On completion you receive a handover act, pressure test record and material compliance certificates. Materials also carry the manufacturer's warranty.",
      answer_ru: "На все работы предоставляем гарантию 12 месяцев. По окончании работ вы получаете акт приёма-передачи, протокол испытания давлением и сертификаты соответствия материалов. На используемые материалы дополнительно распространяется гарантия производителя.",
    },
    {
      question_et: "Milliseid materjale kasutate torutöödes ja miks need on parimad?",
      question_en: "Which materials do you use for plumbing and why are they the best choice?",
      question_ru: "Какие материалы вы используете в сантехнических работах и почему они оптимальны?",
      answer_et: "Kasutame PP-R (polüpropüleen), PEX (ristsidestatud polüetüleen), vask ja roostevaba terase torusid sõltuvalt süsteemist ja kliendi eelistusest. PP-R ja PEX on katlakivikindlad ja kestavad 50+ aastat; vask sobib ajaloolistele hoonetele. Kõik materjalid on sertifitseeritud ja vastavad Eesti ehitusnormidele.",
      answer_en: "We use PP-R (polypropylene), PEX (cross-linked polyethylene), copper and stainless steel pipes depending on the system and client preference. PP-R and PEX are scale-resistant and last 50+ years; copper suits historic buildings. All materials are certified and comply with Estonian building standards.",
      answer_ru: "Используем трубы PP-R (полипропилен), PEX (сшитый полиэтилен), медь и нержавеющая сталь в зависимости от системы и предпочтений клиента. PP-R и PEX устойчивы к накипи и служат 50+ лет; медь подходит для исторических зданий. Все материалы сертифицированы и соответствуют строительным нормам Эстонии.",
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

  long_et: `Kanalisatsiooniummistus on üks levinumaid torutöö probleeme Tallinnas — see võib tabada igaühte ja enamasti kõige ebasobivama hetkel. Torupro meeskond jõuab kohale keskmiselt 1–2 tunni jooksul ja eemaldab ummistuse professionaalse varustusega kiirelt ning puhaste kätega. Töötame 24 tundi ööpäevas, 7 päeva nädalas.

Kanalisatsiooniummistuse märgid, millega meile helistatakse: köögivalamu nõrgub aeglaselt ja haiseb; WC-pott ei tühjene pärast loputamist; dušši all tekib veelomp; pesemismasin annab veakoodi; korteri põrandalt tuleb kanalisatsioonilõhn. Kõigis neis olukordades on kiire lahendus kriitilise tähtsusega — eriti kui veeleke läheb allakorruselistele.

Likvideerime ummistusi igas kanalisatsioonitoru segmendis: köögivalamu ja nõudepesumasina äravool; vannitoa-, dušši- ja pesumasinaäravool; WC-pott ja bideesegisti; põrandasisene äravool ja sifoon; korruste vaheline kanalisatsioonipüstak (stäkk); väliskanalisatsioonitrassi ummistus, sh pikad maa-alused lõigud.

Kasutame kolme põhimeetodit sõltuvalt ummistuse tüübist ja asukohast: mehaaniline puhastus trosside ja spiraalidega — sobib kompaktsetele lühikestele ummistustele (rasva-, seebi- või paberikorgid); hüdrodünaamiline survepesu kõrgsurveveejuga (kuni 200 bar) — eemaldab kõige visama rasva, katlakivi ja liivakihi; ensümaatiline töötlus — kasutatakse ennetava hoolduse või survepesu täiendusena rasvapüüduriga seotud ummistustel. Iga ummistuse puhul valime optimaalse meetodi — see tagab, et ummistus kaob jäädavalt, mitte ei nihku lihtsalt kaugemale torusse.

Korduva ummistuse korral — kui sama koht ummistu iga paari kuu tagant — soovitame kindlasti kombineerida puhastus kanalisatsiooni kaamerauuring. Kaameraga näeme täpselt, kas tegu on rasva ladestumisega, juurtungimisega väliskanalisatsiooni, torustiku struktuurikahjustuse (nihestunud liitmik, pragunenud toru) või vale kaldega. Nii lahendame probleemi põhjuse, mitte ainult sümptomi — ja järgmist kõnet enam ei tule.

Tallinna kõigis linnaosades (Lasnamäe, Mustamäe, Põhja-Tallinn, Kristiine, Nõmme, Pirita, Kesklinn) oleme keskmiselt 1–2 tunniga kohale. Harjumaal (Rae, Viimsi, Saue, Keila) on reageerimisaeg kuni 2–3 tundi. Teenuse hind on fikseeritud ja teile selge enne töö algust — hiliseid üllatusi pole. Öö- ja nädalavahetusetariif kehtib ainult tõeliste avariikutsete korral. Helistage kohe: +372 56 877 877.`,

  long_en: `A blocked drain is one of the most common plumbing problems in Tallinn — it can happen to anyone, usually at the worst possible moment. The Torupro team arrives on average within 1–2 hours and clears the blockage with professional equipment, quickly and cleanly. We work 24 hours a day, 7 days a week.

Signs of a blocked drain that prompt calls to us: kitchen sink drains slowly and smells; WC does not empty after flushing; a puddle forms under the shower; washing machine gives an error code; a sewer smell comes from the apartment floor drain. In all these situations a quick solution is critically important — especially when water is seeping to the flat below.

We clear blockages in every section of the drainage system: kitchen sink and dishwasher outlet; bathroom, shower and washing-machine drain; WC pan and bidet fitting; floor drain and trap; inter-floor sewage riser; and outdoor sewer runs including long underground sections.

We use three main methods depending on the blockage type and location: mechanical cleaning with rods and spirals — suitable for compact short blockages (grease, soap or paper plugs); hydro-jetting with a high-pressure water jet (up to 200 bar) — removes the most stubborn grease, scale and sand layers; enzymatic treatment — used as preventive maintenance or as a supplement to jetting for grease-trap-related blockages. For each blockage we choose the optimal method — ensuring the clog is gone permanently, not just pushed further along the pipe.

For recurring blockages — when the same spot blocks every couple of months — we strongly recommend combining the clean with a camera inspection. The camera shows precisely whether the cause is grease build-up, root intrusion in the outdoor sewer, structural pipe damage (displaced joint, cracked pipe) or incorrect slope. We fix the cause, not just the symptom — so there is no next call.

Across all Tallinn districts (Lasnamäe, Mustamäe, Põhja-Tallinn, Kristiine, Nõmme, Pirita, city centre) we typically arrive in 1–2 hours. In Harjumaa (Rae, Viimsi, Saue, Keila) response time is up to 2–3 hours. The service price is fixed and clear before work starts — no surprises. Night and weekend surcharges apply only for genuine emergency call-outs. Call now: +372 56 877 877.`,

  long_ru: `Засор канализации — одна из самых распространённых сантехнических проблем в Таллине: она может возникнуть у кого угодно и, как правило, в самый неподходящий момент. Команда Torupro приезжает в среднем за 1–2 часа и устраняет засор профессиональным оборудованием — быстро и чисто. Работаем круглосуточно, 7 дней в неделю.

Признаки засора канализации, с которыми нам звонят: кухонная мойка медленно уходит и издаёт запах; унитаз не опорожняется после смыва; под душем образуется лужа; стиральная машина выдаёт код ошибки; из напольного сифона квартиры тянет канализацией. Во всех этих ситуациях быстрое решение критически важно — особенно если вода проникает к соседям снизу.

Устраняем засоры на любом участке канализационной системы: слив кухонной мойки и посудомоечной машины; слив ванной, душа и стиральной машины; унитаз и биде; напольный трап и сифон; межэтажный канализационный стояк; наружная канализационная трасса, в том числе длинные подземные участки.

Применяем три основных метода в зависимости от типа и места засора: механическая прочистка тросами и спиралями — подходит для компактных коротких засоров (жировые, мыльные или бумажные пробки); гидродинамическая промывка струёй воды высокого давления (до 200 бар) — удаляет самые стойкие отложения жира, накипи и песка; ферментная обработка — используется как профилактика или дополнение к промывке при засорах, связанных с жироуловителем. Для каждого засора выбираем оптимальный метод — засор устраняется навсегда, а не просто смещается дальше по трубе.

При повторяющихся засорах — когда одно и то же место засоряется каждые несколько месяцев — настоятельно рекомендуем сочетать прочистку с видеодиагностикой. Камера точно покажет: жировые отложения, прорастание корней в наружную канализацию, структурное повреждение трубы (смещённый фитинг, трещина) или неправильный уклон. Устраняем причину, а не только симптом — и следующего звонка больше не будет.

По всем районам Таллина (Ласнамяэ, Мустамяэ, Põhja-Tallinn, Кристийне, Нымме, Пирита, центр) приезжаем в среднем за 1–2 часа. В уезде Харью (Рае, Виймси, Сауэ, Кейла) — до 2–3 часов. Стоимость услуги фиксирована и известна до начала работ — никаких сюрпризов. Ночные и выходные надбавки применяются только при реальных аварийных вызовах. Звоните сейчас: +372 56 877 877.`,

  h1_et: "Kanalisatsiooni Ummistuse Likvideerimine Tallinnas — 24/7",
  h1_en: "Drain Unblocking in Tallinn — 24/7 Emergency Service",
  h1_ru: "Устранение засора канализации в Таллине — 24/7",

  h2_et: "WC, valamu, dušš, torustik — eemaldame iga ummistuse kiirelt ja jäädavalt",
  h2_en: "WC, sink, shower, pipes — we clear every blockage fast and permanently",
  h2_ru: "WC, мойка, душ, трубопровод — устраняем любой засор быстро и навсегда",

  metaTitle_et: "Ummistuse Likvideerimine Tallinn | 24/7 — Torupro",
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
      question_et: "Mis põhjustab korduvaid kanalisatsiooniummistusi?",
      question_en: "What causes recurring drain blockages?",
      question_ru: "Что вызывает повторяющиеся засоры канализации?",
      answer_et: "Korduvad ummistused viitavad tavaliselt ühele neljast põhjusest: rasva ja seebi ladestused torude seintele; juuretungimine väliskanalisatsiooni (eriti vanematel trassilistel torudel); torustiku struktuurikahjustus (nihestunud liitmik, vale kalle); või torutori läbimõõt on lihtsalt liiga väike koormusele. Kaamerauuring tuvastab täpse põhjuse.",
      answer_en: "Recurring blockages usually point to one of four causes: grease and soap build-up on pipe walls; root intrusion into outdoor sewers (especially in older trench-laid pipes); structural pipe damage (displaced joint, incorrect slope); or the pipe diameter is simply too small for the load. A camera inspection identifies the exact cause.",
      answer_ru: "Повторяющиеся засоры, как правило, указывают на одну из четырёх причин: накопление жира и мыла на стенках труб; прорастание корней в наружную канализацию (особенно в старых трубах); структурное повреждение трубы (смещённый фитинг, неправильный уклон); или диаметр трубы просто слишком мал для нагрузки. Видеодиагностика выявляет точную причину.",
    },
    {
      question_et: "Mida teha, kui WC üle ajab ja vesi läheb allakorruselistele?",
      question_en: "What to do if the toilet overflows and water goes to the flat below?",
      question_ru: "Что делать, если унитаз переполняется и вода идёт к соседям снизу?",
      answer_et: "Sulgege kohe vesi peakraanist või WC-sisendi sulgurist. Helistage meile: +372 56 877 877 — oleme 24/7 valmis. Ärge kasutage WC-d ega valamu äravoolu kuni ummistus on eemaldatud. Informeerige kindlasti allakorruselistest ja dokumenteerige kahju fotodega.",
      answer_en: "Immediately shut off water at the main stopcock or WC inlet valve. Call us: +372 56 877 877 — we are available 24/7. Do not use the WC or any drain until the blockage is cleared. Be sure to notify downstairs neighbours and document any damage with photos.",
      answer_ru: "Немедленно перекройте воду на главном вентиле или кране подачи к унитазу. Позвоните нам: +372 56 877 877 — работаем 24/7. Не пользуйтесь унитазом и никакими сливами до устранения засора. Обязательно уведомите соседей снизу и задокументируйте ущерб фотографиями.",
    },
    {
      question_et: "Kui kaua võtab ummistuse likvideerimine aega?",
      question_en: "How long does drain unblocking take?",
      question_ru: "Сколько времени занимает устранение засора?",
      answer_et: "Tavaline korteri ummistus (valamu, dušš, WC) likvideeritakse 30–60 minutiga. Keerukamate ummistuste puhul (pikad väliskanalisatsiooni trasid, rasvakorgid tootmishoones) võib kuluda 1–3 tundi. Enne töö algust anname alati ajalise hinnangu.",
      answer_en: "A typical apartment blockage (sink, shower, WC) is cleared in 30–60 minutes. More complex blockages (long outdoor sewer runs, grease plugs in a production building) may take 1–3 hours. We always give a time estimate before starting work.",
      answer_ru: "Типичный засор в квартире (мойка, душ, унитаз) устраняется за 30–60 минут. При более сложных засорах (длинные наружные трассы, жировые пробки в производственном здании) может потребоваться 1–3 часа. До начала работ всегда даём временную оценку.",
    },
    {
      question_et: "Kas kasutate kemikaale ja kas need kahjustavad vanu torusid?",
      question_en: "Do you use chemicals and do they damage old pipes?",
      question_ru: "Используете ли вы химикаты и не повредят ли они старые трубы?",
      answer_et: "Eelistame mehhaanilist puhastust ja survepesu, mis on tõhusamad ega kahjusta vanu malmist ega PVC-torusid. Kemikaale (ensümaatilisi puhastusvahendeid) kasutame ainult ennetavaks hoolduseks — need ei söövita torusid. Agressiivseid keemiaid (nagu leeliselised ummistuse eemaldajad) me ei kasuta.",
      answer_en: "We prefer mechanical cleaning and hydro-jetting, which are more effective and do not damage old cast-iron or PVC pipes. Chemicals (enzymatic cleaners) are used only for preventive maintenance — they do not corrode pipes. We do not use aggressive chemicals such as alkaline drain openers.",
      answer_ru: "Мы предпочитаем механическую прочистку и гидропромывку — они эффективнее и не повреждают старые чугунные трубы или ПВХ. Химические средства (ферментные очистители) используем только для профилактики — они не разъедают трубы. Агрессивные химикаты (щелочные средства для прочистки) мы не применяем.",
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

  long_et: `Kanalisatsiooni survepesu on kõige tõhusam meetod torustiku põhjalikuks puhastamiseks — tõhusam kui mehaaniline trossiga puhastus, sest kõrgsurve veejet mitte ainult ei purusta ummistust, vaid peseb ka toru seinad puhtaks. Torupro kasutab professionaalseid survepesuseadmeid, mis töötavad kuni 200 baariga ja mille voolik ulatub kuni 100 meetrini — see jõuab ka pikimate maa-aluste trasside kaugematesse nurkadesse.

Kanalisatsiooni survepesu vajatakse kõige sagedamini järgmistel juhtudel: äravool on aeglane, aga ummistust veel ei ole — rasva ja katlakivi kiht kasvab tasapisi; ummistus kordub regulaarselt, hoolimata mitmest mehhaanilisest puhastusest; lõhn tuleb kanalisatsioonist ka siis, kui ummistust pole — biofilm torude seintelt haiseb; restorani, söökla, toiduainetehase või haiglaköök — seal nõuavad sanitaarnormid perioodilist survepesu; kortermaja või ärihoone väliskanalisatsioonitrassi hooajaline puhastus.

Survepesu protsess Toruprol: esmalt uurime kaamerapäisega toru seisundit, et valida optimaalne düüs ja rõhk; seejärel sisestatakse düüs torustikku ja aktiveeritakse veejoa suurel rõhul; düüs liigub edasi tagasi, purustades ladestused ja loputades need äravooluga välja; pärast puhastust teostame kontrolluuring kaameraga — nii kinnitame töö tulemuse ja jäädvustame videotõendi.

Kasutame erinevaid düüse vastavalt vajadusele: pöörlevad düüsid rasvakihi jaoks; freesdüüsid mineraalsete ladestuste (katlakivi, betoon) jaoks; juurelõikavad düüsid välistrassidesse tunginud puu- ja põõsajuurte eemaldamiseks. Igal juhtumil valime parima lahenduse — see tagab põhjaliku puhastuse ilma toru kahjustamata.

Torupro pakub survepesu nii ühekordsete töödena kui ka regulaarsete hoolduslepingutena ettevõtetele: restoranid, kohvikud, toitlustusettevõtted, haiglad, koolid — kõigile on mõistlik survepesu teostada regulaarselt (1–4 korda aastas sõltuvalt koormusest). Leping tagab, et me tuleme õigel ajal ja teil pole vaja ise meeles pidada.

Teenindame kõiki Tallinna linnaosasid ja Harjumaa valdu. Mõõdukamate puhastuste puhul kasutame kompaktset survepesumasinat, suuremahuliste väliskanalisatsiooni tööde jaoks survepesuautot 100 m voolikuga. Küsige pakkumist — anname teile selge hinnakalkulatsiooni enne töö algust.`,

  long_en: `High-pressure pipe flushing is the most effective method for deep cleaning of drainage systems — more effective than mechanical rod cleaning, because a high-pressure water jet not only breaks through the blockage but also scrubs the pipe walls clean. Torupro uses professional jetting equipment operating at up to 200 bar with a hose reaching up to 100 metres — reaching even the furthest corners of the longest underground runs.

Drain hydro-jetting is most commonly needed in the following situations: drainage is slow but not yet fully blocked — grease and scale are gradually building; blockages recur despite repeated mechanical cleaning; there is a sewer smell even without a visible blockage — biofilm on pipe walls smells; a restaurant, canteen, food plant or hospital kitchen where sanitary regulations require periodic flushing; seasonal flushing of an apartment block or commercial building's outdoor sewer main.

The Torupro hydro-jetting process: first we inspect the pipe condition with a camera head to select the optimal nozzle and pressure; the nozzle is then inserted into the pipework and the water jet activated at high pressure; the nozzle moves forwards and backwards, pulverising deposits and flushing them out with the flow; after cleaning we carry out a post-flush camera inspection — confirming the result and creating a video record.

We use different nozzles for different needs: rotating nozzles for grease layers; milling nozzles for mineral deposits (scale, concrete); root-cutting nozzles for removing tree and shrub roots that have infiltrated outdoor sewers. In every case we choose the best solution — ensuring thorough cleaning without pipe damage.

Torupro offers hydro-jetting both as one-off jobs and as regular maintenance contracts for businesses: restaurants, cafés, catering companies, hospitals, schools — all benefit from periodic flushing (1–4 times per year depending on load). A contract ensures we arrive on schedule and you don't have to remember.

We serve all Tallinn districts and Harjumaa municipalities. For moderate cleaning jobs we use a compact jetting unit; for larger outdoor sewer work we deploy a jetting truck with a 100-metre hose. Request a quote — we provide a clear cost estimate before work begins.`,

  long_ru: `Гидропромывка канализации — наиболее эффективный метод глубокой очистки трубопроводной системы: эффективнее механической прочистки тросом, поскольку струя воды высокого давления не только пробивает засор, но и очищает стенки трубы. Torupro использует профессиональное оборудование, работающее при давлении до 200 бар, со шлангом длиной до 100 метров — достаёт до самых дальних углов самых длинных подземных трасс.

Гидропромывка канализации наиболее часто нужна в следующих случаях: отток медленный, но полного засора ещё нет — жировой и известковый слой постепенно нарастает; засоры повторяются несмотря на неоднократную механическую прочистку; канализационный запах присутствует даже без видимого засора — источник биоплёнка на стенках труб; ресторан, столовая, пищевое производство или больничная кухня — санитарные нормы требуют периодической промывки; сезонная промывка наружной канализационной трассы многоквартирного дома или коммерческого здания.

Процесс гидропромывки в Torupro: сначала проверяем состояние трубы камерой, чтобы выбрать оптимальную насадку и давление; насадка вводится в трубопровод и активируется водяная струя высокого давления; насадка движется вперёд-назад, дробя отложения и вымывая их потоком; после промывки проводим контрольную видеодиагностику — подтверждаем результат и фиксируем его видеозаписью.

Применяем разные насадки в зависимости от задачи: вращающиеся насадки — для жирового слоя; фрезерные насадки — для минеральных отложений (накипь, бетон); корнерезы — для удаления корней деревьев и кустарников, проникших в наружную канализацию. В каждом случае выбираем лучшее решение — тщательная очистка без повреждения трубы.

Torupro предлагает гидропромывку как разовые работы, так и регулярные контракты на обслуживание для предприятий: рестораны, кафе, предприятия общественного питания, больницы, школы — всем выгодна периодическая промывка (1–4 раза в год в зависимости от нагрузки). Контракт гарантирует, что мы приедем вовремя — вам не нужно ни о чём помнить.

Обслуживаем все районы Таллина и волости уезда Харью. Для умеренных работ используем компактный агрегат; для более крупных работ на наружной канализации — специальную машину со шлангом 100 м. Запросите предложение — до начала работ предоставим чёткую смету.`,

  h1_et: "Kanalisatsiooni Survepesu Tallinnas — Kõrgsurve Hüdropuhastus",
  h1_en: "High-Pressure Pipe Flushing in Tallinn — Hydro-Jetting Service",
  h1_ru: "Гидропромывка канализации в Таллине — профессиональная очистка высоким давлением",

  h2_et: "Rasv, katlakivi, juured — eemaldame surveveejoa jõuga täielikult ja püsivalt",
  h2_en: "Grease, scale, roots — fully and permanently removed by water-jet pressure",
  h2_ru: "Жир, накипь, корни — полностью и навсегда удаляем напором воды",

  metaTitle_et: "Kanalisatsiooni Survepesu Tallinn | Hüdropuhastus — Torupro",
  metaTitle_en: "Hydro-Jetting Tallinn | Sewer Pipe Cleaning — Torupro",
  metaTitle_ru: "Гидропромывка канализации Таллин | Очистка — Torupro",

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
      answer_et: "Jah, pakume kvartalipõhiseid ja poolaastaseid hoolduslepinguid fikseeritud hinnaga. Restoranidele ja toiduettevõtetele on see eriti soovituslik, kuna rasv koguneb torudes kiiresti. Hoolduslepinguga klient saab ka eelistatud reageerimisaja avariiväljakutseks.",
      answer_en: "Yes, we offer quarterly and bi-annual maintenance contracts at a fixed price. This is especially recommended for restaurants and food businesses, as grease accumulates in pipes quickly. Contract clients also receive a priority response time for emergency call-outs.",
      answer_ru: "Да, предлагаем ежеквартальные и полугодовые контракты на обслуживание по фиксированной цене. Это особенно рекомендуется ресторанам и пищевым предприятиям, поскольку жир быстро накапливается в трубах. Клиенты по контракту также получают приоритетное время реагирования на аварийные вызовы.",
    },
    {
      question_et: "Mis rõhuga survepesu teostatakse?",
      question_en: "What pressure is used for hydro-jetting?",
      question_ru: "При каком давлении выполняется гидропромывка?",
      answer_et: "Kasutame 100–300 bar rõhku sõltuvalt torustiku materjalist, läbimõõdust ja ummistuse iseloomust. Rasvapuhastuseks piisab madalamast rõhust, mineraalsetele ja juure-ummistustele kasutame kõrgemat rõhku. Enne puhastust hindame torustiku seisundit, et valida õige rõhk.",
      answer_en: "We use 100–300 bar depending on the pipe material, diameter and the nature of the blockage. Grease cleaning requires lower pressure; mineral and root blockages require higher pressure. Before cleaning we assess the pipe condition to select the right pressure.",
      answer_ru: "Используем давление 100–300 бар в зависимости от материала трубы, диаметра и характера засора. Для очистки жира достаточно более низкого давления; для минеральных и корневых засоров применяем более высокое давление. Перед очисткой оцениваем состояние трубопровода для выбора правильного давления.",
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

  long_et: `Kanalisatsiooni kaamerauuring on kaasaegne diagnostikameetod, mis võimaldab näha torustiku sisemust ilma seinte avamise, lõhkumise või kaevamiseta. Meie professionaalne kaamerapea edastab reaalajas HD-pildi spetsialisti ekraanile — nii tuvastame rikke täpse asukoha ja põhjuse minutitega. See säästab aega, raha ja vältib tarbetut lõhkumist.

Kanalisatsiooni kaamerauuring on vajalik väga erinevates olukordades. Korduvad ummistused — kui sama toru ummistu korduvalt, näitab kaamera, kas süüdi on rasva kogunemine, juuretungimine, nihestunud liitmik või vale kalle. Lekke otsimine — kaamera aitab tuvastada, kus täpselt on torustikul mõra, auk või lahti tulnud ühendus. Enne korteri või maja ostmist — torustiku seisund on asi, mida silmaga ei näe, aga mille remondikulu võib olla tuhandeid eurosid. Kaamerauuring annab ostjale objektiivse pildi. Enne renoveerimist — teame täpselt, milliseid sektsioone tasub remontida ja milliseid täielikult välja vahetada. Pärast survepesu — kontrollime, et toru on puhas ja terviklik. Korteriühistule — aitab kaardistada kogu torustiku seisund ühe ülevaatusega.

Meie kaamerasüsteem ulatub kuni 100 meetrit ja läbib torusid alates 50 mm läbimõõdust. Suuremate läbimõõtudega torude (110–315 mm) puhul kasutame vastavat kaamerapead, mis võimaldab töötada väliskanalisatsiooni vaatluskaevudes ja suurtes trassilahendustes. Kõik uuringud salvestame täieliku videona, mille saate endale kaasa: see on kasulik dokumentatsioon kindlustusseltsile, korteriühistule, ehitusjärelevalvele ja tulevase remondi planeerimiseks.

Uuring on kiire — enamasti kulub kogu protseduuriks 30–60 minutit. Kohapeal anname koheselt soovitused edasiseks: kas piisab survepesu, kas vajalik on punkt-remont (liitmiku asendamine) või täielik torulõigu vahetus. Nii saate selge pildi kuludest enne, kui midagi laiali lõhutud saab.

Kaamerauuring kombineerituna survepesu ja lekketuvastusega annab täieliku torustiku auditi, mille põhjal saab koostada pikemaajalise remondiplaani. Teenindame kõiki Tallinna linnaosasid ja Harjumaa valdu.`,

  long_en: `A pipe camera inspection is a modern diagnostic method that lets you see the inside of a drainage or water supply system without opening walls, breaking concrete or digging up ground. Our professional camera head transmits a real-time HD image to the specialist's screen — pinpointing the exact location and cause of a fault within minutes. The result: you save time, money and unnecessary structural damage.

A camera inspection is needed in many different situations. Recurring blockages — if the same drain keeps blocking every few months, the camera reveals whether the culprit is grease build-up, root intrusion, a displaced joint or incorrect gradient. Leak detection — the camera identifies exactly where a pipe has a crack, hole or loose connection. Before buying a flat or house — pipe condition is invisible to the naked eye, yet repair costs can run into thousands. A camera inspection gives buyers an objective picture. Before renovation — we know precisely which sections are worth repairing and which need full replacement. After hydro-jetting — we verify that the pipe is clean and intact. For housing associations — a single inspection maps the entire pipe network condition.

Our camera system reaches up to 100 metres and passes through pipes from 50 mm diameter upwards. For larger diameters (110–315 mm) we use the appropriate camera head, enabling work in outdoor sewer manholes and large-diameter mains. We record the full inspection on video, and you keep a copy — useful documentation for your insurance company, housing association, building supervisor and future repair planning.

The inspection is fast — the whole procedure usually takes 30–60 minutes. We give immediate on-site recommendations: whether hydro-jetting is enough, a spot repair (fitting replacement) is needed, or a full pipe section must be replaced. You get a clear cost picture before anything is broken open.

Camera inspection combined with hydro-jetting and leak detection provides a full pipe audit, forming the basis for a long-term maintenance plan. We serve all Tallinn districts and Harjumaa municipalities.`,

  long_ru: `Видеодиагностика канализации — современный метод, позволяющий увидеть внутреннее состояние трубопровода без вскрытия стен, разрушения конструкций или раскопок. Наша профессиональная камера передаёт HD-изображение в режиме реального времени на монитор специалиста — так мы определяем точное местоположение и причину неисправности за считанные минуты. Это экономит время, деньги и избавляет от излишнего разрушения.

Видеодиагностика необходима в самых разных ситуациях. Повторяющиеся засоры — если одно и то же место засоряется каждые несколько месяцев, камера покажет, виновато ли скопление жира, прорастание корней, смещённый фитинг или неправильный уклон. Поиск течи — камера точно определяет, где именно в трубе трещина, отверстие или разошедшееся соединение. Перед покупкой квартиры или дома — состояние труб невидимо глазу, а расходы на ремонт могут составлять тысячи евро. Видеодиагностика даёт покупателю объективную картину. Перед ремонтом — точно знаем, какие участки стоит отремонтировать, а какие заменить полностью. После гидропромывки — проверяем, что труба чистая и целая. Для товарищества собственников — одно обследование картирует состояние всей трубопроводной сети.

Наша камерная система достигает 100 метров и проходит через трубы диаметром от 50 мм. Для больших диаметров (110–315 мм) используем соответствующую головку камеры, что позволяет работать в смотровых колодцах наружной канализации и крупных магистралях. Всё обследование записываем в видеофайл, копию которого вы забираете: это ценная документация для страховой компании, товарищества собственников, технического надзора и планирования будущего ремонта.

Обследование проходит быстро — вся процедура обычно занимает 30–60 минут. Сразу на месте даём рекомендации: достаточно ли гидропромывки, нужен ли точечный ремонт (замена фитинга) или полная замена участка трубы. Так у вас есть чёткая картина расходов ещё до того, как что-либо разрушено.

Видеодиагностика в сочетании с гидропромывкой и поиском течи обеспечивает полный аудит трубопровода, на основе которого можно составить долгосрочный план технического обслуживания. Обслуживаем все районы Таллина и волости уезда Харью.`,

  h1_et: "Kanalisatsiooni Kaamerauuring Tallinnas — HD Videokontroll",
  h1_en: "Pipe Camera Inspection in Tallinn — HD Video Diagnostics",
  h1_ru: "Видеодиагностика канализации в Таллине — HD-контроль трубопровода",

  h2_et: "Tuvastame lekke, ummistuse põhjuse ja kahjustused täpselt — ilma seinte avamiseta",
  h2_en: "We pinpoint leaks, blockage causes and damage precisely — without opening walls",
  h2_ru: "Точно определяем течи, причины засоров и повреждений — без вскрытия стен",

  metaTitle_et: "Kanalisatsiooni Kaamerauuring Tallinn — Torupro",
  metaTitle_en: "Pipe Camera Inspection Tallinn | Video Diagnostics — Torupro",
  metaTitle_ru: "Видеодиагностика канализации Таллин — Torupro",

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
      answer_et: "Jah, kogu uuring salvestatakse täispikkuses ja klient saab videofaili kaasa. See on kasulik dokument kindlustusseltsile, korteriühistule ja ehitusjärelevalvele — näitab probleemi täpset asukohta ja ulatust.",
      answer_en: "Yes, the full inspection is recorded and the client receives the video file. It is a useful document for insurers, housing associations and building supervisors — showing the exact location and extent of the problem.",
      answer_ru: "Да, всё обследование записывается полностью, и клиент получает видеофайл. Это полезный документ для страховой компании, товарищества собственников и технического надзора — он показывает точное местонахождение и масштаб проблемы.",
    },
    {
      question_et: "Mis suurustesse torudesse kaamera mahub?",
      question_en: "What pipe diameters can the camera inspect?",
      question_ru: "Трубы какого диаметра можно обследовать камерой?",
      answer_et: "Meie kaamerapea mahub alates 50 mm läbimõõduga torudesse (kraanikauss, duš, WC). Väliskanalisatsiooni vaatluskaevudes ja suurtes trassides kasutame 110–315 mm kaamerapead.",
      answer_en: "Our camera head fits pipes from 50 mm diameter upwards (basin, shower, WC). For outdoor sewer manholes and large mains we use a camera head for 110–315 mm pipes.",
      answer_ru: "Наша камера проходит в трубы диаметром от 50 мм (умывальник, душ, унитаз). Для смотровых колодцев наружной канализации и крупных магистралей используем головку камеры 110–315 мм.",
    },
    {
      question_et: "Kas kaamerauuring on mõistlik enne korteri ostmist?",
      question_en: "Is a camera inspection worth doing before buying a flat?",
      question_ru: "Стоит ли проводить видеодиагностику перед покупкой квартиры?",
      answer_et: "Absoluutselt — see on üks odavamaid ennetavaid investeeringuid kinnisvaraostul. Varjatud torukahjustused (roostunud malm, pragud, juuretungimine) võivad remondina maksta tuhandeid eurosid. Kaamerauuring annab selge pildi ja aitab müüjaga hinda läbi rääkida.",
      answer_en: "Absolutely — it is one of the cheapest preventive investments when buying property. Hidden pipe damage (corroded cast iron, cracks, root intrusion) can cost thousands to repair. A camera inspection gives a clear picture and helps negotiate the price with the seller.",
      answer_ru: "Абсолютно — это одна из самых дешёвых превентивных инвестиций при покупке недвижимости. Скрытые повреждения труб (ржавый чугун, трещины, корни) могут обойтись в тысячи евро на ремонт. Видеодиагностика даёт чёткую картину и помогает договориться о цене с продавцом.",
    },
    {
      question_et: "Kui kaua kaamerauuring aega võtab?",
      question_en: "How long does a camera inspection take?",
      question_ru: "Сколько времени занимает видеодиагностика?",
      answer_et: "Enamasti 30–60 minutit sõltuvalt torustiku keerukusest. Pärast uuringut anname kohapeal suulised soovitused ja vajadusel kirjaliku kokkuvõtte. Samal päeval saab alustada ka survepesu või remonditöödega.",
      answer_en: "Usually 30–60 minutes depending on the complexity of the pipe network. After the inspection we give on-site verbal recommendations and a written summary where needed. Hydro-jetting or repair work can begin the same day if required.",
      answer_ru: "Обычно 30–60 минут в зависимости от сложности трубопровода. После обследования даём устные рекомендации на месте и письменный отчёт при необходимости. В тот же день при желании можно начать гидропромывку или ремонтные работы.",
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

  long_et: `Kanalisatsiooni remont on vajalik siis, kui torustiku probleem ei ole ummistus, vaid füüsiline kahjustus — pragude, roostumise, nihestunud liitmike, juurtungimise või kokkuvarisenud toru tõttu. Sellised rikked ei lahene survepesu ega bioloogiliste puhastusvahenditega — need vajavad mehhaanilist sekkumist professionaali poolt.

Levinumad kanalisatsioonikahjustused Tallinna elamutes: malmist kanalisatsioonitoru roostumine (õhenevad seinad → leke → veekahjustus alumisel naabril), PVC liitmiku nihestumine renoveerimistöödel või maakoormuse tõttu, juurtungimine väliskanalisatsiooni — männi- ja kase-juured murduvad liitmikest läbi ning blokeerivad vooliku, ning kanalisatsioonitoru vale kalle (vesi seisab, settib ja tekib korduv ummistus).

Teostame kanalisatsioonitoru remonti mitmel viisil. Punkt-remont — lõikame välja kahjustatud lõigu ja asendame selle uue PVC või PP-ga, liitmikud kinnitatakse sertifitseeritud kummiklambriga. Juurtungimise likvideerimine — eemaldame juured mehaaniliselt ja paigaldame spetsiaalse juurekaitsekindla manseti. Täielik torulõigu vahetus — vahetame välja terve sektsiooni, näiteks ühe korruse vertikaali kogu pikkuses. Mallitorude asendamine PVC-ga — eriti aktuaalne Tallinna 1960.–1980. aastate paneelmajades, kus malmist kanalisatsioon on jõudnud oma eluea lõppu.

Enne remondi alustamist teostame kaamerauuring, et hinnata kahjustuse täpset ulatust ja valida kõige otstarbekam remondimeetod. See väldib olukordi, kus parandatakse ühes kohas ja mõne aja pärast tekib uus probleem kõrval.

Kõik remonditööd garanteerime 12 kuuks. Remondi järel teostame survekatse — kontrollime, et kõik liitmikud ja ühendused on tihedalt suletud ja toru juhib vett õiges suunas. Teenindame kõiki Tallinna linnaosasid ja Harjumaa valdu: Mustamäe, Lasnamäe, Kristiine, Põhja-Tallinn, Nõmme, Pirita, Haabersti, Kesklinn, Viimsi, Saue, Keila.`,

  long_en: `Sewer repair is needed when the pipe problem is not a blockage but physical damage — caused by cracks, corrosion, displaced joints, root intrusion or a collapsed pipe section. Such faults cannot be solved by hydro-jetting or biological cleaners; they require mechanical intervention by a professional.

The most common drainage damage in Tallinn residential buildings: cast-iron sewer pipe corrosion (thinning walls → leak → water damage to the neighbour below), displacement of a PVC fitting during renovation work or due to ground load, root intrusion in outdoor sewers — pine and birch roots break through joints and block the flow, and incorrect pipe gradient — water pools, sediment settles and recurring blockages result.

We carry out sewer pipe repairs in several ways. Spot repair — we cut out the damaged section and replace it with new PVC or PP; joints are secured with certified rubber clamps. Root intrusion removal — we remove roots mechanically and install a special root-resistant sleeve. Full pipe section replacement — we replace a complete section, for example the full length of a single-floor vertical. Cast-iron to PVC conversion — particularly relevant in Tallinn panel blocks from the 1960s–1980s where cast-iron drainage has reached the end of its service life.

Before starting any repair we carry out a camera inspection to assess the exact extent of the damage and choose the most appropriate repair method. This prevents situations where one spot is fixed only for a new problem to emerge nearby.

All repair work carries a 12-month guarantee. After the repair we carry out a pressure test to verify that all joints and connections are fully sealed and the pipe drains in the correct direction. We serve all Tallinn districts and Harjumaa municipalities: Mustamäe, Lasnamäe, Kristiine, Põhja-Tallinn, Nõmme, Pirita, Haabersti, Kesklinn, Viimsi, Saue, Keila.`,

  long_ru: `Ремонт канализации требуется тогда, когда проблема — не засор, а физическое повреждение: трещины, коррозия, смещённые соединения, прорастание корней или разрушение участка трубы. Такие неисправности не устранить гидропромывкой или биологическими средствами — нужно механическое вмешательство специалиста.

Наиболее распространённые повреждения канализации в жилых домах Таллина: коррозия чугунных канализационных труб (истончение стенок → течь → ущерб соседям снизу), смещение ПВХ-фитинга при ремонтных работах или под воздействием грунтовой нагрузки, прорастание корней в наружную канализацию — корни сосны и берёзы пробиваются через стыки и перекрывают поток, а также неправильный уклон трубы — вода застаивается, оседает осадок и образуются повторяющиеся засоры.

Ремонт канализационных труб выполняем несколькими способами. Точечный ремонт — вырезаем повреждённый участок и заменяем его новым ПВХ или ПП; соединения крепятся сертифицированными резиновыми хомутами. Устранение корней — удаляем корни механически и устанавливаем специальную манжету, устойчивую к прорастанию. Полная замена участка трубы — заменяем целый участок, например всю вертикаль на одном этаже. Замена чугуна на ПВХ — особенно актуально в таллинских панельных домах 1960–1980-х годов, где чугунная канализация достигла конца срока службы.

Перед началом любого ремонта проводим видеодиагностику, чтобы точно оценить масштаб повреждения и выбрать наиболее подходящий метод. Это позволяет избежать ситуаций, когда одно место отремонтировано, а рядом вскоре возникает новая проблема.

На все ремонтные работы даём гарантию 12 месяцев. После ремонта проводим испытание давлением — проверяем, что все фитинги и соединения герметичны, а труба отводит воду в правильном направлении. Обслуживаем все районы Таллина и волости уезда Харью: Мустамяэ, Ласнамяэ, Кристийне, Пыхья-Таллинн, Нымме, Пирита, Хааберсти, Кесклинн, Вийтна, Сауэ, Кейла.`,

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
      question_et: "Kuidas tean, kas toru vajab remonti või täielikku vahetust?",
      question_en: "How do I know if a pipe needs repair or full replacement?",
      question_ru: "Как понять, нужен ли ремонт или полная замена трубы?",
      answer_et: "Kaamerauuring näitab täpselt kahjustuse ulatuse ja asukoha. Väikesed praod ja nihestunud liitmikud saame punktremontida, kuid ulatuslikult roostunud malmist toru on majanduslikult mõistlikum täielikult välja vahetada — üks suur töö on odavam kui korduv lappimistsükkel.",
      answer_en: "A camera inspection shows the exact extent and location of damage. Small cracks and displaced joints can be spot-repaired, but heavily corroded cast-iron pipe is more economical to replace in full — one major job is cheaper than a cycle of repeated patching.",
      answer_ru: "Видеодиагностика показывает точный масштаб и местонахождение повреждения. Небольшие трещины и смещённые фитинги можно отремонтировать точечно, но сильно проржавевшую чугунную трубу экономически целесообразнее заменить полностью — одна большая работа дешевле цикла многократных заплаток.",
    },
    {
      question_et: "Kas remondi ajal peab vee katkestama?",
      question_en: "Does the water need to be shut off during repair?",
      question_ru: "Нужно ли отключать воду во время ремонта?",
      answer_et: "Sisekanalisatsiooni remondi puhul enamasti ei pea vett katkestama — kanalisatsioon ei ole surveveesüsteem. Vett tuleb katkestada ainult siis, kui remont hõlmab ka veevarustuse ühenduspunkte (nt WC-istme või valamu äravool koos veevõtuga).",
      answer_en: "For drainage repairs a water shut-off is usually not required — drainage is not a pressurised system. Water needs to be shut off only when the repair involves water supply connection points (e.g. a WC pan or basin drain combined with a supply fitting).",
      answer_ru: "При ремонте канализации отключение воды обычно не требуется — канализация не является напорной системой. Вода отключается только тогда, когда ремонт затрагивает точки подключения водоснабжения (например, унитаз или умывальник вместе с краном).",
    },
    {
      question_et: "Kas juurtungimine kanalisatsiooni on levinud Tallinnas?",
      question_en: "Is root intrusion into sewers common in Tallinn?",
      question_ru: "Распространено ли прорастание корней в канализацию в Таллине?",
      answer_et: "Jah, eriti eramajades ja vanades kortermajades, kus väliskanalisatsioon asub kõrvuti puude juurestikuga. Männi- ja kasejuured otsivad niiskust ning tungivad liitmikuvahedest toru sisse. Kaamerauuring tuvastab, kus juured on ning kas piisab mehaanilisest eemaldamisest või on vaja liitmiku vahetust.",
      answer_en: "Yes, especially in detached houses and older apartment buildings where outdoor sewers run alongside tree root systems. Pine and birch roots seek moisture and force their way in through joint gaps. A camera inspection reveals where the roots are and whether mechanical removal is enough or a joint replacement is needed.",
      answer_ru: "Да, особенно в частных домах и старых многоквартирных домах, где наружная канализация проходит рядом с корневой системой деревьев. Корни сосны и берёзы ищут влагу и проникают через зазоры в стыках. Видеодиагностика выявляет места прорастания корней и определяет, достаточно ли механического удаления или необходима замена стыка.",
    },
    {
      question_et: "Kui kaua kestab garantii kanalisatsiooni remondile?",
      question_en: "How long is the guarantee on sewer repair?",
      question_ru: "Какова гарантия на ремонт канализации?",
      answer_et: "Anname 12 kuu garantii kõigile remonditöödele. Iga remondi lõpus teostame survekatse ja klient saab kirjaliku töö üleandmis-vastuvõtmise akti. Kui garantiiperioodil ilmneb probleem meie töö tõttu, tuleme ja lahendame tasuta.",
      answer_en: "We give a 12-month guarantee on all repair work. At the end of each repair we carry out a pressure test and the client receives a written handover act. If a problem arises during the guarantee period due to our work, we come back and fix it at no charge.",
      answer_ru: "Даём гарантию 12 месяцев на все ремонтные работы. По окончании каждого ремонта проводим испытание давлением, и клиент получает письменный акт приёма-передачи. Если в гарантийный период возникнет проблема по нашей вине, приедем и устраним её бесплатно.",
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

  long_et: `Rasvapüüdur on kohustuslik seade igas toiduettevõttes, restoranis ja suurköögis — Eesti seadusandlus nõuab selle paigaldamist kõikidele köögiseadmetele, mis juhivad rasvarikkaid reovesid kanalisatsiooni. Seade töötab lihtsalt: vesi ja rasv eraldatakse tiheduserinevuse põhjal, rasv koguneb püüduri ülaosasse ning puhas vesi juhitakse edasi kanalisatsiooni. Probleem tekib siis, kui rasvapüüdurit ei puhastata — see täitub ning rasv hakkab ületäituvusest tulenevalt kanalisatsioonitorudesse voolama.

Ummistunud rasvakanalisatsioon on restaurandi jaoks tõsine probleem: toiduvalmistamine peatatakse, klientidele tekib ebameeldiv lõhn, sanitaarinspektsiooni trahv võib ulatuda sadade eurodeni ja kaevamistöödega torustiku puhastamine on veelgi kallim. Ühesõnaga: regulaarne rasvapüüduri puhastus on kordi odavam kui tagajärgedega tegelemine.

Torupro teostab rasvapüüduri puhastust professionaalse vakuumseadmega: tühjendame ja peseme nii maapealset (köögis asuv kast) kui ka maapaealst tüüpi rasvapüüdureid. Töö on kiire ja puhas — meie spetsialistid töötavad köögist eraldi, ei sega toiduvalmistamist ja koristame töötsooni pärast.

Puhastusprotsess hõlmab: rasvapüüduri täielikku tühjendamist vakuumautoga, rasvapüüduri sisepindade pesemist surveveeaparaadiga, ülevoolavate torude kontrolli ja puhastamist, haise tekitavate biokile eemaldamist ning korgi ja tihendusmaterjalide kontrolli.

Pärast puhastust kontrollib spetsialist rasvapüüduri seisundit ja katted ning annab kirjaliku üleandmis-vastuvõtmise akti — dokument on nõutav sanitaarinspektsiooni kontrolli puhul ja kinnisvaravaldaja aruandluses.

Soovitame rasvapüüdurit puhastada vähemalt kord kuus (suure koormusega köökides kaks korda kuus). Pakume regulaarseid hoolduslepinguid fikseeritud kuutasuga — me tuleme õigel ajal ilma teie meeldetuletuseta. Teenindame kõiki Tallinna ja Harjumaa toitlustusettevõtteid: kohvikud, restoranid, haiglad, koolid, tootmisköögid, puhkekeskused.`,

  long_en: `A grease trap is a mandatory device in every food business, restaurant and large kitchen — Estonian law requires its installation for all kitchen equipment that discharges fat-rich wastewater into the sewer. The device works simply: water and fat are separated by density difference, fat accumulates in the upper part of the trap, and clean water flows on into the drainage system. The problem arises when the trap is not cleaned — it fills up and fat starts flowing into the drain pipes through overflow.

A blocked grease drainage system is a serious problem for a restaurant: food preparation has to stop, customers experience unpleasant smells, a sanitary inspection fine can run to hundreds of euros and excavation work to clear the pipework costs even more. In short: regular grease trap cleaning costs far less than dealing with the consequences.

Torupro carries out grease trap cleaning with professional vacuum equipment: we empty and wash both above-ground (the kitchen cabinet unit) and below-ground grease traps. The work is fast and clean — our specialists work away from the kitchen area, do not interfere with food preparation and clean up the work zone afterwards.

The cleaning process includes: complete emptying of the grease trap with a vacuum tanker, pressure-washing the interior surfaces of the trap, inspecting and cleaning overflow pipes, removing odour-causing biofilm, and checking the lid and sealing materials.

After cleaning our specialist inspects the grease trap condition and fittings and provides a written handover act — a document required for sanitary inspection checks and property management reporting.

We recommend cleaning grease traps at least once a month (twice a month in high-load kitchens). We offer regular maintenance contracts at a fixed monthly fee — we arrive on schedule without you having to remind us. We serve all food service businesses in Tallinn and Harjumaa: cafés, restaurants, hospitals, schools, production kitchens and leisure centres.`,

  long_ru: `Жироуловитель — обязательное устройство в каждом предприятии общественного питания, ресторане и большой кухне: эстонское законодательство требует его установки для всего кухонного оборудования, отводящего жиросодержащие сточные воды в канализацию. Принцип работы прост: вода и жир разделяются по разности плотностей, жир скапливается в верхней части уловителя, а чистая вода поступает в канализацию. Проблема возникает при нерегулярной очистке — жироуловитель переполняется, и жир начинает перетекать в канализационные трубы.

Засорённая жировая канализация — серьёзная проблема для ресторана: приготовление пищи прекращается, у посетителей ощущается неприятный запах, штраф санитарной инспекции может составить сотни евро, а земляные работы по прочистке трубопровода обойдутся ещё дороже. Иными словами: регулярная очистка жироуловителя намного дешевле, чем борьба с последствиями.

Torupro выполняет очистку жироуловителя профессиональным вакуумным оборудованием: откачиваем и промываем как надземные (кухонный ящик), так и подземные жироуловители. Работа выполняется быстро и аккуратно — специалисты работают в стороне от кухонной зоны, не мешают приготовлению пищи и убирают рабочее место после окончания.

Процесс очистки включает: полную откачку жироуловителя ассенизаторской машиной, промывку внутренних поверхностей аппаратом высокого давления, проверку и прочистку переливных труб, удаление биоплёнки, являющейся источником запаха, а также проверку крышки и уплотнительных материалов.

После очистки специалист проверяет состояние жироуловителя и крышек и составляет письменный акт приёма-передачи — документ необходим при проверке санитарной инспекцией и для отчётности управляющей компании.

Рекомендуем очищать жироуловитель не реже одного раза в месяц (на кухнях с высокой нагрузкой — дважды в месяц). Предлагаем регулярные сервисные контракты по фиксированному ежемесячному тарифу — приедем вовремя без напоминаний с вашей стороны. Обслуживаем все предприятия питания в Таллине и уезде Харью: кафе, рестораны, больницы, школы, производственные кухни, центры отдыха.`,

  h1_et: "Rasvapüüduri Puhastus Tallinnas — Tühjendus ja Hooldus",
  h1_en: "Grease Trap Cleaning in Tallinn — Emptying and Maintenance",
  h1_ru: "Очистка жироуловителя в Таллине — откачка и обслуживание",

  h2_et: "Restoranid, kohvikud, suurköögid — hoiame teie kanalisatsiooni probleemideta",
  h2_en: "Restaurants, cafés, large kitchens — we keep your drainage problem-free",
  h2_ru: "Рестораны, кафе, большие кухни — обеспечиваем бесперебойную работу канализации",

  metaTitle_et: "Rasvapüüduri Puhastus Tallinn | Restoranid — Torupro",
  metaTitle_en: "Grease Trap Cleaning Tallinn | Restaurants — Torupro",
  metaTitle_ru: "Очистка жироуловителя Таллин | Рестораны — Torupro",

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
      answer_et: "Restoranidele ja suure koormusega köökidele soovitame puhastust kord kuus, mõnikord kaks korda kuus. Väiksemate kohvikute puhul võib piisata iga kahe kuu tagant. Sanitaarinspektsioon võib nõuda tihedamat puhastust — sel juhul saate meie üleandmisaktid dokumentatsiooniks.",
      answer_en: "For restaurants and high-load kitchens we recommend monthly cleaning, sometimes twice a month. For smaller cafés every two months may suffice. Sanitary inspections may require more frequent cleaning — in that case our handover acts serve as documentation.",
      answer_ru: "Для ресторанов и кухонь с высокой нагрузкой рекомендуем ежемесячную чистку, иногда дважды в месяц. Для небольших кафе может быть достаточно раз в два месяца. Санитарная инспекция может требовать более частой очистки — в этом случае наши акты служат документацией.",
    },
    {
      question_et: "Kas antakse üleandmisakt, mida sanitaarinspektsioonile näidata?",
      question_en: "Is a handover act provided for sanitary inspection purposes?",
      question_ru: "Выдаётся ли акт для предъявления санитарной инспекции?",
      answer_et: "Jah, iga puhastuse järel anname kirjaliku üleandmis-vastuvõtmise akti, mis sisaldab puhastuse kuupäeva, teostatud töö kirjelduse ja vastutava isiku allkirja. Akt vastab Terviseameti nõuetele.",
      answer_en: "Yes, after every cleaning we provide a written handover act containing the cleaning date, description of work performed and the signature of the responsible person. The act meets the requirements of the Health Board.",
      answer_ru: "Да, после каждой очистки выдаём письменный акт приёма-передачи, содержащий дату очистки, описание выполненных работ и подпись ответственного лица. Акт соответствует требованиям Департамента здоровья.",
    },
    {
      question_et: "Mis juhtub, kui rasvapüüdurit ei puhastata?",
      question_en: "What happens if a grease trap is not cleaned?",
      question_ru: "Что происходит, если не чистить жироуловитель?",
      answer_et: "Rasvapüüdur täitub ning rasv hakkab kanalisatsioonitoru seintele ladestuma. See põhjustab torustiku ummistuse ja ebameeldiva haise. Lisaks rikub liigne rasv bioloogilisi puhastusjaamasid ja ettevõte riskib trahviga — nii sanitaarinspektsiooni kui ka kanalisatsiooniettevõtte poolt.",
      answer_en: "The grease trap fills up and fat starts accumulating on the pipe walls, causing a blockage and unpleasant smells. Excess fat also damages biological treatment plants and the business risks fines — from both the health inspectorate and the wastewater utility.",
      answer_ru: "Жироуловитель переполняется, жир начинает оседать на стенках канализационных труб, вызывая засор и неприятный запах. Кроме того, избыточный жир повреждает биологические очистные станции, и предприятие рискует получить штраф — как от санитарной инспекции, так и от компании водоканала.",
    },
    {
      question_et: "Kas pakute rasvapüüduri hoolduslepingut?",
      question_en: "Do you offer a grease trap maintenance contract?",
      question_ru: "Предлагаете ли вы контракт на обслуживание жироуловителя?",
      answer_et: "Jah, pakume regulaarseid hoolduslepinguid fikseeritud kuutasuga. Planeerime puhastuste ajakava teie koormuse järgi, teatame ette ning tuleme õigel ajal. Lepinguklient saab ka eelistatud reageerimisaja avariiliste ummistuste korral.",
      answer_en: "Yes, we offer regular maintenance contracts at a fixed monthly fee. We schedule cleaning dates according to your load, notify you in advance and arrive on time. Contract clients also get a priority response time for emergency blockages.",
      answer_ru: "Да, предлагаем регулярные контракты на обслуживание по фиксированному ежемесячному тарифу. Составляем график очистки в соответствии с вашей нагрузкой, уведомляем заранее и приезжаем вовремя. Клиенты по контракту получают также приоритетное время реагирования при аварийных засорах.",
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

  long_et: `Liivapüüdur on sademeveesüsteemi hädavajalik komponent — see kogub vihmasademe ja lume sulamisveega kaasatuleva liiva, killustiku, savi ja orgaanilise materjali, mis muidu ladestub kanalisatsioonitoru põhjale ja tekitab ummistuse. Tallinna sadeveekanalisatsioon on ühenduses linna vihmaveekanalisatsioonivõrguga ja selle ummistamine toob kaasa trahve ning kahjunõudeid.

Liivapüüduri tüübid, mida teenindame: klassikaline betoon- või polüetüleenkast (hoovides ja parklates), trapiliivapüüdur (kaubandushoovide ja tootmishoonetde vedrustuses), silindriliivapüüdur (kaasaegsetes parklasüsteemides) ja kombikaev liiva- ja rasvapüüduri funktsiooniga (bensiinijaamade pesupunktid). Iga tüübi puhastamine nõuab erinevat tehnikat.

Töö käik: saabume vakuumseadmega, imeme välja kogunenud sete (liiv, savi, lehed, väikesed kivid), peseme liivapüüduri seinad kõrgsurveveega, kontrollime ülelaske ja väljundtoru läbilaskvust, tuvastame vajadusel muud probleemid (pragud, juured, vale kalle) ning väljastame lõpus kirjaliku akti.

Puhastamata liivapüüduri tagajärjed on märkimisväärsed: parkla üleujutus vihmase ilmaga, sadeveetoru täielik ummistus, trahv keskkonnaameti või KOVi poolt, kohusliku regulaarse puhastuse puudumisel kaob ka riikliku keskkonnaloa kehtivus tootmisettevõtetel, ning kaevamistööd ummistuse leidmiseks maksavad tuhandeid eurosid.

Teenindame parklaoperaatoreid, korteriühistuid, tootmisettevõtteid, kaubanduskeskusi, logistikakeskusi, tanklaid ja eramuid kogu Tallinna ja Harjumaa piirkonnas. Pakume hooajalisi (kevad + sügis) või aastaringse hoolduslepinguid fikseeritud hinnaga.

Pärast puhastust väljastame kirjaliku akti kuupäeva, teostuse kirjelduse ja vastutava isiku andmetega — nõutav keskkonnaloa dokumentatsiooni, KOVi kontrollide ja hoonekorralduse jaoks.`,

  long_en: `A sand trap is an essential component of the stormwater system — it collects sand, gravel, clay and organic material carried by rainwater and snowmelt that would otherwise settle at the bottom of sewer pipes and cause blockages. Tallinn's stormwater drainage connects to the city's rainwater network, and blocking it brings fines and damage claims.

Types of sand trap we service: classic concrete or polyethylene box (in yards and car parks), gully sand trap (in commercial yard and industrial building drainage), cylindrical sand trap (in modern car park systems) and combination manhole with combined sand and grease trap function (petrol station wash points). Each type requires different cleaning technique.

Work process: we arrive with vacuum equipment, suction out accumulated sediment (sand, clay, leaves, small stones), pressure-wash the trap walls, check the overflow and outlet pipe flow, identify other issues where present (cracks, roots, incorrect gradient) and issue a written act at the end.

The consequences of an uncleaned sand trap are significant: car park flooding in rainy weather, complete stormwater pipe blockage, a fine from the environmental agency or local authority, loss of national environmental permit validity for industrial businesses if mandatory regular cleaning is absent, and excavation work to locate the blockage costing thousands of euros.

We serve car park operators, housing associations, manufacturing businesses, shopping centres, logistics centres, petrol stations and private properties throughout Tallinn and Harjumaa. We offer seasonal (spring + autumn) or year-round maintenance contracts at a fixed price.

After cleaning we issue a written act with the date, description of work and the responsible person's details — required for environmental permit documentation, local authority checks and building management.`,

  long_ru: `Пескоуловитель — необходимый элемент ливневой канализации: он собирает песок, гравий, глину и органические материалы, переносимые дождевыми водами и талым снегом, которые иначе осядут на дне канализационных труб и вызовут засор. Ливневая канализация Таллина подключена к городской дождевой сети, и её засорение влечёт штрафы и претензии об ущербе.

Типы пескоуловителей, которые мы обслуживаем: классический бетонный или полиэтиленовый ящик (во дворах и на парковках), дворовый пескоуловитель (в дренаже торговых дворов и промышленных зданий), цилиндрический пескоуловитель (в современных системах парковок) и комбинированный колодец с функциями пескоуловителя и жироуловителя (моечные пункты АЗС). Каждый тип требует своей технологии очистки.

Процесс работы: приезжаем с вакуумным оборудованием, откачиваем накопившийся осадок (песок, глина, листья, мелкие камни), промываем стенки пескоуловителя аппаратом высокого давления, проверяем пропускную способность перелива и выходной трубы, при необходимости выявляем другие проблемы (трещины, корни, неправильный уклон) и в конце выдаём письменный акт.

Последствия неочищенного пескоуловителя весьма серьёзны: затопление парковки в дождливую погоду, полный засор ливневой трубы, штраф от экологической службы или местного самоуправления, утрата государственного разрешения на природопользование для производственных предприятий при отсутствии обязательной регулярной очистки, а также земляные работы по поиску засора стоимостью в тысячи евро.

Обслуживаем операторов парковок, товарищества собственников, производственные предприятия, торговые центры, логистические центры, АЗС и частные объекты по всему Таллину и уезду Харью. Предлагаем сезонные (весна + осень) или круглогодичные контракты на обслуживание по фиксированной цене.

После очистки выдаём письменный акт с датой, описанием работ и данными ответственного лица — необходим для документации разрешения на природопользование, проверок местного самоуправления и управления зданием.`,

  h1_et: "Liivapüüduri Puhastus Tallinnas — Sadevee Kanalisatsioon Korras",
  h1_en: "Sand Trap Cleaning in Tallinn — Stormwater Drainage in Order",
  h1_ru: "Очистка пескоуловителя в Таллине — ливневая канализация в порядке",

  h2_et: "Parkla, hoov, tootmine — hoiame sadevee süsteemi toimivana aastaringselt",
  h2_en: "Car park, yard, production — we keep the stormwater system working year-round",
  h2_ru: "Парковка, двор, производство — обеспечиваем работу ливневой системы круглый год",

  metaTitle_et: "Liivapüüduri Puhastus Tallinn | Sadevesi — Torupro",
  metaTitle_en: "Sand Trap Cleaning Tallinn | Stormwater Drainage — Torupro",
  metaTitle_ru: "Очистка пескоуловителя Таллин | Ливнёвка — Torupro",

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
      answer_et: "Kevadel pärast liiva- ja lume sulamishooaega ning sügisel enne vihmaperioodi. Soovitame kahekordset aastast puhastust — nii hoiame liivapüüduri mahutavuse korras ja väldime parkla üleujutust. Suure koormusega parklates (nt korralikult liidestatud kaubanduskeskuste parklad) võib vajada tihedamat puhastust.",
      answer_en: "In spring after the sand and snow melting season and in autumn before the rainy period. We recommend twice-yearly cleaning — this keeps the trap capacity in order and prevents car park flooding. High-load car parks (e.g. properly connected shopping centre car parks) may need more frequent cleaning.",
      answer_ru: "Весной после сезона таяния снега и песка и осенью перед дождливым сезоном. Рекомендуем двукратную ежегодную чистку — это поддерживает ёмкость пескоуловителя и предотвращает затопление парковки. Парковки с высокой нагрузкой (например, парковки торговых центров) могут требовать более частой очистки.",
    },
    {
      question_et: "Kas puhastuse järel väljastatakse dokument?",
      question_en: "Is a document issued after cleaning?",
      question_ru: "Выдаётся ли документ после очистки?",
      answer_et: "Jah, väljastame kirjaliku akti, mis sisaldab puhastuse kuupäeva, teostuse kirjeldust ja vastutava isiku andmeid. Vajalik KOVi kontrolliks ja keskkonnaloa dokumentatsiooniks, samuti korteriühistu raamatupidamise jaoks.",
      answer_en: "Yes, we issue a written act containing the cleaning date, description of work and the responsible person's details. Required for local authority checks, environmental permit documentation and housing association accounting.",
      answer_ru: "Да, выдаём письменный акт, содержащий дату очистки, описание работ и данные ответственного лица. Необходим для проверки местного самоуправления, документации разрешения на природопользование, а также для бухгалтерии товарищества собственников.",
    },
    {
      question_et: "Mis vahe on liivapüüduril ja rasvapüüduril?",
      question_en: "What is the difference between a sand trap and a grease trap?",
      question_ru: "В чём разница между пескоуловителем и жироуловителем?",
      answer_et: "Liivapüüdur kogub tahkeid osakesi (liiv, kruus, kivid, lehed) sademeveest — need on tavaliselt õues. Rasvapüüdur eraldab rasva ja õli köögireoveest — see asub siseruumides köögi kanalisatsiooniühenduses. Mõlemad vajavad regulaarset tühjendust, kuid eri põhjustel ja erineva sagedusega.",
      answer_en: "A sand trap collects solid particles (sand, gravel, stones, leaves) from stormwater — these are usually located outside. A grease trap separates fat and oil from kitchen wastewater — it is located indoors at the kitchen drainage connection. Both need regular emptying, but for different reasons and at different intervals.",
      answer_ru: "Пескоуловитель собирает твёрдые частицы (песок, гравий, камни, листья) из ливневых вод — как правило, расположен снаружи. Жироуловитель отделяет жир и масло от кухонных сточных вод — расположен внутри помещения в точке подключения кухонной канализации. Оба нуждаются в регулярной откачке, но по разным причинам и с разной периодичностью.",
    },
    {
      question_et: "Kas saate puhastada ka suuremaid sademeveesüsteeme?",
      question_en: "Can you clean larger stormwater systems?",
      question_ru: "Можете ли вы очищать более крупные ливневые системы?",
      answer_et: "Jah, meie survepesuauto on mõeldud ka suurematele sademeveesüsteemidele — vaatluskaevud, sadeveetrass ja kombineeritud kanalisatsioonisüsteemid. Suuremahuliste tööde puhul koostame eelnevalt kalkulatsiooni.",
      answer_en: "Yes, our jetting tanker is also designed for larger stormwater systems — inspection manholes, stormwater mains and combined drainage systems. For larger-volume work we prepare a quote in advance.",
      answer_ru: "Да, наша канализационная машина предназначена и для более крупных ливневых систем — смотровые колодцы, ливневые магистрали и комбинированные канализационные системы. Для работ большого объёма заранее составляем смету.",
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

  long_et: `Torustiku avarii ei hoia kellaaega — lekkiv toruliide, murtud peakraan või ummistunud WC võib juhtuda öösel, nädalavahetusel või riigipühal. Torupro avariibrigaad on valmis väljuma 24 tundi ööpäevas, 7 päeva nädalas ja jõuab Tallinna tavaliselt 60 minuti jooksul.

Millised avariid käsitleme: külmaveetorust purskav leke (suleme peakraan, isoleerime kahjustatud lõik, paigaldame uue liitmiku), kütteradiaatori leke korteris (eriti ohtlik — vesi levib kiirelt naaberkorteritesse, tegutseme kiirelt), WC-poti sisemuse rike (ujuki katki, sulgurventiil lekib, WC ei loputa või ei peatu lopsu), valamu, duši või vanni äravoolupump ummistus või rike, torumurruga seotud üleujutus korteris või keldris, boileri (pardaveesoojendi) leke või rike ning segisti, kraani või sulgarmatuuride vahetus.

Avariikutsel käime läbi järgmise korra: spetsialist hindab kohapeal kahju ulatuse, suleb vajadusel vee, kõrvaldab vahetu ohu (veejooks), teostab paranduse või paigaldab ajutise lahenduse ning dokumenteerib kõik tehtud tööd kirjaliku aktiga. Akt on vajalik kindlustusseltsile kahjunõude esitamiseks — teame täpselt, milliseid fotosid ja kirjeldusi kindlustus vajab.

Avariiteenuse hind on fikseeritud ja teile selge enne töö algust — üllatusi ei tule. Öö- ja nädalavahetuse väljasõitudel kehtib lisatariif, mis samuti teile eelnevalt kommunikeeritakse. Pärast avariilahendust pakume vajadusel täisremonti eelistingimustel — ühekordne kontakt lahendab nii avaarii kui ka remondi.

Teeninduspiirkond: kõik Tallinna linnaosad (Mustamäe, Lasnamäe, Kristiine, Põhja-Tallinn, Nõmme, Pirita, Haabersti, Kesklinn) ning lähemad Harjumaa vallad (Viimsi, Maardu, Saue, Keila). Kaugemate asukohtade puhul võib reageerimisaeg olla kuni 90 minutit.`,

  long_en: `A plumbing emergency does not keep business hours — a leaking pipe joint, burst stopcock or blocked WC can happen at night, on a weekend or a public holiday. The Torupro emergency team is ready to dispatch 24 hours a day, 7 days a week and reaches Tallinn usually within 60 minutes.

Emergencies we handle: a pressurised cold-water pipe bursting (we shut the mains, isolate the damaged section, install a new fitting), a heating radiator leaking in a flat (especially dangerous — water spreads quickly into neighbouring flats; we act fast), WC cistern failure (float broken, shut-off valve leaking, cistern not flushing or not stopping), basin, shower or bath waste pump blockage or failure, flat or cellar flooding from a burst pipe, hot water cylinder (boiler) leaking or failing, and mixer tap, tap or isolating valve replacement.

On an emergency call-out we follow this procedure: the specialist assesses the extent of damage on site, shuts off water as required, eliminates the immediate risk (water flow), carries out the repair or installs a temporary solution and documents all work with a written act. The act is needed for submitting an insurance claim — we know exactly what photos and descriptions insurers require.

The emergency service price is fixed and clear to you before work begins — no surprises. Out-of-hours and weekend call-outs carry a surcharge that is also communicated in advance. After the emergency we can offer a full repair on preferential terms — one point of contact resolves both the emergency and the follow-up repair.

Service area: all Tallinn districts (Mustamäe, Lasnamäe, Kristiine, Põhja-Tallinn, Nõmme, Pirita, Haabersti, Kesklinn) and the nearest Harjumaa municipalities (Viimsi, Maardu, Saue, Keila). For more distant locations the response time may be up to 90 minutes.`,

  long_ru: `Сантехническая авария не следует рабочему расписанию — протечка трубного соединения, лопнувший кран или засор унитаза могут случиться ночью, в выходной или праздничный день. Аварийная бригада Torupro готова выехать круглосуточно, 7 дней в неделю и добирается до Таллина обычно за 60 минут.

Аварии, которые мы устраняем: прорыв трубы холодного водоснабжения под давлением (перекрываем стояк, изолируем повреждённый участок, монтируем новый фитинг), течь отопительного радиатора в квартире (особенно опасна — вода быстро распространяется в соседние квартиры; действуем незамедлительно), неисправность бачка унитаза (сломан поплавок, подтекает запорный клапан, бачок не сливает или не перекрывается), засор или поломка сифона умывальника, душа или ванны, подтопление квартиры или подвала из-за прорыва трубы, течь или неисправность водонагревателя (бойлера), а также замена смесителя, крана или запорной арматуры.

При аварийном вызове следуем такому порядку: специалист оценивает масштаб ущерба на месте, при необходимости перекрывает воду, устраняет непосредственную угрозу (водоток), выполняет ремонт или устанавливает временное решение и документирует все работы письменным актом. Акт необходим для подачи страхового требования — мы точно знаем, какие фотографии и описания требует страховая.

Стоимость аварийного выезда фиксирована и известна вам до начала работ — никаких сюрпризов. На выезды в ночное время и выходные дни действует надбавка, о которой также сообщаем заранее. После устранения аварии предлагаем полноценный ремонт на льготных условиях — один контакт решает и аварию, и последующий ремонт.

Зона обслуживания: все районы Таллина (Мустамяэ, Ласнамяэ, Кристийне, Пыхья-Таллинн, Нымме, Пирита, Хааберсти, Кесклинн) и ближайшие волости уезда Харью (Вийтна, Маарду, Сауэ, Кейла). Для более отдалённых мест время реагирования может составлять до 90 минут.`,

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
      answer_et: "Tallinnas tavaliselt 60 minuti jooksul. Lähematesse Harjumaa valdadesse (Viimsi, Maardu, Saue) jõuame enamasti 90 minutiga. Anname ETA kinnituse kohe pärast kõnet — helista numbril +372 56 877 877.",
      answer_en: "In Tallinn usually within 60 minutes. To the nearest Harjumaa municipalities (Viimsi, Maardu, Saue) we usually arrive within 90 minutes. We confirm the ETA immediately after the call — call +372 56 877 877.",
      answer_ru: "По Таллину обычно в течение 60 минут. До ближайших волостей уезда Харью (Вийтна, Маарду, Сауэ) обычно добираемся за 90 минут. Подтверждаем время прибытия сразу после звонка — звоните по номеру +372 56 877 877.",
    },
    {
      question_et: "Kas öösel on kõrgem hind?",
      question_en: "Is there a higher rate at night?",
      question_ru: "Действует ли ночной тариф?",
      answer_et: "Öö- (22:00–07:00) ja nädalavahetuse avariiväljakutsetel kehtib lisatariif, mis on teile enne töö algust selge. Päevasel tööajal (08:00–20:00) planeeritud töödel lisatariif ei kehti.",
      answer_en: "Night-time (22:00–07:00) and weekend emergency call-outs carry a surcharge that is made clear to you before work begins. Daytime (08:00–20:00) planned work does not attract a surcharge.",
      answer_ru: "Аварийные вызовы в ночное время (22:00–07:00) и в выходные дни сопровождаются надбавкой, которую сообщают до начала работ. На плановые работы в дневное время (08:00–20:00) надбавка не применяется.",
    },
    {
      question_et: "Kas andke kirjalik akt kindlustusseltsile?",
      question_en: "Do you provide a written act for the insurance company?",
      question_ru: "Выдаёте ли вы письменный акт для страховой компании?",
      answer_et: "Jah, iga avariiväljakutse järel koostame kirjaliku töö üleandmis-vastuvõtmise akti, mis sisaldab kahju kirjeldust, foto- ja tööde dokumentatsiooni ning teostatud tööde nimekirja. See on vajalik kindlustuskahjunõude esitamiseks.",
      answer_en: "Yes, after every emergency call-out we prepare a written handover act containing the damage description, photo and work documentation, and a list of work performed. This is needed for submitting an insurance claim.",
      answer_ru: "Да, после каждого аварийного выезда составляем письменный акт приёма-передачи, содержащий описание ущерба, фото и рабочую документацию, а также перечень выполненных работ. Это необходимо для подачи страхового требования.",
    },
    {
      question_et: "Mida teha enne torumehe saabumist, kui toru on katki?",
      question_en: "What should I do before the plumber arrives if a pipe is burst?",
      question_ru: "Что делать до приезда сантехника, если труба лопнула?",
      answer_et: "Sulgege esimese asjana korteri või maja peakraan (tavaliselt asisb mõõdusõlme kapis või keldris). See peatab veejooksu ja piirab kahju. Seejärel helistage meile — anname koheselt telefonikonsultatsiooni ja kinnitame saabumisaja.",
      answer_en: "First of all shut the flat or house stopcock (usually located in the meter cabinet or cellar). This stops the water flow and limits the damage. Then call us — we give immediate phone advice and confirm the arrival time.",
      answer_ru: "Прежде всего закройте запорный кран квартиры или дома (обычно находится в шкафу с счётчиком или в подвале). Это остановит водоток и ограничит ущерб. Затем позвоните нам — дадим немедленную консультацию по телефону и подтвердим время прибытия.",
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

  long_et: `Veetorude paigaldus on üks põhilisi torutöö liike — olgu tegemist uue kodu veevarustussüsteemi rajamisega, renoveerimisega või vanade roostes torudega paneelmajas. Torupro meistrid on sertifitseeritud töötama nii polüpropüleeni (PP-R), ristsidestatud polüetüleeni (PEX) kui ka vask- ja roostevabaterastorudega.

PP-R toru on praegune standard Eesti kortermajades ja elamutes — kerge, kestlik, katlakivikindel, sobib nii külma- kui ka soojaveesüsteemile. Polüfusioonkeevitusega liitmikud on tihedalt suletud ja ei lekkigi aastakümneid. PEX (ristsidestatud polüetüleen) on paindlik ja sobib eriti hästi põrandakütteringidesse ja kitsastesse ruumidesse, kus PP-R painduks liiga järsult. Vasktoru on kestlik traditsioon — korrosioonikindel, bakteristaatiline, sobib vanematesse hoonetesse, kus PVC ei sobi visuaalselt.

Millises mahus töötame: terviklik korteri veevarustussüsteemi rajamine renoveerimisprojektis (kõik kraanid, väljunud, mõõdusõlm), vanade galvaniseeritud terastorude vahetus PP-R või PEX-iga, uue vannitoa, köogi või lisatualeti veeühenduste rajamine, veemõõtjate ja survereduktorite vahetus, soojaveeboileri ühendamine torustikuga ning segistite, pesumasina ühenduse ja nõudepesumasina paigaldus.

Iga töö lõpus teostame survekatse — kontrollime, et süsteem peab surve all ja liitmikud on tihedalt kinni. Väljastame teostusdokumendi, mis on nõutav ehitusloa puhul ja tarvilik hilisema remondiinfo jaoks.

Teenindame kõiki Tallinna linnaosasid ja Harjumaa valdu. Uusehitiste puhul töötame koos projekteerijaga — meie kogemus hõlmab nii ühepereelamu täielikku veevarustusprojekti kui ka kolmetoalise korteri osarekonstruktsiooni.`,

  long_en: `Water pipe installation is one of the core plumbing services — whether building a water supply system in a new home, renovating or replacing old corroded pipes in a panel-block apartment. Torupro plumbers are certified to work with polypropylene (PP-R), cross-linked polyethylene (PEX) and copper and stainless-steel pipes.

PP-R pipe is the current standard in Estonian apartment buildings and houses — lightweight, durable, scale-resistant and suitable for both cold and hot water systems. Polyfusion-welded joints are tightly sealed and do not leak for decades. PEX (cross-linked polyethylene) is flexible and particularly well-suited for underfloor heating circuits and tight spaces where PP-R would bend too sharply. Copper pipe is a durable tradition — corrosion-resistant, bacteriostatic, and suited to older buildings where PVC does not fit aesthetically.

The scope of work we carry out: complete apartment water supply system installation in a renovation project (all taps, outlets, meter assembly), replacement of old galvanised steel pipes with PP-R or PEX, installation of new bathroom, kitchen or additional WC water connections, water meter and pressure reducer replacement, connection of hot water cylinders to the pipework, and installation of mixers, washing machine connections and dishwasher connections.

After every job we carry out a pressure test — verifying that the system holds pressure and all joints are sealed. We issue completion documentation, which is required for building permits and useful for future maintenance reference.

We serve all Tallinn districts and Harjumaa municipalities. For new builds we work alongside the design engineer — our experience spans from a complete water supply project for a single-family house to a partial renovation of a three-room apartment.`,

  long_ru: `Монтаж водопровода — одна из основных сантехнических работ: будь то устройство системы водоснабжения в новом доме, ремонт или замена старых проржавевших труб в панельном доме. Мастера Torupro сертифицированы для работы с полипропиленом (PP-R), сшитым полиэтиленом (PEX), а также медными и нержавеющими трубами.

Труба PP-R является современным стандартом в эстонских многоквартирных домах — лёгкая, долговечная, устойчивая к накипи и пригодная как для холодного, так и для горячего водоснабжения. Соединения, выполненные полифузионной сваркой, герметичны и не протекают десятилетиями. PEX (сшитый полиэтилен) гибок и особенно хорошо подходит для контуров тёплого пола и тесных помещений, где PP-R пришлось бы гнуть слишком резко. Медная труба — долговечная классика: устойчива к коррозии, обладает бактериостатическими свойствами и подходит для старых зданий, где ПВХ эстетически не уместен.

Объём выполняемых работ: полный монтаж системы водоснабжения квартиры в рамках ремонтного проекта (все краны, отводы, узел учёта), замена старых оцинкованных стальных труб трубами PP-R или PEX, устройство новых водных подключений в ванной, кухне или дополнительном санузле, замена водосчётчиков и редукторов давления, подключение водонагревателей к трубопроводу, монтаж смесителей, подключений стиральной и посудомоечной машин.

По окончании каждой работы проводим испытание давлением — проверяем, что система держит давление и все соединения герметичны. Выдаём исполнительную документацию, необходимую для разрешения на строительство и полезную для будущих ремонтных работ.

Обслуживаем все районы Таллина и волости уезда Харью. При строительстве новых объектов работаем совместно с проектировщиком — наш опыт охватывает как полный проект водоснабжения частного дома, так и частичную реконструкцию трёхкомнатной квартиры.`,

  h1_et: "Veetorude Paigaldus Tallinnas — PP-R, PEX, Vask",
  h1_en: "Water Pipe Installation in Tallinn — PP-R, PEX, Copper",
  h1_ru: "Монтаж водопровода в Таллине — PP-R, PEX, медь",

  h2_et: "Uus veevarustussüsteem või vanade torude vahetus — täispakett teostusdokumendiga",
  h2_en: "New water supply system or old pipe replacement — full package with completion documentation",
  h2_ru: "Новая система водоснабжения или замена старых труб — полный пакет с исполнительной документацией",

  metaTitle_et: "Veetorude Paigaldus Tallinn | PP-R, PEX — Torupro",
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
      answer_et: "Kõigil on eelised erinevates olukordades. PP-R on parim valik enamusele korteritest — soodne, kestlik ja lihtne paigaldada. PEX on parim põrandaküttes ja kohtades, kus toru peab keerulisi kurve tegema. Vasktoru sobib vanemate elamute restaureerimisse. Soovitame konkreetse valiku pärast vaatlust.",
      answer_en: "Each has advantages in different situations. PP-R is the best choice for most apartments — affordable, durable and easy to install. PEX is best for underfloor heating and places where the pipe needs to make complex bends. Copper suits the restoration of older buildings. We recommend the specific choice after inspection.",
      answer_ru: "У каждого есть преимущества в разных ситуациях. PP-R — лучший выбор для большинства квартир: доступный, долговечный и простой в монтаже. PEX — лучший для тёплых полов и мест, где трубу нужно гнуть по сложной траектории. Медь подходит для реставрации старых зданий. Конкретный выбор рекомендуем после осмотра.",
    },
    {
      question_et: "Kas veetorude vahetuseks peab vett katkestama?",
      question_en: "Does the water supply need to be shut off for pipe replacement?",
      question_ru: "Нужно ли отключать воду для замены труб?",
      answer_et: "Jah, veetorude paigaldus nõuab veekatkestust. Katkestuse kooskõlastame majahalduraga ette — tavaliselt on katkestus 4–8 tundi päevasel ajal. Ühekorruseline katkestus ei mõjuta teisi kortereid.",
      answer_en: "Yes, water pipe installation requires a water shut-off. We coordinate the shut-off with the building manager in advance — the interruption is usually 4–8 hours during daytime. A single-floor shut-off does not affect other apartments.",
      answer_ru: "Да, монтаж водопроводных труб требует отключения воды. Отключение согласовываем с управляющим зданием заранее — перерыв обычно составляет 4–8 часов в дневное время. Отключение на одном этаже не затрагивает другие квартиры.",
    },
    {
      question_et: "Kas antakse teostusdokument?",
      question_en: "Is completion documentation provided?",
      question_ru: "Выдаётся ли исполнительная документация?",
      answer_et: "Jah, iga veetorustiku paigalduse järel anname kirjaliku teostusdokumendi koos torude skeemi ja survekatse tulemustega. See on vajalik ehitusload, korteriühistu raamatupidamine ja tulevane remont.",
      answer_en: "Yes, after every water pipe installation we provide written completion documentation including a pipe layout diagram and pressure test results. Required for building permits, housing association accounting and future maintenance.",
      answer_ru: "Да, после каждого монтажа водопровода выдаём письменную исполнительную документацию со схемой прокладки труб и результатами испытания давлением. Необходима для разрешений на строительство, бухгалтерии товарищества собственников и будущего обслуживания.",
    },
    {
      question_et: "Kui kaua võtab korteri veevarustuse täisvahetus?",
      question_en: "How long does a complete apartment water supply replacement take?",
      question_ru: "Сколько времени занимает полная замена водоснабжения квартиры?",
      answer_et: "Keskmise suurusega korteri (2–3 tuba) täisvahetus võtab tavaliselt 2–4 tööpäeva, olenevalt korteri keerukusest ja torude asukohast. Pärast paigaldust teostame survekatse ja üleandmise.",
      answer_en: "A complete replacement for an average-sized apartment (2–3 rooms) usually takes 2–4 working days, depending on the complexity of the apartment and pipe locations. After installation we carry out a pressure test and handover.",
      answer_ru: "Полная замена в квартире среднего размера (2–3 комнаты) обычно занимает 2–4 рабочих дня в зависимости от сложности квартиры и расположения труб. После монтажа проводим испытание давлением и сдачу объекта.",
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

Millal on torude vahetus korteris vajalik? Rooste- ja katlakivirikaste galvaniseeritud terastorude korral — need torud on keskmiselt 40–60 aastat vanad Tallinna paneelmajades ning nende läbimõõt aheneb aastaga. Malmist kanalisatsioonitoru korral — toru seinad on mürberda ja murduvad remonditöödel kergesti. Korduvate lekete puhul — kui sama koht lekib ikka ja jälle, on mõistlik kogu lõik korraga välja vahetada. Enne renoveerimist — kombineeri torude vahetus sanitaar- ja köögiremondi projektiga.

Teostame korteris torude täisvahetust etappide kaupa. Esmalt demonteerime vanad torud (galvaaniktorud, malmist kanalisatsioon). Seejärel paigaldame uue veevarustuse PP-R või PEX materjalist — nii külma- kui ka soojaveeleinesid. Kanalisatsiooni paigaldame PVC torudest õige kaldega (minimaalselt 1–2 cm meetri kohta). Iga etapi lõpus teostame kontrollid — veekatkestus-test ja survekatse veevarustusele, vee voolamine kanalisatsioonile.

Enamik korterivahetuse projekte lõpeb 2–4 päevaga (olenevalt korteri suurusest). Kooskõlastame veekatkestused maja veemeistraga ette — tavaliselt 4–8 tundi päevasel ajal. Korteri naabrid ei kaota selleks ajaks vett.

Töö käigus katame põrandad kaitsekileiga, kanname materjali sisse ja välja kaitstes trepikodade seinu, ning teeme kahekordse koristuse pärast töö lõpetamist. Saate täieliku teostusdokumendi torude skeem koos 12 kuu garantiiga.`,

  long_en: `Galvanised steel pipes and cast-iron drainage that have been working for decades eventually need replacement. The process is delicate — we are working in someone's home, so cleanliness, proper scheduling and minimal disruption are paramount for us.

When is pipe replacement in an apartment needed? With corroded, scale-filled galvanised steel pipes — these pipes are on average 40–60 years old in Tallinn panel-block buildings and their diameter narrows every year. With cast-iron sewer pipes — the pipe walls are brittle and break easily during renovation work. With recurring leaks — if the same spot keeps leaking, it makes more sense to replace the whole section at once. Before renovation — combine pipe replacement with a bathroom or kitchen renovation project.

We carry out complete pipe replacement in apartments in stages. First we remove the old pipes (galvanised steel, cast-iron drainage). Then we install new water supply in PP-R or PEX — both cold and hot water lines. Drainage is installed in PVC pipe with the correct gradient (minimum 1–2 cm per metre). At the end of each stage we carry out checks — shut-off tests and a pressure test for water supply, and a flow test for drainage.

Most apartment replacement projects are completed in 2–4 days (depending on apartment size). We coordinate water shut-offs with the building caretaker in advance — usually 4–8 hours during daytime. Neighbouring apartments do not lose water during this time.

During work we cover floors with protective sheeting, carry materials in and out while protecting stairwell walls, and carry out a thorough double clean-up after completion. You receive complete documentation including a pipe layout diagram and a 12-month guarantee.`,

  long_ru: `Оцинкованные стальные трубы и чугунная канализация, проработавшие десятилетия, в конечном счёте нуждаются в замене. Процесс деликатный — мы работаем в чужом доме, поэтому чистота, чёткое планирование и минимальные неудобства для нас крайне важны.

Когда нужна замена труб в квартире? При коррозионных, забитых накипью оцинкованных стальных трубах — в таллинских панельных домах эти трубы в среднем 40–60 лет, их внутренний диаметр ежегодно уменьшается. При чугунной канализации — стенки труб хрупкие и легко ломаются при ремонтных работах. При повторяющихся течах — если одно и то же место постоянно протекает, разумнее заменить весь участок сразу. Перед ремонтом — совместите замену труб с ремонтом санузла или кухни.

Выполняем полную замену труб в квартире поэтапно. Сначала демонтируем старые трубы (оцинкованная сталь, чугунная канализация). Затем монтируем новое водоснабжение из PP-R или PEX — как холодной, так и горячей воды. Канализацию монтируем из ПВХ-труб с правильным уклоном (минимум 1–2 см на метр). По окончании каждого этапа проводим проверки — испытание на перекрытие и давление для водоснабжения, проверку слива для канализации.

Большинство проектов замены труб в квартире завершается за 2–4 дня (в зависимости от размера квартиры). Заранее согласовываем отключение воды с сантехником дома — обычно 4–8 часов в дневное время. Соседние квартиры на это время воды не лишаются.

В ходе работ накрываем полы защитной плёнкой, заносим и выносим материалы, защищая стены лестничных клеток, и проводим тщательную двойную уборку после окончания. Получаете полную исполнительную документацию со схемой прокладки труб и гарантию 12 месяцев.`,

  h1_et: "Torude Vahetamine Korteris — Täisremont Garantiiga",
  h1_en: "Pipe Replacement in Apartment — Complete Renovation with Guarantee",
  h1_ru: "Замена труб в квартире — полная замена с гарантией",

  h2_et: "Vanad roostes galvaanikatorud välja, uued PP-R või PEX torud sisse — puhaste kätega",
  h2_en: "Old corroded galvanised pipes out, new PP-R or PEX pipes in — clean and tidy",
  h2_ru: "Старые проржавевшие трубы — долой, новые PP-R или PEX — на место. Чисто и аккуратно",

  metaTitle_et: "Torude Vahetus Korteris Tallinn | Garantii — Torupro",
  metaTitle_en: "Pipe Replacement Apartment Tallinn | Guarantee — Torupro",
  metaTitle_ru: "Замена труб в квартире Таллин | Гарантия — Torupro",

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
      answer_et: "Soovitame vahetada mõlemad korraga, kui korter käib avamise alla — see säästab töö- ja lõhkumiskulusid tulevikus märkimisväärselt. Saame teha ka ainult ühe süsteemi vahetust, kui teine on heas seisus.",
      answer_en: "We recommend replacing both at the same time if the apartment is being opened up — it saves significantly on labour and demolition costs in future. We can also replace just one system if the other is in good condition.",
      answer_ru: "Рекомендуем заменить обе системы одновременно, если квартира всё равно вскрывается — это значительно экономит затраты на работу и демонтаж в будущем. Можем заменить и только одну систему, если другая в хорошем состоянии.",
    },
    {
      question_et: "Kui kaua torude vahetus korteris aega võtab?",
      question_en: "How long does pipe replacement in an apartment take?",
      question_ru: "Сколько времени занимает замена труб в квартире?",
      answer_et: "Keskmise 2–3 toalise korteri täisvahetus võtab 2–4 tööpäeva. Väiksem korter (1 tuba + vannituba) on tehtav 1–2 päevaga. Planeerimine on oluline — kooskõlastame veekatkestused ette.",
      answer_en: "A complete replacement for an average 2–3 room apartment takes 2–4 working days. A smaller flat (1 room + bathroom) can be done in 1–2 days. Planning is important — we coordinate water shut-offs in advance.",
      answer_ru: "Полная замена в средней квартире (2–3 комнаты) занимает 2–4 рабочих дня. Небольшая квартира (1 комната + ванная) делается за 1–2 дня. Планирование важно — заранее согласовываем отключение воды.",
    },
    {
      question_et: "Kas töö käigus jääb korter kasutamiskõlblikuks?",
      question_en: "Does the apartment remain habitable during the work?",
      question_ru: "Остаётся ли квартира пригодной для проживания в ходе работ?",
      answer_et: "Jah, üldiselt jah. Vett ei ole vaid veekatkestuse ajal (4–8 tundi päevas). Katame põrandad kaitsekileiga ja teeme töötsooni korrastatult. Elanikud saavad korteris olla — müra on see aja jooksul möödapääsmatu.",
      answer_en: "Yes, generally yes. There is no water only during the shut-off period (4–8 hours per day). We cover floors with protective sheeting and keep the work zone tidy. Residents can stay in the apartment — some noise is unavoidable during this time.",
      answer_ru: "Да, в целом да. Воды нет только во время отключения (4–8 часов в день). Накрываем полы защитной плёнкой и поддерживаем рабочую зону в чистоте. Жильцы могут оставаться в квартире — в это время неизбежен некоторый шум.",
    },
    {
      question_et: "Kas saame kombineerida torude vahetuse sanitaarruumi remondiga?",
      question_en: "Can we combine pipe replacement with bathroom renovation?",
      question_ru: "Можно ли совместить замену труб с ремонтом ванной комнаты?",
      answer_et: "Jah ja see on väga mõistlik. Torupro teostab torustiku osa — veevarustus, kanalisatsioon, segistid. Plaatimis- ja viimistlustöödeks soovitame usaldusväärse remondipartneriga koostöö tegemist. Aitame töid koordineerida.",
      answer_en: "Yes and it is very sensible. Torupro handles the pipe work — water supply, drainage, mixers. For tiling and finishing work we recommend cooperating with a reliable renovation partner. We help coordinate the work.",
      answer_ru: "Да, и это очень разумно. Torupro выполняет сантехническую часть — водоснабжение, канализация, смесители. Для плиточных и отделочных работ рекомендуем сотрудничество с надёжным партнёром по ремонту. Помогаем координировать работы.",
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

  long_et: `Kortermaja püstakute vahetus on mahukas ja vastutusrikas torutöö projekt, mis nõuab hoolikat koordineerimist kõigi elanike ja korteriühistuga. Torupro on teostanud üle 80 korrusmajas täispüstakute vahetuse Tallinnas ja Harjumaal — teame täpselt, kuidas tööd organiseerida nii, et elanike elu häiritaks võimalikult vähe.

Tallinna vanemates paneelmajades, mis on ehitatud peamiselt 1960.–1990. aastatel, on suurem osa galvaniseeritud terasest ja malmist püstakutest amortiseerunud — roostumine, katlakiviladestused ja kulunud liitmikud põhjustavad tilkuvaid lekkeid ja madalat veerõhku. Üks väike murd võib uputada terve korruse korterite põrandad. Sellises olukorras ei aita enam üksiku lekkekoha lappimine — vajalik on terviklik püstakute vahetus.

Töö käib korruse kaupa: teostame veekatkestuse, vahetame ühe püstakusektsiooni, taastame vee ja liigume järgmisele korrusele. Päevane veekatkestus on tavaliselt 2–4 tundi. Iga katkestuse kohta teavitame elanikke kirjalikult vähemalt 5 päeva ette — nii on kõigil aega ette valmistuda.

Kasutame PP-R või PEX materjali veevarustuspüstakutele ja PVC kanalisatsioonipüstakutele. Need materjalid kestavad vähemalt 50 aastat, on katlakivikindlad ja vastavad täielikult Eesti ehitusnormidele. Erinevalt galvaniseeritud terasest ei roostu PP-R ega PEX torustik kunagi. Kõik materjalid on sertifitseeritud ja me saame esitada nende vastavussertifikaadid.

Enne töö alustamist korraldame korteriühistu esimehega planeerimiskoosoleku — selgitame töö etapid, jagame ajakava ja vastame kõigile küsimustele. Projekti juht hoiab ühistu esimeest kursis iga tööpäeva lõpus ning koordineerib veekatkestuste kooskõlastamise AS Tallinna Veega.

Enne püstakute vahetust soovitame teostada kanalisatsioonipüstakutel kaamerauuring — see annab täpse pildi torude seisundist ja aitab tuvastada, kas on vaja täiendavaid remonditöid (nt pragunenud vaatluskaevud või katkenud liitmikud). Nii väldime olukordi, kus töö käigus ilmnevad ootamatud probleemid.

Meie tööde hulka kuulub: vanade torude demonteerimine ja nõuetekohane utiliseerimine, uute PP-R, PEX või PVC torude paigaldamine, sulgarmatuuride (tõkestusventiilide) paigaldamine igale korrusele, läbiviikude tihendamine normikohase mastiksiga, kõigi ühenduste survekatse ja täieliku teostusdokumentatsiooni koostamine.

Teostusdokumentatsioon sisaldab: as-built joonised, materjalide vastavussertifikaadid, survekatse protokollid ja üleandmis-vastuvõtmise akt. Need dokumendid on korteriühistule olulised tehnilise passi uuendamiseks, kindlustushüvitise taotlemiseks ja tulevaste renoveerimistööde planeerimiseks.

Teenindame korteriühistuid kogu Tallinnas — Lasnamäel, Mustamäel, Põhja-Tallinnas, Kristiines, Nõmmel ja Piraital. Harjumaalt teenindame Rae, Viimsi, Saue, Keila ja Maardu valdu. Kogemus hõlmab nii 5-korruselisi Hruštšovkasid kui ka 9–16-korruselisi suurpaneel- ja tornmaju.

Korteriühistul on võimalik rahastada püstakute vahetust korteriühistulaenu või KredEx käendusel — paljud Tallinna ühistud kasutavad seda võimalust. Meie asjatundjad saavad abistada finantseerimisavalduse koostamisel. Garantii kõigile töödele on 24 kuud. Küsige tasuta hinnapakkumist — meie spetsialist teeb tasuta esmase ülevaatuse ja esitab kirjaliku pakkumise koos töö ajakavaga.`,

  long_en: `Riser pipe replacement in an apartment building is a substantial and demanding plumbing project that requires careful coordination with all residents and the housing association. Torupro has completed full riser replacements in more than 80 apartment buildings across Tallinn and Harjumaa — we know exactly how to organise the work to minimise disruption to residents' daily lives.

In Tallinn's older panel-block buildings, mainly constructed between the 1960s and 1990s, most of the original galvanised steel and cast-iron risers have deteriorated. Corrosion, scale deposits and worn fittings cause dripping leaks and reduced water pressure. A single burst can flood the floors of an entire storey. In such situations, patching a single leak is no longer sufficient — a comprehensive riser replacement is required.

Work proceeds floor by floor: we perform a water shut-off, replace one riser section, restore the water supply and move on to the next floor. The daily water interruption is typically 2–4 hours. We notify all residents in writing at least 5 days before each interruption, giving everyone time to prepare.

We use PP-R or PEX for water supply risers and PVC for drainage risers. These materials last at least 50 years, are scale-resistant and fully comply with Estonian building standards. Unlike galvanised steel, PP-R and PEX pipes never corrode. All materials are certified and we can provide their compliance certificates.

Before work begins we hold a planning meeting with the housing association chair — explaining the work stages, sharing the schedule and answering all questions. Our project manager keeps the chair informed at the end of each working day and also coordinates water shut-off approvals with AS Tallinna Vesi.

Before riser replacement we recommend a camera inspection of the drainage risers — this gives an accurate picture of the pipe condition and identifies whether additional repairs are needed, such as cracked inspection manholes or broken joints. This helps avoid unexpected problems that can extend the deadline.

Our scope of work includes: demounting old pipes and disposing of them in accordance with regulations, installing new PP-R, PEX or PVC pipes, fitting shut-off valves at each floor, sealing penetrations with standard-compliant compound, pressure testing all connections and preparing full as-built documentation.

The as-built documentation includes: drawings, material compliance certificates, pressure test records and a handover act. These documents are important for the housing association when updating the building's technical passport, making insurance claims and planning future renovation work.

We serve housing associations across all Tallinn districts — Lasnamäe, Mustamäe, Põhja-Tallinn, Kristiine, Nõmme and Pirita. In Harjumaa we serve Rae, Viimsi, Saue, Keila and Maardu municipalities. Our experience spans five-storey Khrushchyovkas to nine-to-sixteen-storey large-panel and tower blocks.

Housing associations can finance riser replacement through an association loan or a KredEx guarantee — many Tallinn associations use this option. Our specialists can assist with the financing application. Our guarantee on all work is 24 months. Request a free quotation — our specialist will carry out a free initial inspection and present a written proposal with a work schedule. Proper riser replacement is a long-term investment in the building's value and the comfort of every resident for the next half-century.`,

  long_ru: `Замена стояков в многоквартирном доме — масштабный и ответственный сантехнический проект, требующий тщательной координации со всеми жильцами и товариществом собственников жилья. Torupro выполнила полную замену стояков более чем в 80 многоквартирных домах Таллина и уезда Харью — мы точно знаем, как организовать работу с минимальными неудобствами для жильцов.

В старых таллинских панельных домах, построенных преимущественно в 1960–1990-е годы, большинство оцинкованных стальных и чугунных стояков пришли в негодность. Коррозия, накипные отложения и изношенные фитинги вызывают капельные течи и снижение давления воды. Один прорыв способен затопить полы на целом этаже. В такой ситуации уже не помогает ремонт отдельного места — необходима комплексная замена стояков.

Работы ведутся поэтажно: отключаем воду, заменяем секцию стояка, восстанавливаем подачу и переходим на следующий этаж. Ежедневное отключение воды обычно занимает 2–4 часа. О каждом перерыве письменно уведомляем жильцов не менее чем за 5 дней — у всех есть время подготовиться.

Для водоснабжения используем PP-R или PEX, для канализации — ПВХ. Эти материалы служат не менее 50 лет, устойчивы к накипи и полностью соответствуют строительным нормам Эстонии. В отличие от оцинкованной стали, трубы PP-R и PEX никогда не ржавеют. Все материалы сертифицированы — мы можем предоставить сертификаты соответствия.

До начала работ проводим планёрку с председателем товарищества собственников: объясняем этапы, знакомим с графиком, отвечаем на все вопросы. Руководитель проекта информирует председателя в конце каждого рабочего дня и координирует согласование отключений воды с AS Tallinna Vesi.

Перед заменой стояков рекомендуем провести видеодиагностику канализационных стояков — она даёт точную картину состояния труб и позволяет выявить необходимость дополнительных ремонтных работ: треснувшие смотровые колодцы или разрушенные фитинги. Это помогает избежать неожиданных проблем, способных затянуть сроки.

Наш объём работ включает: демонтаж старых труб и их нормативную утилизацию, монтаж новых труб PP-R, PEX или ПВХ, установку запорной арматуры (шаровых кранов) на каждом этаже, уплотнение проходок стандартным герметиком, испытание давлением всех соединений и составление полной исполнительной документации.

Исполнительная документация включает: чертежи as-built, сертификаты соответствия материалов, протоколы испытаний давлением и акт приёма-передачи. Эти документы важны для товарищества при обновлении технического паспорта здания, оформлении страховых выплат и планировании будущих ремонтных работ.

Обслуживаем товарищества по всему Таллину — в Ласнамяэ, Мустамяэ, Põhja-Tallinn, Кристийне, Нымме и Пирита. В уезде Харью обслуживаем волости Рае, Виймси, Сауэ, Кейла и Маарду. Опыт охватывает как пятиэтажные хрущёвки, так и 9–16-этажные крупнопанельные и башенные дома.

Товарищества могут финансировать замену стояков через кредит ТСЖ или гарантию KredEx — многие таллинские товарищества пользуются этой возможностью. Наши специалисты помогут с подготовкой заявки. Гарантия на все работы — 24 месяца. Запросите бесплатное коммерческое предложение — специалист проведёт осмотр и представит письменное предложение с графиком. Качественная замена стояков — инвестиция в стоимость дома и комфорт каждого жильца на ближайшие полвека.`,

  h1_et: "Püstakute Vahetus Tallinnas — Kortermaja Torude Rekonstruktsioon",
  h1_en: "Riser Replacement in Tallinn — Apartment Block Pipe Reconstruction",
  h1_ru: "Замена стояков в Таллине — реконструкция труб многоквартирного дома",

  h2_et: "Korteriühistuga kooskõlastatud püstakute vahetus — minimaalne veekatkestus, maksimaalne kvaliteet",
  h2_en: "Riser replacement coordinated with the housing association — minimal water outage, maximum quality",
  h2_ru: "Замена стояков в координации с товариществом — минимальное отключение воды, максимальное качество",

  metaTitle_et: "Püstakute Vahetus Tallinn | Kortermaja Torutöö — Torupro",
  metaTitle_en: "Riser Pipe Replacement Tallinn | Housing — Torupro",
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
  faq: [
    {
      question_et: "Mitu päeva võtab terve maja püstakute vahetus aega?",
      question_en: "How many days does a full building riser replacement take?",
      question_ru: "Сколько дней занимает замена стояков во всём доме?",
      answer_et: "Sõltub korruselisusest ja püstakute arvust. Keskmiselt teostame 5-korruselises majas töö 4–6 päevaga, 9-korruselises 8–12 päevaga. Täpse ajakava saate kirjalikus hinnapakkumises.",
      answer_en: "It depends on the number of floors and risers. On average we complete a 5-storey building in 4–6 days and a 9-storey one in 8–12 days. The exact schedule is provided in the written quotation.",
      answer_ru: "Зависит от этажности и количества стояков. В среднем 5-этажный дом — 4–6 дней, 9-этажный — 8–12 дней. Точный график указан в письменном коммерческом предложении.",
    },
    {
      question_et: "Kas korteriühistu peab teavitama AS Tallinna Vett?",
      question_en: "Does the housing association need to notify AS Tallinna Vesi?",
      question_ru: "Должно ли ТСЖ уведомлять AS Tallinna Vesi?",
      answer_et: "Jah, veekatkestuse kooskõlastamine AS Tallinna Veega on vajalik. Torupro korraldab selle kooskõlastuse ise — see kuulub meie teenuse hulka.",
      answer_en: "Yes, coordinating the water shut-off with AS Tallinna Vesi is required. Torupro handles this coordination itself — it is included in our service.",
      answer_ru: "Да, согласование отключения воды с AS Tallinna Vesi необходимо. Torupro организует это согласование самостоятельно — оно входит в нашу услугу.",
    },
    {
      question_et: "Kas elanikud peavad tööde ajal kodus olema?",
      question_en: "Do residents need to be home during the work?",
      question_ru: "Должны ли жильцы находиться дома во время работ?",
      answer_et: "Ei pea. Piisab, kui on tagatud juurdepääs korteriühenduse kohale. Töötame vastutustundlikult ja puhastes kätega ka tühjaksenud korterites.",
      answer_en: "They do not need to be home. Access to the connection point is sufficient. We work responsibly and cleanly in unoccupied flats as well.",
      answer_ru: "Нет. Достаточно обеспечить доступ к точке подключения. Работаем ответственно и аккуратно даже в незанятых квартирах.",
    },
    {
      question_et: "Milliseid dokumente saab ühistu pärast tööde lõppu?",
      question_en: "What documents does the association receive after work is complete?",
      question_ru: "Какие документы получает ТСЖ после завершения работ?",
      answer_et: "Täielik teostusdokumentatsioon: as-built joonised, materjalide sertifikaadid, survekatse protokollid ja üleandmis-vastuvõtmise akt. Vajalik tehnilise passi uuendamiseks ja kindlustuse jaoks.",
      answer_en: "Full as-built documentation: drawings, material certificates, pressure test records and a handover act. Required for updating the building's technical passport and for insurance purposes.",
      answer_ru: "Полная исполнительная документация: чертежи as-built, сертификаты материалов, протоколы испытаний давлением и акт приёма-передачи. Необходима для обновления техпаспорта здания и для страховой.",
    },
  ],
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

  long_et: `Vannitoa torutööd on üks levinumaid sanitaartehnilisi teenuseid, mida Tallinna elanike seas tellitakse — olgu see siis lihtne segisti vahetus, WC-poti remont või täielik vannitoa sanitaartehnika paigaldus renoveerimise raames. Torupro asjatundjad on spetsialiseerunud kõikvõimalike vannitoa ja WC torutöö ülesannete lahendamisele kiirelt ja professionaalselt.

Teostame nii väiksemaid remonditöid — segistite vahetus ja remont, WC-poti vahetus, dušši äravoolu puhastamine — kui ka terviklikku sanitaartehnika paigaldust renoveerimise käigus: WC-pott, duššikabiin, vann, valamu, pesumasin, segistid, torude paigaldus ja survekatse. Kõik ühes käes.

Üks meie standardprotseduure on survekatse enne plaatimist. Iga torustiku ühendus kontrollitakse survega enne, kui sein plaaditakse kinni — see tagab, et hiljem ei teki ootamatuid lekkeid. Paljud kliendid on kuulnud lugusid, kus mõni aeg pärast remonti avastati kogu seinast niiskus või isegi vesi all olev põrand. Meie lähenemisviisiga see ei juhtu.

Töötame tihedas koostöös plaatijate ja ehitusmeistritega. Meie torustik on valmis täpselt siis, kui plaatija seda vajab — ei liiga vara ega liiga hilja. Koordineerime vajadusel ka teiste eriosadega — elektrik, ventilatsiooni paigaldaja.

Segistite ja veevarmatuuride valimisel saame nõustada: soovitame termostaatsegistit duššile, mis hoiab vee temperatuuri stabiilsena isegi siis, kui mujal korteris avab keegi veekraani — eriti oluline laste ja eakate jaoks. Saame paigaldada ka voolupiirajad, mis vähendavad veetarbimist kuni 30% ilma mugavust kaotamata.

Vanades korterelamutes on tavaline probleem see, et galvaniseeritud terase torude roostumine on jõudnud nii kaugele, et vannitoa renoveerimisel tuleb välja vahetada ka korterisisesed vee- ja kanalisatsioonitorud. Meie meeskond teeb seda kõike ühes töölaines — torude demontaažist kuni uue sanitaaridega üleandmiseni.

Pesumasina ühendamine nõuab korrektset äravoolutorude paigaldust ja survekindlat veeühendust. Paigaldame vajadusel ka rõhualandaja — Tallinna veevarustuses on paljudes piirkondades veerõhk standardist kõrgem, mis võib kahjustada seadmeid.

Välimuse puhul arvestame, et kõik ühendused, mida saab varjata, varjataksegi — nähtavad torulõigud tähistatakse esteetiliselt kroompleksi, värvitud kaitsekarbiga või plaadiga, et vannituba näeks esinduslik.

Teenindame kõiki Tallinna linnaosasid: Lasnamäe, Mustamäe, Kesklinn, Kristiine, Nõmme, Põhja-Tallinn ja Pirita. Harjumaalt: Rae, Viimsi, Saue, Keila. Vannitoa täieline sanitaartehnika töö võtab tavaliselt 1–2 päeva.

Kõigile töödele kehtib 12 kuu garantii. Lõpus teeme koos kliendiga üleandmise — kontrollime kõiki segisteid, äravoole ja survekatse tulemusi ning allkirjastame vastuvõtmise akti. Hinnapakkumine on tasuta — kirjeldage meile oma vannitoa plaani ja meie spetsialist koostab kirjaliku kalkulatsiooni enne töö algust, ilma peidetud kuluta.`,

  long_en: `Bathroom plumbing work is one of the most frequently requested plumbing services among Tallinn residents — whether it is a simple mixer replacement, a WC repair or a complete sanitary installation as part of a full bathroom renovation. Torupro specialists are experienced in solving every bathroom and WC plumbing task quickly and professionally.

We handle both smaller repair jobs — mixer replacement and repair, WC replacement, shower drain clearing — and full sanitary installation during renovation: WC pan, shower enclosure, bath, washbasin, washing machine, mixers, pipe installation and pressure testing. Everything under one roof.

One of our standard procedures is a pressure test before tiling. Every pipe connection is pressure-checked before the wall is tiled over — ensuring no unexpected leaks appear later. Many clients have heard stories of moisture spreading through a wall or water pooling under a floor discovered some time after a renovation. Our approach prevents this entirely.

We work closely with tilers and builders. Our pipework is ready exactly when the tiler needs it — not too early and not too late. We also coordinate with other trades — electrician, ventilation installer and so on.

When selecting mixers and water fittings we can advise: we recommend a thermostatic shower mixer that maintains the water temperature even when someone opens a tap elsewhere in the flat — especially important for children and elderly users. We can also install flow restrictors that reduce water consumption by up to 30% without sacrificing comfort.

In older apartment buildings it is common to find that galvanised steel corrosion has advanced so far that during bathroom renovation the in-flat water supply and drainage pipes also need replacement. Our team handles everything in one visit — from pipe demolition to handover with new sanitary fittings installed.

Washing machine connection requires correctly installed drainage pipes and a pressure-rated water connection. We also fit a pressure reducer if needed — in many parts of Tallinn's water network the pressure is above standard, which can damage appliances over time.

When it comes to appearance we ensure that all connections that can be concealed are concealed. Visible pipe sections are neatly finished with a chrome sleeve, coloured protective casing or tile skirting, so the bathroom looks professional after our work.

We serve all Tallinn districts: Lasnamäe, Mustamäe, city centre, Kristiine, Nõmme, Põhja-Tallinn and Pirita. In Harjumaa: Rae, Viimsi, Saue, Keila. A full bathroom sanitary installation typically takes 1–2 days.

All work carries a 12-month guarantee. After completion we do a walk-through with the client — checking all mixers, drains and pressure test results — and sign the handover act. A free quotation is always available: describe your bathroom renovation plan and our specialist will prepare a written estimate before any work begins, with no hidden costs. Correct bathroom plumbing — the right drain fall, proper pipe sizing, insulated hot water pipes — is what makes the difference between a bathroom that works perfectly for years and one that causes problems after the first winter.`,

  long_ru: `Сантехнические работы в ванной — одна из наиболее востребованных сантехнических услуг среди жителей Таллина: простая замена смесителя, ремонт унитаза или полный монтаж сантехники при комплексной реконструкции ванной. Специалисты Torupro ориентированы на решение любых сантехнических задач в ванной и туалете — быстро и профессионально.

Выполняем как небольшие ремонтные работы — замена и ремонт смесителей, замена унитаза, прочистка слива душа — так и полный монтаж сантехники при ремонте: унитаз, душевая кабина, ванна, умывальник, стиральная машина, смесители, монтаж труб и испытание давлением. Всё в одних руках.

Одна из наших стандартных процедур — испытание давлением до укладки плитки. Каждое трубное соединение проверяется давлением до того, как стена закрывается плиткой — это гарантирует отсутствие неожиданных течей в будущем. Многие клиенты слышали истории, когда через некоторое время после ремонта обнаруживалась влага в стене или вода под полом. Наш подход полностью исключает такую ситуацию.

Тесно сотрудничаем с плиточниками и строителями. Наш трубопровод готов ровно тогда, когда он нужен плиточнику — не слишком рано и не слишком поздно. При необходимости координируем работу со смежниками: электриком, монтажником вентиляции.

При выборе смесителей и водяной арматуры мы готовы дать совет: рекомендуем термостатический смеситель для душа, который поддерживает температуру воды стабильной даже при открытии крана в другом помещении — особенно важно для детей и пожилых людей. Также устанавливаем водосберегающие насадки, сокращающие потребление воды до 30% без потери комфорта.

В старых многоквартирных домах распространена ситуация, когда коррозия оцинкованных стальных труб зашла так далеко, что при ремонте ванной приходится менять и внутриквартирные трубы водоснабжения и канализации. Наша команда делает всё за один раз — от демонтажа труб до сдачи с установленной новой сантехникой.

Подключение стиральной машины требует правильно проложенных канализационных труб и напорного водяного подключения. При необходимости также устанавливаем редуктор давления — в ряде районов Таллина давление воды в сети превышает норму, что со временем может повредить оборудование.

С точки зрения внешнего вида стараемся скрывать все соединения, которые возможно скрыть. Видимые трубы аккуратно оформляем хромированной гильзой, цветным защитным коробом или плиточным плинтусом — ванная после нашей работы выглядит профессионально.

Обслуживаем все районы Таллина: Ласнамяэ, Мустамяэ, центр города, Кристийне, Нымме, Põhja-Tallinn и Пирита. В уезде Харью: Рае, Виймси, Сауэ, Кейла. Полный монтаж сантехники ванной комнаты занимает в среднем 1–2 дня.

На все работы — гарантия 12 месяцев. По завершении проводим приёмку совместно с клиентом: проверяем все смесители, сливы и результаты испытания давлением и подписываем акт. Бесплатная смета всегда доступна. Правильная сантехника в ванной — верный уклон труб канализации, правильный диаметр труб водоснабжения, изоляция горячих труб — определяет разницу между ванной, которая работает идеально долгие годы, и той, что начинает доставлять проблемы после первой зимы.`,

  h1_et: "Vannitoa Torutööd Tallinnas — WC, Dušš, Vann, Segistid",
  h1_en: "Bathroom Plumbing in Tallinn — WC, Shower, Bath, Mixers",
  h1_ru: "Сантехника ванной в Таллине — WC, душ, ванна, смесители",

  h2_et: "Täielik sanitaartehnika paigaldus remondivalmis vannitoale — survekatse enne plaatimist",
  h2_en: "Complete sanitary installation for renovation-ready bathroom — pressure test before tiling",
  h2_ru: "Полный монтаж сантехники для ванной под отделку — испытание давлением до укладки плитки",

  metaTitle_et: "Vannitoa Torutööd Tallinn | Paigaldus — Torupro",
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
  faq: [
    {
      question_et: "Kas teostate survekatse enne plaatimist?",
      question_en: "Do you carry out a pressure test before tiling?",
      question_ru: "Проводите ли вы испытание давлением до укладки плитки?",
      answer_et: "Jah, see on meie standardprotseduur. Iga ühendus kontrollitakse survega enne seina sulgemist — see tagab, et pärast remonti ei teki lekkeid seinas ega põranda all.",
      answer_en: "Yes, this is our standard procedure. Every connection is pressure-checked before the wall is closed — ensuring no leaks develop inside the wall or below the floor after the renovation.",
      answer_ru: "Да, это наша стандартная процедура. Каждое соединение проверяется давлением до закрытия стены — это гарантирует отсутствие течей внутри стены или под полом после ремонта.",
    },
    {
      question_et: "Kui kaua võtab vannitoa täielik sanitaartehnika paigaldus aega?",
      question_en: "How long does a full bathroom sanitary installation take?",
      question_ru: "Сколько времени занимает полный монтаж сантехники в ванной?",
      answer_et: "Enamasti 1–2 päeva, sõltuvalt töömahust. Lihtsamad tööd (segisti vahetus, WC vahetus) teostame sageli sama päevaga. Täieliku rekonstruktsiooni korral lepime täpse ajakava ette kokku.",
      answer_en: "Usually 1–2 days, depending on the scope of work. Simpler jobs such as mixer or WC replacement are often completed the same day. For a full renovation we agree on the exact schedule in advance.",
      answer_ru: "Обычно 1–2 дня в зависимости от объёма работ. Более простые работы — замена смесителя или унитаза — нередко выполняем в тот же день. При полной реконструкции точный график согласовываем заранее.",
    },
    {
      question_et: "Kas töötate koos plaatijatega?",
      question_en: "Do you work together with tilers?",
      question_ru: "Работаете ли вы совместно с плиточниками?",
      answer_et: "Jah, töötame aktiivselt koostöös plaatijate ja ehitusmeistritega. Meie torustik on valmis täpselt ettenähtud ajaks, et plaatimistööd saaksid jätkuda viivituseta.",
      answer_en: "Yes, we actively work with tilers and builders. Our pipework is ready exactly on time so that tiling work can continue without delay.",
      answer_ru: "Да, активно сотрудничаем с плиточниками и строителями. Наш трубопровод готов точно в срок, чтобы укладка плитки продолжалась без задержек.",
    },
    {
      question_et: "Kas soovitate termostaatset duššisegistit?",
      question_en: "Do you recommend a thermostatic shower mixer?",
      question_ru: "Рекомендуете ли вы термостатический смеситель для душа?",
      answer_et: "Jah, eriti perede puhul lastega ja eakate jaoks. Termostaatne segisti hoiab veetemperatuuri konstantsena isegi siis, kui keegi mujal korteris avab veekraani — see väldib põletusõnnetusi.",
      answer_en: "Yes, especially for families with children and elderly residents. A thermostatic mixer maintains the water temperature even when someone opens a tap elsewhere in the flat — this prevents scalding accidents.",
      answer_ru: "Да, особенно для семей с детьми и пожилых жильцов. Термостатический смеситель поддерживает температуру воды стабильной даже при открытии крана в другом помещении — это предотвращает ожоги.",
    },
  ],
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

  long_et: `Küttesüsteemi rike talvel on ebamugav ja potentsiaalselt kallis, kui sellele reageerida liiga aeglaselt. Torupro sanitaartehnika meeskond pakub küttesüsteemide remonditeenust nii korterelamutes kui ka eramutes — radiaatorite vahetamine ja ühendamine, küttetorude paigaldus ja remont, lekkekohtade likvideerimine ning küttesüsteemi surve taastamine.

Küttesüsteemide probleemid, millega meie poole pöördutakse, on mitmesugused: radiaator ei soojenda või soojendab ebaühtlaselt; küttesüsteemis on õhk, mis tekitab vulisevaid helisid; radiaator lekib; küttesüsteemi rõhk langeb pidevalt; küttevesi värvub roostes punaseks; tsentraalkütte sulgurite rike takistab radiaatori sulgemist.

Radiaatorite ühendamine tsentraalküttele on Tallinna kortermajades protseduur, mis nõuab korteriühistuga kooskõlastamist — enamikus majades on vajalik ühistu vedemeistri nõusolek ja mõningatel juhtudel ka projektlahenduse koostamine. Torupro on selle protsessiga tuttav ja saab teid vajadusel kooskõlastusprotsessis abistada.

Küttetorude materjali valikul lähtume hoonetüübist: Tallinna vanemates paneelmajades on tavapärane polüpropüleen (PP-R), mis ühendatakse jootetõrvelduse teel. Uusehitiste või rekonstrueeritavate küttesüsteemide puhul soovitame vasktorusid või PEX-komposiittorusid — nende termiline laienemine on väiksem ja eluiga pikem.

Soojuslekke leidmine küttesüsteemis on spetsiifiline ülesanne, mis nõuab termokaamerat ja survekatset. Meie meeskond kasutab mõlemat meetodit — termokaameras saame näha põranda ja seina soojust, mis viitab lekke asukohale, ning survekatse isoleerib kahjustunud lõigu täpselt. Seinte avamine lükatakse viimasesse etappi — sageli saame lekke tuvastada ilma ühtegi plaati lõhkumata.

Küttesüsteemide sügisene hooldus on mõistlik investeering: kontrollime kõiki sulgarmatuure, puhastame soojusvahetajad, laskame õhu küttesüsteemist välja ja kontrollime süsteemi rõhku. Teostame seda hooldust september–oktoobris, enne küttehooaja algust — nii on talveks kõik korras.

Radiaatorite valikul saame soovitada kõige energiatõhusamat lahendust teie ruumi suurusele ja hoonetüübile — alumiinium-, teraskiht- ja malmradiaatorid on kõigil erinevad soojusülekande näitajad ja paigalduse nõuded.

Teostame tsentraalkütte radiaatorite vahetuse ja lisamise, küttetorude läbiviikude teostuse, lekkekohtade leidmise ja parandamise ning elektrikütte integreerimisega seonduvaid torutöid.

Teenindame Tallinna kõiki linnaosasid (Lasnamäe, Mustamäe, Põhja-Tallinn, Kesklinn, Kristiine, Nõmme, Pirita) ja Harjumaad (Rae, Viimsi, Saue, Keila). Avariiolukordades reageerime Tallinnas keskmiselt 2 tunni jooksul.

Küttesüsteemi töödele anname 12 kuu garantii. Enne töö alustamist esitame selge kirjaliku hinnapakkumise — varjatud lisatasusid ei ole. Helistage meile ja meie spetsialist annab teile esimese nõuande tasuta. Lisaks avariireparatsioonidele pakume korteriühistutele ka küttesüsteemi ennetava hoolduse lepinguid — sügisene ja kevadine kontroll hoiab kõike korras.`,

  long_en: `A heating system failure in winter is uncomfortable and potentially costly if the response is too slow. The Torupro plumbing team offers heating system repair services in both apartment buildings and private houses — radiator replacement and connection, heating pipe installation and repair, leak elimination and heating system pressure restoration.

The heating system problems we are called in for vary widely: a radiator that does not heat or heats unevenly; air in the heating system causing gurgling noises; a leaking radiator; continuously dropping system pressure; heating water turning rusty red; central heating valves failing and preventing the radiator from being shut off.

Connecting a radiator to central heating in a Tallinn apartment building is a procedure that requires coordination with the housing association — in most buildings the building caretaker's consent is required and in some cases a project solution must be prepared. Torupro is familiar with this process and can assist with the coordination procedure where needed.

The choice of heating pipe material depends on the building type: in Tallinn's older panel-block buildings polypropylene (PP-R) is common, connected by electrofusion or heat welding. For new builds or renovated heating systems we recommend copper pipes or PEX composite pipes — their thermal expansion is lower and lifespan longer.

Finding a heat leak in a heating system is a specialist task requiring a thermal camera and a pressure test. Our team uses both methods — the thermal camera shows heat in floors and walls indicating the leak location, while the pressure test isolates the damaged section precisely. Opening walls is left to the last stage — we can often identify the leak without breaking a single tile.

Autumn heating system maintenance is a sensible investment: we check all shut-off valves, clean heat exchangers, bleed air from the system and check system pressure. We carry out this maintenance in September–October, before the heating season starts — ensuring everything is in order for winter.

When selecting radiators we can recommend the most energy-efficient solution for your room size and building type — aluminium, steel panel and cast-iron radiators each have different heat transfer characteristics and installation requirements.

We carry out central-heating radiator replacement and addition, heating pipe routing, leak location and repair, and plumbing work related to electric heating integration.

We serve all Tallinn districts (Lasnamäe, Mustamäe, Põhja-Tallinn, city centre, Kristiine, Nõmme, Pirita) and Harjumaa (Rae, Viimsi, Saue, Keila). In emergencies we respond in Tallinn on average within 2 hours.

We provide a 12-month guarantee on all heating system work. Before starting work we present a clear written quotation — no hidden surcharges. Call us and our specialist will give you the first consultation free of charge. In addition to emergency repairs, we also offer preventive heating system maintenance contracts for housing associations — autumn and spring inspections keep everything running smoothly.`,

  long_ru: `Неисправность системы отопления зимой причиняет серьёзные неудобства, а при слишком медленном реагировании — значительные затраты. Сантехническая команда Torupro предлагает услуги по ремонту систем отопления как в многоквартирных домах, так и в частных — замена и подключение радиаторов, монтаж и ремонт труб отопления, устранение течей и восстановление давления в системе.

Проблемы с отоплением, с которыми к нам обращаются, весьма разнообразны: радиатор не греет или греет неравномерно; в системе воздух, вызывающий бульканье; радиатор течёт; давление в системе постоянно падает; вода приобрела ржавый цвет; запорная арматура вышла из строя и не позволяет перекрыть радиатор.

Подключение радиатора к центральному отоплению в многоквартирном доме Таллина — процедура, требующая согласования с товариществом собственников: в большинстве домов необходимо согласие сантехника дома, а в ряде случаев — и разработка проектного решения. Torupro знакома с этим процессом и при необходимости поможет с согласованием.

Выбор материала труб отопления зависит от типа здания: в старых панельных домах Таллина обычно применяется полипропилен (PP-R), соединяемый методом электромуфтовой или раструбной сварки. Для новостроек или реконструируемых систем рекомендуем медные трубы или трубы из композитного PEX — у них ниже тепловое расширение и дольше срок службы.

Поиск тепловой утечки в системе отопления — специализированная задача, требующая тепловизора и испытания давлением. Наша команда использует оба метода: тепловизор показывает тепло в полах и стенах, указывая место течи, а испытание давлением точно изолирует повреждённый участок. Вскрытие стен откладывается на последний шаг — нередко определяем течь, не повредив ни одной плитки.

Осеннее техническое обслуживание системы отопления — разумная инвестиция: проверяем всю запорную арматуру, чистим теплообменники, удаляем воздух из системы и контролируем давление. Это обслуживание выполняем в сентябре–октябре, до начала отопительного сезона — к зиме всё в порядке.

При выборе радиаторов можем порекомендовать наиболее энергоэффективное решение для размера помещения и типа здания: алюминиевые, стальные панельные и чугунные радиаторы имеют различные показатели теплоотдачи и требования к монтажу.

Выполняем замену и добавление радиаторов центрального отопления, прокладку труб отопления, поиск и ремонт течей, а также сантехнические работы, связанные с интеграцией электрического обогрева.

Обслуживаем все районы Таллина (Ласнамяэ, Мустамяэ, Põhja-Tallinn, центр, Кристийне, Нымме, Пирита) и уезд Харью (Рае, Виймси, Сауэ, Кейла). В аварийных ситуациях реагируем по Таллину в среднем за 2 часа.

На все работы по системе отопления — гарантия 12 месяцев. До начала работ представляем чёткое письменное коммерческое предложение без скрытых доплат. Звоните — специалист даст первичную консультацию бесплатно. Помимо аварийного ремонта, предлагаем также договоры на профилактическое обслуживание систем отопления для товариществ собственников — осенний и весенний осмотр обеспечивают бесперебойную работу.`,

  h1_et: "Küttesüsteemide Remont Tallinnas — Radiaatorid, Küttetorud, Lekked",
  h1_en: "Heating System Repair in Tallinn — Radiators, Heating Pipes, Leaks",
  h1_ru: "Ремонт систем отопления в Таллине — радиаторы, трубы, течи",

  h2_et: "Radiaatori ühendamine, küttesüsteemi lekke likvideerimine — kiire ja professionaalne",
  h2_en: "Radiator connection, heating system leak elimination — fast and professional",
  h2_ru: "Подключение радиатора, устранение течи отопления — быстро и профессионально",

  metaTitle_et: "Küttesüsteemide Remont Tallinn | Radiaatorid — Torupro",
  metaTitle_en: "Heating System Repair Tallinn | Radiators — Torupro",
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
  faq: [
    {
      question_et: "Mis põhjustab radiaatori ebaühtlast soojendamist?",
      answer_et: "Enamasti on süüdi süsteemis olev õhk või pooleldi suletud termoregulaator. Lahendus on radiaatori õhutamine ja radiaatorite tasakaalustamine — mõlemad toimingud teostab Torupro kiiresti kohapeal.",
      question_en: "What causes a radiator to heat unevenly?",
      answer_en: "The most common causes are trapped air in the system or a partially closed thermostatic valve. Torupro resolves this by bleeding the radiator and balancing the system — both done on-site during the same visit.",
      question_ru: "Что вызывает неравномерный нагрев радиатора?",
      answer_ru: "Чаще всего причиной является воздух в системе или частично закрытый термостатический клапан. Torupro устраняет проблему путём развоздушивания и балансировки радиаторов — оба действия выполняются на месте за один визит.",
    },
    {
      question_et: "Kas radiaatori lisamine või vahetus nõuab ühistu luba?",
      answer_et: "Jah, kortermajades nõuab radiaatori lisamine või keskkütteradiaatorite vahetus üldjuhul maja haldaja nõusolekut ning mõnikord ka projektlahendust. Toruprol on kogemus nii tehnilise teostuse kui ka haldusnõusoleku koordineerimisega.",
      question_en: "Does adding or replacing a radiator require housing association approval?",
      answer_en: "Yes, in apartment buildings, adding or replacing central heating radiators generally requires the building caretaker's consent and sometimes a design solution. Torupro has experience with both the technical work and coordinating the necessary approvals.",
      question_ru: "Требует ли добавление или замена радиатора согласования с управляющей организацией?",
      answer_ru: "Да, в многоквартирных домах добавление или замена радиаторов центрального отопления, как правило, требует согласия управляющего домом, а в ряде случаев — и проектного решения. Torupro имеет опыт как в технической реализации, так и в получении необходимых согласований.",
    },
    {
      question_et: "Millal on parim aeg küttesüsteemi hoolduseks?",
      answer_et: "Parim aeg on september–oktoober, enne kütteperioodi algust. Torupro kontrollib kogu sulgarmatuuri, puhastab soojusvahetid, õhutab süsteemi ja kontrollib rõhku — nii on talveks kõik korras.",
      question_en: "When is the best time to carry out heating system maintenance?",
      answer_en: "The ideal window is September–October, before the heating season begins. Torupro checks all shut-off valves, cleans heat exchangers, bleeds the system, and verifies pressure — so everything is ready for winter.",
      question_ru: "Когда лучше всего проводить техническое обслуживание системы отопления?",
      answer_ru: "Оптимальное время — сентябрь–октябрь, до начала отопительного сезона. Torupro проверяет всю запорную арматуру, чистит теплообменники, удаляет воздух из системы и контролирует давление — к зиме всё в порядке.",
    },
    {
      question_et: "Kuidas toimub küttesüsteemi lekke otsimine?",
      answer_et: "Kasutame termokaamera ja survetesti kombinatsiooni. Termokaamera paljastab sooja koha põrandas või seinas, survetest isoleerib kahjustatud lõigu täpselt. Seinu avatakse viimase sammuna — sageli leiame lekke, ilma et ühtki plaati puutuksime.",
      question_en: "How do you locate a leak in a heating system?",
      answer_en: "We combine thermal imaging with pressure testing. The thermal camera reveals warm spots in floors or walls, while pressure testing pinpoints the damaged section. Opening walls is always the last step — we often find the leak without disturbing a single tile.",
      question_ru: "Как проводится поиск утечки в системе отопления?",
      answer_ru: "Мы используем комбинацию тепловизора и испытания давлением. Тепловизор выявляет тёплые пятна в полах или стенах, испытание давлением точно локализует повреждённый участок. Вскрытие конструкций — всегда последний шаг: нередко находим течь, не потревожив ни одной плитки.",
    },
  ],
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

  long_et: `Varjatud leke on vaikne, aga väga kallis probleem — vesi võib niisutada seinu, põrandaid ja lagedisi nädalaid, isegi kuid, enne kui kahju silmaga nähtavaks muutub. Selleks ajaks on hallitus juba levinud, betoon on leotunud ja remondikulud on kasvanud mitu korda. Mida varem lekke asukoht täpselt tuvastatakse, seda väiksem on lõplik kahju.

Torupro kasutab lekke tuvastamiseks professionaalseid diagnostikameetodeid, millega suudame tuvastada lekkekoha täpselt ilma seinu purustamateta. Meie tööriistad: termokaamera paljastab temperatuurierinevused, mis viitavad niiskuse kogunemisele põrandas, seinas või laes — näeme sooja veetor kohas, kus niiskus liigub; niiskusmõõtjad mõõdavad ehitusmaterjalide niiskusesisaldust ja aitavad kaardistada, kui kaugele niiskus on levinud; survekatse isoleerib täpselt lekkinud torulõigu — tõstame surve ning jälgime, millises sektsioonis rõhk langeb; kaamerauuring kinnitab leiu visuaalselt ning loob videotõendi lekke asukohast.

Enamik varjatud lekke juhtumeid on seotud ühega järgmistest: vananemine toruühenduses (eriti vanematel PVC ja terastorustike ühenduskohtades), kareda veetõrge ümber toru ehk kondensaatsioonileke (segati valesti isoleeritud külma ja sooja toruga), katki läinud paindlik voolik köögis, vannitoas või WC-s (üks levinumaid lekete põhjusi), rebimisel või nihkumisel tekkinud leke põrandakütte torustikus, samuti torukorrosiooni tagajärjel tekkinud augud terastorudes.

Lekketuvastus on eriti vajalik järgmistel juhtudel: enne renoveerimist ja plaatimist (et mitte plaatida märg sein kinni — vastasel juhul tuleb peagi kõik uuesti lahti teha); korduvate niiskuse kaebuste ja hallituse ilmnemisel; kindlustushüvitise taotlemisel (kindlustusselts nõuab sageli sõltumatu spetsialisti lekkeakti); korteriühistute niiskuse kaardistamisel korruste läbivaatuse käigus; uue korruse soojapõranda lekke kahtlusel; veearve ootamatul suurenemisel ilma nähtava põhjuseta.

Anname täpse kirjaliku lekkeakti koos foto- ja videotõenditega, täpsete koordinaatide ja soovitustega edasiste remonditegevuste kohta. See dokument on vajalik kindlustusseltsile hüvitise taotlemisel ning korteriühistule ehitusliku otsuse langetamiseks.

Teenindame kõiki Tallinna linnaosasid: Lasnamäe, Mustamäe, Põhja-Tallinn, Kesklinn, Kristiine, Nõmme, Pirita, samuti Harjumaa valdu (Rae, Viimsi, Saue, Keila). Lekkeuuringut saab tellida nii elamukorteritele, äripindadele kui ka ühiskondlikele hoonetele. Meie diagnostikameeskond reageerib tavaliselt 24 tunni jooksul ning enamikel juhtudel on lekkekoht tuvastatud ühe visiidiga. Pärast lekke täpset tuvastamist saame vajadusel ka remonditööd kohapeal teostada. Kõigile töödele anname 12 kuu garantii.`,

  long_en: `A hidden leak is a silent but very expensive problem — water can be saturating walls, floors and ceilings for weeks or even months before visible damage appears. By that time mould has already spread, concrete has become waterlogged, and repair costs have multiplied. The sooner the leak location is pinpointed, the smaller the final damage.

Torupro uses professional diagnostic methods that let us locate a leak precisely without breaking down walls. Our toolkit includes: a thermal camera that reveals temperature differences indicating moisture accumulation in floors, walls or ceilings — we see where warm water is moving; moisture meters that measure the moisture content of building materials and map how far dampness has spread; pressure testing that precisely isolates the leaking pipe section — we raise pressure and monitor which section drops; and camera inspection that visually confirms the finding and creates a video record of the leak location.

Most hidden leak cases are caused by one of the following: ageing pipe joints (especially on older PVC and steel connections); condensation leaks where cold and warm pipes are incorrectly insulated; a burst flexible hose under the kitchen, bathroom or WC (one of the most common causes); a rupture or shift in underfloor heating pipework; or corrosion holes in steel pipes.

Leak detection is especially important in these situations: before renovation and tiling (to avoid tiling over a wet wall — otherwise everything needs to come up again soon); when recurring moisture complaints or mould appear; when claiming insurance compensation (the insurer often requires a leak report from an independent specialist); for housing association moisture mapping during floor inspections; when underfloor heating leak is suspected; or when the water bill increases unexpectedly without an obvious reason.

We provide a precise written leak report with photo and video evidence, exact coordinates, and recommendations for follow-up repair work. This document is required by insurance companies for claim processing and by housing associations for making structural decisions.

We cover all Tallinn districts — Lasnamäe, Mustamäe, Põhja-Tallinn, city centre, Kristiine, Nõmme, Pirita — as well as Harjumaa municipalities (Rae, Viimsi, Saue, Keila). Leak surveys can be ordered for residential apartments, commercial premises and public buildings alike. Our diagnostic team typically responds within 24 hours, and in most cases the leak location is identified within a single visit. After precise detection we can also carry out the repair on the spot if needed. All work comes with a 12-month guarantee.`,

  long_ru: `Скрытая течь — тихая, но крайне дорогостоящая проблема: вода может пропитывать стены, полы и потолки неделями и даже месяцами, прежде чем ущерб станет виден невооружённым глазом. К тому времени плесень уже распространилась, бетон пропитан, а расходы на ремонт возросли в несколько раз. Чем раньше точно определено место течи, тем меньше итоговый ущерб.

Torupro использует профессиональные методы диагностики, позволяющие точно локализовать течь без разрушения стен. Наш арсенал: тепловизор, выявляющий перепады температур, которые указывают на скопление влаги в полу, стене или потолке, — видно, куда движется тёплая вода; влагомеры, измеряющие влажность строительных материалов и позволяющие картировать, насколько далеко распространилась сырость; испытание давлением, точно изолирующее протекающий участок трубы, — повышаем давление и отслеживаем, в каком секторе оно падает; видеоинспекция, визуально подтверждающая находку и создающая видеозапись места течи.

Большинство случаев скрытой течи связаны с одной из следующих причин: старение трубных соединений (особенно на старых стыках ПВХ и стальных труб); конденсационная течь при неправильной изоляции холодных и тёплых труб рядом друг с другом; лопнувший гибкий шланг под кухонной мойкой, в ванной или туалете (одна из самых частых причин); разрыв или смещение трубопровода тёплого пола; коррозионные отверстия в стальных трубах.

Поиск течи особенно необходим в следующих ситуациях: перед ремонтом и укладкой плитки (чтобы не класть плитку на влажную стену — иначе вскоре придётся всё переделывать); при повторяющихся жалобах на сырость и появлении плесени; при подаче заявления на страховое возмещение (страховщик нередко требует акт независимого специалиста); при картировании влажности товариществами собственников в ходе обследования этажей; при подозрении на течь в системе тёплого пола; при неожиданном увеличении счёта за воду без видимой причины.

Выдаём точный письменный акт об утечке с фото- и видеодоказательствами, точными координатами и рекомендациями по дальнейшим ремонтным работам. Этот документ необходим страховой компании для обработки заявления и товариществу собственников для принятия конструктивных решений.

Обслуживаем все районы Таллина — Ласнамяэ, Мустамяэ, Põhja-Tallinn, центр, Кристийне, Нымме, Пирита — а также уезд Харью (Рае, Виймси, Сауэ, Кейла). Обследование на течи проводится в жилых квартирах, коммерческих помещениях и общественных зданиях. Диагностическая группа реагирует, как правило, в течение 24 часов; в большинстве случаев место течи определяется за один визит. После точного определения течи при необходимости можем выполнить ремонт на месте. На все работы — гарантия 12 месяцев.`,

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
  faq: [
    {
      question_et: "Kas varjatud lekke leidmine nõuab seinte avamist?",
      answer_et: "Üldjuhul mitte. Kasutame termokaamera, niiskusmõõtja ja survetesti kombinatsiooni, mis võimaldab enamikul juhtudel lekkekoht täpselt tuvastada ilma ühtegi pinda purustamateta. Seinte avamine toimub ainult remonditööde käigus, pärast täpset lekkekoha kindlaksmääramist.",
      question_en: "Does finding a hidden leak require opening up walls?",
      answer_en: "Generally no. We use a combination of thermal camera, moisture meter, and pressure testing that in most cases pinpoints the leak without breaking any surface. Wall opening only happens during the actual repair, after the leak location has been precisely confirmed.",
      question_ru: "Требует ли поиск скрытой течи вскрытия стен?",
      answer_ru: "Как правило, нет. Мы используем комбинацию тепловизора, влагомера и испытания давлением, которая в большинстве случаев позволяет точно определить место течи без разрушения каких-либо поверхностей. Вскрытие конструкций происходит только в ходе ремонтных работ — после точного подтверждения места течи.",
    },
    {
      question_et: "Mida sisaldab lekkeakt ja milleks seda vaja on?",
      answer_et: "Lekkeakt on kirjalik dokument, mis sisaldab lekkekoha täpseid koordinaate, foto- ja videotõendeid, diagnostikameetodite kirjeldust ning soovitusi remondiks. Seda vajab kindlustusselts kahju hüvitamiseks ja korteriühistu ehitusliku otsuse tegemiseks.",
      question_en: "What does a leak report contain and why is it needed?",
      answer_en: "A leak report is a written document containing the exact coordinates of the leak, photo and video evidence, a description of the diagnostic methods used, and repair recommendations. It is required by the insurance company for damage compensation and by the housing association for making structural decisions.",
      question_ru: "Что содержит акт об утечке и для чего он нужен?",
      answer_ru: "Акт об утечке — письменный документ, содержащий точные координаты места течи, фото- и видеодоказательства, описание применённых диагностических методов и рекомендации по ремонту. Он необходим страховой компании для возмещения ущерба и товариществу собственников для принятия конструктивных решений.",
    },
    {
      question_et: "Kui kaua võtab lekke diagnoosimine aega?",
      answer_et: "Enamikul juhtudel tuvastame lekkekoha ühe visiidiga, mis kestab 1–3 tundi sõltuvalt ruumide arvust ja lekke iseloomust. Kiireloomulistel juhtudel reageerime Tallinnas keskmiselt 2–4 tunni jooksul.",
      question_en: "How long does leak diagnosis take?",
      answer_en: "In most cases we identify the leak location in a single visit lasting 1–3 hours, depending on the number of rooms and the nature of the leak. For urgent cases we respond within an average of 2–4 hours in Tallinn.",
      question_ru: "Сколько времени занимает диагностика течи?",
      answer_ru: "В большинстве случаев мы определяем место течи за один визит продолжительностью 1–3 часа в зависимости от количества помещений и характера утечки. В срочных случаях реагируем в среднем в течение 2–4 часов по Таллину.",
    },
    {
      question_et: "Kas saate pärast lekkekoha tuvastamist ka remondi teostada?",
      answer_et: "Jah. Pärast täpse lekkekoha kindlaksmääramist saame vajadusel teostada ka remonditööd — torude vahetus, ühenduse tihendamine, põrandakütte parandamine jne. See säästab aega, sest ei pea teist meeskonda ootama.",
      question_en: "Can you also carry out the repair after locating the leak?",
      answer_en: "Yes. After precisely locating the leak we can also carry out the repair — pipe replacement, joint sealing, underfloor heating fix, etc. This saves time as you don't need to wait for a second team.",
      question_ru: "Можете ли вы выполнить ремонт после обнаружения течи?",
      answer_ru: "Да. После точного определения места течи мы можем сразу выполнить и ремонтные работы — замену труб, уплотнение соединений, ремонт тёплого пола и т.д. Это экономит время: не нужно ждать отдельную бригаду.",
    },
  ],
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

  long_et: `Väliskanalisatsiooni ehitamine on kompleksne projekt: maakaevetööd, maa-aluste drenaaži- ja kanalisatsioonitorude paigaldus, tühjenduskaevude ehitus ning ühendus olemasoleva kanalisatsioonivõrguga. Korrektne projekteerimine, nõuetekohased materjalid ja täpne täitmine tagavad, et väliskanalisatsioon toimib häireteta aastakümneid.

Torupro teostab väliskanalisatsiooni töid nii uusehitistele kui ka vananenud süsteemide renoveerimiseks. Uusehituse puhul rajame kogu trassi projektist lähtuvalt — sügavuskateedrite arvestus, kallete kontrollimine, ventilaatori- ja tühjenduskaevude paigaldus ning lõplik ühendus AS Tallinna Vesi kanalisatsioonivõrku. Saneerimistöödel asendame roostunud betoon- või hallikad PVC-torud kaasaegsete PVC SN8 rõngasjäigu torudega, mis on koormuskindlad ja pikaealisemad.

Miks just PVC SN8? See materjal on standardiseeritud Eesti kliimatingimustele — talub külmakahjustusi, on happekindel ja talub liikluse- ning maakoormust. Kasutame kinnitusvahendeid ja tihendeid, mis vastavad EN 476 ja EN 1401 standarditele.

Projekti käik on tavaliselt järgmine: esmalt koostatakse või kontrollitakse projekt koos kallete ja koordinaatidega; seejärel teostatakse kaevetööd koostöös kaevuri- ja trassiehitusfirmadega; järgneb torude paigaldus nõuetekohaste kaldete ja tihenduse kontrolliga; paigaldatakse tühjenduskaevud (beton- või polüetüleenkaevud); täidetakse kaevud liivaga kihtide kaupa tampides; lõpuks teostatakse survekatsed ja dokumenteeritakse kõik tööd.

Tallinna kanalisatsioonivõrku ühendamise kooskõlastused AS Tallinna Vesigas teeme ise — meil on kogemus nende nõuetega ning suhtleme ka volikiri alusel. Harjumaa valdades teeme vajalikud kooskõlastused vastavate vee-ettevõtetega (Rae Vesi, Viimsi Vesi, Saue vald jne).

Kõik väliskanalisatsiooni projektide tööd dokumenteeritakse täielikult: kaeviku fotod eri etappidel, torude paigalduse akt mõõtmistega, kaevude teostusjoonestik GPS-koordinaatidega. See dokumentatsioon on vajalik ehitusloa lõpetamiseks, elekter-ja veeettevõtte nõueteks ning kinnisvara müümisel. Kõigile töödele anname 24 kuu garantii.

Teenindame Tallinna kõiki linnaosasid ning Harjumaa valdu — sh kaugematest asulatest tellimusi, kus lähimast kanalisatsioonivõrgust tuleb trass viia mõnisada meetrit. Esitage päriv — tuleme kohale vaadata ja anname tasuta hinnahinnangu.`,

  long_en: `Outdoor sewer construction is a complex project: excavation work, installation of underground drainage and sewage pipes, building inspection manholes, and connecting to the existing sewer network. Correct design, compliant materials, and precise execution ensure that outdoor sewers function without issues for decades.

Torupro carries out outdoor sewer work for both new constructions and the renovation of ageing systems. For new builds we lay the entire pipeline from the project drawings — calculating burial depths, verifying slopes, installing ventilation and inspection manholes, and making the final connection to the AS Tallinna Vesi sewer network. For renovation we replace corroded concrete or deteriorated PVC pipes with modern PVC SN8 ring-stiffened pipes that are load-bearing and longer-lasting.

Why PVC SN8? This material is standardised for Estonian climate conditions — it withstands frost damage, is acid-resistant and handles both traffic and soil loads. We use fasteners and gaskets meeting EN 476 and EN 1401 standards.

A typical project sequence: first the project is drawn up or verified with slopes and coordinates; excavation is then carried out in partnership with excavation and pipeline construction firms; pipes are installed with correct slopes and seal checks; inspection manholes are installed (concrete or polyethylene); trenches are backfilled with sand compacted in layers; finally pressure testing is conducted and all work is fully documented.

We handle coordination with AS Tallinna Vesi for connecting to Tallinn's sewer network ourselves — we know their requirements and can act under a power of attorney. In Harjumaa municipalities we handle coordination with the relevant water utilities (Rae Vesi, Viimsi Vesi, Saue municipality, etc.).

All outdoor sewer project work is fully documented: trench photos at each stage, pipe installation record with measurements, as-built drawings of manholes with GPS coordinates. This documentation is required for completing the building permit, utility company requirements, and when selling the property. All work comes with a 24-month guarantee.

We cover all Tallinn districts and Harjumaa municipalities — including orders from more remote settlements where the pipeline must run several hundred metres to reach the nearest sewer network. Request a quote — we'll visit the site and provide a free estimate.`,

  long_ru: `Строительство наружной канализации — комплексный проект: земляные работы, прокладка подземных дренажных и канализационных труб, устройство смотровых колодцев и подключение к существующей канализационной сети. Правильное проектирование, нормативные материалы и точное исполнение обеспечивают безотказную работу наружной канализации на протяжении десятилетий.

Torupro выполняет работы по наружной канализации как для новых объектов, так и для реконструкции устаревших систем. При строительстве нового объекта прокладываем всю трассу по проектным чертежам — расчёт глубин заложения, проверка уклонов, устройство вентиляционных и смотровых колодцев, окончательное подключение к канализационной сети AS Tallinna Vesi. При реконструкции заменяем проржавевшие бетонные или пришедшие в негодность трубы ПВХ на современные трубы ПВХ SN8 с кольцевой жёсткостью, обладающие высокой несущей способностью и долгим сроком службы.

Почему ПВХ SN8? Этот материал стандартизирован для климатических условий Эстонии — выдерживает морозные повреждения, кислотостоек и рассчитан на нагрузки от транспорта и грунта. Используем крепёжные элементы и уплотнения, соответствующие стандартам EN 476 и EN 1401.

Типичная последовательность проекта: сначала разрабатывается или проверяется проект с уклонами и координатами; затем выполняются земляные работы совместно с экскаваторными и трассоукладочными организациями; укладываются трубы с контролем уклонов и уплотнений; устанавливаются смотровые колодцы (бетонные или полиэтиленовые); траншеи засыпаются послойно с уплотнением; наконец проводятся гидравлические испытания и полностью документируются все работы.

Согласование с AS Tallinna Vesi для подключения к канализационной сети Таллина берём на себя — знаем их требования и можем действовать по доверенности. В районах уезда Харью согласования проводим с соответствующими водоканалами (Rae Vesi, Viimsi Vesi, волость Сауэ и др.).

Все работы по проекту наружной канализации полностью документируются: фото траншеи на каждом этапе, акт укладки труб с замерами, исполнительные чертежи колодцев с координатами GPS. Эта документация необходима для закрытия строительного разрешения, выполнения требований коммунальных предприятий и при продаже объекта. На все работы — гарантия 24 месяца.

Обслуживаем все районы Таллина и районы уезда Харью — в том числе принимаем заказы из более отдалённых населённых пунктов, где трасса до ближайшей канализационной сети может составлять несколько сотен метров. Оставьте запрос — выедем на место и предоставим бесплатную оценку стоимости.`,

  h1_et: "Väliskanalisatsiooni Ehitus Tallinnas — Trasside Rajamine ja Remont",
  h1_en: "Outdoor Sewer Construction in Tallinn — Pipeline Installation and Repair",
  h1_ru: "Строительство наружной канализации в Таллине — прокладка и ремонт трасс",

  h2_et: "Maa-alused kanalisatsioonitorud, kaevud, ühendus võrku — täispakett dokumentatsiooniga",
  h2_en: "Underground sewer pipes, manholes, network connection — full package with documentation",
  h2_ru: "Подземные канализационные трубы, колодцы, подключение к сети — полный пакет с документацией",

  metaTitle_et: "Väliskanalisatsioon Tallinn | Trasside Ehitus — Torupro",
  metaTitle_en: "Outdoor Sewer Construction Tallinn | Torupro",
  metaTitle_ru: "Наружная канализация Таллин | Строительство — Torupro",

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
  faq: [
    {
      question_et: "Kas väliskanalisatsiooni ehitamiseks on vaja ehitusluba?",
      answer_et: "Üldjuhul jah — maa-alune kanalisatsioonitrassi rajamine nõuab kohaliku omavalitsuse ehitusluba ja AS Tallinna Vesi kooskõlastust Tallinnas. Torupro abistab vajalike lubade ja kooskõlastuste hankimisel.",
      question_en: "Is a building permit required for outdoor sewer construction?",
      answer_en: "Generally yes — laying an underground sewer pipeline requires a local government building permit and AS Tallinna Vesi coordination in Tallinn. Torupro assists with obtaining the necessary permits and approvals.",
      question_ru: "Требуется ли разрешение на строительство наружной канализации?",
      answer_ru: "Как правило, да — прокладка подземной канализационной трассы требует разрешения на строительство от местной власти и согласования с AS Tallinna Vesi в Таллине. Torupro помогает в получении необходимых разрешений и согласований.",
    },
    {
      question_et: "Milline materjal sobib väliskanalisatsiooniks?",
      answer_et: "Tänapäeval kasutatakse peamiselt PVC SN8 rõngasjäigu torusid, mis on koormuskindlad, külmakindlad ja happekindlad. Vanades majades asendame betoon- ja malmtorusid just PVC SN8 vastu — see on kestlik ja hooldusevaba lahendus.",
      question_en: "Which material is suitable for outdoor sewer pipes?",
      answer_en: "Today PVC SN8 ring-stiffened pipes are the primary choice — load-bearing, frost-resistant and acid-resistant. In older properties we replace concrete and cast iron pipes precisely with PVC SN8 — a durable, maintenance-free solution.",
      question_ru: "Какой материал подходит для наружной канализации?",
      answer_ru: "Сегодня основным выбором являются трубы ПВХ SN8 с кольцевой жёсткостью — несущие, морозостойкие и кислотостойкие. В старых объектах мы заменяем бетонные и чугунные трубы именно на ПВХ SN8 — долговечное и не требующее обслуживания решение.",
    },
    {
      question_et: "Mida tähendab «tühjenduskaev» ja mitu seda vaja on?",
      answer_et: "Tühjenduskaev on maa-alune kaev, mille kaudu saab kanalisatsioonitorustikku puhastada ja kontrollida. AS Tallinna Vesi nõuab tühjenduskaevi trassi suunamuutustele, liitumiskohtadele ning teatud vahemaade tagant sirgetel lõikudel (tavaliselt mitte üle 50 m). Torupro arvestab kaevude asukohad projektlahenduses.",
      question_en: "What is an inspection manhole and how many are needed?",
      answer_en: "An inspection manhole is an underground chamber that allows the sewer pipeline to be cleaned and inspected. AS Tallinna Vesi requires manholes at direction changes, junctions, and at certain intervals on straight sections (generally no more than 50 m apart). Torupro calculates manhole locations in the design solution.",
      question_ru: "Что такое смотровой колодец и сколько их нужно?",
      answer_ru: "Смотровой колодец — подземная камера, обеспечивающая доступ для прочистки и проверки канализационной трубы. AS Tallinna Vesi требует колодцы на поворотах трассы, местах подключений и через определённые интервалы на прямых участках (как правило, не более 50 м). Torupro рассчитывает расположение колодцев в проектном решении.",
    },
  ],
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

  long_et: `Ennetav hooldus on kordades odavam kui rikke kõrvaldamine — see põhimõte kehtib eriti torustike puhul. Kanalisatsioonitoru, mis on aastate jooksul täis kasvanud rasvakihi, lubjasadestemine ja paberijäänustega, rebeneb ühel hetkel ootamatult — ja siis tuleb hädaabikõne, avarii, seinte avamine ja suur arve. Regulaarne torustiku ülevaatus ja puhastus pikendab süsteemi eluiga, hoiab avariid eemal ja tagab, et veekulu on mõistlik.

Torupro torude hoolduspakett hõlmab järgmisi tegevusi: visuaalne ülevaatus kõikidest ligipääsetavatest torudest ja liitmikest; survepesu vähemalt ühes peakanalisatsioonitorus (eemaldame rasvakihi, lubjasadestused ja muud pehmed kinnikiilunud ained); sulgarmatuuride (segistid, peakraanid, radiaatorisulgkraanid) kontroll ja vajadusel hooldustoimingud; kaamerauuring vajaduse korral — näeme toru seisundit seestpoolt ning tuvastame pragusid, nihkeid ja korrosiooni enne, kui need suuremaks probleemiks kasvavad. Hoolduse järel saate kirjaliku aruande, milles kirjeldame leitud probleemid ja soovitused.

Korteriühistutele pakume aastaseid hoolduslepinguid kvartalipõhise külastusega — spetsialist käib regulaarselt läbi kõik kriitilised torustikupunktid, sh kelder, tehnoruumid, roostisoldud ühendused ja rasva- ning liivapüüdurid. Leping annab ühistule rahumeele: tehnosüsteemid on järjepidevalt jälgitud ja dokumenteeritud.

Eramajaomanikele on sügisene torustiku hooldus eriti oluline: kontrollime, kas suvine veekasutus (kastmine, bassein) on tekitanud ladestumisel, ning teeme küttesüsteemi hooajalise ettevalmistuse — survekatse, õhutamine, küttevedeliku taseme kontroll. Kevadine hooldus pärast sulailmade saabumist kontrollib, kas maa külmumise-sulamise tsükkel ei ole tekitanud murdekohti väliskanalisatsioonis.

Tootmishoonetele ja toitlustusettevõtetele on regulaarne torude hooldus sageli hügieeninõuete täitmise osa — rasvaeraldite puhastamine, liivapüüdurite tühjendamine ja survepesu kanalisatsioonipõhimikus peavad toimuma etteantud sagedusega. Torupro saab selle kõik ühe lepinguga hallata.

Teenindame kõiki Tallinna linnaosasid ja Harjumaa valdu. Hoolduskäiku saab kokku leppida paindlikult — ka väljaspool tööaega, et mitte segada kortermaja või ärihoone tavapärast tegevust. Kõigile hoolduse käigus teostatud remonditöödele anname 12 kuu garantii.`,

  long_en: `Preventive maintenance is many times cheaper than fixing a failure — this principle applies especially to pipe systems. A sewer pipe that has gradually filled with grease, limescale and paper debris will unexpectedly fail at some point — triggering an emergency call, an accident, opened walls, and a large bill. Regular pipe inspection and cleaning extends the system lifespan, keeps emergencies at bay, and ensures water consumption stays reasonable.

The Torupro pipe maintenance package covers the following activities: visual inspection of all accessible pipes and fittings; hydro-jetting of at least one main sewer pipe (removing grease layers, limescale deposits, and other soft blockage material); inspection of shut-off valves (taps, main stopcocks, radiator valves) with servicing where needed; and camera inspection when required — we see the pipe condition from the inside and detect cracks, displacement and corrosion before they grow into larger problems. After maintenance you receive a written report describing any issues found and recommendations.

For housing associations we offer annual maintenance contracts with quarterly visits — a specialist regularly goes through all critical pipe points including the basement, utility rooms, corroded joints, and grease and sand traps. The contract gives the association peace of mind: the building systems are continuously monitored and documented.

For private homeowners autumn pipe maintenance is especially important: we check whether summer water use (irrigation, pools) has caused any build-up and carry out seasonal heating system preparation — pressure testing, bleeding, checking heating fluid levels. Spring maintenance after the thaw checks whether the freeze-thaw cycle has caused fractures in the outdoor sewer.

For production facilities and catering businesses, regular pipe maintenance is often part of hygiene compliance — grease trap cleaning, sand trap emptying, and hydro-jetting of the sewer base must occur at set frequencies. Torupro can manage all of this under a single contract.

We cover all Tallinn districts and Harjumaa municipalities. Maintenance visits can be scheduled flexibly — including outside normal business hours to avoid disrupting the routine of an apartment building or commercial property. All repairs carried out during maintenance come with a 12-month guarantee.`,

  long_ru: `Профилактическое обслуживание многократно дешевле устранения аварии — этот принцип особенно актуален для трубных систем. Канализационная труба, постепенно заросшая жиром, известковым налётом и остатками бумаги, в какой-то момент неожиданно выходит из строя — и тогда следует аварийный вызов, авария, вскрытие стен и крупный счёт. Регулярный осмотр и очистка труб продлевают срок службы системы, предотвращают аварии и обеспечивают разумное водопотребление.

Пакет технического обслуживания труб Torupro охватывает следующие работы: визуальный осмотр всех доступных труб и фитингов; гидропромывка не менее одной магистральной канализационной трубы (удаление жирового налёта, известковых отложений и другого мягкого засорявшего материала); проверка запорной арматуры (краны, главные вентили, радиаторные краны) с обслуживанием при необходимости; видеодиагностика по запросу — видим состояние трубы изнутри и выявляем трещины, смещения и коррозию до того, как они перерастут в более серьёзные проблемы. После обслуживания вы получаете письменный отчёт с описанием выявленных проблем и рекомендациями.

Для товариществ собственников предлагаем годовые контракты на техническое обслуживание с ежеквартальными визитами — специалист регулярно проверяет все критические точки трубопровода, включая подвал, технические помещения, корродированные соединения, жироуловители и песколовки. Договор обеспечивает товариществу спокойствие: инженерные системы непрерывно контролируются и документируются.

Для владельцев частных домов особенно важно осеннее техническое обслуживание трубопровода: проверяем, не образовалось ли отложений после летнего водопотребления (полив, бассейн), и проводим сезонную подготовку системы отопления — испытание давлением, развоздушивание, проверку уровня теплоносителя. Весеннее обслуживание после прихода тепла проверяет, не вызвал ли цикл замерзания-оттаивания трещин в наружной канализации.

Для производственных предприятий и заведений общественного питания регулярное техническое обслуживание труб нередко является частью выполнения санитарных требований — чистка жироуловителей, опорожнение песколовок и гидропромывка основания канализации должны проводиться с заданной периодичностью. Torupro может управлять всем этим в рамках единого контракта.

Обслуживаем все районы Таллина и муниципалитеты уезда Харью. Визиты по техническому обслуживанию можно планировать гибко — в том числе в нерабочее время, чтобы не нарушать распорядок многоквартирного дома или коммерческого объекта. На все ремонтные работы, выполненные в ходе обслуживания, — гарантия 12 месяцев.`,

  h1_et: "Torude Hooldus Tallinnas — Ennetav Torustiku Kontroll",
  h1_en: "Pipe Maintenance in Tallinn — Preventive Pipe System Inspection",
  h1_ru: "Техническое обслуживание труб в Таллине — профилактический осмотр трубопровода",

  h2_et: "Survepesu + kontroll + kaamerauuring — hoolduspakett korteriühistutele ja eramajaomanikele",
  h2_en: "Hydro-jetting + inspection + camera survey — maintenance package for housing associations and homeowners",
  h2_ru: "Гидропромывка + осмотр + видеодиагностика — пакет обслуживания для ТСЖ и владельцев частных домов",

  metaTitle_et: "Torude Hooldus Tallinn | Ennetav Kontroll — Torupro",
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
  faq: [
    {
      question_et: "Kui sageli peaks torustiku hooldusel laskma teha?",
      answer_et: "Kortermajades soovitame vähemalt korra aastas, ideaalis kaks korda: sügisene hooldus enne kütteperioodi ja kevadine hooldus pärast sula. Eramajaomanikel piisab üks kord aastas, toitlustusettevõtetel soovitame korra kvartalis rasvakihi tõttu.",
      question_en: "How often should pipe maintenance be carried out?",
      answer_en: "For apartment buildings we recommend at least once a year, ideally twice: autumn maintenance before the heating season and spring maintenance after the thaw. For private homeowners once a year is sufficient; for catering businesses we recommend quarterly due to grease build-up.",
      question_ru: "Как часто следует проводить техническое обслуживание труб?",
      answer_ru: "Для многоквартирных домов рекомендуем не реже одного раза в год, в идеале — дважды: осеннее обслуживание перед отопительным сезоном и весеннее после оттепели. Для владельцев частных домов достаточно одного раза в год; для заведений общественного питания рекомендуем ежеквартально из-за жирового налёта.",
    },
    {
      question_et: "Mida sisaldab hoolduspakett ja mis see maksab?",
      answer_et: "Standardpakett sisaldab visuaalset ülevaatust, survepesu peakanalisatsioonil ja kirjaliku aruande. Kaamerauuring ja täiendavad survepesutsüklid lisanduvad eraldi. Hind sõltub hoone suurusest ja torustiku seisundist — saadame tasuta hinnapakkumise pärast esmast ülevaatust.",
      question_en: "What does the maintenance package include and what does it cost?",
      answer_en: "The standard package includes visual inspection, hydro-jetting on the main sewer line and a written report. Camera inspection and additional jetting cycles are extra. Price depends on building size and pipe condition — we send a free quote after an initial assessment.",
      question_ru: "Что включает пакет обслуживания и сколько это стоит?",
      answer_ru: "Стандартный пакет включает визуальный осмотр, гидропромывку главной канализационной линии и письменный отчёт. Видеодиагностика и дополнительные циклы промывки — отдельно. Стоимость зависит от размера здания и состояния трубопровода — отправляем бесплатное коммерческое предложение после первоначальной оценки.",
    },
    {
      question_et: "Kas hooldusleping korteriühistule tähendab kindlaid kuupäevi?",
      answer_et: "Jah — hooldusleping sisaldab eelnevalt kokku lepitud külastuse kuupäevi aasta jooksul. Meie meeskond tuleb kindlal ajal kohale, nii et ühistu juhatus ega majandusjuhataja ei pea igal korral eraldi kokku leppima. Kõik külastused dokumenteerime ja saadame raporti.",
      question_en: "Does a maintenance contract for a housing association mean fixed dates?",
      answer_en: "Yes — the maintenance contract includes pre-agreed visit dates throughout the year. Our team arrives at the set time so the association board or property manager does not need to arrange each visit separately. All visits are documented and we send a report.",
      question_ru: "Означает ли договор на обслуживание для ТСЖ фиксированные даты?",
      answer_ru: "Да — договор на обслуживание включает заранее согласованные даты визитов в течение года. Наша бригада приезжает в установленное время, так что правлению ТСЖ или управляющему не нужно согласовывать каждый визит отдельно. Все визиты документируются, отчёт направляется после каждого.",
    },
  ],
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

  long_et: `Survepesuauto on rasketehnika kanalisatsioonisüsteemide puhastamiseks — vajalik siis, kui tegemist on suurte väliskanalisatsioonitorude ummistuse, põhjaliku puhastuse või pikamaa-trasside läbipeoga. Majakanalisatsiooni tavaline survepesuseade töötab kuni 150 baariga ja voolik ulatub 30–50 meetrini — see ei ole piisav suuremate maa-aluste torustike jaoks. Meie survepesuauto töötab kuni 200 baariga ja voolik ulatub kuni 100 meetrini.

Survepesuauto kasutamise valdkonnad on laiad: kortermaja väliskanalisatsiooni ummistus (kui ummistus on kaugemal kui 30 m ning sisemise masina voolik ei ulatu kohale); suurte haljasalade, tänavate ja parklade sadeveetorude hooajaline läbipesu pärast sügis-talvist lehestikku ja liiva; tootmishoonete, toitlustusasutuste ja toiduladustamisettevõtete maa-aluste rasvaste kanalisatsioonide perioodiline puhastus; kriisiolukorras suurte ummistuste (nn kollapskork) kiire likvideerimine, kus tavaline masin ei suuda piisavat rõhku tekitada; ehitusjärgsete trasside läbipesu ja puhastus enne üleandmist.

Miks survepesuauto on odavam kui kaevamine? Kaevamine tähendab kulusid ekskavaatorile, trassikahjustusi teele/plaadistusele, pikaajalist tööd ja suurt parandusarvet. Survepesuauto puhastab kanalisatsiooni seestpoolt, ilma maa kaevamata — kogu töö võtab tavaliselt 1–4 tundi.

Töö alustame alati kaameraga — vaatame kamerapäisega toru seisundit enne survepesu, et valida optimaalne düüs ja rõhk. Heidutavate ladestuste (rasv, liiv, betoon) puhul kasutame spetsiaalseid freesdüüse; pehmete ummistuste (paber, lapid, juurestik) puhul tavalist pöörlevat düüsi kõrge veerõhuga. Vajadusel kombineerime survepesu vakuumimisega — imeme välja lahti puhastatud materjali, et see ei läheks edasi süsteemi.

Pärast tööd teostame kaamera kontrolluuringu, millega kinnitame, et toru on puhas ja konstruktiivselt terviklikus seisukorras. Tulemused dokumenteeritakse videoraportina.

Teenindame kõiki Tallinna linnaosasid ja Harjumaa valdu. Survepesuauto on liikuv — saame hõlpsalt ka Keila, Saue, Viimsi ja Rae valla objektidele. Hädaolukordades reageerime Tallinnas keskmiselt 3–4 tunni jooksul. Hinnakujundus on üldjuhul tundide põhine + kasutatud materjal, konkreetne pakkumine pärast esmast infot objekti kohta.`,

  long_en: `A jetting truck is heavy machinery for cleaning sewer systems — needed when dealing with large outdoor sewer blockages, thorough cleaning, or long-distance pipeline flushing. A standard building jetter operates at up to 150 bar with a hose reaching 30–50 metres — not sufficient for larger underground pipe systems. Our jetting truck operates at up to 200 bar with a hose reaching up to 100 metres.

The range of jetting truck applications is broad: apartment building outdoor sewer blockages (when the blockage is more than 30 m away and the indoor machine hose cannot reach); seasonal flushing of large green areas, streets and car park stormwater pipes after autumn-winter leaf and sand accumulation; periodic cleaning of underground grease-laden sewers in production facilities, catering establishments and food storage companies; rapid clearing of major blockages in crisis situations where a standard machine cannot generate sufficient pressure; flushing and cleaning of post-construction pipelines before handover.

Why is a jetting truck cheaper than excavation? Excavation means costs for an excavator, road and paving damage, lengthy work, and a large repair bill. A jetting truck cleans the sewer from the inside without any digging — the entire job typically takes 1–4 hours.

We always start with a camera inspection — we check the pipe condition with a camera head before jetting to choose the optimal nozzle and pressure. For stubborn deposits (grease, sand, concrete) we use specialist milling nozzles; for soft blockages (paper, wipes, roots) we use a standard rotating nozzle with high water pressure. Where needed we combine jetting with vacuum extraction — suctioning out the dislodged material so it does not move further into the system.

After work we carry out a camera verification inspection confirming that the pipe is clean and structurally sound. Results are documented as a video report.

We cover all Tallinn districts and Harjumaa municipalities. The jetting truck is mobile — we can easily reach objects in Keila, Saue, Viimsi and Rae municipality. In emergencies we respond within an average of 3–4 hours in Tallinn. Pricing is generally hourly plus materials used; a specific quote after initial information about the object.`,

  long_ru: `Машина высокого давления — тяжёлая техника для очистки канализационных систем. Она необходима при засорах в крупных трубах наружной канализации, масштабной прочистке или промывке длинных трасс. Стандартный агрегат для промывки внутри здания работает при давлении до 150 бар, длина шланга — 30–50 метров: для крупных подземных трубопроводов этого недостаточно. Наша машина работает при давлении до 200 бар, шланг достигает 100 метров.

Область применения машины высокого давления широка: засоры в наружной канализации многоквартирных домов (если засор находится дальше 30 м и шланг внутренней машины не достаёт); сезонная промывка ливневых труб на крупных газонах, улицах и парковках после осенне-зимнего листопада и песка; периодическая очистка подземной жировой канализации производственных предприятий, заведений общественного питания и складов продовольствия; быстрое устранение крупных засоров в аварийных ситуациях, когда стандартная машина не создаёт достаточного давления; промывка и очистка трасс после строительства перед сдачей объекта.

Почему машина высокого давления дешевле раскопок? Раскопки означают расходы на экскаватор, повреждение дороги и мощения, длительные работы и большой счёт за восстановление. Машина высокого давления прочищает канализацию изнутри без каких-либо земляных работ — весь процесс обычно занимает 1–4 часа.

Работу всегда начинаем с видеоинспекции — проверяем состояние трубы камерой перед промывкой, чтобы выбрать оптимальную насадку и давление. При стойких отложениях (жир, песок, бетон) применяем специальные фрезерные насадки; при мягких засорах (бумага, салфетки, корни) — стандартную вращающуюся насадку с высоким давлением воды. При необходимости сочетаем промывку с вакуумной откачкой — отсасываем разрушенный материал, чтобы он не ушёл дальше в систему.

После работы проводим контрольную видеоинспекцию, подтверждающую чистоту трубы и её конструктивную целостность. Результаты документируются в виде видеоотчёта.

Обслуживаем все районы Таллина и муниципалитеты уезда Харью. Машина мобильна — легко выезжаем на объекты в Кейла, Сауэ, Виймси и волости Рае. В аварийных ситуациях реагируем в среднем в течение 3–4 часов по Таллину. Стоимость, как правило, почасовая плюс использованные материалы; конкретное предложение — после получения первичной информации об объекте.`,

  h1_et: "Survepesuauto Tallinnas — Suure Väliskanalisatsiooni Puhastus",
  h1_en: "Jetting Truck in Tallinn — Large Outdoor Sewer Cleaning",
  h1_ru: "Машина высокого давления в Таллине — очистка крупной наружной канализации",

  h2_et: "Kuni 200 bar, 100 m voolik — väliskanalisatsiooni ummistus läheb lahti garantiiga",
  h2_en: "Up to 200 bar, 100 m hose — outdoor sewer blockage cleared with guarantee",
  h2_ru: "До 200 бар, шланг 100 м — засор наружной канализации устраняем с гарантией",

  metaTitle_et: "Survepesuauto Tallinn | Väliskanalisatsioon — Torupro",
  metaTitle_en: "Jetting Truck Tallinn | Outdoor Sewer Cleaning — Torupro",
  metaTitle_ru: "Каналопромывка Таллин | Наружная канализация — Torupro",

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
  faq: [
    {
      question_et: "Mille poolest erineb survepesuauto tavalisest survepesuseadmest?",
      answer_et: "Survepesuauto töötab kuni 200 baariga (tavaseade kuni 150 bar) ja voolik ulatub kuni 100 meetrini (tavaseade 30–50 m). See teeb survepesuauto sobivaks suurtele maa-alusele kanalisatsioonitorudele ja pikamaa-trasside puhastamiseks.",
      question_en: "How does a jetting truck differ from a standard jetter?",
      answer_en: "A jetting truck operates at up to 200 bar (standard unit up to 150 bar) and the hose reaches up to 100 metres (standard unit 30–50 m). This makes the jetting truck suitable for large underground sewer pipes and long-distance pipeline cleaning.",
      question_ru: "Чем машина высокого давления отличается от стандартного аппарата?",
      answer_ru: "Машина высокого давления работает при давлении до 200 бар (стандартный агрегат — до 150 бар), шланг достигает 100 метров (стандартный агрегат — 30–50 м). Это делает машину подходящей для крупных подземных канализационных труб и промывки протяжённых трасс.",
    },
    {
      question_et: "Kas survepesuauto saab ka toiduettevõtte kanalisatsiooni puhastada?",
      answer_et: "Jah — toiduettevõtete ja tootmishoonete maa-alused rasvakanalisatsioonid on survepesuauto üks peamisi kasutusvaldkondi. Rasv tahkub torude seintele ja moodustab nn rasvakorgid, mida tavaline survepesuseade ei suuda läbistada. Kasutame spetsiaalseid freesdüüse.",
      question_en: "Can a jetting truck also clean a food business sewer?",
      answer_en: "Yes — the underground grease sewers of food businesses and production facilities are one of the primary uses of a jetting truck. Grease solidifies on pipe walls forming so-called grease plugs that a standard jetter cannot penetrate. We use specialist milling nozzles.",
      question_ru: "Может ли машина высокого давления прочистить канализацию пищевого предприятия?",
      answer_ru: "Да — подземные жировые канализации пищевых предприятий и производственных зданий являются одной из основных областей применения машины высокого давления. Жир застывает на стенках труб, образуя так называемые жировые пробки, с которыми стандартный агрегат не справляется. Применяем специальные фрезерные насадки.",
    },
    {
      question_et: "Kas peale survepesu tehakse ka kontrollkaameraga uuring?",
      answer_et: "Jah, alati. Enne tööd kontrollime kaameraga toru seisundit, et valida sobiv düüs ja rõhk. Pärast survepesu teostame kontrolluuring, millega kinnitame, et toru on puhas ja terviklikus konstruktiivses seisukorras. Tulemused saate videoraportina.",
      question_en: "Is a camera inspection carried out after jetting?",
      answer_en: "Yes, always. Before work we inspect the pipe condition with a camera to choose the right nozzle and pressure. After jetting we carry out a verification inspection confirming the pipe is clean and structurally sound. You receive the results as a video report.",
      question_ru: "Проводится ли видеоинспекция после промывки?",
      answer_ru: "Да, всегда. Перед работой проверяем состояние трубы камерой, чтобы выбрать подходящую насадку и давление. После промывки проводим контрольную инспекцию, подтверждающую чистоту трубы и её конструктивную целостность. Результаты вы получаете в виде видеоотчёта.",
    },
  ],
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

  long_et: `Fekaalivedu on teenus, mida vajavad kõik, kellel puudub ühendus kanalisatsioonivõrku, ning ka need, kes peavad regulaarselt tühjendama suure mahuga kogumisrajatisi. Kogumiskaev, mis saab täis, võib paisata sisu üle kaev serva ja reostada pinnast — ennetav tühjendamine on keskkonnaalane kohustus ja praktiline vajadus.

Meie fekaaliveoauto on varustatud võimsa vakuumpumbaga, mis imeb välja ka tihedama sette, raskema rasvakihi ja vähemalt osaliselt tahkestunud materjali. Veopaak mahutab piisavalt, et enamik tavamajapidamise kogumiskaeve saab tühjendatud ühe käiguga. Sõidame kõigisse Tallinna linnaosadesse, Harjumaa valdadesse ja lähimaakondade piirialadele — vastame üldjuhul sama- või järgmisel tööpäeval.

Tühjendame: kuivkäimlaid ja väljakäimlaid eramajadel ja maakinnistutel; betoon- ja plastkogumiskaeve eri mahuga (2–20 m³); mehhaniseerimata (passiiv)septikuid ja ühe-kahe kambriline biotiigi eel-settekaive; ehitusplatside kemikaalide tualette (portatiivne WC tühjendamine); ürituste ajutisi WC-sid ja festivalide käimlaid.

Mis juhtub, kui kogumiskaev on liiga täis? Peale tavapärase vakuumimise on võimalik ka kaev eelnevalt vedeldada — lisame vett, et sete lahjeneks ja pump saaks selle kätte. Väga paksude settega kaevude puhul võib osutuda vajalikuks mitu käiku.

Pärast tühjendust saate soovi korral kirjaliku üleandmisakt veetud mahuga, kuupäeva ja meie allkirjaga — see dokument on vajalik keskkonnaloa aruandluseks, mis käib kaasas paljudele eramajaomanikel, kellel on kogumiskaev või septik.

Meile võib pöörduda nii kiiresti (kaev on täis ja situatsioon on kriitiline) kui ka planeeritult — ennetav tühjendamine kaks korda aastas on odavam kui avariivisiit ja pinnase puhastusjärgne saneerimistöö. Hinnaküsimine ei kohusta — helistage ja öelge tühjendatava objekti tüüp ja ligikaudne maht.`,

  long_en: `Sewage tanker service is needed by everyone without a sewer network connection, as well as those who must regularly empty large-capacity collection facilities. A collection pit that fills up can overflow its rim and contaminate the soil — preventive emptying is both an environmental obligation and a practical necessity.

Our sewage tanker is equipped with a powerful vacuum pump capable of extracting denser sludge, heavier grease layers, and at least partially solidified material. The transport tank holds enough capacity that most standard household collection pits can be emptied in a single visit. We travel to all Tallinn districts, Harjumaa municipalities and surrounding county border areas — we generally respond the same or next working day.

We empty: dry and outdoor toilets on private properties and rural land; concrete and plastic collection pits of various sizes (2–20 m³); non-mechanised (passive) septic tanks and single- or dual-chamber pre-settlement chambers of bio-ponds; construction site chemical toilets (portable WC emptying); temporary event WCs and festival toilet facilities.

What if the collection pit is overly full? In addition to standard vacuum extraction, we can pre-dilute the contents — we add water to thin out the sludge so the pump can extract it. For pits with very thick sludge, multiple visits may be necessary.

After emptying you can receive a written handover act on request, showing the volume transported, date, and our signature — this document is required for environmental permit reporting, which applies to many private homeowners with a collection pit or septic tank.

You can contact us for urgent needs (the pit is full and the situation is critical) as well as for planned visits — preventive emptying twice a year is cheaper than an emergency visit and subsequent soil remediation. Asking for a price quote is non-committal — call us and tell us the type of facility and approximate volume.`,

  long_ru: `Ассенизаторские услуги необходимы всем, у кого нет подключения к канализационной сети, а также тем, кто должен регулярно опорожнять накопительные ёмкости большого объёма. Накопительная яма, заполненная до краёв, может переполниться и загрязнить почву — профилактическая откачка является экологической обязанностью и практической необходимостью.

Ассенизаторская машина Torupro оснащена мощным вакуумным насосом, способным откачивать более плотный осадок, тяжёлые жировые слои и частично затвердевший материал. Объём цистерны достаточен, чтобы большинство стандартных накопительных ям частного домохозяйства можно было опустошить за один приезд. Работаем во всех районах Таллина, муниципалитетах уезда Харью и приграничных районах соседних уездов — как правило, реагируем в тот же или следующий рабочий день.

Откачиваем: дворовые и уличные туалеты на частных участках и в сельской местности; бетонные и пластиковые накопительные ямы различного объёма (2–20 м³); немеханизированные (пассивные) септики и одно- или двухкамерные отстойники биопрудов; химические туалеты на строительных площадках (опорожнение переносных WC); временные туалеты для мероприятий и фестивальные туалетные кабинки.

Что делать, если накопительная яма переполнена? Помимо стандартной вакуумной откачки, возможно предварительное разжижение содержимого — добавляем воду, чтобы осадок стал жиже и насос смог его захватить. При очень густом осадке может потребоваться несколько приездов.

По желанию после откачки вы получаете письменный акт с указанием вывезенного объёма, даты и нашей подписью — этот документ необходим для отчётности по разрешению на природопользование, которая обязательна для многих владельцев частных домов с накопительной ямой или септиком.

Обращаться к нам можно как срочно (яма заполнена, ситуация критическая), так и планово — профилактическая откачка дважды в год обходится дешевле, чем аварийный вызов и последующая рекультивация почвы. Уточнить стоимость можно без обязательств — позвоните и сообщите тип объекта и примерный объём.`,

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
  faq: [
    {
      question_et: "Kui sageli peaks kogumiskaev tühjendama?",
      answer_et: "Sõltub kasutusintensiivsusest ja kaev mahust — eramajades keskmiselt 2–4 korda aastas. Parim on jälgida täituvustaset ja tellida tühjendamine, kui kaev on 70–80% täis, mitte oodata kuni ääreni.",
      question_en: "How often should a collection pit be emptied?",
      answer_en: "It depends on usage intensity and pit volume — in private homes typically 2–4 times a year. Best practice is to monitor fill level and order emptying when the pit is 70–80% full, not wait until it reaches the brim.",
      question_ru: "Как часто нужно откачивать накопительную яму?",
      answer_ru: "Зависит от интенсивности использования и объёма ямы — в частных домах в среднем 2–4 раза в год. Лучшая практика — следить за уровнем наполнения и заказывать откачку, когда яма заполнена на 70–80%, не дожидаясь переполнения.",
    },
    {
      question_et: "Kas fekaaliveo järel saab üleandmisakti?",
      answer_et: "Jah — soovi korral väljastame kirjaliku üleandmisakt veetud mahuga, kuupäeva ja meie allkirjaga. See dokument on oluline keskkonnaloa aruandluseks, mida paljud kohalikud omavalitsused nõuavad.",
      question_en: "Can I get a handover act after sewage tanker service?",
      answer_en: "Yes — on request we issue a written handover act with the volume transported, date and our signature. This document is important for environmental permit reporting required by many local governments.",
      question_ru: "Выдаётся ли акт после ассенизаторской услуги?",
      answer_ru: "Да — по запросу выдаём письменный акт с указанием вывезенного объёма, даты и нашей подписью. Этот документ важен для отчётности по разрешению на природопользование, которую требуют многие органы местного самоуправления.",
    },
    {
      question_et: "Kas sõidate ka Tallinnast kaugemale?",
      answer_et: "Jah — teenindame kogu Harjumaad ning lähimaakondade piirialasid. Küsige konkreetse aadressi kohta — hindame transpordikulu ja anname teile selge pakkumise.",
      question_en: "Do you travel outside of Tallinn?",
      answer_en: "Yes — we service all of Harjumaa and surrounding county border areas. Ask about a specific address — we will estimate the transport cost and give you a clear quote.",
      question_ru: "Выезжаете ли вы за пределы Таллина?",
      answer_ru: "Да — обслуживаем весь уезд Харью и приграничные районы соседних уездов. Уточните конкретный адрес — оценим стоимость транспортировки и дадим чёткое предложение.",
    },
  ],
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

  long_et: `Kaevude puhastus on oluline rutiinne hooldusmeede, mis tagab nii joogivee puhtuse kui ka kanalisatsioonisüsteemi toimivuse. Puhastamata kaev kogub aasta-aastalt setteid, orgaanilist ainet ja biofilmi, mis halvab kaev toimivuse ja võib muuta vee terviseriskiks. Regulaarne puhastus pikendab kaev eluiga ja hoiab veekvaliteedi ohutu.

Joogiveekaevude puhastus on hügieeniline vajadus eelkõige vanematele kivikaevidele ja betoonrõngastega kaevudele, kus seintele koguneb aasta jooksul limakiht, vetikad ja põhjale settib liiv ning orgaaniline materjal. Torupro joogiveekaev puhastuse protsess: esmalt pumbame kaev tühjaks (välja arvatud see vesi, mis seinte pestimiseks uuesti kasutatakse); seejärel kaabitame kaev seinte mehhaaniliselt, eemaldades biofilmi ja mineraalsademed; imeme põhja vakuumiga välja sette, liiva ja orgaanilised jäätmed; peseme seinad surveveega; desinfitseerime kaev nõuetekohase kloori lahusega, mille kontsentratsioon vastab terviseametliku soovitusele; jätame desinfektsioonivahendi seisma mõneks tunniks ja seejärel loputame; soovi korral võtame veekvaliteedi proovi, mida saab lasta laboris analüüsida.

Kanalisatsioonikaevude (vaatluskaevud, kogumiskaevud, vihmaveekaevud) puhastus on hoopis teist laadi töö: eesmärk on eemaldada settekiht, mis on kogunenud kaev põhja ja takistab vee äravoolu ning toimib ristumisel bakterite kasvulavana. Puhastuse protsess: vakuumautoga imeme põhjast välja kogu sette ja tahke materjali; kaev seinad pestakse surveveega; kontrollime ülelaske ja sissetuleva toru seisundit.

Puhastus on eriti vajalik: enne talve, et kaev põhjas ei oleks setteid, mis külmumise ja sulamise käigus kaev seinu kahjustaks; pärast põuaperioodi, mil kaevuveetase langes ja setted tõusid segamini; kui vesi on muutunud häguseks, lõhnab halvasti või vesivärv on muutunud; ning enne uude hoonetesse kolimisel, kui kaev on aastaid seisnud kasutamata.

Teenindame eramuid, talumajapidamisi, korteriühistuid, ärikinnisvara ja ka riiklikke objekte. Harjumaa ja Tallinn on meie põhipiirkond; kaevu puhastuse saab tavaliselt kokku leppida 1–3 tööpäeva jooksul. Kõigile töödele anname garantii ja soovi korral kirjaliku aruande.`,

  long_en: `Well cleaning is an important routine maintenance measure that ensures both the purity of drinking water and the functioning of drainage systems. An uncleaned well accumulates sediment, organic matter, and biofilm year after year, impairing its operation and potentially turning the water into a health risk. Regular cleaning extends the well's service life and keeps water quality safe.

Drinking water well cleaning is a hygiene necessity especially for older stone and concrete ring wells, where slime layers, algae, and sand and organic material settled at the bottom accumulate during the year. The Torupro drinking water well cleaning process: first we pump the well empty (except for the water reused for wall washing); we mechanically scrape the well walls, removing biofilm and mineral deposits; we vacuum out sediment, sand, and organic waste from the bottom; we wash the walls with pressurised water; we disinfect the well with a chlorine solution at a concentration meeting the health authority recommendation; we leave the disinfectant to stand for a few hours then rinse; on request we take a water quality sample for laboratory analysis.

Sewer manhole cleaning (inspection manholes, collection manholes, stormwater manholes) is a different type of work: the goal is to remove the sediment layer that has accumulated at the manhole base, obstructing water drainage and serving as a bacterial growth medium at junctions. The cleaning process: we vacuum out all sediment and solid material from the base with a vacuum tanker; the manhole walls are washed with pressurised water; we check the overflow and the condition of the incoming pipe.

Cleaning is especially important: before winter, so that sediment at the well base does not damage the well walls during the freeze-thaw cycle; after a drought period when the water table dropped and sediment was disturbed; when the water has become cloudy, smells bad, or has changed colour; and before moving into a property where the well has stood unused for years.

We serve private houses, farms, housing associations, commercial properties and public facilities. Harjumaa and Tallinn are our primary service area; well cleaning can typically be arranged within 1–3 working days. All work comes with a guarantee and a written report is available on request.`,

  long_ru: `Чистка колодцев — важная плановая мера по обслуживанию, обеспечивающая как чистоту питьевой воды, так и работоспособность дренажных систем. Неочищенный колодец год за годом накапливает осадок, органические вещества и биоплёнку, что нарушает его работу и может превратить воду в угрозу для здоровья. Регулярная чистка продлевает срок службы колодца и поддерживает безопасное качество воды.

Чистка питьевых колодцев является гигиенической необходимостью прежде всего для старых каменных колодцев и колодцев из бетонных колец, где за год накапливаются слизь, водоросли, а на дне оседает песок и органические вещества. Процесс чистки питьевого колодца Torupro: сначала откачиваем колодец (кроме воды, которая повторно используется для промывки стенок); механически зачищаем стенки колодца, удаляя биоплёнку и минеральные отложения; вакуумом извлекаем со дна осадок, песок и органические отходы; промываем стенки водой под давлением; дезинфицируем колодец раствором хлора в концентрации, соответствующей рекомендации органа здравоохранения; оставляем дезинфектант на несколько часов, затем промываем; по желанию берём пробу воды для лабораторного анализа.

Чистка канализационных колодцев (смотровых, накопительных, дождевых) — это работа иного рода: цель — удалить слой осадка, скопившегося на дне колодца и препятствующего водоотводу, а также служащего питательной средой для бактерий в местах пересечений трубопроводов. Процесс чистки: вакуумной машиной откачиваем весь осадок и твёрдый материал со дна; стенки колодца промываются водой под давлением; проверяем перелив и состояние входящей трубы.

Чистка особенно необходима: перед зимой, чтобы осадок на дне колодца не повредил стенки в процессе замерзания-оттаивания; после засушливого периода, когда уровень воды опустился и осадок поднялся; когда вода помутнела, неприятно пахнет или изменила цвет; а также перед заселением в дом, где колодец годами стоял без использования.

Обслуживаем частные дома, фермерские хозяйства, товарищества собственников, коммерческую недвижимость и государственные объекты. Уезд Харью и Таллин — наш основной регион обслуживания; чистку колодца обычно можно согласовать в течение 1–3 рабочих дней. На все работы предоставляем гарантию; письменный отчёт — по запросу.`,

  h1_et: "Kaevude Puhastus Tallinnas — Joogivesi ja Kanalisatsioonikaevud",
  h1_en: "Well Cleaning in Tallinn — Drinking Water Wells and Sewer Manholes",
  h1_ru: "Чистка колодцев в Таллине — питьевые колодцы и канализационные колодцы",

  h2_et: "Sete välja, seinad puhtaks, vesi tervislik — professionaalne kaevu puhastus",
  h2_en: "Sediment out, walls clean, water healthy — professional well cleaning",
  h2_ru: "Осадок — долой, стенки — чистыми, вода — здоровой: профессиональная чистка колодца",

  metaTitle_et: "Kaevude Puhastus Tallinn | Joogivesi ja Kaev — Torupro",
  metaTitle_en: "Well Cleaning Tallinn | Water Wells & Manholes — Torupro",
  metaTitle_ru: "Чистка колодцев Таллин | Питьевые колодцы — Torupro",

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
  faq: [
    {
      question_et: "Kui sageli peaks joogiveekaev puhastama?",
      answer_et: "Soovitame puhastada vähemalt korra 3–5 aasta jooksul, kuid kui vesi muutub häguseks, lõhnab halvasti või on muutunud maitse, tuleks puhastus teostada viivitamatult. Vanades kivikaevidel on soovitatav igal aastal kontrollida.",
      question_en: "How often should a drinking water well be cleaned?",
      answer_en: "We recommend cleaning at least once every 3–5 years, but if the water becomes cloudy, smells bad, or changes taste, cleaning should be done immediately. For old stone wells annual inspection is advisable.",
      question_ru: "Как часто нужно чистить питьевой колодец?",
      answer_ru: "Рекомендуем чистку не реже одного раза в 3–5 лет, однако если вода помутнела, неприятно пахнет или изменился вкус — чистку следует провести незамедлительно. Для старых каменных колодцев желателен ежегодный осмотр.",
    },
    {
      question_et: "Kas pärast kaevu puhastust saab veeproovi võtta?",
      answer_et: "Jah — soovi korral võtame pärast puhastust ja desinfitseerimist ning loputust veeproovi, mille saate saata akrediteeritud laborisse analüüsimiseks. See on eriti soovitatav, kui kaev on pikalt seisnud kasutamata või kahtlustate saastumist.",
      question_en: "Can a water sample be taken after well cleaning?",
      answer_en: "Yes — on request we take a water sample after cleaning, disinfection, and rinsing, which you can send to an accredited laboratory for analysis. This is especially recommended if the well has stood unused for a long time or you suspect contamination.",
      question_ru: "Можно ли взять пробу воды после чистки колодца?",
      answer_ru: "Да — по желанию после чистки, дезинфекции и промывки берём пробу воды, которую вы можете отправить в аккредитованную лабораторию для анализа. Это особенно рекомендуется, если колодец долго стоял без использования или вы подозреваете загрязнение.",
    },
    {
      question_et: "Kas kaevude puhastus sisaldab ka desinfitseerimist?",
      answer_et: "Jah — joogiveekaevude puhastuse puhul on desinfitseerimine kloorilahusgega standardse protseduuri osa. Kanalisatsioonikaevude puhul desinfitseerimist üldjuhul ei tehta, kuid kaev pestakse surveveega põhjalikult.",
      question_en: "Does well cleaning include disinfection?",
      answer_en: "Yes — for drinking water well cleaning, disinfection with a chlorine solution is part of the standard procedure. For sewer manholes disinfection is generally not carried out, but the manhole is thoroughly washed with pressurised water.",
      question_ru: "Включает ли чистка колодца дезинфекцию?",
      answer_ru: "Да — при чистке питьевых колодцев дезинфекция раствором хлора является частью стандартной процедуры. Для канализационных колодцев дезинфекция, как правило, не проводится, однако колодец тщательно промывается водой под давлением.",
    },
  ],
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

  long_et: `Septik on elamus, mis ei ole ühendatud kanalisatsioonivõrguga, kõige olulisem reovee käitlusseade. Korralikult toimiv septik tagab, et reovesi eeltöödeldakse enne maapinnasse imendumist — rikki läinud või üle täis septik reostab põhjavett, naaberkinnistuid ja lõpuks ka veekogumisvaldkondi. Regulaarne hooldus on nii seaduslik kohustus kui ka praktiline investeering.

Eestis kohustab keskkonnaseadus septiku omanikku tühjendama septiku vähemalt korra aastas. Torupro teostab septiku hooldust täiskomplektse teenusena: vakuumautoga tühjendamine (imeme välja kõik kambrite sisu, sh raskemate settekihtidega); settekihi paksuse mõõtmine (nn muda test) — see näitab, kas septik on töötanud eeldatust kiiremini täitumas ning kas tühjendussagedust tuleb suurendada; biopuhastite puhul filtrimaterjalide (kandjate) kontrollimine — uurime, kas biofilm on terve ja aktiivne; filtriväljade ja imbsüsteemide visuaalne ülevaatus — kontrollime, et ei ilmne pinnale vett tõusmist ega lõhna, mis viitaks umbe jäämisele; kirjaliku üleandmisakt koos veetud mahuga, kuupäeva, omaniku andmete ja meie allkirjaga.

Septiku tühjendamise ajastamine on kriitilise tähtsusega. Liiga harva tühjendamine tähendab, et sete hakkab ülevooluavast läbi minema ja jõuab filtriväljale — filtrivälja taastamine on mitu korda kallim kui regulaarne tühjendamine. Mõõdame igal hoolduskäigul settekihi paksuse, mis annab meile selge signaali, millal järgmine tühjendus vajalik on.

Biopuhastite (aktivsettepuhastid, aeroobsed puhastid) puhul on hooldus mõnevõrra keerulisem: lisaks tühjendamisele tuleb kontrollida aeraatorite, õhupumpade ja UV-seadmete tööseisundit, samuti hinnata biokandja kattumust aktiivsete bakterite biofilmiga. Torupro oskab tegutseda ka biopuhastusseadmetega — küsige täpsemat pakkumist oma süsteemi kohta.

Teenindame eramuid, talusid, suvilakooperatiive ning ka väikeettevõtteid ja matkabaase, kus kanalisatsioonivõrku pole. Harjumaa ja Tallinn on põhipiirkond, kuid sõidame ka kaugemale. Korraliku hoolduse seos väiksema kuluga on lihtne: üks regulaarne tühjendus maksab vähem kui üks filtrivälja remont.`,

  long_en: `A septic tank is the most important wastewater treatment device in a home not connected to the sewer network. A properly functioning septic tank ensures that wastewater is pre-treated before seeping into the ground — a failed or overfull tank contaminates groundwater, neighbouring properties and ultimately water catchment areas. Regular maintenance is both a legal obligation and a practical investment.

In Estonia environmental law requires septic tank owners to empty their tank at least once a year. Torupro carries out septic tank maintenance as a full-service package: emptying by vacuum tanker (we extract all chamber contents including heavier sludge layers); measuring the sludge layer thickness (the "sludge test") — this shows whether the tank is filling faster than expected and whether emptying frequency needs to increase; for bio-septics, checking filter media (carriers) — we assess whether the biofilm is healthy and active; visual inspection of filter fields and infiltration systems — checking for surface water rising or odour indicating blockage; issuing a written handover act with volume transported, date, owner details and our signature.

Timing of septic tank emptying is critically important. Infrequent emptying means sludge starts passing through the overflow into the filter field — restoring a filter field costs many times more than regular emptying. We measure the sludge layer depth at every maintenance visit, giving us a clear signal of when the next emptying is needed.

For bio-septics (activated sludge units, aerobic treatment units), maintenance is somewhat more complex: in addition to emptying, we check the operating condition of aerators, air pumps and UV units, and assess the biocarrier coverage with active bacterial biofilm. Torupro can handle bio-treatment units — ask for a more specific quote for your system.

We serve private houses, farms, summer cottage cooperatives and small businesses and outdoor activity centres without a sewer network connection. Harjumaa and Tallinn are our primary service area, but we travel further on request. The link between proper maintenance and lower costs is simple: one regular emptying costs less than one filter field repair.`,

  long_ru: `Септик — важнейшее устройство очистки сточных вод в доме, не подключённом к канализационной сети. Исправно работающий септик обеспечивает предварительную очистку сточных вод до их впитывания в грунт — неисправный или переполненный септик загрязняет грунтовые воды, соседние участки и в конечном счёте водозаборные зоны. Регулярное обслуживание является и законодательной обязанностью, и практической инвестицией.

По экологическому законодательству Эстонии владелец септика обязан откачивать его не реже одного раза в год. Torupro выполняет обслуживание септика в формате полного сервиса: откачка ассенизаторской машиной (извлекаем всё содержимое камер, включая более тяжёлые слои осадка); измерение толщины слоя осадка (так называемый «тест ила») — показывает, заполняется ли септик быстрее ожидаемого и нужно ли увеличить частоту откачки; у биосептиков — проверка фильтрующего материала (носителей): оцениваем, здорова ли биоплёнка и активна ли она; визуальный осмотр фильтрационных полей и инфильтрационных систем: проверяем, нет ли подъёма воды на поверхность или запаха, указывающего на закупорку; выдача письменного акта приёма-передачи с указанием вывезенного объёма, даты, данных владельца и нашей подписью.

Правильное планирование откачки септика имеет критическое значение. Слишком редкая откачка означает, что осадок начинает проходить через перелив на фильтрационное поле — восстановление фильтрационного поля обходится во много раз дороже, чем регулярная откачка. При каждом техническом обслуживании мы измеряем толщину слоя осадка, что даёт нам чёткий сигнал о сроке следующей откачки.

У биосептиков (установки с активным илом, аэробные очистные установки) обслуживание несколько сложнее: помимо откачки необходимо проверять рабочее состояние аэраторов, воздушных насосов и УФ-установок, а также оценивать покрытие биологических носителей активной бактериальной биоплёнкой. Torupro умеет работать и с биоочистными установками — запросите более конкретное предложение для вашей системы.

Обслуживаем частные дома, фермы, садоводческие кооперативы, небольшие предприятия и базы отдыха, не имеющие подключения к канализационной сети. Уезд Харью и Таллин — основной регион обслуживания, но выезжаем и дальше по запросу. Связь между надлежащим обслуживанием и меньшими расходами проста: одна регулярная откачка стоит меньше, чем один ремонт фильтрационного поля.`,

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
  faq: [
    {
      question_et: "Kui sageli peab septiku tühjendama?",
      answer_et: "Eesti keskkonnaseadus nõuab tühjendust vähemalt korra aastas. Praktikas sõltub sagedus septiku mahust ja majapidamise suurusest — väiksemad septikud suurte perede puhul vajavad 2–3 korda aastas tühjendamist. Mõõdame iga hoolduskäigul settekihi paksuse, mis näitab täpselt, millal järgmine käik vajalik on.",
      question_en: "How often does a septic tank need to be emptied?",
      answer_en: "Estonian environmental law requires emptying at least once a year. In practice frequency depends on the tank volume and household size — smaller tanks for large families may need emptying 2–3 times per year. We measure sludge layer depth at every maintenance visit, showing exactly when the next visit is needed.",
      question_ru: "Как часто нужно откачивать септик?",
      answer_ru: "Экологическое законодательство Эстонии требует откачки не реже одного раза в год. На практике частота зависит от объёма септика и размера домохозяйства — небольшие септики для многочисленных семей может потребоваться откачивать 2–3 раза в год. При каждом техническом обслуживании измеряем толщину слоя осадка, что точно показывает срок следующего визита.",
    },
    {
      question_et: "Mis dokument tõendab septiku nõuetekohast tühjendamist?",
      answer_et: "Üleandmise-vastuvõtmise akt, mille Torupro väljastab igast tühjendusest. See sisaldab veetud mahtu, kuupäeva, mõlema osapoole andmeid ja allkirju. Akt on vajalik kohaliku omavalitsuse või keskkonnainspektsiooni nõuete täitmise tõendamiseks.",
      question_en: "What document proves compliant septic tank emptying?",
      answer_en: "The handover act that Torupro issues for each emptying. It contains the volume transported, date, both parties' details and signatures. The act is required as proof of compliance with local government or environmental inspectorate requirements.",
      question_ru: "Какой документ подтверждает нормативную откачку септика?",
      answer_ru: "Акт приёма-передачи, который Torupro выдаёт при каждой откачке. Он содержит вывезенный объём, дату, реквизиты обеих сторон и подписи. Акт необходим в качестве подтверждения соответствия требованиям органа местного самоуправления или экологической инспекции.",
    },
    {
      question_et: "Mida tähendab filtrivälja rike ja kuidas seda vältida?",
      answer_et: "Filtrivälja rike tähendab, et septiku ülevooluga satub töötlemata reovesi pinnasesse, kus see ei filtreeru korralikult, vaid tõuseb pinnale. See tekib siis, kui septiku tühjendamine on liiga harv ja sete jõuab filtriväljale. Regulaarne tühjendamine ja settekihi jälgimine hoiab filtrivälja korras — filtrivälja remont maksab mitu korda rohkem kui regulaarne hooldus.",
      question_en: "What is filter field failure and how can it be prevented?",
      answer_en: "Filter field failure means that untreated wastewater enters the soil through the septic overflow without proper filtration and rises to the surface. It occurs when emptying is too infrequent and sludge reaches the filter field. Regular emptying and monitoring the sludge layer keeps the filter field functioning — filter field repair costs many times more than regular maintenance.",
      question_ru: "Что такое выход из строя фильтрационного поля и как его предотвратить?",
      answer_ru: "Выход из строя фильтрационного поля означает, что через перелив септика в грунт поступают неочищенные сточные воды, которые не фильтруются должным образом и поднимаются на поверхность. Это происходит при слишком редкой откачке, когда осадок попадает на фильтрационное поле. Регулярная откачка и мониторинг слоя осадка поддерживают работоспособность фильтрационного поля — его восстановление обходится во много раз дороже, чем регулярное обслуживание.",
    },
  ],
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
