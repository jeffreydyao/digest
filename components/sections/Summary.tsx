import getSydneyWeather from "@/lib/data/bom/getSydneyWeather";
import getHnFrontPage from "@/lib/data/hn/getHnFrontPage";
import getNswNews from "@/lib/data/smh/getNswNews";
import getSmhFrontPageNews from "@/lib/data/smh/getSmhFrontPageNews";
import getWorldNews from "@/lib/data/smh/getWorldNews";
import openai from "@/lib/openai";

export default async function Summary() {
  const data = await Promise.all([
    await getSydneyWeather(),
    await getNswNews(),
    await getSmhFrontPageNews(),
    await getWorldNews(),
    await getHnFrontPage(),
  ]);

  const weatherHtml = data[0];
  const nswNews = data[1];
  const australiaNews = data[2].filter(
    (article) => !article.category.toLowerCase().includes("world")
  );
  const worldNews = data[3];
  const hnFrontPage = data[4].slice(0, 10);

  const weatherPrompt = `SYDNEY WEATHER HTML: ${weatherHtml}
You are a professional weathercaster. Summarise today's weather using this format: {emoji} {min}°/{max}°. {One-sentence brief summary of conditions, mentioning chance of rain}. {Two word description of wind strength}. Return a string.
`;
  const nswPrompt = `NEWS: ${JSON.stringify(nswNews)}
The RSS feed above covers news in NSW. Using two or less sentences, summarise the news headlines above using a friendly but professional tone. Don't mention the source. Include key events, details and numbers. Start with "In NSW, {x event}...". Return a string.`;
  const australiaPrompt = `NEWS: ${JSON.stringify(australiaNews)}
The RSS feed above covers news in Australia. Using two or less sentences, summarise the news headlines above using a friendly but professional tone. Don't mention the source. Include key events, details and numbers. Start with "In Australia, {x event}...". Return a string.`;
  const worldPrompt = `WORLD NEWS: ${JSON.stringify(worldNews)}
The RSS feed above covers news in the world. Using two or less sentences, summarise the news headlines above using a friendly but professional tone. Don't mention the source. Include key events, details and numbers. Start with "In world news, {x event}...". Return a string.`;
  const hnPrompt = `FEED: ${JSON.stringify(hnFrontPage)}
The RSS feed above shows the frontpage posts on Hacker News. Using two or less sentences, return the top post headlines with the most number of points using a friendly but professional posts, highlighting the most interesting ones. Don't include or discuss the author, number of points, comments or publication date. Use the format "The latest headlines on Hacker News include {headline 1}, {headline 2}, etc...". Return a string.`;

  const getCompletion = async (content: string) => {
    const completion = await openai.chat.completions.create({
      messages: [
        {
          role: "user",
          content,
        },
      ],
      model: "gpt-4o-mini",
    });

    return completion.choices[0].message.content;
  };

  const summaryItems = await Promise.all([
    await getCompletion(weatherPrompt),
    await getCompletion(nswPrompt),
    getCompletion(australiaPrompt),
    getCompletion(worldPrompt),
    getCompletion(hnPrompt),
  ]);

  return (
    <section className="border border-black dark:border-gray-500 p-2 sm:p-4 space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="font-bold">Summary</h1>
        <span className="text-sm text-gray-700 dark:text-gray-400">
          AI generated
        </span>
      </div>
      <ul className="list-disc list-inside indent-1 space-y-2">
        {summaryItems.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
