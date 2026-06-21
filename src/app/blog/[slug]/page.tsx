import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CalendarDays, Clock3 } from "lucide-react";
import { blogPosts, getBlogPost } from "@/lib/blog-posts";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      publishedTime: post.date,
      url: `/blog/${post.slug}`,
      images: [{ url: post.image }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [post.image],
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const related = blogPosts.filter((item) => item.slug !== post.slug).slice(0, 3);
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    inLanguage: "tr-TR",
    image: `https://ispartaguzellikmerkezi.com${post.image}`,
    author: { "@type": "Organization", name: "Esin Orhan Güzellik Merkezi" },
    publisher: {
      "@type": "Organization",
      name: "Esin Orhan Güzellik Merkezi",
      logo: { "@type": "ImageObject", url: "https://ispartaguzellikmerkezi.com/images/esin-orhan-logo.webp" },
    },
    mainEntityOfPage: `https://ispartaguzellikmerkezi.com/blog/${post.slug}`,
  };

  return (
    <main className="min-h-screen bg-[#090c0b] text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <header className="border-b border-white/10">
        <div className="mx-auto flex max-w-[1100px] items-center justify-between px-5 py-4 sm:px-10">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/images/esin-orhan-mark.webp" alt="Esin Orhan" width={64} height={42} className="rounded-[4px] bg-white p-1" />
            <span className="font-bold">Esin Orhan</span>
          </Link>
          <Link href="/blog" className="text-sm text-white/60 hover:text-white">
            Tüm yazılar
          </Link>
        </div>
      </header>

      <article>
        <div className="mx-auto max-w-[940px] px-5 pt-12 sm:px-10 sm:pt-16">
          <nav aria-label="İçerik yolu" className="flex flex-wrap items-center gap-2 text-sm text-white/45">
            <Link href="/">Ana Sayfa</Link>
            <span>/</span>
            <Link href="/blog">Blog</Link>
            <span>/</span>
            <span className="text-white/70">{post.title}</span>
          </nav>

          <Link href="/blog" className="mt-8 inline-flex items-center gap-2 text-sm text-[#d9bd73]">
            <ArrowLeft className="h-4 w-4" /> Bloga dön
          </Link>

          <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl">{post.title}</h1>
          <p className="mt-5 text-lg leading-8 text-white/60">{post.description}</p>
          <div className="mt-6 flex flex-wrap gap-5 text-sm text-white/45">
            <span className="inline-flex items-center gap-2">
              <CalendarDays className="h-4 w-4" /> 21 Haziran 2026
            </span>
            <span className="inline-flex items-center gap-2">
              <Clock3 className="h-4 w-4" /> {post.readTime}
            </span>
          </div>

          <div className="relative mt-10 aspect-[16/8] overflow-hidden rounded-[8px]">
            <Image src={post.image} alt={post.title} fill priority sizes="(max-width: 940px) 100vw, 940px" className="object-cover" />
          </div>
        </div>

        <div className="mx-auto max-w-[800px] px-5 py-12 sm:px-10 sm:py-16">
          <section className="border border-white/10 bg-[#101815] p-6 sm:p-7">
            <h2 className="text-xl font-semibold text-white">Kısa özet</h2>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-white/70">
              <li>Konuya cihaz adıyla değil, kıl kökü ve cilt analiziyle başlayın.</li>
              <li>Fiyat, analiz, seans aralığı ve takip planını birlikte değerlendirin.</li>
              <li>Gerçek yorumları tarih ve içerik açısından okuyun.</li>
            </ul>
          </section>

          {post.sections.map((section) => (
            <section key={section.heading} className="mb-12 mt-12">
              <h2 className="text-2xl font-semibold sm:text-3xl">{section.heading}</h2>
              {section.paragraphs.map((text) => (
                <p key={text} className="mt-5 text-base leading-8 text-white/70">
                  {text}
                </p>
              ))}
              {section.bullets && (
                <ul className="mt-6 space-y-3 border-l-2 border-[#d9bd73] pl-5 text-white/70">
                  {section.bullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          <aside className="border border-[#d9bd73]/40 bg-[#101815] p-7">
            <h2 className="text-2xl font-semibold">Ücretsiz analizle başlayın</h2>
            <p className="mt-3 leading-7 text-white/60">
              Kıl kökü ve cilt yapınızı birlikte değerlendirelim, size uygun cihaz ve seans planını netleştirelim.
            </p>
            <Link href="/#analysis" className="mt-6 inline-flex min-h-12 items-center gap-2 bg-[#d9bd73] px-5 font-semibold text-[#0b110f]">
              Analiz randevusu al <ArrowRight className="h-4 w-4" />
            </Link>
          </aside>
        </div>
      </article>

      <section className="border-t border-white/10">
        <div className="mx-auto max-w-[1100px] px-5 py-12 sm:px-10">
          <h2 className="text-2xl font-semibold">İlgili rehberler</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {related.map((item) => (
              <Link key={item.slug} href={`/blog/${item.slug}`} className="border border-white/10 bg-[#101815] p-5 hover:border-[#d9bd73]/50">
                <h3 className="font-semibold leading-6">{item.title}</h3>
                <span className="mt-4 inline-flex items-center gap-2 text-sm text-[#d9bd73]">
                  Oku <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
