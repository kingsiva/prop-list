import { defineCollection, z } from 'astro:content';
import { glob, file } from 'astro/loaders';

/* ============================================
   PROPERTY LISTING — Content Collections Schema
   Uses discriminated union on property_type
   ============================================ */

// Helper: common fields shared by ALL property types
const commonFields = (image: ReturnType<Parameters<Exclude<Parameters<typeof defineCollection>[0]['schema'], z.ZodType | undefined>>[0]['image']>) => ({
  title: z.string(),
  slug: z.string(),
  property_id: z.string(),
  featured: z.boolean().default(false),
  status: z.enum(['available', 'sold', 'rented', 'under_negotiation']).default('available'),
  listing_type: z.enum(['buy', 'rent']),
  rental_type: z.enum(['daily', 'weekly', 'monthly']).optional(),
  price: z.number(),
  location: z.string(),
  address: z.string(),
  city: z.string(),
  state: z.string(),
  postal_code: z.string(),
  description: z.string(),
  featured_image: image(),
  gallery_images: z.array(image()).optional().default([]),
  google_map_url: z.string().url().optional(),
  agent_name: z.string(),
  agent_phone: z.string(),
  agent_email: z.string().email(),
  published_date: z.coerce.date(),
  features: z.array(z.enum([
    'near_school', 'near_hospital', 'near_highway',
    'near_bus_stand', 'near_railway_station', 'near_airport',
    'gated_community', 'park_facing', 'corner_property',
  ])).optional().default([]),
});

// ---- LAND SCHEMA ----
const landFields = (image: any) => z.object({
  ...commonFields(image),
  property_type: z.literal('land'),
  land_area_sqft: z.number(),
  land_area_acres: z.number().optional(),
  zoning_type: z.string().optional(),
  road_access: z.boolean().default(false),
  corner_plot: z.boolean().default(false),
  construction_permission: z.boolean().default(false),
  approved_layout: z.boolean().default(false),
  dtcp_approved: z.boolean().default(false),
  rera_approved: z.boolean().default(false),
  water_connection: z.boolean().default(false),
  electricity_connection: z.boolean().default(false),
  drainage_connection: z.boolean().default(false),
  fencing: z.boolean().default(false),
  boundary_wall: z.boolean().default(false),
  survey_number: z.string().optional(),
  facing: z.string().optional(),
  ownership_type: z.string().optional(),
  agricultural_land: z.boolean().default(false),
  residential_land: z.boolean().default(false),
  commercial_land: z.boolean().default(false),
  nearby_landmarks: z.string().optional(),
});

// ---- HOUSE SCHEMA ----
const houseFields = (image: any) => z.object({
  ...commonFields(image),
  property_type: z.literal('house'),
  built_up_area_sqft: z.number(),
  plot_area_sqft: z.number().optional(),
  bedrooms: z.number(),
  bathrooms: z.number(),
  toilets: z.number().optional(),
  floors: z.number().default(1),
  balconies: z.number().default(0),
  parking_spaces: z.number().default(0),
  furnished_status: z.enum(['unfurnished', 'semi_furnished', 'fully_furnished']).default('unfurnished'),
  house_age: z.number().optional(),
  construction_year: z.number().optional(),
  construction_permission: z.boolean().default(false),
  water_supply: z.boolean().default(false),
  electricity: z.boolean().default(true),
  drainage: z.boolean().default(false),
  borewell: z.boolean().default(false),
  septic_tank: z.boolean().default(false),
  solar_power: z.boolean().default(false),
  compound_wall: z.boolean().default(false),
  gated_property: z.boolean().default(false),
  road_width: z.string().optional(),
  facing: z.string().optional(),
  ownership_type: z.string().optional(),
});

