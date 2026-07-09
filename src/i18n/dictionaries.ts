import type { Locale } from "./config";

export type Dictionary = {
  nav: {
    home: string;
    about: string;
    services: string;
    pricing: string;
    blog: string;
    contact: string;
  };
  blogPage: {
    eyebrow: string;
    title: string;
    lead: string;
    readMore: string;
    minRead: string;
    backToList: string;
    relatedTitle: string;
    noPostsFound: string;
  };
  cookies: {
    message: string;
    accept: string;
    decline: string;
    learnMore: string;
  };
  privacyPage: {
    metaTitle: string;
    metaDesc: string;
    title: string;
    sections: { heading: string; body: string }[];
  };
  termsPage: {
    metaTitle: string;
    metaDesc: string;
    title: string;
    subtitle: string;
    items: string[];
  };
  cta: {
    contact: string;
    call: string;
    services: string;
    readMore: string;
    order: string;
    quote: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    note: string;
  };
  intro: {
    eyebrow: string;
    title: string;
    body: string;
  };
  servicesSection: {
    eyebrow: string;
    title: string;
    subtitle: string;
  };
  values: {
    title: string;
    items: { title: string; body: string }[];
  };
  contactSection: {
    eyebrow: string;
    title: string;
    subtitle: string;
  };
  testimonials: {
    eyebrow: string;
    title: string;
    subtitle: string;
  };
  reviewSection: {
    eyebrow: string;
    title: string;
    subtitle: string;
  };
  form: {
    name: string;
    email: string;
    phone: string;
    address: string;
    message: string;
    files: string;
    filesBtn: string;
    filesHint: string;
    filesNote: string;
    send: string;
    sending: string;
    success: string;
    error: string;
    required: string;
    invalidEmail: string;
  };
  reviewForm: {
    name: string;
    rating: string;
    message: string;
    placeholder: string;
    send: string;
    sending: string;
    success: string;
    error: string;
    required: string;
  };
  footer: {
    company: string;
    contacts: string;
    links: string;
    rights: string;
    tagline: string;
    privacy: string;
    terms: string;
  };
  about: {
    eyebrow: string;
    title: string;
    lead: string;
    body: string;
    statsTitle: string;
    stats: { value: string; label: string }[];
  };
  servicesPage: {
    eyebrow: string;
    title: string;
    lead: string;
    body: string;
  };
  servicePage: {
    back: string;
    overview: string;
    why: string;
    whyItems: string[];
    ctaTitle: string;
    ctaBody: string;
  };
  pricing: {
    eyebrow: string;
    title: string;
    lead: string;
    colService: string;
    colPrice: string;
    notesTitle: string;
    important: string[];
  };
  contactPage: {
    eyebrow: string;
    title: string;
    lead: string;
    reach: string;
    hours: string;
    hoursValue: string;
  };
  meta: {
    homeTitle: string;
    homeDesc: string;
    aboutTitle: string;
    aboutDesc: string;
    servicesTitle: string;
    servicesDesc: string;
    pricingTitle: string;
    pricingDesc: string;
    blogTitle: string;
    blogDesc: string;
    contactTitle: string;
    contactDesc: string;
  };
};

