"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import type { MouseEvent } from "react";
import { Menu, X } from "lucide-react";
import LimitedWidthWrapper from "@/components/limited-width-wrapper";
import { getLegacyBackdropStyle } from "@/components/LegacyBackdrop";

const siteLink = "https://wa.me/905011133232?text=Merhaba%2C%20randevu%20almak%20istiyorum.";

type HeaderLink = {
  label: string;
  href: string;
  hashTarget?: string;
};

const headerLinks: HeaderLink[] = [
  { label: "Ana Sayfa", href: "/" },
  { label: "Hizmetler", href: "/hizmetler" },
  { label: "Kıl Kökü Analizi", href: "/#analysis", hashTarget: "analysis" },
  { label: "Uzmanlık", href: "/#masters", hashTarget: "masters" },
  { label: "Yorumlar", href: "/#testimonials", hashTarget: "testimonials" },
  { label: "Blog", href: "/blog" },
  { label: "SSS", href: "/#faq", hashTarget: "faq" },
];

function scrollToHomeTarget(targetId: string) {
  const container = document.getElementById("page-scroll-container");
  const target = document.getElementById(targetId);
  if (!target) return;

  if (container && container instanceof HTMLElement) {
    container.scrollTo({ top: target.offsetTop, behavior: "smooth" });
    return;
  }

  target.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function SiteHeader() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navStyle = useMemo(
    () =>
      getLegacyBackdropStyle({
        supportsBackdropFilter: true,
        bodyOpacity: 0.66,
        borderOpacity: 0.12,
        blurStrength: 6,
        isScrolled: false,
      }),
    []
  );

  useEffect(() => {
    if (pathname !== "/") return;
    const hash = window.location.hash.replace("#", "");
    if (!hash) return;

    const timer = window.setTimeout(() => scrollToHomeTarget(hash), 50);
    return () => window.clearTimeout(timer);
  }, [pathname]);

  const handleHashClick = (event: MouseEvent<HTMLAnchorElement>, targetId: string) => {
    if (pathname !== "/") return;
    event.preventDefault();
    setMobileMenuOpen(false);
    scrollToHomeTarget(targetId);
  };

  const handleLogoClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (pathname !== "/") return;
    event.preventDefault();
    setMobileMenuOpen(false);
    scrollToHomeTarget("hero");
  };

  return (
    <div className="sticky top-0 z-[1000] w-full bg-transparent">
      <LimitedWidthWrapper
        expandToFull={false}
        maxWidth="1448px"
        paddingDesktop="16px"
        paddingMobile="10px"
      >
        <header
          className="relative flex items-center justify-between overflow-hidden rounded-[var(--navbar-border-radius)] px-4 py-3 sm:px-6"
          style={navStyle}
        >
          <Link
            href="/"
            onClick={handleLogoClick}
            className="flex items-center gap-3 font-bold text-white transition-colors hover:text-[var(--accent)]"
          >
            <Image
              src="/images/esin-orhan-mark.webp"
              alt="Esin Orhan Estetik ve Güzellik logosu"
              width={70}
              height={45}
              priority
              className="h-9 w-14 rounded-[4px] bg-white object-contain p-1 sm:h-10 sm:w-16"
            />
            <span className="hidden text-[18px] font-bold leading-none sm:inline">
              Esin Orhan Güzellik Merkezi
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {headerLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={link.hashTarget ? (event) => handleHashClick(event, link.hashTarget!) : undefined}
                className="rounded-full px-3 py-2 text-sm font-medium text-white/72 transition-colors hover:text-[var(--accent)]"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={siteLink}
              target="_blank"
              rel="noreferrer"
              className="ml-2 inline-flex items-center justify-center border border-[#d9bd73] bg-[#d9bd73] px-4 py-2 text-sm font-semibold text-[#07100d]"
            >
              Randevu al
            </a>
          </nav>

          <div className="flex items-center gap-3 lg:hidden">
            <a
              href={siteLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center border border-[#d9bd73] bg-[#d9bd73] px-4 py-2 text-sm font-semibold text-[#07100d]"
            >
              Randevu al
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen((value) => !value)}
              className="inline-flex h-11 w-11 items-center justify-center border border-white/[0.12] bg-white/[0.04] text-white transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
              aria-label={mobileMenuOpen ? "Menüyü kapat" : "Menüyü aç"}
              aria-expanded={mobileMenuOpen}
              aria-controls="global-mobile-nav"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          {mobileMenuOpen && (
            <div
              id="global-mobile-nav"
              className="absolute left-3 right-3 top-[calc(100%+10px)] z-50 border border-white/[0.12] bg-[#07100d]/96 p-2 shadow-[0_24px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl lg:hidden"
            >
              {headerLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={link.hashTarget ? (event) => handleHashClick(event, link.hashTarget!) : undefined}
                  className="flex min-h-12 items-center border-b border-white/[0.08] px-4 text-sm font-semibold text-white/78 last:border-b-0 hover:bg-white/[0.04] hover:text-[var(--accent)]"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          )}
        </header>
      </LimitedWidthWrapper>
    </div>
  );
}
