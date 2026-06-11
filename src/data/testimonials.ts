export type Testimonial = {
  name: string;
  location: string;
  rating: number;
  text: Record<"et" | "en" | "ru", string>;
};

export const testimonials: Testimonial[] = [
  {
    name: "Marek K.",
    location: "Kesklinn, Tallinn",
    rating: 5,
    text: {
      et: "Toru lõhkes pühapäeva õhtul ja nad olid kohal vähem kui tunniga. Kiire, viisakas ja korrektne töö — soovitan soojalt!",
      en: "A pipe burst on a Sunday evening and they were here in under an hour. Fast, polite and tidy work — highly recommended!",
      ru: "Труба прорвалась в воскресенье вечером, и они приехали меньше чем за час. Быстро, вежливо и аккуратно — рекомендую!",
    },
  },
  {
    name: "Liina P.",
    location: "Mustamäe, Tallinn",
    rating: 5,
    text: {
      et: "Vahetasid kogu vannitoa torustiku. Hind oli täpselt selline nagu lubatud, üllatusi ei tulnud. Väga professionaalne meeskond.",
      en: "They replaced all the plumbing in our bathroom. The price matched the quote exactly, no surprises. A very professional team.",
      ru: "Заменили всю сантехнику в ванной. Цена точно соответствовала смете, без сюрпризов. Очень профессиональная команда.",
    },
  },
  {
    name: "Andrei S.",
    location: "Lasnamäe, Tallinn",
    rating: 5,
    text: {
      et: "Ummistus köögis oli aastaid tagasi tulnud, aga seekord lahendati see lõplikult ja korralikult. Aitäh kiire abi eest!",
      en: "We'd had a recurring kitchen blockage for years, but this time it was fixed properly for good. Thanks for the quick help!",
      ru: "Засор на кухне возвращался годами, но в этот раз его устранили окончательно и качественно. Спасибо за оперативную помощь!",
    },
  },
  {
    name: "Kadri T.",
    location: "Nõmme, Tallinn",
    rating: 4,
    text: {
      et: "Korralik ja sõbralik teenindus, tulid kokkulepitud ajal. Soojaveeboileri vahetus läks sujuvalt ja maja jäi puhtaks.",
      en: "Solid, friendly service and they arrived on time. The water heater replacement went smoothly and the home was left clean.",
      ru: "Аккуратный и дружелюбный сервис, приехали точно в срок. Замена бойлера прошла гладко, в доме осталась чистота.",
    },
  },
  {
    name: "Toomas R.",
    location: "Viimsi, Harjumaa",
    rating: 5,
    text: {
      et: "Tellisime survepesu ja kanalisatsioonitorude ülevaatuse kaameraga. Kõik selgitati arusaadavalt ja probleem leiti kiirelt.",
      en: "We ordered pressure washing and a camera inspection of the sewage pipes. Everything was explained clearly and the issue was found fast.",
      ru: "Заказали гидропромывку и осмотр канализационных труб камерой. Всё понятно объяснили и быстро нашли проблему.",
    },
  },
  {
    name: "Jelena M.",
    location: "Õismäe, Tallinn",
    rating: 5,
    text: {
      et: "Avariiabi öösel — vastasid telefonile kohe ja olid kahekümne minutiga kohal. Suur tänu, et päästsite meie kodu!",
      en: "Emergency call-out at night — they answered the phone right away and arrived within twenty minutes. Thank you for saving our home!",
      ru: "Аварийный вызов ночью — сразу ответили на звонок и приехали за двадцать минут. Огромное спасибо, что спасли наш дом!",
    },
  },
];
