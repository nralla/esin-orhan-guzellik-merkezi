"use client";
import React, { useState, useEffect, useMemo, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, X } from "lucide-react";
import { useApp } from "@/context/app-context";
import { getLocalizedData, Service, Master } from "@/lib/data";
import useIsRTL from "@/hooks/useIsRTL";
import { useIsBookingModalMobileVersion } from "@/hooks/useIsBookingModalMobileVersion";
import ServiceStep from "./steps/ServiceStep";
import DateTimeStep from "./steps/DateTimeStep";
import ConfirmStep from "./steps/ConfirmStep";
import { ModalOverlay } from "@/components/modal-overlay";
import { getDictionary } from "@/lib/translations";
import TimeStep from "./steps/TimeStep";
import PaymentStep, { ContactDetails } from "./steps/PaymentStep";
import ChronicleButton from "@/components/RefinedChronicleButton";

type ModalMode = "default" | "master-specific" | "service-specific";
type Step =
  | "service"
  | "date"
  | "time"
  | "confirm"
  | "contact";

const stepOrderDefault: Step[] = [
  "service",
  "date",
  "time",
  "confirm",
  "contact",
];
const stepOrderMasterSpecific: Step[] = [
  "service",
  "date",
  "time",
  "confirm",
  "contact",
];
const stepOrderServiceSpecific: Step[] = [
  "date",
  "time",
  "confirm",
  "contact",
];

const EMPTY_CONTACT: ContactDetails = { phone: "", fullName: "", note: "", district: "" };

