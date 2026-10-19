import { createFileRoute, ClientOnly } from "@tanstack/react-router";
import ReachMap from "@/components/ReachMap";
import { useMemo, useState } from "react";
import {
  ArrowRight,
  Phone,
  MapPin,
  Mail,
  Clock,
  Zap,
  Factory,
  Warehouse,
  Building2,
  Lightbulb,
  Trees,
  
  Store,
  Calculator,
  Wrench,
  FileCheck2,
  HardHat,
  LineChart,
  Check,
  Plus,
  Minus,
  Quote,
  Sparkles,
} from "lucide-react";


import heroImg from "@/assets/hero-warehouse.jpg";
// Reálne fotky z galérie leditsk.sk
import caseTvStudioImg from "@/assets/ledit-tvstudio.jpg";
import caseTvRtvsImg from "@/assets/ledit-tvrtvs.jpg";
import caseFitnessImg from "@/assets/ledit-fitness.jpg";
import caseMuseumImg from "@/assets/ledit-museum.jpg";
import caseHotelImg from "@/assets/ledit-hotel.jpg";
import caseFountainImg from "@/assets/ledit-fountain.jpg";
import caseFoundryImg from "@/assets/ledit-factory.jpg";
import caseHabibiImg from "@/assets/ledit-habibi.jpg";
import caseSpiritImg from "@/assets/ledit-spirit.jpg";
import leditLogoImg from "@/assets/ledit-logo.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "LEDITSK — LED osvetlenie pre haly, sklady a obce" },
      {
        name: "description",
        content:
          "Navrhujeme a inštalujeme LED osvetlenie pre priemysel, sklady, kancelárie a obce. Úspora až 70 % na elektrine, návratnosť do 3 rokov.",
      },
      { property: "og:title", content: "LEDITSK — LED osvetlenie s návratnosťou do 3 rokov" },
      {
        property: "og:description",
        content:
          "Kompletné riešenie od obhliadky cez DIALux návrh až po realizáciu a servis.",
      },
    ],
  }),
  component: Home,
});

export function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <TrustStrip />
      <SavingsCalculator />
      <Segments />
      <Process />
      <CaseStudies />
      <Testimonials />
      <Coverage />
      <Certifications />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

/* ─────────────────────────────  NAV  ───────────────────────────── */

function Nav() {
  const links = [
    { href: "#kalkulacka", label: "Kalkulačka" },
    { href: "#segmenty", label: "Riešenia" },
    { href: "#realizacie", label: "Realizácie" },
    { href: "#faq", label: "FAQ" },
    { href: "#kontakt", label: "Kontakt" },
  ];


  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <a href="#" className="flex items-center gap-2 font-display text-lg font-bold tracking-tight">
          <span className="grid h-7 w-7 place-items-center rounded-sm bg-primary text-primary-foreground">
            <Zap className="h-4 w-4" strokeWidth={2.5} />
          </span>
          LEDITSK
        </a>
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="transition-colors hover:text-foreground">
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#kontakt"
          className="hidden items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02] md:inline-flex"
        >
          Bezplatná obhliadka
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </header>
  );
}

/* ─────────────────────────────  HERO  ───────────────────────────── */

function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Moderný sklad osvetlený LED svietidlami"
          width={1920}
          height={1280}
          className="h-full w-full object-cover opacity-55"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
        <div className="absolute inset-0 grid-lines opacity-30" />
        {/* Light beams */}
        <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="beam animate-beam absolute left-[15%] top-0 h-[120%] w-[2px]" style={{ animationDelay: "0s" }} />
          <div className="beam animate-beam absolute left-[42%] top-0 h-[120%] w-[3px]" style={{ animationDelay: "1.4s" }} />
          <div className="beam animate-beam absolute left-[70%] top-0 h-[120%] w-[2px]" style={{ animationDelay: "2.8s" }} />
          <div className="beam animate-beam absolute left-[88%] top-0 h-[120%] w-[2px]" style={{ animationDelay: "4.1s" }} />
        </div>
      </div>


      <div className="relative mx-auto max-w-7xl px-6 pb-28 pt-20 md:pb-40 md:pt-32">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
        <div className="animate-fade-up flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
          <span className="h-px w-8 bg-primary" />
          LED osvetlenie pre priemysel a obce
          <span className="ml-2 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-[10px] font-semibold tracking-wider text-primary">
            <span className="animate-pulse-dot h-1.5 w-1.5 rounded-full bg-primary" />
            Voľné termíny obhliadky · júl 2026
          </span>
        </div>


        <h1 className="mt-6 max-w-4xl text-balance font-display text-5xl font-bold leading-[1.05] md:text-7xl">
          Svetlo, ktoré sa{" "}
          <span className="relative whitespace-nowrap text-primary">
            zaplatí samo
            <svg
              className="absolute -bottom-2 left-0 h-2 w-full text-primary/60"
              viewBox="0 0 200 8"
              preserveAspectRatio="none"
            >
              <path d="M0 4 Q 50 0 100 4 T 200 4" stroke="currentColor" strokeWidth="2" fill="none" />
            </svg>
          </span>
          .
        </h1>

        <p className="mt-6 max-w-xl text-balance text-lg text-muted-foreground">
          Úspora až <span className="font-semibold text-foreground">70 %</span> na elektrine,
          návratnosť bežne <span className="font-semibold text-foreground">do 3 rokov</span>.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href="#kontakt"
            className="group inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.02]"
          >
            Bezplatná obhliadka
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#kalkulacka"
            className="inline-flex items-center gap-2 rounded-md border border-border bg-card/60 px-6 py-3.5 text-sm font-semibold text-foreground backdrop-blur transition-colors hover:bg-card"
          >
            <Calculator className="h-4 w-4" />
            Svetelný audit
          </a>
        </div>

        <dl className="mt-16 grid max-w-2xl grid-cols-2 gap-8 border-t border-border pt-8">
          <Stat value="20+" label="rokov skúseností" />
          <Stat value="340+" label="zrealizovaných projektov" />
        </dl>
          </div>

          <div className="flex justify-center lg:justify-end">
            <img
              src={leditLogoImg}
              alt="LED it SHINE — logo LEDITSK"
              className="animate-fade-up w-full max-w-[300px] drop-shadow-[0_0_45px_rgba(251,146,60,0.35)] sm:max-w-[380px] lg:max-w-[460px] xl:max-w-[540px]"
            />
          </div>
        </div>
      </div>

    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="font-display text-3xl font-bold text-foreground md:text-4xl">{value}</div>
      <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{label}</div>
    </div>
  );
}

