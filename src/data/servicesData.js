import astrologyKundli from "../assets/astrology_kundli.svg";
import vastuForHome from "../assets/vastu_for_home.svg";
import vedicAstrology from "../assets/VEDIC_ASTROLOGY.svg";
import numerologist from "../assets/NUMEROLOGIST.svg";
import poojaServices from "../assets/POOJA_SERVICES.svg";
import horoscopeMatching from "../assets/horoscope_matching.svg";
import tarotReading from "../assets/tarot_reading.svg";
import crystalHealing from "../assets/crystal_healing.svg";
import petHealing from "../assets/pet_heeling.svg";
import dowsing from "../assets/dowsing.svg";
import auraHealing from "../assets/heeling_and_scanning.svg";

import astrologyKundliBanner from "../assets/ASTROLOGY_KUNDLI_banner.svg";
import vastuForHomeBanner from "../assets/VASTU_SHASTRA_VASTU_FOR_HOME_banner.svg";
import vedicAstrologyBanner from "../assets/VEDIC_ASTROLOGY_banner.svg";
import numerologistBanner from "../assets/NUMEROLOGIST_banner.svg";
import poojaServicesBanner from "../assets/POOJA_SERVICES_banner.svg";
import horoscopeMatchingBanner from "../assets/horoscope_matching_banner.svg";
import tarotReadingBanner from "../assets/tarot_reading_banner.svg";
import crystalHealingBanner from "../assets/crystal_healing_banner.svg";
import petHealingBanner from "../assets/PET_HEALING_banner.svg";
import dowsingBanner from "../assets/dowsing_banner.svg";
import auraHealingBanner from "../assets/AURA_HEALING_AND_SCANNING_banner.svg";

