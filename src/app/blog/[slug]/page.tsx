import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CalendarDays, Clock3 } from "lucide-react";
import { blogPosts, getBlogPost } from "@/lib/blog-posts";
import { getServicePage } from "@/lib/service-pages";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/ğ/g, "g")
    .replace(/ü/g, "u")
    .replace(/ş/g, "s")
    .replace(/ı/g, "i")
    .replace(/ö/g, "o")
    .replace(/ç/g, "c")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}

function buildEditorialSections(post: ReturnType<typeof getBlogPost>) {
  if (!post) return [];

  const commonSections = [
    {
      heading: "Bu rehber neden önemli?",
      paragraphs: [
        `${post.title} üzerine arama yapan çoğu kişi, tek cümlelik bir cevap değil, karar vermeye yardımcı olacak net bir çerçeve arar. Bu yüzden konuyu sadece başlık düzeyinde değil; analiz, beklenti, uygunluk ve takip başlıklarıyla birlikte okumak gerekir.`,
        `Özellikle Isparta gibi yerel aramalarda kullanıcılar fiyat ile birlikte merkez seçimi, yorumlar, uygulama alanı ve hizmet kapsamını da karşılaştırır. Bu yazı tam olarak bu boşluğu doldurmak için hazırlanmıştır.`,
      ],
    },
    {
      heading: "Karar verirken kontrol listesi",
      paragraphs: [
        "Aşağıdaki kontrol listesi, bu konuyu okurken hangi noktaları birlikte düşünmeniz gerektiğini hatırlatır.",
      ],
      bullets: [
        "İşleme başlamadan önce analiz yapılıyor mu?",
        "Cihazın tipi, uygunluğu ve uygulama alanı açık mı?",
        "Seans planı ve takip süreci net anlatılıyor mu?",
        "Yorumlar sadece puan olarak değil, içerik olarak da okunuyor mu?",
        "Uygulama sonrası bakım ve iletişim desteği var mı?",
      ],
    },
  ];

  const slug = post.slug;
  const topicSections = [];

  if (slug.includes("lazer") || slug.includes("buz-lazer")) {
    topicSections.push({
      heading: "Lazer epilasyonda gerçekçi beklenti nasıl kurulur?",
      paragraphs: [
        "Lazer epilasyonda sonuç okurken en büyük hata, tek bir seans ya da tek bir deneyim üzerinden karar vermektir. Kıl kalınlığı, bölge yoğunluğu, cilt tonu ve düzenli seans takibi sonucu doğrudan etkiler.",
        "İlk amaç hemen her şeyi bir seansta bitirmek değil; ciltle uyumlu, kontrollü ve sürdürülebilir bir azalma elde etmektir. Bu yüzden seans aralıkları kadar seans öncesi hazırlık ve sonrası bakım da önem taşır.",
      ],
      bullets: [
        "Bölgeye göre seans sayısı değişir.",
        "Güneşlenme ve tahriş sonucu etkileyebilir.",
        "Evde yapılan yanlış bakım süreci uzatabilir.",
        "Erkek ve kadın kıl yapısı aynı değerlendirilmez.",
      ],
    });
  }

  if (slug.includes("fiyat")) {
    topicSections.push({
      heading: "Fiyatı gerçekten ne belirler?",
      paragraphs: [
        "Fiyatı yalnızca paket etiketi üzerinden okumak sağlıklı değildir. Kapsam, analiz süreci, cihaz tipi, uygulama bölgesi ve takip desteği toplam değeri belirler.",
        "İyi bir karşılaştırma yapmak istiyorsanız, size sunulan hizmetin içine nelerin dahil olduğunu tek tek sorun. Böylece aynı isimle satılan ama aslında farklı olan paketleri birbirine karıştırmazsınız.",
      ],
      bullets: [
        "Tek seans mı, paket mi?",
        "Kontrol ve takip desteği var mı?",
        "Analiz ücretsiz mi?",
        "Cihaz ve uygulama alanı net mi?",
      ],
    });
  }

  if (slug.includes("yorum")) {
    topicSections.push({
      heading: "Yorumları okurken neye bakmalısınız?",
      paragraphs: [
        "Yorum okuma işinde yıldız puanı bir başlangıçtır; son karar değildir. Deneyimin hangi hizmette yaşandığı, ne kadar ayrıntı verildiği ve işletmenin yoruma nasıl cevap verdiği daha değerli sinyaller sunar.",
        "Düzenli olarak gelen, farklı zamanlara yayılan ve hizmet detayına inen yorumlar genellikle daha güvenilirdir. Kopya hissi veren kısa ve birbirine benzeyen yorumları ise temkinli okumak gerekir.",
      ],
      bullets: [
        "Hizmet adı açıkça geçiyor mu?",
        "Tarih ve deneyim detayı var mı?",
        "Olumlu-olumsuz denge kurulmuş mu?",
        "İşletme yanıtı saygılı ve açıklayıcı mı?",
      ],
    });
  }

  if (slug.includes("cilt") || slug.includes("dermapen") || slug.includes("analiz")) {
    topicSections.push({
      heading: "Ciltte uyum ve güvenlik neden ilk sırada olmalı?",
      paragraphs: [
        "Cilt bakımı ve analiz yazılarında en önemli konu, ürünü veya cihazı öne çıkarmak değil; cildin neye ihtiyacı olduğunu anlamaktır. Hassasiyet, bariyer durumu, leke eğilimi ve güncel cilt tepkisi birlikte değerlendirilmelidir.",
        "Bu bakış açısı, yanlış ürün seçiminden kaçınmanızı sağlar ve uygulama sonrasında ne yapmanız gerektiğini daha anlaşılır hale getirir.",
      ],
    });
  }

  if (slug.includes("erkek")) {
    topicSections.push({
      heading: "Erkek lazer epilasyonda neden ayrı plan gerekir?",
      paragraphs: [
        "Erkeklerde kıl yoğunluğu, kalınlığı ve bölgesel dağılım çoğu zaman daha farklıdır. Sırt, göğüs, ense ve yüz gibi bölgeler aynı ayar ve aynı seans mantığıyla ele alınmamalıdır.",
        "Bu nedenle erkek danışanlarda mahremiyet, süreklilik ve bölgeye özel planlama daha da önem kazanır.",
      ],
      bullets: [
        "Sırt ve göğüs için ayrı plan gerekir.",
        "Yüz ve ense daha hassas değerlendirilir.",
        "Tıraş ve hazırlık talimatları önemlidir.",
        "Mahremiyet ve rahat iletişim dönüşümü artırır.",
      ],
    });
  }

  topicSections.push({
    heading: "Sonuç ve sonraki adım",
    paragraphs: [
      `Bu konuyu okuduktan sonra bir sonraki adım, genel bilgiyle yetinmeden kendi durumunuzu analiz etmektir. Çünkü ${post.title.toLowerCase()} sorusu herkes için aynı cevaba sahip değildir.`,
      "En doğru yol; kısa bir ön görüşme, net bir analiz ve açık bir seans planı ile ilerlemektir. Böylece hem zaman kaybetmezsiniz hem de beklentiyi daha gerçekçi kurarsınız.",
    ],
  });

  return [...commonSections, ...topicSections];
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

  const editorialSections = buildEditorialSections(post);
  const allSections = [...post.sections, ...editorialSections];
  const toc = [
    "Kısa özet",
    ...allSections.map((section) => section.heading),
    "İlgili hizmetler",
  ];
  const related = blogPosts.filter((item) => item.slug !== post.slug).slice(0, 3);
  const relatedServices = [
    getServicePage("lazer-epilasyon"),
    getServicePage("ucretsiz-cilt-analizi"),
    getServicePage("erkek-lazer-epilasyon"),
  ].filter(Boolean);

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
    <main className="min-h-screen bg-[#090c0b] pb-16 text-white">
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
          <p className="mt-5 max-w-3xl text-lg leading-8 text-white/72">{post.description}</p>
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

        <div className="mx-auto max-w-[860px] px-5 py-12 sm:px-10 sm:py-16">
          <section className="mb-12 border border-white/10 bg-[#101815] p-6 sm:p-7">
            <h2 className="text-xl font-semibold text-white">İçindekiler</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {toc.map((item) => (
                <a
                  key={item}
                  href={`#${slugify(item)}`}
                  className="border border-white/10 px-3 py-2 text-sm text-white/72 hover:border-[#d9bd73]/60 hover:text-[#d9bd73]"
                >
                  {item}
                </a>
              ))}
            </div>
          </section>

          <section className="border border-white/10 bg-[#101815] p-6 sm:p-7">
            <div id={slugify("Kısa özet")} />
            <h2 className="text-xl font-semibold text-white">Kısa özet</h2>
            <ul className="mt-4 space-y-3 text-base leading-8 text-white/72">
              <li>Konuya cihaz adıyla değil, kıl kökü ve cilt analiziyle başlayın.</li>
              <li>Fiyat, analiz, seans aralığı ve takip planını birlikte değerlendirin.</li>
              <li>Gerçek yorumları tarih ve içerik açısından okuyun.</li>
            </ul>
          </section>

          {allSections.map((section) => (
            <section key={section.heading} id={slugify(section.heading)} className="mb-12 mt-12">
              <h2 className="text-2xl font-semibold sm:text-3xl">{section.heading}</h2>
              {section.paragraphs.map((text) => (
                <p key={text} className="mt-5 text-[17px] leading-9 text-white/78 sm:text-[18px]">
                  {text}
                </p>
              ))}
              {section.bullets && (
                <ul className="mt-6 space-y-3 border-l-2 border-[#d9bd73] pl-5 text-[17px] leading-8 text-white/76">
                  {section.bullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          {relatedServices.length > 0 && (
            <section className="mb-12 border border-white/10 bg-[#101815] p-6 sm:p-7">
              <h2 className="text-2xl font-semibold">İlgili hizmetler</h2>
              <div className="mt-5 flex flex-wrap gap-3">
                {relatedServices.map((service) => (
                  <Link
                    key={service?.slug}
                    href={`/hizmetler/${service?.slug}`}
                    className="border border-white/10 px-4 py-2 text-sm text-white/75 hover:border-[#d9bd73]/70 hover:text-[#d9bd73]"
                  >
                    {service?.shortTitle}
                  </Link>
                ))}
              </div>
            </section>
          )}

          <aside className="border border-[#d9bd73]/40 bg-[#101815] p-7">
            <h2 className="text-2xl font-semibold">Ücretsiz analizle başlayın</h2>
            <p className="mt-3 leading-8 text-white/70">
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
                <p className="mt-3 text-sm leading-7 text-white/65">{item.description}</p>
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
