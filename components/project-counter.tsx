"use client"

import { useState, useEffect, useRef } from "react"
import { useInView } from "react-intersection-observer"

const stats = [
  { id: 1, value: 250, label: "Completed Projects", icon: "🏢" },
  { id: 2, value: 32, label: "Ongoing Projects", icon: "🚧" },
  { id: 3, value: 180, label: "Happy Clients", icon: "🤝" },
  { id: 4, value: 15, label: "Awards Won", icon: "🏆" },
]

export default function ProjectCounter() {
  const [counts, setCounts] = useState(stats.map(() => 0))
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (inView && !hasAnimated.current) {
      hasAnimated.current = true

      stats.forEach((stat, index) => {
        const duration = 2000 // animation duration in ms
        const steps = 30 // number of steps in the animation
        const increment = Math.ceil(stat.value / steps)
        let count = 0
        let step = 0

        const interval = setInterval(() => {
          count = Math.min(count + increment, stat.value)
          setCounts((prev) => {
            const newCounts = [...prev]
            newCounts[index] = count
            return newCounts
          })

          step++
          if (step >= steps || count >= stat.value) {
            setCounts((prev) => {
              const newCounts = [...prev]
              newCounts[index] = stat.value
              return newCounts
            })
            clearInterval(interval)
          }
        }, duration / steps)
      })
    }
  }, [inView])

  return (
    <section className="py-16 bg-primary/5">
      <div className="container" ref={ref}>
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Achievements</h2>
          <p className="text-muted-foreground">
            We take pride in our track record of successful projects and satisfied clients. Our numbers speak for
            themselves.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.id}
              className={`bg-card p-8 rounded-lg shadow-sm border text-center transition-all duration-500 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl mb-4">{stat.icon}</div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2 animate-counter">{counts[index]}+</div>
              <p className="text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
