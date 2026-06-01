# Design System

Visual design specifications for the Premier Properties portal.

## Theme & Mood
Premium organic, combining warm stone neutrals with forest/olive green accents.

## Colors
All colors are defined using OKLCH for modern browser color spaces.

### Stone (Warm Neutrals)
- **Base (Stone 50)**: `oklch(0.985 0.002 75)`
- **Secondary (Stone 200)**: `oklch(0.93 0.006 75)`
- **Border/Line (Stone 300)**: `oklch(0.87 0.008 75)`
- **Text (Stone 800)**: `oklch(0.27 0.012 58)`
- **Dark (Stone 950)**: `oklch(0.15 0.01 58)`

### Accent (Olive / Forest Green)
- **Light Accent (Accent 100)**: `oklch(0.94 0.035 145)`
- **Primary Accent (Accent 500)**: `oklch(0.55 0.12 150)`
- **Deep Accent (Accent 700)**: `oklch(0.40 0.09 150)`
- **Darkest Accent (Accent 900)**: `oklch(0.29 0.06 150)`

### Highlights (Warm Gold/Amber)
- **Warm Light**: `oklch(0.98 0.01 60)`
- **Warm Accent**: `oklch(0.70 0.11 50)`

## Typography
- **Heading Family (Display)**: `Outfit`, system-ui
- **Body Family (Sans)**: `Inter`, system-ui

## Elevation & Shadows
- **Card Shadow**: `0 1px 3px oklch(0 0 0 / 0.06), 0 1px 2px oklch(0 0 0 / 0.04)`
- **Card Hover Shadow**: `0 10px 30px oklch(0 0 0 / 0.08), 0 4px 12px oklch(0 0 0 / 0.04)`

## Border Radii
- **Card**: `0.875rem` (14px)
- **Button**: `0.625rem` (10px)
- **Badge**: `0.375rem` (6px)
- **Input**: `0.5rem` (8px)

## Image Optimization
- Responsive images must use Astro's `Picture` component.
- Hero images: WebP/AVIF formats, 1920px max width.
- Cards/Thumbnails: WebP/AVIF formats, 768px max width, aspect ratio `3/2`.
