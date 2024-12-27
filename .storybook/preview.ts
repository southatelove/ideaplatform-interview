import type { Preview } from "@storybook/react";
import { StoreDecorator } from "../src/shared/config/StoreDecorator/StoreDecorator";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [StoreDecorator],
};

export default preview;