export default function BookingModal({
  isOpen,
  onClose,
  onConfirm,
  lockedMasterId,
  preselectedServiceId,
}: {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (data: any) => void;
  lockedMasterId?: string;
  preselectedServiceId?: string;
}) {
  const { lang } = useApp();
  const isMobileVersion = useIsBookingModalMobileVersion();
  const isRTL = useIsRTL();
  const [services, setServices] = useState<Service[]>([]);
  const [masters, setMasters] = useState<Master[]>([]);
  const [currencySymbol, setCurrencySymbol] = useState("$");
  const [translations, setTranslations] = useState<any>({});
  const [selectedServiceId, setSelectedServiceId] = useState<string | undefined>(
    preselectedServiceId
  );
  const [selectedMasterId, setSelectedMasterId] = useState<string | undefined>(
    lockedMasterId
  );
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const [selectedTime, setSelectedTime] = useState<string | undefined>();
  const [isAnimating, setIsAnimating] = useState(false);
  const [scrollbarEnabled, setScrollbarEnabled] = useState(true);
  const [dailySchedule, setDailySchedule] = useState<boolean[]>([]);
  const [generatedSlots, setGeneratedSlots] = useState<string[]>([]);
  const [isPaymentLoading, setIsPaymentLoading] = useState(false);
  const [contactDetails, setContactDetails] = useState<ContactDetails>(EMPTY_CONTACT);

  useEffect(() => {
    getLocalizedData(lang).then(({ services, masters, currencySymbol }) => {
      setServices(services);
      setMasters(masters);
      setCurrencySymbol(currencySymbol);
    });
    getDictionary(lang).then(setTranslations);
  }, [lang]);

  const modalMode: ModalMode = useMemo(() => {
    if (lockedMasterId) return "master-specific";
    if (preselectedServiceId) return "service-specific";
    return "default";
  }, [lockedMasterId, preselectedServiceId]);

  const currentStepOrder = useMemo(() => {
    switch (modalMode) {
      case "master-specific":
        return stepOrderMasterSpecific;
      case "service-specific":
        return stepOrderServiceSpecific;
      default:
        return stepOrderDefault;
    }
  }, [modalMode]);

  const [currentStep, setCurrentStep] = useState<Step>(currentStepOrder[0]);
  const [animationDirection, setAnimationDirection] = useState(1);

  const filteredServices = useMemo(() => {
    if (modalMode === "master-specific" && lockedMasterId) {
      const master = masters.find((m) => m.id === lockedMasterId);
      if (master) return services.filter((s) => master.services.includes(s.id));
    }
    return services;
  }, [modalMode, lockedMasterId, services, masters]);

  const resetState = useCallback(() => {
    setCurrentStep(currentStepOrder[0]);
    setSelectedDate(undefined);
    setSelectedTime(undefined);
    setDailySchedule([]);
    setGeneratedSlots([]);
    setIsPaymentLoading(false);
    setContactDetails(EMPTY_CONTACT);
    setSelectedServiceId(preselectedServiceId ?? filteredServices[0]?.id ?? services[0]?.id);
  }, [
    currentStepOrder,
    preselectedServiceId,
    filteredServices,
    services,
  ]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      resetState();
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen, resetState]);

  const selectedService = useMemo(
    () => services.find((s) => s.id === selectedServiceId),
    [services, selectedServiceId]
  );
  const selectedMaster = useMemo(
    () =>
      masters.find((m) => m.id === selectedMasterId) ||
      (selectedServiceId
        ? masters.find((m) => m.services.includes(selectedServiceId))
        : masters[0]),
    [masters, selectedMasterId, selectedServiceId]
  );

  useEffect(() => {
    if (!masters.length || !selectedServiceId) return;
    if (lockedMasterId) {
      setSelectedMasterId(lockedMasterId);
      return;
    }
    const matchingMaster = masters.find((master) =>
      master.services.includes(selectedServiceId)
    );
    setSelectedMasterId(matchingMaster?.id ?? masters[0]?.id);
  }, [masters, selectedServiceId, lockedMasterId]);

  const handleNext = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setAnimationDirection(1);
    setScrollbarEnabled(false);
    const currentIndex = currentStepOrder.indexOf(currentStep);
    if (currentIndex < currentStepOrder.length - 1) {
      setCurrentStep(currentStepOrder[currentIndex + 1]);
    }
  }, [currentStep, currentStepOrder, isAnimating]);

  const handleBack = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setAnimationDirection(-1);
    setScrollbarEnabled(false);
    const currentIndex = currentStepOrder.indexOf(currentStep);
    if (currentIndex > 0) setCurrentStep(currentStepOrder[currentIndex - 1]);
  }, [currentStep, currentStepOrder, isAnimating]);

  const handleBookingConfirmed = useCallback(() => {
    const phoneDigits = contactDetails.phone.replace(/\D/g, "");
    if (
      !selectedService ||
      !selectedMaster ||
      !selectedDate ||
      !selectedTime ||
      contactDetails.fullName.trim().length < 2 ||
      phoneDigits.length < 10
    ) {
      return;
    }
    setIsPaymentLoading(true);
    onConfirm({
      service: selectedService,
      master: selectedMaster,
      date: selectedDate,
      time: selectedTime,
      contact: contactDetails,
    });
    setIsPaymentLoading(false);
  }, [
    selectedService,
    selectedMaster,
    selectedDate,
    selectedTime,
    contactDetails,
    onConfirm,
  ]);

  const formatPrice = useCallback(
    (service: Service) => {
      if (!service) return "";
      const priceKey = `price-${lang}` as keyof Service;
      const price = service[priceKey] || service["price-en"];
      if (!price) return "Ücretsiz analiz";
      if (lang === "it") {
        return `${price} ${currencySymbol}`;
      }
      return `${currencySymbol}${price}`;
    },
    [lang, currencySymbol]
  );

  const showBackButton = currentStep !== currentStepOrder[0];
  const showCloseButton = currentStep;

  const modalTitle = useMemo(() => {
    return (
      <span className="text-lg font-semibold">
        {translations.modal_title || "Randevu Oluştur"}
      </span>
    );
  }, [translations]);

  const variants = {
    enter: (direction: number) => ({
      opacity: 0,
      y: direction > 0 ? 10 : -10,
    }),
    center: { opacity: 1, y: 0 },
    exit: (direction: number) => ({
      opacity: 0,
      y: direction < 0 ? 10 : -10,
    }),
  };

  const onAnimationStart = () => {
    setIsAnimating(true);
    setScrollbarEnabled(false);
  };

  const onAnimationComplete = () => {
    setIsAnimating(false);
    setScrollbarEnabled(true);
  };

  const baseBorderRadius = 12;
  const locale = lang === "he" ? "he-IL" : lang === "it" ? "it-IT" : "en-US";
  const textDirection = isRTL ? "rtl" : "ltr";

  // Loader spinner SVG component sized slightly smaller than line height
  const Loader = () => (
    <svg
      className="animate-spin"
      style={{ width: 16, height: 16, verticalAlign: "middle" }}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
      ></circle>
      <path
        className="opacity-75"
        d="M4 12a8 8 0 018-8"
        stroke="currentColor"
      ></path>
    </svg>
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <ModalOverlay onClose={onClose}>
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: isMobileVersion ? 100 : 0 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: isMobileVersion ? 100 : 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="fixed inset-0 flex items-center justify-center z-50"
            style={{ overflow: "visible" }}
            onClick={onClose}
          >
            <motion.div
              layout
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="bg-[var(--background)] flex flex-col relative border text-gray-200"
              style={{
                width: isMobileVersion ? 336 : 376,
                maxHeight: "86vh",
                borderColor: "var(--button-border-color)",
                borderRadius: baseBorderRadius,
                overflow: "hidden",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div
                className={`flex items-center justify-between px-4 border-b border-[var(--button-border-color)]`}
                style={{
                  minHeight: modalMode === "master-specific" ? 78 : 72,
                  borderTopLeftRadius: baseBorderRadius,
                  borderTopRightRadius: baseBorderRadius,
                }}
              >
                {showBackButton ? (
                  <button
                    onClick={handleBack}
                    className="p-2 text-gray-400 hover:text-white transition-colors"
                    aria-label="Önceki adıma dön"
                  >
                    <ArrowLeft
                      size={20}
                      style={{ transform: isRTL ? "rotate(180deg)" : "none" }}
                    />
                  </button>
                ) : (
                  <div className="w-9 h-9" />
                )}
                <div className="">{modalTitle}</div>
                {showCloseButton && (
                  <button
                    onClick={onClose}
                    className="p-2 text-gray-400 hover:text-white transition-colors"
                    aria-label="Randevu penceresini kapat"
                  >
                    <X size={20} />
                  </button>
                )}
              </div>
              {/* Scrollable content */}
              <div
                className={`flex-grow flex flex-col relative ${
                  scrollbarEnabled ? "overflow-y-auto" : "overflow-hidden"
                }`}
                dir={textDirection}
              >
                <AnimatePresence
                  initial={false}
                  mode="wait"
                  custom={animationDirection}
                  onExitComplete={onAnimationComplete}
                >
                  <motion.div
                    key={currentStep}
                    custom={animationDirection}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="w-full h-full flex flex-col"
                    onAnimationStart={onAnimationStart}
                    onAnimationComplete={onAnimationComplete}
                  >
                    {(() => {
                      switch (currentStep) {
                        case "service":
                          return (
                            <ServiceStep
                              services={filteredServices}
                              selectedServiceId={selectedServiceId}
                              onSelectService={setSelectedServiceId}
                              onNext={handleNext}
                              formatPrice={formatPrice}
                              isMobile={isMobileVersion}
                            />
                          );
                        case "date":
                          return (
                            <DateTimeStep
                              onSelectDate={(date) => setSelectedDate(date)}
                              onGenerateSchedule={(schedule, slots) => {
                                setDailySchedule(schedule);
                                setGeneratedSlots(slots);
                              }}
                              onNext={handleNext}
                              selectedDate={selectedDate}
                              isMobile={isMobileVersion}
                              master={selectedMaster}
                            />
                          );
                        case "time":
                          return (
                            <TimeStep
                              service={selectedService!}
                              master={selectedMaster!}
                              selectedDate={selectedDate!}
                              selectedTime={selectedTime}
                              onSelectTime={setSelectedTime}
                              dailySchedule={dailySchedule}
                              generatedSlots={generatedSlots}
                              onNext={handleNext}
                              isMobile={isMobileVersion}
                            />
                          );
                        case "confirm":
                          return (
                            <ConfirmStep
                              service={selectedService!}
                              master={selectedMaster!}
                              date={selectedDate!}
                              time={selectedTime!}
                              formatPrice={formatPrice}
                              isMobile={isMobileVersion}
                              masterSpecific={false}
                            />
                          );
                        case "contact":
                          return (
                            <PaymentStep
                              isMobile={isMobileVersion}
                              isRTL={isRTL}
                              value={contactDetails}
                              onChange={setContactDetails}
                            />
                          );
                        default:
                          return null;
                      }
                    })()}
                  </motion.div>
                </AnimatePresence>
              </div>
              {/* Footer button */}
              <div
                className="flex-shrink-0 p-6 border-t border-[var(--button-border-color)] bg-[var(--background)]"
                style={{
                  borderBottomLeftRadius: baseBorderRadius,
                  borderBottomRightRadius: baseBorderRadius,
                }}
              >
                {(currentStep === "service" ||
                  currentStep === "date" ||
                  currentStep === "time" ||
                  currentStep === "confirm" ||
                  currentStep === "contact") && (
                  <ChronicleButton
                  onClick={() => {
                    if (currentStep === "confirm") {
                      handleNext();
                    } else if (currentStep === "contact") {
                      if (!isPaymentLoading) {
                        handleBookingConfirmed();
                      }
                    } else if (!isAnimating) {
                      handleNext();
                    }
                  }}
                  disabled={
                      (currentStep === "service" && !selectedServiceId) ||
                      (currentStep === "date" && !selectedDate) ||
                      (currentStep === "time" && !selectedTime) ||
                      (currentStep === "contact" &&
                        (isPaymentLoading ||
                          contactDetails.fullName.trim().length < 2 ||
                          contactDetails.phone.replace(/\D/g, "").length < 10))
                    }
                    className="w-full flex items-center justify-center"
                    variant="default"
                    backgroundColor="var(--foreground)"
                    textColor="var(--background)"
                    hoverBackgroundColor="var(--accent)"
                    hoverTextColor="var(--foreground)"
                    borderVisible={false}
                    buttonHeight={isMobileVersion ? "2.75rem" : "2.875rem"}
                    width="100%"
                  >
                    {/* Display loader with spacing before text respecting direction */}
                    {currentStep === "contact" && isPaymentLoading ? (
                      <>
                        {isRTL ? null : <Loader />}
                        <span>
                          {translations.pay_button || "Randevu Talebi Oluştur"}
                        </span>
                        {isRTL ? <Loader /> : null}
                      </>
                    ) : currentStep === "confirm" ? (
                      translations.confirm_button || "Bilgilerimi Gir"
                    ) : currentStep === "contact" ? (
                      translations.pay_button || "Randevu Talebi Oluştur"
                    ) : (
                      translations.continue_button || "Devam Et"
                    )}
                  </ChronicleButton>
                )}
              </div>
            </motion.div>
          </motion.div>
        </ModalOverlay>
      )}
    </AnimatePresence>
  );
}
