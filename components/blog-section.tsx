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
    title: "Innovations in Structural Engineering",
    excerpt:
      "Exploring cutting-edge techniques and materials revolutionizing structural engineering in modern construction.",
    image: "/placeholder.svg?height=600&width=800",
    date: "May 15, 2023",
    author: "John Smith",
    category: "Structural Engineering",
    slug: "innovations-structural-engineering",
  },
  {
    id: 2,
    title: "Sustainable Infrastructure Development",
    excerpt: "How civil engineers are incorporating eco-friendly practices and materials in infrastructure projects.",
    image: "/placeholder.svg?height=600&width=800",
    date: "April 22, 2023",
    author: "Sarah Johnson",
    category: "Sustainability",
    slug: "sustainable-infrastructure-development",
  },
  {
    id: 3,
    title: "Advancements in Bridge Construction",
    excerpt:
      "New methodologies and technologies transforming bridge design and construction in challenging environments.",
    image: "/placeholder.svg?height=600&width=800",
    date: "March 10, 2023",
    author: "Michael Chen",
    category: "Infrastructure",
    slug: "advancements-bridge-construction",
  },
]

export default function BlogSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section className="py-16 bg-pattern-grid" id="blog">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Civil Engineering Insights</h2>
          <p className="text-muted-foreground">
            Stay updated with the latest trends, innovations, and insights in civil engineering and construction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" ref={ref}>
          {blogPosts.map((post, index) => (
            <Card
              key={post.id}
              className={`overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 ${
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
                  <Button
                    variant="outline"
                    className="w-full group hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
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
            <Button variant="outline" size="lg" className="hover:scale-105 transition-transform duration-300">
              View All Articles
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
