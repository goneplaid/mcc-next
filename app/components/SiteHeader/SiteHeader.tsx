import Image from "next/image";

import { michroma } from "../../fonts";
import Link from "next/link";
import { StyledComponent } from "../../types/components.types";
import Text from "../Text/Text";

interface SiteHeader extends StyledComponent {}

const SiteHeader = ({ className }: SiteHeader) => {
  return (
    <header className={`p-2 mb-4 shadow-md bg-white ${className}`}>
      <div className="content flex flex-row h-full">
        <Link href="/" className="w-14  flex flex-row items-center">
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
      </div>
    </header>
  );
};

export default SiteHeader;
