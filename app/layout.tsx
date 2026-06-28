import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
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
  metadataBase: new URL("https://alfaz.dev"),
  title: {
    default: "Mohammad Alfaz | Full-Stack Engineer and AI Builder",
    template: "%s | Mohammad Alfaz",
  },
  description:
    "Portfolio of Mohammad Alfaz, a full-stack engineer, AI builder, and 4x hackathon award winner pursuing software engineering and data science internships.",
  keywords: [
    "Mohammad Alfaz",
    "Full Stack Developer",
    "AI Builder",
    "Software Engineering Intern",
    "Data Science Intern",
    "Next.js Portfolio",
  ],
  authors: [{ name: "Mohammad Alfaz" }],
  openGraph: {
    title: "Mohammad Alfaz | Full-Stack Engineer and AI Builder",
    description:
      "AI-powered products, full-stack systems, and hackathon-winning execution.",
    type: "website",
    images: ["/images/Profile.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
