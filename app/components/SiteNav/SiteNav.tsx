import Image from "next/image";

import Link from "next/link";
import Text from "../Text/Text";
import { ReactNode } from "react";
import clsx from "clsx";

interface SiteHeader {
  className?: string;
  children?: ReactNode;
}

const SiteNav = ({ className, children }: SiteHeader) => {
  return (
    <nav
      className={clsx(
        "pl-4 mb-8 h-16 shadow-md bg-white sticky top-0 z-50",
        className
      )}
    >
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
    </nav>
  );
};

export default SiteNav;
