import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { NextUIProvider } from '@nextui-org/react'
import { ThemeProvider } from "@/contexts/theme-provider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "OopsieDoodle",
  description: "Fun comes with true friends",
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
        <ThemeProvider>
          <NextUIProvider>
            <div className="relative h-full dark:bg-ngray bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2]">
              <div className="max-w-7xl m-auto h-full">
                {children}
              </div>
              {/* Radial gradient for the container to give a faded look */}
              <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-ngray bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
            </div>
          </NextUIProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
