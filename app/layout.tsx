import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import SiteHeader from "./components/SiteHeader";

const jakarta = localFont({
  src: [
    { path: "./fonts/jakarta-regular.ttf", weight: "400", style: "normal" },
    { path: "./fonts/jakarta-medium.ttf", weight: "500", style: "normal" },
    { path: "./fonts/jakarta-semibold.ttf", weight: "600", style: "normal" },
    { path: "./fonts/jakarta-bold.ttf", weight: "700", style: "normal" },
  ],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Minhal Rahman — Automation & Instrumentation Engineer",
    template: "%s | Minhal Rahman",
  },
  description:
    "Explore Minhal Rahman’s engineering portfolio: PLC automation, digital twins, embedded systems, and hands-on process control projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={jakarta.className}>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
