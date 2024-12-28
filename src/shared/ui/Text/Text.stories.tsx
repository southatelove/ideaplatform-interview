import type { Meta, StoryObj } from "@storybook/react";

import { Text } from "./Text";

const meta = {
  title: "shared/Text",
  component: Text,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: "Title lorem ipsun",
    text: "Description Description Description",
    textDate: "Description Description Description",
    textTime: "Description Description Description",
  },
};

export const onlyTitle: Story = {
  args: {
    title: "Title lorem ipsun",
  },
};
export const onlyText: Story = {
  args: {
    text: "Title lorem ipsun",
  },
};
export const onlyTextDate: Story = {
  args: {
    textDate: "Title lorem ipsun",
  },
};
export const onlyTextTime: Story = {
  args: {
    textTime: "Title lorem ipsun",
  },
};
