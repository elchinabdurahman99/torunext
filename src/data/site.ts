export const site = {
  name: "Torupro",
  legalName: "BaMu Ehitus OÜ",
  regCode: "16986440",
  address: "Pae tn 20, Tallinn, Harjumaa 11414",
  addressShort: "Pae tn 20, Tallinn",
  email: "info@torupro.ee",
  phone: "+372 56 058 888",
  phoneHref: "tel:+37256058888",
  emailHref: "mailto:info@torupro.ee",
  // Tallinn center coordinates for the map embed
  mapEmbed:
    "https://www.google.com/maps?q=Pae%2020%2C%20Tallinn%2C%20Harjumaa&output=embed",
  socials: [
    { label: "Facebook", href: "https://www.facebook.com/" },
    { label: "Instagram", href: "https://www.instagram.com/" },
  ],
};

export type SiteInfo = typeof site;
