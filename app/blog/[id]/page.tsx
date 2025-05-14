"use client"

import { useEffect, useState } from "react"
import { use } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  ArrowLeft, Calendar, Share2, Facebook, Twitter, Linkedin, Copy, Check
} from "lucide-react"
import { getPostById, getRelatedPosts, type BlogPost } from "@/lib/blog-data"

export default function BlogPostPage(props: { params: Promise<{ id: string }> }) {
  const { id } = use(props.params) // ✅ unwrap the params object
  const postId = Number.parseInt(id, 10)

  const [post, setPost] = useState<BlogPost | null>(null)
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([])
  const [isShareMenuOpen, setIsShareMenuOpen] = useState(false)
  const [isCopied, setIsCopied] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const fetchedPost = getPostById(postId)
    if (fetchedPost) {
      setPost(fetchedPost)
      setRelatedPosts(getRelatedPosts(postId, 2))
    } else {
      router.push("/blog")
    }
  }, [postId, router])

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
        <Link href="/blog">
          <Button variant="ghost" className="mb-6 pl-0 transition-all duration-300 hover:pl-2">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
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
              <Image
                src={post.author.image || "/placeholder.svg"}
                alt={post.author.name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="font-medium">{post.author.name}</h3>
              <p className="text-sm text-muted-foreground">{post.author.title}</p>
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

        {relatedPosts.length > 0 && (
          <div className="border-t border-b py-8 mb-12">
            <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Link key={relatedPost.id} href={`/blog/${relatedPost.id}`}>
                  <div className="flex flex-col md:flex-row gap-4 cursor-pointer hover:bg-muted/50 p-4 rounded-lg transition-colors">
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
                </Link>
              ))}
            </div>
          </div>
        )}

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
