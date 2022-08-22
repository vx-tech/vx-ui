import { system } from '@vx-ui/system';
import * as React from 'react';
import styled from 'styled-components';
import { Box } from './Box';
import { FlexBaseProps } from './types';

const BaseFlex = styled(Box)`
  display: flex;
  ${system({
    direction: {
      property: 'flexDirection',
    },
    align: {
      property: 'alignItems',
    },
    justify: {
      property: 'justifyContent',
    },
    wrap: {
      property: 'flexWrap',
    },
  })}
`;

export const Flex = React.forwardRef<HTMLDivElement, FlexBaseProps>(
  (props, ref) => {
    const { direction = 'row', children, ...rest } = props;
    return (
      <BaseFlex ref={ref} direction={direction} {...rest}>
        {children}
      </BaseFlex>
    );
  },
);
