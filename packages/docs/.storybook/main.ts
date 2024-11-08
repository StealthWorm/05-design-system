import type { StorybookConfig } from "@storybook/react-vite";

import { join, dirname } from "path";

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
const config: StorybookConfig = {
  stories: ['../src/pages/**/*.mdx', '../src/stories/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
    // '@storybook/manager-api',
    '@storybook/addon-a11y',
  ],

  framework: {
    name: '@storybook/react-vite',
    options: {},
  },

  core: {
    builder: '@storybook/builder-vite',
  },

  features: {
    "storyStoreV7": true,
  },

  docs: {
    autodocs: true,
    defaultName: 'Documentation',
  },

  // como não estamos usando um dominio separado (estamos em uma subpasta do diretorio, precisamos configurar a raiz, que no caso é o proprio projeto no github)
  viteFinal: (config, { configType }) => {
    if (configType === 'PRODUCTION') {
      config.base = '/05-design-system/'
    }

    return config
  },

  typescript: {
    reactDocgen: "react-docgen-typescript"
  }
};
export default config;
