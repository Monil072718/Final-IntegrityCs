"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

// This would typically come from an API or CMS
const getBlogPost = (slug: string) => {
  // Mock data for demonstration
  return {
    title: "The Future of Sustainable Construction",
    excerpt:
      "Exploring innovative materials and methods that are shaping the future of sustainable construction practices.",
    content: `
      <p>Sustainable construction is rapidly evolving as new technologies and materials emerge to address the growing environmental concerns in the building industry. This article explores the latest innovations and trends that are shaping the future of sustainable construction.</p>
      
      <h2>Innovative Materials</h2>
      <p>The development of new, eco-friendly building materials is at the forefront of sustainable construction. Materials such as cross-laminated timber (CLT), bamboo composites, and recycled steel are becoming increasingly popular alternatives to traditional materials.</p>
      <p>Cross-laminated timber, in particular, has gained significant attention for its strength, versatility, and carbon-sequestering properties. Buildings constructed with CLT can actually store carbon rather than emit it, making it an excellent choice for environmentally conscious projects.</p>
      
      <h2>Energy Efficiency</h2>
      <p>Energy-efficient design and construction methods are essential components of sustainable building practices. Passive house standards, which focus on creating buildings with minimal energy requirements for heating and cooling, are being adopted worldwide.</p>
      <p>Advanced insulation techniques, strategic window placement, and efficient HVAC systems all contribute to reducing a building's energy footprint. Additionally, the integration of renewable energy sources such as solar panels and wind turbines is becoming standard practice in sustainable construction.</p>
      
      <h2>Smart Building Technology</h2>
      <p>The integration of smart technology in buildings is revolutionizing how we monitor and control energy usage. Automated systems can adjust lighting, heating, and cooling based on occupancy and time of day, significantly reducing energy waste.</p>
      <p>Building Information Modeling (BIM) allows for precise planning and optimization of resources during the construction process, minimizing waste and improving efficiency. The future of sustainable construction will undoubtedly involve increasingly sophisticated smart building technologies.</p>
      
      <h2>Circular Economy Principles</h2>
      <p>The concept of a circular economy, where resources are kept in use for as long as possible, is gaining traction in the construction industry. This approach involves designing buildings for disassembly, using recyclable materials, and repurposing existing structures rather than demolishing them.</p>
      <p>By embracing circular economy principles, the construction industry can significantly reduce waste and resource consumption, contributing to a more sustainable future.</p>
      
      <h2>Conclusion</h2>
      <p>The future of sustainable construction is bright, with innovative materials, energy-efficient designs, smart technologies, and circular economy principles all contributing to a more environmentally friendly building industry. As these trends continue to evolve and gain wider adoption, we can look forward to a built environment that works in harmony with the natural world rather than against it.</p>
    `,
    image: "/placeholder.svg?height=800&width=1200",
    date: "May 15, 2023",
    author: "John Smith",
    authorTitle: "Sustainability Director",
    authorImage: "/placeholder.svg?height=200&width=200",
    category: "Sustainability",
    tags: ["Sustainable Construction", "Green Building", "Innovation", "Eco-friendly Materials"],
    relatedPosts: [
      {
        id: 2,
        title: "Advancements in Structural Engineering Technology",
        excerpt:
          "How new technologies like AI and machine learning are revolutionizing structural engineering design and analysis.",
        image: "/placeholder.svg?height=600&width=800",
        date: "April 22, 2023",
        author: "Sarah Johnson",
        category: "Technology",
        slug: "advancements-structural-engineering-technology",
      },
      {
        id: 5,
        title: "The Impact of Climate Change on Infrastructure",
        excerpt:
          "How climate change is affecting infrastructure planning, design, and maintenance in different regions.",
        image: "/placeholder.svg?height=600&width=800",
        date: "January 15, 2023",
        author: "David Wilson",
        category: "Climate",
        slug: "impact-climate-change-infrastructure",
      },
    ],
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const [post, setPost] = useState<any>(null)
  const [isShareMenuOpen, setIsShareMenuOpen] = useState(false)
  const router = useRouter()

  useEffect(() => {
    // In a real application, this would be an API call
    const fetchedPost = getBlogPost(params.slug)
    setPost(fetchedPost)
  }, [params.slug])

  const handleRelatedPostClick = (slug: string) => {
    router.push(`/blog/${slug}`)
  }

  if (!post) {
    return (
      <div className="pt-24 pb-16 container">
        <div className="flex items-center justify-center py-20">
          <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-24 pb-16">
      <div className="container max-w-4xl">
        <Link href="/blog">
          <Button 
            variant="ghost" 
            className="mb-6 pl-0 transition-all duration-300 hover:pl-2"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Button>
        </Link>

        <div className="relative h-[400px] rounded-lg overflow-hidden mb-8">
          <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" priority />
          <div className="absolute top-4 left-4 z-10 bg-primary/90 text-primary-foreground text-sm font-medium py-1 px-3 rounde\
