import type { Meta, StoryObj } from "@storybook/react";

import Avatar from "./Avatar";

const meta = {
  title: "Components/Avatar",
  component: Avatar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

const args: Avatar = {
  alt: "Avatar example",
  src: "/images/avatars/judges/aarón_sanchez.png",
  size: "lg",
  shape: "circle",
};

export const Circle: Story = {
  args: {
    ...args,
  },
};

export const Square: Story = {
  args: {
    ...args,
    shape: "square",
  },
};

export const Squircle: Story = {
  args: {
    ...args,
    shape: "squircle",
  },
};
