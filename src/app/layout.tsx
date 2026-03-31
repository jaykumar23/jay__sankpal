import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollTopButton";
import HomeSectionsWrapper from "./HomeSectionWrapper";
import { ThemeProvider } from "@/components/ThemeProvider";
import { VisitLoader } from "@/components/VisitLoader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "jay__sankpal",
  description: "Jaykumar's portfolio ❤️",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-background text-foreground`}
      >
        <ThemeProvider>
          <VisitLoader />
          <div className="flex min-h-screen flex-col">
            <Header />
            <div className="flex flex-1 flex-col w-full min-h-0">
              {children}
              <HomeSectionsWrapper />
            </div>
            <ScrollToTopButton />
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
