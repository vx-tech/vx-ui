import { mapResponsive, isNumber, isNull } from '@vx-ui/utils';
import { GridItemSpanValue } from '../types';

export const spanFunc = (span?: GridItemSpanValue) => {
  return mapResponsive(span, (value: any) => {
    if (!value) return null;

    return value === 'auto' ? 'auto' : `span ${value}/span ${value}`;
  });
};

export const toPx = (value: string | number) => {
  return isNumber(value) ? `${value}px` : value;
};

export const widthToColumns = (width: any) => {
  return mapResponsive(width, (value: any) =>
    isNull(value) ? null : `repeat(auto-fit, minmax(${toPx(value)}, 1fr))`,
  );
};

export const countToColumns = (count: any) => {
  return mapResponsive(count, (value: any) =>
    isNull(value) ? null : `repeat(${value}, minmax(0, 1fr))`,
  );
};
