import { create } from '@storybook/theming';
import { VxuiProvider } from '../packages/provider/src';
const basicTheme = create({
  base: 'light',
  brandTitle: 'vzui',
  brandUrl: '',
});

export const parameters = {
  options: {
    showPanel: true,
    panelPosition: 'right',
    theme: basicTheme,
    hierarchyRootSeparator: /\|/,
    hierarchySeparator: /\//,
    sidebarAnimations: true,
    enableShortcuts: true,
    isToolshown: true,
    showResponsive: true,
    showResponsiveOptions: true,
    showStoriesPanel: true,
  },
  readMe: {
    codeTheme: 'duotone-sea',

    StoryPreview: ({ children }) => <div>{children}</div>,

    HeaderPreview: ({ children }) => <div>{children}</div>,

    FooterPreview: ({ children }) => <div>{children}</div>,

    DocPreview: ({ children }) => (
      <div style={{ padding: '1.6rem' }}>{children}</div>
    ),
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <VxuiProvider>
      <Story />
    </VxuiProvider>
  ),
];
