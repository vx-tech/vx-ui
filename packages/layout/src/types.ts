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
  GridProps as StyledGridProps,
  ResponsiveValue,
  AlignContentProps,
  AlignItemsProps,
  JustifyContentProps,
  JustifyItemsProps,
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

// GRID Options | Props

export type GridOmitted = 'display';

export type GridOptions = {
  templateColumns?: StyledGridProps['gridTemplateColumns'];
  rowGap?: StyledGridProps['gridRowGap'];
  columnGap?: StyledGridProps['gridColumnGap'];
  gap?: StyledGridProps['gridGap'];
  autoFlow?: StyledGridProps['gridAutoFlow'];
  autoRows?: StyledGridProps['gridAutoRows'];
  autoColumns?: StyledGridProps['gridAutoColumns'];
  templateRows?: StyledGridProps['gridTemplateRows'];
  templateAreas?: StyledGridProps['gridTemplateAreas'];
  area?: StyledGridProps['gridArea'];
  column?: StyledGridProps['gridColumn'];
  row?: StyledGridProps['gridRow'];
  align?: AlignItemsProps['alignItems'];
  justify?: JustifyItemsProps['justifyItems'];
};

export type BaseGridProps = GridOptions &
  BoxProps &
  AlignContentProps &
  JustifyContentProps;

export interface GridProps extends Omit<BaseGridProps, GridOmitted> {}

export type GridItemSpanValue = ResponsiveValue<number | 'auto'>;

export type GridItemOptions = {
  colSpan?: GridItemSpanValue;
  colStart?: GridItemSpanValue;
  colEnd?: GridItemSpanValue;
  rowStart?: GridItemSpanValue;
  rowEnd?: GridItemSpanValue;
  rowSpan?: GridItemSpanValue;
};

export interface GridItemProps extends BaseGridItemProps {}

export type BaseGridItemProps = GridItemOptions &
  BoxProps &
  AlignSelfProps &
  JustifySelfProps;

export interface SimpleGridOptions {
  minChildWidth?: GridProps['minWidth'];
  columns?: ResponsiveValue<number>;
  spacing?: GridProps['gap'];
  spacingX?: GridProps['gap'];
  spacingY?: GridProps['gap'];
}

export interface SimpleGridProps extends GridProps, SimpleGridOptions {}
