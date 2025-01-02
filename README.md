# Digest

_A statically generated summary of the latest news and weather in Sydney + Hacker News frontpage posts, refreshed every hour._

![Screenshot of Digest](/screenshot.png)

## Why does this exist?

As a software engineer who already spends enough time on devices, I'm actively seeking ways to reduce my screen time. I have a bad habit of scrolling through news and social media compulsively; I wanted to shift my information consumption patterns to only check what's going on in the morning and evening, since anything in between is pointless and if it's urgent enough, someone will tell me anyway. This is my shot at it.

## What this has

- AI generated summary of today's Sydney weather + NSW + national + world headlines + HN frontpage
- HN-like view of the above things
- No images, just text! Loads quick.
- Statically generated every hour to keep information up to date

## Stack

Next.js + TypeScript for the website + an API route for cache invalidation. Website is hosted on Vercel. Cron job to bust the cache is hosted on val.town.

## Getting things running

```bash
pnpm install
pnpm dev
```

Set the `OPENAI_API_KEY` environmental variable to make AI summaries work.

This doesn't have to be hosted on Vercel, you can host it on AWS, a VPS (DigitalOcean droplet, etc), or any other hosting service that supports Next.js self hosted.

## Roadmap

- [ ] Add personally relevant data (Garmin Connect, MFP, today's workout, etc)
- [ ] Public API for retrieving information on website programatically
- [ ] Turn this into a SaaS?
