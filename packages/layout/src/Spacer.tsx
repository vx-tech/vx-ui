import * as React from 'react';
import { Box } from './Box';
import { SpacerProps } from './types';

export const Spacer = React.forwardRef<HTMLDivElement, SpacerProps>(
  (props, ref) => {
    const { children, ...rest } = props;
    return (
      <Box
        ref={ref}
        flex='1'
        justifySelf='stretch'
        alignSelf='stretch'
        {...rest}
      >
        {children}
      </Box>
    );
  },
);
