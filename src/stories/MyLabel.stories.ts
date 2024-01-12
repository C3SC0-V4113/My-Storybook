import type { Meta, StoryObj } from "@storybook/react";

import { MyLabel } from "../components/MyLabel";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "UI/Labels/MyLabel",
  component: MyLabel,
  parameters: {
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  //   argTypes: {
  //     size: {
  //       control: "select",
  //       options: ["normal", "h1", "h2", "h3"],
  //     },
  //   },
} satisfies Meta<typeof MyLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    label: "Hello World",
  },
};
