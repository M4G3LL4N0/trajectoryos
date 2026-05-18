import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "TrajectoryOS — Mission-grade calculations for the frontier",
    template: "%s | TrajectoryOS",
  },
  description:
    "AI-native mission computation layer for space, physics, aerospace, robotics, and engineering teams. From mission intent to validated calculations, trade studies, and decision-ready briefs.",
  keywords: [
    "mission design",
    "orbital mechanics",
    "aerospace engineering",
    "satellite",
    "trade studies",
    "physics calculations",
    "engineering workspace",
  ],
  openGraph: {
    title: "TrajectoryOS — Mission-grade calculations for the frontier",
    description:
      "Turn mission questions into validated calculations, trade studies, solver workflows, and technical briefs.",
    type: "website",
    locale: "en_US",
    siteName: "TrajectoryOS",
  },
  twitter: {
    card: "summary_large_image",
    title: "TrajectoryOS",
    description:
      "Mission computation operating layer for aerospace, research, and engineering teams.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
