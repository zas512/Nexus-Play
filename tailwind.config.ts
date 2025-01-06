import type { Config } from 'tailwindcss';

const { default: flattenColorPalette } = require('tailwindcss/lib/util/flattenColorPalette');

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        gradient1: 'radial-gradient(circle_farthest-side_at_0_100%, #00ccb1, transparent)',
        gradient2: 'radial-gradient(circle_farthest-side_at_100%_0, #7b61ff, transparent)',
        gradient3: 'radial-gradient(circle_farthest-side_at_100%_100%, #ffc414, transparent)',
        gradient4: 'radial-gradient(circle_farthest-side_at_0_0, #1ca0fb, #141316)',
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
    },
    animation: {
      shimmer: 'shimmer 2s linear infinite',
      first: 'moveVertical 30s ease infinite',
      second: 'moveInCircle 20s reverse infinite',
      third: 'moveInCircle 40s linear infinite',
      fourth: 'moveHorizontal 40s ease infinite',
      fifth: 'moveInCircle 20s ease infinite',
    },
    keyframes: {
      shimmer: {
        from: {
          backgroundPosition: '0 0',
        },
        to: {
          backgroundPosition: '-200% 0',
        },
      },
      moveHorizontal: {
        '0%': {
          transform: 'translateX(-50%) translateY(-10%)',
        },
        '50%': {
          transform: 'translateX(50%) translateY(10%)',
        },
        '100%': {
          transform: 'translateX(-50%) translateY(-10%)',
        },
      },
      moveInCircle: {
        '0%': {
          transform: 'rotate(0deg)',
        },
        '50%': {
          transform: 'rotate(180deg)',
        },
        '100%': {
          transform: 'rotate(360deg)',
        },
      },
      moveVertical: {
        '0%': {
          transform: 'translateY(-50%)',
        },
        '50%': {
          transform: 'translateY(50%)',
        },
        '100%': {
          transform: 'translateY(-50%)',
        },
      },
    },
  },
  plugins: [addVariablesForColors],
} satisfies Config;

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme('colors'));
  let newVars = Object.fromEntries(Object.entries(allColors).map(([key, val]) => [`--${key}`, val]));

  addBase({
    ':root': newVars,
  });
}
