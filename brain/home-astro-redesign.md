# Tathaastu home redesign notes

## Theme
- Primary page background: `#F8FFF6`
- Footer / CTA band: `#064233`
- Ink / brand navy: `#073349`
- CTA / buttons: `#E74660`
- Accent coral: `#D44459`
- Soft white surfaces for cards on mint cream
- Content max width: `1680px` with responsive gutters so wide screens feel filled

## Language
- Prefer **Expert** (not Astrologer) in UI copy — platform hosts many expert types (astrology, tarot, numerology, Vastu, healing, etc.)
- Keep **Astrology** as a category / service name where it refers to the discipline

## Information architecture (navbar mega-menus)
Keep top nav simple; expose depth in mega-menus:

1. **Consult** — Talk to Expert, Chat/Call, Video, Tarot/Numerology, Vastu/Healing
2. **Astrology** — Free Kundli, Kundli Matching, Horoscope, Panchang, Calculators
3. **Guidance** — Love, Marriage, Career/Business, Finance, Family/Education
4. **Store** — Puja, Remedies, Gemstones, Rudraksha, Crystals/Vastu
5. **Learn** — Blog, Videos, Guides, Festivals, FAQs
6. **About** — About + Founder, Become an Expert, Login/Dashboard, Wallet, Support

## Home inspiration
Astrotalk-style landing structure adapted for Tathaastu:
Hero → quick links → top experts → categories → services → daily horoscope → reviews → blog → SEO info → FAQ → footer

## Key files
- `src/layout/SiteNavbar.jsx`
- `src/data/navMegaMenu.js`
- `src/components/Home/AstroHomePage.jsx`
- `src/components/Home/astro-home.css`
- `src/pages/Home.jsx`
- `src/components/Home/SliderOpener.jsx` (mobile IA)
