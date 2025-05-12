"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Calendar, MapPin, Award } from "lucide-react"

const allProjects = [
  {
    id: "office-complex",
    title: "Modern Office Complex",
    description: "A state-of-the-art office building with sustainable features and innovative design.",
    image: "/Moder_office.webp",
    category: "Commercial",
    location: "Downtown Metro",
    startDate: "March 2023",
    endDate: "Expected December 2024",
    link: "/projects/office-complex",
  },
  {
    id: "highway-bridge",
    title: "Highway Bridge Construction",
    description: "Reinforced concrete bridge spanning 1.2km with advanced structural engineering.",
    image: "/bridge construction.webp",
    category: "Infrastructure",
    location: "River Valley",
    startDate: "January 2023",
    endDate: "Expected October 2024",
    link: "/projects/highway-bridge",
  },
  {
    id: "residential-tower",
    title: "Residential Tower",
    description: "Luxury residential tower with 45 floors featuring modern amenities and earthquake-resistant design.",
    image: "/commercial.webp",
    category: "Residential",
    location: "Coastal Heights",
    startDate: "June 2023",
    endDate: "Expected July 2025",
    link: "/projects/residential-tower",
  },
  {
    id: "commercial-tower",
    title: "Commercial Tower",
    description: "A 35-story commercial tower with state-of-the-art facilities and sustainable design.",
    image: "/luxery.webp",
    completionDate: "December 2022",
    location: "Downtown Metro",
    awards: ["Best Commercial Design 2022", "Sustainability Excellence Award"],
    link: "/projects/completed/commercial-tower",
  },
 
]

const categories = ["All", "Commercial", "Residential", "Infrastructure", "Healthcare", "Educational", "Industrial"]

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredProjects = allProjects.filter((project) => {
    return activeCategory === "All" || project.category === activeCategory
  })

  return (
    <div className="pt-24 pb-16">
      <div
        className="relative bg-cover bg-center py-20 mb-12"
        style={{
          backgroundImage: 'url("/placeholder.svg?height=1080&width=1920")',
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Our Projects</h1>
          <p className="text-white/80 max-w-2xl mx-auto">
            Explore our portfolio of projects showcasing our expertise in civil engineering and construction.
          </p>
        </div>
      </div>

      <div className="container">
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === activeCategory ? "default" : "outline"}
              className="mb-2 transition-all duration-300 hover:shadow-md"
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {filteredProjects.map((project) => (
              <Card
                key={project.id}
                className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px]"
              >
                <div className="relative h-64 overflow-hidden">
                  <Badge className="absolute top-4 left-4 z-10">{project.category}</Badge>
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{project.description}</p>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm">
                      <MapPin className="h-4 w-4 mr-2 text-primary" />
                      <span>{project.location}</span>
                    </div>

                  </div>

                  <Link href={project.link}>
                    <Button className="w-full group transition-all duration-300 hover:shadow-md">
                      View Details
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-xl font-bold mb-2">No projects found</h3>
            <p className="text-muted-foreground mb-4">Try adjusting your filter criteria</p>
            <Button
              onClick={() => setActiveCategory("All")}
              className="transition-all duration-300 hover:scale-105"
            >
              Reset Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}