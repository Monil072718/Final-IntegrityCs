"use client"
import Image from "next/image"
import Link from "next/link"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Calendar, User } from "lucide-react"

// This would typically come from an API or CMS
const blogPosts = [
  {
    id: 1,
    title: "The Future of Sustainable Construction",
    excerpt:
      "Exploring innovative materials and methods that are shaping the future of sustainable construction practices.",
    image: "/placeholder.svg?height=600&width=800",
    date: "May 15, 2023",
    author: "John Smith",
    category: "Sustainability",
    slug: "future-of-sustainable-construction",
  },
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
    id: 3,
    title: "Urban Planning Challenges in Growing Cities",
    excerpt:
      "Addressing the complex challenges of urban planning in rapidly expanding metropolitan areas around the world.",
    image: "/placeholder.svg?height=600&width=800",
    date: "March 10, 2023",
    author: "Michael Chen",
    category: "Urban Planning",
    slug: "urban-planning-challenges-growing-cities",
  },
]

export default function BlogSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section className="py-16 container" id="blog">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest Insights</h2>
        <p className="text-muted-foreground">
          Stay updated with the latest trends, innovations, and insights in civil engineering and construction.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" ref={ref}>
        {blogPosts.map((post, index) => (
          <Card
            key={post.id}
            className={`overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-500 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: `${index * 150}ms` }}
          >
            <div className="relative h-48 overflow-hidden">
              <Image
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute top-4 left-4 z-10 bg-primary/90 text-primary-foreground text-xs font-medium py-1 px-2 rounded">
                {post.category}
              </div>
            </div>
            <CardContent className="p-6">
              <div className="flex items-center text-sm text-muted-foreground mb-3">
                <Calendar className="h-4 w-4 mr-1" />
                <span className="mr-4">{post.date}</span>
                <User className="h-4 w-4 mr-1" />
                <span>{post.author}</span>
              </div>
              <h3 className="text-xl font-bold mb-2">{post.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{post.excerpt}</p>
              <Link href={`/blog/${post.slug}`}>
                <Button variant="outline" className="w-full group">
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link href="/blog">
          <Button variant="outline" size="lg">
            View All Articles
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </section>
  )
}
