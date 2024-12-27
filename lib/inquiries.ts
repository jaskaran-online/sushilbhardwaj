import { supabase } from '@/lib/supabase'

export type InquiryStatus = 'new' | 'contacted' | 'resolved' | 'archived'

export interface Inquiry {
    id: string
    name: string
    email: string
    phone: string | null
    message: string
    property_id: string | null
    agent_id: string | null
    status: InquiryStatus
    created_at: string
    updated_at: string
}

export async function getInquiries() {
    const { data, error } = await supabase
        .from('inquiries')
        .select('*')
        .order('created_at', { ascending: false })

    if (error) {
        console.error('Error fetching inquiries:', error)
        throw error
    }

    return data as Inquiry[]
}

export async function updateInquiryStatus(inquiryId: string, status: InquiryStatus) {
    const { error } = await supabase
        .from('inquiries')
        .update({ status, updated_at: new Date().toISOString() })
        .eq('id', inquiryId)

    if (error) {
        console.error('Error updating inquiry status:', error)
        throw error
    }
}

export async function createInquiry(inquiry: Omit<Inquiry, 'id' | 'status' | 'created_at' | 'updated_at'>) {
    const { error } = await supabase
        .from('inquiries')
        .insert([
            {
                ...inquiry,
                status: 'new',
                created_at: new Date().toISOString(),
                updated_at: new Date().toISOString()
            }
        ])

    if (error) {
        console.error('Error creating inquiry:', error)
        throw error
    }
}

export async function deleteInquiry(inquiryId: string) {
    const { error } = await supabase
        .from('inquiries')
        .delete()
        .eq('id', inquiryId)

    if (error) {
        console.error('Error deleting inquiry:', error)
        throw error
    }
} 