import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FleetZen - Gestion de flotte simple pour artisans et TPE",
  description:
    "FleetZen aide les artisans et petites entreprises à gérer simplement leurs véhicules, leurs obligations et leurs documents — sans complexité inutile.",
  keywords: [
    "gestion de flotte",
    "artisans",
    "TPE",
    "véhicules",
    "contrôle technique",
    "entretien",
    "assurance",
  ],
  authors: [{ name: "FleetZen" }],
  openGraph: {
    title: "FleetZen - Gestion de flotte simple pour artisans et TPE",
    description:
      "Ne ratez plus jamais un contrôle ou un entretien de véhicule. Centralisez, automatisez, simplifiez.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}

