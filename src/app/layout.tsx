import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ClientBody from "./ClientBody";

// Import Google Sans fonts as local fonts
const googleSansText = localFont({
  variable: "--font-google-sans-text",
  src: [
    {
      path: "../fonts/google-sans-text-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/google-sans-text-medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/google-sans-text-bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});

const googleSansDisplay = localFont({
  variable: "--font-google-sans-display",
  src: [
    {
      path: "../fonts/google-sans-display-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/google-sans-display-medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/google-sans-display-bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});

const jetbrainsMono = localFont({
  variable: "--font-jetbrains-mono",
  src: "../fonts/jetbrains-mono-regular.woff2",
});

export const metadata: Metadata = {
  title: "GhostCRO - AI-Powered Risk Management for Small Businesses",
  description: "GhostCRO is an AI-powered risk management platform that helps small businesses identify, monitor, and mitigate risks before they become problems.",
  keywords: "risk management, AI, small business, chief risk officer, risk assessment, business continuity, compliance, operational risk, financial risk",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${googleSansText.variable} ${googleSansDisplay.variable} ${jetbrainsMono.variable}`}>
      <ClientBody>{children}</ClientBody>
    </html>
  );
}
