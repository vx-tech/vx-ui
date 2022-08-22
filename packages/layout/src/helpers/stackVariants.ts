const selector = '& > *:not(style) ~ *:not(style)';

export const stackVariants = (spacing: string) => ({
  row: {
    flexDirection: 'row',
    [selector]: {
      margin: 0,
      marginLeft: spacing,
    },
  },
  column: {
    flexDirection: 'column',
    [selector]: {
      margin: 0,
      marginTop: spacing,
    },
  },
  'row-reverse': {
    flexDirection: 'row-reverse',
    [selector]: {
      margin: 0,
      marginRight: spacing,
    },
  },
  'column-reverse': {
    flexDirection: 'column-reverse',
    [selector]: {
      margin: 0,
      marginBottom: spacing,
    },
  },
});
