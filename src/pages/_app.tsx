import type { AppProps } from "next/app";
import { GoogleAnalytics } from "@next/third-parties/google";
import { PostHogProvider } from "posthog-js/react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { DefaultSeo } from "next-seo";
import SEO from "../../next-seo.config";
import posthog from "posthog-js";
// GSAP
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import { AnimatePresence } from "framer-motion";
// Store
import { StrictMode } from "react";
import { store } from "@redux/store";
import { Provider } from "react-redux";
import BreakpointsContextProvider from "../context/breakpointsContext";
// Globals CSS
// import "../styles/globals.css";
// import "../styles/loader.css";
// import "../styles/pluginsbase.css";
// import "../styles/main.css";



export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GoogleAnalytics gaId={process.env.GTAG_ID as string} />
      <DefaultSeo {...SEO} />
      <PostHogProvider client={posthog}>
        {/* ============== */}
        <AnimatePresence mode='wait'>
          <BreakpointsContextProvider>
            <Provider store={store}>
              <Component {...pageProps} />
            </Provider>
          </BreakpointsContextProvider>
        </AnimatePresence>
      </PostHogProvider>
      <Analytics />
      <SpeedInsights />
    </>

  )
}
