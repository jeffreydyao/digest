import { parse } from "node-html-parser";

const SYDNEY_WEATHER_PAGE_URL =
  "http://www.bom.gov.au/nsw/forecasts/sydney.shtml";

export default async () => {
  const res = await fetch(SYDNEY_WEATHER_PAGE_URL);
  const html = await res.text();

  // Extract main content of page, which contains weather.
  const doc = parse(html);
  const contentDiv = doc.getElementById("content");

  return contentDiv?.innerHTML;
};
