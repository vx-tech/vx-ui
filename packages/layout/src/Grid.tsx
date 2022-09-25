import { system } from '@vx-ui/system';
import { filterUndefined } from '@vx-ui/utils';
import * as React from 'react';
import styled from 'styled-components';
import { Box } from './Box';
import { countToColumns, spanFunc, widthToColumns } from './helpers';
import {
  BaseGridItemProps,
  BaseGridProps,
  GridItemProps,
  GridProps,
  SimpleGridProps,
} from './types';

const BaseGrid = styled(Box)<BaseGridProps>`
  display: grid;
  ${system({
    templateAreas: {
      property: 'gridTemplateAreas',
    },
    templateColumns: {
      property: 'gridTemplateColumns',
    },
    templateRows: {
      property: 'gridTemplateRows',
    },
    rowGap: {
      property: 'gridRowGap',
      scale: 'space',
    },
    columnGap: {
      property: 'gridColumnGap',
      scale: 'space',
    },
    gap: {
      property: 'gridGap',
      scale: 'space',
    },
    autoFlow: {
      property: 'gridAutoFlow',
    },
    autoRows: {
      property: 'gridAutoRows',
    },
    autoColumns: {
      property: 'gridAutoColumns',
    },
    area: {
      property: 'gridArea',
    },
    column: {
      property: 'gridColumn',
    },
    row: {
      property: 'gridRow',
    },
    align: {
      property: 'alignItems',
    },
    justify: {
      property: 'justifyItems',
    },
    alignContent: true,
    justifyContent: true,
  })}
`;

const BaseGridItem = styled(Box)<BaseGridItemProps>`
  ${system({
    colSpan: {
      property: 'gridColumn',
    },
    rowSpan: {
      property: 'gridRow',
    },
    colStart: {
      property: 'gridColumnStart',
    },
    colEnd: {
      property: 'gridColumnEnd',
    },
    rowStart: {
      property: 'gridRowStart',
    },
    rowEnd: {
      property: 'gridRowEnd',
    },
    alignSelf: true,
    justifySelf: true,
  })}
`;

export const GridItem = React.forwardRef<HTMLDivElement, GridItemProps>(
  (props, ref) => {
    const {
      colSpan,
      rowSpan,
      colStart,
      colEnd,
      rowStart,
      rowEnd,
      children,
      ...rest
    } = props;

    const gridItemProps = filterUndefined({
      colSpan: spanFunc(colSpan),
      rowSpan: spanFunc(rowSpan),
      colStart,
      colEnd,
      rowStart,
      rowEnd,
    });

    return (
      <BaseGridItem ref={ref} {...gridItemProps} {...rest}>
        {children}
      </BaseGridItem>
    );
  },
);

export const Grid = React.forwardRef<HTMLDivElement, GridProps>(
  (props, ref) => {
    const { children, ...rest } = props;

    return (
      <BaseGrid ref={ref} {...rest}>
        {children}
      </BaseGrid>
    );
  },
);

export const SimpleGrid = React.forwardRef<HTMLDivElement, SimpleGridProps>(
  (props, ref) => {
    const { columns, spacingX, spacingY, spacing, minChildWidth, ...rest } =
      props;

    const templateColumns = minChildWidth
      ? widthToColumns(minChildWidth)
      : countToColumns(columns);

    return (
      <Grid
        ref={ref}
        gap={spacing}
        columnGap={spacingX}
        rowGap={spacingY}
        templateColumns={templateColumns}
        {...rest}
      />
    );
  },
);
