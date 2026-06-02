import type { Metadata } from "next";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "Sistema Indisponível | Manutenção Técnica",
  description: "Este domínio encontra-se temporariamente fora do ar para manutenção técnica e conformidade de serviços.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function SuspendedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body style={{ backgroundColor: "#0f1115", color: "#e9ecef" }}>
        {children}
      </body>
    </html>
  );
}