const et: Dictionary = {
  nav: {
    home: "Avaleht",
    about: "Meist",
    services: "Teenused",
    pricing: "Hinnakiri",
    blog: "Blogi",
    contact: "Kontakt",
  },
  blogPage: {
    eyebrow: "Kasulikud nõuanded",
    title: "Torutöödest ja sanitaartehnikast",
    lead: "Praktilised nõuanded, juhendid ja eksperdinõu torutöödest, ummistuste lahendamisest ja torustiku hooldusest — kogenud torumehe silme läbi.",
    readMore: "Loe artiklit",
    minRead: "min lugemist",
    backToList: "Kõik artiklid",
    relatedTitle: "Seotud artiklid",
    noPostsFound: "Artikleid ei leitud.",
  },
  cta: {
    contact: "Võta meiega ühendust",
    call: "Helista",
    services: "Meie teenused",
    readMore: "Loe rohkem",
    order: "Telli siit",
    quote: "Küsi pakkumist",
  },
  hero: {
    eyebrow: "Sanitaartehnika · Tallinn ja Harjumaa",
    title: "Nõudmisel kõik sanitaartehnilised lahendused",
    subtitle:
      "Professionaalne torutöö meeskond, kes lahendab teie veesüsteemi mured kiirelt, puhtalt ja usaldusväärselt.",
    note: "Ööpäevaringne avariiabi · Kogenud spetsialistid · 2 aasta garantii töödele",
  },
  intro: {
    eyebrow: "Preemium kvaliteet",
    title: "Paigaldame teie koju parima torustiku",
    body: "Meie ettevõtte professionaalne torutöö meeskond tagab kvaliteetseid lahendusi igasugustele veetorudega seotud küsimustele. Olgu tegemist lekke parandamise, torustike paigaldamise või hooldustöödega — meie kogenud spetsialistid pakuvad usaldusväärset teenust ning lahendavad teie mured kiirelt ja tõhusalt. Teie rahulolu ja kodu veesüsteemi optimaalne toimimine on meie prioriteet.",
  },
  servicesSection: {
    eyebrow: "Mida me teeme",
    title: "Meie teenused",
    subtitle: "Terviklik valik sanitaar- ja tehnosüsteemide lahendusi ühe katuse alt.",
  },
  values: {
    title: "Miks Torupro",
    items: [
      { title: "Kiire reageerimine", body: "Avariiolukorras jõuame kohale kiirelt ja lahendame probleemi samal päeval." },
      { title: "Kogenud meistrid", body: "Sertifitseeritud spetsialistid, kes kasutavad ainult tipptasemel varustust." },
      { title: "Aus hinnastamine", body: "Selge hinnakiri ilma varjatud tasudeta — täpne kalkulatsioon enne tööd." },
      { title: "2 aasta garantii", body: "Vastutame oma töö eest ja anname teostatud töödele 2 aasta garantii." },
    ],
  },
  contactSection: {
    eyebrow: "Küsimusi?",
    title: "Võta meiega ühendust",
    subtitle: "Kirjeldage oma muret ja meie spetsialist võtab teiega peagi ühendust.",
  },
  testimonials: {
    eyebrow: "Kliendid räägivad",
    title: "Mida meie kliendid ütlevad",
    subtitle: "Üle tuhande rahulolnud kliendi Tallinnas ja Harjumaal.",
  },
  reviewSection: {
    eyebrow: "Teie arvamus loeb",
    title: "Jäta meile arvustus",
    subtitle: "Aitäh, et jagate oma kogemust — see aitab meil teenust pidevalt parandada.",
  },
  form: {
    name: "Nimi",
    email: "E-post",
    phone: "Telefoninumber",
    address: "Aadress",
    message: "Kirjeldage probleemi",
    files: "Fotod või video (valikuline)",
    filesBtn: "Vali failid",
    filesHint: "Kuni 6 faili, kuni 12 MB faili kohta.",
    filesNote: "Üle 12 MB suuruseid faile ei saa selle vormi kaudu saata. Saatke need palun e-postiga aadressile ajsan@ajsan.ee.",
    send: "Saada sõnum",
    sending: "Saadan…",
    success: "Aitäh! Teie sõnum on saadetud — võtame peagi ühendust.",
    error: "Midagi läks valesti. Palun proovige uuesti või helistage meile.",
    required: "See väli on kohustuslik",
    invalidEmail: "Palun sisestage korrektne e-posti aadress",
  },
  reviewForm: {
    name: "Nimi",
    rating: "Sinu hinnang",
    message: "Sinu arvustus",
    placeholder: "Kirjelda lühidalt oma kogemust meiega…",
    send: "Saada arvustus",
    sending: "Saadan…",
    success: "Aitäh! Teie arvustus on edukalt saadetud.",
    error: "Midagi läks valesti. Palun proovige uuesti.",
    required: "See väli on kohustuslik",
  },
  cookies: {
    message: "Kasutame küpsiseid, et parandada teie kasutuskogemust ja analüüsida veebiliiklust. Lisateabe saamiseks lugege meie privaatsuspoliitikat.",
    accept: "Nõustun",
    decline: "Keeldun",
    learnMore: "Loe lähemalt",
  },
  privacyPage: {
    metaTitle: "Privaatsus- ja küpsisepoliitika — Torupro",
    metaDesc: "Teave selle kohta, kuidas Torupro kogub, kasutab ja kaitseb teie isikuandmeid.",
    title: "Privaatsus- ja küpsisepoliitika",
    sections: [
      {
        heading: "1. Sissejuhatus",
        body: "Käesolev poliitika kirjeldab, kuidas BaMu Ehitus OÜ (kaubandusnimega Torupro) kogub, kasutab, kaitseb ja käsitleb selle veebisaidi külastajate ja klientide isikuandmeid.\n\nBaMu Ehitus OÜ on pühendunud privaatsuse kaitsmisele ning kõigi andmete töötlemisele kooskõlas isikuandmete kaitse üldmäärusega (GDPR) ja kohaldatava Eesti andmekaitsseadusega.\n\nAndmete vastutav töötleja: BaMu Ehitus OÜ, Pae tn 20, Tallinn 11414, Harjumaa, Eesti. Reg. 16986440.",
      },
      {
        heading: "2. Kogutavad isikuandmed ja töötlemise eesmärk",
        body: "Isikuandmeid kogutakse teenuste pakkumiseks ja täiustamiseks. Kogutavate andmete liigid sõltuvad veebisaidiga suhtlemisest — nagu kontaktvormi täitmine, teenuse päring või visiidi broneerimine.",
      },
      {
        heading: "3. Küpsisepoliitika",
        body: "Küpsised on väikesed tekstifailid, mis paigutatakse külastaja seadmesse veebisaidi külastamisel. Torupro kasutab rangelt vajalikke küpsiseid, toimivuse ja analüüsiküpsiseid, funktsionaalsusküpsiseid ning — nõusoleku korral — turundusküpsiseid.",
      },
      {
        heading: "4. Andmete jagamine",
        body: "BaMu Ehitus OÜ ei müü isikuandmeid. Andmeid võib jagada usaldusväärsete kolmanda osapoole teenusepakkujatega, kes aitavad veebisaiti käitada ja teenuseid osutada, rangete andmetöötluslepingute alusel.",
      },
      {
        heading: "5. Andmesubjekti õigused",
        body: "GDPR-i alusel on igal isikul õigused, sealhulgas õigus andmetele juurdepääsule, parandamisele, kustutamisele, töötlemise piiramisele, andmete ülekantavusele ja vastuväite esitamisele. Nende õiguste kasutamiseks võtke ühendust aadressil info@torupro.ee.",
      },
      {
        heading: "6. Kontakt",
        body: "Isikuandmete käsitlemisega seotud küsimuste korral võtke ühendust aadressil info@torupro.ee. Kaebusi saab esitada ka Andmekaitse Inspektsioonile aadressil aki.ee.",
      },
    ],
  },
  termsPage: {
    metaTitle: "Teenuse tingimused — Torupro",
    metaDesc: "Torupro teenuse osutamise tingimused.",
    title: "Teenuse tingimused",
    subtitle: "Palun tutvuge hoolikalt alltoodud tingimustega enne tööde tellimist.",
    items: [
      "Kraavi täitmine toimub kaevatud pinnasega. Pinnas tasandatakse.",
      "Haljastuse (murualade) taastamine on võimalik lisakokkuleppe alusel lisatasu eest. Kinnistu omanik/valdaja peab enne kaevamistööde algust teavitama maalähedastest kommunikatsioonidest (elektri- ja sidekaablid maa sees).",
      "Kui osutub vajalikuks lisatöid (eelkõige võimalikud raudbetoon- või metallkonstruktsioonid maa sees, millest klient ei tea), nende täitmine ja tasumine lepitakse kokku eraldi lisakokkuleppes.",
      "See hinnapakkumine ei hõlma soojustusmaterjali maksumust olemasoleva torustiku katmiseks maja vahetus läheduses.",
      "Klient on kohustatud töö käiku ja kvaliteedinõuetele vastavust igal ajal kontrollima, kaasates vajaduse korral eksperte.",
      "Klient peab jälgima töö edenemist ja andma töövõtjale juhiseid töö jätkamise osas.",
      "Teostatud tööd on kaetud kaheaastase garantiiga tavapärase igapäevase kasutuse korral.",
      "Ettevõte ei vastuta kliendi ostetud materjalide paigalduse eest.",
      "Klient on kohustatud tasuma töö- ja materjalidepõhise lepingu alusel väljastatud arve alusel ettevõtte arvelduskontole.",
      "Väikesemahulisi ja avariitöid teostab BaMu Ehitus OÜ.",
    ],
  },
  footer: {
    company: "Ettevõtte andmed",
    contacts: "Meie kontaktid",
    links: "Lingid",
    rights: "Kõik õigused kaitstud.",
    tagline: "Parim teenus on garanteeritud.",
    privacy: "Privaatsuspoliitika",
    terms: "Teenuse tingimused",
  },
  about: {
    eyebrow: "Preemium kvaliteet",
    title: "Me lahendame teie jaoks kõik sanitaartehnilised mõistatused",
    lead: "Meie kogenud meeskond on valmis lahendama igasuguseid torutöödega seotud väljakutseid teie kodu või ettevõtte jaoks. Usaldage meid, et tagada teie torustike tõrgeteta toimimine ja mugavus igal ajal.",
    body: "Meie teenused hõlmavad nii väiksemaid parandustöid kui ka suuremahulisi torustike paigaldusprojekte, pakkudes alati professionaalset lähenemist ja tähelepanu detailidele. Oleme pühendunud kliendi rahulolu tagamisele ning oleme alati valmis pakkuma kiiret ja usaldusväärset teenust. Meie meeskond järgib kõrgeid kvaliteedistandardeid ja kasutab ainult parimaid materjale ja tehnikaid, et tagada teie torutööde vastupidavus ja ohutus. Torupro — teie usaldusväärne partner, kes teeb kõik selleks, et teie kogemus oleks sujuv ja meeldiv.",
    statsTitle: "Arvudes",
    stats: [
      { value: "10+", label: "aastat kogemust" },
      { value: "1500+", label: "lahendatud tööd" },
      { value: "24/7", label: "avariiabi" },
      { value: "100%", label: "kliendile keskendunud" },
    ],
  },
  servicesPage: {
    eyebrow: "Torutööd Tallinnas ja Harjumaal",
    title: "Nõudmisel kõik sanitaartehnilised lahendused",
    lead: "Usaldage oma torustikuga seotud probleemid meie hoolde.",
    body: "Meie kogenud spetsialistid on valmis lahendama igasuguseid torustikuprobleeme, olgu need siis suured või väikesed. Teie mugavus ja rahulolu on meie jaoks esmatähtis ning me teeme kõik endast oleneva, et tagada teie probleemide kiire ja tõhus lahendamine.",
  },
  servicePage: {
    back: "Kõik teenused",
    overview: "Ülevaade",
    why: "Mida saate meilt oodata",
    whyItems: [
      "Tasuta esmane konsultatsioon ja täpne hinnakalkulatsioon",
      "Kaasaegne varustus ja sertifitseeritud materjalid",
      "Puhas ja korrektne töö ilma üleliigse jäljeta",
      "2 aasta garantii teostatud töödele",
    ],
    ctaTitle: "Vajate seda teenust?",
    ctaBody: "Võtke meiega ühendust ja meie spetsialist annab teile kiire ülevaate ning hinnapakkumise.",
  },
  pricing: {
    eyebrow: "Läbipaistev hinnastamine",
    title: "Hinnakiri",
    lead: "Selged hinnad ilma varjatud tasudeta. Suuremahuliste tööde puhul kokkuleppehind.",
    colService: "Nimetus",
    colPrice: "Hind",
    notesTitle: "Oluline teada",
    important: [
      "Min. hind väljakutse eest — see on esimese töötunni hind.",
      "Peale esimest tundi arvestatakse tööaega 30-minutilise sammuga.",
      "Töid on võimalik teostada ka väljaspool Tallinna, millele lisandub transpordikulu.",
      "Tööd, mis ei ole hinnakirjas, teostatakse vastavalt kalkulatsioonile.",
      "Suuremahuliste tööde puhul hind kokkuleppel.",
      "Survepesu ja fekaaliveo korral lisandub ajakulu veevõtmisele ja transpordile (edasi-tagasi) — 30 min.",
      "Orienteeruv maksumus täpsustada dispetšeri käest.",
      "Akti koostamine on eraldi kokkuleppel, hinnad alates 15 €.",
      "NB! Tunnitasu kehtib ühe inimese töö kohta.",
    ],
  },
  contactPage: {
    eyebrow: "Oleme siin, et aidata",
    title: "Lahendame teie eest sanitaartehnilised probleemid",
    lead: "Siit leiate kõik vajalikud üksikasjad meiega ühenduse võtmiseks. Ärge kartke meile kirjutada või helistada — meie sõbralik meeskond on alati valmis teid abistama.",
    reach: "Otsekontakt",
    hours: "Avariiabi",
    hoursValue: "Ööpäevaringselt, 24/7",
  },
  meta: {
    homeTitle: "Torupro — Sanitaartehnilised tööd Tallinnas",
    homeDesc: "Professionaalsed sanitaartehnilised lahendused Tallinnas ja Harjumaal. Torutööd, ummistused, keevitus, survepesu ja palju muud.",
    aboutTitle: "Meist — Torupro",
    aboutDesc: "Tutvuge Torupro meeskonnaga — teie usaldusväärne partner torutööde lahendamisel.",
    servicesTitle: "Teenused — Torupro",
    servicesDesc: "Terviklik valik sanitaar- ja tehnosüsteemide teenuseid Tallinnas ja Harjumaal.",
    pricingTitle: "Hinnakiri — Torupro",
    pricingDesc: "Läbipaistev hinnakiri sanitaartehnilistele töödele.",
    blogTitle: "Blogi — Torupro | Torutöödest ja sanitaartehnikast",
    blogDesc: "Praktilised nõuanded ja juhendid torutöödest, ummistuste lahendamisest, torustiku vahetusest ja sanitaartehnika hooldusest Tallinnas.",
    contactTitle: "Kontakt — Torupro",
    contactDesc: "Võtke Toruproga ühendust — telefon, e-post ja kontaktivorm.",
  },
};

