"use client";

import Script from "next/script";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { ShieldCheck } from "lucide-react";
import { getLeadConfig, type PublicLeadConfig } from "@/lib/lead-client";

type TurnstileApi = {
  render: (
    container: HTMLElement,
    options: {
      sitekey: string;
      callback: (token: string) => void;
      "expired-callback": () => void;
      "error-callback": () => void;
      theme: "light";
      size: "flexible";
    },
  ) => string;
  remove: (widgetId: string) => void;
  reset: (widgetId?: string) => void;
};

declare global {
  interface Window {
    turnstile?: TurnstileApi;
  }
}

interface TurnstileWidgetProps {
  onTokenChange: (token: string) => void;
  resetSignal?: number;
}

export default function TurnstileWidget({ onTokenChange, resetSignal = 0 }: TurnstileWidgetProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);
  const [scriptReady, setScriptReady] = useState(false);
  const [config, setConfig] = useState<PublicLeadConfig | null>(null);
  const [configError, setConfigError] = useState("");

  useEffect(() => {
    let active = true;
    getLeadConfig()
      .then((value) => {
        if (active) setConfig(value);
      })
      .catch(() => {
        if (active) setConfigError("Security check could not be loaded. Please refresh the page.");
      });
    return () => {
      active = false;
    };
  }, []);

  const renderWidget = useCallback(() => {
    if (
      !config?.turnstileEnabled ||
      !config.turnstileSiteKey ||
      !scriptReady ||
      !window.turnstile ||
      !containerRef.current ||
      widgetIdRef.current
    ) {
      return;
    }

    widgetIdRef.current = window.turnstile.render(containerRef.current, {
      sitekey: config.turnstileSiteKey,
      callback: onTokenChange,
      "expired-callback": () => onTokenChange(""),
      "error-callback": () => onTokenChange(""),
      theme: "light",
      size: "flexible",
    });
  }, [config, onTokenChange, scriptReady]);

  useEffect(() => {
    renderWidget();
  }, [renderWidget]);

  useEffect(() => {
    if (widgetIdRef.current && window.turnstile) {
      window.turnstile.reset(widgetIdRef.current);
      onTokenChange("");
    }
  }, [onTokenChange, resetSignal]);

  useEffect(() => {
    return () => {
      if (widgetIdRef.current && window.turnstile) {
        window.turnstile.remove(widgetIdRef.current);
        widgetIdRef.current = null;
      }
    };
  }, []);

  if (configError) {
    return <p className="text-xs font-semibold text-red-600">{configError}</p>;
  }

  if (!config) {
    return <div className="h-[48px] rounded-btn bg-section-bg animate-pulse" aria-label="Loading security check" />;
  }

  if (!config.turnstileEnabled) {
    return (
      <div className="flex items-center gap-2 rounded-btn border border-amber-200 bg-amber-50 px-3 py-2 text-[11px] font-medium text-amber-800">
        <ShieldCheck className="h-4 w-4 shrink-0" />
        Test mode: bot verification is not enabled yet.
      </div>
    );
  }

  return (
    <>
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
        strategy="afterInteractive"
        onLoad={() => setScriptReady(true)}
      />
      <div ref={containerRef} className="min-h-[65px] w-full" aria-label="Security verification" />
    </>
  );
}
