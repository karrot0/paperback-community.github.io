# ChapterDetails

<div class="reference-header">
  <div class="title-container">
    <span class="type-keyword">interface</span>
    <h1 class="type-name">ChapterDetails</h1>
    <div class="extends-implements"></div>
  </div>
</div>

Represents detailed information about a manga chapter, including its pages and other metadata.

<div class="reference-section">
  <h2>Properties</h2>

  <h3>id</h3>
  <div class="property-meta">
    <span class="property-tag required">Required</span>
    <code class="property-type">string</code>
  </div>
  <p>The unique identifier for this chapter.</p>

  <h3>mangaId</h3>
  <div class="property-meta">
    <span class="property-tag required">Required</span>
    <code class="property-type">string</code>
  </div>
  <p>The unique identifier of the manga this chapter belongs to.</p>

  <h3>pages</h3>
  <div class="property-meta">
    <span class="property-tag required">Required</span>
    <code class="property-type">string[]</code>
  </div>
  <p>An array of page URLs for this chapter.</p>
</div>

## Examples

::: code-group
```typescript [Basic Usage]
const chapterDetails: ChapterDetails = {
    id: "chapter_1",
    mangaId: "manga_123",
    pages: [
        "https://example.com/page1.jpg",
        "https://example.com/page2.jpg"
    ]
}
```

```typescript [With Long Strip]
const longChapter: ChapterDetails = {
    id: "chapter_2",
    mangaId: "manga_123",
    pages: ["https://example.com/long-chapter.jpg"],
    longStrip: true
}
```
:::

## Implementation

::: code-group
```typescript [Interface]
interface ChapterDetails {
    id: string
    mangaId: string
    pages: string[]
    longStrip?: boolean
}
```

```typescript [Usage in Source]
async function getChapterDetails(chapterId: string): Promise<ChapterDetails> {
    // Implementation here
    return {
        id: chapterId,
        mangaId: "manga_id",
        pages: []
    }
}
```
:::

<div class="reference-section">
  <h2>Related Types</h2>
  <div class="related-types">
    <a href="/references/Chapter" class="related-type-link">Chapter</a>
    <a href="/references/Manga" class="related-type-link">Manga</a>
  </div>
</div>
