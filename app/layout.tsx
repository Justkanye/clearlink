import "./globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Navbar from "@/components/layout/Navbar";
import TailwindIndicator from "@/components/layout/tailwind-indicator";
import MotionProvider from "@/components/layout/framer-motion/MotionProvider";
import { cn } from "@/lib/utils";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "ClearLink",
    template: "%s | ClearLink",
  },
  description: "Your gateway to effortless video conferencing.",
  openGraph: {
    images: "/assets/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <MotionProvider>
        <body
          className={cn(inter.className, "overflow-x-hidden max-w-[100vw]")}
        >
          <div className='container mx-auto pt-10 lg:max-w-6xl max-md:px-4'>
            <Navbar />
            {children}
            <Footer />
          </div>
          <TailwindIndicator />
        </body>
      </MotionProvider>
    </html>
  );
}
