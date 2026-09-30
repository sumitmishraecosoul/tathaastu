# Tathaastu Store UI (Figma)

## Theme
- Page background: `#F8FFF6`
- Soft cream accents: `#F6F1E6`
- Footer / dark hero panels: `#064233`
- Primary buttons: `#E74660`
- Content max width: `1680px`

## Pages
1. `/store` — Store home (hero, category circles, recommendations, shop by intention, FAQ)
2. `/store/:categorySlug` — Category listing with sidebar filters + product grid
3. `/store/product/:productSlug` — Product detail (gallery, qty, Add to Cart / Buy Now, tabs, related)

## Data
- `src/data/storeData.js`

## Components
- `src/components/Store/ProductCard.jsx`
- `src/components/Store/StoreFaq.jsx`
- `src/components/Store/store.css`

## Nav
Store mega-menu links point to `/store` and category routes.
