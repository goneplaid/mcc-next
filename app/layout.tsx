import type { Metadata } from "next";
import "./globals.css";
import SiteHeader from "./SiteHeader";
import { lato } from "./fonts";

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
      <body className={`font-sans ${lato.variable}`}>
        <SiteHeader />
        <main className="flex min-h-screen max-w-6xl mx-auto border border-red-600">
          {children}
        </main>
      </body>
    </html>
  );
}
