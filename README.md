# TOK FLIX

A responsive streaming catalogue experience built with Next.js App Router.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Current features

- Dark cinematic interface with coral accent `#ff735e`
- Featured hero for **Beyond the Horizon**
- Trending title cards and category filters
- Search across the catalogue
- Responsive desktop and mobile layouts
- Title detail preview modal

## Next integration steps

1. Connect Supabase using `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`.
2. Create the media catalogue and storage bucket.
3. Add authentication and protected upload workflows.
4. Add licensed video URLs and real video playback.
5. Configure Vercel deployment and environment variables.

Never commit Supabase service-role keys or other secrets to source control.
