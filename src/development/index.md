# Getting Started
Welcome to the Paperback extension development guide. This guide will walk you through creating your first source for the Paperback app.

::: tip VERSION INFO
This guide is for Paperback Extensions v0.9.0 and above
:::

## Before You Start
Make sure you have these tools installed and ready:

::: details System Requirements
- Node.js v18 or higher
- A code editor (VS Code recommended)
- TypeScript knowledge
:::

## Quick Setup

### 1. Fork the Template
1. Visit the [Paperback Extension Template](https://github.com/paperback-community/template-extensions)
2. Click the "Fork" button in the top-right corner
3. Name your fork and click "Create fork"

### 2. Clone Your Fork
Once you've created your fork, clone it locally:

::: code-group
```bash
# Clone your forked repository
git clone https://github.com/YOUR_USERNAME/YOUR_FORK_NAME.git

# Navigate to project directory
cd YOUR_FORK_NAME

# Install dependencies
npm install
```
:::


## Project Structure
Your extension project will look like this:

```text
Extension/
├── src/                   # Source code directory
│   ├── YourSource/       # Your source implementation
│   │   ├── static/       # Static assets
│   │   ├── main.ts      # Main source code
│   │   └── pbconfig.ts  # Source configuration
│   └── tests/           # Test files
└── package.json         # Project configuration
```

## Basic Source Creation
Let's create your first source:

::: code-group
<div class="code-container collapsed">

```typescript [main.ts]
// Basic source implementation
import {
  Chapter,
  ChapterDetails,
  ChapterProviding,
  CloudflareError,
  ContentRating,
  DiscoverSection,
  DiscoverSectionItem,
  DiscoverSectionProviding,
  DiscoverSectionType,
  MangaProviding,
  PagedResults,
  Request,
  SearchResultItem,
  SearchResultsProviding,
  SourceManga,
} from "@paperback/types";
import * as cheerio from "cheerio";
const baseUrl = "http://YourSource.com";

type MangaSourceImplementation = Extension &
  MangaProviding &
  ChapterProviding &
  DiscoverSectionProviding;

export class MangaSource implements MangaSourceImplementation {
    async initialise(): Promise<void> {
    }

    async getDiscoverSections(): Promise<DiscoverSection[]> {
        return [
        {
            id: "popular_section",
            title: "Popular",
            type: DiscoverSectionType.featured,
        },
        {
            id: "updated_section",
            title: "Recently Updated",
            type: DiscoverSectionType.simpleCarousel,
        },
        ];
    }

    async getDiscoverSectionItems(
        section: DiscoverSection,
        metadata: MangaFire.Metadata | undefined,
    ): Promise<PagedResults<DiscoverSectionItem>> {
        switch (section.id) {
        case "popular_section":
            return this.getPopularSectionItems(section, metadata);
        case "updated_section":
            return this.getUpdatedSectionItems(section, metadata);
        default:
            return { items: [] };
        }
    }

    async getMangaDetails(mangaId: string): Promise<Manga> {
        // Implementation here
    }

    async getChapters()
}

export const YourSource = new MangaSource();
```

<div class="code-toggle">Show more</div>
</div>

```typescript [pbconfig.ts]
import { ContentRating, SourceInfo, SourceIntents } from "@paperback/types";

export default {
  name: "Your Source Name",
  description: "A paperback extension for Your Source Name",
  version: "1.0.0-alpha.1",
  icon: "icon.png",
  language: "en",
  contentRating: ContentRating.EVERYONE,
  badges: [
    { label: "Content Provider", textColor: "#FFFFFF", backgroundColor: "#800080" },
  ],
  capabilities: [
    SourceIntents.DISCOVER_SECIONS,
    SourceIntents.MANGA_SEARCH,
    SourceIntents.MANGA_CHAPTERS,
  ],
  developers: [
    {
      name: "Your Name",
    },
  ],
} satisfies SourceInfo;

```
:::

::: warning
Remember to always implement error handling in your sources!
:::

## Core Concepts
Understanding these core concepts is essential for extension development:

### Sources
A source represents a manga website or service. Each source must implement:
- Manga listing
- Chapter fetching
- Search functionality

### Request Handling
Learn how to make HTTP requests properly:

```typescript
async function fetchData(id: string): Promise<Response> {
    return await request({
        url: `${this.baseUrl}/manga/${id}`,
        method: 'GET'
    })
}
```

### Data Models
Common data structures you'll work with:
- `Manga`
- `Chapter`
- [`ChapterDetails`](/references/ChapterDetails)
- [`Request`](/references/Request)
- `SearchRequest`

## Next Steps
Ready to dive deeper? Check out these topics:
- [Advanced Source Features](/development/advanced)
- [Testing Your Extension](/development/testing)
- [Publishing Guidelines](/development/publishing)

::: tip
Join our [Discord server](https://discord.gg/paperback) for development help!
:::
