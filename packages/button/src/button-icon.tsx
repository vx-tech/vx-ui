import { space, SpaceProps } from '@vx-ui/system';
import * as React from 'react';
import styled from 'styled-components';

interface ButtonIconProps extends SpaceProps {
  children?: React.ReactNode;
}

const BaseSpan = styled.span<ButtonIconProps>`
  ${space}
`;

export function ButtonIcon(props: ButtonIconProps) {
  const { children, ...rest } = props;

  const componentChildren = React.isValidElement(children)
    ? React.cloneElement(children, {
        'aria-hidden': true,
        focusable: false,
      })
    : children;

  return <BaseSpan {...rest}>{componentChildren}</BaseSpan>;
}
