"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const timelineSteps = [
  {
    id: 1,
    title: "Project Planning",
    description: "Initial consultation, site analysis, and development of project requirements and specifications.",
    icon: (
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
        className="text-primary h-10 w-10"
      >
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
        <polyline points="14 2 14 8 20 8" />
        <path d="M9 13h6" />
        <path d="M9 17h6" />
        <path d="M9 9h1" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Design Development",
    description:
      "Creation of detailed architectural and engineering designs, including 3D models and technical specifications.",
    icon: (
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
        className="text-primary h-10 w-10"
      >
        <path d="M2 3h20" />
        <path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3" />
        <path d="m7 21 5-5 5 5" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Permitting & Approvals",
    description: "Obtaining necessary permits and regulatory approvals from local authorities and relevant agencies.",
    icon: (
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
        className="text-primary h-10 w-10"
      >
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Site Preparation",
    description: "Clearing the site, establishing temporary facilities, and preparing the foundation for construction.",
    icon: (
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
        className="text-primary h-10 w-10"
      >
        <rect width="18" height="10" x="3" y="8" rx="1" />
        <path d="M10 8V5c0-.6.4-1 1-1h2c.6 0 1 .4 1 1v3" />
        <path d="M7 8v11" />
        <path d="M17 8v11" />
      </svg>
    ),
  },
  {
    id: 5,
    title: "Construction Phase",
    description: "Building the structure according to design specifications, with regular quality control inspections.",
    icon: (
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
        className="text-primary h-10 w-10"
      >
        <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
        <path d="M9 22v-4h6v4" />
        <path d="M8 6h.01" />
        <path d="M16 6h.01" />
        <path d="M12 6h.01" />
        <path d="M12 10h.01" />
        <path d="M12 14h.01" />
        <path d="M16 10h.01" />
        <path d="M16 14h.01" />
        <path d="M8 10h.01" />
        <path d="M8 14h.01" />
      </svg>
    ),
  },
  {
    id: 6,
    title: "Finishing & Handover",
    description:
      "Completing interior finishes, conducting final inspections, and handing over the completed project to the client.",
    icon: (
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
        className="text-primary h-10 w-10"
      >
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
]

export default function ConstructionTimeline() {
  const [activeStep, setActiveStep] = useState(1)
  const [direction, setDirection] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  const nextStep = () => {
    if (activeStep < timelineSteps.length) {
      setDirection(1)
      setActiveStep(activeStep + 1)
    }
  }

  const prevStep = () => {
    if (activeStep > 1) {
      setDirection(-1)
      setActiveStep(activeStep - 1)
    }
  }

  const handleStepClick = (stepId: number) => {
    setDirection(stepId > activeStep ? 1 : -1)
    setActiveStep(stepId)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return

      const rect = containerRef.current.getBoundingClientRect()
      const isVisible = rect.top < window.innerHeight && rect.bottom > 0

      if (isVisible) {
        const scrollProgress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height)
        const targetStep = Math.min(Math.max(Math.ceil(scrollProgress * timelineSteps.length), 1), timelineSteps.length)

        if (targetStep !== activeStep) {
          setDirection(targetStep > activeStep ? 1 : -1)
          setActiveStep(targetStep)
        }
        setDirection(targetStep > activeStep ? 1 : -1)
        setActiveStep(targetStep)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [activeStep])

  return (
    <section className="py-16 bg-muted/30" ref={containerRef}>
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Construction Process</h2>
          <p className="text-muted-foreground">
            We follow a structured approach to ensure every project is delivered with precision and excellence.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Bar - Hidden on Mobile */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-muted -translate-y-1/2 z-0">
            <div
              className="h-full bg-primary transition-all duration-500"
              style={{ width: `${((activeStep - 1) / (timelineSteps.length - 1)) * 100}%` }}
            />
          </div>

          {/* Timeline Steps - Desktop Only */}
          <div className="hidden md:flex justify-between mb-12 relative z-10">
            {timelineSteps.map((step) => (
              <div
                key={step.id}
                className={`flex flex-col items-center cursor-pointer transition-all duration-300 ${
                  step.id <= activeStep ? "opacity-100" : "opacity-50"
                }`}
                onClick={() => handleStepClick(step.id)}
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                    step.id <= activeStep ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                  }`}
                >
                  {step.id}
                </div>
                <span
                  className={`text-sm font-medium mt-2 transition-all duration-300 ${
                    step.id === activeStep ? "text-primary" : ""
                  }`}
                >
                  {step.title}
                </span>
              </div>
            ))}
          </div>

          {/* Mobile Timeline Navigation */}
          <div className="md:hidden flex justify-between items-center mb-6 bg-card p-4 rounded-lg shadow-sm">
            <Button variant="outline" size="sm" onClick={prevStep} disabled={activeStep === 1}>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <div className="text-center">
              <span className="text-sm text-muted-foreground block">
                Step {activeStep} of {timelineSteps.length}
              </span>
              <h3 className="font-bold">{timelineSteps[activeStep - 1].title}</h3>
            </div>
            <Button variant="outline" size="sm" onClick={nextStep} disabled={activeStep === timelineSteps.length}>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Content */}
          <div className="relative min-h-[300px] md:min-h-[400px] overflow-hidden">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={activeStep}
                custom={direction}
                initial={{ opacity: 0, x: direction > 0 ? 100 : -100, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: direction > 0 ? -100 : 100, scale: 0.9 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="absolute inset-0"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
                  <div className="flex flex-col justify-center timeline-step">
                    <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 timeline-icon">
                      {timelineSteps[activeStep - 1].icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{timelineSteps[activeStep - 1].title}</h3>
                    <p className="text-muted-foreground timeline-content">
                      {timelineSteps[activeStep - 1].description}
                    </p>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="relative w-full h-full max-h-[300px] perspective-1000">
                      <div
                        className={`w-full h-full bg-card rounded-lg shadow-lg border transform transition-transform duration-700 ${
                          activeStep % 2 === 0 ? "rotate-y-5 rotate-x-3" : "rotate-y-355 rotate-x-357"
                        }`}
                      >
                        <div className="absolute inset-0 flex items-center justify-center p-6">
                          <div className="text-center">
                            <div className="text-6xl mb-4">🏗️</div>
                            <h4 className="text-xl font-bold mb-2">Phase {activeStep}</h4>
                            <p className="text-sm text-muted-foreground">{timelineSteps[activeStep - 1].description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex justify-center mt-8 gap-4">
            <Button variant="outline" onClick={prevStep} disabled={activeStep === 1}>
              <ChevronLeft className="h-4 w-4 mr-2" />
              Previous
            </Button>
            <Button onClick={nextStep} disabled={activeStep === timelineSteps.length}>
              Next
              <ChevronRight className="h-4 w-4 ml-2" />
            </Button>
          </div>

          {/* Mobile Step Indicators */}
          <div className="flex justify-center mt-6 gap-2 md:hidden">
            {timelineSteps.map((step) => (
              <div
                key={step.id}
                onClick={() => handleStepClick(step.id)}
                className={`w-2 h-2 rounded-full cursor-pointer transition-all duration-300 ${
                  step.id === activeStep ? "w-6 bg-primary" : "bg-muted"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
