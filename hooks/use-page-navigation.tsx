"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

export function usePageNavigation() {
    const [isPageLoaded, setIsPageLoaded] = useState(false)
    const [animationKey, setAnimationKey] = useState(0)
    const pathname = usePathname()

    useEffect(() => {
        // Reset states when pathname changes
        setIsPageLoaded(false)
        setAnimationKey(prev => prev + 1)

        // Set loaded state after a brief delay to ensure proper rendering
        const timer = setTimeout(() => {
            setIsPageLoaded(true)
        }, 100)

        return () => clearTimeout(timer)
    }, [pathname])

    return { isPageLoaded, animationKey }
}
