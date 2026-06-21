import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock3, FileText, Sparkles } from "lucide-react";
import { blogPosts } from "@/lib/blog-posts";

export const metadata: Metadata = {
  title: "Isparta Lazer Epilasyon ve Cilt Bakımı Blogu",
  description:
    "Isparta lazer epilasyon, buz lazer, erkek lazer, kıl kökü analizi, fiyatlar, yorumlar ve doğru merkez seçimi hakkında uzun ve faydalı rehberler.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Isparta Lazer Epilasyon ve Cilt Bakımı Blogu",
    description:
      "Isparta lazer epilasyon, buz lazer, erkek lazer ve kıl kökü analizi hakkında kapsamlı rehberler.",
    url: "/blog",
    type: "website",
  },
};

const focusTopics = [
  "Merkez seçimi",
  "Buz lazer karşılaştırması",
  "Erkek lazer planı",
  "Fiyatların neden değiştiği",
  "Gerçek yorumları okuma",
  "Kıl kökü analizinin önemi",
];

export default function BlogPage() {
  const featured = blogPosts.slice(0, 3);
  const rest = blogPosts.slice(3);

  return (
    <main className="min-h-screen bg-[#090c0b] text-white">
      <header className="border-b border-white/10">
        <div className="mx-auto flex max-w-[1240px] items-center justify-between px-5 py-4 sm:px-10">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/images/esin-orhan-mark.webp" alt="Esin Orhan" width={64} height={42} className="rounded-[4px] bg-white p-1" />
            <span className="font-bold">Esin Orhan Güzellik Merkezi</span>
          </Link>
          <Link href="/#analysis" className="text-sm font-semibold text-[#d9bd73]">
            Ücretsiz analiz
          </Link>
        </div>
      </header>

      <section className="mx-auto max-w-[1240px] px-5 py-16 sm:px-10 sm:py-20">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#d9bd73]">Bilgi merkezi</p>
        <h1 className="mt-3 max-w-4xl text-4xl font-bold leading-tight sm:text-5xl">
          Isparta lazer epilasyon ve bakım rehberleri
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-white/60">
          Merkez seçimi, cihaz farkları, kıl kökü analizi, fiyat okuma, seans planı ve kullanıcı yorumlarını değerlendirme gibi konularda kısa değil, gerçekten iş gören yazılar hazırladık.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          {focusTopics.map((topic) => (
            <span key={topic} className="inline-flex items-center gap-2 border border-white/10 bg-[#101815] px-4 py-2 text-sm text-white/75">
              <Sparkles className="h-4 w-4 text-[#d9bd73]" />
              {topic}
            </span>
          ))}
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((post) => (
            <article key={post.slug} className="overflow-hidden border border-white/10 bg-[#101815]">
              <Link href={`/blog/${post.slug}`} className="group block">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image src={post.image} alt={post.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs text-white/45">
                    <Clock3 className="h-4 w-4" />
                    {post.readTime}
                  </div>
                  <h2 className="mt-4 text-xl font-semibold leading-7">{post.title}</h2>
                  <p className="mt-3 text-sm leading-6 text-white/60">{post.description}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#d9bd73]">
                    Rehberi oku <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-16 border-t border-white/10 pt-12">
          <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.24em] text-[#d9bd73]">
            <FileText className="h-4 w-4" />
            Daha fazla rehber
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {rest.map((post) => (
              <article key={post.slug} className="border border-white/10 bg-[#101815] p-6">
                <div className="flex items-center gap-2 text-xs text-white/45">
                  <Clock3 className="h-4 w-4" />
                  {post.readTime}
                </div>
                <h2 className="mt-4 text-2xl font-semibold leading-8">{post.title}</h2>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-white/60">{post.description}</p>
                <Link href={`/blog/${post.slug}`} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#d9bd73]">
                  Yazıyı aç <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-16 grid gap-5 border-t border-white/10 pt-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="border border-white/10 bg-[#101815] p-7">
            <h2 className="text-2xl font-semibold">Bu blog ne için var?</h2>
            <p className="mt-4 leading-7 text-white/60">
              Kullanıcıların en çok aradığı sorulara uzun, anlaşılır ve karar vermeyi kolaylaştıran yanıtlar vermek için. Merkez seçimi yaparken yalnızca fiyat değil; analiz, cihaz, yorum, hijyen ve süreç takibi gibi başlıkları birlikte düşünmek gerekiyor.
            </p>
          </div>
          <div className="border border-white/10 bg-[#101815] p-7">
            <h2 className="text-2xl font-semibold">Hızlı bağlantılar</h2>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link href="/#analysis" className="border border-white/10 px-4 py-2 text-sm text-white/75 hover:border-[#d9bd73]/70 hover:text-[#d9bd73]">
                Kıl kökü analizi
              </Link>
              <Link href="/#services" className="border border-white/10 px-4 py-2 text-sm text-white/75 hover:border-[#d9bd73]/70 hover:text-[#d9bd73]">
                Hizmetler
              </Link>
              <Link href="/#testimonials" className="border border-white/10 px-4 py-2 text-sm text-white/75 hover:border-[#d9bd73]/70 hover:text-[#d9bd73]">
                Google yorumları
              </Link>
              <Link href="/#faq" className="border border-white/10 px-4 py-2 text-sm text-white/75 hover:border-[#d9bd73]/70 hover:text-[#d9bd73]">
                Sık sorulan sorular
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
