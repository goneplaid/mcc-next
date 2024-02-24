import type { Meta, StoryObj } from "@storybook/react";
import { within, userEvent, expect } from "@storybook/test";

import TextUsage from "./TextUsage.story";

const meta = {
  title: "Components/Text",
  component: TextUsage,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof TextUsage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const UsingText: Story = {};
