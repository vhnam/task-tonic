import type { Config } from 'tailwindcss';

const config: Omit<Config, 'content'> = {
  theme: {
    fontSize: {
      h1: [
        '3rem',
        {
          lineHeight: '1.2em',
          letterSpacing: '-0.02em',
          fontWeight: 600,
        },
      ],
      h2: [
        '2.5rem',
        {
          lineHeight: '1.2em',
          letterSpacing: '-0.02em',
          fontWeight: 600,
        },
      ],
      h3: [
        '2rem',
        {
          lineHeight: '1.4em',
          letterSpacing: '-0.02em',
          fontWeight: 600,
        },
      ],
      h4: [
        '1.5rem',
        {
          lineHeight: '1.5em',
          letterSpacing: '-0.02em',
          fontWeight: 600,
        },
      ],
      h5: [
        '1.25rem',
        {
          lineHeight: '1.4em',
          letterSpacing: '-0.02em',
          fontWeight: 600,
        },
      ],
      h6: [
        '1.125rem',
        {
          lineHeight: '1.4em',
          letterSpacing: '-0.02em',
          fontWeight: 600,
        },
      ],
      lg: [
        '1.125rem',
        {
          lineHeight: '1.55em',
        },
      ],
      md: [
        '1rem',
        {
          lineHeight: '1.6em',
        },
      ],
      sm: [
        '0.875rem',
        {
          lineHeight: '1.55em',
        },
      ],
      xs: [
        '0.75rem',
        {
          lineHeight: '1.55em',
        },
      ],
    },
  },
};

export default config;
