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
  argTypes: {
    size: {
      control: "inline-radio",
    },
  },
} satisfies Meta<typeof MyLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    label: "Basic Label",
    size: "normal",
  },
};

export const Secondary: Story = {
  args: {
    label: "Secondary Label",
    color: "text-secondary",
  },
};

export const AllCaps: Story = {
  args: {
    label: "All Caps Label",
    allCaps: true,
  },
};

export const CustomColor: Story = {
  args: {
    label: "Custom Color Label",
    fontColor: "#320d6e",
  },
};

export const CustomBackgroundColor: Story = {
  args: {
    label: "Custom Background Color Label",
    fontColor: "white",
    backgroundColor: "#320d6e",
  },
};
