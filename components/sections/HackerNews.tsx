import getHnFrontPage from "@/lib/data/hn/getHnFrontPage";
import getNswNews from "@/lib/data/smh/getNswNews";
import getRelativeDateFromStr from "@/lib/utils/getRelativeDateFromStr";

const MAX_ITEMS = 30;

export default async function HackerNews() {
  const posts = (await getHnFrontPage()).slice(0, MAX_ITEMS);

  return (
    <section className="space-y-4">
      <h1 className="font-bold">Hacker News</h1>
      <div className="space-y-2 sm:space-y-0 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-8">
        {posts.map((post) => (
          <div key={post.link}>
            <h2>
              <a
                className="hover:text-yellow-700 hover:dark:text-yellow-500"
                href={post.link}
                target="_blank"
              >
                {post.title}
              </a>
            </h2>
            <span className="text-sm">
              <time dateTime={post.pubDate}>
                {getRelativeDateFromStr(post.pubDate!)}
              </time>
              <span className="mx-2">|</span>
              <a
                className="hover:text-yellow-700 hover:dark:text-yellow-500"
                href={post.hackerNewsLink}
                target="_blank"
              >
                Comments
              </a>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
