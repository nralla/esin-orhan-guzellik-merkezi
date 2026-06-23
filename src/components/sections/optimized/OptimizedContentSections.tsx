"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, CalendarDays, Clock3, Cpu, ScanLine, ShieldCheck, Sparkles } from "lucide-react";
import { blogPosts } from "@/lib/blog-posts";

const services = [
  ["laser_epilation", "Lazer Epilasyon", "Kıl kökü ve cilt analizine göre kişiye özel seans planı.", "/images/service-images/laser-hair-removal.webp", "/hizmetler/lazer-epilasyon"],
  ["male_laser_epilation", "Erkek Lazer Epilasyon", "Sırt, göğüs, ense ve yüz bölgesine uygun protokoller.", "/images/service-images/laser-hair-removal.webp", "/hizmetler/erkek-lazer-epilasyon"],
  ["needle_epilation", "İğneli Epilasyon", "Uygunluk değerlendirmesi sonrasında noktasal uygulama.", "/images/service-images/needle-epilation.webp", "/hizmetler/igneli-epilasyon"],
  ["skin_care", "Cilt Bakımı", "Cilt ihtiyacına göre analiz ve bakım adımları.", "/images/service-images/facial.webp", "/hizmetler/cilt-bakimi"],
  ["regional_slimming", "Bölgesel İncelme", "Kişisel hedeflere göre planlanan destek uygulamaları.", "/images/service-images/regional-slimming.webp", "/hizmetler/bolgesel-incelme"],
  ["ems", "EMS", "Kas aktivasyonunu destekleyen bölgesel uygulama.", "/images/service-images/ems.webp", "/hizmetler/ems"],
  ["permanent_makeup", "Kalıcı Makyaj", "Yüz oranı ve cilt tonuna uygun doğal tasarım.", "/images/service-images/makeup.webp", "/hizmetler/kalici-makyaj"],
  ["microblading", "Microblading", "Kaş formuna göre kişiselleştirilen kıl tekniği.", "/images/service-images/microblading.webp", "/hizmetler/microblading"],
  ["prosthetic_nails", "Protez Tırnak", "El ve tırnak yapısına göre şekillendirilen uygulama.", "/images/service-images/manicure.webp", "/hizmetler/protez-tirnak"],
  ["dermapen", "Dermapen", "Cilt değerlendirmesinden sonra planlanan bakım.", "/images/service-images/facial.webp", "/hizmetler/dermapen"],
  ["free_skin_analysis", "Ücretsiz Cilt Analizi", "Cilt ihtiyaçlarını ve uygun bakım planını belirleme.", "/images/service-images/skin-analysis.webp", "/hizmetler/ucretsiz-cilt-analizi"],
  ["golden_ratio_brow", "Altın Oran Kaş Alımı", "Yüz oranlarına göre kişisel kaş tasarımı.", "/images/service-images/brow-shaping.webp", "/hizmetler/altin-oran-kas-alimi"],
] as const;

const expertise = [
  { icon: ScanLine, title: "Lazer Epilasyon", subtitle: "Kıl kökü ve cilt analizi", text: "Cilt tipi, kıl yapısı ve bölge değerlendirilerek uygun cihaz ve seans aralığı belirlenir." },
  { icon: Sparkles, title: "Cilt Bakımı", subtitle: "Kişiye özel bakım planı", text: "Cildin mevcut ihtiyaçları analiz edilerek uygulama adımları ve ev rutini planlanır." },
  { icon: Cpu, title: "Teknoloji ve Güvenlik", subtitle: "Cihaz uygunluk kontrolü", text: "Uygulama öncesinde cihaz, cilt tipi ve işlem uygunluğu güvenlik adımlarıyla değerlendirilir." },
  { icon: ShieldCheck, title: "Hijyen ve Takip", subtitle: "Düzenli süreç yönetimi", text: "Uygulama öncesi hazırlık ve sonrasındaki bakım önerileri danışanla açıkça paylaşılır." },
];

