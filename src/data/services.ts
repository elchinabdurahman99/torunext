import type { Locale } from "@/i18n/config";

type LocalizedText = Record<Locale, string>;

export type Service = {
  slug: string;
  index: string;
  icon: string; // key used by IconForService
  title: LocalizedText;
  short: LocalizedText;
  long: LocalizedText;
};

export const services: Service[] = [
  {
    slug: "torutood",
    index: "01",
    icon: "pipe",
    title: { et: "Torutööd", en: "Plumbing works", ru: "Сантехнические работы" },
    short: {
      et: "Lekete parandus, torustike paigaldus ja hooldus kiirelt ja korrektselt.",
      en: "Leak repairs, pipe installation and maintenance — fast and tidy.",
      ru: "Устранение течей, монтаж трубопроводов и обслуживание — быстро и аккуратно.",
    },
    long: {
      et: "Torupro pakub professionaalset torutööde teenust, mis hõlmab kõike alates lekke parandamisest kuni torustike paigaldamiseni. Meie kogenud meeskond tagab kiire ja usaldusväärse teenuse, mis vastab teie vajadustele — olgu tegemist torustiku renoveerimise, uue paigalduse või hooldusega.",
      en: "Torupro provides professional plumbing services covering everything from leak repair to full pipe installation. Our experienced team delivers fast, reliable work that fits your needs — whether it is renovation, new installation or maintenance.",
      ru: "Torupro предоставляет профессиональные сантехнические услуги — от устранения течи до полного монтажа трубопровода. Наша опытная команда обеспечивает быструю и надёжную работу под ваши задачи: реновация, новый монтаж или обслуживание.",
    },
  },
  {
    slug: "elektritood",
    index: "02",
    icon: "bolt",
    title: { et: "Elektritööd", en: "Electrical works", ru: "Электромонтажные работы" },
    short: {
      et: "Elektrisüsteemide paigaldus, remont ja hooldus sertifitseeritud meistritelt.",
      en: "Installation, repair and maintenance of electrical systems by certified masters.",
      ru: "Монтаж, ремонт и обслуживание электросистем сертифицированными мастерами.",
    },
    long: {
      et: "Elektritööde valdkonnas pakume professionaalset ja usaldusväärset teenust — kõike alates elektrisüsteemide paigaldamisest kuni remondi ja hoolduseni. Meie kogenud elektrikud tagavad teie kodu või ettevõtte elektrisüsteemi ohutuse ja töökindluse.",
      en: "In the field of electrical work we provide professional, reliable service — from installation of electrical systems to repair and maintenance. Our experienced electricians ensure the safety and reliability of your home's or business's electrical system.",
      ru: "В сфере электромонтажа мы предоставляем профессиональный и надёжный сервис — от установки электросистем до ремонта и обслуживания. Наши опытные электрики обеспечивают безопасность и надёжность электросистемы вашего дома или бизнеса.",
    },
  },
  {
    slug: "ummistuse-likvideerimine",
    index: "03",
    icon: "drain",
    title: { et: "Ummistuse likvideerimine", en: "Drain unclogging", ru: "Устранение засоров" },
    short: {
      et: "Kiire ja tõhus ummistuste eemaldamine kanalisatsioonist ja torustikest.",
      en: "Fast, effective removal of blockages from sewers and pipework.",
      ru: "Быстрое и эффективное устранение засоров в канализации и трубах.",
    },
    long: {
      et: "Ummistused kanalisatsioonis või torustikes võivad olla tülikad, kuid meie pakume kiiret ja tõhusat lahendust. Meie kogenud torulukksepad kasutavad tipptasemel varustust (Rothenberger R-600), et taastada teie süsteemi normaalne töö võimalikult ruttu.",
      en: "Blockages in sewers or pipework can be frustrating, but we offer a fast, effective solution. Our experienced plumbers use top-grade equipment (Rothenberger R-600) to restore the normal operation of your system as quickly as possible.",
      ru: "Засоры в канализации или трубах могут доставлять немало хлопот, но мы предлагаем быстрое и эффективное решение. Наши опытные мастера используют оборудование высшего класса (Rothenberger R-600), чтобы как можно скорее восстановить нормальную работу системы.",
    },
  },
  {
    slug: "valistrasside-ehitus",
    index: "04",
    icon: "route",
    title: { et: "Välistrasside ehitus", en: "Outdoor pipeline construction", ru: "Строительство наружных трасс" },
    short: {
      et: "Vee- ja kanalisatsioonitrasside rajamine ning välisvõrkude ehitus.",
      en: "Construction of water and sewer mains and outdoor utility networks.",
      ru: "Прокладка водопроводных и канализационных трасс и наружных сетей.",
    },
    long: {
      et: "Pakume professionaalset välistrasside ehitusteenust, mis hõlmab erinevaid projekte — vee- ja kanalisatsioonitrasside rajamisest kuni välisvõrkude paigaldamiseni. Meie kogenud meeskond omab põhjalikke teadmisi ja vajalikku tehnikat iga projekti edukaks teostamiseks.",
      en: "We provide professional outdoor pipeline construction covering a range of projects — from laying water and sewer mains to installing outdoor utility networks. Our experienced team has the deep know-how and equipment to complete every project successfully.",
      ru: "Мы предоставляем профессиональные услуги по строительству наружных трасс — от прокладки водопроводных и канализационных магистралей до монтажа наружных сетей. Наша опытная команда обладает глубокими знаниями и техникой для успешной реализации любого проекта.",
    },
  },
  {
    slug: "pem-torude-keevitus",
    index: "05",
    icon: "weld",
    title: { et: "PEM torude keevitus", en: "PE pipe welding", ru: "Сварка ПЭ труб" },
    short: {
      et: "Polüetüleentorude professionaalne keevitus seadmega EURO SP1.",
      en: "Professional welding of polyethylene pipes with EURO SP1.",
      ru: "Профессиональная сварка полиэтиленовых труб аппаратом EURO SP1.",
    },
    long: {
      et: "Teostame PEM- (polüetüleen) torude professionaalset keevitust seadmega EURO SP1. Tagame tugevad ja lekkekindlad ühendused, mis sobivad nii surveveetorustike kui ka muude rakenduste jaoks ning vastavad kõrgetele kvaliteedinõuetele.",
      en: "We carry out professional welding of PE (polyethylene) pipes with the EURO SP1 machine. We deliver strong, leak-proof joints suitable for pressurised water mains and other applications, meeting high quality standards.",
      ru: "Выполняем профессиональную сварку ПЭ (полиэтиленовых) труб аппаратом EURO SP1. Обеспечиваем прочные и герметичные соединения, подходящие для напорных водопроводов и других применений, отвечающие высоким требованиям качества.",
    },
  },
  {
    slug: "keevitustood",
    index: "06",
    icon: "spark",
    title: { et: "Keevitustööd", en: "Welding works", ru: "Сварочные работы" },
    short: {
      et: "Metallikonstruktsioonide ja torustike keevitus — väikesest suureni.",
      en: "Welding of metal structures and pipework — from small to large.",
      ru: "Сварка металлоконструкций и трубопроводов — от малого до крупного.",
    },
    long: {
      et: "Pakume professionaalset keevitusteenust, mis hõlmab erinevaid projekte — väikestest parandustöödest kuni suuremahuliste metallikonstruktsioonide loomiseni. Meie kogenud keevitajad omavad laialdasi teadmisi ja oskusi erinevate materjalidega, sealhulgas terase ja roostevaba terasega.",
      en: "We provide professional welding services covering a range of projects — from small repairs to building large metal structures. Our experienced welders have broad knowledge and skill with various materials, including steel and stainless steel.",
      ru: "Мы предоставляем профессиональные сварочные услуги — от мелкого ремонта до создания крупных металлоконструкций. Наши опытные сварщики обладают широкими знаниями и навыками работы с различными материалами, включая сталь и нержавеющую сталь.",
    },
  },
  {
    slug: "kanalisatsiooni-videouuring",
    index: "07",
    icon: "camera",
    title: { et: "Kanalisatsiooni videouuring", en: "Sewer video inspection", ru: "Видеодиагностика канализации" },
    short: {
      et: "Täpne torustiku siseseisundi uuring kaameraga Rothenberger i2000.",
      en: "Accurate internal pipe inspection with the Rothenberger i2000 camera.",
      ru: "Точная диагностика состояния труб камерой Rothenberger i2000.",
    },
    long: {
      et: "Pakume professionaalset kanalisatsiooni videouuringu teenust, mis võimaldab täpset jälgimist ja hindamist teie kanalisatsioonisüsteemi seisukorra kohta. Kasutame kaasaegset kaamerat (Rothenberger i2000, 20 m), et tuvastada probleemid kiirelt ja vältida tarbetuid lammutustöid.",
      en: "We offer professional sewer video-inspection that allows precise monitoring and assessment of the condition of your sewer system. We use a modern camera (Rothenberger i2000, 20 m) to locate problems quickly and avoid unnecessary excavation.",
      ru: "Мы предлагаем профессиональную видеодиагностику канализации, позволяющую точно отслеживать и оценивать состояние вашей системы. Используем современную камеру (Rothenberger i2000, 20 м), чтобы быстро находить проблемы и избегать лишних земляных работ.",
    },
  },
  {
    slug: "vannitoa-remont",
    index: "08",
    icon: "bath",
    title: { et: "Vannitoa remont", en: "Bathroom renovation", ru: "Ремонт ванной" },
    short: {
      et: "Terviklik vannitoa renoveerimine — torustikust kuni viimistluseni.",
      en: "Full bathroom renovation — from pipework to finishing touches.",
      ru: "Комплексный ремонт ванной — от трубопровода до финишной отделки.",
    },
    long: {
      et: "Teostame terviklikku vannitoa renoveerimist — alates vee- ja kanalisatsioonitorustiku paigaldusest kuni plaatimise ja sanitaartehnika paigalduseni. Meie meeskond hoolitseb projekti eest algusest lõpuni, tagades kvaliteetse ja kestva tulemuse.",
      en: "We carry out complete bathroom renovations — from water and sewer pipework to tiling and the installation of sanitary fixtures. Our team manages the project from start to finish, ensuring a high-quality, lasting result.",
      ru: "Выполняем комплексный ремонт ванных комнат — от прокладки водопровода и канализации до укладки плитки и установки сантехники. Наша команда ведёт проект от начала до конца, обеспечивая качественный и долговечный результат.",
    },
  },
  {
    slug: "survepesu",
    index: "09",
    icon: "wash",
    title: { et: "Survepesu", en: "Pressure washing", ru: "Гидродинамическая промывка" },
    short: {
      et: "Kõrgsurvepesu pindadele ning kanalisatsiooni survepesu ja puhastus.",
      en: "High-pressure surface washing plus sewer jetting and cleaning.",
      ru: "Мойка поверхностей под высоким давлением и промывка канализации.",
    },
    long: {
      et: "Pakume professionaalset survepesu teenust — nii väliste pindade puhastust kui ka kanalisatsiooni survepesu. Meie kogenud meeskond kasutab kõrgsurvepesureid ja spetsiaalseid puhastuslahendusi, et eemaldada tõhusalt mustus, sete ja rasv ning taastada süsteemide läbilaskevõime.",
      en: "We offer professional pressure-washing — both cleaning of exterior surfaces and high-pressure sewer jetting. Our experienced team uses high-pressure washers and specialised cleaning solutions to effectively remove dirt, sediment and grease and restore flow capacity.",
      ru: "Мы предлагаем профессиональную гидродинамическую промывку — как мойку наружных поверхностей, так и промывку канализации под высоким давлением. Наша опытная команда использует мойки высокого давления и специальные составы, эффективно удаляя грязь, осадок и жир и восстанавливая пропускную способность.",
    },
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
