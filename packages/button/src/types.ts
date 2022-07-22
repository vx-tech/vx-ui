import {
  BorderProps,
  ColorProps,
  FontSizeProps,
  LayoutProps,
  ResponsiveValue,
  SpaceProps,
} from '@vx-ui/system';
import { ColorScheme as ButtonColorScheme } from '@vx-ui/theme';

export type ButtonSizes = 'xs' | 'sm' | 'md' | 'lg';

export type ButtonVariants =
  | 'link'
  | 'outline'
  | 'solid'
  | 'ghost'
  | 'unstyled';

export interface ButtonOptions {
  /**
   * The color scheme of the button.
   * @default "gray"
   * @type {ButtonColorScheme}
   *
   */

  colorScheme?: ButtonColorScheme;
  /**
   * Size of the button.
   * @default "md"
   *
   * **Syntax**: "xs" | "sm" | "md" | "lg"
   *
   * @example
   * ```jsx
   * <Button s="xs">Xtra-Small</Button>
   * ```
   *
   */
  s?: ResponsiveValue<ButtonSizes>;

  /**
   * Variant of the button.
   * @default "solid"
   * **Syntax**: `link | outline | solid | ghost> | unstyled`
   * : "" | "" | "" | "" | ""
   * @example
   * ```jsx
   * <Button variant="solid">Solid Button</Button>
   * ```
   *
   */
  variant?: ResponsiveValue<ButtonVariants>;

  /**
   * Show a spinner if the button is loading.
   * @default false
   * @example
   *
   */
  isLoading?: boolean;

  /**
   * if true, the button will take the full width of its parent container.
   * @default false
   *
   * @example
   * ```jsx
   * <Button isFullWidth>Full Width Button</Button>
   * ```
   */
  isFullWidth?: boolean;
  /**
   * leftIcon to be displayed on the left side of the button.
   * @default null
   * @example
   * ```jsx
   * <Button leftIcon={<Icon name="arrow-left" />}>Left Icon Button</Button>
   * ```
   */
  leftIcon?: React.ReactElement;
  /**
   * rightIcon to be displayed on the left side of the button.
   * @default null
   * @example
   * ```jsx
   * <Button rightIcon={<Icon name="arrow-left" />}>Left Icon Button</Button>
   * ```
   */
  rightIcon?: React.ReactElement;

  iconSpacing?: SpaceProps['marginRight'];

  isDisabled?: boolean;
  isActive?: boolean;

  loadingText?: string;

  spinner?: React.ReactElement;
  spinnerPlacement?: 'start' | 'end';
}

export type ButtonProps = ColorProps &
  BorderProps &
  FontSizeProps &
  LayoutProps &
  ButtonOptions &
  SpaceProps &
  React.ComponentPropsWithoutRef<'button'> & { children?: React.ReactNode };

export type ButtonContentProps = Pick<
  ButtonProps,
  'leftIcon' | 'rightIcon' | 'children' | 'iconSpacing'
>;

type Omitted =
  | 'leftIcon'
  | 'isFullWidth'
  | 'rightIcon'
  | 'loadingText'
  | 'iconSpacing';

export interface IconButtonProps extends Omit<ButtonProps, Omitted> {
  icon?: React.ReactElement;
  isRound?: boolean;
  'aria-label': string;
}
