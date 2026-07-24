# Lusansa Property Services — Website Guide

Brand guideline and technical guide for lusansa.com (or .co.ug — see §19).
This is the document we follow. When a design or code decision comes up, the answer
should either be in here or get added in here. Last updated: 2026-07-14.

---

## How to read this

Part I is the brand: what the site should feel like and why. Part II is the tech:
how it gets built. The two parts share one premise, so it's stated once, up front:

**The land business in Uganda runs on fear.** Every buyer — first-timer in Kampala,
family saving for years, engineer in Stockholm sending money home — carries the same
story about someone who bought air: a plot sold twice, a forged title, a boundary
that moved. Lusansa's entire commercial advantage is being the company that removes
that fear. So the website is not a brochure. It is **evidence**. Every section, every
photo, every technical choice gets measured against one question:

> *Does this make a skeptical buyer trust us more, or less?*

Slow page? Less. Stock photo of a handshake? Less. Real GPS coordinates printed under
a real photo of a real plot? More. That's the test. Use it constantly.

---

# Part I — Brand

## 1. The idea

The logo already contains the whole brand; we just have to take it seriously.

It's a **weaver bird building a nest**. Here's why that's not just a cute picture:
the male weaver builds the nest, and then the female *inspects* it. She pulls at
the knots. If the work is shoddy, she rejects it and he tears it down and starts
over. The weaver is the one animal in East Africa whose work is *judged before it
is accepted*.

That is literally Lusansa's business model. Plan the land properly, then invite
inspection — GPS coordinates, satellite imagery, site visits, photo reports. Build
so that the inspection passes.

So the brand essence, in one line:

> **Built to be inspected.**

That's an internal compass, not necessarily a public tagline (the public tagline is
the Luganda one on the logo — see §8). But every piece of the site should survive
the weaver test: could a skeptical buyer pull at this knot? If we say "well-planned,"
show the plan. If we say "verified," show the coordinates. Claims without evidence
are exactly what scammers produce; we never publish one.

Three brand pillars fall out of this:

1. **We plan before we sell.** Terrain, drainage, access roads — the anti-"random
   plot cutting" position from the company profile. This is the product story.
2. **We show, you verify.** GIS, GPS, satellite, photo reports. This is the trust
   story, and it's the strongest thing Lusansa has — especially for diaspora buyers
   who cannot stand on the land themselves.
3. **We stay after the sale.** Monitoring, maintenance, construction support.
   This is the relationship story: land companies vanish after payment; Lusansa
   doesn't.

## 2. Voice and tone

> **Copy rules addendum (2026-07-15):** every piece of published copy must also
> pass `COPY_RULES.md` in this folder — short active sentences, no semicolons,
> no em dashes, banned-word list. Where that file and this section conflict,
> that file wins.

The voice of someone who walks the land in boots, not someone who sells it in a
suit. Calm, specific, unhurried. A surveyor's confidence: we don't need to persuade
you, because we can *show* you.

**Rules:**

- **Numbers beat adjectives.** Not "spacious plots in a prime location" —
  "50×100 ft plots, 800 m from the Mukono–Katosi road." An adjective is a claim;
  a number is evidence.
- **Plain verbs.** We survey, we mark, we plan, we visit, we report. Never
  "we leverage", "we deliver solutions", "we are passionate about".
- **No exclamation marks.** Ever. Excitement reads as sales pressure, and sales
  pressure reads as scam. The reader's fear goes down when our voice stays level.
- **Say the uncomfortable thing.** A page that says "Questions to ask any land
  seller — including us" builds more trust than ten pages of self-praise. We can
  afford honesty; our competitors can't. Use that.
- **Sentence case everywhere.** Headlines, buttons, labels. SHOUTING CAPS are for
  roadside plot banners; we're the opposite of a roadside banner.
- **Second person, first person plural.** "You" and "we". Never "the client",
  never "Lusansa is pleased to…"

**Vocabulary:**

| Use | Avoid |
|---|---|
| plots, land, site, boundary | real estate opportunities, listings, units |
| verify, inspect, confirm | validate synergies, due-diligence solutions |
| planned, surveyed, marked | premium, luxury, exclusive, prime |
| visit, walk the land | book a discovery call |
| price, payment plan | investment opportunity, unbeatable deal |
| we'll send photos and coordinates | cutting-edge GIS technology stack |

