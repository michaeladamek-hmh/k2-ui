/** @type { import('@storybook/react-vite').StorybookConfig } */

import { mergeConfig } from 'vite';

const config = {
  framework: "@storybook/react-vite",
  stories: ["../src/components/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
    "@storybook/addon-essentials",
    '@storybook/addon-a11y',
    {
      name: '@storybook/addon-styling',
      options: {
        sass: {
          implementation: require('sass'),
        },
      },
    },
  ],
  core: {
    builder: '@storybook/builder-vite',
  },
  docs: {
    autodocs: 'tag',
  },
  typescript: {
    reactDocgen: 'react-docgen',
    skipBabel: true,
    check: false,
  }
};

export default config;
