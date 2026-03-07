"use client";

import { useEffect, useMemo, useState } from "react";

const copy = {
  fr: {
    pageTitle: "Montage musical pour danseurs | DanceEdit Studio",
    pageDescription:
      "Montages musicaux professionnels pour danseurs, écoles de danse et chorégraphes. Coupes propres, mashups, timing compétition et finitions premium.",
    locale: "fr_FR",
    heroBadge: "Montages musicaux pour danseurs",
    heroTitle: "Montages musicaux professionnels pour la danse",
    heroText:
      "Coupes propres, transitions fluides, mixage entre plusieurs musiques, ajout de composition et rythmique et timing précis pour spectacles et compétitions.",
    ctaPrimary: "Demander un devis",
    ctaSecondary: "Voir les services",
    remote: "Travail à distance",
    languages: "FR / EN / ES",
    fast: "Réponse rapide",
    topCards: [
      ["Coupe musicale simple", "Coupe propre avec durée exacte pour la chorégraphie"],
      ["Montage chorégraphique", "Assemblage et mixage entre plusieurs musiques"],
      ["Timing compétition", "Structure musicale adaptée aux formats de compétition"],
      ["Montage créatif", "Ajout de rythme, impacts et dynamique musicale"],
    ],
    proof:
      "Montages musicaux utilisés par les danseurs, chorégraphes, écoles de danse, salle de gym, en spectacles et compétitions.",
    servicesTitle: "Prestations",
    servicesText: "Choisissez la formule qui correspond le mieux à votre projet.",
    plans: [
      {
        name: "Essentiel",
        price: 39,
        bullets: [
          "1 morceau",
          "Durée exacte",
          "Transitions propres",
          "Coupe musicale optimisée pour compétition",
        ],
      },
      {
        name: "Performance",
        price: 69,
        bullets: [
          "1 à 2 morceaux",
          "Transitions fluides",
          "Montée d’énergie et effets si nécessaire",
          "Montage prêt pour compétition",
        ],
      },
      {
        name: "Premium Show",
        price: 139,
        bullets: [
          "Montage créatif",
          "Mashup (à partir de plusieurs morceaux)",
          "Composition rythmique et effets si nécessaire",
          "Remplacement de pistes ou ajout d’harmoniques",
        ],
      },
      {
        name: "Sur devis",
        price: null,
        bullets: [
          "Projet complexe ou spécifique",
          "Commande pour plusieurs montages",
          "Délais urgents",
          "Tarif personnalisé",
        ],
      },
    ],
    listen: "Écouter un exemple",
    stylesTitle: "Styles de danse",
    styles: [
      "Salsa / Bachata",
      "Pole Dance",
      "Contemporary",
      "Hip-Hop / Breakdance",
      "Ballroom / Latin",
      "Street Jazz / Heels",
    ],
    howTitle: "Comment ça marche",
    how: [
      "1. Envoie ta musique et la durée souhaitée",
      "2. Explique les moments importants de la chorégraphie",
      "3. Reçois ton montage",
      "4. Ajustement si nécessaire",
    ],
    testimonialsTitle: "Témoignages",
    testimonialsText:
      "Ce que disent les danseurs et chorégraphes après avoir travaillé avec moi.",
    testimonials: [
      [
        "Montage parfait pour ma chorégraphie de compétition. Les transitions sont très propres.",
        "Dance competitor",
      ],
      ["Timing parfait pour mon passage sur scène. Très professionnel.", "Dance teacher"],
      ["Livraison rapide et montage très propre pour notre spectacle.", "Dance school"],
    ],
    trust: [
      "⭐ +20 ans d’expérience audio",
      "🏆 Montages utilisés en compétition",
      "🌍 Clients internationaux",
    ],
    contactTitle: "Contact",
    contactLead:
      "Besoin d’un montage musical pour votre chorégraphie ou votre compétition ?",
    contactFrame:
      "N’hésitez pas à me contacter, je serai ravi de vous répondre rapidement.",
    whatsapp: "WhatsApp",
    email: "Email",
    facebook: "Facebook",
    instagram: "Instagram",
    footerTitle: "DanceEdit Studio – Eddy Beneteau",
    footerText: "Montage musical pour danseurs et sportifs",
    location: "📍 Saint-Hilaire-de-Brethmas, France",
    siret: "SIRET : 518 461 165 00020",
    waMessage:
      "Bonjour Eddy, je voudrais un montage musical pour danse",
  },
  en: {
    pageTitle: "Dance Music Editing for Dancers | DanceEdit Studio",
    pageDescription:
      "Professional music edits for dancers, dance schools and choreographers. Clean cuts, mashups, competition timing and premium finishing.",
    locale: "en_GB",
    heroBadge: "Music edits for dancers",
    heroTitle: "Professional dance music edits",
    heroText:
      "Clean cuts, smooth transitions, multi-track music mixing, added composition and rhythm, and precise timing for shows and competitions.",
    ctaPrimary: "Get a quote",
    ctaSecondary: "View services",
    remote: "Remote worldwide",
    languages: "FR / EN / ES",
    fast: "Fast response",
    topCards: [
      ["Simple music edit", "Clean cut with exact duration for choreography"],
      ["Choreography edit", "Editing and mixing between multiple tracks"],
      ["Competition timing", "Music structure adapted to competition formats"],
      ["Creative edit", "Added rhythm, impacts and musical dynamics"],
    ],
    proof:
      "Music edits used by dancers, choreographers, dance schools and gyms for shows and competitions.",
    servicesTitle: "Services",
    servicesText: "Choose the option that best fits your project.",
    plans: [
      {
        name: "Essential",
        price: 39,
        bullets: [
          "1 track",
          "Exact duration",
          "Clean transitions",
          "Competition-optimized music cut",
        ],
      },
      {
        name: "Performance",
        price: 69,
        bullets: [
          "1 to 2 tracks",
          "Smooth transitions",
          "Energy build and effects if needed",
          "Competition-ready edit",
        ],
      },
      {
        name: "Premium Show",
        price: 139,
        bullets: [
          "Creative arrangement",
          "Mashup (from multiple tracks)",
          "Rhythmic composition and effects if needed",
          "Track replacement or added harmonics",
        ],
      },
      {
        name: "Custom quote",
        price: null,
        bullets: [
          "Complex or specific project",
          "Multiple edit order",
          "Urgent deadlines",
          "Custom pricing",
        ],
      },
    ],
    listen: "Listen to a sample",
    stylesTitle: "Dance styles",
    styles: [
      "Salsa / Bachata",
      "Pole Dance",
      "Contemporary",
      "Hip-Hop / Breakdance",
      "Ballroom / Latin",
      "Street Jazz / Heels",
    ],
    howTitle: "How it works",
    how: [
      "1. Send your music and target duration",
      "2. Explain the key choreography moments",
      "3. Receive your edited version",
      "4. Revision if needed",
    ],
    testimonialsTitle: "Testimonials",
    testimonialsText: "What dancers and choreographers say after working with me.",
    testimonials: [
      ["Perfect edit for my competition choreography. Transitions were super clean.", "Dance competitor"],
      ["Perfect timing for my stage performance. Very professional.", "Dance teacher"],
      ["Fast delivery and very clean edit for our show.", "Dance school"],
    ],
    trust: [
      "⭐ +20 years of audio experience",
      "🏆 Edits used in competition",
      "🌍 International clients",
    ],
    contactTitle: "Contact",
    contactLead: "Need a music edit for your choreography or competition?",
    contactFrame: "Feel free to contact me, I’ll be happy to reply quickly.",
    whatsapp: "WhatsApp",
    email: "Email",
    facebook: "Facebook",
    instagram: "Instagram",
    footerTitle: "DanceEdit Studio – Eddy Beneteau",
    footerText: "Music editing for dancers and athletes",
    location: "📍 Saint-Hilaire-de-Brethmas, France",
    siret: "SIRET : 518 461 165 00020",
    waMessage: "Hello Eddy, I would like a dance music edit",
  },
  es: {
    pageTitle: "Edición musical para bailarines | DanceEdit Studio",
    pageDescription:
      "Ediciones musicales profesionales para bailarines, escuelas de danza y coreógrafos. Cortes limpios, mashups, timing de competición y acabado premium.",
    locale: "es_ES",
    heroBadge: "Ediciones musicales para bailarines",
    heroTitle: "Ediciones musicales profesionales para danza",
    heroText:
      "Cortes limpios, transiciones suaves, mezcla entre varias músicas, composición rítmica y timing preciso para espectáculos y competiciones.",
    ctaPrimary: "Pedir presupuesto",
    ctaSecondary: "Ver servicios",
    remote: "Trabajo a distancia",
    languages: "FR / EN / ES",
    fast: "Respuesta rápida",
    topCards: [
      ["Edición simple", "Corte limpio con duración exacta para la coreografía"],
      ["Edición coreográfica", "Edición y mezcla entre varias músicas"],
      ["Timing competición", "Estructura musical adaptada a formatos de competición"],
      ["Edición creativa", "Ritmo, impactos y dinámica musical"],
    ],
    proof:
      "Ediciones musicales utilizadas por bailarines, coreógrafos, escuelas de danza y gimnasios para espectáculos y competiciones.",
    servicesTitle: "Servicios",
    servicesText: "Elige la opción que mejor se adapte a tu proyecto.",
    plans: [
      {
        name: "Esencial",
        price: 39,
        bullets: [
          "1 canción",
          "Duración exacta",
          "Transiciones limpias",
          "Corte musical optimizado para competición",
        ],
      },
      {
        name: "Performance",
        price: 69,
        bullets: [
          "1 a 2 canciones",
          "Transiciones fluidas",
          "Subida de energía y efectos si es necesario",
          "Edición lista para competición",
        ],
      },
      {
        name: "Premium Show",
        price: 139,
        bullets: [
          "Montaje creativo",
          "Mashup (a partir de varias canciones)",
          "Composición rítmica y efectos si es necesario",
          "Reemplazo de pistas o armónicos añadidos",
        ],
      },
      {
        name: "Presupuesto",
        price: null,
        bullets: [
          "Proyecto complejo o específico",
          "Pedido de varios montajes",
          "Plazos urgentes",
          "Precio personalizado",
        ],
      },
    ],
    listen: "Escuchar un ejemplo",
    stylesTitle: "Estilos de danza",
    styles: [
      "Salsa / Bachata",
      "Pole Dance",
      "Contemporary",
      "Hip-Hop / Breakdance",
      "Ballroom / Latin",
      "Street Jazz / Heels",
    ],
    howTitle: "Cómo funciona",
    how: [
      "1. Envía tu música y la duración deseada",
      "2. Explica los momentos clave de la coreografía",
      "3. Recibe tu montaje",
      "4. Ajustes si es necesario",
    ],
    testimonialsTitle: "Testimonios",
    testimonialsText: "Lo que dicen bailarines y coreógrafos después de trabajar conmigo.",
    testimonials: [
      ["Edición perfecta para mi coreografía de competición. Las transiciones son muy limpias.", "Dance competitor"],
      ["Timing perfecto para mi actuación en el escenario. Muy profesional.", "Dance teacher"],
      ["Entrega rápida y edición muy limpia para nuestro espectáculo.", "Dance school"],
    ],
    trust: [
      "⭐ +20 años de experiencia en audio",
      "🏆 Ediciones utilizadas en competición",
      "🌍 Clientes internacionales",
    ],
    contactTitle: "Contacto",
    contactLead: "¿Necesitas una edición musical para tu coreografía o competición?",
    contactFrame: "No dudes en contactarme, estaré encantado de responderte rápidamente.",
    whatsapp: "WhatsApp",
    email: "Email",
    facebook: "Facebook",
    instagram: "Instagram",
    footerTitle: "DanceEdit Studio – Eddy Beneteau",
    footerText: "Edición musical para bailarines y deportistas",
    location: "📍 Saint-Hilaire-de-Brethmas, Francia",
    siret: "SIRET : 518 461 165 00020",
    waMessage: "Hola Eddy, quiero una edición musical para baile",
  },
} as const;

