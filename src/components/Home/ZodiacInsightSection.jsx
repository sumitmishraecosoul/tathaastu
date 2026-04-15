import React, { useMemo, useState } from "react";

const ZODIAC_SIGNS = [
  { key: "aries", label: "Aries" },
  { key: "taurus", label: "Taurus" },
  { key: "gemini", label: "Gemini" },
  { key: "cancer", label: "Cancer" },
  { key: "leo", label: "Leo" },
  { key: "virgo", label: "Virgo" },
  { key: "libra", label: "Libra" },
  { key: "scorpio", label: "Scorpio" },
  { key: "sagittarius", label: "Sagittarius" },
  { key: "capricorn", label: "Capricorn" },
  { key: "aquarius", label: "Aquarius" },
  { key: "pisces", label: "Pisces" },
];

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const hashToInt = (s) => {
  const str = String(s || "");
  let h = 0;
  for (let i = 0; i < str.length; i += 1) h = (h * 31 + str.charCodeAt(i)) >>> 0;
  return h;
};

const pick = (arr, key) => arr[hashToInt(key) % arr.length];

function buildMonthlyPrediction(signLabel, monthLabel) {
  const openers = [
    "This month brings a shift in momentum.",
    "You’re stepping into a more focused phase.",
    "The universe is asking you to simplify and commit.",
    "Expect clarity where there was confusion.",
    "A small decision now creates a big ripple later.",
  ];
  const career = [
    "Career moves favor consistency—finish what you start.",
    "A new opportunity may appear through a conversation.",
    "Avoid rushing decisions; negotiate with confidence.",
    "Your efforts get noticed—show your work boldly.",
    "Refine your routine and you’ll feel unstoppable.",
  ];
  const love = [
    "In love, honest communication clears the air.",
    "Set a gentle boundary and your bonds strengthen.",
    "Single? A meaningful connection can show up unexpectedly.",
    "Couples benefit from quality time and shared goals.",
    "Don’t overthink—let actions speak louder than doubts.",
  ];
  const wellbeing = [
    "Prioritize sleep and hydration to stay grounded.",
    "Move your body daily—light exercise brings calm.",
    "Protect your energy: say no without guilt.",
    "Declutter your space to declutter your mind.",
    "A short spiritual practice will reset your mood.",
  ];
  const lucky = [
    { label: "Lucky day", value: "Thursday" },
    { label: "Lucky color", value: "Deep blue" },
    { label: "Lucky number", value: "6" },
    { label: "Lucky day", value: "Sunday" },
    { label: "Lucky color", value: "Emerald green" },
    { label: "Lucky number", value: "3" },
    { label: "Lucky day", value: "Wednesday" },
    { label: "Lucky color", value: "Rose pink" },
    { label: "Lucky number", value: "9" },
  ];

  return {
    title: `${monthLabel} prediction for ${signLabel}`,
    summary: `${pick(openers, `${signLabel}-${monthLabel}-o`)} ${pick(
      openers,
      `${signLabel}-${monthLabel}-o2`
    )}`,
    bullets: [
      `• ${pick(career, `${signLabel}-${monthLabel}-c`)}`,
      `• ${pick(love, `${signLabel}-${monthLabel}-l`)}`,
      `• ${pick(wellbeing, `${signLabel}-${monthLabel}-w`)}`,
    ],
    lucky: pick(lucky, `${signLabel}-${monthLabel}-x`),
  };
}

export default function ZodiacInsightSection() {
  const now = new Date();
  const monthLabel = MONTHS[now.getMonth()] || "This month";
  const [activeKey, setActiveKey] = useState("taurus");

  const activeSign = useMemo(
    () => ZODIAC_SIGNS.find((s) => s.key === activeKey) || ZODIAC_SIGNS[0],
    [activeKey]
  );

  const prediction = useMemo(
    () => buildMonthlyPrediction(activeSign.label, monthLabel),
    [activeSign.label, monthLabel]
  );

  return (
    <section className="w-full bg-[#F6F1E6] px-4 py-12 md:px-8 lg:px-16">
      <div className="mx-auto w-full max-w-6xl overflow-hidden rounded-2xl bg-[#F6F1E6]">
        <div className="px-5 py-8 sm:px-8">
          <div className="text-center">
            <div className="text-xl font-extrabold text-[#1F5A49] sm:text-2xl">
              Discover Your Zodiac Insight
            </div>
            <div className="mt-2 text-sm text-[#1F5A49]/75">
              Tap a zodiac sign to see your {monthLabel} prediction.
            </div>
          </div>

          {/* Sign grid */}
          <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {ZODIAC_SIGNS.map((sign) => {
              const isActive = sign.key === activeKey;
              return (
                <button
                  key={sign.key}
                  type="button"
                  onClick={() => setActiveKey(sign.key)}
                  className={[
                    "rounded-xl px-3 py-2 text-sm font-semibold transition",
                    "ring-1 ring-black/5",
                    isActive
                      ? "bg-[#2D7351] text-white shadow-[0_10px_24px_rgba(45,115,81,0.25)]"
                      : "bg-white text-[#1F5A49] hover:bg-white/70",
                  ].join(" ")}
                >
                  {sign.label}
                </button>
              );
            })}
          </div>

          {/* Content: image + text */}
          <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-[360px_1fr] lg:items-stretch">
            {/* Placeholder image block */}
            <div className="relative overflow-hidden rounded-2xl bg-white ring-1 ring-black/5">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(45,115,81,0.14),transparent_55%)]" />
              <div className="relative flex h-full min-h-[220px] items-center justify-center p-6">
                <div className="text-center">
                  <div className="text-xs font-extrabold tracking-widest text-[#1F5A49]/75">
                    {activeSign.label.toUpperCase()}
                  </div>
                  <div className="mt-2 text-sm text-[#1F5A49]/70">
                    Image placeholder (you’ll add zodiac images later)
                  </div>
                </div>
              </div>
            </div>

            {/* Prediction text */}
            <div className="rounded-2xl bg-white p-6 ring-1 ring-black/5">
              <div className="text-xs font-extrabold tracking-widest text-[#2D7351]">
                {prediction.title.toUpperCase()}
              </div>
              <div className="mt-3 text-base font-extrabold text-[#073349]">
                {activeSign.label}: your month at a glance
              </div>
              <div className="mt-3 text-sm leading-relaxed text-[#325d72]">
                {prediction.summary}
              </div>

              <div className="mt-4 rounded-2xl bg-[#fff5e5] p-4">
                <div className="text-sm font-bold text-[#073349]">Key themes</div>
                <div className="mt-2 space-y-1 text-sm text-gray-700">
                  {prediction.bullets.map((b) => (
                    <div key={b}>{b}</div>
                  ))}
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                <div className="rounded-full bg-[#2D7351] px-4 py-2 text-xs font-semibold text-white">
                  {prediction.lucky.label}: <span className="font-extrabold">{prediction.lucky.value}</span>
                </div>
                <div className="rounded-full bg-[#D44459] px-4 py-2 text-xs font-semibold text-white">
                  Want detailed guidance? Talk to an expert
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

