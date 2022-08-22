import {
  border,
  color,
  compose,
  fontSize,
  layout,
  space,
  variant as variantTheme,
} from '@vx-ui/system';
import * as React from 'react';
import styled from 'styled-components';
import { ButtonIcon } from './button-icon';
import { ButtonSpinner } from './button-spinner';
import {
  variantGhost,
  variantLink,
  variantOutline,
  variantSizes,
  variantSolid,
  variantUnStyled,
} from './helpers';
import { ButtonContentProps, ButtonProps } from './types';

export const BaseButton = styled.button<ButtonProps>`
  border: none;
  outline: none;
  font-family: inherit;
  padding: 0;
  cursor: pointer;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  align-self: flex-start;

  padding: 0.25em 0.75em;
  font-weight: 500;

  text-align: center;
  line-height: 1.1;
  transition: 220ms all ease-in-out;

  border-radius: 0.375rem;

  width: ${({ isFullWidth }) => (isFullWidth ? '100%' : 'auto')};

  &:hover {
    &:disabled {
      background: initial;
    }
  }

  &:focus {
    box-shadow: outline;
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
    box-shadow: none;
  }

  ${({ colorScheme = 'gray' }) =>
    variantTheme({
      prop: 'variant',
      variants: {
        link: variantLink(colorScheme),
        outline: variantOutline(colorScheme),
        solid: variantSolid(colorScheme),
        ghost: variantGhost(colorScheme),
        unstyled: variantUnStyled(),
      },
    })}

  ${variantTheme({
    prop: 's',
    variants: variantSizes(),
  })}
  

  ${compose(color, border, layout, space, fontSize)}
`;

const ButtonContent = (props: ButtonContentProps) => {
  const { leftIcon, rightIcon, children, iconSpacing } = props;
  return (
    <React.Fragment>
      {leftIcon && <ButtonIcon mr={iconSpacing}>{leftIcon}</ButtonIcon>}
      {children}
      {rightIcon && <ButtonIcon ml={iconSpacing}>{rightIcon}</ButtonIcon>}
    </React.Fragment>
  );
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const {
      children,
      colorScheme = 'gray',
      variant = 'solid',
      s = 'md',
      loadingText,
      isLoading = false,
      isDisabled = false,

      spinnerPlacement = 'start',
      spinner,

      rightIcon,
      leftIcon,
      iconSpacing = '0.5rem',

      ...rest
    } = props;

    const contentProps = { rightIcon, leftIcon, iconSpacing, children };

    return (
      <BaseButton
        ref={ref}
        disabled={isDisabled || isLoading}
        colorScheme={colorScheme}
        variant={variant}
        s={s}
        {...rest}
      >
        {isLoading && spinnerPlacement === 'start' && (
          <ButtonSpinner label={loadingText} placement='start'>
            {spinner}
          </ButtonSpinner>
        )}

        {isLoading ? (
          loadingText || (
            <span style={{ opacity: 0 }}>
              <ButtonContent {...contentProps} />
            </span>
          )
        ) : (
          <ButtonContent {...contentProps} />
        )}

        {isLoading && spinnerPlacement === 'end' && (
          <ButtonSpinner label={loadingText} placement='end'>
            {spinner}
          </ButtonSpinner>
        )}
      </BaseButton>
    );
  },
);
