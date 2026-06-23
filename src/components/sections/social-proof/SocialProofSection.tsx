"use client";

import { useState } from "react";
import { ArrowUpRight, MessageSquareQuote, Play, Star, Youtube } from "lucide-react";

const googleReviewsUrl =
  "https://www.google.com/search?q=Esin+Orhan+G%C3%BCzellik+Merkezi+Isparta+yorumlar";
const youtubeUrl = "https://www.youtube.com/@esinorhang%C3%BCzellik/videos";

const tickerItems = [
  "4,9 Google puanı",
  "+430 danışan yorumu",
  "Gerçek yorumlar Google'da",
  "Isparta Çünür",
  "Kadın ve erkek lazer epilasyon",
  "Ücretsiz kıl kökü analizi",
];

const realReviews = [
  { name: "Cihad Duman", service: "Erkek lazer epilasyon", text: "Erkek lazer epilasyon için çekinerek araştırmaya başlamıştım ama yorumlara bakarak burayı tercih ettim. Ortam gayet nezih ve hijyenik. Çalışanlar işinde profesyonel, erkek olarak hiç rahatsızlık hissetmedim." },
  { name: "rnbtn", service: "Lazer epilasyon", text: "Lazer epilasyonumun ikinci seansını aldım; ilk seanstan itibaren dökülmelerim gözle görünür derecede oldu. Hijyene çok önem verdikleri aşikâr. Ayrıca Esin Hanım da bir o kadar güler yüzlü. Her şey için teşekkürler." },
  { name: "Yusuf Yegin", service: "Cilt bakımı", text: "Cilt bakımı için gittim, öncesi ve sonrasında karşılaştırma yaptığımda gerçekten fark çok büyük, cildim pamuk gibi oldu. Cilt bakımı için adres arayanlara öneririm. Teşekkürler." },
  { name: "Mina Moralıoğlu", service: "Altın oran kaş alımı", text: "Bugün hizmet alma fırsatım oldu ve çok memnun kaldım. Kaş alımı gerçekten çok özenli ve yüz şeklime uygun şekilde yapıldı. Çalışanlar oldukça ilgili, güler yüzlü ve samimiydi. Gönül rahatlığıyla tavsiye ederim." },
  { name: "Bilge", service: "Kaş tasarımı", text: "Bayıldım temiz ve güler yüzlüler kaşlarımı aldırmak için gidiyorum kullandıkları malzemeler steril ve temiz isteklere dikkat ediyorlar fikrinizi almadan işlem yapılmıyor çok memnunum favori güzellik salonum." },
  { name: "Eylül Tıknaz", service: "Cilt bakımı", text: "Esin hanımla tanışmam benim için büyük bir şans oldu. Yıllarca yaşadığım akne ve scar izleri zamanla anıya dönüştü. Isparta gibi küçük bir yerde gerçekten çok iyi iş çıkartıyor." },
];

