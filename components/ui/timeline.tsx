"use client"

import React, { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface TimelineItem {
    title: string
    year: string
    content: React.ReactNode
    image?: string
    achievements?: string[]
}

interface TimelineProps {
    data: TimelineItem[]
    className?: string
}

export function Timeline({ data, className }: TimelineProps) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    return (
        <div ref={ref} className={cn("relative w-full overflow-hidden", className)}>
            <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-8 top-0 h-full w-0.5 bg-gradient-to-b from-tata-blue/20 via-tata-blue to-tata-blue/20 md:left-1/2 md:w-0.5 md:-translate-x-1/2" />

                {/* Timeline items */}
                <div className="space-y-8">
                    {data.map((item, index) => (
                        <TimelineItemComponent
                            key={index}
                            item={item}
                            index={index}
                            isInView={isInView}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

interface TimelineItemComponentProps {
    item: TimelineItem
    index: number
    isInView: boolean
}

function TimelineItemComponent({ item, index, isInView }: TimelineItemComponentProps) {
    const itemRef = useRef(null)
    const itemInView = useInView(itemRef, { once: false, margin: "-50px" })

    const isEven = index % 2 === 0

    return (
        <motion.div
            ref={itemRef}
            initial={{ opacity: 0, y: 50 }}
            animate={itemInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className={cn(
                "relative flex items-center",
                "md:flex-row",
                isEven ? "md:flex-row-reverse" : "md:flex-row"
            )}
        >
            {/* Timeline dot */}
            <div className="absolute left-8 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-tata-blue text-xs font-bold text-white shadow-lg md:left-1/2 md:h-12 md:w-12 md:-translate-x-1/2 md:text-sm">
                {item.year}
            </div>

            {/* Content */}
            <div className={cn(
                "ml-16 w-full md:ml-0 md:w-1/2",
                isEven ? "md:pr-16 md:text-right" : "md:pl-16"
            )}>
                <motion.div
                    initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                    animate={itemInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? 50 : -50 }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                    className="rounded-lg bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl"
                >
                    <h3 className="mb-2 font-montserrat text-xl font-semibold text-gray-900">
                        {item.title}
                    </h3>
                    <p className="mb-4 text-sm text-gray-600">
                        {item.year}
                    </p>

                    <div className="space-y-4">
                        {item.content}
                    </div>

                    {/* Achievements */}
                    {item.achievements && (
                        <div className="mt-4 space-y-2">
                            {item.achievements.map((achievement, achievementIndex) => (
                                <motion.div
                                    key={achievementIndex}
                                    initial={{ opacity: 0, x: isEven ? 20 : -20 }}
                                    animate={itemInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? 20 : -20 }}
                                    transition={{ duration: 0.4, delay: index * 0.2 + 0.5 + achievementIndex * 0.1 }}
                                    className="flex items-center gap-2 text-xs text-gray-700"
                                >
                                    <span className="text-green-500">*</span>
                                    {achievement}
                                </motion.div>
                            ))}
                        </div>
                    )}

                    {/* Image */}
                    {item.image && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={itemInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
                            className="relative mt-4 h-32 w-full md:h-40"
                        >
                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                className="rounded-lg object-cover shadow-md"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </motion.div>
                    )}
                </motion.div>
            </div>

            {/* Spacer for alternating layout */}
            <div className={cn(
                "hidden md:block md:w-1/2",
                isEven ? "md:pl-16" : "md:pr-16"
            )}>
                <div className="text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={itemInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.6, delay: index * 0.2 + 0.2 }}
                        className="text-4xl font-bold text-tata-blue/20"
                    >
                        {item.year}
                    </motion.div>
                </div>
            </div>
        </motion.div>
    )
}

// Enhanced Timeline with lazy loading
export function LazyTimeline({ data, className }: TimelineProps) {
    const [visibleItems, setVisibleItems] = useState<TimelineItem[]>([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const loadItems = async () => {
            setIsLoading(true)

            // Simulate progressive loading
            for (let i = 0; i < data.length; i++) {
                await new Promise(resolve => setTimeout(resolve, 300))
                setVisibleItems(prev => [...prev, data[i]])
            }

            setIsLoading(false)
        }

        loadItems()
    }, [data])

    if (isLoading && visibleItems.length === 0) {
        return (
            <div className="flex items-center justify-center py-12">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-tata-blue"></div>
            </div>
        )
    }

    return (
        <div className={cn("relative w-full overflow-hidden", className)}>
            <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-8 top-0 h-full w-0.5 bg-gradient-to-b from-tata-blue/20 via-tata-blue to-tata-blue/20 md:left-1/2 md:w-0.5 md:-translate-x-1/2" />

                {/* Timeline items */}
                <div className="space-y-8">
                    {visibleItems.map((item, index) => (
                        <TimelineItemComponent
                            key={index}
                            item={item}
                            index={index}
                            isInView={true}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
