import type { Config } from 'tailwindcss';

import commonColors from './colors.json';
import themeColors from './darkColors.json';
import fontSize from './fontSize.json';

const config: Omit<Config, 'content'> = {
  theme: {
    colors: {
      ...commonColors,
      ...themeColors,
    },
    fontSize,
  },
};

export default config;
