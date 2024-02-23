import type { Metadata } from "next";
import "./globals.css";
import SiteHeader from "./components/SiteHeader";
import { raleway } from "./fonts";
import Text from "./components/Text/Text";

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
      <body className={Text.content}>
        <div className="min-h-screen flex flex-col bg-gray-100">
          <SiteHeader className="flex-shrink-0" />
          <main className="w-full max-w-6xl mx-10 xl:mx-auto">{children}</main>
        </div>
      </body>
    </html>
  );
}
