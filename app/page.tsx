import HackerNews from "@/components/sections/HackerNews";
import NewSouthWales from "@/components/sections/NewSouthWales";
import SmhFrontPage from "@/components/sections/SmhFrontPage";
import Summary from "@/components/sections/Summary";
import World from "@/components/sections/World";
import getFriendlyDate from "@/lib/utils/getFriendlyDate";

// Invalidate SSR cache every hour to keep digest up to date.
// Avoids unnecessary requests / OpenAI chat completions
// Cron job also revalidates it at the top of each hour.
// @see /api/refresh
export const revalidate = 3600;

export default function Home() {
  return (
    <div>
      <main className="p-4 sm:p-8 space-y-4 sm:space-y-8 dark:bg-black dark:text-gray-200">
        <p className="font-bold">Digest | {getFriendlyDate()}</p>
        <Summary />
        <NewSouthWales />
        <SmhFrontPage />
        <World />
        <HackerNews />
      </main>
    </div>
  );
}