**Tone shifts by page, voice doesn't.** On a plot page: factual, almost terse.
In a guide article: patient, generous, teaching. On the verification page:
reassuring but procedural — like a doctor explaining a test, not a friend saying
"trust me". The WhatsApp pre-filled messages: warm and short, written the way a
person actually types.

**Before/after, to calibrate:**

> ❌ "Lusansa offers premium serviced plots in high-potential locations with
> unbeatable value and flexible payment options!"

> ✅ "Six plots remaining at Nakassajja. 50×100 ft, murram access road in place,
> 15 minutes from Gayaza town. From UGX 25M, payable over 12 months. Send us a
> message and we'll share the GPS coordinates so you can see exactly where it is."

The second one converts better *because* it sounds like it has nothing to hide.

## 3. Color

Sampled from the logo itself (not approximated), then tuned into a working system.
The palette is the East African landscape the company actually works in: vegetation
green, soil brown, dry-season gold, and paper the color of manila folders in a land
office — warm, never clinical.

### Core palette

| Token | Hex | Source / role |
|---|---|---|
| `green-700` (primary) | `#107800` | Wordmark green, sampled from logo. Primary actions, links, brand moments. 5.7:1 on white — passes AA for body text. |
| `green-800` | `#0B5A00` | Darkened step. Hover states, small text on light backgrounds. |
| `green-900` | `#07400A` | Near-black green. Dark sections, footer background. |
| `brown-700` | `#584838` | "Property Services" subtitle brown, sampled. Secondary text, borders on warm surfaces. 8.7:1 on white. |
| `brown-800` | `#503018` | Branch/nest brown, sampled. Headings on light backgrounds when green would be too loud. |
| `gold-600` | `#A3720A` | Tagline/bird-head ochre, sampled. Accent ONLY: eyebrow labels, price highlights, small decorative details. |
| `gold-700` | `#8A5F08` | Darkened gold for when gold must carry small text (raw `gold-600` is 4.25:1 — fails AA at body size). |
| `paper` | `#FAF8F2` | Default page background. Warm off-white — never pure `#FFFFFF` for full sections. |
| `paper-dark` | `#F1EDE2` | Alternate section background, card fills. |
| `ink` | `#221E1A` | Body text. Warm near-black (pure black looks harsh on warm paper). |
| `ink-soft` | `#5C554C` | Captions, metadata, timestamps. |

Status colors for plot availability — muted, not traffic-light neon:
available `green-700`, reserved `#B07B10`, sold `#8C4A32` (spent earth, not alarm red — a sold plot is a success story, not an error).

### Usage rules

- **Proportions: roughly 70% paper, 20% ink/brown, 8% green, 2% gold.** The site
  should read as a warm, calm document with green authority and rare gold glints —
  not a green website. If a screen looks "very green", it's wrong.
- **Green is for action and identity.** Buttons, links, the logo, key data points.
  Not for large background washes except the footer/dark sections (`green-900`).
- **Gold is jewelry.** Eyebrow labels above headlines, the tagline, price accents.
  If gold appears more than twice per screen, remove one.
- **Never** green-on-gold or gold-on-green text. Both live on paper or on
  `green-900` (use `paper` text there).
- **No gradients. No glassmorphism. No colored shadows.** Flat color, real borders
  (`1px solid` brown at low opacity), and shadow only where something genuinely
  floats (sticky mobile CTA bar). This single rule kills 80% of AI-slop look.

## 4. Typography

Two families, both free, both self-hosted (§15 covers loading).

**Headlines: Fraunces** (variable font, Google Fonts). A serif with warmth and a
slightly old-fashioned backbone — it feels like a land title document that went to
design school. Use the `SOFT` axis low (0–20) and optical size high for display.
It photographs beautifully next to maps and coordinates.

**Body and UI: Switzer** (Fontshare). A grotesque that stays out of the way but
has more humanity than Inter (which is the default face of AI slop right now —
that alone disqualifies it). Weights: 400, 500, 600 only.

