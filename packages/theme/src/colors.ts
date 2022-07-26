export const colors = {
  transparent: 'transparent',
  current: 'currentColor',
  black: '#000000',
  white: '#FFFFFF',

  whiteAlpha50: 'rgba(255, 255, 255, 0.04)',
  whiteAlpha100: 'rgba(255, 255, 255, 0.06)',
  whiteAlpha200: 'rgba(255, 255, 255, 0.08)',
  whiteAlpha300: 'rgba(255, 255, 255, 0.16)',
  whiteAlpha400: 'rgba(255, 255, 255, 0.24)',
  whiteAlpha500: 'rgba(255, 255, 255, 0.36)',
  whiteAlpha600: 'rgba(255, 255, 255, 0.48)',
  whiteAlpha700: 'rgba(255, 255, 255, 0.64)',
  whiteAlpha800: 'rgba(255, 255, 255, 0.80)',
  whiteAlpha900: 'rgba(255, 255, 255, 0.92)',

  blackAlpha50: 'rgba(0, 0, 0, 0.04)',
  blackAlpha100: 'rgba(0, 0, 0, 0.06)',
  blackAlpha200: 'rgba(0, 0, 0, 0.08)',
  blackAlpha300: 'rgba(0, 0, 0, 0.16)',
  blackAlpha400: 'rgba(0, 0, 0, 0.24)',
  blackAlpha500: 'rgba(0, 0, 0, 0.36)',
  blackAlpha600: 'rgba(0, 0, 0, 0.48)',
  blackAlpha700: 'rgba(0, 0, 0, 0.64)',
  blackAlpha800: 'rgba(0, 0, 0, 0.80)',
  blackAlpha900: 'rgba(0, 0, 0, 0.92)',

  gray50: '#F7FAFC',
  gray100: '#EDF2F7',
  gray200: '#E2E8F0',
  gray300: '#CBD5E0',
  gray400: '#A0AEC0',
  gray500: '#718096',
  gray600: '#4A5568',
  gray700: '#2D3748',
  gray800: '#1A202C',
  gray900: '#171923',

  red50: '#FFF5F5',
  red100: '#FED7D7',
  red200: '#FEB2B2',
  red300: '#FC8181',
  red400: '#F56565',
  red500: '#E53E3E',
  red600: '#C53030',
  red700: '#9B2C2C',
  red800: '#822727',
  red900: '#63171B',

  orange50: '#FFFAF0',
  orange100: '#FEEBC8',
  orange200: '#FBD38D',
  orange300: '#F6AD55',
  orange400: '#ED8936',
  orange500: '#DD6B20',
  orange600: '#C05621',
  orange700: '#9C4221',
  orange800: '#7B341E',
  orange900: '#652B19',

  yellow50: '#FFFFF0',
  yellow100: '#FEFCBF',
  yellow200: '#FAF089',
  yellow300: '#F6E05E',
  yellow400: '#ECC94B',
  yellow500: '#D69E2E',
  yellow600: '#B7791F',
  yellow700: '#975A16',
  yellow800: '#744210',
  yellow900: '#5F370E',

  green50: '#F0FFF4',
  green100: '#C6F6D5',
  green200: '#9AE6B4',
  green300: '#68D391',
  green400: '#48BB78',
  green500: '#38A169',
  green600: '#2F855A',
  green700: '#276749',
  green800: '#22543D',
  green900: '#1C4532',

  teal50: '#E6FFFA',
  teal100: '#B2F5EA',
  teal200: '#81E6D9',
  teal300: '#4FD1C5',
  teal400: '#38B2AC',
  teal500: '#319795',
  teal600: '#2C7A7B',
  teal700: '#285E61',
  teal800: '#234E52',
  teal900: '#1D4044',

  blue50: '#ebf8ff',
  blue100: '#bee3f8',
  blue200: '#90cdf4',
  blue300: '#63b3ed',
  blue400: '#4299e1',
  blue500: '#3182ce',
  blue600: '#2b6cb0',
  blue700: '#2c5282',
  blue800: '#2a4365',
  blue900: '#1A365D',

  cyan50: '#EDFDFD',
  cyan100: '#C4F1F9',
  cyan200: '#9DECF9',
  cyan300: '#76E4F7',
  cyan400: '#0BC5EA',
  cyan500: '#00B5D8',
  cyan600: '#00A3C4',
  cyan700: '#0987A0',
  cyan800: '#086F83',
  cyan900: '#065666',
}

export type Colors = typeof colors

export type ColorScheme =
  | 'whiteAlpha'
  | 'blackAlpha'
  | 'gray'
  | 'red'
  | 'orange'
  | 'yellow'
  | 'green'
  | 'teal'
  | 'blue'
  | 'cyan'

export const colorSchemeOptions = [
  'whiteAlpha',
  'blackAlpha',
  'gray',
  'red',
  'orange',
  'yellow',
  'green',
  'teal',
  'blue',
  'cyan',
]