// ---- APARTMENT SCHEMA ----
const apartmentFields = (image: any) => z.object({
  ...commonFields(image),
  property_type: z.literal('apartment'),
  super_builtup_area_sqft: z.number().optional(),
  carpet_area_sqft: z.number(),
  bedrooms: z.number(),
  bathrooms: z.number(),
  toilets: z.number().optional(),
  floor_number: z.number(),
  total_floors: z.number().optional(),
  lift_available: z.boolean().default(false),
  power_backup: z.boolean().default(false),
  balconies: z.number().default(0),
  parking_spaces: z.number().default(0),
  furnished_status: z.enum(['unfurnished', 'semi_furnished', 'fully_furnished']).default('unfurnished'),
  apartment_age: z.number().optional(),
  maintenance_fee: z.number().optional(),
  security: z.boolean().default(false),
  gym: z.boolean().default(false),
  swimming_pool: z.boolean().default(false),
  clubhouse: z.boolean().default(false),
  children_play_area: z.boolean().default(false),
  visitor_parking: z.boolean().default(false),
  ownership_type: z.string().optional(),
});

// ---- COMMERCIAL PROPERTY SCHEMA ----
const commercialFields = (image: any) => z.object({
  ...commonFields(image),
  property_type: z.literal('commercial'),
  commercial_type: z.string(),
  built_up_area_sqft: z.number(),
  land_area_sqft: z.number().optional(),
  floor_number: z.number().optional(),
  total_floors: z.number().optional(),
  parking_spaces: z.number().default(0),
  lift_available: z.boolean().default(false),
  power_backup: z.boolean().default(false),
  generator: z.boolean().default(false),
  internet_connectivity: z.boolean().default(false),
  conference_room: z.boolean().default(false),
  meeting_room: z.boolean().default(false),
  reception_area: z.boolean().default(false),
  cafeteria: z.boolean().default(false),
  warehouse_space: z.boolean().default(false),
  loading_area: z.boolean().default(false),
  truck_access: z.boolean().default(false),
  fire_safety_system: z.boolean().default(false),
  occupancy_certificate: z.boolean().default(false),
  commercial_license: z.boolean().default(false),
});

// ---- SHOP SCHEMA ----
const shopFields = (image: any) => z.object({
  ...commonFields(image),
  property_type: z.literal('shop'),
  shop_area_sqft: z.number(),
  frontage_width: z.number().optional(),
  floor_number: z.number().default(0),
  parking_spaces: z.number().default(0),
  storage_room: z.boolean().default(false),
  washroom: z.boolean().default(false),
  display_front: z.boolean().default(false),
  shutter_count: z.number().default(1),
  main_road_facing: z.boolean().default(false),
  foot_traffic_rating: z.enum(['low', 'medium', 'high']).optional(),
  commercial_license: z.boolean().default(false),
  electricity_connection: z.boolean().default(true),
  water_connection: z.boolean().default(false),
  fire_safety_system: z.boolean().default(false),
});

// ============================================
// COLLECTION DEFINITIONS
// ============================================

const properties = defineCollection({
  loader: glob({ base: './src/content/properties', pattern: '**/*.md' }),
  schema: ({ image }) => z.discriminatedUnion('property_type', [
    landFields(image),
    houseFields(image),
    apartmentFields(image),
    commercialFields(image),
    shopFields(image),
  ]),
});

const testimonials = defineCollection({
  loader: glob({ base: './src/content/testimonials', pattern: '**/*.md' }),
  schema: ({ image }) => z.object({
    name: z.string(),
    text: z.string(),
    rating: z.number().min(1).max(5),
    photo: image().optional(),
    designation: z.string().optional(),
  }),
});

const settings = defineCollection({
  loader: file('./src/content/settings/agent.json'),
  schema: ({ image }) => z.object({
    id: z.string(),
    agent_name: z.string(),
    agent_phone: z.string(),
    agent_email: z.string().email(),
    agent_designation: z.string().optional(),
    agent_photo: image().optional(),
    experience_years: z.number().optional(),
    properties_sold: z.number().optional(),
    bio: z.string(),
    whatsapp: z.string().optional(),
    office_address: z.string().optional(),
    office_city: z.string().optional(),
    office_state: z.string().optional(),
  }),
});

export const collections = { properties, testimonials, settings };
