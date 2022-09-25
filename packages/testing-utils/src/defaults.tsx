import * as React from 'react';
import { VxuiProvider } from '@vx-ui/provider';
import { theme } from '@vx-ui/theme';
import '@testing-library/jest-dom/extend-expect';
import { render as rtlRender, RenderOptions } from '@testing-library/react';
import { toHaveNoViolations } from 'jest-axe';
import userEvent from '@testing-library/user-event';

expect.extend(toHaveNoViolations);

export interface ProviderRenderOptions extends RenderOptions {
  withProvider?: boolean;
}

export function render(
  ui: React.ReactElement,
  { withProvider, ...options }: ProviderRenderOptions = {
    withProvider: true,
  },
): ReturnType<typeof rtlRender> & { user: ReturnType<typeof userEvent.setup> } {
  const { wrapper: Wrapper = React.Fragment, ...rtlOptions } = options;
  const user = userEvent.setup();

  const WithUiProvider = withProvider ? VxuiProvider : React.Fragment;

  const props = withProvider ? { theme } : {};

  const result = rtlRender(
    <WithUiProvider {...props}>
      <Wrapper>{ui}</Wrapper>
    </WithUiProvider>,
    rtlOptions,
  );
  return { user, ...result };
}
