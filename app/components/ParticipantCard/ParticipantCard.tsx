import { Contestant, ContestantProfile, Participant } from "@prisma/client";
import Card from "../Card/Card";
import Text from "../Text/Text";
import Avatar from "../Avatar/Avatar";
import { avatarSrcLookup } from "@/app/utils/avatarSrcLookup";
import { PARTICIPANT_RESULT_MAP } from "../../utils/challenge-content-mappings";

interface ParticipantCard {
  participant: Participant & {
    contestant: Contestant & {
      profile: ContestantProfile;
    };
  };
}

const ParticipantCard = ({ participant }: ParticipantCard) => {
  const { name } = participant.contestant.profile;
  return (
    <Card size="sm" borderColor="base300">
      <div className="flex flex-row gap-4 items-center">
        <Avatar
          size="sm"
          alt={"hi"}
          src={avatarSrcLookup(name)!}
          shape="squircle"
        />
        <div className="flex flex-col">
          <div className="flex flex-row gap-1 items-center">
            <Text.Span level={3}>
              {participant.result === "ELIMINATED"
                ? "❌"
                : participant.result === "WINNER"
                ? "🎉"
                : "✨"}
            </Text.Span>
            <Text.Span level={2}>
              {PARTICIPANT_RESULT_MAP[participant.result]}
            </Text.Span>
          </div>
          <Text.SubHead level={1}>{name}</Text.SubHead>
        </div>
      </div>
    </Card>
  );
};

export default ParticipantCard;
