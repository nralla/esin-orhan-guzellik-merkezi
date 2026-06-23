"use client";

import React from "react";
import FloatingLabelInput from "@/components/FloatingLabelInput";
import { useTranslation } from "@/context/app-context";
import { MapPin, MessageCircle, Phone, UserRound } from "lucide-react";

export interface ContactDetails {
  phone: string;
  fullName: string;
  note: string;
  district: string;
}

const PaymentStep: React.FC<{
  isMobile?: boolean;
  isRTL?: boolean;
  value: ContactDetails;
  onChange: (value: ContactDetails) => void;
}> = ({ isMobile, isRTL, value, onChange }) => {
  const t = useTranslation();

  const handlePhoneChange = (phoneInput: string) => {
    const cleaned = phoneInput.replace(/[^\d+ ]/g, "").slice(0, 17);
    onChange({ ...value, phone: cleaned });
  };

  const inputFontSize = isMobile ? "0.9rem" : "1rem";
  const labelFontSize = isMobile ? "0.9rem" : "1rem";
  const labelActiveFontSize = "12px";
  const inputHeight = isMobile ? "47px" : "49px";
  const inputPadding = isMobile ? "11px 13px" : "12px 15px";

  return (
    <div
      className="flex h-full flex-col p-6"
      style={{
        color: "var(--foreground)",
        backgroundColor: "var(--background)",
      }}
    >
      <div className="text-center pb-5">
        <h2
          className="font-semibold"
          style={{
            fontSize: isMobile ? 19 : 20,
            color: "var(--foreground)",
            marginBottom: 0,
          }}
        >
          {t("payment_tab_title") || "İletişim Bilgileri"}
        </h2>
        <p className="mx-auto mt-3 max-w-[260px] text-sm leading-6 text-white/55">
          Randevu teyidi için size ulaşabileceğimiz bilgileri bırakın.
        </p>
      </div>

      <div className="space-y-4">
        <FloatingLabelInput
          label={t("card_number") || "Telefon Numaranız"}
          value={value.phone}
          onValueChange={handlePhoneChange}
          type="text"
          autoComplete="tel"
          required
          inputFontSize={inputFontSize}
          labelFontSize={labelFontSize}
          labelActiveFontSize={labelActiveFontSize}
          inputHeight={inputHeight}
          inputPadding={inputPadding}
          parentBackground="var(--background)"
          accentColor="var(--middle-foreground)"
          inputOutlineColor="var(--inactive-floating-label-input-outline-color)"
          inputFocusOutlineColor="var(--accent)"
          mutedForegroundColor="var(--floating-label-input-muted-foreground)"
          isRTL={isRTL}
        />

        <FloatingLabelInput
          label={t("cardholder_name") || "Ad Soyad"}
          value={value.fullName}
          onValueChange={(fullName) => onChange({ ...value, fullName })}
          type="text"
          autoComplete="name"
          required
          inputFontSize={inputFontSize}
          labelFontSize={labelFontSize}
          labelActiveFontSize={labelActiveFontSize}
          inputHeight={inputHeight}
          inputPadding={inputPadding}
          parentBackground="var(--background)"
          accentColor="var(--middle-foreground)"
          inputOutlineColor="var(--inactive-floating-label-input-outline-color)"
          inputFocusOutlineColor="var(--accent)"
          mutedForegroundColor="var(--floating-label-input-muted-foreground)"
          isRTL={isRTL}
        />

        <div className="grid gap-4 sm:grid-cols-2">
          <FloatingLabelInput
            label={t("valid_thru") || "Tercih Notu"}
            value={value.note}
            onValueChange={(note) => onChange({ ...value, note })}
            type="text"
            autoComplete="off"
            required
            inputFontSize={inputFontSize}
            labelFontSize={labelFontSize}
            labelActiveFontSize={labelActiveFontSize}
            inputHeight={inputHeight}
            inputPadding={inputPadding}
            parentBackground="var(--background)"
            accentColor="var(--middle-foreground)"
            inputOutlineColor="var(--inactive-floating-label-input-outline-color)"
            inputFocusOutlineColor="var(--accent)"
            mutedForegroundColor="var(--floating-label-input-muted-foreground)"
            isRTL={isRTL}
          />

          <FloatingLabelInput
            label={t("cvc") || "İlçe"}
            value={value.district}
            onValueChange={(district) => onChange({ ...value, district })}
            type="text"
            autoComplete="off"
            required
            inputFontSize={inputFontSize}
            labelFontSize={labelFontSize}
            labelActiveFontSize={labelActiveFontSize}
            inputHeight={inputHeight}
            inputPadding={inputPadding}
            parentBackground="var(--background)"
            accentColor="var(--middle-foreground)"
            inputOutlineColor="var(--inactive-floating-label-input-outline-color)"
            inputFocusOutlineColor="var(--accent)"
            mutedForegroundColor="var(--floating-label-input-muted-foreground)"
            isRTL={isRTL}
          />
        </div>
      </div>

      <div className="mt-5 rounded-[8px] border border-white/10 bg-white/[0.03] p-4 text-sm leading-6 text-white/60">
        <div className="flex flex-wrap items-center gap-3 text-white">
          <span className="inline-flex items-center gap-2">
            <Phone className="h-4 w-4 text-[#d9bd73]" />
            Telefon
          </span>
          <span className="inline-flex items-center gap-2">
            <UserRound className="h-4 w-4 text-[#d9bd73]" />
            Ad Soyad
          </span>
          <span className="inline-flex items-center gap-2">
            <MessageCircle className="h-4 w-4 text-[#d9bd73]" />
            Not
          </span>
          <span className="inline-flex items-center gap-2">
            <MapPin className="h-4 w-4 text-[#d9bd73]" />
            İlçe / Semt
          </span>
        </div>
      </div>
    </div>
  );
};

export default PaymentStep;
