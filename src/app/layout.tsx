import "./globals.css";
import { Metadata } from "next";
import { ThemeWrapper } from "@/components/home/theme-wrapper";

export const metadata: Metadata = {
  title: "Oopsie Doodle",
  description: "draw to guess word based game",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scrollbar-thumb-zinc-500 scrollbar-track-transparent">
      <body>
        <ThemeWrapper>{children}</ThemeWrapper>
      </body>
    </html>
  );
}



// return (
//   <html lang="en">
//     <body
//       className={`${chillax.variable} ${satoshi.variable} antialiased`}
//     >
//       {
//         (mounted) &&  // Prevent render until after hydration

//         <ThemeProvider
//           attribute="class"
//           defaultTheme="system"
//           enableSystem
//           disableTransitionOnChange
//         >
//           <div className="relative h-full w-full dark:bg-ngray bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2]">
//             {children}
//             {/* Radial gradient for the container to give a faded look */}
//             <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-ngray bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
//           </div>
//         </ThemeProvider>
//       }
//     </body>
//   </html>
// );
// }
