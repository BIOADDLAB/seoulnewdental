import type { MetadataRoute } from 'next';
import { SITE_PAGES, SITE_URL } from '@/constants/site';

export default function sitemap(): MetadataRoute.Sitemap {
    return SITE_PAGES.map((page) => ({
        url: `${SITE_URL}${page.path === '/' ? '' : page.path}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: page.priority,
    }));
}
