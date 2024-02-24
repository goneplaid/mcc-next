import Image from "next/image";

import Link from "next/link";
import Text from "../Text/Text";
import { ReactNode } from "react";

interface SiteHeader {
  className?: string;
  children?: ReactNode;
}

const SiteHeader = ({ className, children }: SiteHeader) => {
  return (
    <header className={`p-2 mb-8 shadow-md bg-white ${className}`}>
      <div className="content h-full flex flex-row items-center">
        <Link href="/" className="flex flex-row items-center">
          <Image
            src="/images/mc-logo.png"
            className="inline-block mr-2"
            alt="Master Chef Compendium"
            width="40"
            height="40"
          />
          <Text.Span branded level={3}>
            MasterChef
            <br />
            Compendium
          </Text.Span>
        </Link>
        {children}
      </div>
    </header>
  );
};

export default SiteHeader;