const en: Dictionary = {
  nav: {
    home: "Home",
    about: "About",
    services: "Services",
    pricing: "Pricing",
    blog: "Blog",
    contact: "Contact",
  },
  blogPage: {
    eyebrow: "Useful tips",
    title: "Plumbing & sanitary engineering",
    lead: "Practical tips, guides and expert advice on plumbing, drain clearing and pipe maintenance — straight from an experienced plumber.",
    readMore: "Read article",
    minRead: "min read",
    backToList: "All articles",
    relatedTitle: "Related articles",
    noPostsFound: "No articles found.",
  },
  cta: {
    contact: "Get in touch",
    call: "Call us",
    services: "Our services",
    readMore: "Read more",
    order: "Order now",
    quote: "Request a quote",
  },
  hero: {
    eyebrow: "Sanitary engineering · Tallinn & Harju County",
    title: "Every plumbing solution, on demand",
    subtitle:
      "A professional plumbing team that resolves your water-system concerns quickly, cleanly and reliably.",
    note: "24/7 emergency service · Certified specialists · 2-year workmanship guarantee",
  },
  intro: {
    eyebrow: "Premium quality",
    title: "We install the finest plumbing in your home",
    body: "Our professional plumbing team delivers quality solutions for every water-pipe related issue. Whether it is a leak repair, pipe installation or maintenance, our experienced specialists provide reliable service and solve your concerns quickly and efficiently. Your satisfaction and the optimal performance of your home's water system are our priority.",
  },
  servicesSection: {
    eyebrow: "What we do",
    title: "Our services",
    subtitle: "A complete range of sanitary and technical-system solutions under one roof.",
  },
  values: {
    title: "Why Torupro",
    items: [
      { title: "Fast response", body: "In an emergency we arrive quickly and resolve the problem the same day." },
      { title: "Experienced masters", body: "Certified specialists who work only with top-grade equipment." },
      { title: "Honest pricing", body: "A clear price list with no hidden fees — an exact quote before the work begins." },
      { title: "2-year guarantee", body: "We stand behind our work and provide a 2-year guarantee on completed jobs." },
    ],
  },
  contactSection: {
    eyebrow: "Questions?",
    title: "Get in touch",
    subtitle: "Describe your concern and one of our specialists will contact you shortly.",
  },
  testimonials: {
    eyebrow: "Client stories",
    title: "What our clients say",
    subtitle: "Over a thousand satisfied customers across Tallinn and Harju County.",
  },
  reviewSection: {
    eyebrow: "Your opinion matters",
    title: "Leave us a review",
    subtitle: "Thank you for sharing your experience — it helps us keep improving our service.",
  },
  form: {
    name: "Name",
    email: "Email",
    phone: "Phone number",
    address: "Address",
    message: "Describe the problem",
    files: "Photos or video (optional)",
    filesBtn: "Choose files",
    filesHint: "Up to 6 files, up to 12 MB per file.",
    filesNote: "Files over 12 MB cannot be sent via this form. Please send them by email to ajsan@ajsan.ee.",
    send: "Send message",
    sending: "Sending…",
    success: "Thank you! Your message has been sent — we will be in touch shortly.",
    error: "Something went wrong. Please try again or give us a call.",
    required: "This field is required",
    invalidEmail: "Please enter a valid email address",
  },
  reviewForm: {
    name: "Name",
    rating: "Your rating",
    message: "Your review",
    placeholder: "Briefly describe your experience with us…",
    send: "Submit review",
    sending: "Sending…",
    success: "Thank you! Your review has been submitted.",
    error: "Something went wrong. Please try again.",
    required: "This field is required",
  },
  cookies: {
    message: "We use cookies to improve your experience and analyse website traffic. For more information, please read our Privacy Policy.",
    accept: "Accept",
    decline: "Decline",
    learnMore: "Learn more",
  },
  privacyPage: {
    metaTitle: "Privacy & Cookie Policy — Torupro",
    metaDesc: "Information on how Torupro collects, uses, and protects your personal data.",
    title: "Privacy & Cookie Policy",
    sections: [
      {
        heading: "1. Introduction",
        body: "This policy outlines how BaMu Ehitus OÜ (trading as Torupro) collects, uses, protects, and handles personal data of visitors and customers who use this website.\n\nBaMu Ehitus OÜ is committed to protecting privacy and processing all data in accordance with the General Data Protection Regulation (GDPR) and applicable Estonian data protection law.\n\nData Controller: BaMu Ehitus OÜ, Pae tn 20, Tallinn 11414, Harjumaa, Estonia. Reg. 16986440.",
      },
      {
        heading: "2. Personal Data Collected and Purpose",
        body: "Personal data is collected to provide and improve services. The types of data collected depend on interactions with the website — such as submitting the contact form, making a service inquiry, or booking a visit.",
      },
      {
        heading: "3. Cookie Policy",
        body: "Cookies are small text files placed on a visitor's device when visiting a website. Torupro uses strictly necessary cookies, performance and analytics cookies, functionality cookies, and — where consent is given — marketing cookies.",
      },
      {
        heading: "4. Data Sharing",
        body: "BaMu Ehitus OÜ does not sell personal data. Data may be shared with trusted third-party service providers who assist in operating this website and delivering services, under strict data processing agreements.",
      },
      {
        heading: "5. Data Protection Rights",
        body: "Under the GDPR, every individual has rights including the right to access, rectification, erasure, restriction of processing, data portability, and the right to object. Contact info@torupro.ee to exercise any of these rights.",
      },
      {
        heading: "6. Contact",
        body: "For concerns about personal data handling, contact info@torupro.ee. Complaints may also be lodged with the Estonian Data Protection Inspectorate (Andmekaitse Inspektsioon) at aki.ee.",
      },
    ],
  },
  termsPage: {
    metaTitle: "Terms of Service — Torupro",
    metaDesc: "Terms and conditions for Torupro plumbing services.",
    title: "Terms of Service",
    subtitle: "Please read the following terms carefully before placing an order.",
    items: [
      "Backfilling of a trench is made by the excavated soil. The soil is flattened.",
      "Restoration of greenery (lawn) is possible on the basis of an additional contract for an additional fee. The owner/proprietor of the real estate must inform the existing communications (electrical and communication lines in the ground) prior to the start of excavation works.",
      "If additional works are required (in particular, possible reinforced concrete or metal structures in the ground about which the customer does not know), their execution and payment are agreed in a separate additional contract.",
      "This price offer does not include the cost of insulation material to cover the existing pipeline in the immediate vicinity of the house.",
      "The customer must conduct an ongoing review of the work and compliance with quality requirements at any time, with the involvement of experts, if necessary.",
      "The customer must check the progress of the work and give instructions to the contractor regarding the continuation of the work.",
      "The work executed is covered by a two-year warranty for normal daily use.",
      "The company is not responsible for the installation of materials purchased by the customer.",
      "The customer under the contract for work and materials must pay on the basis of the invoice issued to the current account of the company.",
      "Minor and emergency works are carried out by BaMu Ehitus OÜ.",
    ],
  },
  footer: {
    company: "Company details",
    contacts: "Our contacts",
    links: "Links",
    rights: "All rights reserved.",
    tagline: "The best service, guaranteed.",
    privacy: "Privacy Policy",
    terms: "Terms of Service",
  },
  about: {
    eyebrow: "Premium quality",
    title: "We solve every sanitary-engineering puzzle for you",
    lead: "Our experienced team is ready to handle any plumbing challenge for your home or business. Trust us to keep your pipework running flawlessly and comfortably at all times.",
    body: "Our services cover both minor repairs and large-scale pipe-installation projects, always with a professional approach and attention to detail. We are committed to client satisfaction and always ready to offer fast, dependable service. Our team follows high quality standards and uses only the best materials and techniques to ensure the durability and safety of your plumbing. Torupro — your reliable partner, doing everything to make your experience smooth and pleasant.",
    statsTitle: "By the numbers",
    stats: [
      { value: "10+", label: "years of experience" },
      { value: "1500+", label: "jobs completed" },
      { value: "24/7", label: "emergency help" },
      { value: "100%", label: "client focused" },
    ],
  },
  servicesPage: {
    eyebrow: "Plumbing in Tallinn & Harju County",
    title: "Every sanitary solution, on demand",
    lead: "Leave your pipework problems in our care.",
    body: "Our experienced specialists are ready to solve any pipework issue, big or small. Your comfort and satisfaction come first, and we do everything we can to resolve your problems quickly and efficiently.",
  },
  servicePage: {
    back: "All services",
    overview: "Overview",
    why: "What to expect from us",
    whyItems: [
      "Free initial consultation and an exact price estimate",
      "Modern equipment and certified materials",
      "Clean, tidy work with no mess left behind",
      "A 2-year guarantee on completed work",
    ],
    ctaTitle: "Need this service?",
    ctaBody: "Get in touch and our specialist will give you a quick overview and a price offer.",
  },
  pricing: {
    eyebrow: "Transparent pricing",
    title: "Price list",
    lead: "Clear prices with no hidden fees. Large-scale jobs are priced by agreement.",
    colService: "Service",
    colPrice: "Price",
    notesTitle: "Good to know",
    important: [
      "Minimum call-out price — this is the price of the first working hour.",
      "After the first hour, time is billed in 30-minute increments.",
      "Work can also be carried out outside Tallinn, with an added transport fee.",
      "Work not listed in the price list is performed according to calculation.",
      "Large-scale work is priced by agreement.",
      "For pressure washing and sewage haulage, water collection and transport time (round trip) adds 30 min.",
      "Confirm the approximate cost with the dispatcher.",
      "A work report is by separate agreement, from €15.",
      "NB! The hourly rate applies per person.",
    ],
  },
  contactPage: {
    eyebrow: "We are here to help",
    title: "We solve your sanitary problems for you",
    lead: "Here you will find all the details you need to reach us. Do not hesitate to write or call — our friendly team is always ready to assist you.",
    reach: "Direct contact",
    hours: "Emergency service",
    hoursValue: "Around the clock, 24/7",
  },
  meta: {
    homeTitle: "Torupro — Plumbing services in Tallinn",
    homeDesc: "Professional sanitary-engineering solutions in Tallinn and Harju County. Plumbing, unclogging, welding, pressure washing and more.",
    aboutTitle: "About — Torupro",
    aboutDesc: "Meet the Torupro team — your reliable partner for plumbing solutions.",
    servicesTitle: "Services — Torupro",
    servicesDesc: "A complete range of sanitary and technical-system services in Tallinn and Harju County.",
    pricingTitle: "Pricing — Torupro",
    pricingDesc: "Transparent price list for sanitary-engineering work.",
    blogTitle: "Blog — Torupro | Plumbing tips & guides",
    blogDesc: "Practical plumbing tips, drain-clearing guides and pipe maintenance advice from Torupro's experienced team in Tallinn.",
    contactTitle: "Contact — Torupro",
    contactDesc: "Contact Torupro — phone, email and contact form.",
  },
};

