# News Content Guide

Quick reference for adding new news items to JAMCAM 2025.

## File Structure

Create **4 files** (one per locale) with slug-based naming:
- `{slug}-es.md` (Spanish - default)
- `{slug}-en.md` (English)
- `{slug}-pt.md` (Portuguese)
- `{slug}-fr.md` (French)

**Example:** `el-staff-ya-esta-en-accion-es.md`

## Frontmatter Template

```yaml
---
title: 'Article Title'
category: 'Noticia'  # See categories below
publishDate: 2025-12-25  # YYYY-MM-DD format
image: '@news/Filename.JPG'  # Must match actual filename exactly
imageAlt: 'Descriptive alt text for accessibility'
locale: 'es'  # 'es', 'en', 'pt', or 'fr'
keywords: ['Keyword1', 'Keyword2', 'Keyword3']  # Array of relevant terms
metaTitle: 'SEO meta title (60 chars max)'
metaDescription: 'SEO meta description (160 chars max)'
---
```

## Categories & Translations

| Spanish | English | Portuguese | French |
|---------|---------|------------|--------|
| `Anuncio` | `Announcement` | `Anúncio` | `Annonce` |
| `Noticia` | `News` | `Notícia` | `Actualité` |
| `Programa` | `Program` | `Programa` | `Programme` |
| `Actividades` | `Activities` | `Atividades` | `Activités` |

## Image Requirements

1. **Location:** Place image in `src/assets/images/news/`
2. **Format:** `.jpg`, `.JPG`, or `.webp` (case-sensitive!)
3. **Reference:** Use `@news/Filename.JPG` in frontmatter (must match filename exactly)

## Required Code Updates

When adding a new news item, **update these files**:

### 1. `src/components/NewsCard.astro`
- Add import: `import newImage from '../assets/images/news/Filename.JPG';`
- Add `@ts-expect-error` comment if `.JPG` extension (uppercase)
- Add mapping: `'@news/Filename.JPG': newImage,` in `imageMap`

### 2. All `[slug].astro` pages (4 files):
- `src/pages/news/[slug].astro`
- `src/pages/en/news/[slug].astro`
- `src/pages/pt/news/[slug].astro`
- `src/pages/fr/news/[slug].astro`

For each file:
- Add import: `import newImage from '../../assets/images/news/Filename.JPG';` (adjust `../` depth)
- Add `@ts-expect-error` comment if `.JPG` extension
- Add mapping: `'@news/Filename.JPG': newImage,` in `imageMap`

## Quick Checklist

- [ ] Created 4 markdown files (`-es.md`, `-en.md`, `-pt.md`, `-fr.md`)
- [ ] Image placed in `src/assets/images/news/`
- [ ] Frontmatter includes all required fields
- [ ] Image path matches filename exactly (case-sensitive)
- [ ] Updated `NewsCard.astro` import + mapping
- [ ] Updated all 4 `[slug].astro` pages (import + mapping)
- [ ] Keywords are relevant and properly formatted
- [ ] Categories match translations table
- [ ] Dates in `YYYY-MM-DD` format

## Common Mistakes

❌ **Wrong:** `image: '@news/filename.jpg'` when file is `Filename.JPG`  
✅ **Right:** `image: '@news/Filename.JPG'` (exact match)

❌ **Wrong:** Missing import in `NewsCard.astro`  
✅ **Right:** Import + mapping in both `NewsCard.astro` AND all `[slug].astro` files

❌ **Wrong:** Missing `@ts-expect-error` for uppercase `.JPG`  
✅ **Right:** Add comment before import: `// @ts-expect-error - JPG extension in uppercase...`

