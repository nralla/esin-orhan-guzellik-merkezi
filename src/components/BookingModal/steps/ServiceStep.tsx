"use client";

import React, { useEffect } from "react";
import { Service } from "@/lib/data";
import useIsRTL from "@/hooks/useIsRTL";
import { useTranslation } from "@/context/app-context";
import { CheckCircle2, Clock3, Sparkles } from "lucide-react";

interface ServiceStepProps {
  services: Service[];
  selectedServiceId?: string;
  onSelectService: (id: string) => void;
  onNext: () => void;
  formatPrice: (service: Service) => string;
  isMobile?: boolean;
}

const ServiceStep: React.FC<ServiceStepProps> = ({
  services,
  selectedServiceId,
  onSelectService,
  formatPrice,
  isMobile,
}) => {
  const isRTL = useIsRTL();
  const t = useTranslation();

  useEffect(() => {
    if (!selectedServiceId && services.length > 0) {
      onSelectService(services[0].id);
    }
  }, [services, selectedServiceId, onSelectService]);

  const baseFontSize = isMobile ? 19 : 20;
  const title = t("service_tab_title") || "Hizmet Seçin";

  return (
    <div
      className="flex h-full flex-col p-6"
      dir={isRTL ? "rtl" : "ltr"}
      style={{
        color: "var(--foreground)",
        backgroundColor: "var(--background)",
      }}
    >
      <div className="text-center pb-4">
        <h2
          className="leading-tight whitespace-pre-line font-semibold"
          style={{ color: "var(--foreground)", fontSize: baseFontSize }}
        >
          {title}
        </h2>
        <p className="mx-auto mt-3 max-w-[260px] text-sm leading-6 text-white/55">
          Uygun hizmeti seçin, kalan adımları birlikte netleştirelim.
        </p>
      </div>

      <div className="flex-1 overflow-y-auto pr-1">
        <div className="space-y-3">
          {services.map((service) => {
            const selected = selectedServiceId === service.id;
            return (
              <button
                key={service.id}
                type="button"
                onClick={() => onSelectService(service.id)}
                className="w-full rounded-[8px] border p-4 text-left transition-colors"
                style={{
                  borderColor: selected ? "var(--accent)" : "var(--button-border-color)",
                  backgroundColor: selected ? "rgba(217,189,115,0.08)" : "var(--language-selector-list-bg)",
                }}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <Sparkles className="h-4 w-4 text-[#d9bd73]" />
                      <h3 className="text-[16px] font-semibold leading-6 text-white">
                        {service.name}
                      </h3>
                    </div>
                    <p className="mt-2 text-sm leading-6 text-white/60">
                      {service.description}
                    </p>
                  </div>
                  <span
                    className="inline-flex shrink-0 items-center gap-1 rounded-full border px-3 py-1 text-xs font-semibold"
                    style={{
                      borderColor: selected ? "var(--accent)" : "var(--button-border-color)",
                      color: selected ? "var(--foreground)" : "white",
                      backgroundColor: selected ? "var(--accent)" : "transparent",
                    }}
                  >
                    {selected ? <CheckCircle2 className="h-3.5 w-3.5" /> : null}
                    {selected ? "Seçildi" : "Seç"}
                  </span>
                </div>

                <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-white/55">
                  <span className="inline-flex items-center gap-1 rounded-full border border-white/10 px-3 py-1">
                    <Clock3 className="h-3.5 w-3.5" />
                    {service.duration} dk
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full border border-[#d9bd73]/20 px-3 py-1 text-[#d9bd73]">
                    {formatPrice(service)}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ServiceStep;
