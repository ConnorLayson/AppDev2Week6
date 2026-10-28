# ComponentCorner

A React single-page storefront demonstrating React Router, product detail routes, shared cart state, and `localStorage` persistence.

## Run locally

```bash
npm install
npm run dev
```

Create a production build with `npm run build`.

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
