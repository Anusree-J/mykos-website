import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mykos — Everyone deserves a chief of staff",
  description:
    "Mykos is your AI chief of staff. It connects the dots, moves things forward, and makes sure nothing falls through the cracks. My CoS. For everyone.",
  openGraph: {
    title: "Mykos — Everyone deserves a chief of staff",
    description:
      "Your AI chief of staff that connects the dots, moves things forward, and handles your day.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Source+Serif+4:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
