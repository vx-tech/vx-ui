export const spacing = {
  xxs: '0.6rem',
  xs: '0.8rem',
  sm: '1rem',
  md: '1.2rem',
  lg: '1.5rem',
  xl: '2rem',
  xxl: '2.4rem',
  '3xl': '3rem',
  '4xl': '3.6rem',
}

export const spacingOptions = () => {
  const options = Object.keys(spacing)
  const labels = Object.entries(spacing).reduce((acc, [key, value]) => {
    //@ts-ignore
    acc[key] = `${key} (${value})`
    return acc
  }, {})

  return { options, labels }
}

export type Space = typeof spacing
