import { supabase } from '@/lib/supabase'

export interface Area {
    id: string
    name: string
    description: string | null
    image_url: string
    properties_count: number
    created_at: string
    updated_at: string
}

export async function getAreas() {
    const { data, error } = await supabase
        .from('areas')
        .select('*')
        .order('name', { ascending: true })

    if (error) {
        console.error('Error fetching areas:', error)
        throw error
    }

    return data as Area[]
}

export async function getAreaById(id: string) {
    const { data, error } = await supabase
        .from('areas')
        .select('*')
        .eq('id', id)
        .single()

    if (error) {
        console.error('Error fetching area:', error)
        throw error
    }

    return data as Area
}

export async function createArea(area: Omit<Area, 'id' | 'properties_count' | 'created_at' | 'updated_at'>) {
    const { data, error } = await supabase
        .from('areas')
        .insert([{
            ...area,
            properties_count: 0,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
        }])
        .select()
        .single()

    if (error) {
        console.error('Error creating area:', error)
        throw error
    }

    return data as Area
}

export async function updateArea(
    id: string,
    area: Partial<Omit<Area, 'id' | 'properties_count' | 'created_at' | 'updated_at'>>
) {
    const { data, error } = await supabase
        .from('areas')
        .update({
            ...area,
            updated_at: new Date().toISOString()
        })
        .eq('id', id)
        .select()
        .single()

    if (error) {
        console.error('Error updating area:', error)
        throw error
    }

    return data as Area
}

export async function deleteArea(id: string) {
    const { error } = await supabase
        .from('areas')
        .delete()
        .eq('id', id)

    if (error) {
        console.error('Error deleting area:', error)
        throw error
    }
} 