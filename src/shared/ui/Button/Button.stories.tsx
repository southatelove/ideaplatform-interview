import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { Button, ButtonSize } from "./Button";

const meta = {
  title: "shared/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],

  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "text",
  },
};

export const Disabled: Story = {
  args: {
    children: "Disabled",
    disabled: true,
  },
};
export const SizeSmall: Story = {
  args: {
    children: "Small",
    size: ButtonSize.SMALL,
    disabled: true,
  },
};

export const SizeBig: Story = {
  args: {
    children: "Big",
    size: ButtonSize.BIG,
    disabled: true,
  },
};
