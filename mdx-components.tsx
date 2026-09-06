import { useMDXComponents as getThemeComponents } from 'nextra-theme-docs';
import HoverPreviewLink from './components/HoverPreviewLink';
import HomeHero from './components/HomeHero';

export function useMDXComponents(components: any) {
  return {
    ...getThemeComponents(components),
    a: HoverPreviewLink,
    HomeHero,
  };
}