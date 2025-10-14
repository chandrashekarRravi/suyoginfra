"use client"

import { useEffect, useRef, useState } from "react"

interface UseCountUpProps {
    end: number
    duration?: number
    startOnIntersect?: boolean
    threshold?: number
    delay?: number
}

export function useCountUp({
    end,
    duration = 2000,
    startOnIntersect = true,
    threshold = 0.1,
    delay = 0
}: UseCountUpProps) {
    const [count, setCount] = useState(0)
    const [isVisible, setIsVisible] = useState(false)
    const [hasAnimated, setHasAnimated] = useState(false)
    const elementRef = useRef<HTMLDivElement>(null)
    const timeoutRef = useRef<NodeJS.Timeout>()

    useEffect(() => {
        // Reset state when component mounts (for page navigation)
        setIsVisible(false)
        setHasAnimated(false)
        setCount(0)

        if (!startOnIntersect) {
            // Start animation after a delay to ensure proper rendering and page load
            timeoutRef.current = setTimeout(() => {
                setIsVisible(true)
                setHasAnimated(true)
            }, delay + 500) // Increased delay to ensure page is fully loaded
        } else {
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
        }

        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current)
            }
        }
    }, [startOnIntersect, threshold, delay]) // Removed hasAnimated from dependencies

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
