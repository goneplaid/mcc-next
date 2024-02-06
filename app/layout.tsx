import type { Metadata } from "next";
import "./globals.css";
import SiteHeader from "./SiteHeader";

import { Michroma } from "next/font/google";

const michroma = Michroma({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-michroma",
});

export const metadata: Metadata = {
  title: "MasterChef Compendium",
  description: "Fan site dedicated to the television show MasterChef",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        <main className="flex min-h-screen  border border-red-600">
          {children}
        </main>
      </body>
    </html>
  );
}
