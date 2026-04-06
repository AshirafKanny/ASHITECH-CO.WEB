# KENI WEB DESIGN Sanity Studio

## 1. Install

```bash
npm install
```

## 2. Run Studio

```bash
npm run dev
```

Studio opens on `http://localhost:3333` by default.

## 3. Add Content

1. Create Author documents first.
2. Create Post documents with:
- title
- slug
- publishedAt
- excerpt
- mainImage
- author
- body

## 4. Verify in Next.js app

Your frontend is already connected to:
- projectId: `4cd3mior`
- dataset: `production`

After publishing a post in Studio, it appears in:
- homepage latest news section
- `/blog`
- `/blog/[slug]`
