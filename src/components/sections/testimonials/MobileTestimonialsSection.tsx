"use client";

import React, { useRef, useEffect, useState, useMemo } from "react";
import { useApp } from "@/context/app-context";
import useIsRTL from "@/hooks/useIsRTL";
import { useIsMobile } from "@/hooks/use-mobile";
import SectionText from "@/components/SectionText";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import TestimonialCard from "@/components/TestimonialCard";

function useMirroredImage(src: string, mirror: boolean) {
  const [mirroredSrc, setMirroredSrc] = useState<string>(src);
  useEffect(() => {
    if (!mirror) {
      setMirroredSrc(src);
      return;
    }
    const image = new Image();
    image.crossOrigin = "anonymous";
    image.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = image.width;
      canvas.height = image.height;
      const ctx = canvas.getContext("2d");
      if (!ctx) {
        setMirroredSrc(src);
        return;
      }
      ctx.translate(canvas.width, 0);
      ctx.scale(-1, 1);
      ctx.drawImage(image, 0, 0);
      setMirroredSrc(canvas.toDataURL());
    };
    image.onerror = () => setMirroredSrc(src);
    image.src = src;
  }, [src, mirror]);
  return mirroredSrc;
}

export default function MobileTestimonialsSection() {
  const { t } = useApp();
  const isMobile = useIsMobile();
  const isRTL = useIsRTL();

  const measureRef = useRef<HTMLDivElement>(null);
  const [elementWidth, setElementWidth] = useState(0);
  const [windowWidth, setWindowWidth] = useState<number>(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
    }
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);


  useEffect(() => {
    if (!measureRef.current) return;
    const updateWidth = () =>
      setElementWidth(measureRef.current?.getBoundingClientRect().width || 0);
    updateWidth();
    const resizeObs = new ResizeObserver(updateWidth);
    resizeObs.observe(measureRef.current);
    return () => resizeObs.disconnect();
  }, []);

  // Font scaling
  const baseWidth = 1226;
  const reductionStep = 36;
  const reductionRate = 0.0125;
  const criticalWidth = 1190;
  let fontScale = 1;
  if (elementWidth <= criticalWidth) {
    const steps = Math.floor((baseWidth - elementWidth) / reductionStep);
    fontScale = Math.max(0.5, 1 - steps * reductionRate);
  }

  // Padding interpolation
  const maxW = 1220;
  const minW = 200;
  const clampW = Math.min(Math.max(elementWidth, minW), maxW);
  const ratio = (clampW - minW) / (maxW - minW);
  const padY = 3.2 + (32 - 3.2) * ratio;
  const padX = 4 + (40 - 4) * ratio;
  const dynamicPadding = `${padY.toFixed(2)}px ${padX.toFixed(2)}px`;

  // Interpolate testimonialHeight + testimonialStartFraction
  const minBreakpoint = 694;
  const maxBreakpoint = 1152;
  const minHeight = 224;
  const maxHeight = 266;
  const minFraction = 0.675;
  const maxFraction = 0.81;

  let ratioBreak = 0;
  if (elementWidth <= minBreakpoint) ratioBreak = 0;
  else if (elementWidth >= maxBreakpoint) ratioBreak = 1;
  else
    ratioBreak = (elementWidth - minBreakpoint) / (maxBreakpoint - minBreakpoint);

  let rawHeight = minHeight + (maxHeight - minHeight) * ratioBreak;

  // Ensure EVEN integer value
  let testimonialHeight = Math.round(rawHeight);
  if (testimonialHeight % 2 !== 0) {
    testimonialHeight += 1; // round to nearest even
  }

  const testimonialStartFraction =
    minFraction + (maxFraction - minFraction) * ratioBreak;

  // Mirror RTL image
  const taliaMirroredImage = useMirroredImage(
    "/images/testimonials/talia-lewin.webp",
    isRTL
  );

  const testimonials = useMemo(
    () => [
      {
        id: "t1",
        quote: t("testimonial_1_quote"),
        name: t("testimonial_1_name"),
        designation: t("testimonial_1_designation"),
        rating: t("testimonial_1_rating"),
        src: "/images/testimonials/naomi-bright.webp",
      },
      {
        id: "t2",
        quote: t("testimonial_2_quote"),
        name: t("testimonial_2_name"),
        designation: t("testimonial_2_designation"),
        rating: t("testimonial_2_rating"),
        src: isRTL ? taliaMirroredImage : "/images/testimonials/talia-lewin.webp",
      },
      {
        id: "t3",
        quote: t("testimonial_3_quote"),
        name: t("testimonial_3_name"),
        designation: t("testimonial_3_designation"),
        rating: t("testimonial_3_rating"),
        src: "/images/testimonials/hannah-miller.webp",
      },
    ],
    [t, isRTL, taliaMirroredImage]
  );

  return (
    <section
      ref={measureRef}
      className={`relative overflow-hidden flex flex-col transition duration-300 ease-in-out ${
        isMobile ? "justify-start min-h-0 py-14" : "py-20"
      }`}
    >
      <SectionText
        title={t("testimonials_title")}
        description={t("testimonials_description")}
        isRTL={isRTL}
      />

      <div>
        {windowWidth < 800 ? (
          <div className="flex flex-col gap-3">
            {testimonials.map((item, idx) => (
              <TestimonialCard
                key={item.id}
                name={item.name}
                designation={item.designation}
                rating={item.rating || "5.0"}
                quote={item.quote}
                imageSrc={item.src}
                mirrorImage={isRTL && idx === 1} 
                isRTL={isRTL}
                fontScale={fontScale}
              />
            ))}
          </div>
        ) : (
          <TestimonialCarousel
            testimonials={testimonials}
            isRTL={isRTL}
            testimonialHeight={testimonialHeight}
            testimonialStartFraction={testimonialStartFraction}
            imageAspectRatio="1 / 1"
            imageBorderRadius="12px"
            testimonialPadding={dynamicPadding}
            nameFontSize={`${1.5 * fontScale}rem`}
            designationFontSize={`${0.875 * fontScale}rem`}
            quoteFontSize={`${1 * fontScale}rem`}
            autoplay
            autoplayInterval={5000}
            showFirstSentenceOnly
            colors={{
              name: "var(--foreground)",
              designation: "var(--sub-foreground)",
              testimony: "var(--middle-foreground)",
              arrowBackground: "var(--foreground)",
              arrowHoverBackground: "var(--accent)",
              arrowForeground: "var(--background)",
              arrowForegroundHover: "var(--foreground)",
            }}
          />
        )}
      </div>

    </section>
  );
}
