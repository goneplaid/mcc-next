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
        <div className="min-h-screen flex flex-col border border-red-600">
          <SiteHeader className="flex-shrink-0" />
          <main className="max-w-6xl mx-auto border border-teal-600">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