const servicesData = [
  {
    id: "astrology-kundli",
    slug: "astrology-kundli",
    title: "Astrology - Kundli",
    description:
      "Discover your life’s true path with personalized Kundli readings that decode your destiny through planetary positions and cosmic alignment.",
    image: astrologyKundli,
    banner: astrologyKundliBanner,
    startingPrice: 3100,
    longDescription:
      "Our Kundli consultations decode the celestial blueprint of your birth chart to uncover purpose, potential, and karmic patterns. We analyse planetary placements, houses, yogas, and dashas to offer in-depth guidance for relationships, career, finances, and spiritual direction.",
    highlights: [
      "Comprehensive natal chart reading with dasha and transit insights.",
      "Remedy roadmap featuring gemstones, mantras, yantras, and lifestyle shifts.",
      "Personalised timelines that highlight favourable periods and caution zones.",
    ],
    benefits: [
      "Clarity around life decisions and hidden strengths.",
      "Harmony in relationships and family dynamics.",
      "Alignment with your soul’s journey and spiritual growth.",
    ],
  },
  {
    id: "vastu-shastra",
    slug: "vastu-shastra",
    title: "Vastu Shastra",
    description:
      "Bring balance and prosperity to every space with expert Vaastu guidance designed to harmonize energy, direction, and purpose—for homes, factories, offices, and plots.",
    image: vastuForHome,
    banner: vastuForHomeBanner,
    startingPrice: 5100,
    longDescription:
      "Vaastu consultations align your home, office, or industrial space with cosmic geometry. We study layout, entrances, elemental balance, and energy flow to design pragmatic remedies that invite prosperity, peace, and productivity.",
    highlights: [
      "On-site or digital audits with directional energy mapping.",
      "Elemental balancing for fire, air, earth, water, and space.",
      "Remedial solutions that avoid major structural changes.",
    ],
    benefits: [
      "Improved health, relationships, and focus within the space.",
      "Enhanced financial stability and growth opportunities.",
      "A sanctuary that supports spiritual and emotional wellbeing.",
    ],
  },
  {
    id: "vedic-astrology",
    slug: "vedic-astrology",
    title: "Vedic Astrology",
    description:
      "Explore the timeless wisdom of the stars through Vedic Astrology — uncovering karmic patterns, strengths, and life lessons written in your chart.",
    image: vedicAstrology,
    banner: vedicAstrologyBanner,
    startingPrice: 4100,
    longDescription:
      "Dive deep into Jyotish wisdom to understand how planetary energies influence your life path. From karmic debts to soul dharma, Vedic Astrology illuminates the lessons, gifts, and opportunities encoded in your chart.",
    highlights: [
      "Comprehensive graha, bhava, and nakshatra analysis.",
      "Future forecasts with dasha-bhukti insights.",
      "Personalised spiritual practices rooted in ancient scriptures.",
    ],
    benefits: [
      "Awareness of karmic cycles to navigate life strategically.",
      "Tailored guidance for career, relationships, health, and spiritual growth.",
      "Strengthened connection to your higher self and dharma.",
    ],
  },
  {
    id: "numerologists",
    slug: "numerologists",
    title: "Numerologists",
    description:
      "Decode the hidden power of numbers that shape your destiny, guiding you toward better decisions in relationships, career, and life purpose.",
    image: numerologist,
    banner: numerologistBanner,
    startingPrice: 2600,
    longDescription:
      "Numbers carry vibrational codes that influence personality, behaviour, and life cycles. Our numerology experts interpret your core numbers to reveal strengths, challenges, and the best times to initiate actions.",
    highlights: [
      "Life path, destiny, soul urge, and personality number decoding.",
      "Name correction and signature optimisation for success.",
      "Yearly numerology forecast and personal month insights.",
    ],
    benefits: [
      "Clarity on relationship compatibility and career directions.",
      "Empowered decisions aligned with your numeric blueprint.",
      "Confidence in seizing favourable opportunities.",
    ],
  },
  {
    id: "pooja-services",
    slug: "pooja-services",
    title: "Pooja Services",
    description:
      "Invoke divine blessings and positive vibrations with authentic, personalized puja rituals performed by learned and trusted priests.",
    image: poojaServices,
    banner: poojaServicesBanner,
    startingPrice: 3500,
    longDescription:
      "Our curated puja ceremonies are performed by experienced priests following authentic Vedic protocols. From graha shanti to house warmings, each ritual is customised to your intention and astrological requirements.",
    highlights: [
      "Puja design aligned with planetary remedies and personal goals.",
      "In-person or online ceremonies complete with samagri guidance.",
      "Detailed instructions to sustain the blessings post-ceremony.",
    ],
    benefits: [
      "Energetic cleansing of spaces and ancestral blessings.",
      "Heightened spiritual protection and prosperity.",
      "A renewed sense of faith, devotion, and inner calm.",
    ],
  },
  {
    id: "horoscope-matching",
    slug: "horoscope-matching",
    title: "Horoscope Matching",
    description:
      "Find your perfect life partner with precise horoscope matching based on planetary compatibility and karmic harmony.",
    image: horoscopeMatching,
    banner: horoscopeMatchingBanner,
    startingPrice: 2800,
    longDescription:
      "We blend traditional Ashta-Koota matching with modern compatibility tools to evaluate marriage prospects. Beyond point matching, we study doshas, longevity, progeny, and emotional harmony.",
    highlights: [
      "Detailed gun milan with compatibility grading.",
      "Manglik, madhya, and other dosha assessments with remedies.",
      "Relationship guidance for communication and emotional bonding.",
    ],
    benefits: [
      "Confidence in choosing a partner aligned with your soul path.",
      "Balanced relationships with proactive remedies.",
      "Harmony between both families and long-term stability.",
    ],
  },
  {
    id: "tarot-reading",
    slug: "tarot-reading",
    title: "Tarot Reading",
    description:
      "Gain clarity and insight into life’s questions through intuitive tarot readings that connect you with your inner wisdom.",
    image: tarotReading,
    banner: tarotReadingBanner,
    startingPrice: 2300,
    longDescription:
      "Tarot reveals intuitive guidance hidden beneath everyday noise. Our readers channel symbolism, energy, and clairvoyance to offer clarity on love, career, finances, and life purpose.",
    highlights: [
      "Specialised spreads for love, career, decision making, and healing.",
      "Combination of tarot with oracle cards, numerology, or crystals.",
      "Energy cleansing and intention-setting ritual during each session.",
    ],
    benefits: [
      "Immediate clarity on pressing decisions.",
      "Emotional healing and a renewed sense of direction.",
      "Connection with your intuition and divine guidance.",
    ],
  },
  {
    id: "crystal-healing",
    slug: "crystal-healing",
    title: "Crystal Healing",
    description:
      "Experience energetic balance and emotional healing with crystals that channel positivity, calmness, and transformation.",
    image: crystalHealing,
    banner: crystalHealingBanner,
    startingPrice: 2700,
    longDescription:
      "Crystals amplify, absorb, and transmute energy. Our healers design bespoke crystal grids, layouts, and elixirs to restore balance across chakras, aura, and emotional bodies.",
    highlights: [
      "Crystal prescriptions tailored to your energy imprint.",
      "Chakra alignment sessions with sound and light therapy.",
      "Guidance on cleansing, charging, and working with crystals at home.",
    ],
    benefits: [
      "Relief from stress, anxiety, and energetic fatigue.",
      "Enhanced intuition, creativity, and self-expression.",
      "A harmonised aura that attracts positivity.",
    ],
  },
  {
    id: "pet-healing",
    slug: "pet-healing",
    title: "Pet Healing",
    description:
      "Heal your furry companions with gentle energy therapy that restores their emotional and physical well-being.",
    image: petHealing,
    banner: petHealingBanner,
    startingPrice: 2500,
    longDescription:
      "Animals feel deeply and respond beautifully to energy balancing. Our pet healing sessions combine chakra alignment, animal communication, and crystal therapy to support pets through stress, illness, or behavioural shifts.",
    highlights: [
      "Gentle energy scans to identify emotional and physical blocks.",
      "Distance or in-person healing tailored to your pet’s comfort.",
      "After-care plan with calming rituals, affirmations, and remedies.",
    ],
    benefits: [
      "Comfort for pets experiencing anxiety, trauma, or illness.",
      "Strengthened bond between pet and guardian.",
      "Improved vitality and peaceful behaviour.",
    ],
  },
  {
    id: "dowsing",
    slug: "dowsing",
    title: "Dowsing",
    description:
      "Access intuitive guidance and detect subtle energies using pendulum dowsing — a sacred art for clarity and balance.",
    image: dowsing,
    banner: dowsingBanner,
    startingPrice: 2200,
    longDescription:
      "Dowsing taps into the subconscious to provide yes/no clarity, locate energy imbalances, and receive guidance. We blend pendulum work with charts, crystals, and intention setting for accurate results.",
    highlights: [
      "Pendulum proficiency for personal and spiritual questions.",
      "Space clearing and energy grid balancing with dowsing tools.",
      "Training sessions to help you dowse confidently.",
    ],
    benefits: [
      "Fast, reliable guidance for day-to-day decisions.",
      "Cleansed spaces free from energetic stagnation.",
      "Empowered intuitive muscles and trust in self.",
    ],
  },
  {
    id: "aura-healing-scanning",
    slug: "aura-healing-scanning",
    title: "Aura Healing & Scanning",
    description:
      "Understand and cleanse your energy field with aura scanning sessions that reveal, heal, and strengthen your spiritual vibration.",
    image: auraHealing,
    banner: auraHealingBanner,
    startingPrice: 2900,
    longDescription:
      "The aura reflects our physical, mental, and spiritual wellbeing. Our healers use scanning tools, crystals, and breathwork to identify tears, attachments, and colour imbalances before gently restoring harmony.",
    highlights: [
      "Layer-by-layer aura diagnostics with visual reports.",
      "Chakra balancing using crystals, sound, and pranic healing.",
      "Protection rituals and affirmations to maintain energetic hygiene.",
    ],
    benefits: [
      "Heightened vitality and emotional resilience.",
      "Release of energetic blocks and past imprints.",
      "A radiant auric field that attracts opportunities and peace.",
    ],
  },
];

export default servicesData;

