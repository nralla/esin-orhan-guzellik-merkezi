
"use client";

import { createContext, useContext, useState, ReactNode, useEffect, useCallback } from "react";
import { ispartaDictionary, TranslationKey, Dictionary } from "@/lib/translations";

interface AppContextType {
  lang: string;
  setLang: (lang: string) => void;
  dictionary: Dictionary;
  t: (key: TranslationKey | string) => string;
  isHydrated: boolean;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setInternalLang] = useState("tr");
  const dictionary: Dictionary = ispartaDictionary;
  const isHydrated = true;

  const setLang = useCallback((newLang: string) => {
    setInternalLang(newLang === "tr" ? "tr" : "tr");
  }, []);
  
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = "ltr";
  }, [lang]);

  const t = useCallback((key: TranslationKey | string): string => {
    return dictionary[key as TranslationKey] || String(key);
  }, [dictionary]);
  
  const value = {
    lang,
    setLang,
    dictionary,
    t,
    isHydrated
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
};

export const useTranslation = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useTranslation must be used within an AppProvider");
  }
  return context.t;
}
