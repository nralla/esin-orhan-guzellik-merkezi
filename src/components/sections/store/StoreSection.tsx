"use client";
import React, { useEffect, useRef, useState, useMemo } from "react";
import { ShoppingBag } from "lucide-react";
import { useApp } from "@/context/app-context";
import { useIsMobile } from "@/hooks/use-mobile";
import useIsRTL from "@/hooks/useIsRTL";
import SectionText from "@/components/SectionText";
import LimitedWidthWrapper from "@/components/limited-width-wrapper";
import InflectedCard, { InflectedCardProps, Tag } from "@/components/InflectedCard";

const PRODUCTS_RAW = [
  {
    id: "prod-1",
    imageSrc: "/images/products/shampoo.webp",
    titleKey: "product_1_name",
    descriptionKey: "product_1_description",
    categoryKey: "product_1_category",
    volumeKey: "product_1_volume",
    oldPriceKey: "product_1_oldPrice",
    priceKey: "product_1_price",
  },
  {
    id: "prod-2",
    imageSrc: "/images/products/serum.webp",
    titleKey: "product_2_name",
    descriptionKey: "product_2_description",
    categoryKey: "product_2_category",
    volumeKey: "product_2_volume",
    oldPriceKey: "product_2_oldPrice",
    priceKey: "product_2_price",
  },
  {
    id: "prod-3",
    imageSrc: "/images/products/lotion.webp",
    titleKey: "product_3_name",
    descriptionKey: "product_3_description",
    categoryKey: "product_3_category",
    volumeKey: "product_3_volume",
    oldPriceKey: "product_3_oldPrice",
    priceKey: "product_3_price",
  },
  {
    id: "prod-4",
    imageSrc: "/images/products/candle.webp",
    titleKey: "product_4_name",
    descriptionKey: "product_4_description",
    categoryKey: "product_4_category",
    volumeKey: "product_4_volume",
    oldPriceKey: "product_4_oldPrice",
    priceKey: "product_4_price",
  },
  {
    id: "prod-5",
    imageSrc: "/images/products/cream.webp",
    titleKey: "product_5_name",
    descriptionKey: "product_5_description",
    categoryKey: "product_5_category",
    volumeKey: "product_5_volume",
    oldPriceKey: "product_5_oldPrice",
    priceKey: "product_5_price",
  },
  {
    id: "prod-6",
    imageSrc: "/images/products/oil.webp",
    titleKey: "product_6_name",
    descriptionKey: "product_6_description",
    categoryKey: "product_6_category",
    volumeKey: "product_6_volume",
    oldPriceKey: "product_6_oldPrice",
    priceKey: "product_6_price",
  },
];

interface StoreSectionProps {
  maxWidth: string;
  paddingDesktop: string;
  paddingMobile: string;
}

export default function StoreSection({
  maxWidth,
  paddingDesktop,
  paddingMobile,
}: StoreSectionProps) {
  const { t } = useApp();
  const isMobile = useIsMobile();
  const isRTL = useIsRTL();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(1200);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );
  const minBreakpoint = 694;

  useEffect(() => {
    if (!sectionRef.current) return;
    const update = () => {
      setContainerWidth(sectionRef.current!.getBoundingClientRect().width || 1200);
    };
    update();
    const observer = new window.ResizeObserver(update);
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [sectionRef]);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
      handleResize();
    }
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);

  let cardsPerRow = 3;
  let gapPx = 16;
  if (isMobile) {
    gapPx = 12;
    cardsPerRow = windowWidth < minBreakpoint ? 1 : 2;
  }

  const products: InflectedCardProps[] = useMemo(() => {
    return PRODUCTS_RAW.map((p) => {
      const tags: Tag[] = [
        {
          name: t(p.categoryKey),
          textColor: "var(--foreground)",
          backgroundColor: "var(--accent)",
          rounding: 8,
          tagHoverBrightness: 0.19,
        },
        {
          name: t(p.volumeKey),
          textColor: "var(--background)",
          backgroundColor: "var(--foreground)",
          rounding: 8,
          tagHoverBrightness: 0.76,
        },
      ];
      return {
        id: p.id,
        image: p.imageSrc,
        title: t(p.titleKey),
        description: t(p.descriptionKey),
        tags,
        parentBackgroundColor: "var(--background)",
        fontSizes: {
          title: "21px",
          description: "15px",
          tags: "13px",
          price: "16px",
        },
        colors: {
          title: "var(--foreground)",
          description: "var(--middle-foreground)",
        },
        priceTagRounding: "12px",
        oldPriceTextColor: "var(--sub-foreground)",
        priceTagTextColor: "var(--foreground)",
        titleLineClamp: 1,
        // Remove descriptionLineClamp when cardsPerRow is 1 (one item per line)
        ...(cardsPerRow === 1 ? {} : { descriptionLineClamp: 2 }),
        buttonIcon: <ShoppingBag />,
        mirrored: isRTL,
        imageHoverZoom: 1.3,
        ...(isMobile
          ? {}
          : {
              useAspectRatio: true,
              aspectRatio: "160/91",
            }),
        buttonIconColor: "var(--background)",
        buttonIconHoverColor: "var(--foreground)",
        buttonBackgroundColor: "var(--foreground)",
        buttonBackgroundHoverColor: "var(--accent)",
        ...(isRTL
          ? {
              titleAlignment: "right",
              descriptionAlignment: "right",
          }
          : {}),
        price: t(p.priceKey),
        oldPrice: t(p.oldPriceKey),
      };
    });
  }, [t, isRTL, isMobile, cardsPerRow]);

  return (
    <section
      ref={sectionRef}
      className={`relative overflow-hidden flex flex-col transition duration-300 ease-in-out ${
        isMobile ? "justify-start min-h-0 py-14" : "py-20"
      }`}
    >
      <LimitedWidthWrapper
        expandToFull={false}
        maxWidth={maxWidth}
        paddingDesktop={paddingDesktop}
        paddingMobile={paddingMobile}
      >
        <SectionText
          title={t("store_title")}
          description={t("store_description")}
          isRTL={isRTL}
        />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${cardsPerRow}, minmax(0, 1fr))`,
            gap: `${gapPx}px`,
            marginTop: isMobile ? 24 : 50,
            marginBottom: 16,
          }}
        >
          {products.map((card) => (
            <InflectedCard key={card.id} {...card} />
          ))}
        </div>
      </LimitedWidthWrapper>
    </section>
  );
}
