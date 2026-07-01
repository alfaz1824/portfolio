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
    default: "Mohammad Alfaz | Full-Stack and AI-Focused Software Engineer",
    template: "%s | Mohammad Alfaz",
  },
  description:
    "Portfolio of Mohammad Alfaz, a full-stack and AI-focused software engineering student building web applications, REST APIs, AI integrations, and graph-based systems.",
  keywords: [
    "Mohammad Alfaz",
    "Full Stack Developer",
    "AI Engineering Intern",
    "Software Engineering Intern",
    "REST API Developer",
    "Next.js Portfolio",
  ],
  authors: [{ name: "Mohammad Alfaz" }],
  openGraph: {
    title: "Mohammad Alfaz | Full-Stack and AI-Focused Software Engineer",
    description:
      "Full-stack web applications, AI integrations, REST APIs, and hackathon-winning execution.",
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
