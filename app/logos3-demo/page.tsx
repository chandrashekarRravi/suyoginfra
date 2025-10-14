"use client"

import React from "react"
import { Logos3 } from "@/components/ui/logos3"

export default function Logos3DemoPage() {
    const demoData = {
        heading: "Trusted by these companies",
        logos: [
            {
                id: "logo-1",
                description: "Astro",
                image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=64&fit=crop&crop=center",
                className: "h-12 w-auto",
            },
            {
                id: "logo-2",
                description: "Figma",
                image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=200&h=64&fit=crop&crop=center",
                className: "h-12 w-auto",
            },
            {
                id: "logo-3",
                description: "Next.js",
                image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200&h=64&fit=crop&crop=center",
                className: "h-12 w-auto",
            },
            {
                id: "logo-4",
                description: "React",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=200&h=64&fit=crop&crop=center",
                className: "h-12 w-auto",
            },
            {
                id: "logo-5",
                description: "shadcn/ui",
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=200&h=64&fit=crop&crop=center",
                className: "h-12 w-auto",
            },
            {
                id: "logo-6",
                description: "Supabase",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=64&fit=crop&crop=center",
                className: "h-12 w-auto",
            },
            {
                id: "logo-7",
                description: "Tailwind CSS",
                image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=200&h=64&fit=crop&crop=center",
                className: "h-10 w-auto",
            },
            {
                id: "logo-8",
                description: "Vercel",
                image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=200&h=64&fit=crop&crop=center",
                className: "h-12 w-auto",
            },
        ],
    }

    return (
        <div className="pt-24">
            <section className="relative bg-gray-50 py-24">
                <div className="container mx-auto px-4">
                    <div className="mx-auto max-w-3xl text-center">
                        <h1 className="font-montserrat text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
                            Logos3 <span className="text-tata-blue">Demo</span>
                        </h1>
                        <p className="mt-6 text-lg text-gray-600">
                            Explore our new animated carousel component for client logos.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-4">
                    <Logos3 {...demoData} />
                </div>
            </section>
        </div>
    )
}
