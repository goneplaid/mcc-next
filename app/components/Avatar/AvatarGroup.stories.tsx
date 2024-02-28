import type { Meta, StoryObj } from "@storybook/react";

import AvatarGroup from "./AvatarGroup";

const meta = {
  title: "Components/AvatarGroup",
  component: AvatarGroup,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof AvatarGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

const args: AvatarGroup = {
  avatars: [
    {
      alt: "AvatarGroup example 1",
      src: "/images/Avatars/judges/gordon_ramsay.png",
    },
    {
      alt: "AvatarGroup example 2",
      src: "/images/Avatars/judges/aarón_sanchez.png",
    },
    {
      alt: "AvatarGroup example 3",
      src: "/images/Avatars/judges/joe_bastianich.png",
    },
  ],
  size: "lg",
  shape: "squircle",
};

const wat = {
  args: {
    ...args,
  },
};

console.log(wat);

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