const faq = [
  ["Randevu için ne kadar önce yazmalıyım?", "Yoğunluğa göre aynı gün uygunluk olabilir; tercih ettiğiniz saat için 1-2 gün önce iletişime geçmeniz önerilir."],
  ["Kıl kökü ve cilt analizi ücretli mi?", "Hayır. Analiz ücretsizdir; uygun cihaz ve seans planı değerlendirme sonrasında belirlenir."],
  ["Lazer epilasyon öncesi nelere dikkat etmeliyim?", "Güneş, tahriş ve kullanılan ürünler hakkında bilgi verilmelidir. Hazırlık adımları cilt durumuna göre paylaşılır."],
  ["Bakım sonrası takip yapılıyor mu?", "Evet. Uygulama sonrasında dikkat edilmesi gerekenler ve önerilen seans aralığı danışanla paylaşılır."],
];

const SectionHeading = ({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) => (
  <header className="mb-10 max-w-3xl">
    <p className="text-sm font-semibold uppercase text-[#d9bd73]">{eyebrow}</p>
    <h2 className="mt-3 text-3xl font-bold leading-tight text-white sm:text-4xl">{title}</h2>
    <p className="mt-4 text-base leading-7 text-white/65">{text}</p>
  </header>
);

export function OptimizedServicesSection({ onServiceClick }: { onServiceClick: (id: string) => void }) {
  return (
    <section className="mx-auto w-full max-w-[1448px] px-5 py-16 sm:px-10 sm:py-20 lg:px-12">
      <SectionHeading eyebrow="Hizmetler" title="Analizle başlayan kişisel bakım" text="Lazer epilasyondan cilt bakımına tüm uygulamalar ihtiyaç değerlendirmesiyle planlanır." />
      <div className="grid gap-px overflow-hidden border border-white/10 bg-white/[0.06] shadow-[0_30px_70px_rgba(0,0,0,0.18)] sm:grid-cols-2 lg:grid-cols-3">
        {services.map(([id, title, text, image, href]) => (
          <article key={id} className="group bg-[rgba(11,17,15,0.98)] text-left transition-colors hover:bg-[rgba(16,24,20,0.98)]">
            <Link href={href} className="block">
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image src={image} alt={`${title} Isparta`} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
              </div>
              <div className="p-5">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-lg font-semibold text-white">{title}</h3>
                <ArrowUpRight className="h-5 w-5 shrink-0 text-[#d9bd73]" />
              </div>
              <p className="mt-3 text-sm leading-6 text-white/60">{text}</p>
              </div>
            </Link>
            <div className="flex items-center justify-between gap-3 border-t border-white/10 px-5 py-4">
              <Link href={href} className="text-sm font-semibold text-[#d9bd73] hover:text-white">
                Detay sayfası
              </Link>
              <button type="button" onClick={() => onServiceClick(id)} className="inline-flex items-center gap-2 border border-white/15 px-4 py-2 text-sm font-semibold text-white transition-colors hover:border-[#d9bd73] hover:text-[#d9bd73]">
                Randevu al
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function OptimizedExpertiseSection() {
  return (
    <section className="mx-auto w-full max-w-[1448px] px-5 py-16 sm:px-10 sm:py-20 lg:px-12">
      <SectionHeading eyebrow="Uzmanlık alanlarımız" title="İsimlerden önce süreç ve uzmanlık" text="Gerçek olmayan ekip profilleri yerine merkezimizin uygulama disiplinlerini açıkça gösteriyoruz." />
      <div className="grid gap-px border border-white/10 bg-white/[0.06] shadow-[0_30px_70px_rgba(0,0,0,0.14)] md:grid-cols-2">
        {expertise.map(({ icon: Icon, title, subtitle, text }) => (
          <article key={title} className="bg-[rgba(9,14,12,0.97)] p-7 sm:p-9">
            <Icon className="h-7 w-7 text-[#d9bd73]" />
            <p className="mt-8 text-xs font-semibold uppercase text-white/45">{subtitle}</p>
            <h3 className="mt-2 text-2xl font-semibold text-white">{title}</h3>
            <p className="mt-4 max-w-xl text-sm leading-7 text-white/60">{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function OptimizedAboutSection({ onBook }: { onBook: () => void }) {
  return (
    <section className="mx-auto grid w-full max-w-[1448px] gap-10 px-5 py-16 sm:px-10 sm:py-20 lg:grid-cols-2 lg:items-center lg:px-12">
      <div className="grid grid-cols-2 gap-3">
        {["/images/service-images/laser-hair-removal.webp", "/images/service-images/facial.webp", "/images/service-images/brow-shaping.webp", "/images/service-images/manicure.webp"].map((src, index) => (
          <div key={src} className={`relative overflow-hidden rounded-[8px] ${index === 0 ? "col-span-2 aspect-[16/8]" : "aspect-square"}`}>
            <Image src={src} alt={`Esin Orhan Güzellik Merkezi ${index + 1}`} fill sizes="(max-width: 1024px) 50vw, 25vw" className="object-cover" />
          </div>
        ))}
      </div>
      <div>
        <SectionHeading eyebrow="Hakkımızda" title="Isparta Çünür'de kişisel bakım merkezi" text="Lazer epilasyon, cilt bakımı, dermapen, kalıcı makyaj, microblading, protez tırnak, EMS ve bölgesel incelme uygulamalarını ihtiyaç analiziyle planlıyoruz." />
        <div className="flex flex-wrap gap-3">
          <button type="button" onClick={onBook} className="inline-flex min-h-12 items-center gap-2 bg-[#d9bd73] px-6 font-semibold text-[#0b110f]">
            <CalendarDays className="h-5 w-5" /> Randevu oluştur
          </button>
          <Link href="/hizmetler" className="inline-flex min-h-12 items-center gap-2 border border-white/10 px-6 font-semibold text-white hover:border-[#d9bd73]/70 hover:text-[#d9bd73]">
            Tüm hizmetler
          </Link>
        </div>
      </div>
    </section>
  );
}

export function OptimizedFaqSection() {
  return (
    <section className="mx-auto w-full max-w-[1100px] px-5 py-16 sm:px-10 sm:py-20">
      <SectionHeading eyebrow="Sık sorulan sorular" title="Randevu ve uygulama süreci" text="Analiz, hazırlık, seans aralığı ve bakım sonrası süreç hakkında kısa yanıtlar." />
      <div className="divide-y divide-white/10 border-y border-white/10">
        {faq.map(([question, answer]) => (
          <details key={question} className="group py-5">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-base font-semibold text-white sm:text-lg">
              {question}<span className="text-2xl font-light text-[#d9bd73] group-open:rotate-45">+</span>
            </summary>
            <p className="max-w-3xl pt-4 text-sm leading-7 text-white/60">{answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

export function OptimizedBlogSection() {
  return (
    <section className="mx-auto w-full max-w-[1448px] px-5 py-16 sm:px-10 sm:py-20 lg:px-12">
      <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
        <SectionHeading eyebrow="Blog" title="Lazer epilasyon bilgi merkezi" text="Merkez seçimi, lazer teknolojileri, fiyatlar ve kıl kökü analizi hakkında özgün rehberler." />
        <Link href="/blog" className="mb-10 inline-flex shrink-0 items-center gap-2 font-semibold text-[#d9bd73]">Tüm rehberler <ArrowRight className="h-5 w-5" /></Link>
      </div>
      <div className="grid gap-5 md:grid-cols-3">
        {blogPosts.slice(0, 3).map((post) => (
          <article key={post.slug} className="overflow-hidden border border-white/10 bg-[rgba(16,24,21,0.95)] shadow-[0_20px_50px_rgba(0,0,0,0.16)]">
            <Link href={`/blog/${post.slug}`} className="group block">
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image src={post.image} alt={post.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
              </div>
              <div className="p-6">
                <span className="inline-flex items-center gap-2 text-xs text-white/45"><Clock3 className="h-4 w-4" />{post.readTime}</span>
                <h3 className="mt-4 text-xl font-semibold leading-7 text-white">{post.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/60">{post.description}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#d9bd73]">Devamını oku <ArrowRight className="h-4 w-4" /></span>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}

export function OptimizedGallerySection() {
  const galleryItems = [
    {
      title: "Lazer epilasyon uygulaması",
      text: "Kıl kökü analiziyle başlayan, soğutmalı başlıkla konforu öne çıkaran süreç.",
      image: "/images/service-images/laser-hair-removal.webp",
    },
    {
      title: "Cilt bakımı odası",
      text: "Hassasiyet ve ihtiyaçlara göre şekillenen medikal bakım planları.",
      image: "/images/service-images/facial.webp",
    },
    {
      title: "Kaş tasarımı",
      text: "Microblading ve altın oran kaş alımı için doğal görünüm odaklı yaklaşım.",
      image: "/images/service-images/brow-shaping.webp",
    },
    {
      title: "Merkez atmosferi",
      text: "Isparta Çünür’de temiz, sakin ve profesyonel uygulama alanı.",
      image: "/images/isparta-beauty-studio-hero.png",
    },
  ] as const;

  return (
    <section className="mx-auto w-full max-w-[1448px] px-5 py-16 sm:px-10 sm:py-20 lg:px-12">
      <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
        <SectionHeading
          eyebrow="Uygulama galerisi"
          title="Gerçek işlem atmosferi, doğru görsel destek"
          text="Giriş ve hizmet bölümlerini, işlemle doğrudan ilişkili görsellerle destekliyoruz. Böylece kullanıcı neye baktığını daha net anlıyor."
        />
        <Link href="/hizmetler" className="mb-10 inline-flex shrink-0 items-center gap-2 font-semibold text-[#d9bd73]">
          Tüm hizmetler <ArrowRight className="h-5 w-5" />
        </Link>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {galleryItems.map((item) => (
          <article key={item.title} className="overflow-hidden border border-white/10 bg-[rgba(16,24,21,0.95)]">
            <div className="relative aspect-[4/3]">
              <Image src={item.image} alt={item.title} fill sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw" className="object-cover" />
            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-white/60">{item.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function OptimizedFooter() {
  const links = [["Ana Sayfa", "#hero"], ["Hizmetler", "#services"], ["Tüm Hizmetler", "/hizmetler"], ["Kıl Kökü Analizi", "#analysis"], ["Uzmanlık Alanları", "#masters"], ["Google Yorumları", "#testimonials"], ["Hakkımızda", "#about"], ["Galeri", "#gallery"], ["Blog", "/blog"], ["Sık Sorulan Sorular", "#faq"]];
  return (
    <footer className="border-t border-white/10 bg-[#080d0b]">
      <div className="mx-auto grid w-full max-w-[1448px] gap-10 px-5 py-12 sm:px-10 md:grid-cols-3 lg:px-12">
        <div>
          <Image src="/images/esin-orhan-logo.webp" alt="Esin Orhan Estetik ve Güzellik" width={170} height={170} className="h-auto w-[150px] rounded-[8px] bg-white p-1 shadow-[0_18px_40px_rgba(0,0,0,0.22)]" />
          <p className="mt-4 max-w-sm text-sm leading-6 text-white/55">Isparta lazer epilasyon, ücretsiz kıl kökü analizi ve kişiye özel bakım uygulamaları.</p>
        </div>
        <nav aria-label="Alt menü">
          <p className="mb-4 font-semibold text-white">Menü</p>
          <ul className="grid grid-cols-2 gap-3 text-sm text-white/60">
            {links.map(([label, href]) => <li key={href}><a href={href} className="hover:text-[#d9bd73]">{label}</a></li>)}
          </ul>
        </nav>
        <div>
          <p className="mb-4 font-semibold text-white">İletişim</p>
          <a href="tel:+905011133232" className="text-[#d9bd73]">+90 501 113 32 32</a>
          <address className="mt-3 text-sm not-italic leading-6 text-white/60">Çünür, 275. Cd No:38 D:34<br />32200 Merkez / Isparta</address>
        </div>
      </div>
    </footer>
  );
}
