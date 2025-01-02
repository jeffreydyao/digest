import Parser from "rss-parser";

const rss = new Parser({
  customFields: {
    item: ["description", "category", "comments"],
  },
});

export default rss;