**Rules:**

- Fraunces for `h1`–`h3` and pull-quotes. Switzer for everything else, including
  `h4` and below. Never Fraunces at small sizes.
- **Tabular figures (`font-variant-numeric: tabular-nums`) for every price, plot
  size, coordinate, and phone number.** Data that lines up looks surveyed; data
  that wobbles looks improvised. This detail matters more than it seems.
- Type scale (desktop / mobile): display 56/36, h1 44/32, h2 32/26, h3 24/20,
  body 17/16, small 14, caption 13. Line-height 1.15 for display, 1.6 for body.
- Body text column: max 68ch. Long lines are the fastest way to look like a
  template.
- Eyebrow labels (small `gold-700` or `brown-700` text above headlines):
  13px, weight 600, letter-spaced +0.06em, uppercase allowed *only here*.
- GPS coordinates get styled as a distinct element site-wide: Switzer 500,
  tabular, `brown-800`, with a small map-pin glyph. They're a brand signature —
  treat them like a hallmark stamp, and make them tappable (opens the map).

## 5. Photography and imagery

Photography is where trust is won or lost, and where this site will look most
different from competitors — because we'll use **real photos of real plots**, and
almost nobody in this market does.

**The look:** East African daylight, honestly graded. Early morning or late
afternoon (the surveyor's hours — nobody walks land at noon). Red murram roads,
green vegetation, wide skies. Slight warmth in the grade, consistent across all
images. No heavy filters, no HDR crunch, no desaturated "moody" looks.

**What to shoot (a standing shot list for every new development):**

1. Wide drone shot showing the whole layout with visible access roads
2. Ground-level view down a marked access road
3. A boundary marker/peg, close, in focus, with the land behind it
4. The surveyor or team member actually working — measuring, marking, walking
5. Context: the nearest trading center, school, or main-road junction
6. One quiet detail — a mango tree on the plot, water flow channel, soil close-up

**The trust device: captions.** Every land photo carries a caption with place,
date, and GPS coordinates: *"Nakassajja, Block 4 — 0°28′N 32°41′E, photographed
March 2026."* A dated, located photo is a checkable claim. This is the weaver
test in visual form, and it should be a rigid convention.

**Never use:** stock photos of handshakes, models in hard hats, Nairobi/Dubai
skylines, generic aerial suburbia from another continent, or AI-generated imagery
of land or people — one reverse-image search by a skeptical buyer and the entire
trust story collapses. If we don't have a real photo yet, use a map or a survey
plan drawing instead. **Maps are first-class imagery** here: a clean plot-layout
diagram in brand colors is more persuasive than a mediocre photo.

People: real staff and, with permission, real clients on site visits. Faces build
trust in this market — but only real ones, named where possible.

## 6. Layout and UX principles

Mobile is the primary canvas. Most Ugandan traffic is Android phones on measured
data plans; diaspora traffic is heavier on desktop but converts through the phone
anyway (WhatsApp). Design mobile-first, and treat data cost as a UX concern —
a 4MB hero image is rude in Kampala even when it's invisible in Stockholm.

**Principles:**

- **One idea per screen.** Each viewport-height of scroll makes one point (here's
  the land / here's how verification works / here's what it costs). No dense
  three-column feature grids.
- **Editorial, not dashboard.** The site reads top-to-bottom like a well-set
  document: generous whitespace, strong typographic hierarchy, full-bleed
  photography between text sections. Cards exist for exactly one thing: plot
  listings. Nothing else gets carded.
- **No emoji as icons. No icon soup.** Where an icon is genuinely needed
  (map pin, WhatsApp, phone), use one consistent stroke-style set, `brown-700`,
  small. The company profile doc uses 🧱🏡🛰️ — those do not migrate to the site.
- **The primary CTA is always WhatsApp**, styled in `green-700`, worded
  specifically: "Ask about this plot on WhatsApp", not "Get in touch". On mobile,
  plot pages get a sticky bottom bar: price on the left, WhatsApp button on the
  right. It's the single highest-leverage conversion element on the site.
- **Motion: almost none.** Subtle fade-up on scroll at most, 200ms, once,
  respecting `prefers-reduced-motion`. No parallax, no scroll-jacking, no
  number-counter animations ("500+ HAPPY CLIENTS" spinning up is pure slop and
  reads as fake).
- **Trust strip, not testimonial carousel.** Verification steps, company
  registration number, physical office location, years operating — stated plainly
  in the footer of every page. Testimonials only with full name, location, and
  photo, or not at all; anonymous praise is worse than silence.

## 7. Logo usage

- Clear space: the height of the wordmark's "L" on all sides. Minimum width 140px
  on screen; below that, use the bird-and-nest mark alone (needs to be cut as its
  own asset).
- The logo sits on `paper` or white only. For dark sections, we need a
  reversed version — until that exists, dark sections carry the wordmark set in
  Fraunces instead of the logo image.
- **Status (2026-07-15):** a transparent PNG now exists at `web/static/logo.png`
  and is used in the top nav. It is 120×75, so it renders soft on retina screens.
  Still needed from the designer: the vector source (AI/SVG) or a transparent PNG
  at 2000px+. That unlocks a crisp nav logo, favicon, OG images and dark-section
  usage. If unreachable, we redraw it as SVG — the geometry is simple enough.

## 8. The tagline

*"Akezimbira, tekaba kato"* — the Luganda line from the logo. It stays in Luganda
on the site: it signals local rootedness to Ugandan buyers and authenticity to
diaspora buyers, and it's the one line of the brand that no competitor can copy
into English.

**Before launch: confirm the exact meaning and preferred English rendering with
the owners.** We do not publish our own translation of a Luganda proverb — getting
it slightly wrong in public is the kind of small crack the weaver test exists to
catch. Typeset it in Fraunces italic, `gold-700`, and pair it with the owners'
English rendering where context needs it.

---

# Part II — Tech

## 9. Stack

| Layer | Choice | Why |
|---|---|---|
| Framework | **SvelteKit 2 + Svelte 5, TypeScript** | You know it; smallest JS payload of the major frameworks; prerendering is first-class. |
| Styling | **Tailwind CSS v4** | Design tokens from §3/§4 as CSS custom properties in `@theme`; fast iteration; easy to keep consistent. |
| Content | **Sanity** (project `sp1vpxdb`, dataset `production`) | See §11. Standalone Studio in `studio/`, connected via `@sanity/sveltekit`. Decided 2026-07-15. |
| Hosting | **Netlify**, `@sveltejs/adapter-netlify` | Your choice; free tier covers everything including forms. |
| Maps | **Leaflet + OpenStreetMap** | Free, no API key, no billing surprise. Lazy-loaded (§17). |
| Analytics | **GoatCounter** (free) or Plausible (paid, nicer) | Privacy-friendly, ~1KB script, no cookie banner needed — which also means no consent-popup slop on first visit. |
| Images | `@sveltejs/enhanced-img` | Build-time AVIF/WebP + srcset with zero runtime cost. |

**Rendering rule (revised with the Sanity decision): SSR via Netlify functions,
with cache headers doing the CDN work.** Pages fetch from Sanity in `load`
functions at request time, so a plot published in the Studio is live immediately
— no rebuild step for the owners to wait on — and preview mode works. The
performance budget (§15) still applies: set `cache-control: public, max-age=60,
stale-while-revalidate=3600`-class headers on content pages so Netlify's CDN
absorbs repeat traffic, and keep the Sanity client on `useCdn: true` for
non-preview reads. If SSR ever proves too slow on Kampala connections, the
fallback is per-route prerender + a Sanity webhook triggering Netlify builds.

## 10. Project structure

```
src/
  lib/
    components/        # PlotCard, WhatsAppButton, Coordinates, TrustStrip,
                       # SectionHeading, StickyPlotBar, Figure (photo+caption)
    content/
      plots/           # one .md per plot (frontmatter = data, body = description)
      guides/          # one .md per guide article
      site.ts          # contact numbers, WhatsApp number, office address,
                       # registration number — single source of truth
    content.ts         # loads/validates content, exports typed accessors
                       # (THE swap point if Sanity comes later — see §11)
    seo.ts             # meta + JSON-LD builders
    whatsapp.ts        # wa.me link builder (§16)
  routes/
    +layout.svelte     # header, footer, trust strip
    +page.svelte                    # home
    projects/+page.svelte           # all projects/estates
    projects/[slug]/+page.svelte    # project detail: location, map, media, its plots
    plots/+page.svelte              # all plots, filterable by status/location
    plots/[slug]/+page.svelte       # plot detail — the money page
    services/+page.svelte           # all 8 services, one page, anchored sections
    verification/+page.svelte      # the differentiator — its own page
    about/+page.svelte
    guides/+page.svelte
    guides/[slug]/+page.svelte
    contact/+page.svelte
    sitemap.xml/+server.ts
static/
  robots.txt, favicon set, og-default.jpg
```

Services live on **one page with anchored sections**, not eight thin pages —
eight near-empty pages is worse for SEO than one substantial one. Verification
gets promoted out of the services list to its own page because it's the flagship.

## 11. Content architecture

**Decision (2026-07-15): Sanity from day one.** Project `sp1vpxdb`, dataset
`production`. The repo is a monorepo: standalone Studio in `studio/`, SvelteKit
app in `web/`.

- Page copy still lives in the page components — it changes rarely and you edit it.
- Plots and guides are Sanity documents. The owners add a plot with photos in
  the Studio and it's live on publish. Required-field validation lives in the
  schema (`studio/schemaTypes/plot.ts`) — a plot can't be published without
  price, coordinates, title type, or captioned+dated photos, so the weaver test
  is enforced at the editing surface.
- The web app integrates via **`@sanity/sveltekit`** (official, Svelte 5):
  clients and queries in `web/src/lib/sanity/`, preview + query-loader hooks in
  `hooks.server.ts`, providers in the root layout. GROQ queries and the `Plot`/
  `Guide` types in `queries.ts` are the single content interface — new pages
  consume those, never raw clients.
- Preview mode (`/preview/enable`) needs a viewer-scope `SANITY_API_READ_TOKEN`
  in Netlify env vars; it's optional until the owners want draft previews.
- CORS: when enabling preview/live queries, add the local dev origin and the
  production domain at sanity.io/manage → API → CORS origins.

## 12. Plot data model

```ts
type PlotStatus = 'available' | 'reserved' | 'sold';

interface Plot {
  slug: string;                // 'nakassajja-block4-p12'
  title: string;               // 'Nakassajja Block 4, Plot 12'
  status: PlotStatus;
  project: Reference;          // -> project document (2026-07-15: replaced the
                               //    development + district strings; plots derive
                               //    district from their project via GROQ)
  nearestLandmark: string;     // '15 min from Gayaza town'
  sizeText: string;            // '50×100 ft'
  sizeSqm: number;             // 464 — for sorting/schema.org
  priceUGX: number;            // 25_000_000
  installments?: {             // omit if cash-only
    months: number;
    depositUGX: number;
  };
  coordinates: { lat: number; lng: number };
  titleType: 'mailo' | 'freehold' | 'leasehold';  // buyers ask first;
                                                   // answering unprompted = trust
  photos: { src: string; caption: string; date: string }[];  // caption per §5
  features: string[];          // 'murram access road', 'water on the way', …
  // markdown body = the honest description, including the plot's drawbacks
}
```

Every field here exists because a buyer asks about it or a search engine rewards
it. Don't add fields speculatively.

**Project (added 2026-07-15):** the estate/development level above plots.
`title, slug, status (selling | coming-soon | sold-out), district, locationText,
coordinates (geopoint), summary, coverPhoto, gallery (captioned+dated images),
videos ({url, title} — YouTube links, embedded via youtube-nocookie), features,
description`. Project pages list their plots; cards show "X of Y plots
available" computed in GROQ.

Prices display as "UGX 25M" (with full digits in tabular figures on the detail
page). If diaspora traffic grows, add an approximate EUR/USD hint — clearly
marked approximate, never the transactional figure.

## 13. Pages and their jobs

Every page has one conversion job. If an element doesn't serve the page's job,
it goes.

| Page | Job | Primary CTA |
|---|---|---|
| Home | Establish trust in 5 seconds; route visitors to plots or verification | "See available plots" |
| Projects index | Show the estates; route to the project a buyer cares about | Project cards |
| Project detail | Sell the development: location, map link, photos, videos, its plots | Plot cards + WhatsApp |
| Plots index | Let a buyer find their plot fast (filter: district, status, price) | Plot cards |
| **Plot detail** | **Close.** Everything a buyer needs to start a conversation: photos, map, coordinates, price, payment plan, title type | Sticky WhatsApp bar |
| Verification | Convert the skeptic and the diaspora buyer; explain the process step-by-step with a real example report | "Request a verification" (form + WhatsApp) |
| Services | Show breadth; capture "land monitoring Uganda"-type searches | WhatsApp per service |
| Guides | SEO + trust. Genuinely useful, generous articles | Soft — inline links to verification |
| About | Faces, names, registration number, office, the weaver story | — |
| Contact | Every channel, office map, hours | WhatsApp |

**Home page structure, top to bottom:** (1) full-bleed photo of real land, one
Fraunces headline making the planning promise, one CTA. (2) Available plots —
three cards, real prices. (3) "How verification works" — the differentiator,
3–4 steps with a real report screenshot. (4) The weaver story, short, with the
logo. (5) Services overview, compact list, no cards. (6) Latest guide + trust
strip. No hero carousel (nobody sees slide 2), no stats counters, no logo wall.

**Launch guides (write these first, they carry SEO for months):**
1. "How to verify land in Uganda before you buy" — the flagship
2. "Buying land in Uganda from abroad: a step-by-step guide" — diaspora magnet
3. "Mailo, freehold, leasehold: Uganda's title types in plain language"
4. "Questions to ask any land seller — including us" — the trust play from §2

## 14. SEO

Prerendered HTML does half the work. The rest:

**Meta.** A `seo.ts` helper every page calls: title (≤60 chars, pattern
`{Page} | Lusansa Property Services`; plot pages `{Plot title}, {District} |
Plots for sale | Lusansa` — pipes not em dashes, per COPY_RULES.md), description written by hand per page (150 chars,
includes price and location for plots — the meta description is ad copy for the
SERP, treat it that way), canonical URL, OG + Twitter tags. OG image per plot =
its lead photo; default OG for other pages needs the vector logo (§7).

**JSON-LD**, emitted from `seo.ts`:
- Site-wide: `RealEstateAgent` (name, logo, address, phone, `areaServed`,
  `sameAs` for socials)
- Plot pages: `Product` with `Offer` (price in UGX, availability mapped from
  status) — this is what earns rich results
- Guides: `Article`; verification page: `FAQPage` (it will naturally have Q&As);
  everywhere: `BreadcrumbList`

**Keyword strategy.** Two buckets:
- *Transactional:* "plots for sale in {district}", "cheap plots {area}",
  "land for sale Uganda installments". Won by plot pages and district-grouped
  index pages — the `district` field drives URLs and headings.
- *Informational:* the guide topics in §13. Lower competition, high trust yield,
  and they earn the backlinks that lift the whole domain.

**Mechanics.** `sitemap.xml` endpoint from the content layer; `robots.txt`
pointing at it; single canonical host (no-www → www or reverse, one 301 in
Netlify config); trailing-slash consistency via SvelteKit config.

**Off-site, week one:** Google Search Console (submit sitemap), **Google Business
Profile** (huge for "land for sale near me"-class queries and the map pack —
free and most competitors do it badly), consistent name/phone/address everywhere.

## 15. Performance budget

Budgets, not vibes — the audience makes this a brand issue (§6). Test with
Lighthouse (mobile, throttled) and WebPageTest from a Johannesburg or Mumbai
node, not localhost.

| Metric | Budget |
|---|---|
| LCP on throttled 4G | < 2.5s (target 2.0) |
| JS shipped, content pages | < 50KB gzipped |
| Lead image | < 120KB (AVIF, sized to viewport) |
| Fonts total | < 120KB WOFF2 |
| CLS | < 0.05 (width/height on every image — enhanced-img does this) |
| Lighthouse mobile | ≥ 95 across the board |

**Fonts:** self-hosted WOFF2, subset to latin (`pyftsubset`), Fraunces as one
variable file, Switzer 400/500/600. `font-display: swap`, preload only the two
files used above the fold, and set fallback metrics (`size-adjust`) so the swap
doesn't shift layout.

**Images:** `@sveltejs/enhanced-img` everywhere; lazy-load everything below the
fold; lead plot photo eager with `fetchpriority="high"`. Drone photos compress
well in AVIF — take advantage.

**JS discipline:** most pages ship near-zero JS beyond SvelteKit's runtime.
Leaflet (~40KB) loads only on plot detail, only on interaction (§17). No
carousel/animation/UI libraries — anything a library would do here, CSS does.

## 16. WhatsApp conversion machinery

The conversion backbone. Get a **WhatsApp Business** number (not personal):
business profile with logo/hours/location, catalog later, and continuity if
staff change.

`whatsapp.ts`:

```ts
const WA_NUMBER = site.whatsappNumber; // from site.ts, E.164 without '+'

export function waLink(message: string): string {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
}

// Pre-filled per context — written like a human types, and specific,
// so the first reply can be useful instead of "which plot?":
// plot:         `Hello Lusansa, I'm interested in ${plot.title} (${plot.sizeText},
//                UGX ${fmt(plot.priceUGX)}). Is it still available?`
// verification: `Hello Lusansa, I'd like to verify a piece of land before buying.`
// general:      `Hello Lusansa, I found your website and have a question.`
```

Placement: sticky bottom bar on plot pages (mobile), inline buttons at each
page's decision moment, one floating button on guide articles only. Every
WhatsApp anchor fires an analytics event (§18) with page + plot slug — this is
the site's true conversion metric.

**Fallback for the desktop diaspora visitor:** a short Netlify form on the
verification and contact pages (name, email/phone, what they need — three
fields, nothing more). Netlify Forms gotcha with SvelteKit: a static HTML
form definition must exist at deploy time for Netlify to register it — keep a
hidden mirror form in `static/` or ensure the prerendered page contains the
`data-netlify` form markup. Add the honeypot field; land-related forms attract
spam.

## 17. Maps

- **Plot cards:** no map — a photo and the landmark text. Maps on cards cost
  data and add nothing at that stage.
- **Plot + project detail (implemented 2026-07-15):** `SurveyMap.svelte` —
  Leaflet + OSM, lazy-imported in `onMount` so the ~42KB only loads on detail
  pages. The map wears the hero survey-plan style on real geography: tiles
  warmed into the paper palette via CSS filter (`grayscale(.9) sepia(.22)
  brightness(1.04) contrast(.88) saturate(1.1)`), a faint grid overlay, north
  arrow, scale bar, DMS corner coordinates. Plots render as **polygons colored
  by status** (green/gold/earth, sold dashed) with their number inside; on the
  project map they're clickable through to the plot page; the plot page adds
  the four corner pegs. Boundaries come from the `boundary` field when
  surveyed, else an approximate rectangle derived from `sizeSqm` — the caption
  says so until real data lands. Scroll-wheel zoom off (no scroll-trap). Every
  map keeps the **"Open in Google Maps"** link
  (`https://maps.google.com/?q=lat,lng`) — buyers navigate with it and share it
  with family, which is free distribution.
- **Coordinates as text** next to every map (§4's hallmark element) — copyable,
  checkable, screenshot-able into WhatsApp family group chats where Ugandan
  land decisions actually get made.

## 18. Analytics and measurement

GoatCounter (free) or Plausible (~€9/mo, nicer reports). Either is ~1KB and
cookie-free — no consent banner, which keeps the first impression clean (§6).

Events that matter, in order: `whatsapp_click` (with page/plot), `verify_request`
(form submit), `plot_view`, guide scroll-depth (rough proxy for trust-building).
Sessions and pageviews are vanity here; **WhatsApp clicks per plot view** is the
number that says whether the site works. Check it monthly; if a plot page gets
views but no clicks, its photos or price presentation are the problem.

UTM discipline from day one: the owners will share links in WhatsApp statuses
and Facebook groups — give them pre-tagged links (`?utm_source=whatsapp-status`)
so you learn which channel actually sells plots.

## 19. Netlify specifics

- `@sveltejs/adapter-netlify`; with full prerendering the output is pure CDN
  static files.
- `netlify.toml`: immutable cache headers for `/_app/*` and fonts
  (`max-age=31536000, immutable`); security headers (`X-Content-Type-Options`,
  `Referrer-Policy: strict-origin-when-cross-origin`, a CSP allowing self +
  OSM tiles + the analytics domain); the single canonical-host 301 (§14).
- Deploy previews on every PR/branch — this is how the owners review a new plot
  page from a phone in Kampala before it goes live: send the preview URL on
  WhatsApp, get a 👍, merge.
- Forms per §16; enable Netlify's spam filtering plus the honeypot.
- **Domain:** buy both `lusansa.com` and `lusansa.co.ug` if available. `.com`
  as canonical (diaspora trust + easier typing abroad), `.co.ug` 301-redirecting
  to it (local legitimacy signal, and it blocks a squatter from becoming a
  scam risk under the same name — cheap insurance in this industry). DNS on
  Netlify DNS or keep registrar DNS with A/CNAME to Netlify; HTTPS automatic.
- Custom 404: "This plot may have been sold" + link to available plots — sold
  listings will get shared around WhatsApp for months.

## 20. Accessibility

Non-negotiables, all cheap if done from the start:

- Contrast: verified in §3 — `green-700` body text passes on `paper`; gold small
  text must use `gold-700`; re-check any new pairing at 4.5:1.
- Visible focus states on everything interactive (2px `green-700` outline,
  2px offset) — keyboard users exist, and it costs one CSS rule.
- Alt text that describes the *land*, not the file: "Marked boundary peg on
  plot 12, murram road visible behind" — note this is also exactly what image
  SEO wants.
- Tap targets ≥ 44px; the sticky WhatsApp bar comfortably more.
- `prefers-reduced-motion` respected (§6 — there's barely any motion to reduce).
- One `h1` per page, heading levels in order, landmarks (`header/main/footer`),
  form fields with real `<label>`s.

## 21. Launch checklist

Content & brand — the doc's §Contact is empty; all of this blocks launch:
- [x] WhatsApp number on the site (+256 705 837 125, added 2026-07-15) —
      still recommended: upgrade it to a WhatsApp Business profile
- [ ] Phone, email, physical office address
- [ ] Company registration number (trust strip)
- [ ] Tagline translation confirmed with owners (§8)
- [ ] Vector/transparent logo obtained or redrawn (§7)
- [ ] Real photos for at least one development, captioned per §5
- [ ] At least 3 real plots with complete data (§12)
- [ ] Guide #1 ("How to verify land in Uganda") written

Technical:
- [ ] All pages prerendered; Lighthouse mobile ≥ 95 on home + one plot page
- [ ] WebPageTest from a non-EU node within LCP budget
- [ ] JSON-LD validates (Google Rich Results Test) for home + plot + guide
- [ ] sitemap.xml + robots.txt live; Search Console verified, sitemap submitted
- [ ] Canonical-host redirect works both directions (http/https, www/apex)
- [ ] Netlify form tested end-to-end (submission arrives, spam filter on)
- [ ] Every WhatsApp link opens with correct pre-filled text on a real phone
- [ ] Analytics events firing (check `whatsapp_click` specifically)
- [ ] OG previews checked in WhatsApp itself (paste a plot URL in a chat —
      it's the #1 place these links will be shared)
- [ ] 404 page, favicon set
- [ ] Google Business Profile created

Post-launch, first month: watch WhatsApp-clicks-per-plot-view (§18), publish
guides #2–4, ask every buyer for a named testimonial at the moment of handover
(happiest moment = best quote), photograph everything.

## 22. Roadmap (explicitly not now)

- District landing pages when there are plots in 3+ districts
- Luganda version of key pages if analytics show demand
- WhatsApp Business catalog synced with plot listings
- EUR/USD indicative pricing if diaspora traffic > 30%

Everything on this list is cut from launch on purpose. The weaver builds one
good nest at a time.
