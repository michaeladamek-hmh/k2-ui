/** @type { import('@storybook/react-vite').StorybookConfig } */

const config = {
  stories: ["../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
    "@storybook/addon-essentials",
    {
      name: '@storybook/addon-styling',
      options: {
        sass: {
          implementation: require('sass'),
        },
      },
    },
  ],
  framework: "@storybook/react-vite",
  docs: {
    autodocs: true,
  },
};

export default config;
