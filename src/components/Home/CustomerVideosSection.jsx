import React, { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import shortVideo from "../../assets/videos/short_video.mp4";
import video2 from "../../assets/videos/video2.mp4";
import video4 from "../../assets/videos/video4.mp4";
import video5 from "../../assets/videos/video5.mp4";
import video6 from "../../assets/videos/video6.mp4";
import video7 from "../../assets/videos/video7.mp4";
import video8 from "../../assets/videos/video8.mp4";
import video9 from "../../assets/videos/video9.mp4";
import video10 from "../../assets/videos/video10.mp4";
import FreeKundliLogo from "../../assets/home_services/Free-kundli.png";
import DailyHoroscopeLogo from "../../assets/home_services/Daily-Horoscope.png";
import TarotReadingLogo from "../../assets/home_services/tarot-reading.png";
import NumerologyLogo from "../../assets/home_services/Numerology.png";
import VastuLogo from "../../assets/home_services/Vastu.png";
import CrystalHealingLogo from "../../assets/home_services/crystal-healing.png";

/** Max videos decoding/playing at once — keeps the page smooth. */
const MAX_CONCURRENT_PLAY = 3;

/**
 * Add more entries here as you drop new files into src/assets/videos.
 * The strip stays horizontally scrollable for future growth.
 */
export const CUSTOMER_VIDEOS = [
  {
    id: "video1",
    src: shortVideo,
    title: "Free Kundli Guidance",
    badge: FreeKundliLogo,
    badgeTone: "coral",
  },
  {
    id: "video2",
    src: video2,
    title: "Daily Horoscope Moments",
    badge: DailyHoroscopeLogo,
    badgeTone: "teal",
  },
  {
    id: "video3",
    src: video7,
    title: "Tarot Reading Stories",
    badge: TarotReadingLogo,
    badgeTone: "coral",
  },
  {
    id: "video4",
    src: video4,
    title: "Numerology Insights",
    badge: NumerologyLogo,
    badgeTone: "teal",
  },
  {
    id: "video5",
    src: video5,
    title: "Vastu Home Tips",
    badge: VastuLogo,
    badgeTone: "coral",
  },
  {
    id: "video6",
    src: video6,
    title: "Crystal Healing Sessions",
    badge: CrystalHealingLogo,
    badgeTone: "teal",
  },
  {
    id: "video7",
    src: video7,
    title: "Matchmaking Journeys",
    badge: FreeKundliLogo,
    badgeTone: "coral",
  },
  {
    id: "video8",
    src: video8,
    title: "Career Guidance Talks",
    badge: DailyHoroscopeLogo,
    badgeTone: "teal",
  },
  {
    id: "video9",
    src: video9,
    title: "Relationship Advice",
    badge: TarotReadingLogo,
    badgeTone: "coral",
  },
  {
    id: "video10",
    src: video10,
    title: "Spiritual Healing",
    badge: NumerologyLogo,
    badgeTone: "teal",
  },
];

function VideoCard({ item, shouldLoad, shouldPlay, registerVideo }) {
  const videoRef = useRef(null);
  const cardRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [userPaused, setUserPaused] = useState(false);

  useEffect(() => {
    registerVideo(item.id, { cardRef, videoRef });
    return () => registerVideo(item.id, null);
  }, [item.id, registerVideo]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (!shouldLoad) {
      video.removeAttribute("src");
      video.load();
      setPlaying(false);
      return;
    }

    if (video.getAttribute("src") !== item.src) {
      video.src = item.src;
      video.load();
    }
  }, [shouldLoad, item.src]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !shouldLoad) return;

    if (!shouldPlay || userPaused) {
      video.pause();
      setPlaying(false);
      return undefined;
    }

    let cancelled = false;

    const tryPlay = () => {
      if (cancelled || !videoRef.current) return;
      video.muted = true;
      const playPromise = video.play();
      if (playPromise?.then) {
        playPromise
          .then(() => {
            if (!cancelled) setPlaying(true);
          })
          .catch(() => {
            if (!cancelled) setPlaying(false);
          });
      }
    };

    if (video.readyState >= 2) {
      tryPlay();
    } else {
      video.addEventListener("loadeddata", tryPlay, { once: true });
      video.addEventListener("canplay", tryPlay, { once: true });
    }

    return () => {
      cancelled = true;
      video.removeEventListener("loadeddata", tryPlay);
      video.removeEventListener("canplay", tryPlay);
    };
  }, [shouldPlay, shouldLoad, userPaused]);

  const togglePlay = async () => {
    const video = videoRef.current;
    if (!video || !shouldLoad) return;

    if (!video.paused) {
      video.pause();
      setPlaying(false);
      setUserPaused(true);
      return;
    }

    setUserPaused(false);
    video.muted = true;
    try {
      await video.play();
      setPlaying(true);
    } catch {
      setPlaying(false);
    }
  };

  return (
    <article
      ref={cardRef}
      className="astro-video-card"
      data-video-id={item.id}
    >
      <button
        type="button"
        className="astro-video-card__media"
        onClick={togglePlay}
        aria-label={`${playing ? "Pause" : "Play"} ${item.title}`}
      >
        <video
          ref={videoRef}
          className="astro-video-card__video"
          muted
          playsInline
          loop
          preload="metadata"
          disablePictureInPicture
        />
        <span className="astro-video-card__scrim" aria-hidden="true" />
        <span
          className={`astro-video-card__play ${playing ? "is-playing" : ""}`}
          aria-hidden="true"
        >
          {playing ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
        </span>
        <span
          className={`astro-video-card__badge is-${item.badgeTone}`}
          aria-hidden="true"
        >
          <img src={item.badge} alt="" />
        </span>
      </button>
      <h3 className="astro-video-card__title">{item.title}</h3>
    </article>
  );
}

