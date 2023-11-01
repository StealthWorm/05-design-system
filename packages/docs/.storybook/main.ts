import type { StorybookConfig } from "@storybook/react-vite";

import { join, dirname } from "path";

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, "package.json")));
}
const config: StorybookConfig = {
  stories: [
    "../src/pages/**/*.mdx",
    "../src/stories/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  addons: [
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-essentials"),
    getAbsolutePath("@storybook/addon-onboarding"),
    getAbsolutePath("@storybook/addon-interactions"),
    getAbsolutePath("@storybook/addon-a11y"),
    // getAbsolutePath("@storybook/manager-api"),
  ],
  framework: {
    name: getAbsolutePath("@storybook/react-vite"),
    options: {},
  },
  features: {
    "storyStoreV7": true
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
  }
};
export default config;
