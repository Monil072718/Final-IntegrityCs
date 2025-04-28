import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

// This would typically come from a database or API
const getProjectData = (id: string) => {
  // Mock data for demonstration
  return {
    id,
    title: "Modern Office Complex",
    description: "A state-of-the-art office building with sustainable features and innovative design.",
    fullDescription:
      "This modern office complex spans over 50,000 square feet and incorporates cutting-edge sustainable technologies. The building features solar panels, rainwater harvesting systems, and energy-efficient HVAC systems. The structural design includes reinforced concrete frames with post-tensioned slabs to maximize floor space flexibility. The façade combines glass curtain walls with aluminum composite panels for a contemporary aesthetic while maintaining thermal efficiency.",
    image: "/placeholder.svg?height=1080&width=1920",
    gallery: [
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=800&width=1200",
      "/placeholder.svg?height=800&width=1200",
    ],
    category: "Commercial",
    client: "Metro Developments Inc.",
    location: "Downtown Metro",
    startDate: "March 2023",
    endDate: "Expected December 2024",
    progress: 75,
    features: [
      "LEED Gold Certification",
      "Smart Building Technology",
      "Earthquake Resistant Design",
      "Green Roof Garden",
      "Underground Parking",
    ],
    challenges: [
      "Complex foundation requirements due to soil conditions",
      "Integration of multiple sustainable systems",
      "Tight urban construction site with limited access",
    ],
  }
}

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  const project = getProjectData(params.id)

  return (
    <div className="pt-24 pb-16">
      <div className="container">
        <Link href="/projects">
          <Button variant="ghost" className="mb-6 pl-0">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Button>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{project.title}</h1>
              <p className="text-muted-foreground mb-6">{project.description}</p>
              <div className="prose dark:prose-invert max-w-none">
                <p>{project.fullDescription}</p>

                <h3>Key Features</h3>
                <ul>
                  {project.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>

                <h3>Challenges & Solutions</h3>
                <ul>
                  {project.challenges.map((challenge, index) => (
                    <li key={index}>{challenge}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Project Gallery</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {project.gallery.map((image, index) => (
                  <div key={index} className="relative h-48 rounded-lg overflow-hidden">
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${project.title} - Image ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-card rounded-lg border p-6">
              <h3 className="text-xl font-bold mb-4">Project Details</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground">Client</h4>
                  <p>{project.client}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground">Location</h4>
                  <p>{project.location}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground">Project Timeline</h4>
                  <p>
                    {project.startDate} - {project.endDate}
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground">Category</h4>
                  <p>{project.category}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground">Progress</h4>
                  <div className="flex items-center gap-2">
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: `${project.progress}%` }} />
                    </div>
                    <span className="text-sm font-medium">{project.progress}%</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg border p-6">
              <h3 className="text-xl font-bold mb-4">Interested in this project?</h3>
              <p className="text-muted-foreground mb-4">
                Contact us to learn more about this project or discuss your own project requirements.
              </p>
              <Link href="/contact">
                <Button className="w-full">Contact Us</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
