"use client";

import React, { useEffect, useState } from "react";

interface Logo {
    id: string;
    description: string;
    image: string | any;
    className?: string;
}

interface Logos3Props {
    heading?: string;
    logos?: Logo[];
    className?: string;
}

const Logos3 = ({
    heading = "Our Trusted Clients",
    logos = [
        {
            id: "logo-1",
            description: "Bion",
            image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=64&fit=crop&crop=center",
            className: "h-18 w-auto",
        },
        {
            id: "logo-2",
            description: "Ibis Hotels",
            image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=200&h=64&fit=crop&crop=center",
            className: "h-18 w-auto",
        },
        {
            id: "logo-3",
            description: "Blusmart",
            image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200&h=64&fit=crop&crop=center",
            className: "h-18 w-auto",
        },
        {
            id: "logo-4",
            description: "CloudExtel",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=200&h=64&fit=crop&crop=center",
            className: "h-18 w-auto",
        },
        {
            id: "logo-5",
            description: "Exponent Power",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=200&h=64&fit=crop&crop=center",
            className: "h-18 w-auto",
        },
        {
            id: "logo-6",
            description: "HillRock",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=64&fit=crop&crop=center",
            className: "h-18 w-auto",
        },
        {
            id: "logo-7",
            description: "Park+",
            image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=200&h=64&fit=crop&crop=center",
            className: "h-18 w-auto",
        },
        {
            id: "logo-8",
            description: "RV University",
            image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=200&h=64&fit=crop&crop=center",
            className: "h-18 w-auto",
        },
        {
            id: "logo-9",
            description: "Statiq",
            image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200&h=64&fit=crop&crop=center",
            className: "h-18 w-auto",
        },
        {
            id: "logo-10",
            description: "Sun Mobility",
            image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200&h=64&fit=crop&crop=center",
            className: "h-18 w-auto",
        },
        {
            id: "logo-11",
            description: "Bosch",
            image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=64&fit=crop&crop=center",
            className: "h-18 w-auto",
        },
        {
            id: "logo-12",
            description: "Velociti",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=200&h=64&fit=crop&crop=center",
            className: "h-18 w-auto",
        },
    ],
}: Logos3Props) => {
    // Duplicate logos for seamless infinite scroll
    const duplicatedLogos = [...logos, ...logos];

    return (
        <section className="py-16">
            <div className="container flex flex-col items-center text-center">
                <h2 className="my-6 text-2xl font-bold text-pretty lg:text-4xl font-montserrat">
                    {heading}
                </h2>
                <p className="mt-4 max-w-2xl text-gray-600">
                    We've had the privilege of working with leading organizations across industries.
                </p>
            </div>
            <div className="pt-10 md:pt-16 lg:pt-20">
                <div className="relative mx-auto flex items-center justify-center lg:max-w-5xl overflow-hidden">
                    <div className="flex animate-scroll hover:pause">
                        {duplicatedLogos.map((logo, index) => (
                            <div
                                key={`${logo.id}-${index}`}
                                className="flex shrink-0 items-center justify-center mx-8"
                            >
                                <img
                                    src={logo.image}
                                    alt={logo.description}
                                    className={`${logo.className} transition-opacity duration-300 hover:opacity-80`}
                                    loading="lazy"
                                />
                            </div>
                        ))}
                    </div>
                    <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-white to-transparent"></div>
                    <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-white to-transparent"></div>
                </div>
            </div>
        </section>
    );
};

export { Logos3 };