/* ────────────────────────  CALCULATOR  ──────────────────────── */

type SpaceType = {
  id: string;
  label: string;
  icon: typeof Warehouse;
  /** Watts/m² saved vs old lighting */
  savedWPerSqm: number;
  /** Default area suggestion */
  defaultArea: number;
  /** Default hours */
  defaultHours: number;
};

const SPACES: SpaceType[] = [
  { id: "sklad", label: "Výrobná hala", icon: Factory, savedWPerSqm: 18, defaultArea: 3000, defaultHours: 16 },
  { id: "vyroba", label: "Sklad", icon: Warehouse, savedWPerSqm: 14, defaultArea: 2000, defaultHours: 14 },
  { id: "kancelaria", label: "Komerčné budovy", icon: Building2, savedWPerSqm: 8, defaultArea: 600, defaultHours: 10 },
  { id: "obec", label: "Verejné osvetlenie", icon: Trees, savedWPerSqm: 6, defaultArea: 5000, defaultHours: 11 },
  { id: "sport", label: "Športovisko", icon: Lightbulb, savedWPerSqm: 12, defaultArea: 1200, defaultHours: 6 },
  { id: "cs", label: "Obchody", icon: Store, savedWPerSqm: 10, defaultArea: 800, defaultHours: 24 },
];

const EUR_PER_KWH = 0.18; // reálna sadzba z projektu SKC Foundry Štúrovo (2024)
const CO2_PER_KWH = 0.157; // kg CO₂ / kWh — SR mix 2023 (SEPS)

