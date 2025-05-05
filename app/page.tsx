import HeroSlider from "@/components/hero-slider"
import About from "@/components/about"
import ProjectCounter from "@/components/project-counter"
import OurProjects from "@/components/our-projects"
import ServicesSection from "@/components/services-section"
import ConstructionTimeline from "@/components/construction-timeline"
import BlogSection from "@/components/blog-section"
import Gallery from "@/components/gallery"
import ContactForm from "@/components/contact-form"

export default function Home() {
  return (
    <div className="space-y-20 pb-20">
      <HeroSlider />
      <About />
      <ProjectCounter />
      <OurProjects />
      <ServicesSection />
      <ConstructionTimeline />
      <Gallery />
      <BlogSection />
      <ContactForm />
    </div>
  )
}
