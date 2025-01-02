import rss from "@/lib/rss";

const SMH_WORLD_NEWS_FEED_URL = "https://www.smh.com.au/rss/world.xml";

export default async () => {
  const feed = await rss.parseURL(SMH_WORLD_NEWS_FEED_URL);

  const items = feed.items.map((item) => {
    return {
      title: item.title,
      description: item.description as string,
      pubDate: item.pubDate,
      link: item.link,
    };
  });

  return items;
};
