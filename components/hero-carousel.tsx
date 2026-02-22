"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { siteData } from "@/lib/data"

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const [showPopup, setShowPopup] = useState(false)

  // Get hero configuration from data.ts
  const { hero } = siteData
  const { slides, autoplay, autoplaySpeed, showArrows, showDots, overlay, height } = hero

  const next = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrent((current) => (current === slides.length - 1 ? 0 : current + 1))
    setTimeout(() => setIsAnimating(false), 500)
  }

  const prev = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrent((current) => (current === 0 ? slides.length - 1 : current - 1))
    setTimeout(() => setIsAnimating(false), 500)
  }

  const goToSlide = (index: number) => {
    if (isAnimating || current === index) return
    setIsAnimating(true)
    setCurrent(index)
    setTimeout(() => setIsAnimating(false), 500)
  }

  // Reset and restart the autoplay timer
  const resetAutoplayTimer = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }

    if (autoplay) {
      timeoutRef.current = setTimeout(next, autoplaySpeed || 1000)
    }
  }

  // Handle autoplay
  useEffect(() => {
    resetAutoplayTimer()

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [current, autoplay, autoplaySpeed])

  // Handle popup display
  useEffect(() => {
    const { popup } = siteData

    if (popup && popup.enabled) {
      // Check if popup should only be shown once per session
      if (popup.showOnce) {
        const popupShown = sessionStorage.getItem("popupShown")
        if (popupShown) return
      }

      // Set timeout to show popup after delay
      const popupTimeout = setTimeout(() => {
        setShowPopup(true)

        // Mark popup as shown in session storage
        if (popup.showOnce) {
          sessionStorage.setItem("popupShown", "true")
        }

        // Auto close if enabled
        if (popup.autoClose) {
          setTimeout(() => {
            setShowPopup(false)
          }, popup.autoCloseDelay || 10000)
        }
      }, popup.delay || 3000)

      return () => clearTimeout(popupTimeout)
    }
  }, [])

  const closePopup = () => {
    setShowPopup(false)
  }

  console.log(showPopup);

  // Get button style based on configuration
  const getButtonStyle = (style: string) => {
    switch (style) {
      case "primary":
        return "bg-orange-600 hover:bg-orange-800 text-white"
      case "secondary":
        return "bg-blue-600 hover:bg-blue-700 text-white"
      case "outline":
        return "bg-transparent border-2 border-white hover:bg-white/20 text-white"
      default:
        return "bg-teal-600 hover:bg-teal-700 text-white"
    }
  }

  // Helper function to get popup position class
  const getPopupPositionClass = (position: string) => {
    switch (position) {
      case "top":
        return "inset-x-0 top-4 flex justify-center"
      case "bottom":
        return "inset-x-0 bottom-4 flex justify-center"
      case "top-left":
        return "top-4 left-4"
      case "top-right":
        return "top-4 right-4"
      case "bottom-left":
        return "bottom-4 left-4"
      case "bottom-right":
        return "bottom-4 right-4"
      case "center":
      default:
        return "inset-0 flex items-center justify-center"
    }
  }

  // Helper function to get animation class
  const getPopupAnimationClass = (animation: string) => {
    switch (animation) {
      case "slide":
        return "animate-in slide-in-from-bottom duration-300"
      case "zoom":
        return "animate-in zoom-in-50 duration-300"
      case "fade":
      default:
        return "animate-in fade-in duration-300"
    }
  }

  if (!hero.enabled || slides.length === 0) {
    return null
  }


  console.log("1111",slides)
  return (
    <div className={`relative ${height} overflow-hidden  h-screen`}>
      {/* Slides */}
      <div className="relative h-full w-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src={slide.image || "/placeholder.svg?height=600&width=1200"}
                alt={slide.title}
                fill
                className="object-cover"
                priority={index === 0}
              />

              {/* Overlay */}
              {overlay.enabled && (
                <div
                  className="absolute inset-0"
                  style={{
                    background: overlay.gradient || overlay.color,
                  }}
                ></div>
              )}
            </div>

            {/* Content */}
            <div className="relative z-10 container h-full flex items-center">
              <div
                className={`max-w-3xl ${
                  slide.alignment === "center"
                    ? "mx-auto text-center"
                    : slide.alignment === "right"
                      ? "ml-auto text-right"
                      : "mr-auto text-left"
                }`}
              >
                {slide.subtitle && (
                  <div
                    className="inline-block px-4 py-1.5 bg-white/20 text-white rounded-full text-sm font-medium mb-4 animate-in fade-in slide-in-from-bottom"
                    style={{ animationDelay: "200ms" }}
                  >
                    {slide.subtitle}
                  </div>
                )}

                <h1
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-in fade-in slide-in-from-bottom"
                  style={{ animationDelay: "300ms" }}
                >
                  {slide.title}
                </h1>

                {slide.description && (
                  <p
                    className="text-lg md:text-xl text-white/90 mb-8 animate-in fade-in slide-in-from-bottom"
                    style={{ animationDelay: "400ms" }}
                  >
                    {slide.description}
                  </p>
                )}

                {slide.buttons && slide.buttons.length > 0 && (
                  <div
                    className="flex flex-wrap gap-4 animate-in fade-in slide-in-from-bottom"
                    style={{ animationDelay: "500ms" }}
                  >
                    {slide.buttons.map((button, idx) => (
                      <Button key={idx} className={`${getButtonStyle(button.style)} px-6 py-3 h-auto text-lg`} asChild>
                        <a href={button.url}>{button.text}</a>
                      </Button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      {showArrows && slides.length > 1 && (
        <>
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
            onClick={prev}
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
            onClick={next}
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </>
      )}

      {/* Dots */}
      {showDots && slides.length > 1 && (
        <div className="absolute bottom-6 left-0 right-0 z-20 flex justify-center gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all ${
                index === current ? "bg-white w-8" : "bg-white/50 hover:bg-white/80"
              }`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Admission Popup */}
      {showPopup && siteData.popup && siteData.popup.enabled && (
        <div
          className={`fixed z-[9999] ${
            siteData.popup.type === "modal"
              ? "inset-0 flex items-center justify-center bg-black/50"
              : siteData.popup.type === "banner"
                ? "inset-x-0 top-0"
                : getPopupPositionClass(siteData.popup.position)
          }`}
        >
          <div
            className={`${
              siteData.popup.type === "modal"
                ? "w-full max-w-lg rounded-lg overflow-hidden shadow-xl"
                : siteData.popup.type === "banner"
                  ? "w-full"
                  : "w-80 rounded-lg overflow-hidden shadow-xl"
            } ${getPopupAnimationClass(siteData.popup.animation)}`}
            style={{
              backgroundColor: siteData.popup.backgroundColor || "#FDF6EC",
              color: siteData.popup.textColor || "#333333",
            }}
          >
            {/* Close button */}
            {siteData.popup.closeButton && (
              <button
                onClick={closePopup}
                className="absolute top-2 right-2 p-1 rounded-full bg-gray-200/80 hover:bg-gray-300/80 transition-colors"
                aria-label="Close popup"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            )}

            <div className="flex flex-col md:flex-row">
              {/* Image */}
              {siteData.popup.image && siteData.popup.image.enabled && (
                <div className="relative">
                  <Image
                    src={siteData.popup.image.src || "/placeholder.svg?height=200&width=300"}
                    alt={siteData.popup.image.alt || "Popup image"}
                    width={siteData.popup.image.width || 300}
                    height={siteData.popup.image.height || 200}
                    className="object-cover"
                  />
                </div>
              )}

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{siteData.popup.title}</h3>
                <p className="mb-4">{siteData.popup.content}</p>

                {/* Buttons */}
                {siteData.popup.buttons && siteData.popup.buttons.length > 0 && (
                  <div className="flex flex-wrap gap-3">
                    {siteData.popup.buttons.map((button, idx) => (
                      <Button
                        key={idx}
                        asChild
                        className="px-4 py-2 h-auto"
                        style={{
                          backgroundColor: button.backgroundColor || "#F5A623",
                          color: button.textColor || "white",
                          border: button.style === "outline" ? "2px solid" : "none",
                        }}
                        onClick={() => button.closeOnClick && closePopup()}
                      >
                        <a href={button.url}>{button.text}</a>
                      </Button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