function SavingsCalculator() {
  const [space, setSpace] = useState<SpaceType>(SPACES[0]);
  const [area, setArea] = useState(SPACES[0].defaultArea);
  const [hours, setHours] = useState(SPACES[0].defaultHours);
  const [price, setPrice] = useState(EUR_PER_KWH);

  const result = useMemo(() => {
    const kwhSavedPerYear = (space.savedWPerSqm * area * hours * 365) / 1000;
    const eurSaved = kwhSavedPerYear * price;
    const co2Saved = (kwhSavedPerYear * CO2_PER_KWH) / 1000; // tons
    const investment = area * 22; // rough €/m² install
    const payback = eurSaved > 0 ? investment / eurSaved : 0;
    return {
      kwh: Math.round(kwhSavedPerYear),
      eur: Math.round(eurSaved),
      co2: co2Saved,
      payback,
    };
  }, [space, area, hours, price]);

  return (
    <section id="kalkulacka" className="relative border-b border-border bg-surface py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionLabel>01 · Kalkulačka</SectionLabel>
        <div className="mt-3 grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <div>
            <h2 className="font-display text-4xl font-bold leading-tight md:text-5xl">
              Koľko ušetríte ročne?
            </h2>
            <p className="mt-4 max-w-md text-muted-foreground">
              Orientačný prepočet podľa typu priestoru, plochy a prevádzkových hodín. Pre presnú
              kalkuláciu po obhliadke garantujeme konkrétne čísla v cenovej ponuke.
            </p>
            <div className="mt-8 space-y-3 text-sm text-muted-foreground">
              {[
                "Reálne dáta z 340+ realizácií",
                "Aktuálna cena elektriny v SR",
                "Bez registrácie — výsledok hneď",
              ].map((t) => (
                <div key={t} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  {t}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-border bg-card p-6 shadow-card md:p-8">
            {/* Space selector */}
            <Field label="Typ priestoru">
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                {SPACES.map((s) => {
                  const Icon = s.icon;
                  const active = s.id === space.id;
                  return (
                    <button
                      key={s.id}
                      onClick={() => {
                        setSpace(s);
                        setArea(s.defaultArea);
                        setHours(s.defaultHours);
                      }}
                      className={`group flex flex-col items-start gap-2 rounded-md border p-3 text-left transition-all ${
                        active
                          ? "border-primary bg-primary/10 text-foreground"
                          : "border-border bg-surface-elevated text-muted-foreground hover:border-primary/40 hover:text-foreground"
                      }`}
                    >
                      <Icon className={`h-4 w-4 ${active ? "text-primary" : ""}`} />
                      <span className="text-xs font-medium">{s.label}</span>
                    </button>
                  );
                })}
              </div>
            </Field>

            <Field label={`Plocha · ${area.toLocaleString("sk")} m²`}>
              <input
                type="range"
                min={100}
                max={10000}
                step={100}
                value={area}
                onChange={(e) => setArea(Number(e.target.value))}
                className="range-input"
              />
            </Field>

            <Field label={`Hodiny prevádzky / deň · ${hours} h`}>
              <input
                type="range"
                min={4}
                max={24}
                step={1}
                value={hours}
                onChange={(e) => setHours(Number(e.target.value))}
                className="range-input"
              />
            </Field>

            <Field label={`Cena elektriny · ${price.toFixed(2)} €/kWh`}>
              <input
                type="range"
                min={0.1}
                max={0.4}
                step={0.01}
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
                className="range-input"
              />
            </Field>

            <div className="mt-6 grid grid-cols-2 gap-3 rounded-lg border border-primary/30 bg-primary/5 p-4">
              <Result big value={`${result.eur.toLocaleString("sk")} €`} label="ročná úspora" />
              <Result
                big
                value={`${result.payback.toFixed(1)} r.`}
                label="návratnosť investície"
              />
              <Result value={`${result.kwh.toLocaleString("sk")} kWh`} label="ušetrenej energie" />
              <Result value={`${result.co2.toFixed(1)} t CO₂`} label="zníženie emisií" />
            </div>

            <a
              href="#kontakt"
              className="mt-6 flex items-center justify-center gap-2 rounded-md bg-primary py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.01]"
            >
              Chcem presnú kalkuláciu po obhliadke
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .range-input {
          -webkit-appearance: none;
          width: 100%;
          height: 4px;
          background: var(--color-border);
          border-radius: 999px;
          outline: none;
        }
        .range-input::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 18px;
          height: 18px;
          background: var(--color-primary);
          border-radius: 999px;
          cursor: pointer;
          box-shadow: 0 0 0 4px color-mix(in oklch, var(--color-primary) 20%, transparent);
          transition: transform 120ms;
        }
        .range-input::-webkit-slider-thumb:hover { transform: scale(1.1); }
        .range-input::-moz-range-thumb {
          width: 18px;
          height: 18px;
          background: var(--color-primary);
          border-radius: 999px;
          border: none;
          cursor: pointer;
        }
      `}</style>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="mt-5 first:mt-0">
      <div className="mb-2 flex items-center justify-between text-xs font-medium uppercase tracking-wider text-muted-foreground">
        <span>{label}</span>
      </div>
      {children}
    </div>
  );
}

function Result({ value, label, big }: { value: string; label: string; big?: boolean }) {
  return (
    <div>
      <div className={`font-display font-bold text-foreground ${big ? "text-2xl md:text-3xl" : "text-base"}`}>
        {value}
      </div>
      <div className="text-[11px] uppercase tracking-wider text-muted-foreground">{label}</div>
    </div>
  );
}

/* ────────────────────────  SEGMENTS  ──────────────────────── */

function Segments() {
  const items = [
    { icon: Factory, title: "Výrobné haly", desc: "Vysoké stropy, prašné prostredie, IP65 svietidlá." },
    { icon: Warehouse, title: "Sklady a logistika", desc: "High-bay svietidlá, regálové uličky, nakladacie rampy." },
    { icon: Building2, title: "Komerčné budovy", desc: "UGR <19, denné svetlo, senzory prítomnosti." },
    { icon: Trees, title: "Obce a mestá", desc: "Verejné osvetlenie s diaľkovým riadením a dotáciami." },
    { icon: Lightbulb, title: "Športoviská", desc: "Telocvične, ihriská, haly — bez oslňovania." },
    { icon: Store, title: "Obchody", desc: "Predajné plochy, výkladné skrine, parkoviská 24/7." },
  ];

  return (
    <section id="segmenty" className="border-b border-border py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <SectionLabel>02 · Pre koho</SectionLabel>
            <h2 className="mt-3 max-w-2xl font-display text-4xl font-bold leading-tight md:text-5xl">
              Šesť odvetví, jedno riešenie na mieru.
            </h2>
          </div>
          <p className="max-w-sm text-muted-foreground">
            Každé prostredie má iné nároky — teplota, prašnosť, výška stropu, regulácie. Riešenie navrhneme
            podľa vás, nie zo skladu.
          </p>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group relative bg-surface p-8 transition-colors hover:bg-surface-elevated"
            >
              <div className="grid h-11 w-11 place-items-center rounded-md border border-border bg-background text-primary transition-all group-hover:border-primary group-hover:shadow-glow">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-6 font-display text-xl font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
              <ArrowRight className="absolute right-6 top-8 h-4 w-4 -translate-x-2 text-muted-foreground opacity-0 transition-all group-hover:translate-x-0 group-hover:text-primary group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────  PROCESS  ──────────────────────── */

function Process() {
  const steps = [
    { icon: HardHat, title: "Obhliadka", desc: "Bezplatne, do 7 dní od dopytu. Zameriame priestor a spotrebu." },
    { icon: Lightbulb, title: "DIALux návrh", desc: "Svetelno-technický výpočet podľa normy STN EN 12464." },
    { icon: Calculator, title: "Kalkulácia úspor/svetelný audit", desc: "Konkrétne čísla — investícia, ročná úspora, návratnosť." },
    { icon: FileCheck2, title: "Cenová ponuka", desc: "Transparentne. Žiadne skryté položky, vrátane montáže." },
    { icon: Wrench, title: "Realizácia", desc: "Vlastný montážny tím. Bez prerušenia prevádzky." },
    { icon: LineChart, title: "Servis a monitoring", desc: "5-ročná záruka, monitoring reálnych úspor." },
  ];

  return (
    <section id="postup" className="relative border-b border-border bg-surface py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionLabel>03 · Ako pracujeme</SectionLabel>
        <h2 className="mt-3 max-w-3xl font-display text-4xl font-bold leading-tight md:text-5xl">
          Od prvého telefonátu po rozsvietenú halu.
        </h2>

        <ol className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {steps.map(({ icon: Icon, title, desc }, i) => (
            <li
              key={title}
              className="relative overflow-hidden rounded-xl border border-border bg-card p-6"
            >
              <div className="flex items-start justify-between">
                <Icon className="h-5 w-5 text-primary" />
                <span className="font-display text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Krok {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-6 font-display text-lg font-semibold">{title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ────────────────────────  CASE STUDIES  ──────────────────────── */

type Category = "Scénické" | "Office/múzeá" | "Priemyselné" | "Športoviská";

function CaseStudies() {
  const [activeTab, setActiveTab] = useState<Category>("Scénické");

  const tabs: Category[] = ["Scénické", "Office/múzeá", "Priemyselné", "Športoviská"];

  const featured = {
    img: caseFoundryImg,
    tag: "Zlievareň · Priemysel",
    title: "SKC Foundry Štúrovo — relamping halových svietidiel",
    location: "Štúrovo · 2024",
    desc:
      "Výmena 189 ks pôvodných svietidiel Disano 256 W za LED High-Bay 100/160 W. Meranie pred/po, DIALux návrh, montáž počas plánovanej odstávky.",
    stats: [
      { v: "56 %", l: "úspora elektriny" },
      { v: "29 026 €", l: "ročne ušetrené" },
      { v: "167 920", l: "kWh / rok menej" },
      { v: "2 419 €", l: "úspora mesačne" },
    ],
  };

  const LEDIT = "https://www.leditsk.sk";
  const P = (n: string) => `${LEDIT}/fotky10420/fotom/${n}`;
  const cases = [
    /* ── Scénické ── */
    {
      img: caseTvStudioImg,
      category: "Scénické" as Category,
      tag: "Televízna scéna",
      title: "Scéna TV JOJ — Cena je správna",
      location: "Bratislava",
      stats: [
        { v: "RGB", l: "DMX riadenie" },
        { v: "Live", l: "TV vysielanie" },
      ],
      gallery: [
        "_f_445IMG_3634.jpg",
        "_f_446IMG_3635.jpg",
        "_f_447IMG_4644.jpg",
        "_f_449Obrazok-002.jpg",
        "_f_452Obrazok-005.jpg",
        "_f_457Obrazok-010.jpg",
        "_f_461Obrazok-015.jpg",
        "_f_463Obrazok-017.jpg",
      ].map(P),
    },
    {
      img: P("_f_IMG_0487.jpg"),
      category: "Scénické" as Category,
      tag: "Televízna scéna",
      title: "Scéna TV JOJ — Take me out",
      location: "Bratislava",
      stats: [
        { v: "RGB", l: "LED moduly" },
        { v: "DMX", l: "riadenie" },
      ],
      gallery: [
        "_f_IMG_0265.jpg",
        "_f_IMG_0489.jpg",
        "_f_IMG_0491.jpg",
        "_f_IMG_0493.jpg",
        "_f_IMG_0498.jpg",
        "_f_IMG_0507.jpg",
        "_f_IMG_0508.jpg",
      ].map(P),
    },
    {
      img: caseTvRtvsImg,
      category: "Scénické" as Category,
      tag: "Televízna scéna",
      title: "Scéna RTVS — Čo ja viem?",
      location: "Bratislava",
      stats: [
        { v: "DMX", l: "riadenie" },
        { v: "Live", l: "TV vysielanie" },
      ],
      gallery: [
        "_f_IMG_0213.jpg",
        "_f_IMG_0215.jpg",
        "_f_IMG_0216.jpg",
        "_f_IMG_0219.jpg",
        "_f_IMG_0220.jpg",
      ].map(P),
    },
    {
      img: P("_f_684Obrazok-002.jpg"),
      category: "Scénické" as Category,
      tag: "Televízna scéna",
      title: "Scéna STV — vedomostná súťaž",
      location: "Bratislava",
      stats: [
        { v: "RGB", l: "scénické LED" },
        { v: "Custom", l: "profily na mieru" },
      ],
      gallery: [
        "_f_685Obrazok-003.jpg",
        "_f_687Obrazok-005.jpg",
        "_f_690Obrazok-008.jpg",
        "_f_693Obrazok-011.jpg",
        "_f_696Obrazok-014.jpg",
        "_f_700Obrazok-018.jpg",
        "_f_704Obrazok-022.jpg",
        "_f_708Obrazok-026.jpg",
        "_f_711Obrazok-033.jpg",
      ].map(P),
    },
    {
      img: P("_f_612IMG_2209.jpg"),
      category: "Scénické" as Category,
      tag: "Fasádne osvetlenie",
      title: "Herňa Nitra — fasáda",
      location: "Nitra",
      stats: [
        { v: "RGB", l: "fasádne LED" },
        { v: "IP65", l: "exteriér" },
      ],
      gallery: [
        "_f_613IMG_2215.jpg",
        "_f_614IMG_2216.jpg",
        "_f_615IMG_4148.jpg",
        "_f_616IMG_4152.jpg",
      ].map(P),
    },
    {
      img: caseFountainImg,
      category: "Scénické" as Category,
      tag: "Verejné osvetlenie",
      title: "Farebná fontána — Nitra",
      location: "Mesto Nitra",
      stats: [
        { v: "RGB", l: "podvodné LED" },
        { v: "IP68", l: "krytie" },
      ],
      gallery: [
        "_f_655DSC_5959.jpg",
        "_f_657DSC_5967.jpg",
        "_f_658DSC_5978.jpg",
      ].map(P),
    },

    /* ── Office / múzeá ── */
    {
      img: caseMuseumImg,
      category: "Office/múzeá" as Category,
      tag: "Muzeálna expozícia",
      title: "Technické múzeum Praha — Hutníctvo",
      location: "Praha, CZ",
      stats: [
        { v: "Ra > 90", l: "podanie farieb" },
        { v: "3 000 K", l: "teplota svetla" },
      ],
      gallery: [
        "_f_384IMG_1548.jpg",
        "_f_386IMG_1559.jpg",
        "_f_388IMG_1573.jpg",
        "_f_390IMG_1849.jpg",
        "_f_393IMG_1854.jpg",
        "_f_395IMG_1858.jpg",
        "_f_399IMG_1865.jpg",
        "_f_403IMG_1880.jpg",
      ].map(P),
    },
    {
      img: P("_f_466IMG_1819.jpg"),
      category: "Office/múzeá" as Category,
      tag: "Muzeálna expozícia",
      title: "Technické múzeum Praha — Baníctvo",
      location: "Praha, CZ",
      stats: [
        { v: "Ra > 90", l: "podanie farieb" },
        { v: "Expozícia", l: "riešené na kľúč" },
      ],
      gallery: [
        "_f_468IMG_1823.jpg",
        "_f_470IMG_1830.jpg",
        "_f_472IMG_1832.jpg",
        "_f_478IMG_1841.jpg",
        "_f_481IMG_1904.jpg",
        "_f_484IMG_1912.jpg",
        "_f_490IMG_1552.jpg",
        "_f_495IMG_1846.jpg",
      ].map(P),
    },
    {
      img: P("_f_425IMG_2424.jpg"),
      category: "Office/múzeá" as Category,
      tag: "Administratíva",
      title: "Kancelárske priestory — LED panely",
      location: "Slovensko",
      stats: [
        { v: "UGR < 19", l: "bez oslnenia" },
        { v: "500 lx", l: "podľa STN" },
      ],
      gallery: [
        "_f_426IMG_2425.jpg",
        "_f_428IMG_2427.jpg",
        "_f_429IMG_2429.jpg",
        "_f_430IMG_2433.jpg",
        "_f_432IMG_2435.jpg",
        "_f_433IMG_2437.jpg",
        "_f_434IMG_2438.jpg",
      ].map(P),
    },
    {
      img: caseHotelImg,
      category: "Office/múzeá" as Category,
      tag: "Hotelierstvo",
      title: "Grand Hotel Jasná — recepcia a lobby",
      location: "Demänovská Dolina",
      stats: [
        { v: "3 000 K", l: "warm white" },
        { v: "AL profily", l: "na mieru" },
      ],
      gallery: [
        "_f_618IMG_2872.jpg",
        "_f_620IMG_2874.jpg",
        "_f_622IMG_2876.jpg",
      ].map(P),
    },
    {
      img: caseHabibiImg,
      category: "Office/múzeá" as Category,
      tag: "OC Mirage",
      title: "Letecká kaviareň & reštaurácia HABIBI",
      location: "Žilina",
      stats: [
        { v: "Custom", l: "AL svietidlá" },
        { v: "Dizajn", l: "na kľúč" },
      ],
      gallery: [
        "_f_748IMG_1289.jpg",
        "_f_751IMG_1301.jpg",
        "_f_754IMG_2982.jpg",
      ].map(P),
    },
    {
      img: caseSpiritImg,
      category: "Office/múzeá" as Category,
      tag: "Gastro",
      title: "Reštaurácia SPIRIT — Žilina",
      location: "Žilina",
      stats: [
        { v: "Dimming", l: "DALI stmievanie" },
        { v: "2 700 K", l: "teplé svetlo" },
      ],
      gallery: [
        "_f_632IMG_2807.jpg",
        "_f_638IMG_2813.jpg",
        "_f_645IMG_2820.jpg",
      ].map(P),
    },

    /* ── Priemyselné ── */
    {
      img: P("_f_IMG-3937.jpg"),
      category: "Priemyselné" as Category,
      tag: "Výrobná prevádzka",
      title: "G3 Plus s.r.o. — priemyselné osvetlenie haly",
      location: "Slovensko",
      stats: [
        { v: "High-Bay", l: "LED svietidlá" },
        { v: "DIALux", l: "svetelný výpočet" },
      ],
      gallery: ["_f_IMG-3963.jpg", "_f_IMG-3964.jpg", "_f_IMG-4163.jpg"].map(P),
    },

    /* ── Športoviská ── */
    {
      img: caseFitnessImg,
      category: "Športoviská" as Category,
      tag: "Fitness & Wellness",
      title: "Aquapalace Praha — Fitness centrum",
      location: "Praha, CZ",
      stats: [
        { v: "62 %", l: "úspora" },
        { v: "2,4 r.", l: "návratnosť" },
      ],
      gallery: [
        "_f_IMG-3472.jpg",
        "_f_IMG-3473.jpg",
        "_f_IMG-3474.jpg",
        "_f_IMG-3475.jpg",
        "_f_IMG-3476.jpg",
      ].map(P),
    },
  ];


  const filtered = cases.filter((c) => c.category === activeTab);
  const showFeatured = activeTab === "Priemyselné";

  return (
    <section id="realizacie" className="border-b border-border py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <SectionLabel>04 · Realizácie</SectionLabel>
            <h2 className="mt-3 max-w-2xl font-display text-4xl font-bold leading-tight md:text-5xl">
              Tvrdé čísla, nie sľuby.
            </h2>
          </div>
          <p className="max-w-sm text-muted-foreground">
            Výber z 340+ realizácií — od priemyslu a verejného osvetlenia až po TV scény a hotely.
            Úspory overené meraním pred/po.
          </p>
        </div>

        {/* Tabs */}
        <div className="mt-10 flex flex-wrap gap-3">
          {tabs.map((tab) => {
            const active = tab === activeTab;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`rounded-lg px-5 py-2.5 text-sm font-semibold transition-all ${
                  active
                    ? "bg-primary text-primary-foreground shadow-glow"
                    : "border border-border bg-card text-foreground hover:border-primary/40 hover:text-primary"
                }`}
              >
                {tab}
              </button>
            );
          })}
        </div>

        {/* Featured case — only for Priemyselné */}
        {showFeatured && (
          <article className="mt-10 grid overflow-hidden rounded-xl border border-primary/40 bg-card lg:grid-cols-2">
            <div className="relative aspect-[4/3] overflow-hidden bg-surface-elevated lg:aspect-auto">
              <img
                src={featured.img}
                alt={featured.title}
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card/60 via-transparent to-transparent" />
              <span className="absolute left-4 top-4 rounded-sm bg-primary px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary-foreground">
                Case study · overené meraním
              </span>
            </div>
            <div className="flex flex-col justify-center p-8 md:p-10">
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <MapPin className="h-3 w-3" /> {featured.location} · {featured.tag}
              </div>
              <h3 className="mt-3 font-display text-2xl font-semibold leading-snug md:text-3xl">
                {featured.title}
              </h3>
              <p className="mt-3 text-sm text-muted-foreground">{featured.desc}</p>
              <div className="mt-6 grid grid-cols-2 gap-4 border-t border-border pt-6 md:grid-cols-4">
                {featured.stats.map((s) => (
                  <div key={s.l}>
                    <div className="font-display text-xl font-bold text-primary md:text-2xl">
                      {s.v}
                    </div>
                    <div className="mt-1 text-[10px] uppercase tracking-wider text-muted-foreground">
                      {s.l}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </article>
        )}

        <div className={`grid gap-6 sm:grid-cols-2 lg:grid-cols-3 ${showFeatured ? "mt-6" : "mt-10"}`}>
          {filtered.map((c) => (
            <article
              key={c.title}
              className="group overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-primary/40"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-surface-elevated">
                <img
                  src={c.img}
                  alt={c.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                <span className="absolute left-4 top-4 rounded-sm bg-primary px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary-foreground">
                  {c.tag}
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <MapPin className="h-3 w-3" /> {c.location}
                </div>
                <h3 className="mt-2 font-display text-base font-semibold leading-snug">
                  {c.title}
                </h3>
                <div className="mt-5 grid grid-cols-3 gap-3 border-t border-border pt-4">
                  {c.stats.map((s) => (
                    <div key={s.l}>
                      <div className="font-display text-base font-bold text-primary">{s.v}</div>
                      <div className="mt-1 text-[10px] uppercase tracking-wider text-muted-foreground">
                        {s.l}
                      </div>
                    </div>
                  ))}
                </div>
                {c.gallery && c.gallery.length > 0 && (
                  <div className="mt-4">
                    <div className="flex snap-x snap-mandatory gap-2 overflow-x-auto pb-2 [scrollbar-color:oklch(0.72_0.19_55)_transparent] [scrollbar-width:thin]">
                      {c.gallery.map((g, i) => (
                        <a
                          key={g}
                          href={g}
                          target="_blank"
                          rel="noreferrer"
                          className="group/thumb relative block aspect-[4/3] w-28 shrink-0 snap-start overflow-hidden rounded-sm border border-border bg-surface-elevated"
                          aria-label={`${c.title} — foto ${i + 2}`}
                        >
                          <img
                            src={g}
                            alt={`${c.title} — foto ${i + 2}`}
                            loading="lazy"
                            className="h-full w-full object-cover transition-transform duration-500 group-hover/thumb:scale-110"
                          />
                        </a>
                      ))}
                    </div>
                    <div className="mt-1 text-[10px] uppercase tracking-wider text-muted-foreground">
                      {c.gallery.length + 1} fotiek · posúvajte do strany
                    </div>
                  </div>
                )}

              </div>
            </article>
          ))}
        </div>

        {activeTab === "Priemyselné" && (
          <p className="mt-8 text-xs text-muted-foreground">
            Zdroj údajov SKC Foundry: interné meranie spotreby, cena elektriny 0,18 €/kWh, prevádzka
            6 200 h/rok. Kompletná galéria projektov na{" "}
            <a
              href="https://www.leditsk.sk/galeria"
              target="_blank"
              rel="noreferrer"
              className="underline hover:text-primary"
            >
              leditsk.sk/galeria
            </a>
            .
          </p>
        )}
      </div>
    </section>
  );
}


/* ────────────────────────  COVERAGE  ──────────────────────── */

function Coverage() {
  const tiers = [
    { label: "Slovensko", detail: "všetkých 8 krajov", count: "346", r: 58 },
    { label: "Česká republika", detail: "Praha, Brno, Ostrava", count: "38", r: 96 },
    { label: "Európska únia", detail: "AT · DE · HU · PL", count: "21", r: 134 },
  ];

  return (
    <section className="border-b border-border py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <div>
            <SectionLabel>06 · Pôsobenie</SectionLabel>
            <h2 className="mt-3 font-display text-4xl font-bold leading-tight md:text-5xl">
              Po celom Slovensku, Českej republike a EÚ.
            </h2>
            <p className="mt-4 max-w-md text-muted-foreground">
              Sídlime v Považskej Bystrici, ale za zákazkou ideme kamkoľvek. Vlastný montážny tím,
              vlastné lešenia a plošiny — bez subdodávateľov.
            </p>

            <div className="mt-8 space-y-3">
              {tiers.map((t, i) => (
                <div
                  key={t.label}
                  className="flex items-center gap-4 rounded-lg border border-border bg-card px-4 py-3"
                >
                  <span
                    className="h-8 w-1 rounded-full bg-primary"
                    style={{ opacity: 1 - i * 0.28 }}
                  />
                  <div className="flex-1">
                    <div className="font-display text-sm font-semibold text-foreground">
                      {t.label}
                    </div>
                    <div className="text-xs text-muted-foreground">{t.detail}</div>
                  </div>
                  <div className="font-display text-lg font-bold tabular-nums text-primary">
                    {t.count}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 inline-flex items-center gap-3 rounded-md border border-border bg-card px-4 py-3 text-sm">
              <MapPin className="h-4 w-4 text-primary" />
              Nová 134, 017 01 Považská Bystrica
            </div>
          </div>

          <div className="relative overflow-hidden rounded-xl border border-border bg-surface p-6 md:p-10">
            <div className="flex items-center justify-between gap-4">
              <div className="text-xs uppercase tracking-wider text-muted-foreground">
                Dosah realizácií
              </div>
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
                Kliknite alebo prejdite myšou po krajine
              </div>
            </div>

            <div className="mt-4">
              <ClientOnly
                fallback={
                  <div className="flex h-[320px] items-center justify-center text-sm text-muted-foreground">
                    Načítavam mapu…
                  </div>
                }
              >
                <ReachMap />
              </ClientOnly>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-4 border-t border-border pt-6 text-center">
              <div>
                <div className="font-display text-2xl font-bold text-foreground">405+</div>
                <div className="text-xs text-muted-foreground">realizácií</div>
              </div>
              <div>
                <div className="font-display text-2xl font-bold text-foreground">6</div>
                <div className="text-xs text-muted-foreground">krajín EÚ</div>
              </div>

              <div>
                <div className="font-display text-2xl font-bold text-foreground">20+</div>
                <div className="text-xs text-muted-foreground">rokov praxe</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────  CERTIFICATIONS  ──────────────────────── */

function Certifications() {
  const partners = ["PHILIPS", "OSRAM", "TRIDONIC", "LEDVANCE", "MEAN WELL", "TRILUX"];
  return (
    <section className="border-b border-border bg-surface py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center gap-6 text-center">
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Pracujeme s komponentmi od svetových výrobcov
          </div>
          <div className="grid w-full grid-cols-2 items-center gap-x-8 gap-y-6 sm:grid-cols-3 md:grid-cols-6">
            {partners.map((p) => (
              <div
                key={p}
                className="font-display text-lg font-bold tracking-[0.15em] text-muted-foreground/60 transition-colors hover:text-foreground"
              >
                {p}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────  CONTACT  ──────────────────────── */

function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    space: SPACES[0].id,
    note: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const spaceLabel = SPACES.find((s) => s.id === form.space)?.label ?? form.space;
    const subject = `Dopyt na bezplatnú obhliadku — ${form.name || "nový záujemca"}`;
    const body = [
      `Meno a firma: ${form.name}`,
      `Telefón: ${form.phone}`,
      `Email: ${form.email}`,
      `Typ priestoru: ${spaceLabel}`,
      "",
      "Popis:",
      form.note || "—",
    ].join("\n");
    window.location.href = `mailto:obchod@leditsk.sk?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  };

  return (

    <section id="kontakt" className="relative overflow-hidden py-24 md:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ background: "var(--gradient-glow)" }}
      />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <SectionLabel>07 · Začnime</SectionLabel>
            <h2 className="mt-3 max-w-xl font-display text-4xl font-bold leading-tight md:text-6xl">
              Bezplatná obhliadka do 7 dní.
            </h2>
            <p className="mt-6 max-w-md text-muted-foreground">
              Pošlite nám pár slov o priestore, ozveme sa do 24 hodín a dohodneme termín obhliadky.
              Žiadne zálohy, žiadny záväzok.
            </p>

            <div className="mt-10 space-y-5">
              <ContactRow icon={Phone} label="Telefón" value="0907 708 885" href="tel:+421907708885" />
              <ContactRow icon={Mail} label="Email" value="obchod@leditsk.sk" href="mailto:obchod@leditsk.sk" />
              <ContactRow icon={MapPin} label="Sídlo" value="Nová 134, 017 01 Považská Bystrica" />
              <ContactRow icon={Clock} label="Otváracie hodiny" value="Po–Pi · 7:00 — 15:00" />
            </div>
          </div>

          <form
            className="rounded-xl border border-border bg-card p-6 shadow-card md:p-8"
            onSubmit={handleSubmit}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Input
                label="Meno a firma"
                placeholder="Ján Novák, ABC s.r.o."
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
              <Input
                label="Telefón"
                type="tel"
                placeholder="0907 000 000"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
              />
            </div>
            <Input
              label="Email"
              type="email"
              placeholder="jan@firma.sk"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />

            <div className="mt-4">
              <Label>Typ priestoru</Label>
              <select
                value={form.space}
                onChange={(e) => setForm({ ...form, space: e.target.value })}
                className="mt-2 w-full rounded-md border border-input bg-surface px-3 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none"
              >
                {SPACES.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="mt-4">
              <Label>Krátky popis (voliteľné)</Label>
              <textarea
                rows={3}
                value={form.note}
                onChange={(e) => setForm({ ...form, note: e.target.value })}
                placeholder="Plocha cca 2 000 m², trojzmenná prevádzka…"
                className="mt-2 w-full resize-none rounded-md border border-input bg-surface px-3 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none"
              />
            </div>


            <button
              type="submit"
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-md bg-primary py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.01]"
            >
              Odoslať dopyt
              <ArrowRight className="h-4 w-4" />
            </button>
            <p className="mt-3 text-center text-xs text-muted-foreground">
              Odoslaním sa otvorí váš e-mailový klient s vyplneným dopytom pre obchod@leditsk.sk.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Phone;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-center gap-4">
      <div className="grid h-11 w-11 place-items-center rounded-md border border-border bg-card text-primary">
        <Icon className="h-4 w-4" />
      </div>
      <div>
        <div className="text-xs uppercase tracking-wider text-muted-foreground">{label}</div>
        <div className="font-display text-lg font-semibold text-foreground">{value}</div>
      </div>
    </div>
  );
  return href ? (
    <a href={href} className="block transition-opacity hover:opacity-80">
      {content}
    </a>
  ) : (
    content
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
      {children}
    </span>
  );
}

function Input({
  label,
  ...props
}: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="mt-4 first:mt-0">
      <Label>{label}</Label>
      <input
        {...props}
        className="mt-2 w-full rounded-md border border-input bg-surface px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none"
      />
    </div>
  );
}

/* ────────────────────────  FOOTER  ──────────────────────── */

function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="flex items-center gap-2 font-display text-lg font-bold">
            <span className="grid h-7 w-7 place-items-center rounded-sm bg-primary text-primary-foreground">
              <Zap className="h-4 w-4" strokeWidth={2.5} />
            </span>
            LEDITSK s.r.o.
          </div>
          <div className="text-sm text-muted-foreground">
            IČO 36 337 382 · Nová 134, 017 01 Považská Bystrica
          </div>
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} LEDITSK. Všetky práva vyhradené.
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ────────────────────────  TRUST STRIP  ──────────────────────── */

