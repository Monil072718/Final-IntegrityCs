"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Projects", path: "/projects" },
  { name: "Gallery", path: "/gallery" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isHidden, setIsHidden] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const lastScrollY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsHidden(true)
      } else {
        setIsHidden(false)
      }

      setIsScrolled(currentScrollY > 10)
      lastScrollY.current = currentScrollY
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    setIsScrolled(window.scrollY > 10)
    lastScrollY.current = window.scrollY

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-md py-2" : "bg-transparent py-4",
        isHidden && !mobileMenuOpen ? "-translate-y-full" : "translate-y-0",
      )}
    >
      <div className="container flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <span className="text-primary font-bold text-2xl transition-transform duration-300 group-hover:scale-105">
            BuildMaster
          </span>
          <span className="hidden sm:inline-block text-xl font-light transition-opacity duration-300 group-hover:opacity-80">
            Engineering
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={cn(
                "text-sm font-medium transition-all duration-300 hover:text-primary relative overflow-hidden group",
                pathname === item.path
                  ? "text-primary after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-primary"
                  : "text-muted-foreground",
              )}
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-primary transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300"></span>
            </Link>
          ))}
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Link href="/contact#quote">
              <Button size="sm" className="ml-4 transition-all duration-300 hover:scale-105 hover:shadow-md">
                Get Quote
              </Button>
            </Link>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-4 md:hidden">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className="transition-all duration-300 hover:bg-primary/10"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md shadow-md py-4 border-t">
          <div className="container flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary py-2",
                  pathname === item.path ? "text-primary" : "text-muted-foreground",
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link href="/contact#quote" onClick={() => setMobileMenuOpen(false)}>
              <Button size="sm" className="w-full transition-all duration-300 hover:scale-105">
                Get Quote
              </Button>
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}