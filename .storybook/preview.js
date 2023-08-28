/** @type { import('@storybook/react').Preview } */
import '../src/assets/scss/source.scss';
import '../src/assets/scss/custom.scss';

const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
