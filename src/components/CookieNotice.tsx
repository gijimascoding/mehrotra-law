"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export function CookieNotice() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const dismissed = localStorage.getItem("cookie-notice-dismissed");
    if (!dismissed) {
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const dismiss = () => {
    setVisible(false);
    localStorage.setItem("cookie-notice-dismissed", "true");
  };

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 bg-navy-dark/95 backdrop-blur-sm animate-fade-in-up"
      role="alert"
      aria-label="Cookie notice"
    >
      <div className="container-firm py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <p className="text-sm text-gray-300 leading-relaxed">
          This website uses essential cookies to ensure functionality. No tracking or marketing cookies are used.{" "}
          <Link href="/privacy-policy" className="text-white underline underline-offset-2 hover:no-underline">
            Privacy Policy
          </Link>
        </p>
        <button
          onClick={dismiss}
          className="shrink-0 px-4 py-2 bg-white/10 text-white text-sm font-medium rounded-sm hover:bg-white/20 transition-colors duration-200"
        >
          Understood
        </button>
      </div>
    </div>
  );
}
