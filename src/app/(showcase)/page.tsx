"use client";

import * as React from "react";
import { useRef, useEffect, useState, useCallback } from "react";
import Navbar, { NavItem } from "@/components/CustomizedTruncatingNavbar";
import {
  Sparkles,
  Users,
  Info,
  MessageSquareQuote,
  HomeIcon,
  HelpCircle,
  ScanLine,
  Newspaper,
} from "lucide-react";
import useIsRTL from "@/hooks/useIsRTL";
import { useTranslation } from "@/context/app-context";
import LimitedWidthWrapper from "@/components/limited-width-wrapper";
import OptimizedHeroSection from "@/components/sections/hero/OptimizedHeroSection";
import LaserAnalysisSection from "@/components/sections/laser-analysis/LaserAnalysisSection";
import SocialProofSection from "@/components/sections/social-proof/SocialProofSection";
import { useApp } from "@/context/app-context";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  OptimizedAboutSection,
  OptimizedBlogSection,
  OptimizedGallerySection,
  OptimizedExpertiseSection,
  OptimizedFaqSection,
  OptimizedFooter,
  OptimizedServicesSection,
} from "@/components/sections/optimized/OptimizedContentSections";
import dynamic from "next/dynamic";

const BookingModal = dynamic(() => import("@/components/BookingModal/index"), { ssr: false });
const ReservationSuccessModal = dynamic(() => import("@/components/ReservationSuccessModal"), { ssr: false });

const HEIGHT_MIN = 800;
const HEIGHT_MAX = 912;

const LARGE_SETTINGS = {
  CONTENT_MAX_WIDTH: "1448px",
  NAVBAR_PADDING_DESKTOP: 24,
  NAVBAR_PADDING_MOBILE: 10,
  CONTENT_PADDING_DESKTOP: 48,
  CONTENT_PADDING_MOBILE: 20,
};

const SMALL_SETTINGS = {
  CONTENT_MAX_WIDTH: "1306px",
  NAVBAR_PADDING_DESKTOP: 16,
  NAVBAR_PADDING_MOBILE: 10,
  CONTENT_PADDING_DESKTOP: 40,
  CONTENT_PADDING_MOBILE: 20,
};

function lerp(min: number, max: number, t: number) {
  return min + (max - min) * t;
}

