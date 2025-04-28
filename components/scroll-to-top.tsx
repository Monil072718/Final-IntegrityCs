"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowUp } from "lucide-react"

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <div
      className={`fixed bottom-6 right-6 z-40 transition-opacity duration-300 ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
    >
      <Button
        onClick={scrollToTop}
        size="icon"
        className="rounded-full shadow-lg hover:shadow-xl hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:scale-110"
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-5 w-5" />
      </Button>
    </div>
  )
}
