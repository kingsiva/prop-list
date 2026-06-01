/* Site-wide constants */

export const SITE_NAME = 'Premier Properties';
export const SITE_DESCRIPTION = 'Your trusted partner for premium real estate — residential, commercial, and land properties.';
export const SITE_URL = 'https://properties.example.com';

export const AGENT = {
  name: 'Rajesh Kumar',
  phone: '+91 98765 43210',
  email: 'rajesh@premierproperties.in',
  whatsapp: '+919876543210',
} as const;

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Properties', href: '/properties/' },
  { label: 'About', href: '/about/' },
  { label: 'Contact', href: '/contact/' },
] as const;

export const PROPERTY_TYPES = [
  { value: 'land', label: 'Land', icon: '' },
  { value: 'house', label: 'House', icon: '' },
  { value: 'apartment', label: 'Apartment', icon: '' },
  { value: 'commercial', label: 'Commercial', icon: '' },
  { value: 'shop', label: 'Shop', icon: '' },
] as const;

export const LISTING_TYPES = [
  { value: 'buy', label: 'Buy' },
  { value: 'rent', label: 'Rent' },
] as const;

export const RENTAL_TYPES = [
  { value: 'daily', label: 'Daily' },
  { value: 'weekly', label: 'Weekly' },
  { value: 'monthly', label: 'Monthly' },
] as const;

export const FURNISHED_STATUS = {
  unfurnished: 'Unfurnished',
  semi_furnished: 'Semi Furnished',
  fully_furnished: 'Fully Furnished',
} as const;

export const PROPERTY_FEATURES = [
  { value: 'near_school', label: 'Near School' },
  { value: 'near_hospital', label: 'Near Hospital' },
  { value: 'near_highway', label: 'Near Highway' },
  { value: 'near_bus_stand', label: 'Near Bus Stand' },
  { value: 'near_railway_station', label: 'Near Railway Station' },
  { value: 'near_airport', label: 'Near Airport' },
  { value: 'gated_community', label: 'Gated Community' },
  { value: 'park_facing', label: 'Park Facing' },
  { value: 'corner_property', label: 'Corner Property' },
] as const;

export const STATUS_LABELS = {
  available: 'Available',
  sold: 'Sold',
  rented: 'Rented',
  under_negotiation: 'Under Negotiation',
} as const;

export const STATUS_COLORS = {
  available: 'bg-accent-100 text-accent-800',
  sold: 'bg-stone-200 text-stone-600',
  rented: 'bg-warm-100 text-warm-500',
  under_negotiation: 'bg-yellow-100 text-yellow-800',
} as const;

/** Image widths for responsive Picture components */
export const IMAGE_WIDTHS = [480, 768, 1200, 1920] as const;

/** Default image sizes attribute */
export const IMAGE_SIZES = '(max-width: 640px) 480px, (max-width: 1024px) 768px, (max-width: 1440px) 1200px, 1920px';

/** Card image sizes (smaller) */
export const CARD_IMAGE_SIZES = '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw';
