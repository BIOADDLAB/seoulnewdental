import { SITE_DESCRIPTION, SITE_NAME, SITE_PAGES, SITE_URL } from '@/constants/site';

function escapeXml(value: string) {
    return value
        .replaceAll('&', '&amp;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')
        .replaceAll('"', '&quot;')
        .replaceAll("'", '&apos;');
}

function toAbsoluteUrl(path: string) {
    return path === '/' ? `${SITE_URL}/` : `${SITE_URL}${path}`;
}

export function GET() {
    const lastBuildDate = new Date().toUTCString();
    const items = SITE_PAGES.map(
        (page) => `
    <item>
      <title>${escapeXml(page.title)}</title>
      <link>${toAbsoluteUrl(page.path)}</link>
      <description>${escapeXml(page.description)}</description>
      <guid isPermaLink="true">${toAbsoluteUrl(page.path)}</guid>
      <pubDate>${lastBuildDate}</pubDate>
    </item>`,
    ).join('');

    const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${escapeXml(SITE_NAME)}</title>
    <link>${SITE_URL}/</link>
    <description>${escapeXml(SITE_DESCRIPTION)}</description>
    <language>ko</language>
    <lastBuildDate>${lastBuildDate}</lastBuildDate>${items}
  </channel>
</rss>`;

    return new Response(feed, {
        headers: {
            'Content-Type': 'application/rss+xml; charset=utf-8',
        },
    });
}
