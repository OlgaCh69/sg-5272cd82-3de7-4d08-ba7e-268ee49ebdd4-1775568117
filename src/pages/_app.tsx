import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@/contexts/ThemeProvider";
import { Toaster } from "@/components/ui/toaster";
import { Footer } from "@/components/Footer";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { LiveGovernanceWidget } from "@/components/LiveGovernanceWidget";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <AnimatedBackground />
      <LiveGovernanceWidget />
      <Component {...pageProps} />
      <Footer />
      <Toaster />
    </ThemeProvider>
  );
}