"use client";

import React, { useRef } from "react";
import { useTranslation } from "@/context/app-context";
import useIsRTL from "@/hooks/useIsRTL";
import ButtonSection from "./ButtonSection";
import useMobileButtonHeight from "@/hooks/useMobileButtonHeight";
import TechnologyBadge from "@/components/TechnologyBadge";
import Image from "next/image";

interface MobileHeroSectionProps {
  onButtonClick?: (buttonKey: "schedule" | "explore") => void;
}

export default function MobileHeroSection({ onButtonClick }: MobileHeroSectionProps) {
  const isRTL = useIsRTL();
  const sectionRef = useRef<HTMLElement>(null);
  const t = useTranslation();
  const mobileButtonHeight = useMobileButtonHeight();

  return (
    <section
      ref={sectionRef}
      className="relative flex w-full flex-col items-center justify-center pt-3 text-center"
      style={{ height: "auto" }}
      dir={isRTL ? "rtl" : "ltr"}
    >
      <TechnologyBadge className="mb-6 mr-1 max-w-[350px] self-end px-3 py-2.5 text-[11px]" />
      <h1
        className="flex w-full flex-col items-center justify-center text-[40px] font-bold leading-tight text-[var(--foreground)] sm:text-[52px]"
      >
        <span>{t("hero_title_prefix")}</span>
        <span className="mt-2 bg-[var(--accent)] px-3 py-1 text-[#0b110f]">keşfet</span>
      </h1>

      <p
        className="mt-5 text-base leading-7 text-[var(--sub-foreground)]"
      >
        {t("hero_subtext")}
      </p>

      <div className="w-full flex justify-center">
        <ButtonSection
          buttonsBelowOneAnother
          mobileButtonHeight={mobileButtonHeight}
          isRTL={isRTL}
          onButtonClick={onButtonClick}
        />
      </div>

      <div className="mt-16 w-full">
        <div className="relative mx-auto aspect-[1600/1842] w-full max-w-[430px] overflow-hidden rounded-[8px] border border-white/10">
          <Image
            src="/images/hero.webp"
            alt="Esin Orhan Güzellik Merkezi Isparta lazer epilasyon uygulaması"
            fill
            priority
            sizes="(max-width: 480px) 90vw, 430px"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
