export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  image: string;
  sections: { heading: string; paragraphs: string[]; bullets?: string[] }[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "ispartada-lazer-epilasyon-merkezi-nasil-secilir",
    title: "Isparta'da Lazer Epilasyon Merkezi Nasıl Seçilir? 2026 Kontrol Listesi",
    description:
      "Isparta'da lazer epilasyon merkezi seçerken cihaz, analiz, hijyen, iletişim ve gerçek yorumlar açısından dikkat edilmesi gerekenler.",
    date: "2026-06-21",
    readTime: "6 dk",
    image: "/images/service-images/laser-hair-removal.webp",
    sections: [
      {
        heading: "Önce ihtiyaç, sonra marka",
        paragraphs: [
          "Lazer epilasyonda tek bir merkezin herkes için en iyi olduğunu söylemek doğru değildir. Cilt tonu, kıl yapısı, uygulama bölgesi, hassasiyet ve beklenti kişiden kişiye değişir. Bu nedenle kararın ilk adımı fiyat listesi değil, ihtiyaç değerlendirmesi olmalıdır.",
          "Isparta'da merkez araştırırken size doğrudan paket satmak yerine kıl kökü ve cilt analizi yapan, kullanacağı sistemi ve seans aralığını açıklayan işletmeleri karşılaştırın.",
        ],
      },
      {
        heading: "Merkez seçiminde kontrol etmeniz gereken noktalar",
        paragraphs: [
          "İlk görüşmede aşağıdaki başlıkların açıkça konuşulması, süreci daha öngörülebilir ve güvenli hale getirir.",
        ],
        bullets: [
          "Cihaz türü ve CE belgesi",
          "Kıl kökü ile cilt tipi analizi",
          "Hijyen ve başlık temizliği",
          "Uygulamayı yapacak ekibin deneyimi",
          "Seans aralığı ve süreç takibi",
          "Ücret, paket kapsamı ve iptal koşulları",
        ],
      },
      {
        heading: "Yorumları nasıl okumalı?",
        paragraphs: [
          "Yalnızca yıldız ortalamasına bakmayın. Farklı tarihlerde yazılmış, hizmet türünü ve süreci anlatan yorumlar daha fazla bağlam sunar. İşletmenin eleştirilere verdiği yanıtlar da iletişim yaklaşımını gösterir.",
          "Esin Orhan Güzellik Merkezi'nde ön görüşme ve kıl kökü analizi ücretsizdir. Analiz sonucunda uygun cihaz ve kişisel plan hakkında bilgi alabilirsiniz.",
        ],
      },
      {
        heading: "Karar verirken kendinize sorun",
        paragraphs: [
          "Bu merkez cihazı neden öneriyor? Benim cilt tipim için nasıl bir güvenlik planı var? Seans aralıkları neden bu şekilde? Sorularınıza net ve sakin yanıtlar alıyorsanız doğru yere daha yakınsınız.",
        ],
      },
    ],
  },
  {
    slug: "buz-lazer-isparta-rehberi",
    title: "Buz Lazer Isparta Rehberi: Diode Lazer Konforlu mu, Kimlere Uygun?",
    description:
      "Buz başlıklı diode lazerin çalışma mantığı, alexandrite lazerden farkı ve uygulama öncesi analiz neden önemlidir?",
    date: "2026-06-21",
    readTime: "6 dk",
    image: "/images/service-images/laser-hair-removal.webp",
    sections: [
      {
        heading: "Buz lazer adı nereden gelir?",
        paragraphs: [
          "Buz lazer ifadesi genellikle cilt yüzeyini uygulama sırasında soğutan başlığa sahip diode sistemler için kullanılır. Soğutma, ısı hissini dengelemeye ve uygulama konforunu artırmaya yardımcı olur. Ancak konfor düzeyi bölgeye, kişiye ve kullanılan ayara göre değişebilir.",
          "Cihazın adı tek başına yeterli değildir. Dalga boyu, cihaz bakımı, uygulama tekniği ve kişiye göre seçilen parametreler birlikte değerlendirilmelidir.",
        ],
      },
      {
        heading: "Diode ve alexandrite arasındaki fark",
        paragraphs: [
          "Her iki sistemin de kullanım alanı bulunur. Alexandrite sistemler belirli cilt ve kıl kombinasyonlarında hızlı çalışma avantajı sunabilirken diode sistemler farklı cilt tiplerinde esnek planlama sağlayabilir. Hangi teknolojinin uygun olduğu yalnızca internetten verilen genel bilgiyle belirlenemez.",
          "Kışın, yazın, güneşlenmiş ciltte ya da hassas bölgede aynı ayar kullanılmaz. İyi merkez, cihazı değil kişiyi merkeze alır.",
        ],
        bullets: [
          "Cilt tonu ve güneşlenme durumu",
          "Kılın rengi, kalınlığı ve yoğunluğu",
          "Uygulama bölgesi",
          "Geçmiş lazer deneyimi",
          "Hassasiyet ve kullanılan ürünler",
        ],
      },
      {
        heading: "Neden önce analiz yapılmalı?",
        paragraphs: [
          "Kıl kökü ve cilt analizi, cihaz tercihinden seans aralığına kadar temel kararları etkiler. Esin Orhan Güzellik Merkezi'nde ücretsiz analiz sırasında beklentiniz, cilt geçmişiniz ve uygulama bölgesi birlikte değerlendirilir.",
        ],
      },
      {
        heading: "Kullanıcılar ne zaman buz lazeri tercih eder?",
        paragraphs: [
          "Acı hissine hassas olanlar, konforu önceliklendirenler, geniş bölgelerde düzenli seans planı isteyenler ve süreç boyunca cilt takibine önem verenler buz başlıklı sistemleri sık tercih eder.",
        ],
      },
    ],
  },
  {
    slug: "isparta-lazer-epilasyon-fiyatlari-2026",
    title: "Isparta Lazer Epilasyon Fiyatları 2026: Ücreti Neler Belirler?",
    description:
      "Lazer epilasyon fiyatlarının bölge, seans, cihaz ve paket kapsamına göre neden değiştiğini açıklayan şeffaf rehber.",
    date: "2026-06-21",
    readTime: "5 dk",
    image: "/images/service-images/laser-hair-removal.webp",
    sections: [
      {
        heading: "Tek bir fiyat neden herkese uymaz?",
        paragraphs: [
          "Lazer epilasyon fiyatları yalnızca 'tek bölge' veya 'tüm vücut' ifadesinden oluşmaz. Uygulama alanının büyüklüğü, kıl yoğunluğu, seans süresi, kullanılacak teknoloji ve paketin kapsamı toplam ücreti etkiler.",
          "Bu nedenle analiz yapılmadan verilen çok düşük veya belirsiz fiyatları yalnızca rakam üzerinden karşılaştırmak yanıltıcı olabilir.",
        ],
      },
      {
        heading: "Fiyatı etkileyen başlıca unsurlar",
        paragraphs: [
          "Teklif alırken hangi hizmetlerin dahil olduğunu yazılı veya açık biçimde öğrenin. Böylece gerçekten neyi karşılaştırdığınızı bilirsiniz.",
        ],
        bullets: [
          "Kadın veya erkek kıl yapısı",
          "Uygulama bölgesi ve seans süresi",
          "Diode veya alexandrite cihaz tercihi",
          "Tek seans ya da paket planı",
          "Kontrol seansı ve süreç takibi",
          "Kampanyanın geçerlilik koşulları",
        ],
      },
      {
        heading: "Sağlıklı fiyat karşılaştırması",
        paragraphs: [
          "Aynı kapsamı karşılaştırın: cihaz, bölge sayısı, seans adedi, kontrol uygulaması ve ödeme koşulları aynı değilse iki fiyat gerçekte aynı hizmeti temsil etmeyebilir.",
          "Güncel fiyat ve kampanya bilgisi için ücretsiz analiz randevusunda kişisel planınızı öğrenebilirsiniz.",
        ],
      },
      {
        heading: "Ucuz görünen tekliflerde nelere dikkat etmeli?",
        paragraphs: [
          "Sadece tek seans fiyatı düşük diye karar vermek yerine toplam seans sayısı, cihaz belgesi, ek takip ve iletişim kalitesine bakın. Ucuz görünen hizmet, eksik planlama nedeniyle uzun vadede daha pahalıya gelebilir.",
        ],
      },
    ],
  },
  {
    slug: "isparta-lazer-epilasyon-yorumlari-nasil-okunmali",
    title: "Isparta Lazer Epilasyon Yorumları Nasıl Okunmalı?",
    description:
      "Gerçek kullanıcı deneyimlerini değerlendirirken yıldız puanı, tarih, hizmet detayı ve yorum çeşitliliği nasıl incelenmeli?",
    date: "2026-06-21",
    readTime: "5 dk",
    image: "/images/service-images/laser-hair-removal.webp",
    sections: [
      {
        heading: "Yıldız puanı tek başına yeterli değil",
        paragraphs: [
          "Yüksek puan güçlü bir ilk sinyal olsa da karar vermek için yorumların içeriğine bakmak gerekir. Hizmet türünü, kaçıncı seansta olduğunu, hijyen ve iletişim deneyimini anlatan yorumlar daha anlamlıdır.",
          "Yorum tarihlerini kontrol etmek de önemlidir. Farklı dönemlerde düzenli biçimde gelen değerlendirmeler, tek seferlik yoğun yorumlardan daha dengeli bir tablo sunabilir.",
        ],
      },
      {
        heading: "Güven veren yorum özellikleri",
        paragraphs: ["Gerçek deneyimi anlamak için şu ayrıntıları arayın."],
        bullets: [
          "Alınan hizmetin açıkça belirtilmesi",
          "Olumlu ve geliştirilmesi gereken yönlerin anlatılması",
          "Farklı hizmetlerden yorum bulunması",
          "İşletmenin yanıtlarının saygılı ve açıklayıcı olması",
          "Yorumların zamana yayılması",
        ],
      },
      {
        heading: "Esin Orhan yorum alanı",
        paragraphs: [
          "Sitemizde yer verdiğimiz yorumlar, işletme profilindeki gerçek Google değerlendirmeleri arasından seçilmiştir. Metinlerin yanında yorum sahibinin adı ve aldığı hizmet gösterilir; tüm değerlendirmelere Google üzerinden ulaşabilirsiniz.",
        ],
      },
      {
        heading: "Kopya yorumları nasıl ayırt edersiniz?",
        paragraphs: [
          "Aşırı kısa, aynı kalıp cümlelerle yazılmış, tarihleri birbirine çok yakın olan yorumlar yerine detay anlatan, hizmet deneyimine temas eden ve farklı dille yazılmış yorumlar daha değerlidir.",
        ],
      },
    ],
  },
  {
    slug: "hastane-mi-guzellik-merkezi-mi-lazer-epilasyon",
    title: "Lazer Epilasyon: Hastane mi, Güzellik Merkezi mi?",
    description:
      "Lazer epilasyon için kurum seçerken hizmet kapsamı, cihaz, yetkinlik, danışmanlık ve sağlık durumları açısından dengeli karşılaştırma.",
    date: "2026-06-21",
    readTime: "6 dk",
    image: "/images/service-images/laser-hair-removal.webp",
    sections: [
      {
        heading: "Karar ihtiyaç ve sağlık durumuna göre değişir",
        paragraphs: [
          "Hastane ile güzellik merkezi arasında tek cümlelik bir üstünlük sıralaması yapmak doğru olmaz. Aktif cilt hastalığı, ilaç kullanımı, hormonal durum veya tıbbi değerlendirme gerektiren bir konu varsa önce hekim görüşü alınmalıdır.",
          "Kozmetik amaçlı uygulamalarda ise kurumun yasal kapsamı, cihaz belgeleri, hijyen düzeni ve uygulama öncesi değerlendirme süreci incelenmelidir.",
        ],
      },
      {
        heading: "Sorulması gereken sorular",
        paragraphs: ["Randevu oluşturmadan önce aşağıdaki sorulara net yanıt alın."],
        bullets: [
          "Kullanılan cihazın türü ve belgesi nedir?",
          "Cilt ve kıl yapısı değerlendiriliyor mu?",
          "Uygulamayı kim gerçekleştiriyor?",
          "Kontrendikasyonlar nasıl sorgulanıyor?",
          "Hijyen ve takip süreci nasıl yürütülüyor?",
        ],
      },
      {
        heading: "Güvenli başlangıç",
        paragraphs: [
          "Şüpheli bir cilt bulgusu veya sağlık sorunu varsa uygulamayı ertelemek ve sağlık profesyoneline başvurmak en doğru adımdır. Kozmetik süreçte de ücretsiz analiz, beklentilerin ve sınırların açıkça konuşulmasını sağlar.",
        ],
      },
      {
        heading: "Kurum seçerken bakmanız gereken sinyaller",
        paragraphs: [
          "Sadece tabela ve fiyat değil; danışmanlık dili, hijyen, takip süreci ve soru sorma özgürlüğü de kararın bir parçasıdır. İyi kurum, sizi acele ettirmez; anlamlandırır.",
        ],
      },
    ],
  },
  {
    slug: "isparta-erkek-lazer-epilasyon-rehberi",
    title: "Isparta Erkek Lazer Epilasyon Rehberi: Bölgeler ve Seans Süreci",
    description:
      "Erkek lazer epilasyonda sırt, göğüs, ense ve yüz bölgeleri; kıl yapısı, seans aralığı ve uygulama öncesi hazırlık.",
    date: "2026-06-21",
    readTime: "6 dk",
    image: "/images/service-images/laser-hair-removal.webp",
    sections: [
      {
        heading: "Erkek kıl yapısı neden ayrı planlanır?",
        paragraphs: [
          "Erkeklerde kıl kalınlığı, yoğunluk ve büyüme döngüsü uygulama bölgesine göre belirgin biçimde değişebilir. Sırt ve göğüs gibi geniş bölgelerle ense veya yüz gibi daha hassas bölgeler aynı ayar ve zaman planıyla ele alınmamalıdır.",
          "İlk görüşmede kıl kökü, cilt tonu, geçmiş uygulamalar ve kullanılan ürünler değerlendirilir.",
        ],
      },
      {
        heading: "Sık tercih edilen bölgeler",
        paragraphs: ["Erkek lazer epilasyonda bölgesel ya da kombine plan yapılabilir."],
        bullets: ["Sırt ve omuz", "Göğüs ve karın", "Ense ve boyun", "Sakal üstü ve yanak", "Kol, el ve parmak", "Bacak"],
      },
      {
        heading: "Seans öncesi ve sonrası",
        paragraphs: [
          "Kökten alma yöntemleri uygulama planını etkileyebileceği için hazırlık talimatlarına uyulmalıdır. Güneşlenme, tahriş, ilaç ve kozmetik ürün kullanımı hakkında uygulayıcıya bilgi verin.",
          "Merkezimizde erkek danışanlar için mahremiyet, hijyen ve randevu düzeni gözetilerek kişisel plan oluşturulur.",
        ],
      },
      {
        heading: "Erkek danışanların sık sorusu",
        paragraphs: [
          "Kaç seansta biter? Bölgeye göre değişir. Ne kadar acır? Cilt hassasiyetine ve kullanılan başlığa göre değişir. İşte tam da bu yüzden kişiye özel plan en doğrusu olur.",
        ],
      },
    ],
  },
  {
    slug: "kil-koku-analizi-neden-onemli",
    title: "Kıl Kökü Analizi Neden Önemli? Doğru Lazer Planının İlk Adımı",
    description:
      "Kıl kalınlığı, yoğunluk, cilt tonu ve hassasiyet değerlendirmesinin cihaz ve seans planına etkisi.",
    date: "2026-06-21",
    readTime: "5 dk",
    image: "/images/service-images/laser-hair-removal.webp",
    sections: [
      {
        heading: "Analiz neyi değerlendirir?",
        paragraphs: [
          "Kıl kökü analizi yalnızca tüyün koyu veya açık görünmesine bakmak değildir. Kılın kalınlığı, yoğunluğu, büyüme evresi, uygulama bölgesi, cilt tonu ve hassasiyet birlikte ele alınır.",
          "Bu bilgiler cihaz türü, başlangıç ayarı, seans aralığı ve bölgesel plan için yol gösterir.",
        ],
      },
      {
        heading: "Her bölge aynı değildir",
        paragraphs: [
          "Yüz, koltuk altı, bacak, sırt ve göğüs bölgelerindeki kıl yapısı farklı olabilir. Bu nedenle tüm vücuda tek tip yaklaşım yerine bölge bazlı değerlendirme daha kontrollü bir süreç sağlar.",
        ],
        bullets: [
          "Kılın kalınlığı ve rengi",
          "Cilt tonu ve hassasiyet",
          "Güneşlenme durumu",
          "Geçmiş epilasyon yöntemleri",
          "Hormonal veya dermatolojik öykü",
        ],
      },
      {
        heading: "Ücretsiz analiz randevusu",
        paragraphs: [
          "Esin Orhan Güzellik Merkezi'nde kıl kökü ve cilt analizi ücretsizdir. Görüşme sırasında hangi sistemin neden önerildiğini, seans planını ve dikkat edilmesi gerekenleri sorabilirsiniz.",
        ],
      },
      {
        heading: "İyi analiz nasıl anlaşılır?",
        paragraphs: [
          "Size doğrudan fiyat değil, neden o fiyat ve neden o cihaz söylendiğini açıklıyorsa analiz doğru ilerliyordur. İyi analiz, yalnızca bilgi toplamaz; kararın gerekçesini görünür kılar.",
        ],
      },
    ],
  },
  {
    slug: "lazer-epilasyon-sonrasi-bakim-rehberi",
    title: "Lazer Epilasyon Sonrası Bakım: İlk 48 Saatte Neye Dikkat Etmeli?",
    description:
      "Lazer epilasyon sonrası kızarıklık, güneş, duş, spor ve bakım ürünleri konusunda dikkat edilmesi gerekenler.",
    date: "2026-06-21",
    readTime: "7 dk",
    image: "/images/service-images/laser-hair-removal.webp",
    sections: [
      {
        heading: "İlk 48 saat neden önemlidir?",
        paragraphs: [
          "Lazer sonrası cilt kısa süreli hassasiyet gösterebilir. Bu dönemde amaç işlemin etkisini bozmadan cildi sakin tutmaktır. Aşırı sıcak, sürtünme, yoğun terleme ve agresif ürünler cildi gereksiz yere yorabilir.",
          "İlk iki gün, sonucu belirleyen tek şey olmasa da rahat iyileşme için en kritik dönemlerden biridir. Özellikle hassas ciltlerde küçük detaylar büyük fark yaratır.",
        ],
      },
      {
        heading: "Neler yapılmamalı?",
        paragraphs: ["Aşağıdaki hatalar sık yapılır ve çoğu zaman gereksiz hassasiyet oluşturur."],
        bullets: [
          "Sıcak duş ve sauna",
          "Peeling ve sert kese",
          "Aşırı güneşlenme",
          "Yoğun spor ve terleme",
          "Parfümlü veya asitli ürünler",
          "Cildi kaşıma veya ovalama",
        ],
      },
      {
        heading: "Neler yapılabilir?",
        paragraphs: [
          "Ilık su, hafif ürünler ve bölgeyi rahat bırakmak çoğu zaman yeterlidir. Merkezden verilen bakım tavsiyeleri varsa bunlara uymak en güvenli yoldur.",
          "Eğer bölgesel kızarıklık beklenenden uzun sürerse, mutlaka uygulamayı yapan merkezle iletişime geçin ve cilt tepkisini paylaşın.",
        ],
      },
      {
        heading: "Sonraki seanslar için ne öğrenmelisiniz?",
        paragraphs: [
          "Bir önceki seansta cildin nasıl tepki verdiği, sonraki ayarı ve seans aralığını etkileyebilir. Bu yüzden her seanstan sonra kısa bir not almak iyi olur: hassasiyet, kızarıklık süresi, tıraş zamanı ve kullanılan ürünler.",
        ],
      },
      {
        heading: "İlgili sayfalar",
        paragraphs: [
          "Lazer sürecini daha iyi anlamak için Isparta lazer epilasyon, buz lazer Isparta ve kıl kökü analizi sayfalarına da göz atabilirsiniz.",
        ],
      },
    ],
  },
  {
    slug: "cilt-bakimi-sonrasi-ne-yapilmali",
    title: "Cilt Bakımı Sonrası Ne Yapılmalı? Hassas Ciltler İçin Uygulama Sonrası Rehber",
    description:
      "Cilt bakımı sonrası kızarıklık, nem dengesi, ürün seçimi ve ev rutini için pratik öneriler.",
    date: "2026-06-21",
    readTime: "7 dk",
    image: "/images/service-images/facial.webp",
    sections: [
      {
        heading: "Bakım sonrası cilt ne ister?",
        paragraphs: [
          "Cilt bakımı sonrası amaç cildi fazla uyarmadan dengeyi korumaktır. Özellikle hassas ve leke eğilimli ciltlerde yeni ürün denemeleri yerine sakin ve düzenli bir rutin daha iyi sonuç verir.",
          "İşlem sonrası ilk birkaç saat cildin hafif sıcak veya canlı görünmesi normal olabilir. Burada önemli olan, cildi rahat bırakmak ve doğru ürünleri seçmektir.",
        ],
      },
      {
        heading: "İlk gün önerileri",
        paragraphs: ["Aşağıdaki küçük adımlar çoğu danışan için güvenli bir çerçeve sunar."],
        bullets: [
          "Yoğun makyajdan kaçın",
          "Parfümlü ürün kullanma",
          "Ilık suyla nazik temizlik yap",
          "Güneşten koru",
          "Bol su tüket",
          "Cildi kurcalama",
        ],
      },
      {
        heading: "Ev rutini nasıl sade tutulmalı?",
        paragraphs: [
          "Bakım sonrası dönemde ürün sayısını artırmak yerine azaltmak çoğu zaman daha iyi çalışır. Temizleyici, uygun nemlendirici ve gerekiyorsa güneş koruyucu ile kısa bir rutin oluşturun.",
          "Yeni asitler, retinoidler veya sert peeling ürünleri doğrudan devreye sokulmamalıdır; cildin ne istediği takip edilmelidir.",
        ],
      },
      {
        heading: "Bakım ile hangi hizmetler birlikte düşünülür?",
        paragraphs: [
          "Cilt bakımı çoğu zaman dermapen, ücretsiz cilt analizi ve bazen kalıcı makyaj öncesi değerlendirme ile birlikte planlanır. Aynı cilt bir sonraki aşamada daha farklı bir desteğe ihtiyaç duyabilir.",
        ],
      },
      {
        heading: "İlgili rehberler",
        paragraphs: [
          "Medikal cilt bakımı, ücretsiz cilt analizi ve dermapen sayfaları bakım sonrası bakım planını anlamak için iyi bir devam noktasıdır.",
        ],
      },
    ],
  },
  {
    slug: "lazer-epilasyon-kac-seansta-etki-eder",
    title: "Lazer Epilasyon Kaç Seansta Etki Eder? Gerçekçi Beklenti Rehberi",
    description:
      "Seans sayısını etkileyen faktörler, erkek ve kadın bölgeler arasındaki farklar ve gerçekçi sonuç okuma rehberi.",
    date: "2026-06-21",
    readTime: "8 dk",
    image: "/images/service-images/laser-hair-removal.webp",
    sections: [
      {
        heading: "Tek sayı vermek neden doğru değil?",
        paragraphs: [
          "Lazer epilasyonda seans sayısı; kıl yapısı, hormon dengesi, cilt tonu, bölge ve kullanılan teknolojiye göre değişir. Bu yüzden internette gördüğünüz sabit sayıların hepsi herkese uymaz.",
          "Bazı kişilerde ilk seanstan itibaren dökülme fark edilirken, bazı bölgelerde gözle görülür değişim daha yavaş gelir. Önemli olan doğru plan ve istikrardır.",
        ],
      },
      {
        heading: "Seansı etkileyen ana faktörler",
        paragraphs: ["Gerçek sonuç için şu değişkenlere birlikte bakılır."],
        bullets: [
          "Kılın kalınlığı ve rengi",
          "Uygulama bölgesinin yoğunluğu",
          "Cilt tonu ve hassasiyet",
          "Düzenli seans takibi",
          "Güneş ve bakım alışkanlıkları",
          "Erkek/kadın kıl farkı",
        ],
      },
      {
        heading: "İlk değişim ne zaman görünür?",
        paragraphs: [
          "Çoğu danışan ilk birkaç seanstan sonra daha düzenli bir dökülme ve yavaşlama fark eder. Ancak kalıcı ve istikrarlı ilerleme için tek bir seansta sonuç beklemek doğru değildir.",
        ],
      },
      {
        heading: "Yanlış beklenti neye yol açar?",
        paragraphs: [
          "Hızlı mucize beklentisi, iyi bir planı bozabilir. Cildin ihtiyacına göre ilerlemek hem daha güvenli hem de daha sürdürülebilir sonuç verir.",
        ],
      },
      {
        heading: "İlgili sayfalar",
        paragraphs: [
          "Buz lazer Isparta, erkek lazer epilasyon ve kıl kökü analizi sayfaları bu konunun devamı niteliğindedir.",
        ],
      },
    ],
  },
];

export const getBlogPost = (slug: string) => blogPosts.find((post) => post.slug === slug);