export default function SocialProofSection() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section className="overflow-hidden bg-[#080d0b] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1448px] px-5 sm:px-10 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
          <div>
            <div className="mb-5 flex items-center gap-3 text-sm font-semibold uppercase text-[#d9bd73]">
              <MessageSquareQuote className="h-5 w-5" />
              Gerçek Google yorumları
            </div>
            <h2 className="max-w-3xl text-3xl font-bold leading-tight text-[var(--foreground)] sm:text-4xl lg:text-5xl">
              +430 yorumun anlattığı deneyim
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-[var(--middle-foreground)] sm:text-lg">
              Danışan değerlendirmelerini değiştirmeden, doğrudan Google İşletme Profilimizde okuyabilirsiniz.
            </p>
          </div>
          <a
            href={googleReviewsUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-between border border-white/15 bg-white/[0.04] p-6 transition-colors hover:border-[#d9bd73]/70"
          >
            <div>
              <div className="flex items-center gap-1 text-[#f4c84b]" aria-label="5 üzerinden 4,9 puan">
                {[0, 1, 2, 3, 4].map((star) => <Star key={star} className="h-5 w-5 fill-current" />)}
              </div>
              <p className="mt-3 text-3xl font-bold text-white">4,9 <span className="text-base font-normal text-white/60">/ 5</span></p>
              <p className="mt-1 text-sm text-white/60">+430 Google yorumu</p>
            </div>
            <ArrowUpRight className="h-7 w-7 text-[#d9bd73]" />
          </a>
        </div>
      </div>

      <div className="mt-12 overflow-hidden">
        <div className="reviews-track flex w-max gap-4">
          {[...realReviews, ...realReviews].map((review, index) => (
            <article
              key={`${review.name}-${index}`}
              className="w-[320px] shrink-0 border border-white/10 bg-[#101815] p-6 sm:w-[390px]"
              aria-hidden={index >= realReviews.length}
            >
              <div role="img" className="flex gap-1 text-[#f4c84b]" aria-label="5 yıldızlı Google yorumu">
                {[0, 1, 2, 3, 4].map((star) => <Star key={star} className="h-4 w-4 fill-current" />)}
              </div>
              <blockquote className="mt-5 min-h-[168px] text-sm leading-7 text-white/75">“{review.text}”</blockquote>
              <div className="mt-5 border-t border-white/10 pt-4">
                <p className="font-semibold text-white">{review.name}</p>
                <p className="mt-1 text-xs text-[#d9bd73]">Google yorumu · {review.service}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-12 border-y border-white/10 py-4">
        <div className="review-marquee flex w-max gap-3 motion-reduce:translate-x-0 motion-reduce:animate-none">
          {[...tickerItems, ...tickerItems].map((item, index) => (
            <a
              key={`${item}-${index}`}
              href={googleReviewsUrl}
              target="_blank"
              rel="noreferrer"
              aria-hidden={index >= tickerItems.length}
              tabIndex={index >= tickerItems.length ? -1 : undefined}
              className="flex h-12 items-center gap-3 whitespace-nowrap border border-white/10 bg-[#101815] px-5 text-sm text-white/80 hover:border-[#d9bd73]/60"
            >
              <Star className="h-4 w-4 fill-[#f4c84b] text-[#f4c84b]" />
              {item}
            </a>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-14 grid w-full max-w-[1448px] gap-8 px-5 sm:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:px-12">
        <div className="relative aspect-video overflow-hidden border border-white/10 bg-black">
          {showVideo ? (
            <iframe
              className="absolute inset-0 h-full w-full"
              src="https://www.youtube-nocookie.com/embed/jLbbyrtaBn4?autoplay=1&rel=0"
              title="Esin Orhan Güzellik Merkezi - Isparta Lazer Epilasyon"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          ) : (
            <button
              type="button"
              onClick={() => setShowVideo(true)}
              className="group absolute inset-0 h-full w-full"
              aria-label="Esin Orhan Güzellik Merkezi videosunu oynat"
            >
              <img
                src="https://i.ytimg.com/vi/jLbbyrtaBn4/hqdefault.jpg"
                alt="Esin Orhan Güzellik Merkezi YouTube videosu"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover opacity-80 transition-opacity group-hover:opacity-100"
              />
              <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-black/50 text-white backdrop-blur-sm">
                <Play className="ml-1 h-7 w-7 fill-current" />
              </span>
            </button>
          )}
        </div>
        <div className="flex flex-col justify-center border-t border-white/15 py-8 lg:border-l lg:border-t-0 lg:pl-10">
          <Youtube className="h-9 w-9 text-[#ff3d3d]" />
          <h3 className="mt-7 text-2xl font-bold text-white sm:text-3xl">Uygulamaları videoda görün</h3>
          <p className="mt-4 text-base leading-7 text-white/65">
            Merkezimizden uygulama görüntüleri, bakım süreçleri ve güncel paylaşımlar için YouTube kanalımızı inceleyin.
          </p>
          <a
            href={youtubeUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-7 inline-flex w-fit items-center gap-2 font-semibold text-[#d9bd73] hover:text-white"
          >
            YouTube videolarına git <ArrowUpRight className="h-5 w-5" />
          </a>
        </div>
      </div>

      <style jsx>{`
        .review-marquee { animation: reviews-scroll 34s linear infinite; }
        .review-marquee:hover { animation-play-state: paused; }
        .reviews-track { animation: reviews-scroll 58s linear infinite; }
        .reviews-track:hover { animation-play-state: paused; }
        @keyframes reviews-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
