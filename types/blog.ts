export interface BlogPost {
  id: number
  title: string
  excerpt: string
  content?: string
  image: string
  date: string
  author: string
  authorTitle?: string
  authorImage?: string
  category: string
  tags?: string[]
  slug: string
}

export interface RelatedPost {
  id: number
  title: string
  excerpt: string
  image: string
  date: string
  author: string
  category: string
  slug: string
}

export interface BlogPostDetail extends BlogPost {
  content: string
  authorTitle: string
  authorImage: string
  tags: string[]
  relatedPosts: RelatedPost[]
}
