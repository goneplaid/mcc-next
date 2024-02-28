import { ChallengeType } from "@prisma/client";
import Card from "../Card/Card";
import Image from "next/image";
import Text from "../Text/Text";
import { CHALLENGE_NAME_MAP } from "../../utils/challenge-content-mappings";

type ChallengeTypeCardSize = "xs" | "sm" | "md" | "lg";

interface ChallengeTypeCard {
  type: ChallengeType;
  size?: ChallengeTypeCardSize;
}

const ChallengeTypeCard = ({ type, size = "sm" }: ChallengeTypeCard) => {
  const textLevel = size === "xs" ? 3 : size === "sm" ? 2 : 1;
  const imgSize = size === "xs" ? 24 : size === "sm" ? "32" : "48";

  return (
    <Card
      size={size}
      borderColor="neutral"
      valignContent="center"
      className="bg-gray-200"
    >
      <div className="flex flex-col gap-2 items-center justify-center w-full">
        <Image
          src="/images/mc-logo.png"
          alt={CHALLENGE_NAME_MAP[type]}
          width={imgSize}
          height={imgSize}
        />
        <Text.Span level={textLevel} align="center" branded>
          {CHALLENGE_NAME_MAP[type]}
        </Text.Span>
      </div>
    </Card>
  );
};

export default ChallengeTypeCard;
