import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Box from "../box";

export default {
  title: "Skypiea-UI/Box",
  component: Box,
} as ComponentMeta<typeof Box>;

const Template: ComponentStory<typeof Box> = (args) => <Box {...args} />;

export const Solid = Template.bind({});
Solid.args = {
  children: "Box",
  hover: "fs-18px; w-400px",
  style: "fs-14px; w-300px",
  bgImage: "",
  background: "",
  bgSize: "",
  bgRepeat: "",
  bgPos: "",
};
