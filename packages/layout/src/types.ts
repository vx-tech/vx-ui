import {
  AlignSelfProps,
  BorderProps,
  ColorProps,
  FlexBasisProps,
  FlexGrowProps,
  FlexProps,
  FlexShrinkProps,
  JustifySelfProps,
  LayoutProps,
  PositionProps,
  ShadowProps,
  SpaceProps,
  TypographyProps,
  FlexboxProps,
  ResponsiveValue,
} from '@vx-ui/system';

type BoxOptions = {
  w?: LayoutProps['width'];
  h?: LayoutProps['height'];
  maxW?: LayoutProps['maxWidth'];
  maxH?: LayoutProps['maxHeight'];
  basis?: FlexBasisProps['flexBasis'];
  grow?: FlexGrowProps['flexGrow'];
  shrink?: FlexShrinkProps['flexShrink'];
  marginStart?: SpaceProps['marginLeft'];
  marginEnd?: SpaceProps['marginLeft'];
};

export type BoxProps = SpaceProps &
  LayoutProps &
  TypographyProps &
  ColorProps &
  ShadowProps &
  FlexProps &
  JustifySelfProps &
  AlignSelfProps &
  PositionProps &
  BorderProps &
  BoxOptions &
  React.ComponentPropsWithoutRef<'div'> & {
    as?: React.ElementType;
  };

export interface FlexBaseProps extends Omit<BaseFlexProps, FlexOmitted> {}

type FlexOmitted = 'display';

type FlexOptions = {
  direction?: FlexboxProps['flexDirection'];
  align?: FlexboxProps['alignItems'];
  justify?: FlexboxProps['justifyContent'];
  wrap?: FlexboxProps['flexWrap'];
};

type BaseFlexProps = FlexOptions & BoxProps;

type SpaceOmitted = 'flex' | 'justifySelf' | 'alignSelf';

export interface SpacerProps extends Omit<BoxProps, SpaceOmitted> {}

// Stack Options | Props

export type StackVariants = 'row' | 'column' | 'row-reverse' | 'column-reverse';

export type StackOptions = {
  spacing: string;
  direction: ResponsiveValue<StackVariants>;
};

export type BaseStackProps = StackOptions & BaseFlexProps;

export interface StackProps
  extends Omit<BaseFlexProps, 'direction'>,
    Partial<StackOptions> {}

export interface HStackProps extends Omit<StackProps, 'direction'> {
  direction?: 'row' | 'row-reverse';
}

export interface VStackProps extends Omit<StackProps, 'direction'> {
  direction?: 'column' | 'column-reverse';
}
