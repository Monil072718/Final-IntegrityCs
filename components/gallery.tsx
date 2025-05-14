"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import { ArrowRight, X } from "lucide-react"

const galleryItems = [
  {
    id: 1,
    title: "Commercial Tower",
    category: "Commercial",
    image: "/commercial-tower-1.jpg",
    link: "/gallery/commercial-tower",
  },
  {
    id: 2,
    title: "Bunglow",
    category: "Infrastructure",
    image: "/bunglow-1.jpg",
    link: "/gallery/highway-construction",
  },
  {
    id: 3,
    title: "Residential Complex",
    category: "Residential",
    image: "/Residential Complex.jpg",
    link: "/gallery/residential-complex",
  },
  {
    id: 4,
    title: "Bridge Design",
    category: "Infrastructure",
    image: "/brdige-1.JPG",
    link: "/gallery/bridge-design",
  },
  {
    id: 5,
    title: "Shopping Mall",
    category: "Commercial",
    image: "/shopping-mall.jpg",
    link: "/gallery/shopping-mall",
  },
  {
    id: 6,
    title: "Urban Planning",
    category: "Planning",
    image: "/urban planning.jpg",
    link: "/gallery/urban-planning",
  },
]

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section className="py-16 container" id="gallery">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Project Gallery</h2>
        <p className="text-muted-foreground">
          Browse through our portfolio of completed and ongoing projects showcasing our expertise.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" ref={ref}>
        {galleryItems.map((item, index) => (
          <div
            key={item.id}
            className={`group relative overflow-hidden rounded-lg cursor-pointer transition-all duration-500 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: `${index * 100}ms` }}
            onClick={() => setSelectedImage(item.id)}
          >
            <div className="relative h-72 w-full overflow-hidden">
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300" />
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-white/80 text-sm">{item.category}</p>
                <Button
                  variant="outline"
                  size="sm"
                  className="mt-4 bg-white/10 text-white border-white/20 hover:bg-white/20"
                >
                  View Details
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link href="/gallery">
          <Button variant="outline" size="lg">
            View Full Gallery
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 text-white hover:bg-white/10"
            onClick={() => setSelectedImage(null)}
          >
            <X className="h-6 w-6" />
          </Button>
          <div className="relative max-w-4xl w-full h-[80vh]">
            {galleryItems.find((item) => item.id === selectedImage) && (
              <>
                <Image
                  src={galleryItems.find((item) => item.id === selectedImage)!.image || "/placeholder.svg"}
                  alt={galleryItems.find((item) => item.id === selectedImage)!.title}
                  fill
                  className="object-contain"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-4 text-white">
                  <h3 className="text-xl font-bold">{galleryItems.find((item) => item.id === selectedImage)!.title}</h3>
                  <p className="text-white/80">{galleryItems.find((item) => item.id === selectedImage)!.category}</p>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  )
}
