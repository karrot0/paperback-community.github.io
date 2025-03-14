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
```typescript [main.ts]
// Basic source implementation
export class MangaSource implements Source {
    readonly baseUrl = "https://yourmanga.com"
    
    async getMangaDetails(mangaId: string): Promise<Manga> {
        // Implementation here
    }
}
```

```text [output]
Hello
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
- `ChapterDetails`
- `SearchRequest`

## Next Steps
Ready to dive deeper? Check out these topics:
- [Advanced Source Features](/development/advanced)
- [Testing Your Extension](/development/testing)
- [Publishing Guidelines](/development/publishing)

::: tip
Join our [Discord server](https://discord.gg/paperback) for development help!
:::
