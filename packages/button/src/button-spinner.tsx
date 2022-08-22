import * as React from 'react';
import { Box, BoxProps } from '@vx-ui/layout';

interface ButtonSpinnerProps extends BoxProps {
  label?: string;
  placement?: 'start' | 'end';
}

export function ButtonSpinner(props: ButtonSpinnerProps) {
  const { label, placement, children = <p>Spinner</p>, ...rest } = props;

  const marginProp = placement === 'start' ? 'marginRight' : 'marginLeft';

  const spinnerStyles = {
    display: 'flex',
    fontSize: '1em',
    lineHeight: 'normal',
    alignItems: 'center',
    position: label ? 'relative' : 'absolute',
    [marginProp]: label ? '0.5rem' : 0,
  };

  return (
    <Box {...spinnerStyles} {...rest}>
      {children}
    </Box>
  );
}
