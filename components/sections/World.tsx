import getWorldNews from "@/lib/data/smh/getWorldNews";
import getRelativeDateFromStr from "@/lib/utils/getRelativeDateFromStr";

const MAX_ITEMS = 10;

export default async function World() {
  const news = (await getWorldNews()).slice(0, MAX_ITEMS);

  return (
    <section className="space-y-4">
      <h1 className="font-bold">World</h1>
      <div className="space-y-2 sm:space-y-0 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-8">
        {news.map((article) => (
          <div key={article.link}>
            <h2>
              <a
                className="hover:text-yellow-700 hover:dark:text-yellow-500"
                href={article.link}
                target="_blank"
              >
                {article.title}
              </a>
            </h2>
            <time dateTime={article.pubDate} className="text-sm">
              {getRelativeDateFromStr(article.pubDate!)}
            </time>
          </div>
        ))}
      </div>
    </section>
  );
}
