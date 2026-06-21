"use client";

import Image from "next/image";
import { Crosshair, ScanLine, ShieldCheck, Snowflake, Sparkles, UserRound } from "lucide-react";

const technologies = [
  {
    icon: Snowflake,
    title: "Buz Başlıklı Diode Lazer",
    description:
      "Soğutmalı başlık sayesinde konforlu uygulama. Hassas ciltler, ince tüyler ve açık tenler için kişiye özel planlama.",
  },
  {
    icon: Sparkles,
    title: "Alexandrite Lazer",
    description:
      "Koyu ve dirençli tüylerde yüksek performans. Geniş bölgelerde kontrollü ve hızlı uygulama.",
  },
  {
    icon: UserRound,
    title: "Erkek Lazer Epilasyon",
    description:
      "Sırt, göğüs, ense ve yüz bölgesi için erkek tüy yapısına göre belirlenen uygulama protokolleri.",
  },
  {
    icon: ScanLine,
    title: "Ücretsiz Kıl Kökü ve Cilt Analizi",
    description:
      "Kıl yapısı, yoğunluk, cilt tipi ve hassasiyet birlikte değerlendirilir; uygun cihaz ve seans planı belirlenir.",
  },
];

export default function LaserAnalysisSection({ onBook }: { onBook: () => void }) {
  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-[#101815] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto grid w-full max-w-[1448px] gap-12 px-5 sm:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-12">
        <div className="order-2 relative min-h-[430px] overflow-hidden rounded-[8px] border border-white/10 sm:min-h-[560px] lg:order-1">
          <Image
            src="/images/service-images/laser-hair-removal.webp"
            alt="Isparta lazer epilasyon ve ücretsiz kıl kökü analizi"
            fill
            sizes="(max-width: 1024px) 100vw, 42vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,10,8,0.05),rgba(5,10,8,0.82))]" />
          <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
            <div className="mb-4 inline-flex items-center gap-2 border border-white/20 bg-black/35 px-3 py-2 text-xs font-semibold uppercase text-white backdrop-blur-xl">
              <Crosshair className="h-4 w-4 text-[#d9bd73]" />
              Analizden sonra uygulama
            </div>
            <p className="max-w-md text-lg font-semibold leading-7 text-white sm:text-2xl">
              Doğru cihaz seçimi, kıl kökünü ve cildinizi tanımakla başlar.
            </p>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <div className="mb-6 flex items-center gap-3 text-sm font-semibold uppercase text-[#d9bd73]">
            <ShieldCheck className="h-5 w-5" />
            CE belgeli lazer teknolojileri
          </div>
          <h2 className="max-w-3xl text-3xl font-bold leading-tight text-[var(--foreground)] sm:text-4xl lg:text-5xl">
            Isparta Lazer Epilasyon: Konforlu ve Etkili Çözümler
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-7 text-[var(--middle-foreground)] sm:text-lg">
            Merkezimizde CE belgeli, buz başlıklı diode ve alexandrite lazer sistemleri kullanılmaktadır. Kadın ve erkek farklı cilt ve kıl tipleri için uygulama öncesinde ücretsiz analiz yapıyor, süreci kişiye özel planlıyoruz.
          </p>

          <div className="mt-9 grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2">
            {technologies.map(({ icon: Icon, title, description }) => (
              <article key={title} className="min-h-[180px] bg-[#0b110f] p-6 sm:min-h-[210px] sm:p-7">
                <Icon className="mb-7 h-6 w-6 text-[#d9bd73]" aria-hidden="true" />
                <h3 className="text-lg font-semibold text-[var(--foreground)]">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-[var(--middle-foreground)]">{description}</p>
              </article>
            ))}
          </div>

          <button
            type="button"
            onClick={onBook}
            className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 border border-[#d9bd73] bg-[#d9bd73] px-6 font-semibold text-[#0b110f] transition-colors hover:bg-transparent hover:text-[#d9bd73]"
          >
            <ScanLine className="h-5 w-5" />
            Ücretsiz analiz randevusu al
          </button>
          <nav aria-label="Lazer epilasyon hakkında ilgili bölümler" className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm">
            <a href="#services" className="text-[var(--middle-foreground)] underline decoration-white/25 underline-offset-4 hover:text-[#d9bd73]">
              Tüm güzellik hizmetleri
            </a>
            <a href="#testimonials" className="text-[var(--middle-foreground)] underline decoration-white/25 underline-offset-4 hover:text-[#d9bd73]">
              Google yorumları
            </a>
            <a href="#faq" className="text-[var(--middle-foreground)] underline decoration-white/25 underline-offset-4 hover:text-[#d9bd73]">
              Lazer epilasyon soruları
            </a>
          </nav>
        </div>
      </div>
    </section>
  );
}
