import type { Meta, StoryObj } from "@storybook/react";

import Card from "./Card";
import { ReactNode } from "react";
import Text from "../Text/Text";

const meta = {
  title: "Components/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

const cardContent: ReactNode = (
  <Text.Span>We&apos;ve got some excellent card content here.</Text.Span>
);

export const Large: Story = {
  args: {
    size: "large",
    hover: { borderColor: true, raise: true },
    children: cardContent,
  },
};

export const Normal: Story = {
  args: {
    size: "normal",
    hover: { borderColor: true },
    children: cardContent,
  },
};

export const Compact: Story = {
  args: {
    size: "compact",
    hover: { borderColor: true },
    children: cardContent,
  },
};
