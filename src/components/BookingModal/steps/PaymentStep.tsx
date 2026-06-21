"use client";

import React from "react";
import FloatingLabelInput from "@/components/FloatingLabelInput";
import { useTranslation } from "@/context/app-context";

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
}> = ({
  isMobile,
  isRTL,
  value,
  onChange,
}) => {
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
  const containerGap = "2px";

  return (
    <div
      className="flex flex-col p-6"
      style={{
        color: "var(--foreground)",
        backgroundColor: "var(--background)",
        gap: containerGap,
      }}
    >
      <h2
        className="text-center font-semibold pb-[22px]"
        style={{
          fontSize: isMobile ? 19 : 20,
          color: "var(--foreground)",
          marginBottom: 0,
        }}
      >
        {t("payment_tab_title") || "Payment Details"}
      </h2>

      <FloatingLabelInput
        label={t("card_number") || "Card Number"}
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
        parentBackground = "var(--background)"
        accentColor="var(--middle-foreground)"
        inputOutlineColor = "var(--inactive-floating-label-input-outline-color)"
        inputFocusOutlineColor = "var(--accent)"
        mutedForegroundColor = "var(--floating-label-input-muted-foreground)"
        isRTL={isRTL}
      />

      <FloatingLabelInput
        label={t("cardholder_name") || "Cardholder Name"}
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
        parentBackground = "var(--background)"
        accentColor="var(--middle-foreground)"
        inputOutlineColor = "var(--inactive-floating-label-input-outline-color)"
        inputFocusOutlineColor = "var(--accent)"
        mutedForegroundColor = "var(--floating-label-input-muted-foreground)"
        isRTL={isRTL}
      />

      <div className="flex gap-6">
        <div className="flex-1">
          <FloatingLabelInput
            label={t("valid_thru") || "Valid Thru"}
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
            parentBackground = "var(--background)"
            accentColor="var(--middle-foreground)"
            inputOutlineColor = "var(--inactive-floating-label-input-outline-color)"
            inputFocusOutlineColor = "var(--accent)"
            mutedForegroundColor = "var(--floating-label-input-muted-foreground)"
            isRTL={isRTL}
          />
        </div>
        <div className="flex-1">
          <FloatingLabelInput
            label={t("cvc") || "CVC"}
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
            parentBackground = "var(--background)"
            accentColor="var(--middle-foreground)"
            inputOutlineColor = "var(--inactive-floating-label-input-outline-color)"
            inputFocusOutlineColor = "var(--accent)"
            mutedForegroundColor = "var(--floating-label-input-muted-foreground)"
            isRTL={isRTL}
          />
        </div>
      </div>
    </div>
  );
};

export default PaymentStep;