const currencyRates = { EUR: 1, USD: 1.08, GBP: 0.86 };
const currencySymbols = { EUR: "€", USD: "$", GBP: "£" };

type Lang = keyof typeof copy;
type Currency = keyof typeof currencyRates;

export default function Page() {
  const [lang, setLang] = useState<Lang>("fr");
  const [currency, setCurrency] = useState<Currency>("EUR");
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const browserLang = (navigator.language || "fr").toLowerCase();
    if (browserLang.startsWith("fr")) setLang("fr");
    else if (browserLang.startsWith("es")) setLang("es");
    else setLang("en");

    const locale = (Intl.NumberFormat().resolvedOptions().locale || "fr-FR").toLowerCase();
    if (locale.includes("gb")) setCurrency("GBP");
    else if (locale.includes("us")) setCurrency("USD");
    else setCurrency("EUR");
  }, []);

  const t = copy[lang];

  useEffect(() => {
    document.title = t.pageTitle;

    const upsertMeta = (selector: string, attrs: Record<string, string>) => {
      let el = document.head.querySelector(selector) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        document.head.appendChild(el);
      }
      Object.entries(attrs).forEach(([key, value]) => el!.setAttribute(key, value));
    };

    upsertMeta('meta[name="description"]', { name: "description", content: t.pageDescription });
    upsertMeta('meta[property="og:title"]', { property: "og:title", content: t.pageTitle });
    upsertMeta('meta[property="og:description"]', { property: "og:description", content: t.pageDescription });
    upsertMeta('meta[property="og:type"]', { property: "og:type", content: "website" });
    upsertMeta('meta[property="og:locale"]', { property: "og:locale", content: t.locale });
    upsertMeta('meta[property="og:site_name"]', { property: "og:site_name", content: "DanceEdit Studio" });
    upsertMeta('meta[name="twitter:card"]', { name: "twitter:card", content: "summary_large_image" });
    upsertMeta('meta[name="twitter:title"]', { name: "twitter:title", content: t.pageTitle });
    upsertMeta('meta[name="twitter:description"]', { name: "twitter:description", content: t.pageDescription });

    let canonical = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = "https://danceedit.eddybeneteau.com/";
  }, [t]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setTestimonialIndex((i) => (i + 1) % t.testimonials.length);
    }, 4000);
    return () => window.clearInterval(timer);
  }, [t.testimonials.length]);

  const whatsappUrl = useMemo(() => {
    return `https://wa.me/33650858622?text=${encodeURIComponent(t.waMessage)}`;
  }, [t.waMessage]);

  const formatPrice = (value: number | null) => {
    if (!value) return "";
    return `${Math.round(value * currencyRates[currency])} ${currencySymbols[currency]}`;
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(255,58,205,0.18),transparent_28%),radial-gradient(circle_at_top_right,rgba(30,160,255,0.2),transparent_30%),linear-gradient(135deg,#05050B_0%,#120A24_48%,#05050B_100%)] text-white">
      <main>
        <section className="relative overflow-hidden border-b border-white/10">
          <div className="mx-auto max-w-6xl px-6 py-10 sm:py-14 lg:px-8 lg:py-20">
            <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="inline-flex self-start rounded-full border border-white/10 bg-white/5 p-1 backdrop-blur-sm">
                {(["EUR", "USD", "GBP"] as Currency[]).map((c) => (
                  <button
                    key={c}
                    onClick={() => setCurrency(c)}
                    className={`rounded-full px-2.5 py-1 text-xs transition ${currency === c ? "bg-white text-black" : "text-white/80 hover:text-white"}`}
                  >
                    {currencySymbols[c]}
                  </button>
                ))}
              </div>
              <div className="inline-flex self-start rounded-full border border-white/10 bg-white/5 p-1 backdrop-blur-sm">
                {(["fr", "en", "es"] as Lang[]).map((l) => (
                  <button
                    key={l}
                    onClick={() => setLang(l)}
                    className={`rounded-full px-2.5 py-1 text-xs uppercase transition ${lang === l ? "bg-white text-black" : "text-white/80 hover:text-white"}`}
                  >
                    {l}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <div className="text-center lg:text-left">
                <div className="mb-8 flex justify-center px-4 lg:justify-start">
                  <div className="w-full max-w-[760px] rounded-[28px] border border-white/10 bg-white/5 p-3 sm:p-4 shadow-[0_0_45px_rgba(123,60,255,0.22)] backdrop-blur-sm">
                    <img src="/logo.png" alt="DanceEdit Studio by Eddy Beneteau" className="mx-auto h-auto w-full max-w-[560px] object-contain" />
                  </div>
                </div>

                <div className="mb-4 flex justify-center lg:justify-start">
                  <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1 text-sm text-white/85 backdrop-blur-sm">
                    {t.heroBadge}
                  </div>
                </div>

                <h1 className="mx-auto max-w-xl text-3xl font-semibold leading-tight tracking-tight sm:text-5xl lg:mx-0 lg:text-6xl">
                  {t.heroTitle}
                </h1>

                <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/75 sm:text-lg sm:leading-8 lg:mx-0">
                  {t.heroText}
                </p>

                <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
                  <a href="#contact" className="rounded-2xl bg-[linear-gradient(90deg,#7B3CFF,#FF3ACD,#1EA0FF)] px-6 py-3 text-sm font-medium text-white shadow-[0_0_24px_rgba(123,60,255,0.28)] transition hover:opacity-90">
                    {t.ctaPrimary}
                  </a>
                  <a href="#services" className="rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white/90 backdrop-blur-sm transition hover:bg-white/10">
                    {t.ctaSecondary}
                  </a>
                </div>

                <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-white/60 lg:justify-start">
                  <span>✓ {t.remote}</span>
                  <span>✓ {t.languages}</span>
                  <span>✓ {t.fast}</span>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {t.topCards.map(([title, desc]) => (
                  <div key={title} className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_0_32px_rgba(123,60,255,0.18)] backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:bg-white/[0.07]">
                    <div className="text-lg font-medium">{title}</div>
                    <div className="mt-2 text-sm text-[#d7b8ff]">{desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="mx-auto mt-6 max-w-5xl px-6 text-center">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_0_32px_rgba(123,60,255,0.16)] backdrop-blur-md">
            <p className="text-lg text-white/85">{t.proof}</p>
          </div>
        </div>

        <section id="services" className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
          <div className="mb-10 max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight">{t.servicesTitle}</h2>
            <p className="mt-3 text-white/70">{t.servicesText}</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {t.plans.map((plan) => (
              <div key={plan.name} className="rounded-3xl border border-white/10 bg-white/5 p-7 shadow-[0_0_32px_rgba(123,60,255,0.18)] backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:bg-white/[0.07]">
                <div className="text-xl font-semibold">{plan.name}</div>
                <div className="mt-2 text-3xl font-bold">{formatPrice(plan.price)}</div>
                {plan.price && (
                  <div className="mt-5">
                    <a href="#" className="inline-flex items-center rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-xs text-white/85 transition hover:bg-white/15">
                      {t.listen}
                    </a>
                  </div>
                )}
                <ul className="mt-5 space-y-3 text-sm text-[#d7b8ff]">
                  {plan.bullets.map((b) => <li key={b}>• {b}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="border-y border-white/10 bg-white/5 backdrop-blur-md">
          <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-2">
              <div>
                <h2 className="text-3xl font-semibold tracking-tight">{t.stylesTitle}</h2>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {t.styles.map((x) => (
                    <div key={x} className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-[0_0_22px_rgba(123,60,255,0.14)] backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:bg-white/[0.07]">
                      {x}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-semibold tracking-tight">{t.howTitle}</h2>
                <div className="mt-6 space-y-4 text-[#d7b8ff]">
                  {t.how.map((step) => (
                    <div key={step} className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-[0_0_22px_rgba(123,60,255,0.14)] backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:bg-white/[0.07]">
                      {step}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
          <div className="mb-10 max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight">{t.testimonialsTitle}</h2>
            <p className="mt-3 text-white/70">{t.testimonialsText}</p>
          </div>

          <div className="mx-auto max-w-2xl">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center shadow-[0_0_25px_rgba(123,60,255,0.20)] backdrop-blur-md">
              <div className="text-lg text-[#FF3ACD]">★★★★★</div>
              <p className="mt-4 text-white/80">{t.testimonials[testimonialIndex][0]}</p>
              <p className="mt-4 text-xs text-white/50">— {t.testimonials[testimonialIndex][1]}</p>
            </div>
            <div className="mt-4 flex justify-center gap-2">
              {t.testimonials.map((_, i) => (
                <span key={i} className={`h-2 w-2 rounded-full ${i === testimonialIndex ? "bg-[#FF3ACD]" : "bg-white/20"}`}></span>
              ))}
            </div>
          </div>
        </section>

        <div className="mx-auto mb-0 mt-6 max-w-4xl px-6 text-center">
          <div className="flex flex-col items-center gap-2 text-sm text-white/75">
            {t.trust.map((item) => <span key={item}>{item}</span>)}
          </div>
        </div>

        <section id="contact" className="mx-auto max-w-4xl px-6 py-12 text-center lg:px-8">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{t.contactTitle}</h2>
          <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_0_32px_rgba(123,60,255,0.18)] backdrop-blur-md">
            <p className="text-base text-white/85 sm:text-lg">{t.contactLead}</p>
            <p className="mt-4 font-semibold text-white">{t.contactFrame}</p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <a href="mailto:Eddybeneteau@gmail.com" className="rounded-2xl bg-gradient-to-r from-blue-500 to-blue-600 px-6 py-3 text-sm font-semibold text-white shadow hover:from-blue-600 hover:to-blue-700">{t.email}</a>
              <a href="https://m.me/EddyBeneteaucommunication" target="_blank" rel="noreferrer" className="rounded-2xl bg-gradient-to-r from-indigo-500 to-indigo-700 px-6 py-3 text-sm font-semibold text-white shadow hover:from-indigo-600 hover:to-indigo-800">{t.facebook}</a>
              <a href="https://www.instagram.com/eddybeneteau/" target="_blank" rel="noreferrer" className="rounded-2xl bg-gradient-to-r from-pink-500 to-rose-500 px-6 py-3 text-sm font-semibold text-white shadow hover:from-pink-600 hover:to-rose-600">{t.instagram}</a>
            </div>
          </div>
        </section>
      </main>

      <a href={whatsappUrl} target="_blank" rel="noreferrer" className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#7B3CFF] via-[#FF3ACD] to-[#1EA0FF] px-4 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(123,60,255,0.30)] transition hover:scale-105 hover:opacity-90" aria-label="WhatsApp">
        <span className="text-base">💬</span>
        <span>{t.whatsapp}</span>
      </a>

      <footer className="mt-6 border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-4 text-center text-sm text-white/55">
          <p className="font-semibold text-white/80">{t.footerTitle}</p>
          <p>{t.footerText}</p>
          <p>{t.location}</p>
          <p>{t.siret}</p>
        </div>
      </footer>
    </div>
  );
}
