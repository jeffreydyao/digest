import rss from "@/lib/rss";

const SMH_FRONT_PAGE_NEWS = "https://www.smh.com.au/rss/feed.xml";

export default async () => {
  const feed = await rss.parseURL(SMH_FRONT_PAGE_NEWS);

  const items = feed.items.map((item) => {
    return {
      title: item.title,
      description: item.description as string,
      category: item.category as string,
      pubDate: item.pubDate,
      link: item.link,
    };
  });

  return items;
};
