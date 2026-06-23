import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import { AppProvider } from "@/context/app-context";
import { Suspense } from "react";
import StickyContactBar from "@/components/StickyContactBar";

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
});

const siteUrl = "https://ispartaguzellikmerkezi.com";
const googleMapsUrl =
  "https://www.google.com/maps/search/?api=1&query=%C3%87%C3%BCn%C3%BCr%2C%20275.%20Cd%20No%3A38%20D%3A34%2C%2032200%20Isparta%20Merkez";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Esin Orhan Güzellik Merkezi | Isparta Lazer Epilasyon ve Cilt Bakımı",
    template: "%s | Esin Orhan Güzellik Merkezi",
  },
  description:
    "Isparta'da ücretsiz kıl kökü ve cilt analizi, buz başlıklı diode ve alexandrite lazer epilasyon. Esin Orhan Güzellik Merkezi Çünür'de kişiye özel seans planı.",
  keywords: [
    "Isparta lazer epilasyon",
    "Isparta güzellik merkezi",
    "Isparta kıl kökü analizi",
    "Isparta cilt bakımı",
    "Çünür lazer epilasyon",
    "buz başlıklı diode lazer Isparta",
    "alexandrite lazer Isparta",
    "erkek lazer epilasyon Isparta",
    "Isparta lazer epilasyon fiyatları",
    "Isparta lazer epilasyon yorumları",
    "kıl kökü analizi",
  ],
  category: "beauty",
  creator: "Esin Orhan Güzellik Merkezi",
  publisher: "Esin Orhan Güzellik Merkezi",
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: siteUrl,
    siteName: "Esin Orhan Güzellik Merkezi",
    title: "Esin Orhan Güzellik Merkezi | Isparta",
    description:
      "Isparta'da ücretsiz kıl kökü analizi, buz başlıklı diode ve alexandrite lazer epilasyon uygulamaları.",
    images: [
      {
        url: "/images/service-images/laser-hair-removal.webp",
        width: 1200,
        height: 800,
        alt: "Esin Orhan Güzellik Merkezi Isparta lazer epilasyon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Esin Orhan Güzellik Merkezi | Isparta",
    description: "Ücretsiz kıl kökü analizi ve kişiye özel lazer epilasyon planı.",
    images: ["/images/service-images/laser-hair-removal.webp"],
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  name: "Esin Orhan Güzellik Merkezi",
  url: siteUrl,
  telephone: "+90 501 113 32 32",
  priceRange: "₺₺",
  image: `${siteUrl}/images/esin-orhan-logo.webp`,
  hasMap: googleMapsUrl,
  sameAs: ["https://www.youtube.com/@esinorhang%C3%BCzellik", googleMapsUrl],
  areaServed: { "@type": "City", name: "Isparta" },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Çünür, 275. Cd No:38 D:34",
    addressLocality: "Isparta Merkez",
    postalCode: "32200",
    addressCountry: "TR",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "00:00",
    closes: "23:59",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Güzellik ve bakım hizmetleri",
    itemListElement: [
      "Lazer Epilasyon",
      "Erkek Lazer Epilasyon",
      "İğneli Epilasyon",
      "Medikal Cilt Bakımı",
      "Dermapen",
      "Kalıcı Makyaj",
      "Microblading",
      "Protez Tırnak",
      "Bölgesel İncelme",
      "Ücretsiz Kıl Kökü ve Cilt Analizi",
    ].map((name) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name, areaServed: "Isparta" },
    })),
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Esin Orhan Güzellik Merkezi",
  url: siteUrl,
  inLanguage: "tr-TR",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Randevu için ne kadar önce yazmalıyım?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yoğunluğa göre aynı gün uygunluk olabilir; tercih edilen saat için 1-2 gün önce iletişime geçilmesi önerilir.",
      },
    },
    {
      "@type": "Question",
      name: "İlk görüşme ve kıl kökü analizi ücretli mi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Kıl kökü ve cilt analizi ücretsizdir. Analiz sonrasında kişiye uygun cihaz ve seans planı belirlenir.",
      },
    },
    {
      "@type": "Question",
      name: "Lazer epilasyon öncesi nelere dikkat etmeliyim?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Seans öncesinde güneş, tahriş ve kullanılan ürünler hakkında bilgi verilmelidir. Planlama cilt durumuna göre yapılır.",
      },
    },
    {
      "@type": "Question",
      name: "Bakım sonrası takip yapılıyor mu?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Evet. Uygulama sonrasında dikkat edilmesi gerekenler ve önerilen seans aralığı danışanla paylaşılır.",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr" className="dark">
      <head>
        <link rel="preload" as="image" href="/images/service-images/laser-hair-removal.webp" fetchPriority="high" />
      </head>
      <body className={`${openSans.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify([localBusinessSchema, websiteSchema, faqSchema]) }}
        />
        <Suspense fallback={null}>
          <AppProvider>{children}</AppProvider>
        </Suspense>
        <StickyContactBar />
      </body>
    </html>
  );
}
