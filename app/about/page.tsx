import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const teamMembers = [
  {
    name: "John Smith",
    position: "CEO & Founder",
    image: "/placeholder.svg?height=400&width=400",
    bio: "With over 25 years of experience in civil engineering, John has led numerous landmark projects across the country.",
  },
  {
    name: "Sarah Johnson",
    position: "Chief Engineer",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Sarah specializes in structural engineering and has pioneered innovative approaches to complex engineering challenges.",
  },
  {
    name: "Michael Chen",
    position: "Project Director",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Michael oversees project execution and ensures timely delivery while maintaining the highest quality standards.",
  },
  {
    name: "Emily Rodriguez",
    position: "Architectural Designer",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Emily brings creative vision to our projects, blending aesthetics with functional engineering solutions.",
  },
]

export default function AboutPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About BuildMaster Engineering</h1>
          <p className="text-muted-foreground">
            We are a team of dedicated professionals committed to excellence in civil engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative h-[500px] rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=1000&width=800"
              alt="About BuildMaster Engineering"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Our Story</h2>
            <p className="text-muted-foreground">
              Founded in 2005, BuildMaster Engineering has grown from a small consultancy to a leading civil engineering
              firm with a reputation for excellence and innovation. Our journey began with a vision to transform the
              built environment through thoughtful design and precision engineering.
            </p>
            <p className="text-muted-foreground">
              Over the years, we have successfully completed hundreds of projects across commercial, residential, and
              infrastructure sectors. Our team has expanded to include specialists in various engineering disciplines,
              allowing us to offer comprehensive solutions to complex challenges.
            </p>
            <p className="text-muted-foreground">
              Today, we continue to push the boundaries of what's possible in civil engineering, embracing new
              technologies and sustainable practices to create structures that stand the test of time.
            </p>
          </div>
        </div>

        <div className="mb-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Mission & Values</h2>
            <p className="text-muted-foreground">
              Guided by our core principles, we strive to deliver excellence in every project we undertake.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-lg border">
              <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
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
              <h3 className="text-xl font-bold mb-3">Excellence</h3>
              <p className="text-muted-foreground">
                We are committed to delivering the highest quality in every aspect of our work, from design to
                execution.
              </p>
            </div>
            <div className="bg-card p-8 rounded-lg border">
              <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
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
              <h3 className="text-xl font-bold mb-3">Innovation</h3>
              <p className="text-muted-foreground">
                We embrace new technologies and methodologies to find creative solutions to complex engineering
                challenges.
              </p>
            </div>
            <div className="bg-card p-8 rounded-lg border">
              <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
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
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Integrity</h3>
              <p className="text-muted-foreground">
                We conduct our business with honesty, transparency, and ethical practices in all our dealings.
              </p>
            </div>
            <div className="bg-card p-8 rounded-lg border">
              <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
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
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                  <path d="m15 9-6 6"></path>
                  <path d="m9 9 6 6"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Sustainability</h3>
              <p className="text-muted-foreground">
                We are dedicated to environmentally responsible practices and sustainable design solutions.
              </p>
            </div>
            <div className="bg-card p-8 rounded-lg border">
              <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
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
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Collaboration</h3>
              <p className="text-muted-foreground">
                We believe in the power of teamwork and partnership to achieve exceptional results.
              </p>
            </div>
            <div className="bg-card p-8 rounded-lg border">
              <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
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
                  <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z"></path>
                  <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Client Focus</h3>
              <p className="text-muted-foreground">
                We prioritize understanding and meeting our clients' needs, building lasting relationships based on
                trust.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Leadership Team</h2>
            <p className="text-muted-foreground">
              Meet the experienced professionals who guide our company to success.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-card rounded-lg border overflow-hidden">
                <div className="relative h-64 w-full">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-primary text-sm mb-3">{member.position}</p>
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-muted/30 rounded-lg p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Work With Us?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Whether you have a specific project in mind or need consultation on your engineering needs, our team is
            ready to help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/projects">
              <Button variant="outline" size="lg">
                View Our Projects
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg">Contact Us</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
