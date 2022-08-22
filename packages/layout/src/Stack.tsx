import { variant } from '@vx-ui/system';
import * as React from 'react';
import styled from 'styled-components';
import { getValidChildren } from '@vx-ui/utils';
import { Flex } from './Flex';
import { stackVariants } from './helpers/stackVariants';
import { BaseStackProps, HStackProps, StackProps, VStackProps } from './types';

const BaseStack = styled(Flex)<BaseStackProps>`
  & > * {
    margin: 0;
  }
  ${(props) =>
    variant({
      prop: 'direction',
      variants: stackVariants(props.spacing),
    })}
`;

export const Stack = React.forwardRef<HTMLDivElement, StackProps>(
  (props, ref) => {
    const { direction = 'row', spacing = 'md', children, ...rest } = props;

    return (
      <BaseStack direction={direction} spacing={spacing} ref={ref} {...rest}>
        {getValidChildren(children)}
      </BaseStack>
    );
  },
);

export const HStack = React.forwardRef<HTMLDivElement, HStackProps>(
  (props, ref) => {
    const { children, ...rest } = props;

    return (
      <Stack direction='row' align='center' ref={ref} {...rest}>
        {getValidChildren(children)}
      </Stack>
    );
  },
);

export const VStack = React.forwardRef<HTMLDivElement, VStackProps>(
  (props, ref) => {
    const { children, ...rest } = props;

    return (
      <Stack direction='column' align='center' ref={ref} {...rest}>
        {getValidChildren(children)}
      </Stack>
    );
  },
);
