// "use client"

// import { useEffect, useState } from "react"

// export default function CustomCursor() {
//   const [position, setPosition] = useState({ x: 0, y: 0 })
//   const [isPointer, setIsPointer] = useState(false)
//   const [isHidden, setIsHidden] = useState(true)
//   const [isClicking, setIsClicking] = useState(false)
//   const [isMounted, setIsMounted] = useState(false)

//   useEffect(() => {
//     setIsMounted(true)
    
//     const moveCursor = (e: MouseEvent) => {
//       setPosition({ x: e.clientX, y: e.clientY })
//     }

//     const handlePointerEvents = () => {
//       const allLinks = document.querySelectorAll(
//         'a, button, [role="button"], input[type="submit"], input[type="button"], .cursor-pointer',
//       )

//       allLinks.forEach((link) => {
//         link.addEventListener("mouseenter", () => setIsPointer(true))
//         link.addEventListener("mouseleave", () => setIsPointer(false))
//       })
//     }

//     const handleMouseDown = () => setIsClicking(true)
//     const handleMouseUp = () => setIsClicking(false)
//     const handleMouseEnter = () => setIsHidden(false)
//     const handleMouseLeave = () => setIsHidden(true)

//     document.addEventListener("mousemove", moveCursor)
//     document.addEventListener("mousedown", handleMouseDown)
//     document.addEventListener("mouseup", handleMouseUp)
//     document.addEventListener("mouseenter", handleMouseEnter)
//     document.addEventListener("mouseleave", handleMouseLeave)

//     handlePointerEvents()

//     const observer = new MutationObserver(handlePointerEvents)
//     observer.observe(document.body, { childList: true, subtree: true })

//     return () => {
//       document.removeEventListener("mousemove", moveCursor)
//       document.removeEventListener("mousedown", handleMouseDown)
//       document.removeEventListener("mouseup", handleMouseUp)
//       document.removeEventListener("mouseenter", handleMouseEnter)
//       document.removeEventListener("mouseleave", handleMouseLeave)
//       observer.disconnect()
//     }
//   }, [])

//   if (!isMounted) return null

//   return (
//     <>
//       <div
//         className={`fixed pointer-events-none z-[9999] transition-opacity duration-300 ${isHidden ? "opacity-0" : "opacity-100"}`}
//         style={{
//           left: `${position.x}px`,
//           top: `${position.y}px`,
//         }}
//       >
//         <div
//           className={`relative -left-1 -top-1 rounded-full mix-blend-difference transition-transform duration-150 ${
//             isPointer ? "bg-white w-5 h-5 scale-150" : "bg-white w-3 h-3"
//           } ${isClicking ? "scale-75" : ""}`}
//         />
//       </div>
//       <div
//         className={`fixed pointer-events-none z-[9998] transition-all duration-300 ${isHidden ? "opacity-0" : "opacity-100"}`}
//         style={{
//           left: `${position.x}px`,
//           top: `${position.y}px`,
//           transition: "transform 0.15s ease-out, opacity 0.3s ease",
//           transform: `translate(-50%, -50%) scale(${isPointer ? 1.5 : 1})`,
//         }}
//       >
//         <div
//           className={`rounded-full border border-primary transition-all duration-300 ${
//             isPointer ? "w-8 h-8 opacity-50" : "w-10 h-10 opacity-30"
//           } ${isClicking ? "scale-90" : ""}`}
//         />
//       </div>
//     </>
//   )
// }



"use client"

import { useEffect, useState } from "react"

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isPointer, setIsPointer] = useState(false)
  const [isHidden, setIsHidden] = useState(false)
  const [isClicking, setIsClicking] = useState(false)

  useEffect(() => {
    // Only run on client-side
    if (typeof window === "undefined") return

    // Mouse movement handler
    const moveCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    // Detect pointer elements
    const handlePointerElements = () => {
      const elements = document.querySelectorAll(
        'a, button, [role="button"], input[type="submit"], input[type="button"], .cursor-pointer'
      )

      elements.forEach((el) => {
        el.addEventListener("mouseenter", () => setIsPointer(true))
        el.addEventListener("mouseleave", () => setIsPointer(false))
      })
    }

    // Event handlers
    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)
    const handleMouseEnter = () => setIsHidden(false)
    const handleMouseLeave = () => setIsHidden(true)

    // Set up event listeners
    document.addEventListener("mousemove", moveCursor)
    document.addEventListener("mousedown", handleMouseDown)
    document.addEventListener("mouseup", handleMouseUp)
    document.addEventListener("mouseenter", handleMouseEnter)
    document.addEventListener("mouseleave", handleMouseLeave)

    // Initial setup for pointer elements
    handlePointerElements()

    // Watch for DOM changes to detect new pointer elements
    const observer = new MutationObserver(handlePointerElements)
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      // Clean up event listeners
      document.removeEventListener("mousemove", moveCursor)
      document.removeEventListener("mousedown", handleMouseDown)
      document.removeEventListener("mouseup", handleMouseUp)
      document.removeEventListener("mouseenter", handleMouseEnter)
      document.removeEventListener("mouseleave", handleMouseLeave)
      observer.disconnect()
    }
  }, [])

  // Don't render on server
  if (typeof window === "undefined") return null

  return (
    <>
      {/* Main cursor dot */}
      <div className={`fixed pointer-events-none z-[9999] transition-opacity duration-300 ${
          isHidden ? "opacity-0" : "opacity-100"
        }`} style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: "translate(-50%, -50%)",
        }}>
        <div className={`relative rounded-full mix-blend-difference transition-all duration-150 ${
            isPointer ? "bg-white w-5 h-5 scale-150" : "bg-white w-3 h-3"
          } ${isClicking ? "scale-75" : ""}`}/>
      </div>

      {/* Circular follower */}
      <div
        className={`fixed pointer-events-none z-[9998] transition-all duration-300 ${
          isHidden ? "opacity-0" : "opacity-100"
        }`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${isPointer ? 1.5 : 1})`,
        }}
      >
        <div
          className={`rounded-full border border-white transition-all duration-300 ${
            isPointer ? "w-8 h-8 opacity-50" : "w-10 h-10 opacity-30"
          } ${isClicking ? "scale-90" : ""}`}
        />
      </div>
    </>
  )
}