
# Lumière — Luxury Perfume Showcase



> Frontend technical assignment submission focused on luxury UI execution, component architecture, and responsive design.

  

## Project Overview

  

Lumière is a single-page application showcasing high-end fragrances with an elegant, minimalist aesthetic inspired by luxury houses like Dior and Tom Ford. The application features a landing page with hero section, a product listing with responsive grid, and detailed product pages with fragrance specifications.


## Live Demo

Live Website:
https://luxury-perfume-frontend-assignment.vercel.app/

GitHub Repository:
https://github.com/dineshupadhyay08/Luxury-perfume-frontend-assignment

  

## Brand Concept

  

**Maison de Parfums** — A fictional luxury perfume house founded in 1920, specializing in artisanal fragrances crafted from rare ingredients sourced globally. The brand embodies timeless elegance, sophistication, and the art of French perfumery.

  

## Tech Stack

| Technology     | Purpose                   |
| -------------- | ------------------------- |
| React 19       | UI framework              |
| Vite 7         | Build tool and dev server |
| React Router 7 | Client-side routing       |
| CSS Variables  | Design system tokens      |
| Vanilla CSS    | Styling (no Tailwind)     |


  

**Rationale:**

  

-  **React + Vite**: Fast HMR and optimized production builds

-  **CSS Modules/Plain CSS**: Full control over luxury aesthetic without utility-class overhead

-  **React Router**: Standard SPA routing with dynamic product pages

-  **No TypeScript**: Simplifies setup for this showcase; easily migratable if needed

  

## Design Decisions

  

### Typography

  

-  **Heading**: Cormorant Garamond (serif) — Elegant, high-contrast letterforms

-  **Body**: Montserrat (sans-serif) — Clean, readable geometric sans

  

### Color Palette

  

```

css

--color-primary: #1a1a1a /* Deep charcoal */

--color-secondary: #8b7355 /* Warm bronze */

--color-gold: #c9a962 /* Muted gold accent */

--color-cream: #f8f5f0 /* Warm off-white background */

--color-white: #ffffff

```

  

### Layout

  

- 8px spacing system

- Max content width: 1400px

- Responsive breakpoints: 768px (tablet), 1024px (desktop)

  

### Visual Principles

  

- Generous whitespace

- Minimal use of color (let products shine)

- Subtle hover transitions (300ms ease)

- Consistent image aspect ratios (3:4)

  

## Folder Structure

  

```

src/

├── components/ # Reusable UI components

│ ├── Button/ # Reusable button with variants

│ ├── Footer/ # Site footer

│ ├── Header/ # Navigation header

│ ├── Layout/ # Page wrapper component

│ └── ProductCard/ # Product grid item

├── data/ # Static data

│ └── products.js # Product catalog

├── pages/ # Route-level components

│ ├── Landing/ # Home page

│ ├── Products/ # Product listing

│ └── ProductDetail/ # Individual product view

├── utils/ # Helper functions

│ └── productUtils.js # Product data utilities

├── App.jsx # Router setup

├── index.css # Global styles & design tokens

└── main.jsx # Entry point

```

  

## Setup Instructions

  

### Prerequisites

  

- Node.js 18+

  

### Installation

  

```

bash

npm install

```

  

### Development

  

```

bash

npm run dev

```

  

Opens at `http://localhost:5173`

  

### Production Build

  

```

bash

npm run build

```

  

Preview production build:

  

```

bash

npm run preview

```

  

## Features

  

-  **Landing Page**: Hero section, brand intro, featured products

-  **Product Listing**: Responsive grid (1/2/4 columns)

-  **Product Detail**: Full specifications, fragrance notes, longevity

-  **Error Handling**: Graceful 404 for invalid product IDs

  

## Known Limitations

  

-  **Static Data**: Products are hardcoded; no backend integration

-  **No Cart**: Add to collection button is non-functional (UI only)

-  **No Search/Filter**: Product listing shows all products

-  **No Persistence**: Cart state not persisted

-  **Image URLs**: External Unsplash URLs (subject to availability)

  

## Future Enhancements

  

- Product search and filtering

- Shopping cart functionality

- Product comparison

- User reviews/ratings

- Newsletter signup

- Contact form

  

---

## Development Note

- This project was primarily designed and implemented manually.  
- AI tools were used occasionally for minor assistance such as code refinement, 		                   formatting suggestions, and debugging guidance. 
- All architectural decisions, implementation logic, and final code structure were reviewed and implemented independently.

---

  

Built as a frontend technical assignment demonstrating premium UI execution, scalable component architecture, and production-ready frontend practices.
