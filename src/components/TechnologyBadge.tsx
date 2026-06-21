import { cn } from "@/lib/utils";

export default function TechnologyBadge({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "group z-40 inline-flex max-w-[430px] items-center gap-3.5 overflow-hidden rounded-lg border border-white/[0.16] bg-[linear-gradient(115deg,rgba(255,255,255,0.13),rgba(255,255,255,0.045)_52%,rgba(216,185,104,0.09))] px-3 py-3 text-left text-xs text-white shadow-[0_18px_60px_rgba(0,0,0,0.38),inset_0_1px_0_rgba(255,255,255,0.18)] backdrop-blur-2xl sm:px-4 sm:text-sm",
        className
      )}
    >
      <span className="pointer-events-none absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-white/55 to-transparent" />
      <span
        className="relative flex shrink-0 items-center -space-x-1.5 rounded-lg border border-white/[0.14] bg-white/[0.075] p-2 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),0_8px_24px_rgba(0,0,0,0.24)] backdrop-blur-2xl"
        aria-hidden="true"
      >
        <span className="h-7 w-9 rounded-md border border-white/20 bg-[linear-gradient(to_bottom,#111_0_33%,#dd2222_33%_66%,#e3b72e_66%_100%)] shadow-[0_4px_12px_rgba(0,0,0,0.3)]" />
        <span className="grid h-7 w-7 place-items-center rounded-md border border-white/25 bg-[#d9232e] text-base font-black text-white shadow-[0_4px_12px_rgba(0,0,0,0.3)]">
          ✚
        </span>
      </span>
      <span className="relative leading-5 text-white/72">
        Merkezimiz <strong className="font-bold text-white">Alman &amp; İsviçre</strong>
        <span className="block font-semibold text-[var(--accent)]">teknolojisiyle desteklenmektedir</span>
      </span>
    </div>
  );
}
