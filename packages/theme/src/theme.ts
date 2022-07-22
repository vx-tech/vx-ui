/* eslint-disable max-len */
import { spacing } from './spacing';
import { colors } from './colors';
import { typography } from './typography';

// export const defaultTheme = {
//   breakpoints: ['450px', '600px', '960px', '1280px', '1920px'],

//   fontSizes: typography.fontSizes,
//   fonts: typography.fonts,
//   fontWeights: typography.fontWeights,

//   letterSpacings: typography.letterSpacings,
//   lineHeights: typography.lineHeights,

//   colors,

//   space: spacing,
// };
export const theme = {
  breakpoints: [32, 48, 64],
  space: spacing,
  fontSizes: typography.fontSizes,

  fontWeights: typography.fontWeights,
  lineHeights: typography.lineHeights,
  letterSpacings: {
    normal: 'normal',
    tracked: '0.1em',
    tight: '-0.05em',
    mega: '0.25em',
  },
  fonts: typography.fonts,
  borders: [
    0,
    '1px solid',
    '2px solid',
    '4px solid',
    '8px solid',
    '16px solid',
    '32px solid',
  ],
  radii: [0, 2, 4, 16, 9999, '100%'],
  width: [16, 32, 64, 128, 256],
  heights: [16, 32, 64, 128, 256],
  maxWidths: [16, 32, 64, 128, 256, 512, 768, 1024, 1536],
  colors,
};

export type AppTheme = typeof theme;
