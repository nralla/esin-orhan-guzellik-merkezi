import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";
import { servicePages } from "@/lib/service-pages";

const siteUrl = "https://ispartaguzellikmerkezi.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Hizmetler",
  description:
    "Isparta lazer epilasyon, erkek lazer epilasyon, cilt bakımı, dermapen, kalıcı makyaj, microblading, EMS ve bölgesel incelme hizmetlerini inceleyin.",
  alternates: { canonical: "/hizmetler" },
};

export default function ServicesIndexPage() {
  return (
    <main className="mx-auto w-full max-w-[1448px] px-5 pb-16 pt-10 sm:px-10 lg:px-12">
      <section className="mb-10 max-w-3xl">
        <p className="text-sm font-semibold uppercase text-[#d9bd73]">Hizmetler</p>
        <h1 className="mt-3 text-4xl font-bold leading-tight text-white sm:text-5xl">
          Tüm uygulamalar tek bir yerden
        </h1>
        <p className="mt-4 text-base leading-7 text-white/65">
          Her hizmet için ayrı sayfa hazırladık. Böylece hem kullanıcı doğru bilgiyi buluyor hem de Google için net bir konu haritası oluşuyor.
        </p>
      </section>

      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {servicePages.map((service) => (
          <article key={service.slug} className="overflow-hidden border border-white/10 bg-[rgba(16,24,21,0.95)]">
            <Link href={`/hizmetler/${service.slug}`} className="block">
              <div className="relative aspect-[16/9]">
                <Image src={service.image} alt={service.title} fill className="object-cover" sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw" />
              </div>
              <div className="p-6">
                <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#d9bd73]">
                  <Sparkles className="h-4 w-4" />
                  Detay sayfası
                </div>
                <h2 className="mt-4 text-2xl font-semibold text-white">{service.shortTitle}</h2>
                <p className="mt-3 text-sm leading-6 text-white/60">{service.intro}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#d9bd73]">
                  İncele <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}
