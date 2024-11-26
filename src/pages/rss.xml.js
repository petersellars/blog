import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context) {
  return rss({
    stylesheet: '/rss/pretty-feed-v3.xsl',
    title: 'Petes Blog',
    description: 'My Personal Blog',
    site: context.site,
    trailingSlash: false,
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    customData: `<language>en-nz</language>`,
  });
}