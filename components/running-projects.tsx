"use client"
import Image from "next/image"
import Link from "next/link"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Modern Office Complex",
    description: "A state-of-the-art office building with sustainable features and innovative design.",
    image: "/placeholder.svg?height=600&width=800",
    category: "Commercial",
    progress: 75,
    location: "Downtown Metro",
    link: "/projects/office-complex",
  },
  {
    id: 2,
    title: "Highway Bridge Construction",
    description: "Reinforced concrete bridge spanning 1.2km with advanced structural engineering.",
    image: "/placeholder.svg?height=600&width=800",
    category: "Infrastructure",
    progress: 60,
    location: "River Valley",
    link: "/projects/highway-bridge",
  },
  {
    id: 3,
    title: "Residential Tower",
    description: "Luxury residential tower with 45 floors featuring modern amenities and earthquake-resistant design.",
    image: "/placeholder.svg?height=600&width=800",
    category: "Residential",
    progress: 40,
    location: "Coastal Heights",
    link: "/projects/residential-tower",
  },
]

export default function RunningProjects() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section className="py-16 container" id="projects">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Running Projects</h2>
        <p className="text-muted-foreground">
          Explore our ongoing projects showcasing our expertise in civil engineering and construction.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" ref={ref}>
        {projects.map((project, index) => (
          <Card
            key={project.id}
            className={`overflow-hidden border-none shadow-lg transition-all duration-500 hover:shadow-xl ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: `${index * 150}ms` }}
          >
            <div className="relative h-60 overflow-hidden">
              <div className="absolute top-4 left-4 z-10 bg-primary text-primary-foreground text-sm font-medium py-1 px-3 rounded-full">
                {project.category}
              </div>
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

              <div className="flex items-center justify-between mb-4">
                <div className="text-sm">
                  <span className="text-muted-foreground">Location:</span> {project.location}
                </div>
                <div className="text-sm font-medium text-primary">{project.progress}% Complete</div>
              </div>

              <div className="w-full bg-muted rounded-full h-2 mb-6">
                <div className="bg-primary h-2 rounded-full" style={{ width: `${project.progress}%` }} />
              </div>

              <Link href={project.link}>
                <Button className="w-full group">
                  View Details
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link href="/projects">
          <Button variant="outline" size="lg">
            View All Projects
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </section>
  )
}
