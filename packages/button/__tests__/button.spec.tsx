import * as React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render, screen } from '@vx-ui/testing-utils';
import { Button } from '../src/button';

describe('@vx-ui/button', () => {
  it('shows spinner if isLoading', () => {
    const { getByTestId } = render(
      <Button data-testid='btn' isLoading>
        Email
      </Button>,
    );
    expect(getByTestId('btn')).toHaveAttribute('data-loading');

    // children text is hidden
    expect(screen.getByText('Email')).not.toBeVisible();

    // "Loading..." visually hidden label shown
    screen.getByText('Loading...');
  });
});
