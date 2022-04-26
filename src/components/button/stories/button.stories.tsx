import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "../button";

export default {
  title: "Skypiea-UI/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Solid = Template.bind({});
Solid.args = {
  children: "Button",
  width: "200px",
  height: "30px",
  fontSize: "14px",
  borderRadius: "10px",
  fs: "14px",
  fontWeight: "400",
  fw: "400",
  border: "1px solid black",
};
