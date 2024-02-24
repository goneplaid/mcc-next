import type { Metadata } from "next";
import "./globals.css";
import { PageLayout, SiteHeader } from "./components";

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
        <div className="min-h-screen flex flex-col bg-gray-100">
          <SiteHeader className="flex-shrink-0" />
          <PageLayout>{children}</PageLayout>
        </div>
      </body>
    </html>
  );
}
