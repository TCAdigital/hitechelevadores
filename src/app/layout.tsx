import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://hitechelevadores.com.br"),
  title: {
    default: "Hi-Tech Elevadores e Plataformas | Soluções em Elevação",
    template: "%s | Hi-Tech Elevadores",
  },
  description:
    "Elevadores e plataformas de alto padrão para residências, comércios e indústrias. Qualidade, segurança e tecnologia. Solicite sua cotação!",
  keywords: [
    "elevadores",
    "plataformas",
    "elevadores residenciais",
    "elevadores comerciais",
    "elevadores industriais",
    "plataformas de acessibilidade",
    "manutenção de elevadores",
    "Hi-Tech elevadores",
  ],
  authors: [{ name: "Hi-Tech Elevadores e Plataformas" }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://hitechelevadores.com.br",
    siteName: "Hi-Tech Elevadores e Plataformas",
    title: "Hi-Tech Elevadores e Plataformas | Soluções em Elevação",
    description:
      "Elevadores e plataformas de alto padrão para residências, comércios e indústrias.",
    images: [{ url: "/images/hero-bg.png", width: 1200, height: 630, alt: "Hi-Tech Elevadores" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hi-Tech Elevadores e Plataformas",
    description:
      "Elevadores e plataformas de alto padrão. Solicite sua cotação!",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://hitechelevadores.com.br" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Hi-Tech Elevadores e Plataformas",
    description:
      "Elevadores e plataformas de alto padrão para residências, comércios e indústrias.",
    url: "https://hitechelevadores.com.br",
    telephone: "+5517997230928",
    email: "contato@hitechelevadores.com.br",
    address: {
      "@type": "PostalAddress",
      addressCountry: "BR",
    },
    sameAs: [],
  };

  return (
    <html lang="pt-BR">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
