/**
 * Format price in Indian Rupee format (₹ X,XX,XXX)
 */
export function formatPrice(price: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}

/**
 * Format price in short form (e.g., ₹25L, ₹1.5Cr)
 */
export function formatPriceShort(price: number): string {
  if (price >= 10000000) {
    const cr = price / 10000000;
    return `₹${cr % 1 === 0 ? cr.toFixed(0) : cr.toFixed(1)} Cr`;
  }
  if (price >= 100000) {
    const lakh = price / 100000;
    return `₹${lakh % 1 === 0 ? lakh.toFixed(0) : lakh.toFixed(1)} L`;
  }
  if (price >= 1000) {
    const k = price / 1000;
    return `₹${k % 1 === 0 ? k.toFixed(0) : k.toFixed(1)}K`;
  }
  return formatPrice(price);
}

/**
 * Format area in sq.ft with comma separation
 */
export function formatArea(sqft: number): string {
  return `${sqft.toLocaleString('en-IN')} sq.ft`;
}

/**
 * Format area in acres
 */
export function formatAcres(acres: number): string {
  return `${acres.toFixed(2)} acres`;
}

/**
 * Format date for display
 */
export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}

/**
 * Format relative date (e.g., "2 days ago", "1 month ago")
 */
export function formatRelativeDate(date: Date): string {
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffDays === 0) return 'Today';
  if (diffDays === 1) return 'Yesterday';
  if (diffDays < 7) return `${diffDays} days ago`;
  if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
  if (diffDays < 365) return `${Math.floor(diffDays / 30)} months ago`;
  return `${Math.floor(diffDays / 365)} years ago`;
}

/**
 * Get readable property type label
 */
export function getPropertyTypeLabel(type: string): string {
  const labels: Record<string, string> = {
    land: 'Land',
    house: 'House',
    apartment: 'Apartment',
    commercial: 'Commercial',
    shop: 'Shop',
  };
  return labels[type] || type;
}

/**
 * Get readable listing type label
 */
export function getListingTypeLabel(type: string): string {
  return type === 'buy' ? 'For Sale' : 'For Rent';
}

/**
 * Get rental type label
 */
export function getRentalTypeLabel(type: string): string {
  const labels: Record<string, string> = {
    daily: '/ day',
    weekly: '/ week',
    monthly: '/ month',
  };
  return labels[type] || '';
}

/**
 * Get price display string with rental suffix
 */
export function getPriceDisplay(price: number, listingType: string, rentalType?: string): string {
  const formatted = formatPriceShort(price);
  if (listingType === 'rent' && rentalType) {
    return `${formatted} ${getRentalTypeLabel(rentalType)}`;
  }
  return formatted;
}

/**
 * Get primary area for any property type
 */
export function getPrimaryArea(data: Record<string, any>): number | undefined {
  switch (data.property_type) {
    case 'land': return data.land_area_sqft;
    case 'house': return data.built_up_area_sqft;
    case 'apartment': return data.carpet_area_sqft;
    case 'commercial': return data.built_up_area_sqft;
    case 'shop': return data.shop_area_sqft;
    default: return undefined;
  }
}
