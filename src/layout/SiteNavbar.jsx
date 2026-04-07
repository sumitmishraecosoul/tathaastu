import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useConnectModal } from "../contexts/ConnectModalContext";
import SliderOpener from "../components/Home/SliderOpener";
import tathaastuLogo from "../assets/tathaastu_logo.png";

const NAV_LINKS = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Courses", path: "/courses" },
  { name: "Blog", path: "/blog" },
  { name: "Pricing", path: "/pricing" },
  { name: "Contact", path: "/contact" },
];

/**
 * Header: cream bar (#F5D6B4), logo left, links centered (desktop), CTA right.
 * @param {object} props
 * @param {React.ReactNode} [props.endSlot] — replaces default “Get a Free Prediction” button
 */
export default function SiteNavbar({ endSlot = null }) {
  const { openModal } = useConnectModal();

  return (
    <header className="sticky top-0 z-[100] bg-[#F5D6B4] shadow">
      <div className="relative mx-auto flex max-w-[1920px] items-center px-4 py-3 md:px-6 lg:px-12">
        <div className="flex min-w-0 flex-1 items-center gap-3 sm:gap-4">
          <div className="shrink-0 md:hidden">
            <SliderOpener />
          </div>
          <Link
            to="/"
            className="flex shrink-0 items-center gap-2 rounded-sm outline-none ring-offset-2 ring-offset-[#F5D6B4] focus-visible:ring-2 focus-visible:ring-[#073349]"
          >
            <img
              src={tathaastuLogo}
              alt="Tathaastu"
              className="h-12 w-auto md:h-16 lg:h-20"
              width={160}
              height={64}
            />
          </Link>
        </div>

        <nav
          className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 md:flex md:items-center md:gap-5 lg:gap-8"
          aria-label="Main navigation"
        >
          {NAV_LINKS.map(({ name, path }) => (
            <NavLink
              key={path}
              to={path}
              end={path === "/"}
              className={({ isActive }) =>
                [
                  "whitespace-nowrap text-sm font-medium tracking-wide transition-colors",
                  isActive
                    ? "text-[#D44459]"
                    : "text-[#073349] hover:text-[#D44459]",
                ].join(" ")
              }
            >
              {name}
            </NavLink>
          ))}
        </nav>

        <div className="flex flex-1 items-center justify-end gap-2 sm:gap-3">
          {endSlot ?? (
            <button
              type="button"
              onClick={openModal}
              className="rounded-lg border border-[#073349] px-3 py-2 text-xs font-medium text-[#073349] shadow-sm transition-colors hover:bg-[#073349]/10 hover:text-[#D44459] hover:border-[#D44459] sm:px-4 sm:text-sm"
            >
              Get a Free Prediction
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
