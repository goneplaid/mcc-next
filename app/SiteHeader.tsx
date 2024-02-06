import Image from "next/image";
import React from "react";

import { michroma } from "./fonts";
import Link from "next/link";

const SiteHeader = () => {
  return (
    <header className="p-2 mb-4 shadow-md bg-white">
      <div className="content flex flex-row h-full">
        <Link href="/" className="w-14  flex flex-row items-center">
          <Image
            src="/images/mc-logo.png"
            className="inline-block mr-2"
            alt="Master Chef Compendium"
            width="40"
            height="40"
          />
          <span
            className={`inline-block text-sm font-branded ${michroma.variable}`}
          >
            MasterChef
            <br />
            Compendium
          </span>
        </Link>
      </div>
    </header>
  );
};

export default SiteHeader;
