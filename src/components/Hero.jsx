import React from "react";
import heroImage from "../assets/image25.png";
import { Link } from "react-router-dom";


const Hero = () => {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-black">
      {/* Full-bleed background image */}
      <img
        src={heroImage}
        alt="Hero background"
        className="absolute inset-0 h-full w-full object-cover object-center"
        loading="eager"
      />

      {/* Apple-like readability layers */}
      <div className="absolute inset-0 bg-black/45" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/25 to-black/70" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_420px_at_20%_25%,rgba(255,255,255,0.10),transparent_60%)]" />

      {/* Subtle color accents */}
      <div className="pointer-events-none absolute -top-24 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-violet-500/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-28 right-[-120px] h-[520px] w-[520px] rounded-full bg-blue-500/15 blur-3xl" />

      {/* Content */}
      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl items-center px-6 py-16">
        <div className="grid w-full grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Copy */}
          <div className="lg:col-span-6">
            <div className="max-w-xl text-white">
              {/* Eyebrow */}
              <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-4 py-2 backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-white/80" />
                <p className="text-[11px] font-semibold tracking-[0.28em] uppercase text-white/75">
                  Our Bestsellers
                </p>
              </div>

              {/* Headline */}
              <h1 className="Prata-regular text-4xl font-semibold leading-[1.02] tracking-[-0.05em] sm:text-5xl lg:text-6xl">
                Latest arrivals.
                <br />
                Designed to last.
              </h1>

              {/* Supporting text */}
              <p className="mt-5 max-w-lg text-sm leading-relaxed text-white/75 sm:text-base">
                Premium essentials with a modern fit — clean, quiet, and built
                for everyday wear.
              </p>

              {/* CTAs */}
              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="/product/21"
                  className="group inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-black shadow-[0_14px_40px_-20px_rgba(0,0,0,0.65)] transition hover:scale-[1.01] active:scale-[0.99] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                >
                  Shop now
                  <svg
                    className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                    viewBox="0 0 20 20"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M7 4l6 6-6 6"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>

                <Link
                  to="/collection"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                >
                  View collection
                </Link>

              </div>

              {/* Micro trust row */}
              <div className="mt-10 flex flex-wrap gap-x-8 gap-y-2 text-xs text-white/60">
                <span>Premium print</span>
                <span>Oversized fit</span>
                <span>Acid-wash fabric</span>
              </div>
            </div>
          </div>

          {/* Minimal “preview card” (optional, Apple-like) */}
          <div className="lg:col-span-6 lg:justify-self-end">
            <div className="hidden w-full max-w-md lg:block">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-[0_40px_120px_-70px_rgba(0,0,0,0.85)] backdrop-blur-xl">
                <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/20">
                  <img
                    src={heroImage}
                    alt="Featured"
                    className="h-[280px] w-full object-cover object-center"
                  />
                </div>

                <div className="mt-5">
                  <p className="text-[11px] font-semibold tracking-[0.28em] uppercase text-white/60">
                    Featured Drop
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-white">
                    Moro Backprint — Acid Wash Tee
                  </h3>
                  <p className="mt-2 text-sm text-white/70">
                    Full-back artwork, high contrast, premium feel.
                  </p>

                  <div className="mt-5 flex items-center justify-between">
                    <span className="text-sm font-semibold text-white">
                      $49.99
                    </span>
                    <a
                      href="#shop"
                      className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold text-white transition hover:bg-white/15"
                    >
                      Buy now
                    </a>
                  </div>
                </div>
              </div>

              {/* Small label */}
              <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-white/70 backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/80" />
                Limited drop · Ships worldwide
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade for smooth transition */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/70 to-transparent" />
    </section>
  );
};

export default Hero;
