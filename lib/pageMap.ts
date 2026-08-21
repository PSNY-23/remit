import { getPageMap } from 'nextra/page-map';
import prisma from '@/lib/prisma';
import type { PageMapItem } from 'nextra';

export async function getEnrichedPageMap(): Promise<PageMapItem[]> {
  const rawPageMap = await getPageMap();

  try {
    const othersArticles = await prisma.article.findMany({
      where: { topicPath: 'others' },
      select: { title: true, slug: true, order: true },
      orderBy: [{ order: 'asc' }, { createdAt: 'asc' }],
    });

    if (!othersArticles.length) {
      return rawPageMap;
    }

    const pageMap: PageMapItem[] = rawPageMap.map((item: any) => {
      if (
        item &&
        typeof item === 'object' &&
        'name' in item &&
        item.name === 'others' &&
        Array.isArray(item.children)
      ) {
        const metaItem = item.children.find(
          (c: any) => c && typeof c === 'object' && 'data' in c
        );

        const newMetaData: Record<string, any> = {
          ...(metaItem?.data || {}),
          new: { display: 'hidden' },
        };

        for (const article of othersArticles) {
          newMetaData[article.slug] = {
            title: article.title,
          };
        }

        const existingChildrenWithoutMeta = item.children.filter(
          (c: any) => !(c && typeof c === 'object' && 'data' in c)
        );
        const newChildren: any[] = [
          { data: newMetaData },
          ...existingChildrenWithoutMeta,
        ];

        for (const article of othersArticles) {
          const exists = existingChildrenWithoutMeta.some(
            (c: any) => c && typeof c === 'object' && 'name' in c && c.name === article.slug
          );

          if (!exists) {
            newChildren.push({
              name: article.slug,
              route: `/others/${article.slug}`,
              title: article.title,
              frontMatter: {
                title: article.title,
                sidebarTitle: article.title,
                filePath: 'app/others/[slug]/page.tsx',
                timestamp: 1787293711767,
              },
            });
          }
        }

        return {
          ...item,
          children: newChildren,
        };
      }
      return item;
    });

    return pageMap;
  } catch (error) {
    console.error('[getEnrichedPageMap] Error enriching pageMap from database:', error);
    return rawPageMap;
  }
}
