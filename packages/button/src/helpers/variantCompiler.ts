import { ColorScheme as ButtonColorScheme } from '@vx-ui/theme'

export const variantGhost = (colorScheme: ButtonColorScheme) => {
  if (colorScheme === 'gray') {
    return {
      color: 'inherit',
      '&:hover': {
        bg: 'gray100',
      },
      '&:active': {
        bg: 'gray200',
      },
    }
  }
  return {
    color: `${colorScheme}600`,
    bg: 'transparent',
    '&:hover': {
      bg: `${colorScheme}50`,
    },
    '&:active': {
      bg: `${colorScheme}100`,
    },
  }
}

export const variantOutline = (colorScheme: ButtonColorScheme) => {
  return {
    border: '1px solid',
    borderColor: colorScheme === 'gray' ? 'gray200' : 'currentColor',
    ...variantGhost(colorScheme),
  }
}

export const variantSolid = (colorScheme: ButtonColorScheme) => {
  const accessibleColorMap = {
    yellow: {
      background: 'yellow400',
      componentColor: 'black',
      hoverBg: 'yellow500',
      activeBg: 'yellow600',
    },
    cyan: {
      background: 'cyan400',
      componentColor: 'black',
      hoverBg: 'cyan500',
      activeBg: 'cyan600',
    },
  }

  if (colorScheme === 'gray') {
    return {
      bg: 'gray100',
      '&:hover': {
        bg: 'gray200',
        '&:disabled': { bg: 'gray100' },
      },
      '&:active': { bg: 'gray300' },
    }
  }
  const {
    background = `${colorScheme}400`,
    componentColor = 'white',
    hoverBg = `${colorScheme}600`,
    activeBg = `${colorScheme}700`,
    //@ts-ignore
  } = accessibleColorMap[colorScheme] || {}

  return {
    bg: background,
    color: componentColor,
    '&:hover': {
      bg: hoverBg,
      '&:disabled': { bg: background },
    },
    '&:active': {
      bg: activeBg,
    },
  }
}

export const variantLink = (colorScheme: ButtonColorScheme) => {
  return {
    padding: 0,
    background: 'none',
    height: 'auto',
    lineHeight: 'normal',
    verticalAlign: 'baseline',
    color: `${colorScheme}500`,
    '&:hover': {
      textDecoration: 'underline',
      '&:disabled': {
        textDecoration: 'none',
      },
    },
    '&:active': {
      color: `${colorScheme}700`,
    },
  }
}

export const variantUnStyled = () => {
  return {
    background: 'none',
    color: 'inherit',
    display: 'inline',
    lineHeight: 'inherit',
    margin: 0,
    p: 0,
  }
}

export const variantSizes = () => {
  return {
    lg: {
      height: '3rem',
      minWidth: '3rem',
      fontSize: 'lg',
      paddingLeft: 'lg',
      paddingRight: 'lg',
    },
    md: {
      height: '2.5rem',
      minWidth: '2.5rem',
      fontSize: 'md',
      paddingLeft: 'md',
      paddingRight: 'md',
    },
    sm: {
      height: '2rem',
      minWidth: '2rem',
      fontSize: 'sm',
      paddingLeft: 'sm',
      paddingRight: 'sm',
    },
    xs: {
      height: '1.5rem',
      minWidth: '1.5rem',
      fontSize: 'xs',
      paddingLeft: 'xs',
      paddingRight: 'xs',
    },
  }
}
