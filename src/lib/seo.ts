export const SITE_URL = "https://starlimpwebsite.vercel.app";
/** Hostname only — used as Google site-name fallback (must be lowercase). */
export const SITE_HOST = "starlimpwebsite.vercel.app";
export const SITE_NAME = "Star Limp";
export const BUSINESS_NAME = "Star Limp - Produtos de Limpeza";
export const DEFAULT_TITLE =
  "Star Limp · Produtos de Limpeza · Várzea Paulista, Jundiaí e região";
export const DEFAULT_DESCRIPTION =
  "Star Limp — Distribuidora de produtos de limpeza em Várzea Paulista. Atendemos casa, empresa e indústria em Jundiaí, Campo Limpo Paulista, Itupeva e Cabreúva. Detergentes, descartáveis, higiene e equipamentos com entrega rápida. Pedidos pelo WhatsApp (11) 97513-7031.";

export const KEYWORDS = [
  "produtos de limpeza Várzea Paulista",
  "produtos de limpeza Jundiaí",
  "distribuidora de produtos de limpeza Jundiaí",
  "atacado de limpeza Jundiaí",
  "Star Limp",
  "Star Limp Jundiaí",
  "Star Limp Várzea Paulista",
  "detergente atacado Jundiaí",
  "descartáveis Jundiaí",
  "produtos de higiene atacado",
  "limpeza profissional Jundiaí",
  "produtos de limpeza Campo Limpo Paulista",
  "produtos de limpeza Itupeva",
  "produtos de limpeza Cabreúva",
];

export const PHONE_E164 = "+5511975137031";
export const PHONE_LANDLINE_E164 = "+551145261003";
export const PHONE_DISPLAY = "(11) 97513-7031";
export const PHONE_LANDLINE_DISPLAY = "(11) 4526-1003";
export const EMAIL = "contato@starlimp.com.br";

export const ADDRESS = {
  city: "Várzea Paulista",
  state: "SP",
  country: "BR",
  postalCode: "13225-000",
};

export const SERVICE_AREAS = [
  "Várzea Paulista",
  "Jundiaí",
  "Campo Limpo Paulista",
  "Itupeva",
  "Cabreúva",
];

export const HOURS_OF_OPERATION = [
  {
    daysOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "08:30",
    closes: "17:00",
  },
  {
    daysOfWeek: ["Saturday"],
    opens: "08:30",
    closes: "12:00",
  },
];

/**
 * Schema.org JSON-LD for a local business with multi-city service area.
 * Uses HardwareStore as the closest LocalBusiness subtype for a cleaning
 * supplies retailer/distributor.
 */
export function buildJsonLd() {
  const sameAs: string[] = [];

  return [
    {
      "@context": "https://schema.org",
      "@type": ["LocalBusiness", "Store"],
      "@id": `${SITE_URL}/#business`,
      name: SITE_NAME,
      alternateName: [
        BUSINESS_NAME,
        "Star Limp Jundiaí",
        "Star Limp Várzea Paulista",
      ],
      url: SITE_URL,
      logo: `${SITE_URL}/star-limp-logo/header-logo-transparent.png`,
      image: `${SITE_URL}/star-limp-logo/header-logo.png`,
      description: DEFAULT_DESCRIPTION,
      telephone: PHONE_E164,
      email: EMAIL,
      priceRange: "$$",
      currenciesAccepted: "BRL",
      paymentAccepted: ["Cash", "Credit Card", "Debit Card", "PIX"],
      address: {
        "@type": "PostalAddress",
        addressLocality: ADDRESS.city,
        addressRegion: ADDRESS.state,
        addressCountry: ADDRESS.country,
        postalCode: ADDRESS.postalCode,
      },
      areaServed: SERVICE_AREAS.map((city) => ({
        "@type": "City",
        name: city,
        address: { "@type": "PostalAddress", addressRegion: "SP", addressCountry: "BR" },
      })),
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: PHONE_E164,
          contactType: "sales",
          areaServed: "BR",
          availableLanguage: ["Portuguese"],
          contactOption: "TollFree",
        },
        {
          "@type": "ContactPoint",
          telephone: PHONE_LANDLINE_E164,
          contactType: "customer service",
          areaServed: "BR",
          availableLanguage: ["Portuguese"],
        },
      ],
      openingHoursSpecification: HOURS_OF_OPERATION.map((h) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: h.daysOfWeek,
        opens: h.opens,
        closes: h.closes,
      })),
      sameAs,
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Categorias de produtos",
        itemListElement: [
          { "@type": "OfferCatalog", name: "Detergentes & Desinfetantes" },
          { "@type": "OfferCatalog", name: "Limpeza Profissional" },
          { "@type": "OfferCatalog", name: "Descartáveis" },
          { "@type": "OfferCatalog", name: "Higiene Pessoal" },
          { "@type": "OfferCatalog", name: "Equipamentos & Utensílios" },
          { "@type": "OfferCatalog", name: "Linha Automotiva" },
        ],
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      alternateName: BUSINESS_NAME,
      url: SITE_URL,
      logo: `${SITE_URL}/star-limp-logo/header-logo-transparent.png`,
      sameAs,
    },
    // WebSite.name is the primary signal Google uses for SERP site names.
    // On *.vercel.app, weak signals fall back to the parent brand "Vercel".
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: SITE_NAME,
      alternateName: [BUSINESS_NAME, SITE_HOST],
      inLanguage: "pt-BR",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${SITE_URL}/#webpage`,
      url: SITE_URL,
      name: DEFAULT_TITLE,
      description: DEFAULT_DESCRIPTION,
      inLanguage: "pt-BR",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#business` },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Início",
          item: SITE_URL,
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Onde fica a Star Limp?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A Star Limp fica em Várzea Paulista, SP. Atendemos toda a região: Várzea Paulista, Jundiaí, Campo Limpo Paulista, Itupeva e Cabreúva.",
          },
        },
        {
          "@type": "Question",
          name: "Como faço meu pedido na Star Limp?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "É só chamar no WhatsApp (11) 97513-7031 ou no telefone fixo (11) 4526-1003. Sem cadastro, sem burocracia.",
          },
        },
        {
          "@type": "Question",
          name: "A Star Limp atende empresas e condomínios?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sim. Atendemos casa, empresa, condomínio, restaurantes e indústria — com preço de atacado para quem compra em volume.",
          },
        },
        {
          "@type": "Question",
          name: "Quais produtos a Star Limp vende?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Detergentes e desinfetantes, linha de limpeza profissional, descartáveis (copos, sacos de lixo, guardanapos), higiene pessoal, equipamentos como vassouras e baldes, e produtos automotivos. Mais de 600 itens em estoque.",
          },
        },
        {
          "@type": "Question",
          name: "Qual o horário de atendimento?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Segunda a sexta das 8h30 às 17h, sábado das 8h30 às 12h.",
          },
        },
      ],
    },
  ];
}
