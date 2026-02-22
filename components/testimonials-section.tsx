"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { motion } from "framer-motion"
import { siteData } from "@/lib/data"

export default function TestimonialsSection() {
  const { testimonials } = siteData
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoplay, setIsAutoplay] = useState(testimonials.autoplay)
  const autoplayTimerRef = useRef<NodeJS.Timeout | null>(null)

  const totalSlides = testimonials.items.length

  // Handle autoplay
  useEffect(() => {
    if (isAutoplay && testimonials.autoplay) {
      autoplayTimerRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides)
      }, testimonials.autoplaySpeed || 5000)
    }

    return () => {
      if (autoplayTimerRef.current) {
        clearInterval(autoplayTimerRef.current)
      }
    }
  }, [isAutoplay, totalSlides, testimonials.autoplay, testimonials.autoplaySpeed])

  // Pause autoplay on hover
  const pauseAutoplay = () => setIsAutoplay(false)
  const resumeAutoplay = () => setIsAutoplay(testimonials.autoplay)

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    // Reset autoplay timer when manually changing slides
    if (autoplayTimerRef.current) {
      clearInterval(autoplayTimerRef.current)
      if (isAutoplay) {
        autoplayTimerRef.current = setInterval(() => {
          setCurrentSlide((prev) => (prev + 1) % totalSlides)
        }, testimonials.autoplaySpeed || 5000)
      }
    }
  }

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides)
  }

  if (!testimonials.enabled || testimonials.items.length === 0) return null

  return (
    <section
      className={`${testimonials.backgroundColor} ${testimonials.sectionPadding}`}
      onMouseEnter={pauseAutoplay}
      onMouseLeave={resumeAutoplay}
    >
      <div className="container mx-auto px-4">
        {/* Section heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {testimonials.heading.topText && (
            <h2 className="text-orange-400 font-semibold mb-2">{testimonials.heading.topText}</h2>
          )}
          <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white relative inline-block">
            {testimonials.heading.mainText}
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-orange-400"></span>
          </h3>
          {testimonials.heading.description && (
            <p className="text-white/80 max-w-2xl mx-auto mt-6 text-lg">{testimonials.heading.description}</p>
          )}
        </motion.div>

        {/* Testimonials carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Navigation arrows */}
          {testimonials.showArrows && (
            <>
              <div className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-12 z-10">
                <button
                  onClick={goToPrevSlide}
                  className="bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 p-3 rounded-full shadow-lg transition-all duration-300"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                </button>
              </div>
              <div className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-12 z-10">
                <button
                  onClick={goToNextSlide}
                  className="bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 p-3 rounded-full shadow-lg transition-all duration-300"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                </button>
              </div>
            </>
          )}

          {/* Testimonial card */}
          <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-xl">
            <div className="absolute top-0 left-0 w-24 h-24 bg-orange-100 dark:bg-teal-900/30 rounded-br-3xl z-0"></div>
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-orange-100 dark:bg-blue-900/30 rounded-tl-3xl z-0"></div>

            <div className="relative z-10 p-8 md:p-12">
              {testimonials.items.map((testimonial, index) => (
                <div
                  key={testimonial.id || index}
                  className={`transition-opacity duration-500 ${
                    currentSlide === index ? "block opacity-100" : "hidden opacity-0"
                  }`}
                >
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="relative w-32 h-32 md:w-40 md:h-40 flex-shrink-0">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-500 to-blue-500 blur-md opacity-50"></div>
                      <img
                        src={testimonial.image || "/placeholder.svg?height=160&width=160"}
                        alt={testimonial.name}
                        className="relative w-full h-full object-cover rounded-full border-4 border-white dark:border-gray-800"
                      />
                    </div>

                    <div className="flex-1 text-center md:text-left">
                      <div className="flex items-center justify-center md:justify-start mb-4">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`h-5 w-5 ${
                              i < (testimonial.rating || 5)
                                ? "text-yellow-500 fill-yellow-500"
                                : "text-gray-300 dark:text-gray-600"
                            }`}
                          />
                        ))}
                      </div>

                      <blockquote className="text-lg md:text-xl text-gray-700 dark:text-gray-300 italic mb-6">
                        "{testimonial.text}"
                      </blockquote>

                      <div>
                        <h4 className="text-xl font-bold">{testimonial.name}</h4>
                        <p className="text-orange-600 dark:text-orange-400">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots navigation */}
          {testimonials.showDots && (
            <div className="flex justify-center mt-8 gap-1">
              {testimonials.items.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full mx-1 transition-all duration-300 ${
                    currentSlide === index ? "bg-orange-600 dark:bg-orange-400 w-8" : "bg-gray-300 dark:bg-gray-700"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

