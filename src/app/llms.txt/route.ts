const content = `# Esin Orhan Güzellik Merkezi

Site: https://ispartaguzellikmerkezi.com
Sitemap: https://ispartaguzellikmerkezi.com/sitemap.xml
Robots: https://ispartaguzellikmerkezi.com/robots.txt

## About
Isparta Çünür'de lazer epilasyon, cilt bakımı, dermapen, kalıcı makyaj, microblading, protez tırnak, bölgesel incelme ve ücretsiz kıl kökü analizi sunan güzellik merkezi.

## Important pages
- https://ispartaguzellikmerkezi.com/
- https://ispartaguzellikmerkezi.com/hizmetler
- https://ispartaguzellikmerkezi.com/blog
- https://ispartaguzellikmerkezi.com/hizmetler/lazer-epilasyon
- https://ispartaguzellikmerkezi.com/hizmetler/erkek-lazer-epilasyon
- https://ispartaguzellikmerkezi.com/hizmetler/buz-lazer-isparta
- https://ispartaguzellikmerkezi.com/hizmetler/kil-koku-analizi
- https://ispartaguzellikmerkezi.com/hizmetler/ucretsiz-cilt-analizi
- https://ispartaguzellikmerkezi.com/hizmetler/cilt-bakimi
- https://ispartaguzellikmerkezi.com/hizmetler/bolgesel-incelme
- https://ispartaguzellikmerkezi.com/hizmetler/ems
- https://ispartaguzellikmerkezi.com/blog/ispartada-lazer-epilasyon-merkezi-nasil-secilir
- https://ispartaguzellikmerkezi.com/blog/buz-lazer-isparta-rehberi
- https://ispartaguzellikmerkezi.com/blog/isparta-lazer-epilasyon-fiyatlari-2026
- https://ispartaguzellikmerkezi.com/blog/isparta-lazer-epilasyon-yorumlari-nasil-okunmali
- https://ispartaguzellikmerkezi.com/blog/hastane-mi-guzellik-merkezi-mi-lazer-epilasyon
- https://ispartaguzellikmerkezi.com/blog/isparta-erkek-lazer-epilasyon-rehberi
- https://www.youtube.com/@esinorhang%C3%BCzellik/videos

## Notes
The site is crawlable, server-rendered, and built for Turkish local SEO.
`;

export function GET() {
  return new Response(content, {
    headers: {
      "content-type": "text/plain; charset=utf-8",
      "cache-control": "public, max-age=3600",
    },
  });
}
