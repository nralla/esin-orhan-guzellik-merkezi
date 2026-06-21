"use client";
import React, { useRef, useEffect, useState, useMemo } from "react";
import { useApp } from "@/context/app-context";
import useIsRTL from "@/hooks/useIsRTL";
import { useIsMobile } from "@/hooks/use-mobile";
import SectionText from "@/components/SectionText";
import { CircularTestimonials } from "@/components/CircularTestimonials";

// Hook that accepts image src and a mirror flag; returns mirrored image data URL or original
function useMirroredImage(src: string, mirror: boolean) {
  const [mirroredSrc, setMirroredSrc] = useState<string>(src);

  useEffect(() => {
    if (!mirror) {
      setMirroredSrc(src);
      return;
    }
    const image = new Image();
    image.crossOrigin = "anonymous"; // important for cross-origin images

    image.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = image.width;
      canvas.height = image.height;
      const ctx = canvas.getContext("2d");
      if (!ctx) {
        setMirroredSrc(src);
        return;
      }
      // Mirror on Y axis using scaleX(-1) and translate
      ctx.translate(canvas.width, 0);
      ctx.scale(-1, 1);
      ctx.drawImage(image, 0, 0);
      const dataUrl = canvas.toDataURL();
      setMirroredSrc(dataUrl);
    };

    image.onerror = () => setMirroredSrc(src);
    image.src = src;
  }, [src, mirror]);

  return mirroredSrc;
}

export default function TestimonialsSection() {
  const { t } = useApp();
  const isMobile = useIsMobile();
  const isRTL = useIsRTL();

  const sectionRef = useRef<HTMLElement>(null);
  const measureRef = useRef<HTMLDivElement>(null);
  const [elementWidth, setElementWidth] = useState(0);

  const lerp = (
    x: number,
    x0: number,
    x1: number,
    y0: number,
    y1: number
  ): number => {
    return y0 + ((x - x0) * (y1 - y0)) / (x1 - x0);
  };

  const WIDTH_MAX = 1352;
  const WIDTH_MIN = 1174;

  const STYLES_MAX = {
    gap: 4.9,
    imageWidth: 77.3,
    imageContainerTranslateX: 76,
    testimonialTextTranslateY: 56,
    arrowContainerTranslateY: 325,
    mb: 164, // for WIDTH_MAX
  };

  const STYLES_MIN = {
    gap: 4.4,
    imageWidth: 78,
    imageContainerTranslateX: 64,
    testimonialTextTranslateY: 19,
    arrowContainerTranslateY: 349,
    mb: 92, // for WIDTH_MIN
  };

  // Compute dynamic styles with continuous linear extension outside range
  const dynamicStyles = {
    gap: `${lerp(
      elementWidth,
      WIDTH_MIN,
      WIDTH_MAX,
      STYLES_MIN.gap,
      STYLES_MAX.gap
    ).toFixed(2)}rem`,
    imageWidth: `${lerp(
      elementWidth,
      WIDTH_MIN,
      WIDTH_MAX,
      STYLES_MIN.imageWidth,
      STYLES_MAX.imageWidth
    ).toFixed(2)}%`,
    imageContainerTranslateX: `${lerp(
      elementWidth,
      WIDTH_MIN,
      WIDTH_MAX,
      STYLES_MIN.imageContainerTranslateX,
      STYLES_MAX.imageContainerTranslateX
    ).toFixed(2)}px`,
    testimonialTextTranslateY: `${lerp(
      elementWidth,
      WIDTH_MIN,
      WIDTH_MAX,
      STYLES_MIN.testimonialTextTranslateY,
      STYLES_MAX.testimonialTextTranslateY
    ).toFixed(2)}px`,
    arrowContainerTranslateY: `${lerp(
      elementWidth,
      WIDTH_MIN,
      WIDTH_MAX,
      STYLES_MIN.arrowContainerTranslateY,
      STYLES_MAX.arrowContainerTranslateY
    ).toFixed(2)}px`,
    mb: `${lerp(
      elementWidth,
      WIDTH_MIN,
      WIDTH_MAX,
      STYLES_MIN.mb,
      STYLES_MAX.mb
    ).toFixed(2)}px`,
  };

  const taliaMirroredImage = useMirroredImage(
    "/images/testimonials/talia-lewin.webp",
    isRTL
  );

  const testimonials = useMemo(() => {
    return [
      {
        id: "dark-testimonial-1",
        quote: t("testimonial_1_quote"),
        name: t("testimonial_1_name"),
        designation: t("testimonial_1_designation"),
        src: "/images/testimonials/naomi-bright.webp",
      },
      {
        id: "dark-testimonial-2",
        quote: t("testimonial_2_quote"),
        name: t("testimonial_2_name"),
        designation: t("testimonial_2_designation"),
        src: isRTL
          ? taliaMirroredImage
          : "/images/testimonials/talia-lewin.webp",
      },
      {
        id: "dark-testimonial-3",
        quote: t("testimonial_3_quote"),
        name: t("testimonial_3_name"),
        designation: t("testimonial_3_designation"),
        src: "/images/testimonials/hannah-miller.webp",
      },
    ];
  }, [t, isRTL, taliaMirroredImage]);

  useEffect(() => {
    if (!measureRef.current) return;

    const updateWidth = () => {
      const width = measureRef.current?.getBoundingClientRect().width || 0;
      setElementWidth(width);
    };

    updateWidth();
    const timerId = setTimeout(updateWidth, 2000);
    const resizeObserver = new ResizeObserver(updateWidth);
    resizeObserver.observe(measureRef.current);

    return () => {
      clearTimeout(timerId);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`relative overflow-hidden flex flex-col transition duration-300 ease-in-out ${
        isMobile ? "justify-start min-h-0 py-14" : "py-20"
      }`}
    >
      <SectionText
        title={t("testimonials_title")}
        description={t("testimonials_description")}
        isRTL={isRTL}
      />

      <div
        className="mt-[18px]"
        style={{ marginBottom: dynamicStyles.mb }}
        ref={measureRef}
      >
        <CircularTestimonials
          testimonials={testimonials}
          autoplay={true}
          autoplayInterval={5000}
          gap={dynamicStyles.gap}
          imageWidth={dynamicStyles.imageWidth}
          imageContainerTranslateX={dynamicStyles.imageContainerTranslateX}
          testimonialTextTranslateY={dynamicStyles.testimonialTextTranslateY}
          arrowContainerTranslateY={dynamicStyles.arrowContainerTranslateY}
          colors={{
            name: "var(--foreground)",
            designation: "var(--sub-foreground)",
            testimony: "var(--middle-foreground)",
            arrowBackground: "var(--foreground)",
            arrowHoverBackground: "var(--accent)",
            arrowForeground: "var(--background)",
            arrowForegroundHover: "var(--foreground)",
          }}
          fontSizes={{
            name: "22px",
            designation: "15.25px",
            quote: "17.675px",
          }}
          isRTL={isRTL}
        />
      </div>
    </section>
  );
}