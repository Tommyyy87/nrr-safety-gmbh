import React, { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface LogoSliderProps {
    logos: {
        src: string;
        alt: string;
        href?: string;
    }[];
    className?: string;
    autoScroll?: boolean;
    autoScrollInterval?: number;
    slidesToShow?: number;
}

const LogoSlider: React.FC<LogoSliderProps> = ({
    logos,
    className,
    autoScroll = true,
    autoScrollInterval = 3000,
    slidesToShow = 4,
}) => {
    const sliderRef = useRef<HTMLDivElement>(null);
    const [paused, setPaused] = useState(false);
    const touchStartX = useRef(0);
    const touchEndX = useRef(0);
    const autoScrollTimerRef = useRef<number | null>(null);
    const [logoWidth, setLogoWidth] = useState(0);
    const [translateX, setTranslateX] = useState(0);
    const [visibleSlides, setVisibleSlides] = useState(slidesToShow);

    // Dupliziere die Logos für den Endlos-Effekt
    const extendedLogos = [...logos, ...logos, ...logos]; // Dreimal für flüssigere Animation

    // Berechne die Breite der Logos und die Anzahl der sichtbaren Slides basierend auf der Bildschirmgröße
    useEffect(() => {
        const updateDimensions = () => {
            if (sliderRef.current) {
                const containerWidth = sliderRef.current.clientWidth;

                // Responsive Anpassung der sichtbaren Slides
                let newVisibleSlides = slidesToShow;
                if (window.innerWidth < 640) {
                    newVisibleSlides = 1;
                } else if (window.innerWidth < 768) {
                    newVisibleSlides = 2;
                } else if (window.innerWidth < 1024) {
                    newVisibleSlides = 3;
                }

                setVisibleSlides(newVisibleSlides);
                setLogoWidth(containerWidth / newVisibleSlides);
            }
        };

        updateDimensions();
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, [slidesToShow]);

    // Automatischer Scroll mit Animation
    useEffect(() => {
        if (!autoScroll || paused || !logoWidth) return;

        const startAutoScroll = () => {
            if (autoScrollTimerRef.current) {
                clearInterval(autoScrollTimerRef.current);
            }

            autoScrollTimerRef.current = window.setInterval(() => {
                setTranslateX(prev => {
                    // Wenn wir nahe am Ende des ersten Sets von Logos sind, springen wir zurück zum Anfang (aber visuell nahtlos)
                    if (prev <= -logoWidth * (logos.length - 1)) {
                        return 0;
                    }
                    return prev - logoWidth;
                });
            }, autoScrollInterval);
        };

        startAutoScroll();

        return () => {
            if (autoScrollTimerRef.current) {
                clearInterval(autoScrollTimerRef.current);
            }
        };
    }, [autoScroll, autoScrollInterval, logoWidth, logos.length, paused]);

    // Manuelles Scrollen
    const scroll = (direction: "left" | "right") => {
        if (!logoWidth) return;

        const scrollAmount = direction === "left" ? logoWidth : -logoWidth;

        setTranslateX(prev => {
            let newTranslate = prev + scrollAmount;

            // Wenn wir zu weit nach links scrollen würden, zum Ende springen
            if (newTranslate > 0) {
                newTranslate = -logoWidth * (logos.length - visibleSlides);
            }

            // Wenn wir zu weit nach rechts scrollen würden, zum Anfang springen
            if (newTranslate < -logoWidth * (logos.length - 1)) {
                newTranslate = 0;
            }

            return newTranslate;
        });
    };

    // Touch-Events für mobile Geräte
    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.touches[0].clientX;
        setPaused(true);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        touchEndX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = () => {
        const diff = touchStartX.current - touchEndX.current;
        if (diff > 50) {
            // Nach links gewischt (nach rechts scrollen)
            scroll("right");
        } else if (diff < -50) {
            // Nach rechts gewischt (nach links scrollen)
            scroll("left");
        }

        // Nach einer kurzen Pause den Auto-Scroll wieder aktivieren
        setTimeout(() => setPaused(false), 1000);
    };

    // Maus-Events für Desktop
    const handleMouseEnter = () => setPaused(true);
    const handleMouseLeave = () => setPaused(false);

    return (
        <div className={cn("relative group", className)}>
            {/* Linke Navigationstaste */}
            <button
                onClick={() => scroll("left")}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 md:w-10 md:h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-100 transition-opacity duration-300 opacity-70 group-hover:opacity-100"
                aria-label="Zurück"
            >
                <ChevronLeft className="h-5 w-5 text-nrr-blue" />
            </button>

            {/* Slider-Container mit Overflow */}
            <div
                ref={sliderRef}
                className="overflow-hidden py-6"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            >
                {/* Animierte innere Container mit allen Logos */}
                <div
                    className="flex transition-transform duration-500"
                    style={{
                        transform: `translateX(${translateX}px)`,
                        width: `${extendedLogos.length * logoWidth}px`
                    }}
                >
                    {extendedLogos.map((logo, index) => (
                        <div
                            key={`${logo.alt}-${index}`}
                            className="flex items-center justify-center px-4"
                            style={{ width: `${logoWidth}px` }}
                        >
                            {logo.href ? (
                                <a
                                    href={logo.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block flex items-center justify-center h-full"
                                    aria-label={`${logo.alt} Website besuchen`}
                                >
                                    <img
                                        src={logo.src}
                                        alt={logo.alt}
                                        className="max-h-24 md:max-h-32 w-auto max-w-full object-contain"
                                    />
                                </a>
                            ) : (
                                <img
                                    src={logo.src}
                                    alt={logo.alt}
                                    className="max-h-24 md:max-h-32 w-auto max-w-full object-contain"
                                />
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Rechte Navigationstaste */}
            <button
                onClick={() => scroll("right")}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 md:w-10 md:h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-100 transition-opacity duration-300 opacity-70 group-hover:opacity-100"
                aria-label="Weiter"
            >
                <ChevronRight className="h-5 w-5 text-nrr-blue" />
            </button>
        </div>
    );
};

export default LogoSlider;