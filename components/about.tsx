"use client"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useInView } from "react-intersection-observer"

export default function About() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section className="container py-16" id="about">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center" ref={ref}>
        <div className={`space-y-6 ${inView ? "animate-slide-up" : ""}`} style={{ animationDelay: "0.1s" }}>
          <div className="inline-block bg-primary/10 px-4 py-2 rounded-md">
            <h3 className="text-primary font-medium">About Our Company</h3>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Building the Future with <span className="text-primary">Precision & Innovation</span>
          </h2>
          <p className="text-muted-foreground">
            Founded in 2005, BuildMaster Engineering has established itself as a leader in the civil engineering
            industry. Our team of experienced engineers and designers are dedicated to delivering exceptional results on
            every project.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
            <div className="flex items-start gap-3">
              <div className="bg-primary/10 p-3 rounded-md">
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
                  className="text-primary"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                </svg>
              </div>
              <div>
                <h4 className="font-bold">Quality Assurance</h4>
                <p className="text-sm text-muted-foreground">Rigorous standards for every project</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-primary/10 p-3 rounded-md">
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
                  className="text-primary"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
              </div>
              <div>
                <h4 className="font-bold">Certified Experts</h4>
                <p className="text-sm text-muted-foreground">Professional team of engineers</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-primary/10 p-3 rounded-md">
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
                  className="text-primary"
                >
                  <path d="M12 2v20"></path>
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                </svg>
              </div>
              <div>
                <h4 className="font-bold">Cost Effective</h4>
                <p className="text-sm text-muted-foreground">Optimal solutions within budget</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-primary/10 p-3 rounded-md">
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
                  className="text-primary"
                >
                  <path d="M21 12a9 9 0 0 1-9 9m9-9a9 9 0 0 0-9-9m9 9H3m9 9a9 9 0 0 1-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9"></path>
                </svg>
              </div>
              <div>
                <h4 className="font-bold">Global Standards</h4>
                <p className="text-sm text-muted-foreground">Following international best practices</p>
              </div>
            </div>
          </div>
          <div className="pt-4">
            <Link href="/about">
              <Button>Learn More About Us</Button>
            </Link>
          </div>
        </div>
        <div className={`relative ${inView ? "animate-slide-up" : ""}`} style={{ animationDelay: "0.3s" }}>
          <div className="relative h-[500px] rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=1000&width=800"
              alt="About BuildMaster Engineering"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-background p-6 rounded-lg shadow-lg max-w-xs">
            <div className="flex items-center gap-4">
              <div className="bg-primary rounded-full p-3">
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
                  className="text-primary-foreground"
                >
                  <path d="M20 7h-9"></path>
                  <path d="M14 17H5"></path>
                  <circle cx="17" cy="17" r="3"></circle>
                  <circle cx="7" cy="7" r="3"></circle>
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-lg">18+ Years</h4>
                <p className="text-sm text-muted-foreground">Of Industry Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
