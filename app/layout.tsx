import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "StudyDoc - AI-Powered Learning Platform",
  description: "Transform your learning experience with AI-powered study tools. Generate practice questions, create flashcards, and master any subject faster with StudyDoc.",
  keywords: ["AI learning", "study tools", "education", "flashcards", "practice questions", "AI tutor"],
  authors: [{ name: "StudyDoc" }],
  openGraph: {
    title: "StudyDoc - AI-Powered Learning Platform",
    description: "Transform your learning experience with AI-powered study tools.",
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
