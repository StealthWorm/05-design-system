import type { Preview } from "@storybook/react";
import { themes } from '@storybook/theming'

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
    // define o tema dark do canvas do markdown
    docs: {
      theme: themes.dark,
    }
  },
};

export default preview;
