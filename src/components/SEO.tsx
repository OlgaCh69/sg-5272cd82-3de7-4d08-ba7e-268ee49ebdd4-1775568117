import Head from "next/head";

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

const defaultSEO = {
  title: "O.N.E.Tech | Governance-First AI Infrastructure For Enterprise Operations",
  description: "O.N.E.Tech designs governance-first AI infrastructure that connects enterprise systems, workforce operations, AI governance and operational intelligence into a unified ecosystem for GCC and global enterprises.",
  image: "/og-enterprise-infrastructure.png",
  url: "https://onetechautomation.com"
};

export function SEOElements({
  title = "O.N.E.Tech | Governance-First AI Infrastructure For Enterprise Operations",
  description = "O.N.E.Tech designs governance-first AI infrastructure that connects enterprise systems, workforce operations, AI governance and operational intelligence into a unified ecosystem for GCC and global enterprises.",
  image = "/og-image.png",
  url,
}: SEOProps = {}) {
  const fullImageUrl = image.startsWith('http') ? image : `${defaultSEO.url}${image}`;
  
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="O.N.E.Tech" />

      {/* Twitter / X */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />

      {/* LinkedIn */}
      <meta property="og:image:alt" content="O.N.E.Tech - Governance-First AI Infrastructure" />

      {/* WhatsApp / Telegram */}
      <meta property="og:locale" content="en_US" />
    </>
  );
}

export function SEO(props: SEOProps = {}) {
  return (
    <Head>
      <SEOElements {...props} />
    </Head>
  );
}
