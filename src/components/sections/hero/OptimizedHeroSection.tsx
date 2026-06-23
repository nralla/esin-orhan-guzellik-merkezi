"use client";

import Image from "next/image";
import { ArrowDown, CalendarDays, MessageSquareQuote, Star } from "lucide-react";
import TechnologyBadge from "@/components/TechnologyBadge";

interface OptimizedHeroSectionProps {
  onButtonClick: (buttonKey: "schedule" | "explore") => void;
}

export default function OptimizedHeroSection({ onButtonClick }: OptimizedHeroSectionProps) {
  return (
    <section className="grid min-h-[calc(100svh-72px)] w-full items-start gap-10 py-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14 lg:py-12">
      <style jsx>{`
        @keyframes wordCycle {
          0%, 18% { transform: translateY(0); opacity: 1; }
          22%, 100% { transform: translateY(-120%); opacity: 0; }
        }
        @keyframes wordCycle2 {
          0%, 22% { transform: translateY(120%); opacity: 0; }
          26%, 44% { transform: translateY(0); opacity: 1; }
          48%, 100% { transform: translateY(-120%); opacity: 0; }
        }
        @keyframes wordCycle3 {
          0%, 48% { transform: translateY(120%); opacity: 0; }
          52%, 70% { transform: translateY(0); opacity: 1; }
          74%, 100% { transform: translateY(-120%); opacity: 0; }
        }
        @keyframes wordCycle4 {
          0%, 74% { transform: translateY(120%); opacity: 0; }
          78%, 96% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(-120%); opacity: 0; }
        }
      `}</style>
      <div className="order-1 flex flex-col pt-4 text-center lg:min-h-[720px] lg:pt-10 lg:text-left">
        <TechnologyBadge className="mx-auto mb-7 w-fit max-w-[350px] px-3 py-2.5 text-[11px] lg:mx-0" />
        <p className="mb-4 text-sm font-semibold uppercase text-[#d9bd73]">
          Ücretsiz kıl kökü ve cilt analizi
        </p>
        <h1 className="text-[40px] font-bold leading-[1.08] text-white sm:text-[52px] lg:text-[64px]">
          Isparta Lazer Epilasyon
          <span className="mt-2 block text-[#d9bd73]">Kişiye Özel Planlama</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[#aab6ae] sm:text-lg lg:mx-0">
          Kıl kökü ve cilt analiziyle size uygun lazer sistemini belirliyor; kadın ve erkek lazer epilasyon sürecini Çünür&apos;de kişiye özel planlıyoruz.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
          <button
            type="button"
            onClick={() => onButtonClick("schedule")}
            className="inline-flex min-h-12 items-center justify-center gap-2 border border-[#d9bd73] bg-[#d9bd73] px-6 font-semibold text-[#0b110f] transition-colors hover:bg-transparent hover:text-[#d9bd73]"
          >
            <CalendarDays className="h-5 w-5" />
            Ücretsiz analiz randevusu
          </button>
          <a
            href="#services"
            onClick={(event) => {
              event.preventDefault();
              onButtonClick("explore");
            }}
            className="inline-flex min-h-12 items-center justify-center gap-2 border border-white/20 px-6 font-semibold text-white transition-colors hover:border-[#d9bd73] hover:text-[#d9bd73]"
          >
            Hizmetleri incele <ArrowDown className="h-5 w-5" />
          </a>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-5 text-sm text-white/70 lg:justify-start">
          <span className="inline-flex items-center gap-2">
            <Star className="h-4 w-4 fill-[#f4c84b] text-[#f4c84b]" /> 4,9 Google puanı
          </span>
          <span className="inline-flex items-center gap-2">
            <MessageSquareQuote className="h-4 w-4 text-[#d9bd73]" /> +430 yorum
          </span>
        </div>

        <div className="mt-8 flex-1 items-end lg:flex lg:items-center">
          <div className="mx-auto w-full max-w-[560px] rounded-[8px] border border-white/10 bg-white/[0.03] px-5 py-4 text-left shadow-[0_20px_50px_rgba(0,0,0,0.14)] backdrop-blur-sm lg:mx-0 lg:max-w-[620px] lg:px-6 lg:py-5">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[11px] font-semibold uppercase tracking-[0.26em] text-white/45">
              <span>Güzelleştir</span>
              <span className="relative inline-block h-[1.15em] min-w-[10ch] overflow-hidden rounded-[6px] bg-[#d9bd73] px-4 py-1 text-[#0b110f]">
                <span className="absolute inset-0 flex items-center justify-center font-bold" style={{ animation: "wordCycle 8s infinite ease-in-out" }}>yenile</span>
                <span className="absolute inset-0 flex items-center justify-center font-bold" style={{ animation: "wordCycle2 8s infinite ease-in-out" }}>ışıldat</span>
                <span className="absolute inset-0 flex items-center justify-center font-bold" style={{ animation: "wordCycle3 8s infinite ease-in-out" }}>koru</span>
                <span className="absolute inset-0 flex items-center justify-center font-bold" style={{ animation: "wordCycle4 8s infinite ease-in-out" }}>canlandır</span>
              </span>
            </div>
            <p className="mt-3 w-full max-w-[20ch] text-[28px] font-bold leading-[1.05] tracking-[-0.03em] text-white sm:text-[34px] lg:max-w-[22ch] lg:text-[44px]">
              Isparta&apos;nın
              <span className="relative mt-2 block h-[1.08em] overflow-hidden text-[#d9bd73]">
                <span className="absolute inset-x-0 top-0" style={{ animation: "wordCycle 10s infinite ease-in-out" }}>memnuniyet oranı en yüksek</span>
                <span className="absolute inset-x-0 top-0" style={{ animation: "wordCycle2 10s infinite ease-in-out" }}>en çok tercih edilen</span>
                <span className="absolute inset-x-0 top-0" style={{ animation: "wordCycle3 10s infinite ease-in-out" }}>en güvenilen</span>
                <span className="absolute inset-x-0 top-0" style={{ animation: "wordCycle4 10s infinite ease-in-out" }}>en çok önerilen</span>
              </span>
              <span className="mt-2 block text-white">güzellik merkezi</span>
            </p>
          </div>
        </div>
      </div>

      <div className="order-2 mx-auto w-full max-w-[620px] lg:ml-auto lg:pt-2">
        <div className="relative aspect-[4/5] overflow-visible rounded-[8px] sm:aspect-[5/4] lg:aspect-[4/5]">
          <div className="absolute left-[-52px] top-20 z-20 hidden w-44 rounded-[8px] border border-white/10 bg-[#101815]/90 p-3 shadow-[0_16px_36px_rgba(0,0,0,0.25)] backdrop-blur-md md:block">
            <p className="text-xs font-semibold uppercase tracking-normal text-white/45">Yorum</p>
            <p className="mt-1 text-sm font-semibold text-white">Cihad Duman</p>
            <p className="mt-1 text-xs text-[#d9bd73]">Erkek lazer epilasyon · 5.0</p>
          </div>
          <div className="absolute right-[-48px] top-40 z-20 hidden w-44 rounded-[8px] border border-white/10 bg-[#101815]/90 p-3 shadow-[0_16px_36px_rgba(0,0,0,0.25)] backdrop-blur-md md:block">
            <p className="text-xs font-semibold uppercase tracking-normal text-white/45">Yorum</p>
            <p className="mt-1 text-sm font-semibold text-white">Yusuf Yegin</p>
            <p className="mt-1 text-xs text-[#d9bd73]">Cilt bakımı · 4.9</p>
          </div>
          <div className="absolute left-[-42px] bottom-16 z-20 hidden w-44 rounded-[8px] border border-white/10 bg-[#101815]/90 p-3 shadow-[0_16px_36px_rgba(0,0,0,0.25)] backdrop-blur-md md:block">
            <p className="text-xs font-semibold uppercase tracking-normal text-white/45">Yorum</p>
            <p className="mt-1 text-sm font-semibold text-white">Mina Moralıoğlu</p>
            <p className="mt-1 text-xs text-[#d9bd73]">Kaş tasarımı · 4.8</p>
          </div>
          <Image
            src="/images/service-images/laser-hair-removal.webp"
            alt="Esin Orhan Güzellik Merkezi Isparta lazer epilasyon uygulaması"
            fill
            loading="eager"
            fetchPriority="high"
            sizes="(max-width: 640px) 90vw, (max-width: 1279px) 620px, 46vw"
            className="rounded-[8px] border border-white/10 object-cover object-top shadow-[0_20px_60px_rgba(0,0,0,0.28)]"
          />
          <div className="absolute inset-x-0 bottom-0 bg-black/55 p-5 backdrop-blur-sm sm:p-6">
            <p className="font-semibold text-white">Analizden sonra doğru cihaz ve seans planı</p>
            <p className="mt-1 text-sm text-white/65">Buz başlıklı diode ve alexandrite lazer seçenekleri</p>
          </div>
        </div>
      </div>
    </section>
  );
}
