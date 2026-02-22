"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { siteData } from "@/lib/data"

interface PageHeaderProps {
  pageKey: "about" | "courses" | "team" | "testimonial" | "contact" | "applyNow"
}

export default function PageHeader({ pageKey }: PageHeaderProps) {
  // Get page header configuration from data.ts
  const { pageHeaders } = siteData
  const { height, backgroundColor, textColor, overlay } = pageHeaders
  console.log("bgColor", backgroundColor)
  const pageInfo = pageHeaders[pageKey]

  return (
    <div className={`relative ${height} `} style={{ backgroundColor: backgroundColor }}>
      
      {overlay.enabled && (
        <div className={`absolute inset-0 ${overlay.opacity}`}>
          <Image src={overlay.image || "/placeholder.svg"} alt="Background pattern" fill className="object-cover" />
        </div>
      )}
      <div className={`container h-full flex flex-col justify-center items-center ${textColor} relative z-10`}>
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {pageInfo.title}
        </motion.h1>
        <motion.div
          className="flex items-center space-x-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {pageInfo.breadcrumbs.map((item, index) => (
            <div key={index} className="flex items-center">
              {index > 0 && <span className="mx-2">/</span>}
              <a
                href={item.url}
                className={`hover:text-white/80 transition-colors ${item.active ? "font-semibold" : "text-white/80"}`}
              >
                {item.name}
              </a>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

