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
  type: "base",
//   width: "",
//   height: "30px",
//   fontSize: "14px",
//   borderRadius: "10px",
//   fs: "14px",
//   fontWeight: "400",
//   fw: "400",
//   border: "1px solid black",
//   transition: "0.2s",
//   color: "blue",
//   backgroundColor: "white",
  hover: "fs-18px w-400px",
  style: "fs-14px w-300px",
};
