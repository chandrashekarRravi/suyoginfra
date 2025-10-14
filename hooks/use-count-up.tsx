"use client"

import { useEffect, useRef, useState } from "react"

interface UseCountUpProps {
    end: number
    duration?: number
    startOnIntersect?: boolean
    threshold?: number
}

export function useCountUp({
    end,
    duration = 2000,
    startOnIntersect = true,
    threshold = 0.1
}: UseCountUpProps) {
    const [count, setCount] = useState(0)
    const [isVisible, setIsVisible] = useState(false)
    const [hasAnimated, setHasAnimated] = useState(false)
    const elementRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        // Reset state when component mounts (for page navigation)
        setIsVisible(false)
        setHasAnimated(false)
        setCount(0)

        if (!startOnIntersect) {
            // Start animation immediately when page loads
            const timer = setTimeout(() => {
                setIsVisible(true)
                setHasAnimated(true)
            }, 200) // Small delay to ensure proper rendering

            return () => clearTimeout(timer)
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated) {
                    setIsVisible(true)
                    setHasAnimated(true)
                }
            },
            { threshold }
        )

        if (elementRef.current) {
            observer.observe(elementRef.current)
        }

        return () => observer.disconnect()
    }, [startOnIntersect, threshold, hasAnimated])

    useEffect(() => {
        if (!isVisible) return

        let startTime: number
        let animationFrame: number

        const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime
            const progress = Math.min((currentTime - startTime) / duration, 1)

            // Easing function for smooth animation
            const easeOutQuart = 1 - Math.pow(1 - progress, 4)
            const currentCount = Math.floor(easeOutQuart * end)

            setCount(currentCount)

            if (progress < 1) {
                animationFrame = requestAnimationFrame(animate)
            }
        }

        animationFrame = requestAnimationFrame(animate)

        return () => {
            if (animationFrame) {
                cancelAnimationFrame(animationFrame)
            }
        }
    }, [isVisible, end, duration])

    return { count, elementRef }
}