export default function CustomerVideosSection({
  title = "Loved by Seekers Across India",
  videos = CUSTOMER_VIDEOS,
}) {
  const trackRef = useRef(null);
  const sectionRef = useRef(null);
  const nodesRef = useRef(new Map());
  const ratiosRef = useRef(new Map());
  const [sectionInView, setSectionInView] = useState(false);
  const [pageVisible, setPageVisible] = useState(
    typeof document === "undefined" ? true : document.visibilityState === "visible"
  );
  const [loadIds, setLoadIds] = useState(() => new Set());
  const [playIds, setPlayIds] = useState(() => new Set());

  const registerVideo = useCallback((id, refs) => {
    if (!refs) {
      nodesRef.current.delete(id);
      ratiosRef.current.delete(id);
      return;
    }
    nodesRef.current.set(id, refs);
  }, []);

  const recomputePlayback = useCallback(() => {
    if (!sectionInView || !pageVisible) {
      setPlayIds(new Set());
      return;
    }

    const ranked = [...ratiosRef.current.entries()]
      .filter(([, ratio]) => ratio > 0.35)
      .sort((a, b) => b[1] - a[1])
      .slice(0, MAX_CONCURRENT_PLAY)
      .map(([id]) => id);

    setPlayIds(new Set(ranked));

    const near = [...ratiosRef.current.entries()]
      .filter(([, ratio]) => ratio > 0.05)
      .map(([id]) => id);
    setLoadIds(new Set(near));
  }, [sectionInView, pageVisible]);

  useEffect(() => {
    const onVisibility = () => {
      setPageVisible(document.visibilityState === "visible");
    };
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => setSectionInView(entry.isIntersecting && entry.intersectionRatio > 0.15),
      { threshold: [0, 0.15, 0.35, 0.6] }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const id = entry.target.getAttribute("data-video-id");
          if (!id) continue;
          ratiosRef.current.set(id, entry.isIntersecting ? entry.intersectionRatio : 0);
        }
        recomputePlayback();
      },
      {
        root: track,
        threshold: [0, 0.15, 0.35, 0.5, 0.75, 1],
        rootMargin: "0px 40px",
      }
    );

    const observeAll = () => {
      track.querySelectorAll("[data-video-id]").forEach((node) => observer.observe(node));
    };
    observeAll();

    // Re-observe after React paints cards
    const raf = requestAnimationFrame(observeAll);

    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
    };
  }, [videos, recomputePlayback]);

  useEffect(() => {
    recomputePlayback();
  }, [recomputePlayback]);

  const scrollByCards = (dir) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector(".astro-video-card");
    const amount = card ? card.getBoundingClientRect().width + 16 : 220;
    track.scrollBy({ left: dir * amount * 2, behavior: "smooth" });
  };

  return (
    <section
      ref={sectionRef}
      className="astro-section astro-videos-section"
      aria-labelledby="astro-videos-heading"
    >
      <div className="astro-videos-head">
        <h2 id="astro-videos-heading" className="astro-videos-title">
          {title}
        </h2>
        <div className="astro-videos-nav" aria-hidden={videos.length < 2}>
          <button
            type="button"
            className="astro-videos-nav__btn"
            onClick={() => scrollByCards(-1)}
            aria-label="Scroll videos left"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            className="astro-videos-nav__btn"
            onClick={() => scrollByCards(1)}
            aria-label="Scroll videos right"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div ref={trackRef} className="astro-videos-track" tabIndex={0}>
        {videos.map((item) => (
          <VideoCard
            key={item.id}
            item={item}
            shouldLoad={loadIds.has(item.id) || playIds.has(item.id)}
            shouldPlay={playIds.has(item.id)}
            registerVideo={registerVideo}
          />
        ))}
      </div>
    </section>
  );
}
