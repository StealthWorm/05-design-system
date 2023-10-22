import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    // define o tema dark do canvas (onde o componente aparece)
    backgrounds: {
      default: 'dark'
    },
  },
};

export default preview;
