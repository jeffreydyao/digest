import rss from "@/lib/rss";

const HN_FRONT_PAGE_FEED_URL = "https://news.ycombinator.com/rss";

export default async () => {
  const feed = await rss.parseURL(HN_FRONT_PAGE_FEED_URL);

  const items = feed.items.map((item) => {
    return {
      title: item.title,
      description: item.description as string,
      pubDate: item.pubDate,
      link: item.link,
      hackerNewsLink: item.comments,
    };
  });

  return items;
};
