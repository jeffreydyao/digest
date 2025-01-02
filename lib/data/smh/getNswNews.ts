import rss from "@/lib/rss";

const SMH_NSW_NEWS_FEED_URL = "https://www.smh.com.au/rss/national/nsw.xml";

export default async () => {
  const feed = await rss.parseURL(SMH_NSW_NEWS_FEED_URL);

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
