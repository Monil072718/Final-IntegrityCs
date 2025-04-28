import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar, MapPin, Award, ArrowRight } from "lucide-react"

// This would typically come from a database or API
const completedProjects = [
  {
    id: "commercial-tower",
    title: "Commercial Tower",
    description: "A 35-story commercial tower with state-of-the-art facilities and sustainable design.",
    image: "/placeholder.svg?height=600&width=800",
    category: "Commercial",
    completionDate: "December 2022",
    location: "Downtown Metro",
    awards: ["Best Commercial Design 2022", "Sustainability Excellence Award"],
    link: "/projects/completed/commercial-tower",
  },
  {
    id: "highway-bridge",
    title: "Highway Bridge",
    description: "A 1.2km reinforced concrete bridge connecting two major highways.",
    image: "/placeholder.svg?height=600&width=800",
    category: "Infrastructure",
    completionDate: "August 2021",
    location: "River Valley",
    awards: ["Engineering Excellence Award"],
    link: "/projects/completed/highway-bridge",
  },
  {
    id: "residential-complex",
    title: "Luxury Residential Complex",
    description: "A complex of 5 residential buildings with 250 premium apartments and amenities.",
    image: "/placeholder.svg?height=600&width=800",
    category: "Residential",
    completionDate: "March 2023",
    location: "Coastal Heights",
    awards: ["Best Residential Project 2023"],
    link: "/projects/completed/residential-complex",
  },
  {
    id: "shopping-mall",
    title: "Metro Shopping Mall",
    description: "A modern shopping mall with 150 retail spaces, food court, and entertainment zones.",
    image: "/placeholder.svg?height=600&width=800",
    category: "Commercial",
    completionDate: "November 2022",
    location: "City Center",
    awards: [],
    link: "/projects/completed/shopping-mall",
  },
  {
    id: "hospital-building",
    title: "General Hospital",
    description: "A modern 500-bed hospital with specialized medical facilities and emergency services.",
    image: "/placeholder.svg?height=600&width=800",
    category: "Healthcare",
    completionDate: "June 2021",
    location: "North District",
    awards: ["Healthcare Design Excellence"],
    link: "/projects/completed/hospital-building",
  },
  {
    id: "university-campus",
    title: "University Campus",
    description: "A comprehensive university campus with academic buildings, dormitories, and sports facilities.",
    image: "/placeholder.svg?height=600&width=800",
    category: "Educational",
    completionDate: "September 2020",
    location: "Education Valley",
    awards: ["Educational Architecture Award"],
    link: "/projects/completed/university-campus",
  },
  {
    id: "industrial-complex",
    title: "Industrial Manufacturing Complex",
    description: "A large-scale industrial complex with manufacturing plants and logistics facilities.",
    image: "/placeholder.svg?height=600&width=800",
    category: "Industrial",
    completionDate: "February 2022",
    location: "Industrial Zone",
    awards: [],
    link: "/projects/completed/industrial-complex",
  },
  {
    id: "sports-stadium",
    title: "Multi-purpose Sports Stadium",
    description: "A 50,000-seat stadium with retractable roof and modern facilities for various sports events.",
    image: "/placeholder.svg?height=600&width=800",
    category: "Sports",
    completionDate: "July 2021",
    location: "Sports City",
    awards: ["Sports Venue of the Year"],
    link: "/projects/completed/sports-stadium",
  },
]

// Categories for filtering
const categories = [
  "All",
  "Commercial",
  "Residential",
  "Infrastructure",
  "Healthcare",
  "Educational",
  "Industrial",
  "Sports",
]

export default function CompletedProjectsPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container">
        <Link href="/projects">
          <Button variant="ghost" className="mb-6 pl-0">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Button>
        </Link>

        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Completed Projects</h1>
          <p className="text-muted-foreground">
            Browse through our portfolio of successfully completed projects that showcase our expertise and commitment
            to excellence.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button key={category} variant={category === "All" ? "default" : "outline"} className="mb-2">
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {completedProjects.map((project) => (
            <Card key={project.id} className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all">
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
                    <Calendar className="h-4 w-4 mr-2 text-primary" />
                    <span>Completed: {project.completionDate}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <MapPin className="h-4 w-4 mr-2 text-primary" />
                    <span>{project.location}</span>
                  </div>
                  {project.awards.length > 0 && (
                    <div className="flex items-center text-sm">
                      <Award className="h-4 w-4 mr-2 text-primary" />
                      <span>{project.awards[0]}</span>
                    </div>
                  )}
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
      </div>
    </div>
  )
}
