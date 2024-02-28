import type { Meta, StoryObj } from "@storybook/react";

import ChallengeTypeCard from "./ChallengeTypeCard";

const meta = {
  title: "Components/ChallengeTypeCard",
  component: ChallengeTypeCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof ChallengeTypeCard>;

export default meta;
type Story = StoryObj<typeof meta>;

const args: ChallengeTypeCard = {
  size: "xs",
  type: "AUDITION",
};

export const ExtraSmall: Story = {
  args: {
    ...args,
    size: "xs",
  },
};

export const Small: Story = {
  args: {
    ...args,
    size: "sm",
  },
};

export const Medium: Story = {
  args: {
    ...args,
    size: "md",
  },
};

export const Large: Story = {
  args: {
    ...args,
    size: "lg",
  },
};
