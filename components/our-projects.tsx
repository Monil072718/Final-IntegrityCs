"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Calendar, MapPin } from "lucide-react"

// This would typically come from a database or API
const projects = [
  {
    id: "office-complex",
    title: "Modern Office Complex",
    description: "A state-of-the-art office building with sustainable features and innovative design.",
    image: "/Moder_office.webp",
    category: "Commercial",
    location: "Downtown Metro",
    date: "Expected completion: December 2024",
    link: "/projects/office-complex",
  },
  {
    id: "highway-bridge",
    title: "Highway Bridge Construction",
    description: "Reinforced concrete bridge spanning 1.2km with advanced structural engineering.",
    image: "/bridge construction.webp",
    category: "Infrastructure",
    location: "River Valley",
    date: "Expected completion: October 2024",
    link: "/projects/highway-bridge",
  },
  {
    id: "commercial-tower",
    title: "Commercial Tower",
    description: "A 35-story commercial tower with state-of-the-art facilities and sustainable design.",
    image: "/commercial.webp",
    category: "Commercial",
    location: "Downtown Metro",
    date: "Completed: December 2022",
    link: "/projects/completed/commercial-tower",
  },
  {
    id: "residential-complex",
    title: "Luxury Residential Complex",
    description: "A complex of 5 residential buildings with 250 premium apartments and amenities.",
    image: "/luxery.webp",
    category: "Residential",
    location: "Coastal Heights",
    date: "Completed: March 2023",
    link: "/projects/completed/residential-complex",
  },
]

const categories = ["All", "Commercial", "Residential", "Infrastructure"]

export default function OurProjects() {
  const [activeCategory, setActiveCategory] = useState("All")
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <section className="py-16 container" id="projects">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Projects</h2>
        <p className="text-muted-foreground">
          Explore our portfolio of projects showcasing our expertise in civil engineering and construction.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {categories.map((category) => (
          <Button
            key={category}
            variant={category === activeCategory ? "default" : "outline"}
            className="mb-2"
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" ref={ref}>
        {filteredProjects.map((project, index) => (
          <Card
            key={project.id}
            className={`overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-500 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            } hover:-translate-y-2`}
            style={{ transitionDelay: `${index * 150}ms` }}
          >
            <div className="relative h-60 overflow-hidden">
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
                <div className="flex items-center text-sm">
                  <Calendar className="h-4 w-4 mr-2 text-primary" />
                  <span>{project.date}</span>
                </div>
              </div>

              <Link href={project.link} passHref>
                <Button className="w-full group" asChild>
                  <a> View Details
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link href="/projects" passHref>
          <Button variant="outline" size="lg" asChild>
            <a>
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </Link>
      </div>
    </section>
  )
}
