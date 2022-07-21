import * as React from 'react'

interface ButtonSpinnerProps {
  label?: string
  placement?: 'start' | 'end'
  children?: React.ReactNode
}

export const ButtonSpinner = (props: ButtonSpinnerProps) => {
  const { label, placement, children = <p>Spinner</p>, ...rest } = props

  const marginProp = placement === 'start' ? 'marginRight' : 'marginLeft'

  const spinnerStyles = {
    display: 'flex',
    fontSize: '1em',
    lineHeight: 'normal',
    alignItems: 'center',
    position: label ? 'relative' : 'absolute',
    [marginProp]: label ? '0.5rem' : 0,
  }

  return <div>{children}</div>
}
