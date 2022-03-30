export const parameters = {
  layout: "centered",
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

import CoreDecorator from "./coreDecorator";

export const decorators = [
  (Story) => (
    <CoreDecorator>
      <Story />
    </CoreDecorator>
  ),
];
