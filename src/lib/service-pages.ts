export type ServicePage = {
  slug: string;
  title: string;
  shortTitle: string;
  image: string;
  metaDescription: string;
  intro: string;
  highlights: string[];
  process: string[];
  faqs: { question: string; answer: string }[];
  related: string[];
};

export const servicePages: ServicePage[] = [
  {
    slug: "lazer-epilasyon",
    title: "Isparta Lazer Epilasyon",
    shortTitle: "Lazer Epilasyon",
    image: "/images/service-images/laser-hair-removal.webp",
    metaDescription:
      "Isparta lazer epilasyon için ücretsiz kıl kökü analizi, buz başlıklı diode ve alexandrite lazer, kişiye özel seans planı ve erkek/kadın uygulama detayları.",
    intro:
      "Kıl kökü analiziyle başlayan lazer epilasyon sürecini cilt tipi, kıl kalınlığı ve bölge yoğunluğuna göre planlıyoruz. Isparta Çünür'de konforlu ve kontrollü bir uygulama deneyimi hedefliyoruz.",
    highlights: [
      "Ücretsiz kıl kökü ve cilt analizi",
      "Buz başlıklı diode ve alexandrite seçenekleri",
      "Kadın ve erkek cilt tiplerine uygun planlama",
      "Isparta Çünür'de kişiye özel seans takibi",
    ],
    process: [
      "Ön görüşmede cilt ve kıl yapısı değerlendirilir.",
      "Uygun cihaz ve seans aralığı belirlenir.",
      "İşlem sonrası bakım önerileri paylaşılır.",
    ],
    faqs: [
      {
        question: "Lazer epilasyon acıtır mı?",
        answer:
          "Soğutmalı başlıklar ve doğru ayarlarla konforlu bir deneyim hedeflenir. Hassas bölgelerde planlama buna göre yapılır.",
      },
      {
        question: "Kaç seans gerekir?",
        answer:
          "Bölge, kıl yapısı ve hormonal duruma göre değişir. İlk analiz sonrası daha gerçekçi bir seans tahmini paylaşılır.",
      },
    ],
    related: ["erkek-lazer-epilasyon", "buz-lazer-isparta", "kil-koku-analizi"],
  },
  {
    slug: "erkek-lazer-epilasyon",
    title: "Isparta Erkek Lazer Epilasyon",
    shortTitle: "Erkek Lazer Epilasyon",
    image: "/images/service-images/laser-hair-removal.webp",
    metaDescription:
      "Isparta erkek lazer epilasyon için sırt, göğüs, ense ve yüz bölgelerine uygun protokoller, ücretsiz analiz ve konforlu seans planı.",
    intro:
      "Erkek lazer epilasyonunda bölge yoğunluğu ve kıl kalınlığı daha farklı yönetilir. Bu nedenle uygulama alanına özel cihaz seçimi ve seans planı büyük önem taşır.",
    highlights: [
      "Sırt, göğüs, ense ve yüz için uygun protokoller",
      "Kıl yoğunluğuna göre ayarlanmış seans planı",
      "Yaz dönemine uygun takip sistemi",
      "Isparta'da erkek danışanlara özel analiz",
    ],
    process: [
      "İşlem bölgesi ve kıl yapısı değerlendirilir.",
      "İlk seans öncesi uygun cihaz belirlenir.",
      "Seans aralıkları hedefe göre şekillendirilir.",
    ],
    faqs: [
      {
        question: "Erkek lazer epilasyon normal uygulamadan farklı mı?",
        answer:
          "Evet, kıl yapısı ve yoğunluk daha farklı olduğu için güç ve seans planı buna göre değişir.",
      },
      {
        question: "Hangi bölgelerde daha çok tercih ediliyor?",
        answer:
          "Sırt, göğüs, ense, omuz ve yüz bölgeleri en sık tercih edilen alanlardır.",
      },
    ],
    related: ["lazer-epilasyon", "buz-lazer-isparta", "isparta-lazer-epilasyon-fiyatlari"],
  },
  {
    slug: "igneli-epilasyon",
    title: "İğneli Epilasyon",
    shortTitle: "İğneli Epilasyon",
    image: "/images/service-images/needle-epilation.webp",
    metaDescription:
      "İğneli epilasyon için noktasal uygulama, uygunluk değerlendirmesi, hassas alan yönetimi ve lazer sonrası tamamlayıcı yaklaşım.",
    intro:
      "İğneli epilasyon, tek tek kıl köklerine odaklanan hassas bir yöntemdir. Lazerin yeterli olmadığı veya tamamlayıcı yaklaşım gerektiği alanlarda planlanabilir.",
    highlights: [
      "Noktasal ve kontrollü uygulama",
      "Hassas alanlarda tamamlayıcı çözüm",
      "Kıl tipi uygunluğu değerlendirmesi",
      "Detaylı ön görüşme ile planlama",
    ],
    process: [
      "Kıl kökü ve alan uygunluğu gözden geçirilir.",
      "Hassasiyet ve beklentiye göre işlem planlanır.",
      "Sonrasında bakım tavsiyeleri paylaşılır.",
    ],
    faqs: [
      {
        question: "İğneli epilasyon kimler için uygundur?",
        answer:
          "Lazerin yetersiz kaldığı sınırlı alanlarda veya tamamlayıcı çözüm gerektiğinde uygundur.",
      },
      {
        question: "Tek seansta sonuç alınır mı?",
        answer:
          "Alan ve kıl yoğunluğuna bağlı olarak birkaç seans gerekebilir.",
      },
    ],
    related: ["lazer-epilasyon", "kil-koku-analizi", "buz-lazer-isparta"],
  },
  {
    slug: "cilt-bakimi",
    title: "Medikal Cilt Bakımı",
    shortTitle: "Cilt Bakımı",
    image: "/images/service-images/facial.webp",
    metaDescription:
      "Isparta cilt bakımı, medikal bakım protokolleri, hassas cilt yönetimi ve analiz sonrası kişiye özel bakım planı.",
    intro:
      "Cilt bakımı bölümümüzde amaç sadece temizlik değil, cildin ihtiyacına göre doğru bakım sırasını kurmaktır. Leke, hassasiyet, matlık ve tıkanıklık gibi konulara odaklanırız.",
    highlights: [
      "Leke ve hassas cilt protokolleri",
      "Medikal bakım yaklaşımı",
      "Ev rutiniyle desteklenen planlama",
      "Dermapen ve analizle uyumlu bakım",
    ],
    process: [
      "Cilt tipi ve mevcut ihtiyaçlar değerlendirilir.",
      "Temizlik, bakım ve destek adımları belirlenir.",
      "Evde uygulanacak rutin netleştirilir.",
    ],
    faqs: [
      {
        question: "Hassas ciltlerde bakım yapılır mı?",
        answer:
          "Evet, hassas ciltler için daha kontrollü ve yatıştırıcı protokoller seçilir.",
      },
      {
        question: "Ne sıklıkla yapılmalı?",
        answer:
          "Cilt ihtiyacına göre değişir; ilk değerlendirmede ideal aralık paylaşılır.",
      },
    ],
    related: ["dermapen", "kil-koku-analizi", "ucretsiz-cilt-analizi"],
  },
  {
    slug: "bolgesel-incelme",
    title: "Bölgesel İncelme",
    shortTitle: "Bölgesel İncelme",
    image: "/images/service-images/regional-slimming.webp",
    metaDescription:
      "Isparta bölgesel incelme uygulamaları, kişisel hedeflere göre planlama ve destek protokolleri hakkında detaylı rehber.",
    intro:
      "Bölgesel incelme uygulamalarını tek bir şablona göre değil, kişinin hedefi ve ihtiyaçlarına göre ele alıyoruz. Amaç daha planlı ve takip edilebilir bir süreç oluşturmaktır.",
    highlights: [
      "Kişisel hedeflere göre planlama",
      "Takip edilebilir uygulama süreci",
      "Destekleyici seans akışı",
      "Analiz temelli yaklaşım",
    ],
    process: [
      "Hedef bölge ve beklenti netleştirilir.",
      "Uygun uygulama planı oluşturulur.",
      "Süreç ilerleyişi takip edilir.",
    ],
    faqs: [
      {
        question: "Her danışanda aynı plan mı uygulanır?",
        answer:
          "Hayır, hedef bölge ve ihtiyaçlar kişiye göre değişir.",
      },
      {
        question: "Analiz neden önemli?",
        answer:
          "Doğru planlama için ihtiyaç, hassasiyet ve uygunluk birlikte değerlendirilir.",
      },
    ],
    related: ["ems", "ucretsiz-cilt-analizi", "kil-koku-analizi"],
  },
  {
    slug: "ems",
    title: "EMS",
    shortTitle: "EMS",
    image: "/images/service-images/ems.webp",
    metaDescription:
      "EMS uygulamaları için kas aktivasyonunu destekleyen planlama, bölgesel hedefleme ve kişiye özel süreç bilgileri.",
    intro:
      "EMS uygulamalarında hedef, bölgesel kas aktivasyonunu destekleyen kontrollü bir süreç oluşturmaktır. Bu nedenle alan, hedef ve beklenti netleştirilerek ilerlenir.",
    highlights: [
      "Kas aktivasyonunu destekleyen uygulama",
      "Bölgesel hedeflere göre planlama",
      "Kişisel ihtiyaca göre seans akışı",
      "Destekleyici bakım yaklaşımı",
    ],
    process: [
      "Hedeflenen bölge ve beklenti değerlendirilir.",
      "Uygulama planı seanslara bölünür.",
      "Takip ve ilerleme notları paylaşılır.",
    ],
    faqs: [
      {
        question: "EMS ile bölgesel incelme aynı şey mi?",
        answer:
          "Hayır, EMS kas aktivasyonu odaklıdır; bölgesel incelme ise farklı hedeflerle planlanabilir.",
      },
      {
        question: "Kimlere uygundur?",
        answer:
          "Uygunluk değerlendirmesi sonrası, hedefi ve beklentisi net olan danışanlara göre planlanır.",
      },
    ],
    related: ["bolgesel-incelme", "ucretsiz-cilt-analizi", "lazer-epilasyon"],
  },
  {
    slug: "kalici-makyaj",
    title: "Kalıcı Makyaj",
    shortTitle: "Kalıcı Makyaj",
    image: "/images/service-images/makeup.webp",
    metaDescription:
      "Kalıcı makyaj uygulamaları için yüz oranı, cilt tonu ve doğal görünüm odaklı tasarım bilgileri.",
    intro:
      "Kalıcı makyajda amaç, yüz oranları ve doğal görünüm arasında dengeli bir sonuç elde etmektir. Kaş, dudak ve yüz konturunda uyumlu tasarım önemlidir.",
    highlights: [
      "Doğal görünüm odaklı tasarım",
      "Yüz oranına göre planlama",
      "Cilt tonuna uyum",
      "Uzun süreli estetik sonuç",
    ],
    process: [
      "Yüz yapısı ve beklenti değerlendirilir.",
      "Uygun renk ve form belirlenir.",
      "Bakım sonrası öneriler paylaşılır.",
    ],
    faqs: [
      {
        question: "Kalıcı makyaj çok yapay durur mu?",
        answer:
          "Doğru renk ve form ile doğal bir görünüm hedeflenir.",
      },
      {
        question: "İşlem sonrası bakım gerekiyor mu?",
        answer:
          "Evet, kalıcılığın ve görünümün korunması için bakım önerileri paylaşılır.",
      },
    ],
    related: ["microblading", "altin-oran-kas-alimi", "cilt-bakimi"],
  },
  {
    slug: "microblading",
    title: "Microblading",
    shortTitle: "Microblading",
    image: "/images/service-images/microblading.webp",
    metaDescription:
      "Microblading ile kaş formuna uygun kıl tekniği, doğal görünüm ve yüz oranına göre planlanan kaş tasarımı.",
    intro:
      "Microblading, kaş çizgisini doğal bir şekilde belirginleştirmek isteyenler için yüz oranına uygun, kıl tekniğiyle çalışan bir uygulamadır.",
    highlights: [
      "Doğal kıl tekniği",
      "Yüz oranına uygun kaş tasarımı",
      "Boşlukları dengeleyen görünüm",
      "Uzun süreli form korunumu",
    ],
    process: [
      "Kaş yapısı ve yüz hattı analiz edilir.",
      "Uygun form ve ton seçilir.",
      "Sonrasında bakım süreci anlatılır.",
    ],
    faqs: [
      {
        question: "Microblading ile kaş tamamen değişir mi?",
        answer:
          "Amaç değişimden çok doğal bir denge ve daha net bir form oluşturmaktır.",
      },
      {
        question: "Kaç ay dayanır?",
        answer:
          "Cilt tipine ve bakım alışkanlıklarına göre değişir.",
      },
    ],
    related: ["altin-oran-kas-alimi", "kalici-makyaj", "cilt-bakimi"],
  },
  {
    slug: "protez-tirnak",
    title: "Protez Tırnak",
    shortTitle: "Protez Tırnak",
    image: "/images/service-images/manicure.webp",
    metaDescription:
      "Protez tırnak uygulamaları için tırnak yapısına uygun şekillendirme, dayanıklı form ve estetik görünüm planlaması.",
    intro:
      "Protez tırnak uygulamalarında estetik görünüm kadar kullanım konforu da önemlidir. Tırnak yapısı değerlendirilerek uygun form belirlenir.",
    highlights: [
      "Tırnak yapısına uygun şekillendirme",
      "Dayanıklı ve estetik sonuç",
      "Kişisel stil uyumu",
      "Bakım önerileriyle uzun kullanım",
    ],
    process: [
      "Tırnak yapısı ve beklenti değerlendirilir.",
      "Uygun form ve uzunluk seçilir.",
      "Bakım aralığı paylaşılır.",
    ],
    faqs: [
      {
        question: "Günlük kullanımda rahat olur mu?",
        answer:
          "Uygun form seçildiğinde hem estetik hem konforlu kullanım hedeflenir.",
      },
      {
        question: "Bakım gerekir mi?",
        answer:
          "Evet, dayanıklılığın korunması için düzenli bakım önerilir.",
      },
    ],
    related: ["kalici-makyaj", "microblading", "cilt-bakimi"],
  },
  {
    slug: "dermapen",
    title: "Dermapen",
    shortTitle: "Dermapen",
    image: "/images/service-images/facial.webp",
    metaDescription:
      "Dermapen uygulaması ile cilt yenileme, bakım sonrası protokol ve kişiye özel değerlendirme hakkında kapsamlı bilgi.",
    intro:
      "Dermapen, cildin görünümünü destekleyen kontrollü bir bakım yaklaşımıdır. Öncesinde cilt tipi ve ihtiyaçlar değerlendirilerek planlama yapılır.",
    highlights: [
      "Cilt yenileme odaklı bakım",
      "Ön değerlendirme ile planlama",
      "Hassas cilt yaklaşımı",
      "Cilt bakım rutiniyle uyum",
    ],
    process: [
      "Cilt ihtiyacı ve hassasiyet değerlendirilir.",
      "Uygun yoğunluk ve protokol seçilir.",
      "Sonrasında destekleyici bakım anlatılır.",
    ],
    faqs: [
      {
        question: "Dermapen sonrası kızarıklık olur mu?",
        answer:
          "Kişiye bağlı olarak kısa süreli hassasiyet olabilir; bakım önerileri buna göre paylaşılır.",
      },
      {
        question: "Hangi ciltler için uygundur?",
        answer:
          "Analiz sonrasında uygunluk değerlendirilir ve cilt tipine göre plan yapılır.",
      },
    ],
    related: ["cilt-bakimi", "ucretsiz-cilt-analizi", "kil-koku-analizi"],
  },
  {
    slug: "ucretsiz-cilt-analizi",
    title: "Ücretsiz Cilt Analizi",
    shortTitle: "Ücretsiz Cilt Analizi",
    image: "/images/service-images/skin-analysis.webp",
    metaDescription:
      "Ücretsiz cilt analizi ile cilt tipi, hassasiyet, ihtiyaç ve uygun bakım planı nasıl belirlenir? Isparta'da detaylı açıklama.",
    intro:
      "Ücretsiz cilt analizi, işlemden önce cildin neye ihtiyaç duyduğunu görmek için başvurduğumuz ilk adımdır. Böylece bakım, lazer veya destek protokolü daha doğru planlanır.",
    highlights: [
      "Cilt tipi ve hassasiyet değerlendirmesi",
      "Uygun bakım ve cihaz önerisi",
      "İlk görüşmede ücretsiz planlama",
      "Lazer öncesi doğru yönlendirme",
    ],
    process: [
      "Cilt tipi ve mevcut durum değerlendirilir.",
      "İhtiyaçlara göre uygun yol haritası çıkarılır.",
      "Sonraki seanslar için plan paylaşılır.",
    ],
    faqs: [
      {
        question: "Analiz gerçekten ücretsiz mi?",
        answer:
          "Evet, ücretsizdir ve uygun planı netleştirmek için yapılır.",
      },
      {
        question: "Sadece lazer için mi kullanılır?",
        answer:
          "Hayır, cilt bakımı ve destekleyici işlemler için de yol göstericidir.",
      },
    ],
    related: ["cilt-bakimi", "lazer-epilasyon", "kil-koku-analizi"],
  },
  {
    slug: "altin-oran-kas-alimi",
    title: "Altın Oran Kaş Alımı",
    shortTitle: "Altın Oran Kaş Alımı",
    image: "/images/service-images/brow-shaping.webp",
    metaDescription:
      "Altın oran kaş alımı ile yüz oranlarına uygun kaş tasarımı, doğal görünüm ve dengeli ifade planlaması.",
    intro:
      "Altın oran kaş alımı, yüzün genel oranına uygun şekilde kaş hattını düzenlemek için uygulanır. Burada amaç sert değişim değil, daha dengeli bir ifade oluşturmaktır.",
    highlights: [
      "Yüz oranına göre tasarım",
      "Dengeli ve doğal ifade",
      "Kaş formunu netleştirme",
      "Microblading ile uyumlu plan",
    ],
    process: [
      "Yüz hattı ve kaş formu analiz edilir.",
      "Altın orana uygun ölçüm yapılır.",
      "Bakım ve koruma önerileri verilir.",
    ],
    faqs: [
      {
        question: "Kaş alımı herkeste aynı görünür mü?",
        answer:
          "Hayır, yüz yapısına göre kişisel tasarım yapılır.",
      },
      {
        question: "Kaş kalınlığı değişir mi?",
        answer:
          "Amaç mevcut yapıyı dengeleyerek daha uyumlu bir görünüm oluşturmaktır.",
      },
    ],
    related: ["microblading", "kalici-makyaj", "cilt-bakimi"],
  },
  {
    slug: "buz-lazer-isparta",
    title: "Buz Lazer Isparta",
    shortTitle: "Buz Lazer",
    image: "/images/service-images/laser-hair-removal.webp",
    metaDescription:
      "Buz lazer Isparta rehberi: soğutmalı diode sistem, konfor hissi, kimlere uygun olduğu ve analiz öncesi bilinmesi gerekenler.",
    intro:
      "Buz lazer, konforu önceliklendiren ve soğutmalı başlık yapısıyla öne çıkan diode uygulama yaklaşımıdır. Isparta'da hangi durumlarda tercih edildiğini analizle birlikte değerlendiriyoruz.",
    highlights: [
      "Soğutmalı başlıkla daha konforlu uygulama",
      "Hassas ciltlerde kontrollü planlama",
      "Kıl ve cilt tipine göre ayar seçimi",
      "Konfor odaklı seans akışı",
    ],
    process: [
      "Cilt ve kıl tipi değerlendirilir.",
      "Soğutma düzeyi ve cihaz ayarı planlanır.",
      "Seans sonrası bakım önerileri paylaşılır.",
    ],
    faqs: [
      {
        question: "Buz lazer herkes için uygun mu?",
        answer:
          "Herkes için tek tip karar verilmez; cilt ve kıl yapısı analiz sonrası değerlendirilir.",
      },
      {
        question: "Acısız mı olur?",
        answer:
          "Konforu artırır ama hissiyat kişiden kişiye değişebilir.",
      },
    ],
    related: ["lazer-epilasyon", "kil-koku-analizi", "erkek-lazer-epilasyon"],
  },
  {
    slug: "kil-koku-analizi",
    title: "Kıl Kökü ve Cilt Analizi",
    shortTitle: "Kıl Kökü Analizi",
    image: "/images/service-images/facial.webp",
    metaDescription:
      "Kıl kökü ve cilt analizi ile lazer epilasyon öncesi doğru cihaz, uygun seans aralığı ve bakım planı nasıl belirlenir?",
    intro:
      "Kıl kökü ve cilt analizi, doğru lazer planının başlangıç noktasıdır. Cilt tipi, kıl yapısı, yoğunluk ve hassasiyet birlikte değerlendirilerek kişiye özel yol haritası çıkarılır.",
    highlights: [
      "Lazer öncesi ücretsiz analiz",
      "Kıl yapısı ve yoğunluk değerlendirmesi",
      "Cilt tipi ve hassasiyet kontrolü",
      "Doğru cihaz ve seans seçimi",
    ],
    process: [
      "Cilt ve kıl yapısı incelenir.",
      "Uygun cihaz ve hedef belirlenir.",
      "Seans planı danışana anlatılır.",
    ],
    faqs: [
      {
        question: "Analiz neden bu kadar önemli?",
        answer:
          "Çünkü yanlış cihaz veya yanlış seans aralığı sonucu etkileyebilir.",
      },
      {
        question: "Analiz ücretsiz mi?",
        answer:
          "Evet, merkezimizde ücretsizdir.",
      },
    ],
    related: ["lazer-epilasyon", "ucretsiz-cilt-analizi", "buz-lazer-isparta"],
  },
  {
    slug: "isparta-lazer-epilasyon-fiyatlari",
    title: "Isparta Lazer Epilasyon Fiyatları",
    shortTitle: "Lazer Fiyatları",
    image: "/images/service-images/laser-hair-removal.webp",
    metaDescription:
      "Isparta lazer epilasyon fiyatları neye göre değişir, paket kapsamı ve seans sayısı nasıl etkiler? Şeffaf fiyat okuma rehberi.",
    intro:
      "Fiyat, yalnızca rakam değil; cihaz, bölge sayısı, analiz, seans planı ve takip kapsamının toplamıdır. Bu sayfada fiyatı belirleyen unsurları anlaşılır şekilde özetliyoruz.",
    highlights: [
      "Bölge ve seans sayısına göre fiyat",
      "Paket kapsamını doğru okuma",
      "Cihaz ve plan farkının etkisi",
      "Şeffaf fiyat değerlendirmesi",
    ],
    process: [
      "İşlem kapsamı ve hedef belirlenir.",
      "Seans ve bölge etkisi değerlendirilir.",
      "Kişiye özel fiyat çerçevesi sunulur.",
    ],
    faqs: [
      {
        question: "Neden herkeste aynı fiyat olmaz?",
        answer:
          "Çünkü bölge, seans sayısı, kıl yoğunluğu ve plan kapsamı değişir.",
      },
      {
        question: "Fiyatı nasıl en doğru karşılaştırırım?",
        answer:
          "Kapsamı, cihazı, analiz sürecini ve takip desteğini birlikte inceleyerek.",
      },
    ],
    related: ["lazer-epilasyon", "buz-lazer-isparta", "kil-koku-analizi"],
  },
];

export const getServicePage = (slug: string) => servicePages.find((page) => page.slug === slug);
