import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CalendarDays, CheckCircle2, MessageSquareQuote } from "lucide-react";
import { getServicePage, servicePages } from "@/lib/service-pages";

const siteUrl = "https://ispartaguzellikmerkezi.com";

export function generateStaticParams() {
  return servicePages.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = getServicePage(slug);
  if (!service) return {};

  return {
    metadataBase: new URL(siteUrl),
    title: service.title,
    description: service.metaDescription,
    alternates: { canonical: `/hizmetler/${service.slug}` },
    openGraph: {
      title: service.title,
      description: service.metaDescription,
      url: `${siteUrl}/hizmetler/${service.slug}`,
      images: [{ url: service.image, width: 1200, height: 800, alt: service.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: service.title,
      description: service.metaDescription,
      images: [service.image],
    },
  };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServicePage(slug);
  if (!service) notFound();

  const fallbackRelatedSlugs = [
    "lazer-epilasyon",
    "erkek-lazer-epilasyon",
    "cilt-bakimi",
    "ucretsiz-cilt-analizi",
    "microblading",
  ];

  const related = [...service.related, ...fallbackRelatedSlugs]
    .filter((item) => item !== service.slug)
    .map((item) => getServicePage(item))
    .filter(
      (item, index, self): item is NonNullable<ReturnType<typeof getServicePage>> =>
        Boolean(item) && self.findIndex((candidate) => candidate?.slug === item?.slug) === index
    )
    .slice(0, 3);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    areaServed: "Isparta",
    provider: {
      "@type": "BeautySalon",
      name: "Esin Orhan Güzellik Merkezi",
      url: siteUrl,
      telephone: "+90 501 113 32 32",
    },
    description: service.metaDescription,
    image: `${siteUrl}${service.image}`,
  };

  return (
    <main className="mx-auto w-full max-w-[1448px] px-5 pb-16 pt-10 sm:px-10 lg:px-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      <Link href="/hizmetler" className="inline-flex items-center gap-2 text-sm font-semibold text-[#d9bd73] hover:text-white">
        <ArrowLeft className="h-4 w-4" />
        Tüm hizmetler
      </Link>

      <section className="mt-6 grid gap-8 lg:grid-cols-[1fr_0.92fr] lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase text-[#d9bd73]">Hizmet detayı</p>
          <h1 className="mt-3 text-4xl font-bold leading-tight text-white sm:text-5xl">{service.title}</h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-white/65">{service.intro}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://wa.me/905011133232?text=Merhaba%2C%20hizmet%20detay%C4%B1%20i%C3%A7in%20bilgi%20almak%20istiyorum."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border border-[#d9bd73] bg-[#d9bd73] px-5 py-3 font-semibold text-[#07100d]"
            >
              <MessageSquareQuote className="h-4 w-4" />
              WhatsApp ile sor
            </a>
            <a
              href="tel:+905011133232"
              className="inline-flex items-center gap-2 border border-white/10 px-5 py-3 font-semibold text-white hover:border-[#d9bd73]/70 hover:text-[#d9bd73]"
            >
              <CalendarDays className="h-4 w-4" />
              Ara ve randevu al
            </a>
          </div>
        </div>
        <div className="relative overflow-hidden border border-white/10 bg-[#101815]">
          <div className="relative aspect-[4/3]">
            <Image src={service.image} alt={service.title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 42vw" />
          </div>
        </div>
      </section>

      <section className="mt-14 grid gap-5 lg:grid-cols-2">
        <article className="border border-white/10 bg-white/[0.03] p-6">
          <h2 className="text-xl font-semibold text-white">Öne çıkan noktalar</h2>
          <ul className="mt-5 space-y-3">
            {service.highlights.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm leading-6 text-white/70">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#d9bd73]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>
        <article className="border border-white/10 bg-white/[0.03] p-6">
          <h2 className="text-xl font-semibold text-white">Süreç nasıl ilerler?</h2>
          <ol className="mt-5 space-y-3">
            {service.process.map((item, index) => (
              <li key={item} className="flex gap-3 text-sm leading-6 text-white/70">
                <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center border border-[#d9bd73]/40 text-xs font-semibold text-[#d9bd73]">
                  {index + 1}
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ol>
        </article>
      </section>

      <section className="mt-14">
        <h2 className="text-2xl font-bold text-white">Sık sorulan sorular</h2>
        <div className="mt-6 divide-y divide-white/10 border-y border-white/10">
          {service.faqs.map((faq) => (
            <details key={faq.question} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-base font-semibold text-white">
                {faq.question}
                <span className="text-2xl font-light text-[#d9bd73] group-open:rotate-45">+</span>
              </summary>
              <p className="max-w-3xl pt-4 text-sm leading-7 text-white/65">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      {related.length > 0 && (
        <section className="mt-14">
          <h2 className="text-2xl font-bold text-white">İlgili hizmetler</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {related.map((item) => (
              <Link
                key={item.slug}
                href={`/hizmetler/${item.slug}`}
                className="border border-white/10 bg-white/[0.03] p-5 transition-colors hover:border-[#d9bd73]/60"
              >
                <p className="text-sm font-semibold uppercase text-[#d9bd73]">İncele</p>
                <h3 className="mt-3 text-lg font-semibold text-white">{item.shortTitle}</h3>
                <p className="mt-3 text-sm leading-6 text-white/60">{item.metaDescription}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#d9bd73]">
                  Sayfaya git <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
