import HeroSlider from "@/components/hero-slider"
import About from "@/components/about"
import ProjectCounter from "@/components/project-counter"
import RunningProjects from "@/components/running-projects"
import CompletedProjects from "@/components/completed-projects"
import ServicesSection from "@/components/services-section"
import ConstructionTimeline from "@/components/construction-timeline"
import BlogSection from "@/components/blog-section"
import Gallery from "@/components/gallery"
import ContactForm from "@/components/contact-form"
import BackgroundAnimation from "@/components/background-animation"

export default function Home() {
  return (
    <div className="space-y-20 pb-20">
      <BackgroundAnimation />
      <HeroSlider />
      <About />
      <ProjectCounter />
      <RunningProjects />
      <CompletedProjects />
      <ServicesSection />
      <ConstructionTimeline />
      <Gallery />
      <BlogSection />
      <ContactForm />
    </div>
  )
}
