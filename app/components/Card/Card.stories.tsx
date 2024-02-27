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
    size: "lg",
    borderColor: "base300",
    hoverOptions: { borderColor: "primary", raiseCard: true },
    children: cardContent,
  },
};

export const Medium: Story = {
  args: {
    size: "md",
    borderColor: "base300",
    hoverOptions: { borderColor: "primary", raiseCard: true },
    children: cardContent,
  },
};

export const Small: Story = {
  args: {
    size: "sm",
    borderColor: "base300",
    hoverOptions: { borderColor: "primary", raiseCard: true },
    children: cardContent,
  },
};

export const ExtraSmall: Story = {
  args: {
    size: "xs",
    borderColor: "base300",
    hoverOptions: { borderColor: "primary", raiseCard: true },
    children: cardContent,
  },
};