function TrustStrip() {
  const items = [
    "STN EN 12464-1",
    "Svetelný výpočet DIALux - evo",
    "Záruka 5-7 rokov",
    "Vlastný montážny tím",
    "Poistenie zodpovednosti 500 000 €",
    "ISO 9001 partneri",
    "Partner pre SSE a.s. už od roku 2016",
  ];
  return (
    <div className="overflow-hidden border-y border-primary/30 bg-surface py-5">
      <div className="flex w-max animate-marquee items-center gap-12 whitespace-nowrap text-xs font-bold uppercase tracking-[0.25em] text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.25)]">
        {[...items, ...items].map((t, i) => (
          <span key={i} className="flex items-center gap-3">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ────────────────────────  TESTIMONIALS  ──────────────────────── */

function Testimonials() {
  const items = [
    {
      quote:
        "Po prvom roku sme videli úsporu 41 000 € na faktúre. Návrh sedel s realitou na percento.",
      author: "Ing. M. Kováč",
      role: "Vedúci údržby, strojárska výroba",
    },
    {
      quote:
        "Obhliadka, ponuka aj realizácia presne podľa termínu. Hala išla bez prerušenia výroby.",
      author: "P. Hlaváč",
      role: "Konateľ, logistický sklad",
    },
  ];

  return (
    <section className="border-b border-border bg-surface py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionLabel>· Referencie klientov</SectionLabel>
        <h2 className="mt-3 max-w-3xl font-display text-4xl font-bold leading-tight md:text-5xl">
          Hovoria za nás zákazníci, nie marketing.
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {items.map((t, i) => (
            <figure
              key={i}
              className="relative flex h-full flex-col rounded-xl border border-border bg-card p-7 shadow-card"
            >
              <Quote className="h-7 w-7 text-primary/70" />
              <blockquote className="mt-5 text-base leading-relaxed text-foreground">
                „{t.quote}"
              </blockquote>
              <figcaption className="mt-6 border-t border-border pt-4">
                <div className="font-display text-sm font-semibold text-foreground">{t.author}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}


/* ────────────────────────  FAQ  ──────────────────────── */

function FAQ() {
  const faqs = [
    {
      q: "Koľko trvá realizácia LED osvetlenia v hale?",
      a: "Bežná hala 2 000–3 000 m² sa zrealizuje za 3–7 pracovných dní. Pracujeme bez prerušenia prevádzky, často v noci alebo cez víkendy.",
    },
    {
      q: "Ako presne viete garantovať úspory?",
      a: "Po zadaní vašich údajov, cene elektrickej energie a doby svietenia vám vieme exaktne vypočítať príkon svetelnej sústavy a navrhnúť optimálne riešenie.",
    },
    {
      q: "Aká je záruka na svietidlá?",
      a: "Štandardne 5 rokov na svietidlá aj drivery. Pri vybraných projektoch poskytujeme až 7-ročnú záruku. Servis riešime do 48 hodín.",
    },
    {
      q: "Vyriešite za nás aj dotáciu?",
      a: "Áno. Žiadosť vypracujeme kompletne, vrátane svetelno-technického projektu, energetického auditu a všetkých povinných príloh.",
    },
    {
      q: "Pracujete len v okolí Považskej Bystrice?",
      a: "Realizujeme zákazky po celom Slovensku. Sídlime v Považskej Bystrici, ale 80 % projektov je mimo Trenčianskeho kraja.",
    },
    {
      q: "Ako prebieha servis a údržba po inštalácii?",
      a: "Poskytujeme záručný aj pozáručný servis. V prípade poruchy reagujeme do 48 hodín. Pri väčších projektoch ponúkame preventívnu údržbu a pravidelné kontroly osvetlenia.",
    },
  ];

  return (
    <section id="faq" className="border-b border-border bg-surface py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <SectionLabel>· Časté otázky</SectionLabel>
        <h2 className="mt-3 max-w-3xl font-display text-4xl font-bold leading-tight md:text-5xl">
          Najčastejšie sa nás pýtate.
        </h2>

        <div className="mt-12 divide-y divide-border rounded-xl border border-border bg-card">
          {faqs.map((f, i) => (
            <FAQItem key={i} q={f.q} a={f.a} defaultOpen={i === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({ q, a, defaultOpen }: { q: string; a: string; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(!!defaultOpen);
  return (
    <div className="px-6">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-6 py-5 text-left"
        aria-expanded={open}
      >
        <span className="font-display text-base font-semibold text-foreground md:text-lg">{q}</span>
        <span className="grid h-8 w-8 shrink-0 place-items-center rounded-md border border-border bg-surface-elevated text-primary">
          {open ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
        </span>
      </button>
      <div
        className="grid overflow-hidden transition-all duration-300"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="min-h-0">
          <p className="pb-5 pr-12 text-sm leading-relaxed text-muted-foreground">{a}</p>
        </div>
      </div>
    </div>
  );
}

/* ────────────────────────  SHARED  ──────────────────────── */


function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
      <span className="h-px w-6 bg-primary" />
      {children}
    </div>
  );
}