export default function HomePage() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isRTL = useIsRTL();
  const { lang } = useApp();
  const [animationKey, setAnimationKey] = useState(0);
  const [windowHeight, setWindowHeight] = useState(HEIGHT_MAX);
  const isMobile = useIsMobile();

  const [showBookingModal, setShowBookingModal] = useState(false);
  const [lockedMasterId, setLockedMasterId] = useState<string | undefined>();
  const [preselectedServiceId, setPreselectedServiceId] = useState<string | undefined>();

  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [confirmedBooking, setConfirmedBooking] = useState<any | null>(null);

  useEffect(() => {
    setAnimationKey((v) => v + 1);
  }, [lang]);

  useEffect(() => {
    function onResize() {
      setWindowHeight(window.innerHeight);
    }
    window.addEventListener("resize", onResize);
    onResize();
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const t =
    windowHeight >= HEIGHT_MAX
      ? 1
      : windowHeight <= HEIGHT_MIN
      ? 0
      : (windowHeight - HEIGHT_MIN) / (HEIGHT_MAX - HEIGHT_MIN);

  const NAVBAR_PADDING_DESKTOP = `${lerp(
    SMALL_SETTINGS.NAVBAR_PADDING_DESKTOP,
    LARGE_SETTINGS.NAVBAR_PADDING_DESKTOP,
    t
  )}px`;

  const NAVBAR_PADDING_MOBILE = `${lerp(
    SMALL_SETTINGS.NAVBAR_PADDING_MOBILE,
    LARGE_SETTINGS.NAVBAR_PADDING_MOBILE,
    t
  )}px`;

  const CONTENT_PADDING_DESKTOP = `${lerp(
    SMALL_SETTINGS.CONTENT_PADDING_DESKTOP,
    LARGE_SETTINGS.CONTENT_PADDING_DESKTOP,
    t
  )}px`;

  const CONTENT_PADDING_MOBILE = `${lerp(
    SMALL_SETTINGS.CONTENT_PADDING_MOBILE,
    LARGE_SETTINGS.CONTENT_PADDING_MOBILE,
    t
  )}px`;

  function interpolatePx(minPxStr: string, maxPxStr: string, t: number) {
    const minPx = parseInt(minPxStr, 10);
    const maxPx = parseInt(maxPxStr, 10);
    const val = Math.round(lerp(minPx, maxPx, t));
    return `${val}px`;
  }

  const CONTENT_MAX_WIDTH = interpolatePx(
    SMALL_SETTINGS.CONTENT_MAX_WIDTH,
    LARGE_SETTINGS.CONTENT_MAX_WIDTH,
    t
  );

  const transl = useTranslation();

  const navItems: NavItem[] = [
    { id: "hero", label: transl("section_label_hero"), icon: <HomeIcon />, targetId: "hero" },
    { id: "services", label: transl("services_title"), icon: <Sparkles />, targetId: "services" },
    { id: "analysis", label: "Kıl Kökü Analizi", icon: <ScanLine />, targetId: "analysis" },
    { id: "masters", label: transl("masters_title"), icon: <Users />, targetId: "masters" },
    { id: "testimonials", label: transl("testimonials_title"), icon: <MessageSquareQuote />, targetId: "testimonials" },
    { id: "about", label: transl("about_us_title"), icon: <Info />, targetId: "about" },
    { id: "gallery", label: "Galeri", icon: <Sparkles />, targetId: "gallery" },
    { id: "blog", label: "Blog", icon: <Newspaper />, targetId: "blog" },
    { id: "faq", label: transl("faq_title"), icon: <HelpCircle />, targetId: "faq" },
  ];

  const Section = ({
    id,
    bg,
    height,
    children,
  }: {
    id: string;
    bg: string;
    height: string;
    children?: React.ReactNode;
  }) => (
    <div
      id={id}
      style={{
        background: bg,
        minHeight: height,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        contentVisibility: id === "hero" ? "visible" : "auto",
        containIntrinsicSize: id === "hero" ? undefined : "900px",
      }}
    >
      <LimitedWidthWrapper
        expandToFull={false}
        maxWidth={CONTENT_MAX_WIDTH}
        paddingDesktop={CONTENT_PADDING_DESKTOP}
        paddingMobile={CONTENT_PADDING_MOBILE}
      >
        {children || id}
      </LimitedWidthWrapper>
    </div>
  );

  const SectionWithExternalWidthLimiter = ({
    id,
    bg,
    height,
    children,
  }: {
    id: string;
    bg: string;
    height: string;
    children?: React.ReactNode;
  }) => (
    <div
      id={id}
      style={{
        background: bg,
        minHeight: height,
        position: "relative",
        contentVisibility: "auto",
        containIntrinsicSize: "900px",
      }}
      className="flex flex-col"
    >
      {children}
    </div>
  );

  // Handle buttons that open the modal for different modes

  const handleButtonClick = useCallback((buttonKey: "schedule" | "explore") => {
    if (buttonKey === "explore" && scrollContainerRef.current) {
      const target = document.getElementById("services");
      if (target) {
        scrollContainerRef.current.scrollTo({
          top: target.offsetTop,
          behavior: "smooth",
        });
      }
    }
    if (buttonKey === "schedule") {
      // Default generic booking mode: no pre-locked master or service
      setLockedMasterId(undefined);
      setPreselectedServiceId(undefined);
      setShowBookingModal(true);
    }
  }, []);

  const handleBookAppointmentClicked = (masterId: string) => {
    // Master-specific mode: locked master
    setLockedMasterId(masterId);
    setPreselectedServiceId(undefined);
    setShowBookingModal(true);
  };

  const handleServiceClicked = (serviceId: string) => {
    // Service-specific mode: preselect service, no locked master
    setPreselectedServiceId(serviceId);
    setLockedMasterId(undefined);
    setShowBookingModal(true);
  };

  // Final booking confirmation handler
  const handleConfirmBooking = (data: any) => {
    const date = new Intl.DateTimeFormat("tr-TR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    }).format(new Date(data.date));
    const message = [
      "Merhaba, web sitenizden randevu talebi oluşturuyorum.",
      `Ad Soyad: ${data.contact.fullName}`,
      `Telefon: ${data.contact.phone}`,
      `Hizmet: ${data.service.name}`,
      `Uygulama Alanı: ${data.master.name}`,
      `Tarih: ${date}`,
      `Saat: ${data.time}`,
      data.contact.district ? `İlçe: ${data.contact.district}` : "",
      data.contact.note ? `Not: ${data.contact.note}` : "",
    ]
      .filter(Boolean)
      .join("\n");
    window.open(`https://wa.me/905011133232?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
    setShowBookingModal(false);
    setConfirmedBooking(data);
    setShowSuccessModal(true);
  };

  return (
    <div
      className="flex flex-col min-h-screen bg-[var(--background)]"
      style={{
        backgroundImage:
          "radial-gradient(circle at 14% 10%, rgba(217, 189, 115, 0.08), transparent 22%), radial-gradient(circle at 86% 14%, rgba(123, 177, 164, 0.06), transparent 24%), linear-gradient(180deg, rgba(255,255,255,0.015), transparent 14%, transparent 86%, rgba(255,255,255,0.01))",
      }}
    >
      <React.Fragment key={animationKey}>
          <div className="flex flex-col min-h-screen bg-[var(--background)]">
              <div
                id="page-scroll-container"
                ref={scrollContainerRef}
                className="flex-grow overflow-y-auto overflow-x-hidden h-screen pb-6"
              >
              <div id="hero-anchor" style={{ height: 0, margin: 0, padding: 0 }} />
              <div className="sticky top-0 z-[1000] w-full bg-transparent">
                <LimitedWidthWrapper
                  expandToFull={false}
                  maxWidth={CONTENT_MAX_WIDTH}
                  paddingDesktop={NAVBAR_PADDING_DESKTOP}
                  paddingMobile={NAVBAR_PADDING_MOBILE}
                >
                  <Navbar
                    navItems={navItems}
                    isRTL={isRTL}
                    isMobile={isMobile}
                    scrollContainerRef={scrollContainerRef}
                  />
                </LimitedWidthWrapper>
              </div>
              <main className="flex-1">
                <Section id="hero" bg="transparent" height="auto">
                  <OptimizedHeroSection onButtonClick={handleButtonClick} />
                </Section>
                <div style={{ height: "2px" }} />
                <SectionWithExternalWidthLimiter
                  id="services"
                  bg="#0f1613"
                  height="auto"
                >
                  <OptimizedServicesSection onServiceClick={handleServiceClicked} />
                </SectionWithExternalWidthLimiter>
                <div className="h-[2px] bg-[#0f1613]" />
                <SectionWithExternalWidthLimiter id="analysis" bg="#111914" height="auto">
                  <LaserAnalysisSection
                    onBook={() => handleServiceClicked("laser_epilation")}
                  />
                </SectionWithExternalWidthLimiter>
                <div className="h-[2px] bg-[#0f1613]" />
                <SectionWithExternalWidthLimiter id="gallery" bg="#0c1411" height="auto">
                  <OptimizedGallerySection />
                </SectionWithExternalWidthLimiter>
                <div className="h-[2px] bg-[#0c1411]" />
                <SectionWithExternalWidthLimiter id="blog" bg="#0c1411" height="auto">
                  <OptimizedBlogSection />
                </SectionWithExternalWidthLimiter>
                <div className="h-[2px] bg-[#0c1411]" />
                <SectionWithExternalWidthLimiter
                  id="masters"
                  bg="transparent"
                  height="auto"
                >
                  <OptimizedExpertiseSection />
                </SectionWithExternalWidthLimiter>
                <div className="h-[2px]" />
                <SectionWithExternalWidthLimiter id="testimonials" bg="#090f0d" height="auto">
                  <SocialProofSection />
                </SectionWithExternalWidthLimiter>
                <div className="h-[2px] bg-[#0f1613]" />
                <SectionWithExternalWidthLimiter id="about" bg="#0f1613" height="auto">
                  <OptimizedAboutSection onBook={() => handleButtonClick("schedule")} />
                </SectionWithExternalWidthLimiter>
                <div className="h-[2px] bg-[#0f1613]" />
                <SectionWithExternalWidthLimiter
                  id="faq"
                  bg="transparent"
                  height="auto"
                >
                  <OptimizedFaqSection />
                </SectionWithExternalWidthLimiter>
                <SectionWithExternalWidthLimiter
                  id="irrelevant"
                  bg="#0d1512"
                  height="auto"
                >
                  <OptimizedFooter />
                </SectionWithExternalWidthLimiter>
              </main>
            </div>
            <BookingModal
              isOpen={showBookingModal}
              onClose={() => setShowBookingModal(false)}
              onConfirm={handleConfirmBooking}
              lockedMasterId={lockedMasterId}
              preselectedServiceId={preselectedServiceId}
            />
            {confirmedBooking && (
              <ReservationSuccessModal
                isOpen={showSuccessModal}
                onClose={() => setShowSuccessModal(false)}
                bookingData={confirmedBooking}
                iconColor="#49c85a"
                iconCircleColor="rgba(73, 196, 90, 0.5)"
              />
            )}
          </div>
      </React.Fragment>
    </div>
  );
}
