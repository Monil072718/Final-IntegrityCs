"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const galleryItems = [
  {
    id: 1,
    title: "Commercial Tower",
    category: "Commercial",
    image: "/placeholder.svg?height=600&width=800",
    link: "/gallery/commercial-tower",
  },
  {
    id: 2,
    title: "Highway Construction",
    category: "Infrastructure",
    image: "/placeholder.svg?height=600&width=800",
    link: "/gallery/highway-construction",
  },
  {
    id: 3,
    title: "Residential Complex",
    category: "Residential",
    image: "/placeholder.svg?height=600&width=800",
    link: "/gallery/residential-complex",
  },
  {
    id: 4,
    title: "Bridge Design",
    category: "Infrastructure",
    image: "/placeholder.svg?height=600&width=800",
    link: "/gallery/bridge-design",
  },
  {
    id: 5,
    title: "Shopping Mall",
    category: "Commercial",
    image: "/placeholder.svg?height=600&width=800",
    link: "/gallery/shopping-mall",
  },
  {
    id: 6,
    title: "Urban Planning",
    category: "Planning",
    image: "/placeholder.svg?height=600&width=800",
    link: "/gallery/urban-planning",
  },
  {
    id: 7,
    title: "Office Building",
    category: "Commercial",
    image: "/placeholder.svg?height=600&width=800",
    link: "/gallery/office-building",
  },
  {
    id: 8,
    title: "Apartment Complex",
    category: "Residential",
    image: "/placeholder.svg?height=600&width=800",
    link: "/gallery/apartment-complex",
  },
  {
    id: 9,
    title: "Factory Design",
    category: "Industrial",
    image: "/placeholder.svg?height=600&width=800",
    link: "/gallery/factory-design",
  },
]

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  return (
    <div className="pt-24 pb-16">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Project Gallery</h1>
          <p className="text-muted-foreground">
            Browse through our portfolio of completed and ongoing projects showcasing our expertise in civil
            engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-lg cursor-pointer transition-all duration-300 hover:shadow-xl"
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

        {/* Lightbox */}
        {selectedImage !== null && (
          <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 text-white hover:bg-white/10"
              onClick={() => setSelectedImage(null)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
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
                    <h3 className="text-xl font-bold">
                      {galleryItems.find((item) => item.id === selectedImage)!.title}
                    </h3>
                    <p className="text-white/80">{galleryItems.find((item) => item.id === selectedImage)!.category}</p>
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}