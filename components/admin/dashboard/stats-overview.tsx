"use client"

import { useMemo } from 'react'
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
    LineChart,
    Line,
    Legend
} from 'recharts'
import { Building2, Users, MapPin, DollarSign } from 'lucide-react'

interface StatsOverviewProps {
    stats: {
        totalProperties: number
        totalAgents: number
        totalAreas: number
        totalInquiries: number
        propertiesByStatus: Array<{
            status: string
            count: number
        }>
        propertiesByType: Array<{
            type: string
            count: number
        }>
        inquiriesByMonth: Array<{
            month: string
            count: number
        }>
    }
}

const COLORS = ['#2C3E50', '#E74C3C', '#ECF0F1', '#3498DB', '#2ECC71', '#F1C40F']

export function StatsOverview({ stats }: StatsOverviewProps) {
    const cards = [
        {
            title: 'Total Properties',
            value: stats.totalProperties,
            icon: Building2,
            color: 'bg-blue-500'
        },
        {
            title: 'Total Agents',
            value: stats.totalAgents,
            icon: Users,
            color: 'bg-green-500'
        },
        {
            title: 'Total Areas',
            value: stats.totalAreas,
            icon: MapPin,
            color: 'bg-purple-500'
        },
        {
            title: 'Total Inquiries',
            value: stats.totalInquiries,
            icon: DollarSign,
            color: 'bg-yellow-500'
        }
    ]

    const pieData = useMemo(() => {
        return stats.propertiesByType.map(item => ({
            name: item.type.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
            value: item.count
        }))
    }, [stats.propertiesByType])

    return (
        <div className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {cards.map((card, index) => {
                    const Icon = card.icon
                    return (
                        <div
                            key={index}
                            className="bg-white rounded-lg shadow-md p-6"
                        >
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-gray-500 text-sm">{card.title}</p>
                                    <p className="text-2xl font-semibold mt-1">{card.value}</p>
                                </div>
                                <div className={`p-3 rounded-full ${card.color}`}>
                                    <Icon className="w-6 h-6 text-white" />
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

            {/* Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Properties by Status */}
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-lg font-semibold mb-4">Properties by Status</h3>
                    <div className="h-[300px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={stats.propertiesByStatus}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis
                                    dataKey="status"
                                    tickFormatter={(value) =>
                                        value.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
                                    }
                                />
                                <YAxis />
                                <Tooltip
                                    formatter={(value, name) => [value, 'Properties']}
                                    labelFormatter={(label) =>
                                        label.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
                                    }
                                />
                                <Bar dataKey="count" fill="#2C3E50" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Properties by Type */}
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-lg font-semibold mb-4">Properties by Type</h3>
                    <div className="h-[300px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={pieData}
                                    cx="50%"
                                    cy="50%"
                                    labelLine={false}
                                    label={({
                                        cx,
                                        cy,
                                        midAngle,
                                        innerRadius,
                                        outerRadius,
                                        value,
                                        name
                                    }) => {
                                        const RADIAN = Math.PI / 180
                                        const radius = innerRadius + (outerRadius - innerRadius) * 0.5
                                        const x = cx + radius * Math.cos(-midAngle * RADIAN)
                                        const y = cy + radius * Math.sin(-midAngle * RADIAN)

                                        return (
                                            <text
                                                x={x}
                                                y={y}
                                                fill="#000"
                                                textAnchor={x > cx ? 'start' : 'end'}
                                                dominantBaseline="central"
                                            >
                                                {name} ({value})
                                            </text>
                                        )
                                    }}
                                    outerRadius={80}
                                    fill="#8884d8"
                                    dataKey="value"
                                >
                                    {pieData.map((entry, index) => (
                                        <Cell
                                            key={`cell-${index}`}
                                            fill={COLORS[index % COLORS.length]}
                                        />
                                    ))}
                                </Pie>
                                <Tooltip />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Inquiries Trend */}
                <div className="bg-white rounded-lg shadow-md p-6 lg:col-span-2">
                    <h3 className="text-lg font-semibold mb-4">Inquiries Trend</h3>
                    <div className="h-[300px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={stats.inquiriesByMonth}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="month" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Line
                                    type="monotone"
                                    dataKey="count"
                                    name="Inquiries"
                                    stroke="#2C3E50"
                                    strokeWidth={2}
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </div>
    )
} 