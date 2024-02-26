import type { Metadata } from "next";
import "./globals.css";
import { PageLayout, SiteNav } from "./components";
import clsx from "clsx";
import { fontVariables } from "./typography";

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
    <html lang="en" data-theme="light">
      <body className={clsx(fontVariables)}>
        <div className="min-h-screen flex flex-col bg-gray-100">
          <SiteNav className="flex-shrink-0" />
          <PageLayout>{children}</PageLayout>
        </div>
      </body>
    </html>
  );
}
