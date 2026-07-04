"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { MultiColoredTextV1 } from "@/components/MultiColoredText";
import { useApp } from "@/context/app-context";
import { cn } from "@/lib/utils";
import { PhoneCallIcon } from "lucide-react";
import { getColorHarmonies } from "@/lib/colorHarmonies";
import LimitedWidthWrapper from "@/components/limited-width-wrapper";
import HighlightHover from "@/components/HighlightHover";

interface NavItem {
  id: string;
  label: string;
  icon?: React.ReactElement;
  targetId: string;
}

interface EnhancedFooterProps {
  navItems: NavItem[];
  paddingDesktop: string;
  paddingMobile: string;
  maxWidth: string;
  isMobile: boolean;
  isRTL: boolean;
}

export default function EnhancedFooter({
  navItems,
  paddingDesktop,
  paddingMobile,
  maxWidth,
  isMobile,
  isRTL,
}: EnhancedFooterProps) {
  const { lang, t } = useApp();
  const containerRef = useRef<HTMLDivElement>(null);
  const [fontSize, setFontSize] = useState(`${15.2}em`);
  const [rotation, setRotation] = useState(isRTL ? 225 : 135);
  const [isVisible, setIsVisible] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [primaryColor, setPrimaryColor] = useState("var(--foreground)");
  const [harmonies, setHarmonies] = useState({
    analogous: [] as string[],
    triad: [] as string[],
  });

  useEffect(() => {
    const style = getComputedStyle(document.documentElement);
    const accent = style.getPropertyValue("--accent").trim();
    if (accent) setPrimaryColor(accent);
  }, []);

  useEffect(() => {
    if (!primaryColor) return;
    const harmoniesData = getColorHarmonies(primaryColor);
    setHarmonies({
      analogous: harmoniesData.analogous,
      triad: harmoniesData.triad,
    });
  }, [primaryColor]);

  useEffect(() => {
    function updateFontSize() {
      if (!containerRef.current) return;
      const width = containerRef.current.clientWidth;
      if (width < 280) {
        setIsVisible(false);
        return;
      }
      setIsVisible(true);
      if (width >= 1536) {
        setFontSize(`${15.2}em`);
        return;
      }
      const clampedWidth = Math.min(Math.max(width, 280), 1536);
      const normalizedScale = (clampedWidth - 280) / (1536 - 280);
      const nonLinearScale = Math.pow(normalizedScale, 0.8);
      let fSize = 1.6 + nonLinearScale * (15.2 - 1.6);
      fSize *= lang === "he" ? 1.14 : 0.96;
      setFontSize(`${fSize.toFixed(2)}em`);
    }
    updateFontSize();
    window.addEventListener("resize", updateFontSize);
    return () => window.removeEventListener("resize", updateFontSize);
  }, [lang]);

  useEffect(() => {
    let angle = isRTL ? 225 : 135;
    const interval = setInterval(() => {
      angle += isRTL ? -15 : 15;
      setRotation(angle);
    }, 2000);
    return () => clearInterval(interval);
  }, [isRTL]);

  const gapClass = isRTL
    ? isMobile
      ? "gap-[6.5px]"
      : "gap-[7px]"
    : isMobile
    ? "gap-[5.5px]"
    : "gap-[6px]";
  const multiTextColors =
    harmonies.analogous.length && harmonies.triad.length
      ? [harmonies.analogous[2], primaryColor, harmonies.triad[1]]
      : [primaryColor, "var(--accent)", primaryColor];

  const handleSmoothScroll = (targetId: string) => {
    const scrollContainer = document.getElementById("page-scroll-container");
    if (!scrollContainer) return;
    const el =
      targetId === "hero"
        ? document.getElementById("hero-anchor")
        : document.getElementById(targetId);
    if (el)
      scrollContainer.scrollTo({ top: el.offsetTop, behavior: "smooth" });
  };

  const logoFontSize = isMobile ? "text-[19px]" : "text-xl";

const madeByText: Record<
  string,
  {
    line1: { text: string; isLink: boolean; link?: { href: string; text: string } }[];
    line2: { text: string; isLink: boolean; link?: { href: string; text: string } }[];
    line3: { text: string; isLink: boolean; link?: { href: string; text: string } }[];
  }
> = {
      en: {
        line1: [
          { text: "Made by", isLink: false },
          { text: " ", isLink: false },
          { text: "Maxim Bortnikov", isLink: true, link: { href: "https://maxim-bortnikov.netlify.app/", text: "Maxim Bortnikov" } }
        ],
        line2: [
          { text: "using", isLink: false },
          { text: " ", isLink: false },
          { text: "Next.js", isLink: true, link: { href: "https://nextjs.org/", text: "Next.js" } },
          { text: ",", isLink: false },
          { text: " ", isLink: false },
          { text: "Perplexity", isLink: true, link: { href: "https://www.perplexity.ai/", text: "Perplexity" } },
          { text: ",", isLink: false }
        ],
        line3: [
          { text: "and ", isLink: false },
          { text: "Firebase Studio", isLink: true, link: { href: "https://firebase.google.com/", text: "Firebase Studio" } }
        ]
      },
      he: {
        line1: [
          { text: "מאת", isLink: false },
          { text: " ", isLink: false },
          { text: "מקסים בורטניקוב", isLink: true, link: { href: "https://maxim-bortnikov.netlify.app/", text: "מקסים בורטניקוב" } }
        ],
        line2: [
          { text: "העבודה באמצעות", isLink: false },
          { text: " ", isLink: false },
          { text: "Next.js", isLink: true, link: { href: "https://nextjs.org/", text: "Next.js" } },
          { text: ",", isLink: false },
          { text: " ", isLink: false },
          { text: "Perplexity", isLink: true, link: { href: "https://www.perplexity.ai/", text: "Perplexity" } },
          { text: ",", isLink: false }
        ],
        line3: [
          { text: "ו", isLink: false },
          { text: "פיירבייס סטודיו", isLink: true, link: { href: "https://firebase.google.com/", text: "פיירבייס סטודיו" } }
        ]
      },
      it: {
        line1: [
          { text: "Realizzato da", isLink: false },
          { text: " ", isLink: false },
          { text: "Maxim Bortnikov", isLink: true, link: { href: "https://maxim-bortnikov.netlify.app/", text: "Maxim Bortnikov" } }
        ],
        line2: [
          { text: "utilizza", isLink: false },
          { text: " ", isLink: false },
          { text: "Next.js", isLink: true, link: { href: "https://nextjs.org/", text: "Next.js" } },
          { text: ",", isLink: false },
          { text: " ", isLink: false },
          { text: "Perplexity", isLink: true, link: { href: "https://www.perplexity.ai/", text: "Perplexity" } },
          { text: ",", isLink: false }
        ],
        line3: [
          { text: "e ", isLink: false },
          { text: "Firebase Studio", isLink: true, link: { href: "https://firebase.google.com/", text: "Firebase Studio" } }
        ]
      }
    };

    const renderMadeBy = (lang: string) => {
      const m = madeByText[lang as keyof typeof madeByText] || madeByText.en;

      const renderLine = (
        segments: {
          text: string;
          isLink: boolean;
          link?: { href: string; text: string };
        }[],
      ) =>
        segments.map((seg, idx) => {
          if (seg.isLink) {
            return (
              <HighlightHover
                key={idx}
                as="a"
                href={seg.link!.href}
                target="_blank"
                rel="noopener noreferrer"
                barThickness={0.06}
                gapRatio={0.03}
                className="cursor-pointer text-[var(--sub-foreground)]"
                style={{ margin: 0, display: "inline" }}
              >
                {seg.link!.text}
              </HighlightHover>
            );
          } else {
            // Render spaces as non-breaking to preserve them visibly
            const textToRender = seg.text === " " ? "\u00A0" : seg.text;
            return (
              <span
                key={idx}
                style={{
                  display: "inline-block",
                  margin: 0,
                  whiteSpace: "pre",
                  verticalAlign: "bottom",
                }}
              >
                {textToRender}
              </span>
            );
          }
        });

      return (
        <div
          className="text-[var(--sub-foreground)] text-sm"
          style={{
            lineHeight: 1.8,
            textAlign: isMobile ? "center" : "start",
          }}
        >
          <div style={{ margin: 0 }}>{renderLine(m.line1)}</div>
          <div style={{ margin: 0 }}>{renderLine(m.line2)}</div>
          <div style={{ margin: 0 }}>{renderLine(m.line3)}</div>
        </div>
      );
    };

  return (
    <footer
      className="w-full text-[var(--foreground)] flex flex-col items-center border-t border-[var(--button-border-color)]"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className={cn(isMobile ? "h-[24px]" : "h-[36px]")} />
      <LimitedWidthWrapper
        expandToFull={false}
        maxWidth={maxWidth}
        paddingDesktop={paddingDesktop}
        paddingMobile={paddingMobile}
      >
        <div className={`flex flex-col gap-12 ${isMobile ? "items-center" : ""}`}>
          <div
            className={`grid grid-cols-1 gap-8 ${!isMobile ? "grid-cols-4" : ""}`}
            style={{
              textAlign: isMobile ? "center" : "start",
              justifyItems: isMobile ? "center" : "start",
              alignItems: isMobile ? "center" : "start",
            }}
          >
            {/* Logo + description */}
            <div
            className={cn(
                "flex flex-col",
                isMobile ? "items-center" : "items-start"
            )}
            style={{ textAlign: isMobile ? "center" : "start" }}
            >
              <a
                href="#hero"
                onClick={(e) => {
                  e.preventDefault();
                  handleSmoothScroll("hero");
                }}
                className={`group/logo flex items-center font-bold ${gapClass} justify-center`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                style={{
                  color: isHovered ? primaryColor : "var(--foreground)",
                  transition: "color 0.3s ease-in-out",
                  userSelect: "none",
                  fontSize: isMobile ? 19 : 20,
                  maxWidth: "max-content",
                }}
              >
                <Image
                  src="/images/esin-orhan-icon.png"
                  alt=""
                  width={isMobile ? 30 : 32}
                  height={isMobile ? 30 : 32}
                  aria-hidden="true"
                  className="rounded-[6px] shadow-[0_10px_28px_rgba(0,0,0,0.24)]"
                />
                <span
                  className={`font-bold ${logoFontSize} transition-colors duration-300 ease-in-out`}
                >
                  {t("salon_name")}
                </span>
              </a>
              <p className="text-[var(--sub-foreground)] text-sm mt-4">
                {t("hero_subtitle")}
              </p>
              <p className="mt-6 max-w-[18rem] text-sm leading-6 text-[var(--sub-foreground)]">
                4,9 puan ve 433 Google yorumu. Randevu, ücretsiz cilt analizi ve bakım planı için bize ulaşın.
              </p>
            </div>

            {/* Navigation */}
            <nav
              aria-label="Footer Navigation"
              style={{
                direction: isRTL ? "rtl" : "ltr",
                textAlign: isMobile ? "center" : "start",
                justifySelf: isMobile ? "center" : "start",
              }}
            >
              <h3 className="font-semibold text-[var(--foreground)] mb-4">
                {t("footer_navigation")}
              </h3>
              <ul
                className={`space-y-[2px] ${
                  isMobile ? "flex flex-col items-center" : ""
                }`}
              >
                {navItems.map(({ id, label, targetId }) => (
                  <li key={id} style={{ maxWidth: "max-content" }}>
                    <a
                      href={id === "hero" ? "#hero" : `#${targetId}`}
                      onClick={(event) => {
                        event.preventDefault();
                        handleSmoothScroll(id);
                        window.history.replaceState(null, "", id === "hero" ? "#hero" : `#${targetId}`);
                      }}
                    >
                    <HighlightHover
                      as="span"
                      barThickness={0.09}
                      gapRatio={0.03}
                      className="cursor-pointer"
                    >
                      {label}
                    </HighlightHover>
                    </a>
                  </li>
                ))}

              </ul>
            </nav>

            {/* Opening Hours */}
            <div
              style={{
                textAlign: isMobile ? "center" : "start",
                justifySelf: isMobile ? "center" : "start",
              }}
            >
              <h3 className="font-semibold text-[var(--foreground)] mb-4">
                {t("footer_opening_hours")}
              </h3>
              <ul className="space-y-3 text-[var(--sub-foreground)] text-sm">
                <li>{t("footer_hours_sun_thu")}</li>
                <li>{t("footer_hours_fri")}</li>
                <li>{t("footer_hours_sat")}</li>
              </ul>
            </div>

            {/* Contact */}
            <div
              className="flex flex-col items-center md:items-start"
              style={{
                textAlign: isMobile ? "center" : "start",
                justifySelf: isMobile ? "center" : "start",
                alignItems: isMobile ? "center" : "start",
              }}
            >
              <h3 className="font-semibold text-[var(--foreground)] mb-4">
                {t("footer_contact")}
              </h3>
              <div
                className="flex items-center gap-2 mb-2"
                style={{
                  justifyContent: isMobile ? "center" : "flex-start",
                  width: isMobile ? "100%" : "auto",
                }}
              >
                <PhoneCallIcon className="w-4 h-4 text-[var(--sub-foreground)]" />
                <HighlightHover
                  as="a"
                  href="tel:+905011133232"
                  barThickness={0.09}
                  gapRatio={0.03}
                  className="text-[var(--sub-foreground)] cursor-pointer"
                  style={{ direction: "ltr" }}
                >
                  +90 501 113 32 32
                </HighlightHover>
              </div>
              <p
                className="text-[var(--sub-foreground)] text-sm"
                style={{
                  lineHeight: 1.8,
                  width: "100%",
                  textAlign: isMobile ? "center" : "start",
                }}
              >
                {t("salon_address_line1")}
                <br />
                {t("salon_address_line2")}
                <br />
                {t("salon_address_line3")}
              </p>
            </div>
          </div>

          {false && (
            <div
              className="w-full flex justify-center my-10"
              style={{
                display: "flex",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                <div
                  ref={containerRef}
                  dir={isRTL ? "rtl" : "ltr"}
                  className="overflow-hidden flex justify-center"
                  style={{
                    maxWidth: maxWidth,
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <MultiColoredTextV1
                    inscription={lang === "he" ? "קלאנדסטין" : t("salon_name")}
                    fontSize={fontSize}
                    colors={multiTextColors}
                    separatorRotation={`${rotation}deg`}
                    fontWeight={700}
                  />
                </div>
              </div>
            </div>
          )}
            <div className="hidden"
            style={{
                height: "1px",
                width: "100%",
                backgroundColor: "var(--button-border-color)",
            }}
            />
          <div className="hidden text-center text-[var(--sub-foreground)] text-sm mb-12">
            <div className="w-full flex justify-center">
            <ul
                className={`space-y-[2px] flex flex-col items-center text-[var(--foreground)] text-base leading-[1.8]`}
                style={{
                paddingTop: 0,
                paddingBottom: 0,
                margin: 0,
                listStyle: "none",
                }}
            >
                <li
                tabIndex={0}
                style={{
                    maxWidth: "max-content",
                    lineHeight: "1.6",
                    height: "auto",
                    textAlign: "center",
                }}
                >
                <HighlightHover
                    as="a"
                    href="https://ispartaguzellikmerkezi.com"
                    target="_blank"
                    barThickness={0.12}
                    gapRatio={0.03}
                    className="cursor-pointer"
                >
                    {t("github_repository")}
                </HighlightHover>
                </li>
            </ul>
            </div>
          </div>
        </div>
      </LimitedWidthWrapper>
    </footer>
  );
}
