import getSmhFrontPageNews from "@/lib/data/smh/getSmhFrontPageNews";
import getRelativeDateFromStr from "@/lib/utils/getRelativeDateFromStr";
import groupBy from "@/lib/utils/groupBy";
import sortFrontPageCategories from "@/lib/utils/sortFrontPageCategories";

export default async function SmhFrontPage() {
  const news = await getSmhFrontPageNews();

  const newsByCategory = groupBy(news, "category");
  const sortedNews = sortFrontPageCategories(newsByCategory);

  return (
    <section className="space-y-4">
      <h1 className="font-bold">Australia</h1>
      <div className="!space-y-4 sm:!space-y-0 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-8">
        {Array.from(sortedNews).map(([category, articles]) => (
          <section className="space-y-2 !mt-0" key={category}>
            <h2 className="underline font-bold">{category}</h2>
            {articles.map((article) => (
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
                <time dateTime={article.pubDate!} className="text-sm">
                  {getRelativeDateFromStr(article.pubDate!)}
                </time>
              </div>
            ))}
          </section>
        ))}
      </div>
    </section>
  );
}
