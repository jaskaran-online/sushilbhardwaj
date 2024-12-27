"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Plus, Search, Loader2, MapPin, Home, Pencil, Trash2 } from 'lucide-react'
import useSWR, { mutate } from 'swr'
import type { Area } from '@/lib/areas'
import { useToast } from '@/hooks/use-toast'
import { AreaFormDialog } from './area-form-dialog'

const fetcher = async (url: string) => {
    const res = await fetch(url)
    const data = await res.json()
    if (!res.ok) {
        const error = new Error(data.error || 'An error occurred')
        error.message = data.details || data.error || 'Failed to fetch data'
        throw error
    }
    return Array.isArray(data) ? data : []
}

export function AreasClient() {
    const { toast } = useToast()
    const { data: areas = [], error, isLoading, isValidating } = useSWR<Area[]>('/api/areas', fetcher, {
        revalidateOnFocus: false,
        dedupingInterval: 5000
    })
    const [search, setSearch] = useState('')
    const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false)
    const [editingArea, setEditingArea] = useState<Area | null>(null)

    async function handleDelete(id: string) {
        if (!window.confirm('Are you sure you want to delete this area?')) {
            return
        }

        try {
            const response = await fetch(`/api/areas/${id}`, {
                method: 'DELETE',
            })

            if (!response.ok) {
                throw new Error('Failed to delete area')
            }

            mutate('/api/areas')
            toast({
                title: 'Area Deleted',
                description: 'The area has been deleted successfully.',
            })
        } catch (error) {
            console.error('Failed to delete area:', error)
            toast({
                title: 'Error',
                description: 'Failed to delete area. Please try again.',
                variant: 'destructive',
            })
        }
    }

    const filteredAreas = areas.filter(area =>
        area.name.toLowerCase().includes(search.toLowerCase()) ||
        (area.description?.toLowerCase() || '').includes(search.toLowerCase())
    )

    if (error) {
        return (
            <div className="p-8 text-center text-red-500">
                <p className="font-semibold">Error loading areas</p>
                <p className="text-sm mt-2">{error.message}</p>
                <button
                    onClick={() => mutate('/api/areas')}
                    className="mt-4 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                >
                    Try Again
                </button>
            </div>
        )
    }

    return (
        <>
            <div className="p-6 max-w-7xl mx-auto">
                <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center gap-3">
                        <h1 className="text-2xl font-bold">Areas</h1>
                        {isValidating && (
                            <Loader2 className="w-4 h-4 animate-spin text-gray-500" />
                        )}
                    </div>
                    <div className="flex space-x-4">
                        {/* Search */}
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
                            <input
                                type="text"
                                placeholder="Search areas..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                            />
                        </div>
                        {/* Create Button */}
                        <button
                            onClick={() => setIsCreateDialogOpen(true)}
                            className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                        >
                            <Plus className="w-4 h-4" />
                            Add Area
                        </button>
                    </div>
                </div>

                {/* Areas Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {isLoading ? (
                        <div className="col-span-full p-8 text-center text-gray-500">
                            <Loader2 className="w-6 h-6 animate-spin mx-auto mb-2" />
                            <p>Loading areas...</p>
                        </div>
                    ) : filteredAreas.length === 0 ? (
                        <div className="col-span-full p-8 text-center text-gray-500">
                            {search ? (
                                <>
                                    <p>No areas found matching your search</p>
                                    <button
                                        onClick={() => setSearch('')}
                                        className="mt-2 text-primary hover:underline"
                                    >
                                        Clear search
                                    </button>
                                </>
                            ) : (
                                <div className="space-y-4">
                                    <p>No areas found</p>
                                    <button
                                        onClick={() => setIsCreateDialogOpen(true)}
                                        className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                                    >
                                        <Plus className="w-4 h-4" />
                                        Add your first area
                                    </button>
                                </div>
                            )}
                        </div>
                    ) : (
                        filteredAreas.map((area) => (
                            <motion.div
                                key={area.id}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="bg-white rounded-lg shadow-md overflow-hidden"
                            >
                                <div className="aspect-video relative">
                                    <img
                                        src={area.image_url}
                                        alt={area.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="p-4">
                                    <h3 className="text-lg font-semibold">{area.name}</h3>
                                    {area.description && (
                                        <p className="text-gray-600 mt-1 text-sm line-clamp-2">
                                            {area.description}
                                        </p>
                                    )}
                                    <div className="flex items-center gap-2 mt-3 text-sm text-gray-500">
                                        <MapPin className="w-4 h-4" />
                                        <span>Area</span>
                                        <span className="mx-2">•</span>
                                        <Home className="w-4 h-4" />
                                        <span>{area.properties_count} Properties</span>
                                    </div>
                                    <div className="flex justify-end gap-2 mt-4">
                                        <button
                                            onClick={() => setEditingArea(area)}
                                            className="p-2 text-gray-600 hover:text-primary transition-colors"
                                            title="Edit area"
                                        >
                                            <Pencil className="w-4 h-4" />
                                        </button>
                                        <button
                                            onClick={() => handleDelete(area.id)}
                                            className="p-2 text-gray-600 hover:text-red-600 transition-colors"
                                            title="Delete area"
                                        >
                                            <Trash2 className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))
                    )}
                </div>
            </div>

            <AreaFormDialog
                open={isCreateDialogOpen}
                onOpenChange={setIsCreateDialogOpen}
            />

            {editingArea && (
                <AreaFormDialog
                    open={true}
                    onOpenChange={() => setEditingArea(null)}
                    area={editingArea}
                />
            )}
        </>
    )
} 