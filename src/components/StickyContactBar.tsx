import Link from "next/link";
import { Home, MessageCircleMore } from "lucide-react";

const whatsappHref = "https://wa.me/905011133232?text=Merhaba%2C%20randevu%20almak%20istiyorum.";

export default function StickyContactBar() {
  return (
    <>
      <Link
        href="/"
        aria-label="Ana sayfaya dön"
        className="fixed bottom-5 left-4 z-[1000] flex h-12 w-12 items-center justify-center rounded-full border border-[#d9bd73]/55 bg-[#07100d]/88 text-[#d9bd73] shadow-[0_18px_50px_rgba(0,0,0,0.34)] backdrop-blur-xl transition-transform hover:scale-105 hover:border-[#d9bd73] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#d9bd73] focus:ring-offset-2 focus:ring-offset-[#07100d] sm:bottom-6 sm:left-6 sm:h-14 sm:w-14"
      >
        <Home className="h-5 w-5 sm:h-6 sm:w-6" />
      </Link>

      <a
        href={whatsappHref}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp üzerinden randevu al"
        className="fixed bottom-5 right-4 z-[1000] flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-[#25d366] text-white shadow-[0_18px_50px_rgba(0,0,0,0.38)] transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#d9bd73] focus:ring-offset-2 focus:ring-offset-[#07100d] sm:bottom-6 sm:right-6 sm:h-16 sm:w-16"
      >
        <MessageCircleMore className="h-7 w-7 sm:h-8 sm:w-8" />
      </a>
    </>
  );
}
