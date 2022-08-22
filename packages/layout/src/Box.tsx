import {
  alignSelf,
  border,
  color,
  compose,
  flex,
  justifySelf,
  layout,
  position,
  shadow,
  space,
  system,
  typography,
  sysProps,
} from '@vx-ui/system';
import styled from 'styled-components';
import { BoxProps } from './types';

// const shouldForwardProp = createShouldForwardProp([
//   ...props,
//   'd',
//   'x'
// ])

export const Box = styled.div.withConfig({
  shouldForwardProp: (prop, defaultValidatorFn) =>
    !sysProps.includes(prop) && defaultValidatorFn(prop),
})<BoxProps>`
  box-sizing: border-box;
  ${compose(
    space,
    layout,
    typography,
    color,
    shadow,
    flex,
    justifySelf,
    alignSelf,
    position,
    border,
  )}
  ${system({
    w: {
      property: 'width',
    },
    h: {
      property: 'height',
    },
    maxW: {
      property: 'maxWidth',
    },
    maxH: {
      property: 'maxHeight',
    },
    basis: {
      property: 'flexBasis',
    },
    grow: {
      property: 'flexGrow',
    },
    shrink: {
      property: 'flexShrink',
    },
    marginStart: {
      property: 'marginInlineStart',
      scale: 'space',
    },
    marginEnd: {
      property: 'marginInlineEnd',
      scale: 'space',
    },
  })}
`;
