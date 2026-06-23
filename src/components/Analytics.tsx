"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    gtag?: (...args: unknown[]) => void;
  }
}

type AnalyticsProps = {
  gaId?: string;
};

export default function Analytics({ gaId }: AnalyticsProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!pathname) return;

    const search = searchParams?.toString();
    const pagePath = search ? `${pathname}?${search}` : pathname;
    const pageLocation = typeof window !== "undefined" ? window.location.href : pagePath;

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "route_change",
      page_path: pagePath,
      page_location: pageLocation,
      page_title: document.title,
    });

    if (gaId && typeof window.gtag === "function") {
      window.gtag("config", gaId, {
        page_path: pagePath,
        page_location: pageLocation,
        page_title: document.title,
      });
    }
  }, [gaId, pathname, searchParams]);

  return null;
}
