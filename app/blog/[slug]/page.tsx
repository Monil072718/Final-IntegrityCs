"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowLeft, Calendar, Share2, Facebook, Twitter, Linkedin, Copy, Check } from "lucide-react"
import type { BlogPostDetail } from "@/types/blog"
import { use } from "react"

// This would typically come from an API or CMS
const getBlogPost = (slug: string): BlogPostDetail => {
  // Mock data for demonstration
  return {
    id: 1,
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
    slug: "future-of-sustainable-construction",
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

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  // Use React.use to unwrap the params
  const resolvedParams = use(Promise.resolve(params))
  const slug = resolvedParams.slug

  const [post, setPost] = useState<BlogPostDetail | null>(null)
  const [isShareMenuOpen, setIsShareMenuOpen] = useState(false)
  const [isCopied, setIsCopied] = useState(false)
  const router = useRouter()

  useEffect(() => {
    // In a real application, this would be an API call
    const fetchedPost = getBlogPost(slug)
    setPost(fetchedPost)
  }, [slug])

  const handleRelatedPostClick = (slug: string) => {
    router.push(`/blog/${slug}`)
  }

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href)
      setIsCopied(true)
      setTimeout(() => setIsCopied(false), 2000)
    }
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
        <Link href="/blog" passHref>
          <Button variant="ghost" className="mb-6 pl-0 transition-all duration-300 hover:pl-2" asChild>
            <a>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </a>
          </Button>
        </Link>

        <div className="relative h-[400px] rounded-lg overflow-hidden mb-8">
          <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" priority />
          <div className="absolute top-4 left-4 z-10 bg-primary/90 text-primary-foreground text-sm font-medium py-1 px-3 rounded-md">
            {post.category}
          </div>
        </div>

        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
              <Image src={post.authorImage || "/placeholder.svg"} alt={post.author} fill className="object-cover" />
            </div>
            <div>
              <h3 className="font-medium">{post.author}</h3>
              <p className="text-sm text-muted-foreground">{post.authorTitle}</p>
            </div>
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <Calendar className="h-4 w-4 mr-1" />
            <span>{post.date}</span>
          </div>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
        <p className="text-xl text-muted-foreground mb-8">{post.excerpt}</p>

        <div className="relative mb-8">
          <div className="flex items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, index) => (
                <span key={index} className="bg-primary/10 text-primary text-xs font-medium py-1 px-2 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
            <div className="relative">
              <Button
                variant="ghost"
                size="sm"
                className="flex items-center gap-2"
                onClick={() => setIsShareMenuOpen(!isShareMenuOpen)}
              >
                <Share2 className="h-4 w-4" />
                Share
              </Button>
              {isShareMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-card rounded-lg shadow-lg overflow-hidden z-20 border">
                  <div className="p-2">
                    <a
                      href={`https://www.facebook.com/sharer/sharer.php?u=${typeof window !== "undefined" ? encodeURIComponent(window.location.href) : ""}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 p-2 hover:bg-muted rounded-md transition-colors"
                    >
                      <Facebook className="h-4 w-4 text-blue-600" />
                      <span>Facebook</span>
                    </a>
                    <a
                      href={`https://twitter.com/intent/tweet?url=${typeof window !== "undefined" ? encodeURIComponent(window.location.href) : ""}&text=${encodeURIComponent(post.title)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 p-2 hover:bg-muted rounded-md transition-colors"
                    >
                      <Twitter className="h-4 w-4 text-sky-500" />
                      <span>Twitter</span>
                    </a>
                    <a
                      href={`https://www.linkedin.com/shareArticle?mini=true&url=${typeof window !== "undefined" ? encodeURIComponent(window.location.href) : ""}&title=${encodeURIComponent(post.title)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 p-2 hover:bg-muted rounded-md transition-colors"
                    >
                      <Linkedin className="h-4 w-4 text-blue-700" />
                      <span>LinkedIn</span>
                    </a>
                    <button
                      onClick={handleCopyLink}
                      className="flex items-center gap-2 p-2 hover:bg-muted rounded-md transition-colors w-full text-left"
                    >
                      {isCopied ? (
                        <>
                          <Check className="h-4 w-4 text-green-500" />
                          <span>Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="h-4 w-4" />
                          <span>Copy Link</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="prose dark:prose-invert max-w-none mb-12" dangerouslySetInnerHTML={{ __html: post.content }} />

        <div className="border-t border-b py-8 mb-12">
          <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {post.relatedPosts.map((relatedPost) => (
              <div
                key={relatedPost.id}
                className="flex flex-col md:flex-row gap-4 cursor-pointer hover:bg-muted/50 p-4 rounded-lg transition-colors"
                onClick={() => handleRelatedPostClick(relatedPost.slug)}
              >
                <div className="relative h-40 md:h-24 md:w-32 rounded-md overflow-hidden flex-shrink-0">
                  <Image
                    src={relatedPost.image || "/placeholder.svg"}
                    alt={relatedPost.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold mb-1 line-clamp-2">{relatedPost.title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">{relatedPost.excerpt}</p>
                  <div className="flex items-center text-xs text-muted-foreground mt-2">
                    <Calendar className="h-3 w-3 mr-1" />
                    <span>{relatedPost.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-muted/30 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Stay updated with the latest insights and news in civil engineering. Subscribe to our newsletter for
            exclusive content delivered to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input placeholder="Your email address" type="email" required className="flex-grow" />
            <Button type="submit">Subscribe</Button>
          </form>
        </div>
      </div>
    </div>
  )
}
