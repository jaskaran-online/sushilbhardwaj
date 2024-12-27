import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Types for our database tables
export type Agent = {
    id: string
    name: string
    email: string
    phone: string
    image_url: string
    bio: string | null
    specialization: string | null
    created_at: string
    updated_at: string
}

export type Property = {
    id: string
    title: string
    description: string
    price: number
    status: 'for_sale' | 'for_rent' | 'sold' | 'rented'
    property_type: 'house' | 'apartment' | 'condo' | 'townhouse' | 'villa' | 'land'
    bedrooms: number
    bathrooms: number
    square_feet: number
    lot_size: number | null
    year_built: number | null
    location_address: string
    city: string
    postal_code: string
    latitude: number | null
    longitude: number | null
    featured: boolean
    agent_id: string
    created_at: string
    updated_at: string
    // Virtual fields from joins
    images?: PropertyImage[]
    amenities?: PropertyAmenity[]
    agent?: Agent
}

export type PropertyImage = {
    id: string
    property_id: string
    image_url: string
    is_primary: boolean
    display_order: number
    created_at: string
}

export type PropertyAmenity = {
    id: string
    property_id: string
    name: string
    created_at: string
}

export type Area = {
    id: string
    name: string
    description: string | null
    image_url: string
    properties_count: number
    created_at: string
    updated_at: string
}

export type ContactInquiry = {
    id: string
    name: string
    email: string
    phone: string | null
    message: string
    property_id: string | null
    agent_id: string | null
    status: string
    created_at: string
    updated_at: string
}

// Helper functions for common queries
export async function getFeaturedProperties() {
    const { data, error } = await supabase
        .from('properties')
        .select(`
      *,
      images:property_images(image_url, is_primary, display_order),
      amenities:property_amenities(name),
      agent:agents(*)
    `)
        .eq('featured', true)
        .order('created_at', { ascending: false })

    if (error) throw error
    return data as Property[]
}

export async function getPropertyById(id: string) {
    const { data, error } = await supabase
        .from('properties')
        .select(`
      *,
      images:property_images(image_url, is_primary, display_order),
      amenities:property_amenities(name),
      agent:agents(*)
    `)
        .eq('id', id)
        .single()

    if (error) throw error
    return data as Property
}

export async function getAreas() {
    const { data, error } = await supabase
        .from('areas')
        .select('*')
        .order('properties_count', { ascending: false })

    if (error) throw error
    return data as Area[]
}

export async function createContactInquiry(inquiry: Omit<ContactInquiry, 'id' | 'created_at' | 'updated_at' | 'status'>) {
    const { data, error } = await supabase
        .from('contact_inquiries')
        .insert([inquiry])
        .select()
        .single()

    if (error) throw error
    return data as ContactInquiry
}

export async function searchProperties(query: string) {
    const { data, error } = await supabase
        .from('properties')
        .select(`
      *,
      images:property_images(image_url, is_primary, display_order),
      amenities:property_amenities(name),
      agent:agents(*)
    `)
        .or(`title.ilike.%${query}%, description.ilike.%${query}%, city.ilike.%${query}%`)
        .order('created_at', { ascending: false })

    if (error) throw error
    return data as Property[]
} 