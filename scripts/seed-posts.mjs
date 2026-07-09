// Run: SANITY_WRITE_TOKEN=<token> node scripts/seed-posts.mjs
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

const posts = [

// ═══════════════════════════════════════════════════════════════════════
// POST 1 — Kanalisatsiooni ummistus lahendused
// ═══════════════════════════════════════════════════════════════════════
{
  _type: "post",
  _id: "post-kanalisatsiooni-ummistus-lahendused",
  slug: "kanalisatsiooni-ummistus-lahendused",
  publishedAt: "2025-03-15T09:00:00Z",
  coverImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1400&auto=format&fit=crop",
  readingTime: 7,

  category_et: "Nõuanded",
  category_en: "Tips",
  category_ru: "Советы",

  title_et: "Kanalisatsiooni ummistus: põhjused, lahendused ja millal kutsuda torumees",
  title_en: "Drain blockage: causes, solutions and when to call a plumber",
  title_ru: "Засор канализации: причины, решения и когда звонить сантехнику",

  excerpt_et: "Kanalisatsiooni ummistus on üks levinumaid torutöödega seotud probleeme Tallinna kortermajades. Selles artiklis selgitame, miks ummistused tekivad, milliseid vahendeid saab kodus proovida ja millal on aeg kutsuda professionaalne torumees.",
  excerpt_en: "Drain blockage is one of the most common plumbing problems in Tallinn apartment buildings. In this article we explain why blockages occur, what home remedies to try, and when it's time to call a professional plumber.",
  excerpt_ru: "Засор канализации — одна из самых распространённых сантехнических проблем в таллинских многоквартирных домах. В этой статье объясняем, почему возникают засоры, какие домашние средства можно попробовать и когда пора звонить профессиональному сантехнику.",

  metaTitle_et: "Kanalisatsiooni ummistus Tallinnas — põhjused ja lahendused | Torupro",
  metaTitle_en: "Drain blockage in Tallinn — causes and solutions | Torupro",
  metaTitle_ru: "Засор канализации в Таллинне — причины и решения | Torupro",

  metaDesc_et: "Kuidas lahendada kanalisatsiooni ummistus kodus? Praktilised nõuanded ja selgitus, millal kutsuda professionaalne torumees Tallinnast. Torupro — kiirem torutöö.",
  metaDesc_en: "How to fix a drain blockage at home? Practical tips and guidance on when to call a professional plumber in Tallinn. Torupro — faster plumbing.",
  metaDesc_ru: "Как устранить засор канализации дома? Практические советы и объяснение, когда вызвать профессионального сантехника в Таллинне. Torupro — быстрая сантехника.",

  keywords_et: ["kanalisatsiooni ummistus", "ummistuse likvideerimine tallinn", "toruummistus kodus", "ummistunud kanalisatsioon tallinn", "kanalisatsioon ummistunud", "torumees tallinn ummistus", "ummistuse puhastus tallinn"],
  keywords_en: ["drain blockage tallinn", "drain unblocking tallinn", "blocked drain plumber tallinn", "pipe blockage", "drain cleaning tallinn"],
  keywords_ru: ["засор канализации таллинн", "прочистка канализации таллинн", "устранение засора таллинн", "вызвать сантехника таллинн засор"],

  body_et: `Kanalisatsiooni ummistus on probleem, millega puutub kokku peaaegu iga Tallinna korteri- või majaomanik — statistika järgi on see kõige sagedasem torutöödega seotud avariikõne põhjus. Ometi tekib sageli küsimus: kas peaks proovima ise lahendada või kohe torumehele helistama? Vastus sõltub ummistuse iseloomust, asukohast ja kestusest.

## Miks kanalisatsioon ummistub?

Enamik ummistusi ei teki üleöö — need kuhjuvad aeglaselt, nädalate ja kuude jooksul. Tallinna vanemates kortermajades, kus torustik on ehitatud 1960.–1980. aastatel, on malmist ja galvaanilised torud juba aastakümneid kasutuses ning nende sisepind on muutunud karedaks ja roosteliseks, mistõttu rasv, seep ja muud jäätmed kleepuvad palju kergemini.

### Levinumad ummistuse põhjused köögis

- **Rasv ja toidujäätmed** — rasvane vesi jahtub toru seinas ja ladestub kihiti. Iga pesunõud paneb uue kihi.
- **Toidujäägid** — pasta, riis ja leib paisuvad vees ja moodustavad korgid.
- **Nõudepesuvahendi kuhjumine** — suur kogus seebijääki segab läbivooluga.

### Levinumad ummistuse põhjused vannitoas ja WC-s

- **Juuksed ja seep** — vanni ja dušši äravoolu kõige sagedasem põhjus Tallinnas.
- **WC-paber ja niisked salvrätikud** — märgid salvrätikud ei lagune vees ning tekitavad korgi.
- **Mänguasjad ja väikesed esemed** — eriti lastega peredes.
- **Lubjakivi kuhjumine** — Tallinna vesi on suhteliselt kõva, mis soodustab lubjakivi teket torudes.

> Kui kanalisatsioon lõhnab halvasti, aga vee äravool on normaalne, on tõenäoliselt probleemiks sifoon — see vajab puhastamist, mitte torumehe väljakutset.

## Mida saab ise teha?

Enne torumehe kutsumist tasub proovida mõnda lihtsat võtet — eriti, kui tegemist on ühe kraanikaussi või dušši ummistusega.

### 1. Äravoolusõel ja puhastamine käsitsi

Lihtsaim ja tõhusaim algsamm. Eemalda äravoolult kate, võta välja nähtavad juuksed ja mustus. Pese sõel kuuma veega.

### 2. Kuum vesi rasvale

Keeda veekeetjas vesi ja vala aeglaselt kraanikausi äravoolu. Kuum vesi lahustab rasvakorki tõhusalt — korda 2–3 korda. **NB!** Plastikust PVC-torude puhul ära kasuta keeva veega — kasuta 60–70 °C vett, et toru ei deformeeruks.

### 3. Söögisoodat ja äädikat

Vala äravoolu 3 supilusikatäit soodat, seejärel pool klaasi valget äädikat. Lase 30 minutit toimida, seejärel loputa kuuma veega. Sobib regulaarseks ennetavaks puhastuseks.

### 4. Käsipump (plunger)

Vala kraanikausi põhja 5–10 cm vett, aseta plunger tihedalt äravoolu kohale ja pumpa 15–20 korda kiiresti. Tõhusaim meetod lühikeste, kergete ummistuste korral.

### 5. Ummistuse eemaldamise spiraal (käsispiraal)

Kui plunger ei aita, saab kasutada 1,5–3 m pikkust käsispiraali. Keera spiraal aeglaselt äravoolu, kuni tunned takistust, ja pöörlevate liigutustega lõhu kork.

## Millal peab kutsuma professionaalse torumehe?

On olukordi, kus ise katsetamine teeb rohkem kahju kui kasu. Kutsu torumees viivitamatult, kui:

- **Mitu äravoolu on korraga ummistunud** — see viitab põhitorustiku ummistusele.
- **WC ei kuiva pärast vooluga laskmist** — põhiline äravoolukork.
- **Äravoolust kostab õhumulle** — märk suuremast kanalisatsiooniprobleemist.
- **Probleem kordub iga paari nädala tagant** — kork on torustiku sügavamal osal.
- **Torust tuleb ebameeldiv lõhn hoolimata puhastusest** — võib viidata pragunenud torule või puudulikule ventileerimisele.
- **Panelmaja torustikus on ummistus korruste vahel** — seda ei saa ise lahendada.

> Torupro saab Tallinnasse 1–2 tunniga. Kanalisatsiooni survepesu ja elektrilise spiraaliga lahendame enamiku ummistusi ühe visiidiga.

## Mis toimub professionaalsel puhastamisel?

Torupro torumees saabub vajaliku varustusega. Esmalt hindame probleemi: kas tegemist on kohalike ummistusega (kraanikausi sifoon, äravoolutorud esimesel 3–5 meetril) või sügavama kanalisatsioonisüsteemi korgiga.

### 1. Elektriline ummistuse puhastamise spiraal

Professionaalne elektrispiraal jõuab 15–30 meetri sügavusele ja murdab läbi peaaegu kõik mehaanilised ummistused — juuksed, rasv, toidujäägid, juuretükid.

### 2. Survepesu (hüdropuhastus)

Kõrgsurve veejuga (kuni 200 bar) puhastab torustiku seestpoolt täielikult — eemaldab nii ummistuse kui ka torustiku seintele ladestunud katlakivi ja rasvakordi. Soovitatav iga 2–3 aasta tagant korduva ummistusprobleemi korral.

### 3. Kaameraülevaatus

Kui ummistus on korduvad või põhjus ebaselge, teeme kamerauuringu: väike kaamera liigub torus ja näitab olukorda reaalajas. Nii näeme, kas toru on pragunend, läbi vajunud, juured on tunginud sisse või on tegemist mõne muu struktuurilise probleemiga.

## Ennetamine on odavam kui ummistuse likvideerimine

Lihtsad harjumused aitavad ummistusi vältida aastaid:

- **Ära vala rasva kraanikausi äravoolu.** Kogu rasv purki ja viska prügikasti.
- **Kasuta äravoolusõelu** kõigil kraanikaussidel, vannil ja dušil.
- **Pese äravoole kord kuus** kuuma vee ja soodaga.
- **Kasuta ainult WC-paberit WC-s** — märgid salvrätikud, tampoonid ja mähkmed tekitavad korgid.

Torupro pakub regulaarse hoolduslepinguga korteriühistutele ja ettevõtetele soodsamat hinda. Võtke meiega ühendust ja küsige hooldusplaani kohta.`,

  body_en: `Drain blockage is one of the most common plumbing emergencies in Tallinn — statistically the number-one reason for emergency plumbing call-outs. Yet the question often arises: should you try to fix it yourself, or call a plumber straight away? The answer depends on the nature, location and duration of the blockage.

## Why do drains block?

Most blockages don't happen overnight — they build up slowly over weeks and months. In Tallinn's older apartment buildings, constructed in the 1960s–1980s, cast-iron and galvanised pipes have been in service for decades. Their inner surfaces have become rough and corroded, which means grease, soap and other waste stick far more easily.

### Most common kitchen blockage causes

- **Grease and food waste** — greasy water cools in the pipe wall and deposits in layers with every washing-up session.
- **Food scraps** — pasta, rice and bread swell in water and form plugs.
- **Accumulated dishwashing liquid** — large amounts of soap residue impede flow.

### Most common bathroom and toilet blockage causes

- **Hair and soap** — the most frequent cause of bath and shower drain blockages in Tallinn.
- **Wet wipes and toilet paper** — wet wipes do not dissolve in water and create plugs.
- **Toys and small objects** — especially in households with children.
- **Limescale build-up** — Tallinn water is relatively hard, which promotes scale deposits inside pipes.

> If the drain smells bad but water flow is normal, the siphon is likely the issue — it needs cleaning, not a plumber call-out.

## What you can try yourself

Before calling a plumber, try a few simple approaches — especially if the problem is with a single sink or shower.

### 1. Drain strainer and manual cleaning

The simplest and most effective first step. Remove the drain cover, pull out any visible hair and debris, and rinse the strainer with hot water.

### 2. Hot water for grease

Boil a kettle and pour slowly down the drain. Hot water dissolves grease plugs effectively — repeat 2–3 times. **Note:** For plastic PVC pipes, do not use boiling water — use 60–70 °C water to avoid deforming the pipe.

### 3. Baking soda and vinegar

Pour 3 tablespoons of baking soda down the drain, then half a glass of white vinegar. Leave for 30 minutes, then flush with hot water. Works well as a regular preventive cleaning routine.

### 4. Plunger

Add 5–10 cm of water to the basin, place the plunger tightly over the drain and pump 15–20 times rapidly. Most effective for short, light blockages near the drain opening.

### 5. Hand drain snake

If the plunger doesn't help, use a 1.5–3 m hand snake. Feed it slowly into the drain until you feel resistance, then use rotating movements to break the plug.

## When must you call a professional plumber?

There are situations where attempting DIY causes more harm than good. Call a plumber immediately if:

- **Multiple drains are blocked at once** — this indicates a main stack blockage.
- **The toilet does not empty after flushing** — a main drain plug.
- **Air bubbles come from the drain** — a sign of a more serious drainage problem.
- **The problem recurs every few weeks** — the plug is deeper in the system.
- **Unpleasant smell persists despite cleaning** — may indicate a cracked pipe or poor ventilation.
- **The blockage is in a panel-block building between floors** — cannot be solved without professional equipment.

> Torupro reaches Tallinn locations in 1–2 hours. With pressure washing and an electric snake we resolve most blockages in a single visit.

## What happens during professional drain cleaning?

A Torupro plumber arrives with all the necessary equipment. We first assess the problem: is it a local blockage (sink siphon, drain pipes in the first 3–5 metres) or a deeper drainage system plug?

### 1. Electric drain snake

A professional electric snake reaches 15–30 metres deep and breaks through almost all mechanical blockages — hair, grease, food scraps, root fragments.

### 2. Pressure washing (hydro-jetting)

High-pressure water jet (up to 200 bar) cleans the inside of the pipe completely — removing both the blockage and any scale or grease deposited on pipe walls. Recommended every 2–3 years for recurring blockage problems.

### 3. CCTV pipe inspection

If blockages recur or the cause is unclear, we perform a CCTV survey: a small camera travels through the pipe and shows the condition in real time. This reveals cracks, subsidence, root intrusion, or other structural problems.

## Prevention is cheaper than cure

Simple habits help prevent blockages for years:

- **Never pour grease down the sink.** Collect it in a jar and throw it in the bin.
- **Use drain strainers** on all sinks, baths and showers.
- **Flush drains monthly** with hot water and baking soda.
- **Use only toilet paper in the toilet** — wet wipes, tampons and nappies create plugs.

Torupro offers preferential rates for apartment associations and businesses with a regular maintenance contract. Get in touch to ask about our maintenance plans.`,

  body_ru: `Засор канализации — одна из самых распространённых сантехнических аварий в Таллинне: статистически это главная причина экстренных вызовов сантехников. Тем не менее часто возникает вопрос: попробовать устранить самостоятельно или сразу звонить специалисту? Ответ зависит от характера, местоположения и продолжительности засора.

## Почему засоряется канализация?

Большинство засоров не возникают за одну ночь — они накапливаются постепенно, за недели и месяцы. В старых многоквартирных домах Таллинна, построенных в 1960–1980-е годы, чугунные и оцинкованные трубы эксплуатируются уже десятилетиями. Их внутренняя поверхность стала шероховатой и ржавой, из-за чего жир, мыло и другие отходы прилипают гораздо легче.

### Наиболее частые причины засора на кухне

- **Жир и пищевые отходы** — жирная вода охлаждается в стенке трубы и откладывается слоями при каждом мытье посуды.
- **Остатки пищи** — паста, рис и хлеб набухают в воде и образуют пробки.
- **Накопление средства для мытья посуды** — большое количество мыльного осадка препятствует нормальному сливу.

### Наиболее частые причины засора в ванной и туалете

- **Волосы и мыло** — самая частая причина засора ванны и душевого слива в Таллинне.
- **Влажные салфетки и туалетная бумага** — влажные салфетки не растворяются в воде и образуют пробки.
- **Игрушки и мелкие предметы** — особенно в семьях с детьми.
- **Накипь** — вода в Таллинне относительно жёсткая, что способствует образованию накипи внутри труб.

> Если канализация неприятно пахнет, но вода уходит нормально, проблема, скорее всего, в сифоне — его нужно почистить, а не вызывать сантехника.

## Что можно попробовать самостоятельно?

Прежде чем вызывать сантехника, стоит попробовать несколько простых способов — особенно если проблема в одной раковине или душе.

### 1. Сеточный фильтр и ручная чистка

Самый простой и эффективный первый шаг. Снимите крышку слива, вытащите видимые волосы и загрязнения, промойте фильтр горячей водой.

### 2. Горячая вода от жира

Вскипятите чайник и медленно вылейте воду в слив. Горячая вода эффективно растворяет жировые пробки — повторите 2–3 раза. **Внимание!** Для пластиковых PVC-труб не используйте кипяток — используйте воду 60–70 °C, чтобы не деформировать трубу.

### 3. Пищевая сода и уксус

Засыпьте в слив 3 столовые ложки соды, затем налейте полстакана белого уксуса. Оставьте на 30 минут, затем смойте горячей водой. Хорошо работает как регулярная профилактическая чистка.

### 4. Вантуз

Налейте в раковину 5–10 см воды, плотно поставьте вантуз над сливом и делайте быстрые качки 15–20 раз. Наиболее эффективен для коротких, лёгких засоров вблизи отверстия слива.

### 5. Ручной трос

Если вантуз не помогает, используйте трос длиной 1,5–3 м. Медленно вводите его в слив до ощущения сопротивления, затем вращательными движениями разрушьте пробку.

## Когда необходимо вызвать профессионального сантехника?

Есть ситуации, когда самостоятельные попытки причиняют больше вреда, чем пользы. Вызывайте сантехника немедленно, если:

- **Несколько сливов засорены одновременно** — это указывает на засор в общем стояке.
- **Унитаз не опустошается после смыва** — пробка в главном сливе.
- **Из слива выходят пузыри воздуха** — признак более серьёзной проблемы с канализацией.
- **Проблема повторяется каждые несколько недель** — пробка находится глубже в системе.
- **Неприятный запах не исчезает после чистки** — возможно, трещина в трубе или плохая вентиляция.
- **Засор в панельном доме между этажами** — без профессионального оборудования не решить.

> Torupro приезжает в Таллинн за 1–2 часа. С помощью гидропромывки и электрического троса мы устраняем большинство засоров за один визит.

## Что происходит при профессиональной прочистке?

Сантехник Torupro приезжает со всем необходимым оборудованием. Сначала оцениваем проблему: это местный засор (сифон раковины, сливные трубы на первых 3–5 метрах) или пробка глубже в дренажной системе?

### 1. Электрический трос

Профессиональный электрический трос достигает глубины 15–30 метров и пробивает практически все механические засоры — волосы, жир, пищевые отходы, корни деревьев.

### 2. Гидропромывка

Струя воды высокого давления (до 200 бар) полностью очищает трубу изнутри — удаляет как засор, так и отложения накипи и жира на стенках трубы. Рекомендуется каждые 2–3 года при повторяющихся засорах.

### 3. Видеодиагностика

Если засоры повторяются или причина неясна, проводим видеоинспекцию: маленькая камера движется по трубе и показывает состояние в режиме реального времени. Это позволяет выявить трещины, провалы, проникновение корней или другие структурные проблемы.

## Профилактика дешевле устранения засора

Простые привычки помогают предотвращать засоры годами:

- **Никогда не выливайте жир в раковину.** Собирайте его в банку и выбрасывайте в мусор.
- **Используйте сетчатые фильтры** для всех раковин, ванн и душей.
- **Промывайте сливы раз в месяц** горячей водой и содой.
- **Используйте в унитазе только туалетную бумагу** — влажные салфетки, тампоны и подгузники создают пробки.

Torupro предлагает льготные тарифы для товариществ собственников жилья и предприятий с регулярным договором технического обслуживания. Свяжитесь с нами и узнайте о наших планах обслуживания.`,
},

// ═══════════════════════════════════════════════════════════════════════
// POST 2 — Millal vahetada torustik
// ═══════════════════════════════════════════════════════════════════════
{
  _type: "post",
  _id: "post-millal-vahetada-torustik",
  slug: "millal-vahetada-torustik",
  publishedAt: "2025-04-22T10:00:00Z",
  coverImage: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=1400&auto=format&fit=crop",
  readingTime: 9,

  category_et: "Juhend",
  category_en: "Guide",
  category_ru: "Руководство",

  title_et: "Millal on õige aeg torustiku täielikuks vahetuseks? Kogenud torumehe nõuanded",
  title_en: "When is it time for a full pipe replacement? Advice from an experienced plumber",
  title_ru: "Когда пора менять трубы? Советы опытного сантехника",

  excerpt_et: "Vana torustik on paljude Tallinna korterite varjatud oht — rooste, lekked ja halb veekvaliteet on märgid, et torude eluiga on lõppemas. Selles juhendis selgitame, millised on vahetuse selged signaalid, millised materjalid on tänapäeval parimad ja mida tähendab torude vahetus praktikas.",
  excerpt_en: "Old piping is a hidden risk in many Tallinn apartments — rust, leaks and poor water quality are signs that the pipes' service life is ending. This guide explains the clear signals for replacement, which materials are best today, and what pipe replacement means in practice.",
  excerpt_ru: "Старые трубы — скрытая угроза во многих таллинских квартирах: ржавчина, течи и плохое качество воды — признаки того, что срок службы труб подходит к концу. В этом руководстве объясняем чёткие сигналы к замене, какие материалы сегодня лучшие и что представляет собой замена труб на практике.",

  metaTitle_et: "Torude vahetus Tallinnas — millal ja miks vahetada vana torustik | Torupro",
  metaTitle_en: "Pipe replacement in Tallinn — when and why to replace old pipes | Torupro",
  metaTitle_ru: "Замена труб в Таллинне — когда и зачем менять старый трубопровод | Torupro",

  metaDesc_et: "Kuidas teada, et torustik vajab vahetust? Tunnused, materjalid ja hind. Professionaalne torude vahetus Tallinnas — Torupro meeskond lahendab kiiresti ja garantiiga.",
  metaDesc_en: "How to know when pipes need replacing? Signs, materials and cost. Professional pipe replacement in Tallinn — Torupro team solves it fast and with a guarantee.",
  metaDesc_ru: "Как понять, что трубы нужно менять? Признаки, материалы и стоимость. Профессиональная замена труб в Таллинне — команда Torupro решит быстро и с гарантией.",

  keywords_et: ["torude vahetus tallinn", "veetorude vahetus korteris", "vana torustiku vahetus", "PP-R torustik paigaldus tallinn", "galvaaniliste torude vahetus", "torustiku renoveerimine tallinn", "torutööd korteriühistu tallinn"],
  keywords_en: ["pipe replacement tallinn", "water pipe replacement apartment", "old pipe replacement tallinn", "plumbing renovation tallinn", "PP-R pipe installation tallinn"],
  keywords_ru: ["замена труб таллинн", "замена водопровода в квартире таллинн", "замена старых труб таллинн", "монтаж PP-R труб таллинн", "реновация трубопровода таллинн"],

  body_et: `Tallinna korteriomanikud seisavad tihti silmitsi dilemmaga: kas investeerida torustiku täielikku vahetusse või lappida lekked ükshaaval, lootes, et süsteem peab veel mõne aasta? Kogemust omavate torumehena ütleme ausalt: õigel hetkel tehtud torude vahetus säästab pikemas perspektiivis nii raha kui ka muret.

Galvaanilise torumaterjali eluiga on keskmiselt 30–40 aastat. Paljudes Tallinna paneelmajades, kus ehitati 1960.–1980. aastatel, on see aeg ammu täis saanud — need torud töötavad juba laenatud ajal.

## Selged märgid, et torustik vajab vahetust

### 1. Rooste ja pruun vesi

Kui hommikul kraani avades tuleb esimesena pruunikas vesi, on toru seest roostetanud. Aja jooksul muutub rooste intensiivsemaks ja hakkab mõjutama veekvaliteeti ööpäevaringselt. Pärast pikka kasutamata olemist pruun vesi on normaalne, aga kui see esineb iga päev, on aeg tegutseda.

### 2. Madal veesurve ilma nähtava põhjuseta

Kui veesurve on üks korrus madalamal palju parem, kuid teie korteris nõrk, viitab see kas katlakiviummistusele torudes või toru seintesse söövitunud rooste tõttu kitsenevale läbivoolule. Mõlemad on märgid eakast toru materjalidest.

### 3. Korduv tilkumine ja lekked

Üksik lekkiv ühenduskoht on parandatav. Aga kui lekked tekivad üha uutel kohtadel — sügav rooste on juba toru seina söövitanud ja üks parandus tähendab vaid, et järgmine leke tuleb 20 cm edasi.

### 4. Torude välisnähtav rooste ja korrosioon

Avatud torude puhul — keldriruum, tehnoruumid — on rooste ja korrodeerimine selgelt nähtav. Kui toru on väliselt kaetud oranži ja punase rooste kihtidega, on selle seina paksus juba kriitiliselt vähenenud.

### 5. Sagedased torumurrud

Kui viimase 2–3 aasta jooksul on olnud rohkem kui üks torumurd, tasub teha majanduslik analüüs: mitme eraldi paranduse hind ületab sageli torustiku täieliku vahetuse hinna, rääkimata veetkahjudest, mida iga leke põhjustab.

> Toru, millel on olnud üks torumurd, omab kõrgemat riskitaset eelnevaga võrreldes — rooste on juba kritiiline.

## Millised materjalid on parimad torude vahetuseks?

Tänapäeval on vanale galvaanilisele torustikule mitu head alternatiivi. Meie soovitame sõltuvalt olukorrast:

### PP-R (polüpropüleen)

**Parim valik** enamus Tallinna korterelamute torustiku vahetuseks. Eelised:
- Väga pikk eluiga (50+ aastat)
- Ei roostu, ei korrodeeru, ei kasvata baktereid
- Terviklikud keevitusühendused ilma lekke riskita
- Soodne hinna-kvaliteedi suhe

PP-R sobib nii külma kui sooja vee torustikuks ning küttesüsteemidesse. Torupro kasutab sertifitseeritud PP-R tooteid, mis vastavad Eesti standarditele.

### PEX (ristsidestatud polüetüleen)

**Parim valik** korteritele, kus toru peab läbima kitsaid kohti või pöördeid ilma ühenduskohtadeta. PEX on paindlik, mistõttu sobib ideaalselt põrandaküttetorudesse ja keerulisematesse paigalduslahendustesse.

### Vask

**Parim valik** prestiižsetele objektidele ja kus on vajadus ülima vastupidavuse järele. Vasktorud kestavad 70–100 aastat, ei reosta vett ja on antibiootilised. Hind on kõrgem, kuid investeering tasub end aastakümnete jooksul ära.

### Roostevaba teras

Sobib seal, kus on kõrgem veesurve või temperatuur. Kasutatakse peamiselt tootmisruumides ja kommertskinnisvara torustikes.

## Kuidas toimub torude vahetus praktikas?

Paljud inimesed muretsevad, et torude vahetus tähendab nädalatepikkust segatust. Tegelikkuses on tänapäevane torude vahetus hästi organiseeritud protsess.

### 1. Ülevaatuse käik

Torupro torumees käib läbi kogu torustiku, hindab seisukorda ja mõõdab. Saate täpse ja kirjaliku pakkumise enne töö algust — ilma varjatud kuludeta.

### 2. Ettevalmistus

Paigaldatav ala kaetakse kaitsekile ja -mattidega. Vesi lülitatakse välja. Vanad torud eemaldatakse hoolikalt.

### 3. Uute torude paigaldus

PP-R torude puhul keevitame kõik ühendused spetsiaalse polüfusioonkeevitusvahendiga — see loob 100% lekke kindlad ühendused. Tööd tehakse kiiresti ja puhtalt.

### 4. Survekatse ja üleandmine

Pärast paigaldust teeme survekatse: survestame torustiku kõrge rõhuga ja kontrollime 24 tundi kõiki ühenduskohti. Seejärel anname üle töö vastu võtmise akti ja 2 aasta töögarantii.

Keskmise suurusega korteris (3 tuba) kestab veetorude vahetus 1–3 päeva. Kanalisatsioonitorud lisaks veel 1–2 päeva.

## Hind: mida arvestada?

Torude vahetuse hind sõltub mitme tegurist:

- **Materjal** — PP-R on taskukohaseim, vask kõige kallim
- **Toru kogupikkus** — rohkem meetreid, suurem materjali- ja töökulu
- **Ligipääs** — peidetud torustik nõuab konstruktsiooni avamist (nt plaatide eemaldamine)
- **Korruste arv** — kortermaja püstakute vahetus on suurem töö kui üksiku korteri torustik

Võrreldes üksikute lekete parandamisega on tervikliku torustiku vahetus säästlikum, kui korteris on üle 25 aasta vanad torud ja lekked on hakanud korduma.

> Küsige meilt tasuta hinnapakkumist. Kirjeldage probleemi telefoni teel (+372 56 877 877) — meie spetsialist annab esialgse hinnahinnangu juba vestluse käigus.

## Korteriühistule: miks tasub torustiku renoveerimist koos planeerida?

Kortermajades on torude vahetust kõige mõistlikum planeerida püstakute kaupa kogu kortermaja ulatuses. Ühine planeerimine:

- Vähendab töö hinda ühistu liikmete kohta
- Väldib korduvaid häireid
- Annab garantii kogu toru süsteemile
- Suurendab kinnisvara väärtust

Torupro on teinud koostööd paljude Tallinna korteriühistutega ja oskame aidata ka rahastamise planeerimisel. Võtke meiega ühendust ja räägime teie maja vajadustest lähemalt.`,

  body_en: `Tallinn apartment owners often face a dilemma: invest in a complete pipe replacement, or patch leaks one by one and hope the system holds for a few more years? As experienced plumbers, we can honestly say: a pipe replacement done at the right moment saves both money and worry in the long run.

The service life of galvanised pipe material is approximately 30–40 years. In many Tallinn panel-block buildings constructed in the 1960s–1980s, that time is long past — these pipes are already running on borrowed time.

## Clear signs that pipes need replacing

### 1. Rust and brown water

If you open the tap in the morning and the first water out is brownish, the pipe has rusted from the inside. Over time the rust intensifies and begins affecting water quality around the clock. Brown water after a long period without use is normal, but if it occurs every day, it's time to act.

### 2. Low water pressure without an obvious cause

If water pressure is much better one floor below but weak in your apartment, this indicates either a limescale blockage in the pipes or a narrowed flow caused by rust corroding the pipe walls. Both are signs of aged pipe material.

### 3. Recurring drips and leaks

A single leaking joint can be repaired. But if leaks keep appearing in new places — deep rust has already corroded through the pipe wall and one repair just means the next leak arrives 20 cm further along.

### 4. Visible external rust and corrosion

On exposed pipes — basements, utility rooms — rust and corrosion are clearly visible. If a pipe is covered externally in layers of orange and red rust, the wall thickness is already critically reduced.

### 5. Frequent pipe bursts

If there has been more than one pipe burst in the last 2–3 years, a financial analysis is worthwhile: the cost of multiple separate repairs often exceeds the cost of a complete pipe replacement, not to mention the water damage each leak causes.

> A pipe that has already had one burst carries a higher risk than before — the rust is already critical.

## Which materials are best for pipe replacement?

Today there are several good alternatives to old galvanised pipework. We recommend the following depending on the situation:

### PP-R (polypropylene)

**Best choice** for the majority of Tallinn apartment building pipe replacements. Advantages:
- Very long service life (50+ years)
- Does not rust, corrode or harbour bacteria
- Full fusion-welded joints with no risk of leaks
- Excellent value for money

PP-R is suitable for both cold and hot water pipework and heating systems. Torupro uses certified PP-R products that comply with Estonian standards.

### PEX (cross-linked polyethylene)

**Best choice** for apartments where pipes must pass through tight spaces or bends without joints. PEX is flexible, making it ideal for underfloor heating pipes and more complex installation layouts.

### Copper

**Best choice** for prestige properties and where maximum durability is required. Copper pipes last 70–100 years, do not contaminate water and are antimicrobial. The price is higher, but the investment pays off over decades.

### Stainless steel

Suitable where higher water pressure or temperature is required. Used mainly in production facilities and commercial property pipework.

## How does pipe replacement work in practice?

Many people worry that pipe replacement means weeks of disruption. In reality, modern pipe replacement is a well-organised process.

### 1. Inspection visit

A Torupro plumber walks through all the pipework, assesses the condition and takes measurements. You receive a precise, written quote before work begins — with no hidden costs.

### 2. Preparation

The work area is covered with protective film and mats. The water is shut off. The old pipes are removed carefully.

### 3. New pipe installation

For PP-R pipes we weld all joints with a specialist polyfusion welding tool — this creates 100% leak-proof connections. Work is done quickly and cleanly.

### 4. Pressure test and handover

After installation we perform a pressure test: we pressurise the system at high pressure and check all joints for 24 hours. We then hand over a work acceptance act and a 2-year workmanship guarantee.

In an average-sized apartment (3 rooms) water pipe replacement takes 1–3 days. Adding drainage pipes takes a further 1–2 days.

## Cost: what to budget for?

Pipe replacement costs depend on several factors:

- **Material** — PP-R is the most affordable, copper the most expensive
- **Total pipe length** — more metres means higher material and labour costs
- **Access** — concealed pipework requires opening up structures (e.g. removing tiles)
- **Number of floors** — replacing risers in an apartment building is a larger job than a single apartment

Compared to patching individual leaks, a complete pipe replacement is more economical when a flat has pipes older than 25 years and leaks have started recurring.

> Request a free quote from us. Describe the problem by phone (+372 56 877 877) — our specialist will give you a preliminary cost estimate during the call.

## For apartment associations: why plan pipe renovation together?

In apartment buildings, replacing pipes is most sensible planned riser by riser across the whole building. Coordinated planning:

- Reduces the cost per association member
- Avoids repeated disruption
- Provides a guarantee for the whole pipe system
- Increases property value

Torupro has worked with many Tallinn apartment associations and can also help with financing planning. Get in touch and let's talk about what your building needs.`,

  body_ru: `Владельцы квартир в Таллинне нередко сталкиваются с дилеммой: вложиться в полную замену труб или латать течи по одной, надеясь, что система продержится ещё несколько лет? Как опытные сантехники, скажем честно: замена труб, сделанная вовремя, экономит в долгосрочной перспективе и деньги, и нервы.

Срок службы оцинкованных труб в среднем составляет 30–40 лет. Во многих панельных домах Таллинна, построенных в 1960–1980-е годы, этот срок давно истёк — такие трубы работают уже в «долг».

## Чёткие признаки того, что трубы нужно менять

### 1. Ржавчина и коричневая вода

Если утром при открытии крана сначала течёт буроватая вода — труба проржавела изнутри. Со временем ржавчина усиливается и начинает влиять на качество воды круглосуточно. Коричневая вода после долгого отсутствия — нормально, но если это происходит каждый день, пора действовать.

### 2. Низкое давление воды без видимой причины

Если на этаж ниже давление намного лучше, а у вас в квартире слабое — это указывает либо на засор накипью в трубах, либо на сужение просвета из-за ржавчины, разъедающей стенки трубы. Оба случая — признак устаревших труб.

### 3. Повторяющиеся капели и течи

Единственный протекающий стык — ремонтируемо. Но если течи появляются всё в новых местах — глубокая ржавчина уже разъела стенку трубы, и один ремонт означает лишь то, что следующая течь появится в 20 см дальше.

### 4. Видимая внешняя ржавчина и коррозия

На открытых трубах — в подвалах, технических помещениях — ржавчина и коррозия хорошо видны. Если труба снаружи покрыта слоями оранжевой и красной ржавчины, толщина её стенки уже критически снижена.

### 5. Частые прорывы труб

Если за последние 2–3 года случился более одного прорыва, стоит провести экономический анализ: стоимость нескольких отдельных ремонтов часто превышает стоимость полной замены трубопровода, не говоря уже об ущербе от затоплений.

> Труба, в которой уже был один прорыв, имеет более высокий риск повторения — ржавчина уже критическая.

## Какие материалы лучше всего подходят для замены труб?

Сегодня существует несколько хороших альтернатив старым оцинкованным трубам. В зависимости от ситуации рекомендуем:

### PP-R (полипропилен)

**Лучший выбор** для большинства замен труб в таллинских многоквартирных домах. Преимущества:
- Очень долгий срок службы (50+ лет)
- Не ржавеет, не корродирует, не образует бактерий
- Сварные соединения без риска утечек
- Отличное соотношение цены и качества

PP-R подходит как для холодного, так и для горячего водоснабжения, а также для систем отопления. Torupro использует сертифицированные PP-R продукты, соответствующие эстонским стандартам.

### PEX (сшитый полиэтилен)

**Лучший выбор** для квартир, где трубы должны проходить через узкие места или повороты без стыков. PEX гибкий, поэтому идеально подходит для труб тёплого пола и более сложных схем прокладки.

### Медь

**Лучший выбор** для престижных объектов и там, где требуется максимальная долговечность. Медные трубы служат 70–100 лет, не загрязняют воду и обладают антибактериальными свойствами. Цена выше, но инвестиция окупается за десятилетия.

### Нержавеющая сталь

Подходит там, где требуется более высокое давление воды или температура. Используется преимущественно в производственных помещениях и коммерческой недвижимости.

## Как проходит замена труб на практике?

Многие беспокоятся, что замена труб означает недели неразберихи. На самом деле современная замена труб — хорошо организованный процесс.

### 1. Осмотр

Сантехник Torupro обходит весь трубопровод, оценивает состояние и делает замеры. Вы получаете точное письменное предложение до начала работ — без скрытых затрат.

### 2. Подготовка

Рабочая зона покрывается защитной плёнкой и ковриками. Вода отключается. Старые трубы аккуратно демонтируются.

### 3. Установка новых труб

Для PP-R труб мы свариваем все соединения специальным инструментом для полифузионной сварки — это создаёт соединения, гарантированно не дающие течи. Работы выполняются быстро и чисто.

### 4. Испытание давлением и сдача

После монтажа проводим испытание давлением: нагнетаем давление в системе и проверяем все соединения в течение 24 часов. Затем передаём акт приёмки работ и гарантию на 2 года.

В квартире средних размеров (3 комнаты) замена водопровода занимает 1–3 дня. Дополнительная замена канализационных труб — ещё 1–2 дня.

## Стоимость: что учитывать?

Стоимость замены труб зависит от нескольких факторов:

- **Материал** — PP-R самый доступный, медь самая дорогая
- **Общая длина труб** — больше метров — выше затраты на материал и работу
- **Доступность** — скрытые трубы требуют вскрытия конструкций (например, демонтажа плитки)
- **Этажность** — замена стояков в многоквартирном доме — более масштабная работа, чем трубы в одной квартире

По сравнению с устранением отдельных течей полная замена трубопровода выгоднее, когда в квартире трубы старше 25 лет и течи начали повторяться.

> Запросите у нас бесплатное предложение. Опишите проблему по телефону (+372 56 877 877) — специалист даст предварительную оценку стоимости прямо в ходе разговора.

## Для товариществ собственников жилья: почему выгодно планировать реновацию трубопровода совместно?

В многоквартирных домах замену труб разумнее всего планировать пошагово по стоякам для всего дома. Совместное планирование:

- Снижает затраты на каждого члена товарищества
- Исключает повторные неудобства
- Даёт гарантию на всю систему трубопровода
- Повышает стоимость недвижимости

Torupro сотрудничал со многими таллинскими товариществами собственников жилья и может помочь и с планированием финансирования. Свяжитесь с нами и поговорим о потребностях вашего дома.`,
},

];

async function seed() {
  console.log(`Seeding ${posts.length} blog posts to Sanity…`);
  for (const post of posts) {
    await client.createOrReplace(post);
    console.log(`  ✓ ${post.slug}`);
  }
  console.log("Done.");
}

seed().catch((err) => {
  console.error(err);
  process.exit(1);
});
