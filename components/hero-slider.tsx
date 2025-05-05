"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const slides = [
  {
    id: 1,
    title: "Innovative Structural Design",
    description: "Pushing the boundaries of modern civil engineering with cutting-edge structural solutions",
    image: "/2.jpg",
    link: "/projects/structural-design",
  },
  {
    id: 2,
    title: "Sustainable Infrastructure",
    description: "Creating eco-friendly infrastructure that stands the test of time",
    image: "/mainbanner02.jpg",
    link: "/projects/sustainable-infrastructure",
  },
  {
    id: 3,
    title: "Urban Development",
    description: "Transforming urban landscapes with thoughtful and functional design",
    image: "/urban%20developement.jpg", // updated image path
    link: "/projects/urban-development",
  },
]


export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const nextSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
    setTimeout(() => setIsAnimating(false), 500)
  }

  const prevSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
    setTimeout(() => setIsAnimating(false), 500)
  }

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000",
            currentSlide === index ? "opacity-100" : "opacity-0 pointer-events-none",
          )}
        >
          <div className="absolute inset-0 bg-black/50 z-10" />
          <Image
            src={slide.image || "/placeholder.svg"}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-4 pt-16">
            <div className="max-w-3xl mx-auto space-y-6">
              <h1
                className={cn(
                  "text-4xl md:text-6xl font-bold text-white transition-all duration-700",
                  currentSlide === index ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0",
                )}
              >
                {slide.title}
              </h1>
              <p
                className={cn(
                  "text-xl text-white/90 transition-all duration-700 delay-100",
                  currentSlide === index ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0",
                )}
              >
                {slide.description}
              </p>
              <div
                className={cn(
                  "pt-4 transition-all duration-700 delay-200",
                  currentSlide === index ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0",
                )}
              >
                <Link href={slide.link}>
                  <Button size="lg" className="mr-4">
                    View Details
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 text-white hover:bg-black/20 h-12 w-12"
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-8 w-8" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 text-white hover:bg-black/20 h-12 w-12"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <ChevronRight className="h-8 w-8" />
      </Button>

      {/* Indicators */}
      <div className="absolute bottom-8 left-0 right-0 z-30 flex justify-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={cn(
              "w-3 h-3 rounded-full transition-all",
              currentSlide === index ? "bg-primary w-10" : "bg-white/50 hover:bg-white/80",
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
