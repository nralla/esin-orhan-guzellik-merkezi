"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Calendar, ChevronLeft, ChevronRight, Cpu, ScanLine, Sparkles } from "lucide-react";
import { useApp } from "@/context/app-context";
import useIsRTL from "@/hooks/useIsRTL";
import SectionText from "@/components/SectionText";
import LimitedWidthWrapper from "@/components/limited-width-wrapper";
import RefinedChronicleButton from "@/components/RefinedChronicleButton";
import { rawMasters } from "@/lib/data";

interface MastersSectionProps {
  bookAppointmentClicked: (masterId: string) => void;
  maxWidth: string;
  paddingDesktop: string;
  paddingMobile: string;
}

export default function MastersSection({
  bookAppointmentClicked,
  maxWidth,
  paddingDesktop,
  paddingMobile,
}: MastersSectionProps) {
  const { t } = useApp();
  const isRTL = useIsRTL();
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const visualProfiles = [
    { icon: ScanLine, label: "Kişisel Lazer Uygulaması", code: "LASER / 01" },
    { icon: Sparkles, label: "Cilt Protokolleri", code: "SKIN / 02" },
    { icon: Cpu, label: "Teknoloji & Güvenlik", code: "TECH / 03" },
  ];

  const masters = rawMasters.map((master, index) => ({
    id: master.id,
    initials: master.hint,
    name: t(master.nameKey),
    designation: t(master.specializationKey),
    description: t(master.infoKey),
    visual: visualProfiles[index],
  }));

  useEffect(() => {
    const interval = window.setInterval(() => {
      setDirection(1);
      setActiveIndex((current) => (current + 1) % masters.length);
    }, 6000);
    return () => window.clearInterval(interval);
  }, [masters.length]);

  const move = (step: number) => {
    setDirection(step);
    setActiveIndex((current) => (current + step + masters.length) % masters.length);
  };

  const activeMaster = masters[activeIndex];
  const ActiveVisualIcon = activeMaster.visual.icon;

  return (
    <section className="relative overflow-hidden py-14 md:py-20">
      <LimitedWidthWrapper
        expandToFull={false}
        maxWidth={maxWidth}
        paddingDesktop={paddingDesktop}
        paddingMobile={paddingMobile}
      >
        <SectionText
          title={t("masters_title")}
          description={t("masters_description")}
          isRTL={isRTL}
        />

        <div className="mt-10 grid items-stretch gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14">
          <div className="relative min-h-[360px] overflow-hidden rounded-lg border border-[var(--button-border-color)] bg-[#0d1512] sm:min-h-[470px]">
            <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(var(--button-border-color)_1px,transparent_1px),linear-gradient(90deg,var(--button-border-color)_1px,transparent_1px)] [background-size:48px_48px]" />
            <div className="absolute inset-8 rounded-lg border border-[var(--accent)]/25 sm:inset-12" />
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={activeMaster.id}
                custom={direction}
                initial={{ opacity: 0, x: direction > 0 ? 70 : -70, filter: "blur(8px)" }}
                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, x: direction > 0 ? -70 : 70, filter: "blur(8px)" }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="relative flex h-[72%] w-[76%] flex-col justify-between border-l border-t border-[var(--accent)]/55 p-7 sm:p-10">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-xs font-black uppercase tracking-[0.18em] text-[var(--accent)]">
                      {activeMaster.visual.code}
                    </span>
                    <span className="h-px flex-1 bg-[var(--accent)]/25" />
                  </div>
                  <div className="flex items-center justify-center text-[var(--accent)]">
                    <ActiveVisualIcon className="h-28 w-28 stroke-[0.9] sm:h-40 sm:w-40" />
                  </div>
                  <div className="flex items-end justify-between gap-6">
                    <span className="max-w-[14rem] text-lg font-semibold leading-6 text-[var(--foreground)] sm:text-2xl sm:leading-8">
                      {activeMaster.visual.label}
                    </span>
                    <span className="grid h-9 w-9 place-items-center border border-[var(--accent)]/50 text-xs font-black text-[var(--accent)]">
                      0{activeIndex + 1}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="absolute bottom-5 left-5 flex gap-2">
              {masters.map((master, index) => (
                <button
                  key={master.id}
                  type="button"
                  aria-label={`${master.name} profilini göster`}
                  onClick={() => {
                    setDirection(index > activeIndex ? 1 : -1);
                    setActiveIndex(index);
                  }}
                  className={`h-1.5 rounded-full transition-all ${
                    index === activeIndex ? "w-10 bg-[var(--accent)]" : "w-5 bg-white/25"
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="flex min-h-[360px] flex-col justify-center py-2 lg:py-8">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={activeMaster.id}
                custom={direction}
                initial={{ opacity: 0, y: direction > 0 ? 24 : -24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: direction > 0 ? -24 : 24 }}
                transition={{ duration: 0.4 }}
              >
                <span className="text-sm font-black uppercase tracking-[0.16em] text-[var(--accent)]">
                  {String(activeIndex + 1).padStart(2, "0")} / {String(masters.length).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-4xl font-bold text-[var(--foreground)] sm:text-5xl">
                  {activeMaster.name}
                </h3>
                <p className="mt-3 text-base font-bold text-[var(--accent)] sm:text-lg">
                  {activeMaster.designation}
                </p>
                <p className="mt-7 max-w-xl text-base leading-8 text-[var(--middle-foreground)]">
                  {activeMaster.description}
                </p>
              </motion.div>
            </AnimatePresence>

            <div className="mt-10 flex items-center gap-3">
              <button
                type="button"
                title="Önceki uzman"
                aria-label="Önceki uzman"
                onClick={() => move(-1)}
                className="grid h-12 w-12 place-items-center rounded-lg border border-[var(--button-border-color)] text-[var(--foreground)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                <ChevronLeft size={21} />
              </button>
              <button
                type="button"
                title="Sonraki uzman"
                aria-label="Sonraki uzman"
                onClick={() => move(1)}
                className="grid h-12 w-12 place-items-center rounded-lg border border-[var(--button-border-color)] text-[var(--foreground)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                <ChevronRight size={21} />
              </button>
              <div className="ml-2 min-w-0 flex-1 sm:ml-4">
                <RefinedChronicleButton
                  backgroundColor="var(--foreground)"
                  textColor="var(--background)"
                  hoverBackgroundColor="var(--accent)"
                  hoverTextColor="var(--background)"
                  borderVisible={false}
                  buttonHeight="3rem"
                  width="100%"
                  isRTL={isRTL}
                  onClick={() => bookAppointmentClicked(activeMaster.id)}
                >
                  <Calendar size={18} strokeWidth={2} style={{ marginRight: 8 }} />
                  {t("book_appointment_button")}
                </RefinedChronicleButton>
              </div>
            </div>
          </div>
        </div>
      </LimitedWidthWrapper>
    </section>
  );
}
