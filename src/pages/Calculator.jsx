import React, { useMemo, useState } from "react";
import {
  Calendar,
  Clock,
  Download,
  Mail,
  MapIcon,
  MapPin,
  Phone,
  User,
} from "lucide-react";
import SiteNavbar from "../layout/SiteNavbar";
import Footer from "../layout/Footer";

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

function calculateSunSign(day, month) {
  const signs = [
    "Capricorn",
    "Aquarius",
    "Pisces",
    "Aries",
    "Taurus",
    "Gemini",
    "Cancer",
    "Leo",
    "Virgo",
    "Libra",
    "Scorpio",
    "Sagittarius",
  ];
  const cutoffs = [20, 19, 21, 20, 21, 21, 21, 23, 23, 23, 22, 22];
  if (!day || !month) return "";
  if (day < cutoffs[month - 1]) return signs[month - 2 < 0 ? 11 : month - 2];
  return signs[month - 1];
}

function calculateLifePathNumber(day, month, year) {
  const sum = Number(day) + Number(month) + Number(year);
  let result = sum;
  while (result >= 10) {
    result = String(result)
      .split("")
      .reduce((a, b) => a + Number(b), 0);
  }
  return result;
}

function calculateLuckyNumber(fullName, day) {
  const nameSum = String(fullName || "")
    .trim()
    .toLowerCase()
    .split("")
    .reduce((sum, ch) => sum + ch.charCodeAt(0), 0);
  const daySum = Number(day) % 9 || 9;
  const lucky = ((nameSum % 9) + daySum) % 9 || 9;
  return lucky;
}

function getLuckyColor(luckyNumber) {
  const colors = {
    1: "Golden Yellow",
    2: "Cream",
    3: "Yellow",
    4: "Blue",
    5: "Silver",
    6: "Indigo",
    7: "White",
    8: "Black",
    9: "Red",
  };
  return colors[luckyNumber] || "White";
}

function getLuckyDay(luckyNumber) {
  const days = {
    1: "Sunday",
    2: "Monday",
    3: "Tuesday",
    4: "Wednesday",
    5: "Thursday",
    6: "Friday",
    7: "Saturday",
    8: "Saturday",
    9: "Tuesday",
  };
  return days[luckyNumber] || "Sunday";
}

function getPersonalizedMessage(sunSign, lifePathNumber) {
  if (!sunSign) {
    return `Your Life Path Number is ${lifePathNumber}. Use this as a gentle compass to align your habits, relationships, and work with what truly energizes you.`;
  }
  const templates = {
    Aries:
      "You’re naturally bold and action-oriented. Focus your energy on one clear goal, and momentum will follow.",
    Taurus:
      "You thrive with stability and consistency. Steady progress and strong values will bring lasting results.",
    Gemini:
      "Your curiosity is your superpower. Communicate clearly and choose environments that keep you learning.",
    Cancer:
      "Your intuition is strong. Protect your emotional boundaries and invest in relationships that feel safe.",
    Leo:
      "You shine when you create and lead. Step forward confidently while staying grounded in humility.",
    Virgo:
      "Your details create excellence. Balance perfection with progress and you’ll unlock sustainable success.",
    Libra:
      "You bring harmony and fairness. Choose partnerships wisely and commit to balanced decision-making.",
    Scorpio:
      "You’re built for transformation. Trust your resilience and don’t fear reinvention—it’s your gift.",
    Sagittarius:
      "You’re a seeker of truth. Travel, learn, and share wisdom—optimism is your fuel.",
    Capricorn:
      "You build long-term success. Discipline and patience will turn your ambitions into reality.",
    Aquarius:
      "You’re innovative and visionary. Follow your unique path and you’ll inspire meaningful change.",
    Pisces:
      "You’re intuitive and compassionate. Creativity and spiritual alignment will open the right doors.",
  };
  const core = templates[sunSign] || `You carry the essence of ${sunSign}.`;
  return `${core} Your Life Path Number is ${lifePathNumber}—use it to guide your next best step with clarity and confidence.`;
}

