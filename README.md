# ComponentCorner

A React single-page storefront demonstrating React Router, product detail routes, shared cart state, and `localStorage` persistence.

## Run locally

```bash
npm install
npm run dev
```

Run the automated test suite with `npm test` (one run) or `npm run test:watch` (watch mode). Create a production build with `npm run build`.

## Automated tests

The Vitest + React Testing Library suite covers home-page rendering, product-card content and add-to-cart interaction, cart-item rendering/removal/quantity controls, and app-level cart restoration and `localStorage` persistence. Test setup is in `src/setupTests.js`.

## Deploy to Vercel

Push this repository to GitHub, import it into Vercel, and use the default Vite settings (`npm run build`, output directory `dist`). `vercel.json` includes an SPA rewrite so direct visits to routes such as `/products/mechanical-keyboard` resolve to the React app. After deployment, verify navigation and cart persistence in the deployed URL.

## Routes

- `/` — Home
- `/products` — Product catalogue
- `/products/:id` — Product details
- `/cart` — Shopping cart

## How the cart works

The cart state is kept in `src/App.jsx`, above the routed pages, so it remains available across navigation. Cart updates are saved to `localStorage` under the key `componentcorner-cart` and restored on the next load.

## Project notes

The product catalogue is demo data in `src/data/products.js`. Replace it with your Assignment 3 data if you need to preserve the exact products from your earlier project.

**AI assistance attribution:** This starter implementation and styling were generated with assistance from OpenAI ChatGPT. Review, test, and adapt the code before submitting it for coursework.
