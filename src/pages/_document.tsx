import { cn } from "@/lib/utils";
import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
import { SEOElements } from "@/components/SEO";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <SEOElements />
        
        {/* O.N.E.Tech AI Assistant */}
        <Script src="https://silent.onetechautomation.com/widget.js" strategy="lazyOnload" />
      </Head>
      <body
        className={cn(
          "min-h-screen w-full scroll-smooth bg-background text-foreground antialiased"
        )}
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