const ru: Dictionary = {
  nav: {
    home: "Главная",
    about: "О нас",
    services: "Услуги",
    pricing: "Цены",
    blog: "Блог",
    contact: "Контакты",
  },
  blogPage: {
    eyebrow: "Полезные советы",
    title: "О сантехнике и трубопроводе",
    lead: "Практические советы, инструкции и экспертные рекомендации по сантехнике, устранению засоров и обслуживанию трубопровода — от опытных сантехников.",
    readMore: "Читать статью",
    minRead: "мин чтения",
    backToList: "Все статьи",
    relatedTitle: "Похожие статьи",
    noPostsFound: "Статьи не найдены.",
  },
  cta: {
    contact: "Связаться с нами",
    call: "Позвонить",
    services: "Наши услуги",
    readMore: "Подробнее",
    order: "Заказать",
    quote: "Запросить расчёт",
  },
  hero: {
    eyebrow: "Сантехника · Таллинн и Харьюмаа",
    title: "Любые сантехнические решения по запросу",
    subtitle:
      "Профессиональная бригада сантехников, которая решает вопросы вашей водяной системы быстро, чисто и надёжно.",
    note: "Аварийная помощь 24/7 · Сертифицированные специалисты · Гарантия на работы 2 года",
  },
  intro: {
    eyebrow: "Премиальное качество",
    title: "Установим в вашем доме лучший трубопровод",
    body: "Наша профессиональная бригада сантехников обеспечивает качественные решения для любых вопросов, связанных с водопроводом. Будь то устранение течи, монтаж трубопровода или обслуживание — наши опытные специалисты предоставляют надёжный сервис и решают ваши проблемы быстро и эффективно. Ваше спокойствие и оптимальная работа водяной системы дома — наш приоритет.",
  },
  servicesSection: {
    eyebrow: "Чем мы занимаемся",
    title: "Наши услуги",
    subtitle: "Полный спектр решений для сантехнических и инженерных систем под одной крышей.",
  },
  values: {
    title: "Почему Torupro",
    items: [
      { title: "Быстрый отклик", body: "В аварийной ситуации приезжаем быстро и решаем проблему в тот же день." },
      { title: "Опытные мастера", body: "Сертифицированные специалисты, работающие только на оборудовании высшего класса." },
      { title: "Честные цены", body: "Понятный прайс-лист без скрытых платежей — точный расчёт до начала работ." },
      { title: "Гарантия 2 года", body: "Мы отвечаем за свою работу и предоставляем гарантию на выполненные работы сроком 2 года." },
    ],
  },
  contactSection: {
    eyebrow: "Есть вопросы?",
    title: "Свяжитесь с нами",
    subtitle: "Опишите вашу проблему, и наш специалист свяжется с вами в ближайшее время.",
  },
  testimonials: {
    eyebrow: "Отзывы клиентов",
    title: "Что говорят наши клиенты",
    subtitle: "Более тысячи довольных клиентов в Таллинне и Харьюмаа.",
  },
  reviewSection: {
    eyebrow: "Ваше мнение важно",
    title: "Оставьте отзыв",
    subtitle: "Спасибо, что делитесь своим опытом — это помогает нам становиться лучше.",
  },
  form: {
    name: "Имя",
    email: "Эл. почта",
    phone: "Номер телефона",
    address: "Адрес",
    message: "Опишите проблему",
    files: "Фото или видео (необязательно)",
    filesBtn: "Выбрать файлы",
    filesHint: "До 6 файлов, до 12 МБ на файл.",
    filesNote: "Файлы размером более 12 МБ нельзя отправить через эту форму. Отправьте их по электронной почте на ajsan@ajsan.ee.",
    send: "Отправить",
    sending: "Отправка…",
    success: "Спасибо! Ваше сообщение отправлено — мы скоро свяжемся с вами.",
    error: "Что-то пошло не так. Пожалуйста, попробуйте ещё раз или позвоните нам.",
    required: "Это поле обязательно",
    invalidEmail: "Пожалуйста, введите корректный адрес эл. почты",
  },
  reviewForm: {
    name: "Имя",
    rating: "Ваша оценка",
    message: "Ваш отзыв",
    placeholder: "Кратко опишите свой опыт работы с нами…",
    send: "Отправить отзыв",
    sending: "Отправка…",
    success: "Спасибо! Ваш отзыв успешно отправлен.",
    error: "Что-то пошло не так. Попробуйте ещё раз.",
    required: "Это поле обязательно",
  },
  cookies: {
    message: "Мы используем файлы cookie для улучшения вашего опыта и анализа трафика сайта. Подробнее читайте в нашей политике конфиденциальности.",
    accept: "Принять",
    decline: "Отклонить",
    learnMore: "Подробнее",
  },
  privacyPage: {
    metaTitle: "Политика конфиденциальности и использования cookie — Torupro",
    metaDesc: "Информация о том, как Torupro собирает, использует и защищает ваши персональные данные.",
    title: "Политика конфиденциальности и использования cookie",
    sections: [
      {
        heading: "1. Введение",
        body: "Настоящая политика описывает, как BaMu Ehitus OÜ (торговая марка Torupro) собирает, использует, защищает и обрабатывает персональные данные посетителей и клиентов данного веб-сайта.\n\nBaMu Ehitus OÜ обязуется защищать конфиденциальность и обрабатывать все данные в соответствии с Общим регламентом о защите данных (GDPR) и применимым законодательством Эстонии о защите персональных данных.\n\nОператор данных: BaMu Ehitus OÜ, Pae tn 20, Tallinn 11414, Harjumaa, Эстония. Рег. 16986440.",
      },
      {
        heading: "2. Собираемые персональные данные и цель их обработки",
        body: "Персональные данные собираются для предоставления и улучшения услуг. Типы собираемых данных зависят от взаимодействия с сайтом — например, заполнения контактной формы, запроса услуги или бронирования визита.",
      },
      {
        heading: "3. Политика использования cookie",
        body: "Файлы cookie — это небольшие текстовые файлы, которые сохраняются на устройстве посетителя при посещении веб-сайта. Torupro использует строго необходимые файлы cookie, файлы cookie производительности и аналитики, функциональные файлы cookie и — при наличии согласия — маркетинговые файлы cookie.",
      },
      {
        heading: "4. Передача данных третьим лицам",
        body: "BaMu Ehitus OÜ не продаёт персональные данные. Данные могут передаваться надёжным сторонним поставщикам услуг, которые помогают в работе сайта и предоставлении услуг, на основании строгих соглашений об обработке данных.",
      },
      {
        heading: "5. Права субъектов данных",
        body: "В соответствии с GDPR каждый человек имеет право на доступ к данным, их исправление, удаление, ограничение обработки, переносимость данных и право на возражение. Для реализации любого из этих прав обращайтесь по адресу info@torupro.ee.",
      },
      {
        heading: "6. Контакты",
        body: "По вопросам обработки персональных данных обращайтесь по адресу info@torupro.ee. Жалобы также можно подать в Инспекцию по защите данных Эстонии (Andmekaitse Inspektsioon) на сайте aki.ee.",
      },
    ],
  },
  termsPage: {
    metaTitle: "Условия предоставления услуг — Torupro",
    metaDesc: "Условия и положения сантехнических услуг Torupro.",
    title: "Условия предоставления услуг",
    subtitle: "Пожалуйста, внимательно ознакомьтесь с условиями перед оформлением заказа.",
    items: [
      "Засыпка траншеи выполняется вынутым грунтом. Грунт разравнивается.",
      "Восстановление зелёных насаждений (газона) возможно на основании отдельного договора за дополнительную плату. Владелец/пользователь объекта недвижимости обязан до начала земляных работ уведомить об имеющихся подземных коммуникациях (электрических и телекоммуникационных кабелях).",
      "Если потребуются дополнительные работы (в частности, возможные железобетонные или металлические конструкции в грунте, о которых заказчик не знает), их выполнение и оплата согласовываются в отдельном дополнительном договоре.",
      "Данное коммерческое предложение не включает стоимость теплоизоляционного материала для покрытия существующего трубопровода в непосредственной близости от дома.",
      "Заказчик обязан осуществлять постоянный контроль над ходом работ и соответствием требованиям качества в любое время, привлекая при необходимости специалистов.",
      "Заказчик обязан следить за ходом выполнения работ и давать подрядчику указания относительно их продолжения.",
      "Выполненные работы покрываются двухлетней гарантией при нормальной ежедневной эксплуатации.",
      "Компания не несёт ответственности за установку материалов, приобретённых заказчиком.",
      "Заказчик по договору на выполнение работ и поставку материалов обязан производить оплату на основании выставленного счёта на расчётный счёт компании.",
      "Мелкие и аварийные работы выполняются компанией BaMu Ehitus OÜ.",
    ],
  },
  footer: {
    company: "Реквизиты компании",
    contacts: "Наши контакты",
    links: "Ссылки",
    rights: "Все права защищены.",
    tagline: "Лучший сервис гарантирован.",
    privacy: "Политика конфиденциальности",
    terms: "Условия услуг",
  },
  about: {
    eyebrow: "Премиальное качество",
    title: "Мы решаем для вас любые сантехнические задачи",
    lead: "Наша опытная команда готова справиться с любыми задачами по трубопроводу для вашего дома или бизнеса. Доверьте нам безупречную работу вашей системы и комфорт в любое время.",
    body: "Наши услуги охватывают как мелкий ремонт, так и масштабные проекты монтажа трубопроводов — всегда с профессиональным подходом и вниманием к деталям. Мы привержены удовлетворённости клиента и всегда готовы предложить быстрый и надёжный сервис. Наша команда придерживается высоких стандартов качества и использует только лучшие материалы и технологии для долговечности и безопасности ваших систем. Torupro — ваш надёжный партнёр, который делает всё, чтобы ваш опыт был приятным.",
    statsTitle: "В цифрах",
    stats: [
      { value: "10+", label: "лет опыта" },
      { value: "1500+", label: "выполненных работ" },
      { value: "24/7", label: "аварийная помощь" },
      { value: "100%", label: "ориентир на клиента" },
    ],
  },
  servicesPage: {
    eyebrow: "Сантехника в Таллинне и Харьюмаа",
    title: "Любые сантехнические решения по запросу",
    lead: "Доверьте проблемы вашего трубопровода нам.",
    body: "Наши опытные специалисты готовы решить любые вопросы с трубопроводом — большие или малые. Ваш комфорт и удовлетворённость для нас на первом месте, и мы делаем всё возможное для быстрого и эффективного решения ваших проблем.",
  },
  servicePage: {
    back: "Все услуги",
    overview: "Обзор",
    why: "Что вы получаете",
    whyItems: [
      "Бесплатная первичная консультация и точный расчёт стоимости",
      "Современное оборудование и сертифицированные материалы",
      "Чистая и аккуратная работа без лишних следов",
      "Гарантия на выполненные работы — 2 года",
    ],
    ctaTitle: "Нужна эта услуга?",
    ctaBody: "Свяжитесь с нами, и наш специалист даст вам быстрый обзор и ценовое предложение.",
  },
  pricing: {
    eyebrow: "Прозрачное ценообразование",
    title: "Прайс-лист",
    lead: "Понятные цены без скрытых платежей. Масштабные работы — по договорённости.",
    colService: "Наименование",
    colPrice: "Цена",
    notesTitle: "Важно знать",
    important: [
      "Минимальная цена за вызов — это стоимость первого рабочего часа.",
      "После первого часа время рассчитывается с шагом 30 минут.",
      "Работы можно выполнять и за пределами Таллинна, с добавлением транспортных расходов.",
      "Работы, не указанные в прайс-листе, выполняются по расчёту.",
      "Масштабные работы — по договорённости.",
      "При гидропромывке и вывозе стоков добавляется время на забор воды и транспорт (туда-обратно) — 30 мин.",
      "Ориентировочную стоимость уточняйте у диспетчера.",
      "Составление акта — по отдельной договорённости, от 15 €.",
      "NB! Почасовая ставка действует на одного работника.",
    ],
  },
  contactPage: {
    eyebrow: "Мы здесь, чтобы помочь",
    title: "Решаем за вас сантехнические проблемы",
    lead: "Здесь вы найдёте все необходимые данные, чтобы связаться с нами. Не стесняйтесь писать или звонить — наша дружелюбная команда всегда готова помочь.",
    reach: "Прямой контакт",
    hours: "Аварийная помощь",
    hoursValue: "Круглосуточно, 24/7",
  },
  meta: {
    homeTitle: "Torupro — Сантехнические услуги в Таллинне",
    homeDesc: "Профессиональные сантехнические решения в Таллинне и Харьюмаа. Трубопровод, засоры, сварка, гидропромывка и многое другое.",
    aboutTitle: "О нас — Torupro",
    aboutDesc: "Познакомьтесь с командой Torupro — вашим надёжным партнёром в сантехнике.",
    servicesTitle: "Услуги — Torupro",
    servicesDesc: "Полный спектр сантехнических и инженерных услуг в Таллинне и Харьюмаа.",
    pricingTitle: "Цены — Torupro",
    pricingDesc: "Прозрачный прайс-лист на сантехнические работы.",
    blogTitle: "Блог — Torupro | Советы по сантехнике",
    blogDesc: "Практические советы и руководства по сантехнике, устранению засоров и замене труб от команды Torupro в Таллинне.",
    contactTitle: "Контакты — Torupro",
    contactDesc: "Свяжитесь с Torupro — телефон, эл. почта и форма обратной связи.",
  },
};

const dictionaries: Record<Locale, Dictionary> = { et, en, ru };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? et;
}
