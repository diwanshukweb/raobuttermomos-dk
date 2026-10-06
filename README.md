# Rao Butter Momos — independent concept

Vanilla HTML, CSS and JavaScript. No package manager, dependencies, API keys, backend or required environment variables. Menu is fetched from local `menu.json`; cart selections use localStorage. Fonts load from Google Fonts with system fallbacks. Navigation uses section/category/dish hashes.

## Local workflow

From the workspace root:

```sh
node scripts/build.mjs
node --check dist/app.js
python3 -m http.server 8080 --bind 127.0.0.1 --directory dist
```

Open http://127.0.0.1:8080. Serve over HTTP; opening HTML directly can prevent menu fetch.

## Deploy on Netlify

For the full workspace repository, root `netlify.toml` selects base `site`, build `node scripts/build.mjs`, publish `dist`. For a repository containing only the contents of `site/`, its own configuration provides the same build/publish settings without a base directory. Upload only source/config, not sales decks or offline copies.

For manual deployment, build first and upload `site/dist` or the prepared `rao-concept-netlify.zip` at https://app.netlify.com/drop. Future manual deployments should update the existing project rather than create another. A Git-connected Netlify project builds on pushes and supports deploy previews.

## Edit safely

- Menu: `dist/menu.json`; build regenerates the no-JavaScript menu.
- Copy, metadata and contact: `dist/index.html`.
- Styling: `dist/style.css`.
- Interactions: `dist/app.js`.
- Artwork: original `dist/momos-illustration.svg`.

This is uncommissioned concept work. Do not remove the concept label or enable restaurant ordering without authorization and verified contact/menu details. WhatsApp enquiries go to Diwanshu (+91 70659 08203) with a fixed business enquiry, excluding sample customer details. No restaurant structured data or sitemap is published; robots/meta discourage indexing. This is not access control.

Old third-party photos are retained in `reference-assets/` for provenance only, excluded from hosting and Git. Offline demo copies are historical and are not deployment sources. Existing `.openai` metadata relates to prior Sites hosting; it does not verify a current live deployment.

Live concept: https://raobuttermomos-dk.netlify.app
