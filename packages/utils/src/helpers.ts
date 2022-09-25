import * as React from 'react';
import { Dict } from './types';
import { objectKeys } from './objects';
import { isArray, isObject } from './validateTypes';

export const getValidChildren = (children: React.ReactNode) => {
  return React.Children.toArray(children).filter((child) =>
    React.isValidElement(child),
  ) as React.ReactElement[];
};

export const canUseDOM = (): boolean => {
  return !!(
    typeof window !== 'undefined' &&
    window.document &&
    window.document.createElement
  );
};

export const isBrowser = canUseDOM();

export const mapResponsive = (prop: any, mapper: (val: any) => any) => {
  if (isArray(prop)) {
    return prop.map((item) => {
      if (item === null) {
        return null;
      }

      return mapper(item);
    });
  }

  if (isObject(prop)) {
    return objectKeys(prop).reduce((result: Dict, key) => {
      return { ...result, [key]: mapper(prop[key]) };
    }, {});
  }

  if (prop !== null) {
    return mapper(prop);
  }

  return null;
};
