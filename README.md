# Premier Properties Portal

A web portal for Premier Properties, a real estate consultant in Tamil Nadu. The project features property listings with search filters, location autocomplete, dynamic details pages, a custom gallery lightbox, and direct contact options.

## Tech Stack

* **Framework:** Astro 6
* **CSS Framework:** Tailwind CSS 4
* **Build System:** Vite
* **Hosting:** Netlify (configured with redirects and security headers)

## Getting Started

### Prerequisites

* Node.js (v22 or higher)
* npm

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the local development server:
   ```bash
   npm run dev
   ```

The site will be available at `http://localhost:4321`.

## Project Structure

* `src/pages/` - Site pages and routing
* `src/components/` - Shared UI components (gallery, search filters, layouts)
* `src/content/` - Markdown files for properties, testimonials, and settings
* `src/assets/` - Local images and static visual resources
* `public/` - Static assets served at the root (favicons, robots.txt)
* `copy-assets.mjs` - Helper script that copies generated design assets into place before build/dev runs

## Managing Listings

Properties are managed as static files using Astro Content Collections. To add or modify a listing, edit the markdown files in `src/content/properties/`. 

Each property file uses frontmatter details:
* `title` (text)
* `property_type` (zoning: land, house, apartment, commercial, shop)
* `listing_type` (buy or rent)
* `price` (numerical value in INR)
* `location` (neighborhood or area)
* `city` (city name)
* `featured_image` (path to main photo)
* `gallery_images` (list of paths to gallery photos)