export default function Calculator() {
  const currentYear = new Date().getFullYear();
  const years = useMemo(
    () => Array.from({ length: 110 }, (_, i) => String(currentYear - i)),
    [currentYear]
  );

  const [formData, setFormData] = useState({
    fullName: "",
    dateOfBirth: { day: "", month: "", year: "" },
    timeOfBirth: { hour: "12", minute: "00", ampm: "AM" },
    dontKnowTime: false,
    placeOfBirth: "",
    gender: "",
    email: "",
    mobileNumber: "",
    currentAddress: "",
  });

  const [results, setResults] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prev) => ({ ...prev, [name]: checked }));
      return;
    }
    if (name.includes(".")) {
      const [parent, child] = name.split(".");
      setFormData((prev) => ({
        ...prev,
        [parent]: { ...prev[parent], [child]: value },
      }));
      return;
    }
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    window.setTimeout(() => {
      const day = Number(formData.dateOfBirth.day);
      const month = Number(formData.dateOfBirth.month);
      const year = Number(formData.dateOfBirth.year);

      const sunSign = calculateSunSign(day, month);
      const lifePathNumber = calculateLifePathNumber(day, month, year);
      const luckyNumber = calculateLuckyNumber(formData.fullName, day);

      setResults({
        sunSign,
        lifePathNumber,
        luckyNumber,
        luckyColor: getLuckyColor(luckyNumber),
        luckyDay: getLuckyDay(luckyNumber),
        message: getPersonalizedMessage(sunSign, lifePathNumber),
      });
      setIsLoading(false);
    }, 900);
  };

  const handleDownload = () => {
    if (!results) return;

    const content = `TATHAASTU — BIRTH CHART (BASIC) REPORT
=====================================

Name: ${formData.fullName}
Date of Birth: ${formData.dateOfBirth.day}/${formData.dateOfBirth.month}/${formData.dateOfBirth.year}
Time of Birth: ${formData.dontKnowTime ? "Not provided" : `${formData.timeOfBirth.hour}:${formData.timeOfBirth.minute} ${formData.timeOfBirth.ampm}`}
Place of Birth: ${formData.placeOfBirth}
Gender: ${formData.gender}
Email: ${formData.email}
Mobile: ${formData.mobileNumber}
Current Address/City: ${formData.currentAddress}

--- RESULTS ---
Sun Sign: ${results.sunSign}
Lucky Number: ${results.luckyNumber}
Lucky Color: ${results.luckyColor}
Lucky Day: ${results.luckyDay}
Life Path Number: ${results.lifePathNumber}

--- MESSAGE ---
${results.message}
`;

    const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${(formData.fullName || "tathaastu").replaceAll(" ", "_")}_report.txt`;
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
  };

  return (
    <div className="min-h-screen bg-[#0B111B]">
      <SiteNavbar />

      <section className="bg-gradient-to-r from-[#4B0082] to-[#6B21A8] py-16 text-white sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-balance text-3xl font-extrabold tracking-tight sm:text-5xl">
            Vedic Astrology Birth
            <br className="hidden sm:block" />
            Chart Calculator
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-white/90 sm:text-lg">
            Discover your cosmic blueprint with detailed inputs and instant insights.
          </p>
        </div>
      </section>

      <section className="bg-gradient-to-b from-[#0B111B] via-[#0B111B] to-[#0B111B] py-12 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          {!results ? (
            <div className="rounded-2xl border border-white/10 bg-[#111A2B] p-6 shadow-2xl sm:p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-[#FFD700]">
                    <User className="h-4 w-4" />
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                    className="w-full rounded-lg border border-white/10 bg-[#0B111B] px-4 py-3 text-white placeholder:text-white/40 outline-none ring-0 focus:border-[#FFD700]/60 focus:ring-2 focus:ring-[#FFD700]/20"
                  />
                </div>

                <div>
                  <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-[#FFD700]">
                    <Calendar className="h-4 w-4" />
                    Date of Birth *
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    <select
                      name="dateOfBirth.day"
                      value={formData.dateOfBirth.day}
                      onChange={handleChange}
                      required
                      className="rounded-lg border border-white/10 bg-[#0B111B] px-4 py-3 text-white outline-none focus:border-[#FFD700]/60 focus:ring-2 focus:ring-[#FFD700]/20"
                    >
                      <option value="">Day</option>
                      {Array.from({ length: 31 }, (_, i) => (
                        <option key={i + 1} value={String(i + 1)}>
                          {i + 1}
                        </option>
                      ))}
                    </select>
                    <select
                      name="dateOfBirth.month"
                      value={formData.dateOfBirth.month}
                      onChange={handleChange}
                      required
                      className="rounded-lg border border-white/10 bg-[#0B111B] px-4 py-3 text-white outline-none focus:border-[#FFD700]/60 focus:ring-2 focus:ring-[#FFD700]/20"
                    >
                      <option value="">Month</option>
                      {MONTHS.map((m, idx) => (
                        <option key={m} value={String(idx + 1)}>
                          {m}
                        </option>
                      ))}
                    </select>
                    <select
                      name="dateOfBirth.year"
                      value={formData.dateOfBirth.year}
                      onChange={handleChange}
                      required
                      className="rounded-lg border border-white/10 bg-[#0B111B] px-4 py-3 text-white outline-none focus:border-[#FFD700]/60 focus:ring-2 focus:ring-[#FFD700]/20"
                    >
                      <option value="">Year</option>
                      {years.map((y) => (
                        <option key={y} value={y}>
                          {y}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-[#FFD700]">
                    <Clock className="h-4 w-4" />
                    Time of Birth
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    <input
                      type="number"
                      name="timeOfBirth.hour"
                      min="0"
                      max="23"
                      value={formData.timeOfBirth.hour}
                      onChange={handleChange}
                      disabled={formData.dontKnowTime}
                      className="rounded-lg border border-white/10 bg-[#0B111B] px-4 py-3 text-white outline-none disabled:opacity-60 focus:border-[#FFD700]/60 focus:ring-2 focus:ring-[#FFD700]/20"
                    />
                    <input
                      type="number"
                      name="timeOfBirth.minute"
                      min="0"
                      max="59"
                      value={formData.timeOfBirth.minute}
                      onChange={handleChange}
                      disabled={formData.dontKnowTime}
                      className="rounded-lg border border-white/10 bg-[#0B111B] px-4 py-3 text-white outline-none disabled:opacity-60 focus:border-[#FFD700]/60 focus:ring-2 focus:ring-[#FFD700]/20"
                    />
                    <select
                      name="timeOfBirth.ampm"
                      value={formData.timeOfBirth.ampm}
                      onChange={handleChange}
                      disabled={formData.dontKnowTime}
                      className="rounded-lg border border-white/10 bg-[#0B111B] px-4 py-3 text-white outline-none disabled:opacity-60 focus:border-[#FFD700]/60 focus:ring-2 focus:ring-[#FFD700]/20"
                    >
                      <option value="AM">AM</option>
                      <option value="PM">PM</option>
                    </select>
                  </div>
                  <label className="mt-3 inline-flex items-center gap-2 text-sm text-white/80">
                    <input
                      type="checkbox"
                      name="dontKnowTime"
                      checked={formData.dontKnowTime}
                      onChange={handleChange}
                      className="h-4 w-4 rounded border-white/20 bg-[#0B111B]"
                    />
                    I don&apos;t know my exact birth time
                  </label>
                </div>

                <div>
                  <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-[#FFD700]">
                    <MapPin className="h-4 w-4" />
                    Place of Birth *
                  </label>
                  <input
                    type="text"
                    name="placeOfBirth"
                    value={formData.placeOfBirth}
                    onChange={handleChange}
                    required
                    placeholder="City/Town, State, Country"
                    className="w-full rounded-lg border border-white/10 bg-[#0B111B] px-4 py-3 text-white placeholder:text-white/40 outline-none focus:border-[#FFD700]/60 focus:ring-2 focus:ring-[#FFD700]/20"
                  />
                </div>

                <div>
                  <label className="mb-3 block text-sm font-semibold text-[#FFD700]">Gender *</label>
                  <div className="flex flex-wrap gap-5 text-sm text-white">
                    {["male", "female", "other"].map((g) => (
                      <label key={g} className="inline-flex items-center gap-2">
                        <input
                          type="radio"
                          name="gender"
                          value={g}
                          checked={formData.gender === g}
                          onChange={handleChange}
                          required
                          className="h-4 w-4"
                        />
                        <span className="capitalize">{g}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-[#FFD700]">
                    <Mail className="h-4 w-4" />
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                    className="w-full rounded-lg border border-white/10 bg-[#0B111B] px-4 py-3 text-white placeholder:text-white/40 outline-none focus:border-[#FFD700]/60 focus:ring-2 focus:ring-[#FFD700]/20"
                  />
                </div>

                <div>
                  <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-[#FFD700]">
                    <Phone className="h-4 w-4" />
                    Mobile Number *
                  </label>
                  <input
                    type="tel"
                    name="mobileNumber"
                    value={formData.mobileNumber}
                    onChange={handleChange}
                    required
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full rounded-lg border border-white/10 bg-[#0B111B] px-4 py-3 text-white placeholder:text-white/40 outline-none focus:border-[#FFD700]/60 focus:ring-2 focus:ring-[#FFD700]/20"
                  />
                </div>

                <div>
                  <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-[#FFD700]">
                    <MapIcon className="h-4 w-4" />
                    Current Address / City *
                  </label>
                  <input
                    type="text"
                    name="currentAddress"
                    value={formData.currentAddress}
                    onChange={handleChange}
                    required
                    placeholder="City/Town, State"
                    className="w-full rounded-lg border border-white/10 bg-[#0B111B] px-4 py-3 text-white placeholder:text-white/40 outline-none focus:border-[#FFD700]/60 focus:ring-2 focus:ring-[#FFD700]/20"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#FFD700] to-[#FFC700] py-4 font-bold text-[#0B111B] shadow-lg shadow-[#FFD700]/20 transition hover:shadow-[#FFD700]/35 disabled:opacity-60"
                >
                  {isLoading ? "Calculating..." : "Generate My Birth Chart"}
                </button>

                <div className="rounded-xl border border-[#6B21A8]/35 bg-[#6B21A8]/15 p-4">
                  <p className="text-sm text-white/85">
                    <span className="font-semibold text-[#FFD700]">Note:</span> Please provide accurate
                    birth details for the best results. Exact time and place improve accuracy.
                  </p>
                </div>
              </form>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="rounded-2xl border border-white/10 bg-[#111A2B] p-6 shadow-2xl sm:p-8">
                <h2 className="text-center text-2xl font-extrabold text-[#FFD700] sm:text-3xl">
                  Your Birth Chart Analysis
                </h2>

                <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-white/10 bg-[#0B111B] p-5">
                    <div className="text-xs text-white/60">Sun Sign</div>
                    <div className="mt-1 text-xl font-bold text-white">{results.sunSign}</div>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-[#0B111B] p-5">
                    <div className="text-xs text-white/60">Life Path Number</div>
                    <div className="mt-1 text-xl font-bold text-white">{results.lifePathNumber}</div>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-[#0B111B] p-5">
                    <div className="text-xs text-white/60">Lucky Number</div>
                    <div className="mt-1 text-xl font-bold text-white">{results.luckyNumber}</div>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-[#0B111B] p-5">
                    <div className="text-xs text-white/60">Lucky Day</div>
                    <div className="mt-1 text-xl font-bold text-white">{results.luckyDay}</div>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-[#0B111B] p-5 sm:col-span-2">
                    <div className="text-xs text-white/60">Lucky Color</div>
                    <div className="mt-1 text-xl font-bold text-white">{results.luckyColor}</div>
                  </div>
                </div>

                <div className="mt-6 rounded-xl border border-[#6B21A8]/35 bg-gradient-to-r from-[#6B21A8]/20 to-[#4B0082]/15 p-5">
                  <div className="font-semibold text-[#FFD700]">Your personalized message</div>
                  <p className="mt-2 text-sm leading-relaxed text-white/90">{results.message}</p>
                </div>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <button
                    type="button"
                    onClick={handleDownload}
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#FFD700] to-[#FFC700] py-3 font-bold text-[#0B111B] shadow-lg shadow-[#FFD700]/20 transition hover:shadow-[#FFD700]/35"
                  >
                    <Download className="h-5 w-5" />
                    Download Report
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setResults(null);
                      setIsLoading(false);
                    }}
                    className="inline-flex flex-1 items-center justify-center rounded-lg border border-[#FFD700]/60 py-3 font-bold text-[#FFD700] transition hover:bg-[#FFD700]/10"
                  >
                    Calculate Again
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}

