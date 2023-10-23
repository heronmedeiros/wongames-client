import { Meta, StoryObj } from "@storybook/react";
import Logo, { LogoProps } from ".";

export default {
  title: "Logo",
  component: Logo,
} as Meta;

// export const Default: Story<LogoProps> = (args) => <Logo {...args} />
export const Default: StoryObj<LogoProps> = { ...Logo };
