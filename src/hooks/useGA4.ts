import { useEffect } from "react";

const GA_MEASUREMENT_ID = "G-47SEHKC1BC";

export function useGA4() {
  useEffect(() => {
    if (!import.meta.env.PROD) {
      console.log("[GA4] Development mode: Tracking disabled.");
      return;
    }

    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script);

    const inlineScript = document.createElement("script");
    inlineScript.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA_MEASUREMENT_ID}');
    `;
    document.head.appendChild(inlineScript);

    console.log("[GA4] Production mode: Tracking enabled.");
  }, []);
}
