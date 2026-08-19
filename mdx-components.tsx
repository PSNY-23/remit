import { useMDXComponents as getThemeComponents } from 'nextra-theme-docs';
import HoverPreviewLink from './components/HoverPreviewLink';

const themeComponents = getThemeComponents();

export function useMDXComponents(components: any) {
  return {
    ...themeComponents,
    a: HoverPreviewLink,
    ...components,
  };
}