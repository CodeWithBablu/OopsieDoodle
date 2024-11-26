'use client';

import { ThemeProvider } from "@/components/home/theme-provider";
import localFont from "next/font/local";
import Image from "next/image";
import { useEffect, useState } from "react";

const satoshi = localFont({
  src: [
    { path: "../../app/fonts/satoshi/Satoshi-Regular.otf", weight: "400", style: "normal" },
    { path: "../../app/fonts/satoshi/Satoshi-Medium.otf", weight: "500", style: "normal" },
    { path: "../../app/fonts/satoshi/Satoshi-Bold.otf", weight: "700", style: "normal" },
  ],
  variable: "--font-satoshi",
});

const chillax = localFont({
  src: [
    { path: "../../app/fonts/chillax/Chillax-Light.otf", weight: "300", style: "normal" },
    { path: "../../app/fonts/chillax/Chillax-Regular.otf", weight: "400", style: "normal" },
    { path: "../../app/fonts/chillax/Chillax-Medium.otf", weight: "500", style: "normal" },
    { path: "../../app/fonts/chillax/Chillax-Semibold.otf", weight: "700", style: "normal" },
  ],
  variable: "--font-chillax",
});

export function ThemeWrapper({ children }: { children: React.ReactNode }) {

  const [mounted, setMounted] = useState(false);

  // Ensure the component has mounted before rendering, preventing hydration issues
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return (
    <div className="h-screen w-full flex justify-center items-center bg-ngray bg-dot-white/[0.3]">
      <span className="animate-spin "><Image src={'/img/load.gif'} alt="loading-icon" unoptimized width="0" height="0" className="w-32 h-auto" /> </span>
    </div>
  );

  return (
    <div className={`${chillax.variable} ${satoshi.variable} antialiased`}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <div className="relative h-full w-full dark:bg-ngray bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2]">
          {children}
          {/* Radial gradient for the container to give a faded look */}
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-ngray bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        </div>
      </ThemeProvider>
    </div>
  );
}
